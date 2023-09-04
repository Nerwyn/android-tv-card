import {
	customAction,
	defaultKeys,
	defaultSources,
	key,
	source,
	serviceData,
	HAEvent as Event,
} from './models';

const LitElement = Object.getPrototypeOf(
	customElements.get('ha-panel-lovelace')
);
const html = LitElement.prototype.html;

class TVCardServices extends LitElement {
	constructor() {
		super();

		this.defaultKeys = {};
		this.defaultSources = {};

		this.customKeys = {};
		this.customSources = {};
		this.customIcons = {};

		this.clickTimer = null;
		this.clickCount = 0;

		this.touchAction = null;
		this.touchTimer = null;
		this.touchInterval = null;
		this.touchLongClick = false;

		this.holdAction = null;
		this.holdTimer = null;
		this.holdInterval = null;
		this.holdLongClick = false;
	}

	static get properties() {
		return {
			_hass: {},
			_config: {},
			_apps: {},
			trigger: {},
		};
	}

	static getStubConfig() {
		return {};
	}

	getCardSize() {
		let numRows = Object.keys(this._config).filter((key) =>
			key.includes('_row')
		).length;
		if ('title' in this._config) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: Record<string, any>) {
		this._config = { theme: 'default', ...config };
		this.customKeys = config.customKeys || {};
		this.customSources = config.customSources || {};
		this.customIcons = config.customIcons || {};

		this.defaultKeys = defaultKeys;
		this.defaultSources = defaultSources;
		if (this._config.alt_volume_icons) {
			this.useAltVolumeIcons();
		}

		await this.loadCardHelpers();
		await this.loadHassHelpers();
		if (this._config.volume_row == 'slider') {
			await this.renderVolumeSlider();
		}

		this.triggerRender();
	}

	isButtonEnabled(row: string, button: string) {
		if (!(this._config[row] instanceof Array)) return false;

		return this._config[row].includes(button);
	}

	set hass(hass) {
		this._hass = hass;
		if (this.volume_slider) {
			this.volume_slider.hass = hass;
		}
		if (this._hassResolve) {
			this._hassResolve();
		}
	}

	get hass() {
		return this._hass;
	}

	fireEvent(window: Window, type: string, detail?: string) {
		let e = new Event(type, {
			bubbles: false,
		}) as Event;
		e.detail = detail;
		window.dispatchEvent(e);
		return e;
	}

	fireHapticEvent(window: Window, detail: string) {
		if (
			this._config.enable_button_feedback === undefined ||
			this._config.enable_button_feedback
		) {
			this.fireEvent(window, 'haptic', detail);
		}
	}

	async loadCardHelpers() {
		this._helpers = await window.loadCardHelpers();
		if (this._helpersResolve) this._helpersResolve();
	}

	async loadHassHelpers() {
		if (this._helpers === undefined)
			await new Promise((resolve) => (this._helpersResolve = resolve));
		if (this._hass === undefined)
			await new Promise((resolve) => (this._hassResolve = resolve));
		this._helpersResolve = undefined;
		this._hassResolve = undefined;
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

		this.volume_slider = await this._helpers.createCardElement(
			slider_config
		);
		this.volume_slider.style = 'flex: 0.9;';
		this.volume_slider.ontouchstart = (e: Event) => {
			e.stopImmediatePropagation();
			this.fireHapticEvent(window, 'light');
		};
		this.volume_slider.addEventListener(
			'input',
			(_e: Event) => {
				this.fireHapticEvent(window, 'light');
			},
			true
		);

		this.volume_slider.hass = this._hass;
	}

	useAltVolumeIcons() {
		this.defaultKeys.volume_up.icon = 'mdi:volume-high';
		this.defaultKeys.volume_down.icon = 'mdi:volume-medium';
		this.defaultKeys.volume_mute.icon = 'mdi:volume-variant-off';
	}

	/**
	 * Send command to an Android TV remote
	 * @param {string} key
	 */
	sendKey(key: string, longPress: boolean = false) {
		let data: serviceData = {
			entity_id: this._config.remote_id,
			command: key,
		};
		if (longPress) {
			data.hold_secs = 0.5;
		}
		this._hass.callService('remote', 'send_command', data);
	}

	getInfo(action: string): key | source | customAction {
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
		let info = this.getInfo(action);
		if ('key' in info) {
			let key = (info as key).key;
			this.sendKey(key, longPress);
		} else if ('source' in info) {
			this.changeSource((info as source).source);
		} else if ('service' in info) {
			let service_data = JSON.parse(
				JSON.stringify(info.service_data || {})
			);
			if (longPress && info.service == 'remote.send_command') {
				service_data.hold_secs = 0.5;
			}
			let [domain, service] = info.service.split('.', 2);
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
	onTouchClick(e: Event) {
		e.stopImmediatePropagation();
		let click_action = () => {
			clearTimeout(this.clickTimer);
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
		clearTimeout(this.clickTimer);
		this.clickTimer = null;
		this.clickCount = 0;

		let action = this._config.double_click_keycode ?? 'back';
		this.onButtonClick(e, action, false);
	}

	/**
	 * Event handler for touchpad swipe and long click start
	 * @param {Event} e
	 */
	onTouchStart(e: Event) {
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
					this._config.long_click_keycode ? false : true
				);
			}
		}, 500);

		if (!e.touches?.length) {
			e.touches = [
				{
					clientX: window.initialX,
					clientY: window.initialY,
				},
			];
		} else {
			window.initialX = e.touches[0].clientX;
			window.initialY = e.touches[0].clientY;
		}
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
		clearTimeout(this.touchTimer);
		clearInterval(this.touchInterval);
		clearTimeout(this.clickTimer);

		this.touchAction = null;
		this.touchTimer = null;
		this.touchInterval = null;
		this.clickTimer = null;
	}

	/**
	 * Event handler for touchpad swipe move
	 * @param {Event} e
	 */
	onTouchMove(e: Event) {
		if (!window.initialX || !window.initialY) {
			return;
		}

		let currentX = e.touches?.[0].clientX || 0;
		let currentY = e.touches?.[0].clientY || 0;

		let diffX = window.initialX - currentX;
		let diffY = window.initialY - currentY;

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
		action = action || (e.currentTarget as any).action;
		let info = this.getInfo(action);

		let haptic = longPress ? 'medium' : 'light';
		if (action == 'center' && !longPress) {
			haptic = 'selection';
		} else if (action == this._config.double_click_keycode) {
			haptic = 'success';
		}
		this.fireHapticEvent(window, haptic);

		let key = 'key' in info ? info.key : '';
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
		this.holdAction = (e.currentTarget as any).action;
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

		clearTimeout(this.holdTimer);
		clearInterval(this.holdInterval);

		this.holdAction = null;
		this.holdTimer = null;
		this.holdInterval = null;
	}

	/**
	 * Event handler for keyboard keydown events, used for non-alphanumerical keys
	 * @param {Event} e
	 */
	onKeyDown(e: Event) {
		e.stopImmediatePropagation();

		const keyToKey: Record<string, string> = {
			Backspace: 'delete',
			Delete: 'forward_delete',
			Enter: 'enter',
			ArrowLeft: 'left',
			ArrowRight: 'right',
		};

		let key = keyToKey[e.key ?? ''];
		if (key) {
			if (e.currentTarget?.value != '') {
				e.currentTarget?.blur();
				e.currentTarget!.value = '';
				e.currentTarget?.focus();
			}
			this.sendAction(key);
		}
	}

	/**
	 * Event handler for keyboard input events, used for alphanumerical keys and works on all platforms
	 * @param {Event} e
	 */
	onInput(e: Event) {
		e.stopImmediatePropagation();

		if (e.data) {
			let data = {
				entity_id: this._config.adb_id,
				command: 'input text "' + e.data + '"',
			};
			this._hass.callService('androidtv', 'adb_command', data);
		}
	}

	/**
	 * Event handler for paste events, as onInput paste events return null for data field
	 * @param {Event} e
	 */
	onPaste(e: Event) {
		e.stopImmediatePropagation();
		e.preventDefault();

		let text = e.clipboardData.getData('Text');
		if (text) {
			let data = {
				entity_id: this._config.adb_id,
				command: 'input text "' + text + '"',
			};
			this._hass.callService('androidtv', 'adb_command', data);
		}
		e.currentTarget.blur();
		e.currentTarget.value = '';
		e.currentTarget.focus();
	}

	/**
	 * Event handler for on focus events, clears input and changes icon color
	 * @param {Event} e
	 */
	onFocus(e: Event) {
		e.currentTarget.value = '';
		e.currentTarget.parentElement.children[0].style.color =
			'var(--state-active-color)';
		e.currentTarget.style.zIndex = '9';
		e.currentTarget.parentElement.style.zIndex = '1';
	}

	/**
	 * Event handler for on focus out events, clears input and resets icon color
	 * @param {Event} e
	 */
	onFocusOut(e: Event) {
		e.currentTarget.value = '';
		e.currentTarget.parentElement.children[0].style.color = '';
		e.currentTarget.style.zIndex = '';
		e.currentTarget.parentElement.style.zIndex = '';
	}

	/**
	 * Event handler for clicking the keyboard button
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onKeyboardPress(e: Event, _longpress: boolean) {
		e.currentTarget.children[1].focus();
	}

	/**
	 * Event handler for sending bulk text via legacy prompt method
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onTextboxPress(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();
		let text = prompt('Text Input: ');
		if (text) {
			let data = {
				entity_id: this._config.adb_id,
				command: 'input text "' + text + '"',
			};
			this._hass.callService('androidtv', 'adb_command', data);
		}
	}

	/**
	 * Event handler for global Google Assistant search
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onSearchPress(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();
		let text = prompt('Google Assistant Search: ');
		if (text) {
			let data = {
				entity_id: this._config.adb_id,
				command:
					'am start -a "android.search.action.GLOBAL_SEARCH" --es query "' +
					text +
					'"',
			};
			this._hass.callService('androidtv', 'adb_command', data);
		}
	}

	buildIconButton(action: string): string {
		let info = this.getInfo(action);
		let icon = info?.icon ?? '';
		let svg_path = info.svg_path ?? this.customIcons[icon] ?? '';

		// Use original icon if none provided for custom key or source
		if (!(icon || svg_path)) {
			let iconInfo =
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

	buildRow(content: string[]) {
		return html` <div class="row">${content}</div> `;
	}

	buildButtonsFromActions(actions: string[]) {
		return actions.map((action) => this.buildIconButton(action));
	}

	triggerRender() {
		this.trigger = Math.random();
	}

	render() {
		if (!this._config || !this._hass) {
			return html``;
		}

		let content: string[][] = [];
		Object.keys(this._config).forEach((row_name) => {
			if (row_name.includes('_row')) {
				switch (row_name) {
					case 'volume_row': {
						if (this._config.volume_row == 'buttons') {
							content.push([
								this.buildIconButton('volume_down'),
								this.buildIconButton('volume_mute'),
								this.buildIconButton('volume_up'),
							]);
						} else if (this._config.volume_row == 'slider') {
							content.push([this.volume_slider]);
						}
						break;
					}

					case 'navigation_row': {
						switch (this._config.navigation_row) {
							case 'buttons': {
								content.push([this.buildIconButton('up')]);
								content.push([
									this.buildIconButton('left'),
									this.buildIconButton('center'),
									this.buildIconButton('right'),
								]);
								content.push([this.buildIconButton('down')]);
								break;
							}

							case 'touchpad':
							default: {
								const touchpad: string[] = [
									html`
										<toucharea
											id="toucharea"
											@click="${this.onTouchClick}"
											@touchstart="${this.onTouchStart}"
											@touchmove="${this.onTouchMove}"
											@touchend="${this.onTouchEnd}"
										>
										</toucharea>
									`,
								];
								content.push(touchpad);
							}
						}
						break;
					}

					default: {
						content.push(
							this.buildButtonsFromActions(this._config[row_name])
						);
					}
				}
			}
		});

		content = content.map(this.buildRow);

		let output = html`
			${this.renderStyle()}
			<ha-card .header="${this._config.title}">${content}</ha-card>
		`;

		return html`${output}`;
	}

	renderStyle() {
		return html`
			<style>
				.remote {
					padding: 16px 0px 16px 0px;
				}
				img,
				ha-icon-button {
					width: 48px;
					height: 48px;
					cursor: pointer;
					--mdc-icon-size: 100%;
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
					padding: 8px 36px 8px 36px;
					justify-content: space-evenly;
				}
				.diagonal {
					background-color: var(--light-primary-color);
				}
				toucharea {
					border-radius: 30px;
					flex-grow: 1;
					height: ${this._config['touchpad_height'] || '250px'};
					background: #6d767e;
					touch-action: none;
					text-align: center;
				}
			</style>
		`;
	}

	applyThemesOnElement(
		element: Record<string, any>,
		themes: Record<string, any>,
		localTheme: string
	) {
		element._themes = element._themes ?? {};
		let themeName = themes.default_theme;
		if (
			localTheme === 'default' ||
			(localTheme && themes.themes[localTheme])
		) {
			themeName = localTheme;
		}
		const styles = Object.assign({}, element._themes);
		if (themeName !== 'default') {
			let theme = themes.themes[themeName];
			Object.keys(theme).forEach((key) => {
				let prefixedKey = '--' + key;
				element._themes[prefixedKey] = '';
				styles[prefixedKey] = theme[key];
			});
		}
		if (element.updateStyles) {
			element.updateStyles(styles);
		} else if (window.ShadyCSS) {
			// implement updateStyles() method of Polemer elements
			window.ShadyCSS.styleSubtree(
				/** @type {!HTMLElement} */
				element,
				styles
			);
		}

		const meta = document.querySelector('meta[name=theme-color]');
		if (meta) {
			if (!meta.hasAttribute('default-content')) {
				meta.setAttribute(
					'default-content',
					meta.getAttribute('content') as string
				);
			}
			const themeColor =
				styles['--primary-color'] ||
				meta.getAttribute('default-content');
			meta.setAttribute('content', themeColor);
		}
	}
}

customElements.define(
	'android-tv-card',
	TVCardServices as unknown as CustomElementConstructor
);
