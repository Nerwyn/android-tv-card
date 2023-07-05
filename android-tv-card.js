import { defaultKeys, defaultSources } from './models';

const LitElement = Object.getPrototypeOf(
	customElements.get('ha-panel-lovelace')
);
const html = LitElement.prototype.html;

class TVCardServices extends LitElement {
	constructor() {
		super();

		this.custom_keys = {};
		this.custom_sources = {};
		this.custom_icons = {};

		this.holdtimer = null;
		this.holdaction = null;
		this.holdinterval = null;
		this.timer = null;
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
		// let numRows = Object.keys(this._config).filter((key) =>
		// 	key.includes('_row')
		// ).length;
		// if ('title' in this._config) {
		// 	numRows += 1;
		// }
		// return numRows;
		return 7;
	}

	setConfig(config) {
		this._config = { theme: 'default', ...config };
		this.custom_keys = config.custom_keys || {};
		this.custom_sources = config.custom_sources || {};
		this.custom_icons = config.custom_icons || {};

		this.loadCardHelpers();
		this.renderVolumeSlider();
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

	fireEvent = function (node, type, detail, _options) {
		detail = detail === null || detail === undefined ? {} : detail;
		let e = new Event(type, {
			bubbles: false,
		});
		e.detail = detail;
		node.dispatchEvent(e);
		return e;
	};

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

	async renderVolumeSlider() {
		if (this._helpers === undefined)
			await new Promise((resolve) => (this._helpersResolve = resolve));
		if (this._hass === undefined)
			await new Promise((resolve) => (this._hassResolve = resolve));
		this._helpersResolve = undefined;
		this._hassResolve = undefined;

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
		this.triggerRender();
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
			defaultKeys[action] ||
			defaultSources[action]
		);
	}

	/**
	 * Send either a command to an Android TV remote or a custom key to any service
	 * @param {string} action
	 * @param {boolean} [longPress=true]
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
			if (longPress) {
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
			let action = 'center';
			this.sendAction(action);

			this.fireHapticEvent(window, 'light');
		};
		if (this._config.enable_double_click) {
			this.timer = setTimeout(click_action, 200);
		} else {
			click_action();
		}
	}

	/**
	 * Event handler for touchpad double click
	 * @param {Event} e
	 */
	onTouchDoubleClick(e) {
		if (
			this._config.enable_double_click !== undefined &&
			!this._config.enable_double_click
		)
			return;

		e.stopImmediatePropagation();

		clearTimeout(this.timer);
		this.timer = null;

		let action = this._config.double_click_keycode
			? this._config.double_click_keycode
			: 'back';
		this.sendAction(action);

		this.fireHapticEvent(window, 'success');
	}

	/**
	 * Event handler for touchpad swipe start
	 * @param {Event} e
	 */
	onTouchStart(e) {
		e.stopImmediatePropagation();

		this.holdtimer = setTimeout(() => {
			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.holdaction)) {
				this.holdinterval = setInterval(() => {
					this.sendAction(this.holdaction);
					this.fireHapticEvent(window, 'light');
				}, 100);
			} else {
				this.sendAction('center', true);
				this.fireHapticEvent(window, 'medium');
			}
		}, 500);

		window.initialX = e.touches[0].clientX;
		window.initialY = e.touches[0].clientY;
	}

	/**
	 * Event handler for touchpad swipe end
	 * @param {Event} _e
	 */
	onTouchEnd(_e) {
		clearTimeout(this.timer);
		clearTimeout(this.holdtimer);
		clearInterval(this.holdinterval);

		this.holdtimer = null;
		this.timer = null;
		this.holdinterval = null;
		this.holdaction = null;
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
		this.holdaction = action;
		this.sendAction(action);

		this.fireHapticEvent(window, 'selection');
		window.initialX = null;
		window.initialY = null;
	}

	/**
	 * Event handler for button click
	 * @param {Event} e
	 */
	onButtonClick(e) {
		let action = e.currentTarget.action;
		this.sendAction(action);
		this.fireHapticEvent(window, 'light');
	}

	/**
	 * Event handler for button long click start
	 * @param {Event} e
	 */
	onButtonLongClickStart(e) {
		this.holdaction = e.currentTarget.action;
		this.holdtimer = setTimeout(() => {
			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down'].includes(this.holdaction)) {
				this.holdinterval = setInterval(() => {
					this.sendAction(this.holdaction);
					this.fireHapticEvent(window, 'light');
				}, 100);
			} else {
				this.sendAction(this.holdaction, true);
				this.fireHapticEvent(window, 'medium');
			}
		}, 500);
	}

	/**
	 * Event handler for button long click end
	 * @param {Event} _e
	 */
	onButtonLongClickEnd(_e) {
		clearTimeout(this.timer);
		clearTimeout(this.holdtimer);
		clearInterval(this.holdinterval);

		this.holdtimer = null;
		this.timer = null;
		this.holdinterval = null;
		this.holdaction = null;
	}

	buildIconButton(action) {
		let info = this.getInfo(action);
		let icon = info.icon;
		let svg_path = info.svg_path ?? this.custom_icons[icon];

		return html`
			<ha-icon-button
				.action="${action}"
				@click="${this.onButtonClick}"
				@touchstart="${this.onButtonLongClickStart}"
				@touchend="${this.onButtonLongClickEnd}"
				title="${action}"
				.path="${svg_path ?? ''}"
			>
				<ha-icon
					.icon="${!svg_path ? icon : ''}"
				</ha-icon>
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
		if (!this._config || !this._hass || !this.volume_slider) {
			return html``;
		}

		let content = [];
		Object.keys(this._config).forEach((row_name) => {
			if (row_name.includes('_row')) {
				let row_actions = this._config[row_name];
				let row = [];

				switch (row_name) {
					case 'volume_row': {
						if (this._config.volume_row == 'buttons') {
							row = [
								this.buildIconButton('volume_down'),
								this.buildIconButton('volume_mute'),
								this.buildIconButton('volume_up'),
							];
						} else if (this._config.volume_row == 'slider') {
							row.push(this.volume_slider);
						}
						break;
					}

					case 'navigation_row': {
						switch (this._config.navigation_row) {
							case 'buttons': {
								let up_row = [this.buildIconButton('up')];
								let middle_row = [
									this.buildIconButton('left'),
									this.buildIconButton('center'),
									this.buildIconButton('right'),
								];
								let down_row = [this.buildIconButton('down')];
								row.push(...[up_row, middle_row, down_row]);
								break;
							}

							case 'touchpad':
							default: {
								const touchpad = [
									html`
										<toucharea
											id="toucharea"
											@click="${this.onTouchClick}"
											@dblclick="${this
												.onTouchDoubleClick}"
											@touchstart="${this.onTouchStart}"
											@touchmove="${this.onTouchMove}"
											@touchend="${this.onTouchEnd}"
										>
										</toucharea>
									`,
								];
								row.push(touchpad);
							}
						}
						break;
					}

					default: {
						row = this.buildButtonsFromActions(row_actions);
					}
				}
				content.push(row);
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
					width: 64px;
					height: 64px;
					cursor: pointer;
					--mdc-icon-size: 100%;
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
				(element),
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
