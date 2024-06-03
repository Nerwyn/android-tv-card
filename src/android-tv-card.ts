import { version } from '../package.json';

import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { HomeAssistant } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';
import { load } from 'js-yaml';

import {
	IConfig,
	IActions,
	IAction,
	IData,
	DirectionAction,
	defaultKeys,
	defaultSources,
	ActionType,
	svg,
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
	@property({ attribute: false }) config!: IConfig;

	defaultActions: Record<string, IActions> = {};
	customActions: Record<string, IActions> = {};
	icons: Record<string, string> = {};

	nRows: number = 0;
	nColumns: number = 0;

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
		let numRows = this.config.rows?.length ?? 0;
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

		this.defaultActions = {
			...structuredClone(defaultSources),
			...structuredClone(defaultKeys),
		};
		this.customActions = config.custom_actions || {};
		if (this.customActions.slider) {
			this.customActions.slider = {
				...this.defaultActions.slider,
				...this.customActions.slider,
			};
		}
		if (config.slider_id) {
			this.customActions.slider.tap_action!.data!.entity_id =
				config.slider_id;
		}
		this.icons = {
			...structuredClone(svg),
			...config.custom_icons,
		};

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
			const style = config.touchpad_style ?? {};
			if (!('height' in style)) {
				style.height = (
					config as Record<string, string>
				).touchpad_height;
			}
			config.touchpad_style = style;
		}

		// Old haptic feedback toggle names
		if ('enable_button_feedback' in config) {
			if (!('button_haptics' in config)) {
				config.button_haptics = (config as Record<string, boolean>)[
					'enable_button_feedback'
				];
			}
		}
		if ('enable_touchpad_feedback' in config) {
			if (!('touchpad_haptics' in config)) {
				config.touchpad_haptics = (config as Record<string, boolean>)[
					'enable_touchpad_feedback'
				];
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

		// Combine custom actions, custom keys, and custom sources fields
		config.custom_actions = {
			...config.custom_actions,
			...(config['custom_keys' as keyof IConfig] as unknown as Record<
				string,
				IActions
			>[]),
			...(config['custom_sources' as keyof IConfig] as unknown as Record<
				string,
				IActions
			>[]),
		} as Record<string, IActions>;

		const customActions = config['custom_actions'];

		// For each custom key or source
		for (const customActionName in customActions) {
			const customAction = customActions[customActionName];

			// Copy svg_path to icon
			if ('svg_path' in customAction) {
				customAction.icon = customAction[
					'svg_path' as keyof IActions
				] as string;
			}

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
			const tapAction = customAction.tap_action ?? ({} as IAction);
			let updateTapAction = false;
			for (const actionKey of actionKeys) {
				if (actionKey in customAction) {
					updateTapAction = true;
					(tapAction as unknown as Record<string, string>)[
						actionKey
					] = customAction[actionKey as keyof IActions] as string;
				}
			}
			if (updateTapAction) {
				customAction.tap_action = tapAction as IAction;
			}

			// Copy slider fields
			if (customActionName == 'slider') {
				if ('slider_style' in config && !('style' in customAction)) {
					customAction.style = (
						config as Record<string, StyleInfo>
					).slider_style;
				}
				if ('slider_range' in config && !('range' in customAction)) {
					customAction.range = (
						config as Record<string, [number, number]>
					).slider_range;
				}
				if ('slider_step' in config && !('step' in customAction)) {
					customAction.step = (
						config as Record<string, number>
					).slider_step;
				}
				if (!('value_attribute' in customAction)) {
					if ('slider_attribute' in config) {
						customAction.value_attribute =
							(config as Record<string, string>)
								.slider_attribute ?? 'volume_level';
					} else {
						customAction.value_attribute = 'volume_level';
					}
				}
				if (
					'enable_slider_feedback' in config &&
					!('haptics' in customAction)
				) {
					customAction.haptics = (
						config as Record<string, boolean>
					).enable_slider_feedback;
				}
			} else {
				// Set default value attribute to state if not slider
				customAction.value_attribute =
					customAction.value_attribute ?? 'state';
			}

			// For each type of action
			const actionTypes: ActionType[] = [
				'tap_action',
				'hold_action',
				'double_tap_action',
				'multi_tap_action',
				'multi_hold_action',
				'multi_double_tap_action',
				'momentary_start_action',
				'momentary_end_action',
			];
			for (const actionType of actionTypes) {
				if (actionType in customAction) {
					const action = customAction[
						actionType as keyof IActions
					] as IAction;

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
						} else if ('fire-dom-event' in action) {
							(action as IAction).action = 'fire-dom-event';
						} else if (
							'pipeline_id' in action ||
							'start_listening' in action
						) {
							(action as IAction).action = 'assist';
						} else {
							(action as IAction).action = 'none';
						}
					}

					// Merge service_data, target, and data fields
					if (
						['data', 'target', 'service_data'].some(
							(key) => key in action,
						)
					) {
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
				}
			}
		}

		return config;
	}

	setToggles(config: IConfig): IConfig {
		// Set toggles to default values if not provided
		const toggles: Record<string, boolean> = {
			enable_button_feedback: true,
			enable_touchpad_feedback: true,
			enable_double_click: false,
			enable_slider_feedback: true,
		};
		for (const toggle in toggles) {
			if (!(toggle in config)) {
				(config as Record<string, boolean>)[toggle] = toggles[toggle];
			}
		}
		return config;
	}

	getActions(action: string): IActions {
		const defaultActions = this.defaultActions[action] || {};
		const actions = structuredClone(
			this.customActions[action] || defaultActions,
		);

		// Get default icon if not redefined
		if (!('icon' in actions) && 'icon' in defaultActions) {
			actions.icon = defaultActions?.icon;
		}

		// Get default slider tap_action if not redefined
		if (action == 'slider' && !('tap_action' in actions)) {
			actions.tap_action = defaultActions.tap_action;
		}

		// Get original actions if not defined.
		const actionTypes: ActionType[] = [
			'tap_action',
			'hold_action',
			'double_tap_action',
			'multi_tap_action',
			'multi_hold_action',
			'multi_double_tap_action',
			'momentary_start_action',
			'momentary_end_action',
		];
		for (const actionType of actionTypes) {
			if (!(actionType in actions) && actionType in defaultActions) {
				actions[actionType as ActionType] =
					defaultActions[actionType as ActionType];
			}
		}

		// Set hold time if defined globally
		if ('hold_time' in this.config) {
			if (
				'hold_action' in actions &&
				!('hold_time' in (actions.hold_action ?? {}))
			) {
				actions.hold_action = {
					...(actions.hold_action as IAction),
					hold_time: this.config.hold_time as number,
				};
			}
			if (
				'multi_hold_action' in actions &&
				!('hold_time' in (actions.multi_hold_action ?? {}))
			) {
				actions.multi_hold_action = {
					...(actions.multi_hold_action as IAction),
					hold_time: this.config.hold_time,
				};
			}
		}

		// Set repeat delay if defined globally
		if ('repeat_delay' in this.config) {
			if (
				'hold_action' in actions &&
				actions.hold_action?.action == 'repeat' &&
				!('repeat_delay' in actions.hold_action)
			) {
				actions.hold_action.repeat_delay = this.config.repeat_delay;
			}
			if (
				'multi_hold_action' in actions &&
				actions.multi_hold_action?.action == 'repeat' &&
				!('repeat_delay' in actions.multi_hold_action)
			) {
				actions.multi_hold_action.repeat_delay =
					this.config.repeat_delay;
			}
		}

		// Set double tap window if defined globally
		if ('double_tap_window' in this.config) {
			if (
				'double_tap_action' in actions &&
				!('double_tap_window' in (actions.double_tap_action ?? {}))
			) {
				actions.double_tap_action = {
					...(actions.double_tap_action as IAction),
					double_tap_window: this.config.double_tap_window,
				};
			}
			if (
				'multi_double_tap_action' in actions &&
				!(
					'double_tap_window' in
					(actions.multi_double_tap_action ?? {})
				)
			) {
				actions.multi_double_tap_action = {
					...(actions.multi_double_tap_action as IAction),
					double_tap_window: this.config.double_tap_window,
				};
			}
		}

		return actions;
	}

	mergeDeep(target: object, ...sources: [object]): object {
		function isObject(item: object) {
			return item && typeof item === 'object' && !Array.isArray(item);
		}

		if (!sources.length) {
			return target;
		}
		const source: object = sources.shift() as object;

		if (isObject(target) && isObject(source)) {
			for (const key in source) {
				if (isObject(source[key as keyof object])) {
					if (!target[key as keyof object])
						Object.assign(target, { [key]: {} });
					this.mergeDeep(
						target[key as keyof object],
						source[key as keyof object],
					);
				} else {
					Object.assign(target, {
						[key]: source[key as keyof object],
					});
				}
			}
		}

		return this.mergeDeep(target, ...sources);
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		this.nRows++;
		return html` <div class="row" id="row-${this.nRows}">${content}</div> `;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		this.nColumns++;
		return html`
			<div class="column" id="column-${this.nColumns}">${content}</div>
		`;
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

		actions.style = style;
		if (!('haptics' in actions)) {
			actions.haptics = this.config.button_haptics;
		}

		return html`<remote-button
			.hass=${this.hass}
			.autofillEntityId=${this.config.autofill_entity_id}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.actions=${actions}
			.actionKey="${elementName}"
			.icons=${this.icons}
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
			.actions=${this.getActions('slider')}
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

	buildTouchpad(context: object): TemplateResult {
		// If still using old double tap toggle and key, map to center double tap action
		const centerActions = this.getActions('center');
		if (
			renderTemplate(
				this.hass,
				(this.config as Record<string, string>).enable_double_click,
				context,
			) &&
			!('double_tap_action' in centerActions)
		) {
			const doubleTapKeycode =
				(renderTemplate(
					this.hass,
					(this.config as Record<string, string>)
						.double_click_keycode,
					context,
				) as string) ?? 'back';
			const doubleTapAction = this.getActions(doubleTapKeycode);
			centerActions.double_tap_action = doubleTapAction.tap_action;
		}
		centerActions.haptics = this.config.touchpad_haptics;
		centerActions.style = this.config.touchpad_style;

		// If still using old long click key, map to center hold action
		if (
			renderTemplate(
				this.hass,
				(this.config as Record<string, string>).long_click_keycode,
				context,
			) &&
			!('hold_action' in centerActions)
		) {
			const holdActionKeycode =
				(renderTemplate(
					this.hass,
					(this.config as Record<string, string>).long_click_keycode,
					context,
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
			.autofillEntityId=${this.config.autofill_entity_id}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.actions=${centerActions}
			.directionActions=${directionActions}
		/>`;
	}

	buildKeyboard(): TemplateResult {
		const actions = this.getActions('keyboard');
		actions.style = {
			...this.config.button_style,
			...actions.style,
		};
		if (!('haptics' in actions)) {
			actions.haptics = this.config.button_haptics;
		}

		return html`<remote-keyboard
			.hass=${this.hass}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.actions=${actions}
			.actionKey="keyboard"
			._keyboardId=${this.config.keyboard_id}
			._keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			.icons=${this.icons}
		/>`;
	}

	buildTextbox(): TemplateResult {
		const actions = this.getActions('textbox');
		actions.style = {
			...this.config.button_style,
			...actions.style,
		};
		if (!('haptics' in actions)) {
			actions.haptics = this.config.button_haptics;
		}

		return html`<remote-textbox
			.hass=${this.hass}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.actions=${actions}
			.actionKey="textbox"
			._keyboardId=${this.config.keyboard_id}
			._keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			.icons=${this.icons}
		/>`;
	}

	buildSearch(): TemplateResult {
		const actions = this.getActions('search');
		actions.style = {
			...this.config.button_style,
			...actions.style,
		};
		if (!('haptics' in actions)) {
			actions.haptics = this.config.button_haptics;
		}

		return html`<remote-search
			.hass=${this.hass}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.actions=${actions}
			.actionKey="search"
			._keyboardId=${this.config.keyboard_id}
			._keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			.icons=${this.icons}
		/>`;
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
						rowContent.push(this.buildTouchpad(context));
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

		const context = {
			config: {
				...this.config,
				entity: renderTemplate(
					this.hass,
					this.config.remote_id ??
						this.config.media_player_id ??
						this.config.keyboard_id ??
						this.config.slider_id ??
						'',
				),
			},
		};

		const content: TemplateResult[] = [];

		this.nRows = 0;
		this.nColumns = 0;
		for (const row of this.config.rows ?? []) {
			const rowContent = this.buildElements(
				row as string[],
				false,
				context,
			);
			content.push(rowContent);
		}

		return html`<ha-card
			.header="${renderTemplate(
				this.hass,
				this.config.title as string,
				context,
			)}"
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
}

customElements.define('android-tv-card', AndroidTVCard);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Android TV Card',
	description: 'Remote for Android TV',
});

if (!window.structuredClone) {
	window.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}
if (!window.performance) {
	window.performance = window.Date as unknown as Performance;
}
