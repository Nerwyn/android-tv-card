import { version } from '../package.json';
import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import {
	HomeAssistant,
	createThing,
	HapticType,
	forwardHaptic,
	applyThemesOnElement,
} from 'custom-card-helpers';
import {
	IConfig,
	ICustomAction,
	defaultKeys,
	defaultSources,
	IKeys,
	IKey,
	ISources,
	ISource,
	IServiceData,
} from './models';

console.info(
	`%c ANDROID-TV-CARD v${version}`,
	'color: white; font-weight: bold; background: green',
);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Android TV Card',
	description: 'Remote for Android TV',
});

@customElement('android-tv-card')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AndroidTVCard extends LitElement {
	defaultKeys: IKeys;
	defaultSources: ISources;

	customKeys: IKeys;
	customSources: ISources;
	customIcons: Record<string, string>;

	clickTimer: ReturnType<typeof setTimeout> | null;
	clickCount: number;

	touchAction: string;
	touchTimer: ReturnType<typeof setTimeout> | null;
	touchInterval: ReturnType<typeof setInterval> | null;
	touchLongClick: boolean;

	holdAction: string;
	holdTimer: ReturnType<typeof setTimeout> | null;
	holdInterval: ReturnType<typeof setInterval> | null;
	holdLongClick: boolean;

	volume_slider?: ReturnType<typeof createThing>;

	@property({ attribute: false })
	_hass!: HomeAssistant;
	@property({ attribute: false })
	private _config!: IConfig;

	constructor() {
		super();

		this.defaultKeys = defaultKeys;
		this.defaultSources = defaultSources;

		this.customKeys = {};
		this.customSources = {};
		this.customIcons = {};

		this.clickTimer = null;
		this.clickCount = 0;

		this.touchAction = '';
		this.touchTimer = null;
		this.touchInterval = null;
		this.touchLongClick = false;

		this.holdAction = '';
		this.holdTimer = null;
		this.holdInterval = null;
		this.holdLongClick = false;
	}

	static get properties() {
		return {
			_hass: {},
			_config: {},
			_apps: {},
		};
	}

	static getStubConfig() {
		return {};
	}

	getCardSize() {
		let numRows = this._config.rows!.length;
		if ('title' in this._config) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: IConfig) {
		this._config = { theme: 'default', ...config };

		this.customKeys = config.custom_keys || {};
		this.customSources = config.custom_sources || {};
		this.customIcons = config.custom_icons || {};

		this.defaultKeys = defaultKeys;
		this.defaultSources = defaultSources;
		if (this._config.alt_volume_icons) {
			this.useAltVolumeIcons();
		}

		// Legacy config upgrades
		if (
			(this._config as Record<string, string>).adb_id &&
			!this._config.keyboard_id
		) {
			this._config.keyboard_id = (
				this._config as Record<string, string>
			).adb_id;
		}
		this.convertToRowsArray();

		await window.loadCardHelpers();

		if (this._config.rows?.toString().includes('volume_slider')) {
			await this.renderVolumeSlider();
		}
	}

	isButtonEnabled(row: string, button: string) {
		return (
			row.includes('_row') &&
			(this._config as Record<string, string[]>)[row].includes(button)
		);
	}

	set hass(hass) {
		this._hass = hass;
		if (this.volume_slider) {
			(this.volume_slider as VolumeSlider).hass = hass;
		}
	}

	get hass() {
		return this._hass;
	}

	fireHapticEvent(haptic: HapticType) {
		if (
			this._config.enable_button_feedback === undefined ||
			this._config.enable_button_feedback
		) {
			forwardHaptic(haptic);
		}
	}

	async renderVolumeSlider() {
		let slider_config = {
			type: 'custom:my-slider',
			entity: this._config.media_player_id,
			height: '50px',
			mainSliderColor: 'white',
			secondarySliderColor: 'rgb(60, 60, 60)',
			mainSliderColorOff: 'rgb(60, 60, 60)',
			secondarySliderColorOff: 'rgb(60, 60, 60)',
			thumbWidth: '0px',
			thumbHorizontalPadding: '0px',
			radius: '25px',
		};

		if (this._config.slider_config instanceof Object) {
			slider_config = { ...slider_config, ...this._config.slider_config };
		}

		// Retry due to slider intermittently not rendering
		for (let i = 0; i < 10; i++) {
			try {
				this.volume_slider = createThing(slider_config, true);
				this.volume_slider.setAttribute('style', 'flex: 0.9;');
			} catch {
				await new Promise((resolve) => setTimeout(resolve, 100));
			}
		}

		this.volume_slider.addEventListener(
			'ontouchstart',
			(e: Event) => {
				e.stopImmediatePropagation();
				if (
					this._config.enable_slider_feedback == undefined ||
					this._config.enable_slider_feedback
				) {
					forwardHaptic('selection');
				}
			},
			{ passive: true },
		);
		this.volume_slider.addEventListener(
			'input',
			(_e: Event) => {
				if (
					this._config.enable_slider_feedback == undefined ||
					this._config.enable_slider_feedback
				) {
					forwardHaptic('light');
				}
			},
			true,
		);

		(this.volume_slider as VolumeSlider).hass = this._hass;
	}

	useAltVolumeIcons() {
		this.defaultKeys.volume_up.icon = 'mdi:volume-high';
		this.defaultKeys.volume_down.icon = 'mdi:volume-medium';
		this.defaultKeys.volume_mute.icon = 'mdi:volume-variant-off';
	}

	convertToRowsArray() {
		if (!this._config.rows || !this._config.rows.length) {
			const rows: string[][] = [];
			const rowNames = Object.keys(this._config).filter((row) =>
				row.includes('_row'),
			);
			for (const name of rowNames) {
				let row = (this._config as Record<string, string[]>)[name];
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
			this._config.rows = rows;
		}
	}

	/**
	 * Send command to an Android TV remote
	 * @param {string} key
	 */
	sendKey(key: string, longPress: boolean = false) {
		const data: IServiceData = {
			entity_id: this._config.remote_id!,
			command: key,
		};
		if (longPress) {
			data.hold_secs = 0.5;
		}
		this._hass.callService('remote', 'send_command', data);
	}

	getInfo(action: string): IKey | ISource | ICustomAction {
		return (
			this.customKeys[action] ||
			this.customSources[action] ||
			this.defaultKeys[action] ||
			this.defaultSources[action] ||
			{}
		);
	}

	/**
	 * Send either a command to an Android TV remote or a custom key to any service
	 * @param {string} action
	 * @param {boolean} [longPress=false]
	 */
	sendAction(action: string, longPress: boolean = false) {
		const info = this.getInfo(action);
		if ('key' in info) {
			const key = (info as IKey).key;
			this.sendKey(key, longPress);
		} else if ('source' in info) {
			this.changeSource((info as ISource).source);
		} else if ('service' in info) {
			const service_data = JSON.parse(
				JSON.stringify(info.service_data || {}),
			);
			if (longPress && info.service == 'remote.send_command') {
				service_data.hold_secs = 0.5;
			}
			const [domain, service] = info.service.split('.', 2);
			this._hass.callService(domain, service, service_data);
		}
	}

	/**
	 * Open an Android TV app using it's deep link
	 * @param {string} source Android TV deep link for an app
	 */
	changeSource(source: string) {
		this._hass.callService('remote', 'turn_on', {
			activity: source,
			entity_id: this._config.remote_id,
		});
	}

	/**
	 * Event handler for touchpad click with no movement
	 * @param {Event} e
	 */
	onTouchClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		const click_action = () => {
			clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
			this.clickTimer = null;
			this.onButtonClick(e, 'center', false);
			this.clickCount = 0;
		};
		if (e.detail && e.detail > this.clickCount) {
			this.clickCount++;
		}
		if (this._config.enable_double_click) {
			if (this.clickCount == 2) {
				this.onTouchDoubleClick(e);
			} else {
				this.clickTimer = setTimeout(click_action, 200);
			}
		} else {
			click_action();
		}
	}

	/**
	 * Event handler for touchpad double click
	 * @param {Event} e
	 */
	onTouchDoubleClick(e: Event) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = null;
		this.clickCount = 0;

		const action = this._config.double_click_keycode ?? 'back';
		this.onButtonClick(e, action, false);
	}

	/**
	 * Event handler for touchpad swipe and long click start
	 * @param {Event} e
	 */
	@eventOptions({ passive: true })
	onTouchStart(e: TouchEvent) {
		this.touchTimer = setTimeout(() => {
			this.touchLongClick = true;

			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.touchAction)) {
				this.touchInterval = setInterval(() => {
					this.onButtonClick(e, this.touchAction, false);
				}, 100);
			} else {
				this.onButtonClick(
					e,
					this._config.long_click_keycode ?? 'center',
					true,
				);
			}
		}, 500);

		window.initialX = e.touches[0].clientX;
		window.initialY = e.touches[0].clientY;
	}

	/**
	 * Event handler for touchpad swipe end
	 * @param {Event} e
	 */
	onTouchEnd(e: Event) {
		if (this.touchLongClick) {
			this.touchLongClick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}
		clearTimeout(this.touchTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.touchInterval as ReturnType<typeof setInterval>);
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);

		this.touchAction = '';
		this.touchTimer = null;
		this.touchInterval = null;
		this.clickTimer = null;
	}

	/**
	 * Event handler for touchpad swipe move
	 * @param {Event} e
	 */
	onTouchMove(e: TouchEvent) {
		if (!window.initialX || !window.initialY) {
			return;
		}

		const currentX = e.touches[0].clientX || 0;
		const currentY = e.touches[0].clientY || 0;

		const diffX = window.initialX - currentX;
		const diffY = window.initialY - currentY;

		let action;
		if (Math.abs(diffX) > Math.abs(diffY)) {
			// Sliding horizontally
			action = diffX > 0 ? 'left' : 'right';
		} else {
			// Sliding vertically
			action = diffY > 0 ? 'up' : 'down';
		}
		this.touchAction = action;
		this.onButtonClick(e, action, false);

		window.initialX = undefined;
		window.initialY = undefined;
	}

	/**
	 * Event handler for button click
	 * @param {Event} e
	 * @param {string} [action]
	 * @param {boolean} [longPress=false]
	 */
	onButtonClick(e: Event, action: string, longPress: boolean = false) {
		action = action || e.currentTarget?.action || '';
		const info = this.getInfo(action);

		let haptic: HapticType = longPress ? 'medium' : 'light';
		if (['up', 'down', 'left', 'right'].includes(action)) {
			haptic = 'selection';
		} else if (
			action == this._config.double_click_keycode ||
			(!this._config.double_click_keycode && action == 'back')
		) {
			haptic = 'success';
		}
		this.fireHapticEvent(haptic);

		const key = 'key' in info ? info.key : '';
		switch (key) {
			case 'KEYBOARD':
				this.onKeyboardPress(e, longPress);
				break;
			case 'TEXTBOX':
				this.onTextboxPress(e, longPress);
				break;
			case 'SEARCH':
				this.onSearchPress(e, longPress);
				break;
			default:
				this.sendAction(action, longPress);
				break;
		}
	}

	/**
	 * Event handler for button long click start
	 * @param {Event} e
	 */
	onButtonLongClickStart(e: Event) {
		this.holdAction = e.currentTarget!.action;
		this.holdTimer = setTimeout(() => {
			this.holdLongClick = true;

			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.holdAction)) {
				this.holdInterval = setInterval(() => {

					this.onButtonClick(e, this.holdAction, false)
				}, 100);
			} else {
				this.onButtonClick(e, this.holdAction, true)
			}
		}, 500);
	}

	/**
	 * Event handler for button long click end
	 * @param {Event} e
	 */
	onButtonLongClickEnd(e: Event) {
		if (this.holdLongClick) {
			this.holdLongClick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}

		clearTimeout(this.holdTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.holdInterval as ReturnType<typeof setInterval>);

		this.holdAction = '';
		this.holdTimer = null;
		this.holdInterval = null;
	}

	/**
	 * Event handler for keyboard keydown events, used for non-alphanumerical keys
	 * @param {Event} e
	 */
	onKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		const keyToKey: Record<string, string> = {
			Backspace: 'delete',
			Delete: 'forward_delete',
			Enter: 'enter',
			ArrowLeft: 'left',
			ArrowRight: 'right',
		};

		const key = keyToKey[e.key ?? ''];
		if (key) {
			if ((e.currentTarget as HTMLInputElement).value != '') {
				(e.currentTarget as HTMLInputElement).blur();
				(e.currentTarget as HTMLInputElement).value = '';
				(e.currentTarget as HTMLInputElement).focus();
			}

			switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
				case 'KODI':
					break;
				case 'ANDROID TV':
				default:
					this.sendAction(key);
					break;
			}
		}
	}

	/**
	 * Event handler for sending bulk text via legacy prompt method
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onTextboxPress(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();

		const text = prompt('Text Input: ');
		if (text) {
			let data: IServiceData;
			switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this._config.keyboard_id!,
						method: 'Input.SendText',
						text: text,
						done: false,
					};
					this._hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this._config.keyboard_id!,
						command: 'input text "' + text + '"',
					};
					this._hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}

	/**
	 * Event handler for global Google Assistant search
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onSearchPress(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();

		let promptText: string;
		switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
			case 'KODI':
				promptText = 'Global Search: ';
				this._hass.callService('kodi', 'call_method', {
					entity_id: this._config.keyboard_id!,
					method: 'Addons.ExecuteAddon',
					addonid: 'script.globalsearch',
				});
				break;
			case 'ANDROID TV':
			default:
				promptText = 'Google Assistant Search: ';
				break;
		}

		const text = prompt(promptText);
		if (text) {
			let data: IServiceData;
			switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this._config.keyboard_id!,
						method: 'Input.SendText',
						text: text,
						done: true,
					};
					this._hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this._config.keyboard_id!,
						command:
							'am start -a "android.search.action.GLOBAL_SEARCH" --es query "' +
							text +
							'"',
					};
					this._hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}

	/**
	 * Event handler for keyboard input events, used for alphanumerical keys and works on all platforms
	 * @param {Event} e
	 */
	onInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const text = e.data;
		if (text) {
			let data: IServiceData;
			switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this._config.keyboard_id!,
						method: 'Input.SendText',
						text: text,
						done: false,
					};
					this._hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this._config.keyboard_id!,
						command: 'input text "' + text + '"',
					};
					this._hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}

	/**
	 * Event handler for paste events, as onInput paste events return null for data field
	 * @param {Event} e
	 */
	onPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		e.preventDefault();

		const text = e.clipboardData?.getData('Text');
		if (text) {
			let data: IServiceData;
			switch ((this._config.keyboard_mode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this._config.keyboard_id!,
						method: 'Input.SendText',
						text: text,
						done: false,
					};
					this._hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this._config.keyboard_id!,
						command: 'input text "' + text + '"',
					};
					this._hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}

		(e.currentTarget as HTMLInputElement).blur();
		(e.currentTarget as HTMLInputElement).value = '';
		(e.currentTarget as HTMLInputElement).focus();
	}

	/**
	 * Event handler for on focus events, clears input and changes icon color
	 * @param {Event} e
	 */
	onFocus(e: InputEvent) {
		(e.currentTarget as HTMLInputElement).value = '';
		(
			(e.currentTarget as HTMLInputElement).parentElement!
				.children[0] as HTMLElement
		).style.color = 'var(--state-active-color)';
		(e.currentTarget as HTMLInputElement).style.zIndex = '9';
		(e.currentTarget as HTMLInputElement).parentElement!.style.zIndex = '1';
	}

	/**
	 * Event handler for on focus out events, clears input and resets icon color
	 * @param {Event} e
	 */
	onFocusOut(e: InputEvent) {
		(e.currentTarget as HTMLInputElement).value = '';
		(
			(e.currentTarget as HTMLInputElement).parentElement!
				.children[0] as HTMLElement
		).style.color = '';
		(e.currentTarget as HTMLInputElement).style.zIndex = '';
		(e.currentTarget as HTMLInputElement).parentElement!.style.zIndex = '';
	}

	/**
	 * Event handler for clicking the keyboard button
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onKeyboardPress(e: Event, _longpress: boolean) {
		(
			(e.currentTarget as HTMLInputElement).children[1] as HTMLElement
		).focus();
	}

	buildIconButton(action: string): TemplateResult {
		const info = this.getInfo(action);
		let icon = info?.icon ?? '';
		let svg_path = info.svg_path ?? this.customIcons[icon] ?? '';

		if (!Object.keys(info).length) {
			return html`<div class="empty-button"></div>`;
		}

		// Use original icon if none provided for custom key or source
		if (!(icon || svg_path)) {
			const iconInfo =
				this.defaultKeys[action] || this.defaultSources[action] || {};
			icon = iconInfo?.icon ?? '';
			svg_path = iconInfo?.svg_path ?? '';
		}

		let kInput = html``;
		if ('key' in info && info.key == 'KEYBOARD') {
			kInput = html`
				<input
					spellcheck="false"
					autocorrect="off"
					autocomplete="off"
					autocapitalize="off"
					onchange="this.value=''"
					onkeyup="this.value=''"
					@focus="${this.onFocus}"
					@focusout="${this.onFocusOut}"
					@input="${this.onInput}"
					@paste="${this.onPaste}"
					@keydown="${this.onKeyDown}"
				></input>
			`;
		}
		return html`
			<ha-icon-button
				.action="${action}"
				@click="${this.onButtonClick}"
				@touchstart="${this.onButtonLongClickStart}"
				@touchend="${this.onButtonLongClickEnd}"
				title="${action}"
				.path="${svg_path}"
			>
				<ha-icon .icon="${!svg_path ? icon : ''}"></ha-icon>
				${kInput}
			</ha-icon-button>
		`;
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		return html` <div class="row">${content}</div> `;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		return html` <div class="column">${content}</div> `;
	}

	buildButtons(row: (string | string[])[], isColumn: boolean = false) {
		if (typeof row == 'string') {
			row = [row];
		}
		const row_content: TemplateResult[] = [];
		for (const button_name of row) {
			if (typeof button_name == 'object' && button_name != null) {
				row_content.push(this.buildButtons(button_name, !isColumn));
			} else {
				switch (button_name) {
					case 'volume_buttons': {
						row_content.push(
							...[
								this.buildIconButton('volume_down'),
								this.buildIconButton('volume_mute'),
								this.buildIconButton('volume_up'),
							],
						);
						break;
					}
					case 'volume_slider': {
						row_content.push(
							this.volume_slider as unknown as TemplateResult,
						);
						break;
					}

					case 'navigation_buttons': {
						const navigation_buttons: TemplateResult[] = [];
						navigation_buttons.push(
							this.buildRow([this.buildIconButton('up')]),
						);
						navigation_buttons.push(
							this.buildRow([
								this.buildIconButton('left'),
								html`<div class="dpad-spacer"></div>`,
								this.buildIconButton('center'),
								html`<div class="dpad-spacer"></div>`,
								this.buildIconButton('right'),
							]),
						);
						navigation_buttons.push(
							this.buildRow([this.buildIconButton('down')]),
						);
						row_content.push(this.buildColumn(navigation_buttons));
						break;
					}

					case 'navigation_touchpad': {
						const touchpad = html`
							<toucharea
								id="toucharea"
								@click="${this.onTouchClick}"
								@touchstart="${this.onTouchStart}"
								@touchmove="${this.onTouchMove}"
								@touchend="${this.onTouchEnd}"
							>
							</toucharea>
						`;
						row_content.push(touchpad);
						break;
					}

					default: {
						row_content.push(this.buildIconButton(button_name));
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(row_content)
			: this.buildRow(row_content);
	}

	render() {
		if (!this._config || !this._hass) {
			return html``;
		}

		const content: TemplateResult[] = [];

		for (const row of this._config.rows!) {
			const row_content = this.buildButtons(row as string[]);
			content.push(row_content);
		}

		const output = html`
			${this.renderStyle()}
			<ha-card .header="${this._config.title}">${content}</ha-card>
		`;

		return html`${output}`;
	}

	renderStyle() {
		return html`
			<style>
				img,
				ha-icon-button {
					width: 48px;
					height: 48px;
					cursor: pointer;
					--mdc-icon-size: 100%;
					position: relative;
					display: inline-flex;
					flex-direction: column;
					align-content: center;
					justify-content: center;
					text-align: center;
					align-items: center;
				}
				mwc-icon-button, button, .mdc-icon-button {
					height: 100% !important;
					width: 100% !important;
				}
				.empty-button {
					width: 48px;
					height: 48px;
					position: relative;
				}
				input {
					opacity: 0;
					filter: alpha(opacity=0);
					top: 0;
					left: 0;
					position: absolute;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					height: -moz-available;
					height: -webkit-fill-available;
					height: fill-available;
				}
				.row {
					display: flex;
					flex-wrap: nowrap;
					flex-direction: row;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					flex: 1;
					padding: 8px;
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
					padding: 8px;
					justify-content: space-evenly;
					align-items: center;
				}
				.dpad-spacer {
					width: 36px;
				}
				.diagonal {
					background-color: var(--light-primary-color);
				}
				toucharea {
					border-radius: 32px;
					flex-grow: 1;
					height: ${this._config['touchpad_height'] || '250px'};
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					background: #6d767e;
					touch-action: none;
					text-align: center;
				}
			</style>
		`;
	}

	applyThemesOnElement(element: Element, themes: Themes, localTheme: string) {
		applyThemesOnElement(element, themes, localTheme);
	}
}
