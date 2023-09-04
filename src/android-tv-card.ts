import { defaultKeys, defaultSources } from './models';

const LitElement = Object.getPrototypeOf(
	customElements.get('ha-panel-lovelace')
);
const html = LitElement.prototype.html;

class TVCardServices extends LitElement {
	constructor() {
		super();

		this.defaultKeys = {};
		this.defaultSources = {};

		this.custom_keys = {};
		this.custom_sources = {};
		this.custom_icons = {};

		this.clicktimer = null;
		this.clickcount = 0;

		this.touchaction = null;
		this.touchtimer = null;
		this.touchinterval = null;
		this.touchlongclick = false;

		this.holdaction = null;
		this.holdtimer = null;
		this.holdinterval = null;
		this.holdlongclick = false;
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

	async setConfig(config) {
		this._config = { theme: 'default', ...config };
		this.custom_keys = config.custom_keys || {};
		this.custom_sources = config.custom_sources || {};
		this.custom_icons = config.custom_icons || {};

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

	isButtonEnabled(row, button) {
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

	fireEvent(node, type, detail, _options) {
		detail = detail === null || detail === undefined ? {} : detail;
		let e = new Event(type, {
			bubbles: false,
		});
		e.detail = detail;
		node.dispatchEvent(e);
		return e;
	}

	fireHapticEvent(window, detail) {
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
		this.volume_slider.ontouchstart = (e) => {
			e.stopImmediatePropagation();
			this.fireHapticEvent(window, 'light');
		};
		this.volume_slider.addEventListener(
			'input',
			(_e) => {
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
	sendKey(key, longPress = false) {
		let data = {
			entity_id: this._config.remote_id,
			command: key,
		};
		if (longPress) {
			data.hold_secs = 0.5;
		}
		this._hass.callService('remote', 'send_command', data);
	}

	getInfo(action) {
		return (
			this.custom_keys[action] ||
			this.custom_sources[action] ||
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
	sendAction(action, longPress = false) {
		let info = this.getInfo(action);
		if (info.key) {
			let key = info.key;
			this.sendKey(key, longPress);
		} else if (info.source) {
			this.changeSource(info.source);
		} else if (info.service) {
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
	changeSource(source) {
		this._hass.callService('remote', 'turn_on', {
			activity: source,
			entity_id: this._config.remote_id,
		});
	}

	/**
	 * Event handler for touchpad click with no movement
	 * @param {Event} e
	 */
	onTouchClick(e) {
		e.stopImmediatePropagation();
		let click_action = () => {
			clearTimeout(this.clicktimer);
			this.clicktimer = null;
			this.onButtonClick(e, 'center', false);
			this.clickcount = 0;
		};
		if (e.detail > this.clickcount) {
			this.clickcount++;
		}
		if (this._config.enable_double_click) {
			if (this.clickcount == 2) {
				this.onTouchDoubleClick(e);
			} else {
				this.clicktimer = setTimeout(click_action, 200);
			}
		} else {
			click_action();
		}
	}

	/**
	 * Event handler for touchpad double click
	 * @param {Event} e
	 */
	onTouchDoubleClick(e) {
		clearTimeout(this.clicktimer);
		this.clicktimer = null;
		this.clickcount = 0;

		let action = this._config.double_click_keycode ?? 'back';
		this.onButtonClick(e, action, false);
	}

	/**
	 * Event handler for touchpad swipe and long click start
	 * @param {Event} e
	 */
	onTouchStart(e) {
		this.touchtimer = setTimeout(() => {
			this.touchlongclick = true;

			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.touchaction)) {
				this.touchinterval = setInterval(() => {
					this.onButtonClick(e, this.touchaction, false);
				}, 100);
			} else {
				this.onButtonClick(
					e,
					this._config.long_click_keycode ?? 'center',
					this._config.long_click_keycode ? false : true
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
	onTouchEnd(e) {
		if (this.touchlongclick) {
			this.touchlongclick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}
		clearTimeout(this.touchtimer);
		clearInterval(this.touchinterval);
		clearTimeout(this.clicktimer);

		this.touchaction = null;
		this.touchtimer = null;
		this.touchinterval = null;
		this.clicktimer = null;
	}

	/**
	 * Event handler for touchpad swipe move
	 * @param {Event} e
	 */
	onTouchMove(e) {
		if (!window.initialX || !window.initialY) {
			return;
		}

		let currentX = e.touches[0].clientX;
		let currentY = e.touches[0].clientY;

		let diffX = window.initialX - currentX;
		let diffY = window.initialY - currentY;

		let action;
		if (Math.abs(diffX) > Math.abs(diffY)) {
			// sliding horizontally
			action = diffX > 0 ? 'left' : 'right';
		} else {
			// sliding vertically
			action = diffY > 0 ? 'up' : 'down';
		}
		this.touchaction = action;
		this.onButtonClick(e, action, false);

		window.initialX = null;
		window.initialY = null;
	}

	/**
	 * Event handler for button click
	 * @param {Event} e
	 * @param {string} [action]
	 * @param {boolean} [longPress=false]
	 */
	onButtonClick(e, action, longPress = false) {
		action = action || e.currentTarget.action;
		let info = this.getInfo(action);

		let haptic = longPress ? 'medium' : 'light';
		if (action == 'center' && !longPress) {
			haptic = 'selection';
		} else if (action == this._config.double_click_keycode) {
			haptic = 'success';
		}
		this.fireHapticEvent(window, haptic);

		switch (info.key) {
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
	onButtonLongClickStart(e) {
		this.holdaction = e.currentTarget.action;
		this.holdtimer = setTimeout(() => {
			this.holdlongclick = true;

			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.holdaction)) {
				this.holdinterval = setInterval(() => {

					this.onButtonClick(e, this.holdaction, false)
				}, 100);
			} else {
				this.onButtonClick(e, this.holdaction, true)
			}
		}, 500);
	}

	/**
	 * Event handler for button long click end
	 * @param {Event} e
	 */
	onButtonLongClickEnd(e) {
		if (this.holdlongclick) {
			this.holdlongclick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}

		clearTimeout(this.holdtimer);
		clearInterval(this.holdinterval);

		this.holdaction = null;
		this.holdtimer = null;
		this.holdinterval = null;
	}

	/**
	 * Event handler for keyboard keydown events, used for non-alphanumerical keys
	 * @param {Event} e
	 */
	onKeyDown(e) {
		e.stopImmediatePropagation();

		const keyToKey = {
			Backspace: 'delete',
			Delete: 'forward_delete',
			Enter: 'enter',
			ArrowLeft: 'left',
			ArrowRight: 'right',
		};

		let key = keyToKey[e.key];
		if (key) {
			if (e.currentTarget.value != '') {
				e.currentTarget.blur();
				e.currentTarget.value = '';
				e.currentTarget.focus();
			}
			this.sendAction(key);
		}
	}

	/**
	 * Event handler for keyboard input events, used for alphanumerical keys and works on all platforms
	 * @param {Event} e
	 */
	onInput(e) {
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
	onPaste(e) {
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
	onFocus(e) {
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
	onFocusOut(e) {
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
	onKeyboardPress(e, _longpress) {
		e.currentTarget.children[1].focus();
	}

	/**
	 * Event handler for sending bulk text via legacy prompt method
	 * @param {Event} e
	 * @param {boolean} [longPress=false]
	 */
	onTextboxPress(e, _longpress) {
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
	onSearchPress(e, _longpress) {
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

	buildIconButton(action) {
		let info = this.getInfo(action);
		let icon = info?.icon ?? '';
		let svg_path = info.svg_path ?? this.custom_icons[icon] ?? '';

		// Use original icon if none provided for custom key or source
		if (!(icon || svg_path)) {
			let iconInfo =
				this.defaultKeys[action] || this.defaultSources[action] || {};
			icon = iconInfo?.icon ?? '';
			svg_path = iconInfo?.svg_path ?? '';
		}

		let kInput = html``;
		if (info.key == 'KEYBOARD') {
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

	buildRow(content) {
		return html` <div class="row">${content}</div> `;
	}
	buildButtonsFromActions(actions) {
		return actions.map((action) => this.buildIconButton(action));
	}

	triggerRender() {
		this.trigger = Math.random();
	}

	render() {
		if (!this._config || !this._hass) {
			return html``;
		}

		let content = [];
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
								const touchpad = [
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
								content.push([touchpad]);
							}
						}
						break;
					}

					default: {
						content.push([
							this.buildButtonsFromActions(
								this._config[row_name]
							),
						]);
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

	applyThemesOnElement(element, themes, localTheme) {
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
					meta.getAttribute('content')
				);
			}
			const themeColor =
				styles['--primary-color'] ||
				meta.getAttribute('default-content');
			meta.setAttribute('content', themeColor);
		}
	}
}

customElements.define('android-tv-card', TVCardServices);
