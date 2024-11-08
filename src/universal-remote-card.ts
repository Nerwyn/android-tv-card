import packageInfo from '../package.json';

import { LitElement, TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { renderTemplate } from 'ha-nunjucks';
import { load } from 'js-yaml';
import { HomeAssistant } from './models/interfaces';

import {
	ActionTypes,
	DirectionActions,
	IAction,
	IConfig,
	IElementConfig,
	ITarget,
	Platform,
} from './models/interfaces';

import { UniversalRemoteCardEditor } from './universal-remote-card-editor';
import { getDefaultActions } from './utils';

import './classes/keyboard-dialog';
import './classes/remote-button';
import './classes/remote-slider';
import './classes/remote-touchpad';
import {
	AUTOFILL,
	DOUBLE_TAP_WINDOW,
	HOLD_TIME,
	REPEAT_DELAY,
} from './models/constants';

console.info(
	`%c UNIVERSAL-REMOTE-CARD v${packageInfo.version}`,
	'color: white; font-weight: bold; background: green',
);

class UniversalRemoteCard extends LitElement {
	@property() hass!: HomeAssistant;
	@property() config!: IConfig;

	DEFAULT_ACTIONS: IElementConfig[] = [];

	nRows: number = 0;
	nColumns: number = 0;
	nPads: number = 0;
	editMode: boolean = false;
	rtl: boolean = false;

	customActionsFromFile?: IElementConfig[];

	static get properties() {
		return {
			hass: {},
			config: {},
		};
	}

	static getConfigElement() {
		return document.createElement('universal-remote-card-editor');
	}

	static getStubConfig() {
		return {
			type: 'custom:android-tv-card',
			rows: [],
		};
	}

	getCardSize() {
		let numRows = this.config.rows?.length ?? 0;
		if (this.config.title) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: IConfig) {
		if (!config) {
			throw new Error('Invalid configuration');
		}
		this.config = config;
	}

	updateElementConfig(element: IElementConfig) {
		if (!Object.keys(element).length) {
			return element;
		}

		const updatedElement = structuredClone(element);
		const context = {
			config: {
				...this.config,
				entity: renderTemplate(
					this.hass,
					updatedElement.entity_id ??
						this.config.remote_id ??
						this.config.media_player_id ??
						this.config.keyboard_id ??
						'',
				),
				attribute: renderTemplate(
					this.hass,
					updatedElement.value_attribute ?? 'state',
				),
			},
		};
		for (const actionType of ActionTypes) {
			if (updatedElement[actionType]) {
				const action = updatedElement[actionType] ?? ({} as IAction);

				switch (renderTemplate(this.hass, action.action, context)) {
					case 'keyboard':
					case 'textbox':
					case 'search':
						action.keyboard_id =
							action.keyboard_id ?? this.config.keyboard_id;
					// falls through
					case 'key':
					case 'source':
						action.remote_id =
							action.remote_id ?? this.config.remote_id;
						action.media_player_id =
							action.media_player_id ??
							this.config.media_player_id;
						action.platform =
							action.platform ?? this.config.platform;
						break;
					case 'perform-action': {
						const [domain, _service] = (
							renderTemplate(
								this.hass,
								action.perform_action ?? '',
								context,
							) as string
						).split('.');
						const target = action.target ?? ({} as ITarget);
						if (
							!target.entity_id &&
							!target.device_id &&
							!target.area_id &&
							!target.label_id
						) {
							const entity = renderTemplate(
								this.hass,
								updatedElement.entity_id ?? '',
								context,
							) as string;
							switch (domain) {
								case 'remote':
									target.entity_id = entity.startsWith(
										'remote',
									)
										? updatedElement.entity_id
										: this.config.remote_id;
									break;
								case 'media_player':
								case 'kodi':
								case 'denonavr':
								case 'webostv':
									target.entity_id = entity.startsWith(
										'media_player',
									)
										? updatedElement.entity_id
										: this.config.media_player_id;
									break;
								default:
									target.entity_id = updatedElement.entity_id;
									break;
							}
						}
						action.target = target;
						break;
					}
					default:
						break;
				}

				updatedElement[actionType] = action;
			}
		}

		// Set haptics if defined globally
		updatedElement.haptics =
			updatedElement.haptics ?? this.config.haptics ?? true;

		// Set double tap window if defined globally
		if (this.config.double_tap_window) {
			if (updatedElement.double_tap_action) {
				updatedElement.double_tap_action.double_tap_window =
					updatedElement.double_tap_action?.double_tap_window ??
					this.config.double_tap_window ??
					DOUBLE_TAP_WINDOW;
			}
			if (updatedElement.multi_double_tap_action) {
				updatedElement.multi_double_tap_action.double_tap_window =
					updatedElement.multi_double_tap_action.double_tap_window ??
					this.config.double_tap_window ??
					DOUBLE_TAP_WINDOW;
			}
		}

		// Set hold time if defined globally or if double tap action is defined
		if (
			this.config.hold_time ||
			updatedElement.double_tap_action ||
			updatedElement.multi_double_tap_action
		) {
			updatedElement.hold_action =
				updatedElement.hold_action ?? ({} as IAction);
			updatedElement.hold_action.hold_time =
				updatedElement.hold_action?.hold_time ??
				this.config.hold_time ??
				HOLD_TIME;

			updatedElement.multi_hold_action =
				updatedElement.multi_hold_action ?? ({} as IAction);
			updatedElement.multi_hold_action.hold_time =
				updatedElement.multi_hold_action?.hold_time ??
				this.config.hold_time ??
				HOLD_TIME;
		}

		// Set repeat delay if defined globally
		if (this.config.repeat_delay) {
			if (updatedElement.hold_action?.action == 'repeat') {
				updatedElement.hold_action.repeat_delay =
					updatedElement.hold_action.repeat_delay ??
					this.config.repeat_delay ??
					REPEAT_DELAY;
			}
			if (
				updatedElement.multi_hold_action &&
				updatedElement.multi_hold_action?.action == 'repeat'
			) {
				updatedElement.multi_hold_action.repeat_delay =
					updatedElement.multi_hold_action.repeat_delay ??
					this.config.repeat_delay ??
					REPEAT_DELAY;
			}
		}

		// Set element entity
		const elementType = renderTemplate(
			this.hass,
			updatedElement.type,
			context,
		);
		if (
			elementType == 'slider' &&
			renderTemplate(this.hass, updatedElement.name, context) == 'slider'
		) {
			updatedElement.entity_id =
				updatedElement.entity_id ?? this.config.media_player_id;
		} else {
			updatedElement.entity_id =
				updatedElement.entity_id ??
				(Array.isArray(updatedElement.tap_action?.target?.entity_id)
					? updatedElement.tap_action?.target?.entity_id?.[0]
					: (updatedElement.tap_action?.target
							?.entity_id as string)) ??
				this.config.remote_id ??
				this.config.media_player_id ??
				this.config.keyboard_id;
		}

		// Update touchpad directions
		if (elementType == 'touchpad') {
			for (const direction of DirectionActions) {
				(updatedElement[direction] as IElementConfig).entity_id =
					updatedElement.entity_id;
				(updatedElement[direction] as IElementConfig).value_attribute =
					updatedElement.value_attribute;
				updatedElement[direction] = this.updateElementConfig(
					(updatedElement[direction] ?? {}) as IElementConfig,
				);
			}
		}

		return updatedElement;
	}

	getElementConfig(name: string): IElementConfig {
		const customActionsList = [
			...(this.config.custom_actions ?? []),
			...(this.customActionsFromFile ?? []),
		];
		const customActions = customActionsList.filter(
			(customActions) => customActions.name == name,
		)[0];
		if (customActions) {
			if (
				customActions.autofill_entity_id ??
				this.config.autofill_entity_id ??
				AUTOFILL
			) {
				return this.updateElementConfig(customActions);
			}
			return customActions;
		}

		const defaultActions = this.updateElementConfig(
			this.DEFAULT_ACTIONS.filter(
				(defaultActions) => defaultActions.name == name,
			)[0] ?? {},
		);
		return defaultActions;
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		this.nRows++;
		const id = `row-${this.nRows}`;
		return html`
			<div
				class="row"
				id="${id}"
				title="${this.editMode ? `#${id}` : ''}"
			>
				${content}
			</div>
		`;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		this.nColumns++;
		const id = `column-${this.nColumns}`;
		return html`
			<div
				class="column"
				id="${id}"
				title="${this.editMode ? `#${id}` : ''}"
			>
				${content}
			</div>
		`;
	}

	buildButtonPad(
		elementName: string,
		actions: IElementConfig,
	): TemplateResult {
		this.nPads++;
		const id = `pad-${this.nPads}`;
		const buttons = actions.buttons ?? [];
		// prettier-ignore
		return html`
			<div
				class="button-pad"
				id="${id}"
				title="${elementName}${this.editMode ? ` #${id}` : ''}"
			>
				${buttons.map((b) => this.buildButton(b, this.getElementConfig(b)))}
			</div>
		`;
	}

	buildButton(elementName: string, actions: IElementConfig): TemplateResult {
		if (!Object.keys(actions).length) {
			return html`<div class="empty-button"></div>`;
		}
		return html`<remote-button
			title="${elementName}"
			.hass=${this.hass}
			.config=${actions}
			.icons=${this.config.custom_icons}
		></remote-button>`;
	}

	buildSlider(elementName: string, actions: IElementConfig): TemplateResult {
		return html`<remote-slider
			title="${elementName}"
			.hass=${this.hass}
			.config=${actions}
			.icons=${this.config.custom_icons}
		></remote-slider>`;
	}

	buildTouchpad(
		elementName: string,
		actions: IElementConfig,
	): TemplateResult {
		return html`<remote-touchpad
			title="${elementName}"
			.hass=${this.hass}
			.config=${actions}
			.icons=${this.config.custom_icons}
		></remote-touchpad>`;
	}

	buildVolumeButtons(): TemplateResult[] {
		return [
			this.buildButton(
				'volume_down',
				this.getElementConfig('volume_down'),
			),
			this.buildButton(
				'volume_mute',
				this.getElementConfig('volume_mute'),
			),
			this.buildButton('volume_up', this.getElementConfig('volume_up')),
		];
	}

	buildNavButtons(): TemplateResult {
		const centerRow = [
			this.buildButton('left', this.getElementConfig('left')),
			this.buildButton('center', this.getElementConfig('center')),
			this.buildButton('right', this.getElementConfig('right')),
		];
		if (this.rtl) {
			centerRow.reverse();
		}
		return this.buildColumn([
			this.buildRow([
				this.buildButton('up', this.getElementConfig('up')),
			]),
			this.buildRow(centerRow),
			this.buildRow([
				this.buildButton('down', this.getElementConfig('down')),
			]),
		]);
	}

	buildElements(
		row: (string | string[])[],
		isColumn: boolean = false,
		context: object = {},
	) {
		if (typeof row == 'string') {
			row = [row];
		}
		const rowContent: TemplateResult[] = [];
		for (let elementName of row) {
			elementName = renderTemplate(
				this.hass,
				elementName as string,
				context,
			) as string;
			if (typeof elementName == 'string' && elementName.includes('- ')) {
				elementName = load(elementName) as string;
			}
			if (typeof elementName == 'object' && elementName != null) {
				rowContent.push(
					this.buildElements(elementName, !isColumn, context),
				);
			} else {
				// Legacy shortcuts
				switch (elementName) {
					case 'volume_buttons': {
						const volumeButtons = this.buildVolumeButtons();
						if (isColumn) {
							volumeButtons.reverse();
						}
						rowContent.push(...volumeButtons);
						break;
					}
					case 'navigation_buttons':
						rowContent.push(this.buildNavButtons());
						break;
					default: {
						const actions = this.getElementConfig(elementName);
						switch (actions.type) {
							case 'slider':
								rowContent.push(
									this.buildSlider(elementName, actions),
								);
								break;

							case 'touchpad':
								rowContent.push(
									this.buildTouchpad(elementName, actions),
								);
								break;
							case 'button pad':
								rowContent.push(
									this.buildButtonPad(elementName, actions),
								);
								break;
							case 'button':
							default:
								rowContent.push(
									this.buildButton(elementName, actions),
								);
								break;
						}
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(rowContent)
			: this.buildRow(rowContent);
	}

	buildDialog() {
		return html`<keyboard-dialog .hass=${this.hass}></keyboard-dialog>`;
	}

	fetchCustomActionsFromFile() {
		if (!this.customActionsFromFile && this.config.custom_actions_file) {
			const filename = `${
				this.config.custom_actions_file.startsWith('/') ? '' : '/'
			}${this.config.custom_actions_file}`;
			try {
				const extension = filename.split('.').pop()?.toLowerCase();
				switch (extension) {
					case 'json':
						this.hass
							.fetchWithAuth(filename)
							.then((r) => r.json())
							.then((json) => {
								this.customActionsFromFile = json;
								this.requestUpdate();
							});
						break;
					case 'yaml':
					case 'yml':
					default:
						this.hass
							.fetchWithAuth(filename)
							.then((r) => r.text())
							.then((text) => {
								this.customActionsFromFile = load(
									text,
								) as IElementConfig[];
								this.requestUpdate();
							});
						break;
				}
			} catch (e) {
				console.error(
					`File ${this.config.custom_actions_file} is not a valid JSON or YAML\n${e}`,
				);
			}
		}
	}

	render() {
		if (!this.config || !this.hass) {
			return html``;
		}

		this.fetchCustomActionsFromFile();

		this.editMode = Boolean(
			document
				.querySelector('home-assistant')
				?.shadowRoot?.querySelector('hui-dialog-edit-card')
				?.shadowRoot?.querySelector('ha-dialog'),
		);
		this.rtl = getComputedStyle(this).direction == 'rtl';

		const context = {
			config: {
				...this.config,
				entity: renderTemplate(
					this.hass,
					this.config.remote_id ??
						this.config.media_player_id ??
						this.config.keyboard_id ??
						'',
				),
				attribute: 'state',
			},
		};

		const platform = renderTemplate(
			this.hass,
			this.config.platform ?? 'Android TV',
			context,
		) as Platform;

		const [defaultKeys, defaultSources] = getDefaultActions(platform);
		this.DEFAULT_ACTIONS = [...defaultKeys, ...defaultSources];

		const content: TemplateResult[] = [];

		this.nRows = 0;
		this.nColumns = 0;
		this.nPads = 0;
		for (const row of this.config.rows ?? []) {
			const rowContent = this.buildElements(
				row as string[],
				false,
				context,
			);
			content.push(rowContent);
		}

		const styles = this.config.styles
			? html`
					<style>
						${(
							renderTemplate(
								this.hass,
								this.config.styles,
								context,
							) as string
						)
							.replace(/!important/g, '')
							.replace(/;/g, ' !important;')}
					</style>
			  `
			: '';

		return html`<ha-card
			class="${this.editMode ? ' edit-mode' : ''}"
			.header="${renderTemplate(
				this.hass,
				this.config.title as string,
				context,
			)}"
			>${content}${this.buildDialog()}${styles}</ha-card
		>`;
	}

	static get styles() {
		return css`
			ha-card {
				padding: 12px;

				-webkit-tap-highlight-color: transparent;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				--md-ripple-hover-opacity: var(--ha-ripple-hover-opacity, 0.08);
				--md-ripple-pressed-opacity: var(
					--ha-ripple-pressed-opacity,
					0.12
				);
				--ha-ripple-color: var(--secondary-text-color);
				--mdc-ripple-hover-color: var(
					--ha-ripple-hover-color,
					var(--ha-ripple-color, var(--secondary-text-color))
				);
				--md-ripple-pressed-color: var(
					--ha-ripple-pressed-color,
					var(--ha-ripple-color, var(--secondary-text-color))
				);
			}

			.row {
				display: flex;
				flex-wrap: nowrap;
				flex-direction: row;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				flex: 1;
				padding: 4px;
				gap: 8px;
				justify-content: space-evenly;
				align-items: center;
			}
			.column {
				display: flex;
				flex-wrap: nowrap;
				flex-direction: column;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				flex: 1;
				padding: 4px;
				justify-content: space-evenly;
				align-items: center;
			}
			.edit-mode {
				outline: none;
			}
			@media (hover: hover) {
				.edit-mode :hover:not(:has(div:hover)) {
					outline: 1px dashed var(--red-color);
				}
			}

			.empty-button {
				width: var(--size, 48px);
				height: var(--size, 48px);
				position: relative;
			}
			.button-pad {
				display: grid;
				direction: ltr;
				grid-template-rows: repeat(3, var(--size, 48px));
				grid-template-columns: repeat(3, var(--size, 48px));
				grid-gap: 8px 16px;
			}
		`;
	}
}

customElements.define(
	'universal-remote-card-editor',
	UniversalRemoteCardEditor,
);
customElements.define('android-tv-card', UniversalRemoteCard); // Keep old name to not break old configs

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Universal Remote Card',
	description: 'Super customizable universal remote card',
});

if (!window.structuredClone) {
	window.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}
if (!window.performance) {
	window.performance = window.Date as unknown as Performance;
}
