import { version } from '../package.json';

import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { HomeAssistant, applyThemesOnElement } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';

import {
	IConfig,
	IActions,
	IAction,
	IData,
	DirectionAction,
	defaultKeys,
	defaultSources,
	ActionType,
} from './models';

import './classes/remote-button';
import './classes/remote-keyboard';
import './classes/remote-textbox';
import './classes/remote-search';
import './classes/remote-touchpad';
import './classes/remote-slider';

console.info(
	`%c ANDROID-TV-CARD v${version}`,
	'color: white; font-weight: bold; background: green',
);

class AndroidTVCard extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) private config!: IConfig;

	customActions: Record<string, IActions> = {};
	customIcons: Record<string, string> = {};

	static get properties() {
		return {
			hass: {},
			config: {},
		};
	}

	static getStubConfig() {
		return {
			type: 'custom:android-tv-card',
			rows: [],
		};
	}

	getCardSize() {
		let numRows = this.config.rows!.length;
		if ('title' in this.config) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: IConfig) {
		if (!config) {
			throw new Error('Invalid configuration');
		}
		config = structuredClone(config);
		config = { theme: 'default', ...config };

		config = this.setToggles(config);
		config = this.updateDeprecatedKeys(config);

		this.customActions = {
			...(config.custom_sources || {}),
			...(config.custom_keys || {}),
		};
		this.customIcons = config.custom_icons || {};

		await window.loadCardHelpers();

		this.config = config;
	}

	updateDeprecatedKeys(config: IConfig) {
		// Convert old root level key names to new
		if ('adb_id' in config && !('keyboard_id' in config)) {
			config.keyboard_id = (config as Record<string, string>).adb_id;
		}
		if ('media_player_id' in config && !('slider_id' in config)) {
			config.slider_id = (
				config as Record<string, string>
			).media_player_id;
		}
		if ('touchpad_height' in config) {
			if (!('touchpad_style' in config)) {
				config.touchpad_style = {};
			}
			if (!('height' in config.touchpad_style!)) {
				config.touchpad_style!.height = (
					config as Record<string, string>
				).touchpad_height;
			}
		}

		// Convert old _row keys into rows array
		if (!('rows' in config) || !(config.rows || []).length) {
			const rows: string[][] = [];
			const rowNames = Object.keys(config).filter((row) =>
				row.includes('_row'),
			);
			for (const name of rowNames) {
				let row = (config as Record<string, string[]>)[name];
				if (typeof row == 'string') {
					row = [row];
				}
				if (name == 'volume_row') {
					row = ['volume_' + row[0]];
				} else if (name == 'navigation_row') {
					row = ['navigation_' + row[0]];
				}
				rows.push(row);
			}
			config.rows = rows;
		}

		// Update custom keys and sources to Home Assistant actions format
		const customKeysSources = ['custom_keys', 'custom_sources'];
		for (const customKeysOrSources of customKeysSources) {
			// Check custom keys and custom sources arrays

			if (customKeysOrSources in config) {
				const customActions =
					config[
						customKeysOrSources as 'custom_keys' | 'custom_sources'
					];

				// For each custom key or source
				for (const customActionName in customActions) {
					const customAction = customActions[customActionName];

					// Copy action fields to tap_action
					const actionKeys = [
						'key',
						'source',
						'service',
						'service_data',
						'data',
						'target',
						'navigation_path',
						'navigation_replace',
						'url_path',
						'confirmation',
						'pipeline_id',
						'start_listening',
					];
					const tapAction =
						customAction.tap_action ?? ({} as IAction);
					let updateTapAction = false;
					for (const actionKey of actionKeys) {
						if (actionKey in customAction) {
							updateTapAction = true;
							(tapAction as unknown as Record<string, string>)[
								actionKey
							] = customAction[
								actionKey as keyof IActions
							] as string;
						}
					}
					if (updateTapAction) {
						customAction.tap_action = tapAction as IAction;
					}

					// For each type of action
					const actionTypes = [
						'tap_action',
						'hold_action',
						'double_tap_action',
					];
					for (const actionType of actionTypes) {
						if (actionType in customAction) {
							const action = customAction[
								actionType as keyof IActions
							] as IAction;
							if ('service' in action) {
								// Merge service_data, target, and data fields
								action.data = {
									...action.data,
									...(
										action as unknown as Record<
											string,
											IData | undefined
										>
									).service_data,
									...action.target,
								};
							}

							// Populate action field
							if (!('action' in action)) {
								if ('key' in action) {
									(action as IAction).action = 'key';
								} else if ('source' in action) {
									(action as IAction).action = 'source';
								} else if ('service' in action) {
									(action as IAction).action = 'call-service';
								} else if ('navigation_path' in action) {
									(action as IAction).action = 'navigate';
								} else if ('url_path' in action) {
									(action as IAction).action = 'url';
								} else if (
									'pipeline_id' in action ||
									'start_listening' in action
								) {
									(action as IAction).action = 'assist';
								} else {
									(action as IAction).action = 'none';
								}
							}
						}
					}
				}
			}
		}

		return config;
	}

	setToggles(config: IConfig): IConfig {
		// Set toggles to default values if not provided
		const toggles: IConfig = {
			enable_button_feedback: true,
			enable_touchpad_feedback: true,
			enable_double_click: false,
			enable_slider_feedback: true,
		};
		let toggle: keyof IConfig;
		for (toggle in toggles) {
			if (!(toggle in config)) {
				config[toggle] = toggles[toggle] as undefined;
			}
		}
		return config;
	}

	getActions(action: string): IActions {
		const defaultActions =
			defaultKeys[action] || defaultSources[action] || {};
		const actions = this.customActions[action] || defaultActions;

		if (!Object.keys(actions).length) {
			if (action == 'slider') {
				return {
					tap_action: {
						action: 'call-service',
						service: 'media_player.volume_set',
						data: {
							entity_id: this.config.slider_id!,
							volume_level: 'VALUE',
						},
					},
				};
			} else {
				return {} as IActions;
			}
		}

		// Get original icon if not redefined
		if (!(actions?.icon || actions.svg_path)) {
			actions.icon = defaultActions?.icon ?? undefined;
			actions.svg_path = defaultActions?.svg_path ?? undefined;
		}

		// Get original actions if not defined.
		const actionTypes: ActionType[] = [
			'tap_action',
			'hold_action',
			'double_tap_action',
		];
		for (const actionType of actionTypes) {
			if (!(actionType in actions) && actionType in defaultActions) {
				actions[actionType as ActionType] =
					defaultActions[actionType as ActionType];
			}
		}

		return actions;
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		return html` <div class="row">${content}</div> `;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		return html` <div class="column">${content}</div> `;
	}

	buildButton(elementName: string): TemplateResult {
		const actions = this.getActions(elementName);
		const style = {
			...this.config.button_style,
			...actions.style,
		};

		if (!Object.keys(actions).length) {
			return html`<div
				class="empty-button"
				style=${styleMap({ '--size': style['--size'] })}
			></div>`;
		}

		return html`<remote-button
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.actions=${actions}
			.actionKey="${elementName}"
			.customIcon=${this.customIcons[actions.icon ?? ''] ?? ''}
			._style=${style}
		/>`;
	}

	buildVolumeButtons(): TemplateResult[] {
		return [
			this.buildButton('volume_down'),
			this.buildButton('volume_mute'),
			this.buildButton('volume_up'),
		];
	}

	buildSlider(): TemplateResult {
		return html`<remote-slider
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_slider_feedback}
			.sliderId=${this.config.slider_id}
			.range=${this.config.slider_range ?? [0, 1]}
			.actions=${this.getActions('slider')}
			.sliderAttribute=${this.config.slider_attribute?.toLowerCase()}
			._style=${this.config.slider_style}
		/>`;
	}

	buildDPad(): TemplateResult[] {
		return [
			this.buildRow([this.buildButton('up')]),
			this.buildRow([
				this.buildButton('left'),
				this.buildButton('center'),
				this.buildButton('right'),
			]),
			this.buildRow([this.buildButton('down')]),
		];
	}

	buildTouchpad(): TemplateResult {
		// If still using old double tap toggle and key, map to center double tap action
		const centerActions = this.getActions('center');
		if (
			renderTemplate(
				this.hass,
				this.config.enable_double_click as unknown as string,
			) &&
			!('double_tap_action' in centerActions)
		) {
			const doubleTapKeycode =
				(renderTemplate(
					this.hass,
					this.config.double_click_keycode!,
				) as string) ?? 'back';
			const doubleTapAction = this.getActions(doubleTapKeycode);
			centerActions.double_tap_action = doubleTapAction.tap_action;
		}

		// If still using old long click key, map to center hold action
		if (
			renderTemplate(this.hass, this.config.long_click_keycode!) &&
			!('hold_action' in centerActions)
		) {
			const holdActionKeycode =
				(renderTemplate(
					this.hass,
					this.config.long_click_keycode!,
				) as string) ?? 'center';
			const holdAction = this.getActions(holdActionKeycode);
			centerActions.hold_action = holdAction.tap_action;
		}

		const directionActions: Record<DirectionAction, IActions> = {
			up: this.getActions('up'),
			down: this.getActions('down'),
			left: this.getActions('left'),
			right: this.getActions('right'),
		};

		return html`<remote-touchpad
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_touchpad_feedback}
			.remoteId=${this.config.remote_id}
			.enableDoubleClick=${this.config.enable_double_click}
			.actions=${centerActions}
			.directionActions=${directionActions}
			._style=${this.config.touchpad_style}
		/>`;
	}

	buildKeyboard(): TemplateResult {
		const actions = this.getActions('keyboard');

		const style = {
			...this.config.button_style,
			...actions.style,
		};
		return html`<remote-keyboard
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.actions=${actions}
			.actionKey="keyboard"
			.customIcon=${this.customIcons[actions.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			._style=${style}
		/>`;
	}

	buildTextbox(): TemplateResult {
		const actions = this.getActions('textbox');

		const style = {
			...this.config.button_style,
			...actions.style,
		};
		return html`<remote-textbox
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.actions=${actions}
			.actionKey="textbox"
			.customIcon=${this.customIcons[actions.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			._style=${style}
		/>`;
	}

	buildSearch(): TemplateResult {
		const actions = this.getActions('search');

		const style = {
			...this.config.button_style,
			...actions.style,
		};
		return html`<remote-search
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.actions=${actions}
			.actionKey="search"
			.customIcon=${this.customIcons[actions.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			._style=${style}
		/>`;
	}

	buildElements(row: (string | string[])[], isColumn: boolean = false) {
		if (typeof row == 'string') {
			row = [row];
		}
		const rowContent: TemplateResult[] = [];
		for (let elementName of row) {
			elementName = renderTemplate(
				this.hass,
				elementName as string,
			) as string;
			if (typeof elementName == 'object' && elementName != null) {
				rowContent.push(this.buildElements(elementName, !isColumn));
			} else {
				switch (elementName) {
					case 'vol_buttons':
					case 'volume_buttons': {
						const volumeButtons = this.buildVolumeButtons();
						if (isColumn) {
							volumeButtons.reverse();
						}
						rowContent.push(...volumeButtons);
						break;
					}
					case 'slider':
					case 'volume_slider': {
						rowContent.push(this.buildSlider());
						break;
					}

					case 'dpad':
					case 'd_pad':
					case 'direction_pad':
					case 'nav_buttons':
					case 'navigation_buttons': {
						rowContent.push(this.buildColumn(this.buildDPad()));
						break;
					}
					case 'touchpad':
					case 'nav_touchpad':
					case 'navigation_touchpad': {
						rowContent.push(this.buildTouchpad());
						break;
					}

					case 'keyboard': {
						rowContent.push(this.buildKeyboard());
						break;
					}

					case 'textbox': {
						rowContent.push(this.buildTextbox());
						break;
					}

					case 'search': {
						rowContent.push(this.buildSearch());
						break;
					}

					default: {
						rowContent.push(this.buildButton(elementName));
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(rowContent)
			: this.buildRow(rowContent);
	}

	render() {
		if (!this.config || !this.hass) {
			return html``;
		}

		const content: TemplateResult[] = [];

		for (const row of this.config.rows!) {
			const rowContent = this.buildElements(row as string[]);
			content.push(rowContent);
		}

		return html`<ha-card
			.header="${renderTemplate(this.hass, this.config.title as string)}"
			>${content}</ha-card
		>`;
	}

	static get styles() {
		return css`
			ha-card {
				padding: 12px;
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
			.empty-button {
				width: var(--size);
				height: var(--size);
				position: relative;
				--size: 48px;
			}
		`;
	}

	applyThemesOnElement(element: Element, themes: Themes, localTheme: string) {
		applyThemesOnElement(element, themes, localTheme);
	}
}

customElements.define('android-tv-card', AndroidTVCard);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Android TV Card',
	description: 'Remote for Android TV',
});
