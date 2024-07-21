import packageInfo from '../package.json';

import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { HomeAssistant } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';
import { load } from 'js-yaml';

import {
	IConfig,
	IElementConfig,
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
import './classes/remote-touchpad';
import './classes/remote-slider';

console.info(
	`%c UNIVERSAL-REMOTE-CARD v${packageInfo.version}`,
	'color: white; font-weight: bold; background: green',
);

class UniversalRemoteCard extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) config!: IConfig;

	defaultActions: Record<string, IElementConfig> = {};
	customActions: Record<string, IElementConfig> = {};
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
		if (this.config.title) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: IConfig) {
		if (!config) {
			throw new Error('Invalid configuration');
		}
		config = structuredClone(config);
		config = this.setToggles(config);
		config = this.updateDeprecatedKeys(config);

		this.defaultActions = {
			...structuredClone(defaultSources),
			...structuredClone(defaultKeys),
		};
		this.customActions = config.custom_actions || {};

		this.customActions.slider = {
			...this.defaultActions.slider,
			...this.customActions.slider,
		};
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
		if ('adb_id' in config) {
			config.keyboard_id = (config as Record<string, string>).adb_id;
		}
		if (config.media_player_id && !config.slider_id) {
			config.slider_id = config.media_player_id;
		}
		if ('touchpad_height' in config) {
			const style = config.touchpad_style ?? {};
			if (!style.height) {
				style.height = (
					config as Record<string, string>
				).touchpad_height;
			}
			config.touchpad_style = style;
		}

		// Old haptic feedback toggle names
		if ('enable_button_feedback' in config) {
			config.button_haptics = (
				config as Record<string, boolean>
			).enable_button_feedback;
		}
		if ('enable_touchpad_feedback' in config) {
			config.touchpad_haptics = (
				config as Record<string, boolean>
			).enable_touchpad_feedback;
		}

		// Convert old _row keys into rows array
		if (!config.rows) {
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
			...config['custom_keys' as 'custom_actions'],
			...config['custom_sources' as 'custom_actions'],
		} as Record<string, IActions>;

		const customActions = config.custom_actions;

		// For each custom key or source
		for (const customActionName in customActions) {
			const customAction = customActions[customActionName];

			// Copy svg_path to icon
			if ('svg_path' in customAction) {
				customAction.icon = customAction.svg_path as string;
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
					] = customAction[
						actionKey as keyof IElementConfig
					] as string;
				}
			}
			if (updateTapAction) {
				customAction.tap_action = tapAction as IAction;
			}

			// Copy slider fields
			if (customActionName == 'slider') {
				if ('slider_style' in config) {
					customAction.style = config.slider_style as StyleInfo;
				}
				if ('slider_range' in config) {
					customAction.range = config.slider_range as [
						number,
						number,
					];
				}
				if ('slider_step' in config) {
					customAction.step = config.slider_step as number;
				}
				if ('slider_attribute' in config) {
					customAction.value_attribute =
						config.slider_attribute as string;
				}

				if ('enable_slider_feedback' in config) {
					customAction.haptics =
						config.enable_slider_feedback as boolean;
				}
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
				if (customAction[actionType]) {
					const action = customAction[actionType] as IAction;

					// Populate action field
					if (!customAction.template && !action.action) {
						if (action.key) {
							action.action = 'key';
						} else if (action.source) {
							action.action = 'source';
						} else if (action.service) {
							action.action = 'call-service';
						} else if (action.navigation_path) {
							action.action = 'navigate';
						} else if (action.url_path) {
							action.action = 'url';
						} else if (action.browser_mod) {
							action.action = 'fire-dom-event';
						} else if (
							action.pipeline_id ||
							action.start_listening
						) {
							action.action = 'assist';
						} else {
							action.action = 'none';
						}
					}

					// Merge service_data, target, and data fields
					if (
						['data', 'target', 'service_data'].some(
							(key) => action[key as keyof IAction],
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

	getElementConfig(action: string): IElementConfig {
		const defaultActions = this.defaultActions[action] || {};
		let actions = structuredClone(
			this.customActions[action] || defaultActions,
		);

		// Apply template if defined
		if (actions.template) {
			const defaultTemplateActions =
				this.defaultActions[actions.template] || {};
			const customTemplateActions =
				this.customActions[actions.template] || defaultTemplateActions;
			actions = this.mergeDeep(
				structuredClone(customTemplateActions),
				actions,
			);
		}

		// Get default icon if not redefined
		if (!actions.icon && defaultActions.icon) {
			actions.icon = defaultActions?.icon;
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
			if (!actions[actionType] && defaultActions[actionType]) {
				actions[actionType] = defaultActions[actionType];
			}
		}

		// Set hold time if defined globally
		if (this.config.hold_time) {
			if (actions.hold_action && !actions.hold_action?.hold_time) {
				actions.hold_action.hold_time = this.config.hold_time;
			}
			if (
				actions.multi_hold_action &&
				!actions.multi_hold_action?.hold_time
			) {
				actions.multi_hold_action.hold_time = this.config.hold_time;
			}
		}

		// Set repeat delay if defined globally
		if (this.config.repeat_delay) {
			if (
				actions.hold_action &&
				actions.hold_action?.action == 'repeat' &&
				!actions.hold_action.repeat_delay
			) {
				actions.hold_action.repeat_delay = this.config.repeat_delay;
			}
			if (
				actions.multi_hold_action &&
				actions.multi_hold_action?.action == 'repeat' &&
				!actions.multi_hold_action.repeat_delay
			) {
				actions.multi_hold_action.repeat_delay =
					this.config.repeat_delay;
			}
		}

		// Set double tap window if defined globally
		if (this.config.double_tap_window) {
			if (
				actions.double_tap_action &&
				!actions.double_tap_action.double_tap_window
			) {
				actions.double_tap_action.double_tap_window =
					this.config.double_tap_window;
			}
			if (
				actions.multi_double_tap_action &&
				!actions.multi_double_tap_action.double_tap_window
			) {
				actions.multi_double_tap_action.double_tap_window =
					this.config.double_tap_window;
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

	buildStyle(_style: StyleInfo = {}, context?: object) {
		const style = structuredClone(_style);
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
				context,
			) as string;
		}
		return style;
	}

	buildRow(content: TemplateResult[], context: object): TemplateResult {
		this.nRows++;
		const id = `row-${this.nRows}`;
		const style = styleMap(
			this.buildStyle(
				{
					...this.config.row_styles?.rows,
					...this.config.row_styles?.[id],
				},
				context,
			),
		);
		return html`
			<div class="row" id="${id}" style=${style}>${content}</div>
		`;
	}

	buildColumn(content: TemplateResult[], context: object): TemplateResult {
		this.nColumns++;
		const id = `column-${this.nColumns}`;
		const style = styleMap(
			this.buildStyle(
				{
					...this.config.row_styles?.columns,
					...this.config.row_styles?.[id],
				},
				context,
			),
		);
		return html`
			<div class="column" id="${id}" style=${style}>${content}</div>
		`;
	}

	buildButton(elementName: string, context: object): TemplateResult {
		const actions = this.getElementConfig(elementName);

		const style = {
			...this.config.button_style,
			...actions.style,
		};

		if (!Object.keys(actions).length) {
			return html`<div
				class="empty-button"
				style=${styleMap({
					'--size': renderTemplate(
						this.hass,
						style['--size'] as string,
						context,
					) as string,
				})}
			></div>`;
		}

		actions.style = style;
		if (!('haptics' in actions)) {
			actions.haptics = this.config.button_haptics;
		}

		return html`<remote-button
			title="${elementName}"
			.hass=${this.hass}
			.autofillEntityId=${this.config.autofill_entity_id}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.config=${actions}
			.icons=${this.icons}
		/>`;
	}

	buildVolumeButtons(context: object): TemplateResult[] {
		return [
			this.buildButton('volume_down', context),
			this.buildButton('volume_mute', context),
			this.buildButton('volume_up', context),
		];
	}

	buildSlider(): TemplateResult {
		return html`<remote-slider
			.hass=${this.hass}
			.config=${this.getElementConfig('slider')}
		/>`;
	}

	buildNavButtons(context: object): TemplateResult {
		return this.buildColumn(
			[
				this.buildRow([this.buildButton('up', context)], context),
				this.buildRow(
					[
						this.buildButton('left', context),
						this.buildButton('center', context),
						this.buildButton('right', context),
					],
					context,
				),
				this.buildRow([this.buildButton('down', context)], context),
			],
			context,
		);
	}

	buildPad(buttons: string[], context: object): TemplateResult {
		return html`
			<div class="button-pad">
				${buttons.map((b) => this.buildButton(b, context))}
			</div>
		`;
	}

	buildTouchpad(context: object): TemplateResult {
		// If still using old double tap toggle and key, map to center double tap action
		const centerActions = this.getElementConfig('center');
		if (
			renderTemplate(
				this.hass,
				(this.config as Record<string, string>).enable_double_click,
				context,
			) &&
			!centerActions.double_tap_action
		) {
			const doubleTapKeycode =
				(renderTemplate(
					this.hass,
					(this.config as Record<string, string>)
						.double_click_keycode,
					context,
				) as string) ?? 'back';
			const doubleTapAction = this.getElementConfig(doubleTapKeycode);
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
			!centerActions.hold_action
		) {
			const holdActionKeycode =
				(renderTemplate(
					this.hass,
					(this.config as Record<string, string>).long_click_keycode,
					context,
				) as string) ?? 'center';
			const holdAction = this.getElementConfig(holdActionKeycode);
			centerActions.hold_action = holdAction.tap_action;
		}

		const directionActions: Record<DirectionAction, IActions> = {
			up: this.getElementConfig('up'),
			down: this.getElementConfig('down'),
			left: this.getElementConfig('left'),
			right: this.getElementConfig('right'),
		};

		return html`<remote-touchpad
			.hass=${this.hass}
			.autofillEntityId=${this.config.autofill_entity_id}
			.remoteId=${this.config.remote_id}
			.mediaPlayerId=${this.config.media_player_id}
			.config=${centerActions}
			.directionActions=${directionActions}
		/>`;
	}

	buildKeyboard(): TemplateResult {
		const actions = this.getElementConfig('keyboard');
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
			.config=${actions}
			.actionKey="keyboard"
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode ?? 'ANDROID TV'}
			.icons=${this.icons}
		/>`;
	}

	buildDialog() {
		// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
		return html`<dialog>
			<input></input>
		</dialog>`;
	}

	onDialogOpen(_e: CustomEvent) {
		this.shadowRoot?.querySelector('dialog')?.showModal();
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
						const volumeButtons = this.buildVolumeButtons(context);
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
					case 'nav_buttons':
					case 'navigation_buttons': {
						rowContent.push(this.buildNavButtons(context));
						break;
					}
					case 'dpad':
					case 'd_pad':
					case 'direction_pad': {
						rowContent.push(
							this.buildPad(
								[
									'',
									'up',
									'',
									'left',
									'center',
									'right',
									'',
									'down',
									'',
								],
								context,
							),
						);
						break;
					}
					case 'numpad':
					case 'num_pad':
					case 'number_pad': {
						rowContent.push(
							this.buildPad(
								[
									'n7',
									'n8',
									'n9',
									'n4',
									'n5',
									'n6',
									'n1',
									'n2',
									'n3',
								],
								context,
							),
						);
						break;
					}
					case 'xpad':
					case 'x_pad':
					case 'gamepad':
					case 'xgamepad':
					case 'x_gamepad':
						rowContent.push(
							this.buildPad(
								['', 'y', '', 'x', '', 'b', '', 'a', ''],
								context,
							),
						);
						break;
					case 'npad':
					case 'n_pad':
					case 'ngamepad':
					case 'n_gamepad':
						rowContent.push(
							this.buildPad(
								['', 'x', '', 'y', '', 'a', '', 'b', ''],
								context,
							),
						);
						break;
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

					default: {
						rowContent.push(this.buildButton(elementName, context));
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(rowContent, context)
			: this.buildRow(rowContent, context);
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
			@dialog-open=${this.onDialogOpen}
			.header="${renderTemplate(
				this.hass,
				this.config.title as string,
				context,
			)}"
			>${content}${this.buildDialog()}</ha-card
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
			dialog {
				position: absolute;
				z-index: 9;
				top: 12px;
				padding: 48px;
				border: none;
				background: var(--ha-card-background);
				border-radius: var(--ha-card-border-radius);
			}
			dialog input {
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				height: -moz-available;
				height: -webkit-fill-available;
				height: fill-available;
				outline: none;
				background: none;
				border: none;
			}
			dialog::backdrop {
				background: rgb(0, 0, 0);
				opacity: 0.8;
			}
		`;
	}
}

customElements.define('android-tv-card', UniversalRemoteCard); // To not break old configs

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Universal Remote',
	description: 'Super customizable universal remote card',
});

if (!window.structuredClone) {
	window.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}
if (!window.performance) {
	window.performance = window.Date as unknown as Performance;
}
