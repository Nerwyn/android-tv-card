import packageInfo from '../package.json';

import { LitElement, TemplateResult, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { HomeAssistant } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';
import { load } from 'js-yaml';

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

	updateElementConfig(actions: IElementConfig, isDefault: boolean) {
		if (!Object.keys(actions).length) {
			return actions;
		}

		const updatedActions = structuredClone(actions);
		for (const actionType of ActionTypes) {
			if (updatedActions[actionType]) {
				const action = updatedActions[actionType] ?? ({} as IAction);

				switch (action.action) {
					case 'keyboard':
					case 'textbox':
					case 'search':
						action.keyboard_id =
							action.keyboard_id ?? this.config.keyboard_id;
						action.media_player_id =
							action.media_player_id ??
							this.config.media_player_id;
					// falls through
					case 'key':
					case 'source':
						action.remote_id =
							action.remote_id ?? this.config.remote_id;
						action.platform =
							action.platform ?? this.config.platform;
						break;
					case 'perform-action': {
						if (isDefault) {
							const [domain, _service] = (
								action.perform_action ?? ''
							).split('.');
							const target = action.target ?? ({} as ITarget);
							if (
								!target.entity_id &&
								!target.device_id &&
								!target.area_id &&
								!target.label_id
							) {
								switch (domain) {
									case 'remote':
										target.entity_id =
											this.config.remote_id;
										break;
									case 'media_player':
									case 'kodi':
									case 'denonavr':
									case 'webos':
										target.entity_id =
											this.config.media_player_id;
										break;
									default:
										target.entity_id =
											updatedActions.entity_id;
										break;
								}
								break;
							}
							action.target = target;
						}
						break;
					}
					default:
						break;
				}

				updatedActions[actionType] = action;
			}
		}

		// Set haptics if defined globally
		updatedActions.haptics =
			updatedActions.haptics ?? this.config.haptics ?? true;

		// Set hold time if defined globally
		if (this.config.hold_time) {
			if (updatedActions.hold_action) {
				updatedActions.hold_action.hold_time =
					updatedActions.hold_action?.hold_time ??
					this.config.hold_time ??
					HOLD_TIME;
			}
			if (updatedActions.multi_hold_action) {
				updatedActions.multi_hold_action.hold_time =
					updatedActions.multi_hold_action?.hold_time ??
					this.config.hold_time ??
					HOLD_TIME;
			}
		}

		// Set repeat delay if defined globally
		if (this.config.repeat_delay) {
			if (updatedActions.hold_action?.action == 'repeat') {
				updatedActions.hold_action.repeat_delay =
					updatedActions.hold_action.repeat_delay ??
					this.config.repeat_delay ??
					REPEAT_DELAY;
			}
			if (
				updatedActions.multi_hold_action &&
				updatedActions.multi_hold_action?.action == 'repeat'
			) {
				updatedActions.multi_hold_action.repeat_delay =
					updatedActions.multi_hold_action.repeat_delay ??
					this.config.repeat_delay ??
					REPEAT_DELAY;
			}
		}

		// Set double tap window if defined globally
		if (this.config.double_tap_window) {
			if (updatedActions.double_tap_action) {
				updatedActions.double_tap_action.double_tap_window =
					updatedActions.double_tap_action?.double_tap_window ??
					this.config.double_tap_window ??
					DOUBLE_TAP_WINDOW;
			}
			if (updatedActions.multi_double_tap_action) {
				updatedActions.multi_double_tap_action.double_tap_window =
					updatedActions.multi_double_tap_action.double_tap_window ??
					this.config.double_tap_window ??
					DOUBLE_TAP_WINDOW;
			}
		}

		// Update touchpad directions
		if (updatedActions.type == 'touchpad') {
			for (const direction of DirectionActions) {
				updatedActions[direction] = this.updateElementConfig(
					(updatedActions[direction] ?? {}) as IElementConfig,
					isDefault,
				);
			}
		}

		// Set default slider target to media player ID
		if (
			isDefault &&
			updatedActions.type == 'slider' &&
			this.config.media_player_id
		) {
			updatedActions.entity_id = this.config.media_player_id;
			const tapAction = updatedActions.tap_action ?? ({} as IAction);
			const target = tapAction.target ?? ({} as ITarget);
			target.entity_id = this.config.media_player_id;
			tapAction.target = target;
			updatedActions.tap_action = tapAction;
		}

		return updatedActions;
	}

	getElementConfig(action: string): IElementConfig {
		let customActionsList = this.config.custom_actions;
		if (!Array.isArray(customActionsList)) {
			customActionsList = [];
		}
		const customActions = customActionsList.filter(
			(customActions) => customActions.name == action,
		)[0];
		if (customActions) {
			if (
				customActions.autofill_entity_id ??
				this.config.autofill_entity_id ??
				AUTOFILL
			) {
				return this.updateElementConfig(customActions, false);
			}
			return customActions;
		}

		const defaultActions = this.updateElementConfig(
			this.DEFAULT_ACTIONS.filter(
				(defaultActions) => defaultActions.name == action,
			)[0] ?? {},
			true,
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

	buildPad(buttons: string[]): TemplateResult {
		this.nPads++;
		const id = `pad-${this.nPads}`;
		return html`
			<div
				class="button-pad"
				id="${id}"
				title="${this.editMode ? `#${id}` : ''}"
			>
				${buttons.map((b) => this.buildButton(b))}
			</div>
		`;
	}

	buildButton(elementName: string, actions?: IElementConfig): TemplateResult {
		if (!actions) {
			actions = this.getElementConfig(elementName);
		}

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
			this.buildButton('volume_down'),
			this.buildButton('volume_mute'),
			this.buildButton('volume_up'),
		];
	}

	buildNavButtons(): TemplateResult {
		return this.buildColumn([
			this.buildRow([this.buildButton('up')]),
			this.buildRow([
				this.buildButton('left'),
				this.buildButton('center'),
				this.buildButton('right'),
			]),
			this.buildRow([this.buildButton('down')]),
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
				// Special shortcuts
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
					case 'dpad':
						rowContent.push(
							this.buildPad([
								'',
								'up',
								'',
								'left',
								'center',
								'right',
								'',
								'down',
								'',
							]),
						);
						break;
					case 'numpad':
						rowContent.push(
							this.buildPad([
								'n7',
								'n8',
								'n9',
								'n4',
								'n5',
								'n6',
								'n1',
								'n2',
								'n3',
							]),
						);
						break;
					case 'xpad':
						rowContent.push(
							this.buildPad([
								'',
								'y',
								'',
								'x',
								'',
								'b',
								'',
								'a',
								'',
							]),
						);
						break;
					case 'npad':
						rowContent.push(
							this.buildPad([
								'',
								'x',
								'',
								'y',
								'',
								'a',
								'',
								'b',
								'',
							]),
						);
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

	render() {
		if (!this.config || !this.hass) {
			return html``;
		}

		this.editMode = Boolean(
			document
				.querySelector('home-assistant')
				?.shadowRoot?.querySelector('hui-dialog-edit-card')
				?.shadowRoot?.querySelector('ha-dialog'),
		);

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
