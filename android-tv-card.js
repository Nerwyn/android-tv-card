const LitElement = Object.getPrototypeOf(
	customElements.get('ha-panel-lovelace')
);
const html = LitElement.prototype.html;

/**
 * This is the list of msot common commands from the Android TV Remote integration page
 * https://www.home-assistant.io/integrations/androidtv_remote/#remote
 */
const keys = {
	power: { key: 'POWER', icon: 'mdi:power' },
	volume_up: { key: 'VOLUME_UP', icon: 'mdi:volume-plus' },
	volume_down: { key: 'VOLUME_DOWN', icon: 'mdi:volume-minus' },
	volume_mute: { key: 'MUTE', icon: 'mdi:volume-mute' },
	back: { key: 'BACK', icon: 'mdi:arrow-left' },
	home: { key: 'HOME', icon: 'mdi:home' },
	up: { key: 'DPAD_UP', icon: 'mdi:chevron-up' },
	left: { key: 'DPAD_LEFT', icon: 'mdi:chevron-left' },
	enter: { key: 'DPAD_CENTER', icon: 'mdi:checkbox-blank-circle' },
	right: { key: 'DPAD_RIGHT', icon: 'mdi:chevron-right' },
	down: { key: 'DPAD_DOWN', icon: 'mdi:chevron-down' },
	play: { key: 'MEDIA_PLAY_', icon: 'mdi:play' },
	pause: { key: 'MEDIA_PAUSE', icon: 'mdi:pause' },
	play_pause: { key: 'MEDIA_PLAY_PAUSE', icon: 'mdi:play-pause' },
	stop: { key: 'MEDIA_STOP', icon: 'mdi:stop' },
	rewind: { key: 'MEDIA_REWIND', icon: 'mdi:rewind' },
	fast_forward: { key: 'MEDIA_FAST_FORWARD', icon: 'mdi:fast-forward' },
	previous: { key: 'MEDIA_PREVIOUS', icon: 'mdi:skip-previous' },
	record: { key: 'MEDIA_RECORD', icon: 'mdi:record' },
	next: { key: 'MEDIA_NEXT', icon: 'mdi:skip-next' },
	menu: { key: 'MENU', icon: 'mdi:menu' },
	a: { key: 'BUTTON_A', icon: 'mdi:alpha-a-circle' },
	b: { key: 'BUTTON_B', icon: 'mdi:alpha-B-circle' },
	x: { key: 'BUTTON_X', icon: 'mdi:alpha-x-circle' },
	y: { key: 'BUTTON_Y', icon: 'mdi:alpha-y-circle' },
	n0: { key: '0', icon: 'mdi:numeric-0' },
	n1: { key: '1', icon: 'mdi:numeric-1' },
	n2: { key: '2', icon: 'mdi:numeric-2' },
	n3: { key: '3', icon: 'mdi:numeric-3' },
	n4: { key: '4', icon: 'mdi:numeric-4' },
	n5: { key: '5', icon: 'mdi:numeric-5' },
	n6: { key: '6', icon: 'mdi:numeric-6' },
	n7: { key: '7', icon: 'mdi:numeric-7' },
	n8: { key: '8', icon: 'mdi:numeric-8' },
	n9: { key: '9', icon: 'mdi:numeric-9' },
	delete: { key: 'DEL', icon: 'mdi:delete' },
	enter: { key: 'ENTER', icon: 'mdi:checkbox-blank-circle' },
	channel_up: { key: 'CHANNEL_UP', icon: 'mdi:arrow-up-circle' },
	channel_down: { key: 'CHANNEL_DOWN', icon: 'mdi:arrow-down-circle' },
	f1: { key: 'F1', icon: 'mdi:keyboard-f1' },
	f2: { key: 'F2', icon: 'mdi:keyboard-f2' },
	f3: { key: 'F3', icon: 'mdi:keyboard-f3' },
	f4: { key: 'F4', icon: 'mdi:keyboard-f4' },
	f5: { key: 'F5', icon: 'mdi:keyboard-f5' },
	f6: { key: 'F6', icon: 'mdi:keyboard-f6' },
	f7: { key: 'F7', icon: 'mdi:keyboard-f7' },
	f8: { key: 'F8', icon: 'mdi:keyboard-f8' },
	f9: { key: 'F9', icon: 'mdi:keyboard-f9' },
	f10: { key: 'F10', icon: 'mdi:keyboard-f10' },
	f11: { key: 'F11', icon: 'mdi:keyboard-f11' },
	f12: { key: 'F12', icon: 'mdi:keyboard-f12' },
	tv: { key: 'TV', icon: 'mdi:television-box' },
	red: { key: 'PROG_RED', icon: 'mdi:alpha-r-box' },
	green: { key: 'PROG_GREEN', icon: 'mdi:alpha-g-box' },
	yellow: { key: 'PROG_YELLOW', icon: 'mdi:alpha-y-box' },
	blue: { key: 'PROG_BLUE', icon: 'mdi:alpha-b-box' },
	button_mode: { key: 'BUTTON_MODE', icon: 'mdi:gesture-tap-buton' },
	explorer: { key: 'EXPLORER', icon: 'mdi:folder-multiple' },
	info: { key: 'INFO', icon: 'mdi:information' },
	guide: { key: 'GUIDE', icon: 'mdi:television-guide' },
	teletext: { key: 'TV_TELETEXT', icon: 'mdi:card-text' },
	captions: { key: 'CAPTIONS', icon: 'mdi:closed-caption' },
	dvr: { key: 'DVR', icon: 'mdi:audio-video' },
	audio_track: { key: 'MEDIA_AUDIO_TRACK', icon: 'mdi:waveform' },
	settings: { key: 'SETTINGS', icon: 'mdi:cog' },
	search: { key: 'SEARCH', icon: 'mdi:magnify' },
	assist: { key: 'ASSIST', icon: 'mdi:google-assistant' },
};

const sources = {
	netflix: { source: 'Netflix', icon: 'mdi:netflix' },
	spotify: { source: 'Spotify', icon: 'mdi:spotify' },
	youtube: { source: 'YouTube', icon: 'mdi:youtube' },
};

var fireEvent = function (node, type, detail, options) {
	options = options || {};
	detail = detail === null || detail === undefined ? {} : detail;
	var event = new Event(type, {
		bubbles: false,
	});
	event.detail = detail;
	node.dispatchEvent(event);
	return event;
};

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
		if (this.volume_slider) this.volume_slider.hass = hass;
		if (this._hassResolve) this._hassResolve();
	}

	get hass() {
		return this._hass;
	}

	fireHapticEvent(window, detail) {
		if (
			this._config.enable_button_feedback === undefined ||
			this._config.enable_button_feedback
		) {
			fireEvent(window, 'haptic', detail);
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
			(e) => {
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

	/**
	 * Send either a command to an Android TV remote or a custom key to any service
	 * @param {string} action
	 * @param {boolean} [longPress=true]
	 */
	sendAction(action, longPress = false) {
		let info =
			this.custom_keys[action] ||
			this.custom_sources[action] ||
			keys[action] ||
			sources[action];
		if (info.key) {
			let key = info.key;
			this.sendKey(key, longPress);
		}
		if (info.service) {
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

	changeSource(source) {
		this._hass.callService('media_player', 'select_source', {
			source: source,
			entity_id: this._config.media_player_id,
		});
	}

	onClick(event) {
		event.stopImmediatePropagation();
		let click_action = () => {
			let action = 'enter';
			this.sendAction(action);

			this.fireHapticEvent(window, 'light');
		};
		if (this._config.enable_double_click) {
			this.timer = setTimeout(click_action, 200);
		} else {
			click_action();
		}
	}

	onDoubleClick(event) {
		if (
			this._config.enable_double_click !== undefined &&
			!this._config.enable_double_click
		)
			return;

		event.stopImmediatePropagation();

		clearTimeout(this.timer);
		this.timer = null;

		action = this._config.double_click_keycode
			? this._config.double_click_keycode
			: 'back';
		this.sendAction(action);

		this.fireHapticEvent(window, 'success');
	}

	onTouchStart(event) {
		event.stopImmediatePropagation();

		this.holdtimer = setTimeout(() => {
			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.holdaction)) {
				this.holdinterval = setInterval(() => {
					this.sendAction(this.holdaction);
					this.fireHapticEvent(window, 'light');
				}, 100);
			} else {
				this.sendAction('enter', true);
				this.fireHapticEvent(window, 'medium');
			}
		}, 500);

		window.initialX = event.touches[0].clientX;
		window.initialY = event.touches[0].clientY;
	}

	onTouchEnd(event) {
		clearTimeout(this.timer);
		clearTimeout(this.holdtimer);
		clearInterval(this.holdinterval);

		this.holdtimer = null;
		this.timer = null;
		this.holdinterval = null;
		this.holdaction = null;
	}

	onTouchMove(event) {
		if (!initialX || !initialY) {
			return;
		}

		var currentX = event.touches[0].clientX;
		var currentY = event.touches[0].clientY;

		var diffX = initialX - currentX;
		var diffY = initialY - currentY;

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
		initialX = null;
		initialY = null;
	}

	handleActionClick(e) {
		let action = e.currentTarget.action;
		this.sendAction(action);
		this.fireHapticEvent(window, 'light');
	}



	buildIconButton(action) {
		let button_info =
			this.custom_keys[action] ||
			this.custom_sources[action] ||
			keys[action] ||
			sources[action] ||
			{};
		let icon = button_info.icon;
		let custom_svg_path = this.custom_icons[icon];

		return html`
            <ha-icon-button
                .action="${action}"
                @click="${this.handleActionClick}"
                title="${action}"
                .path="${custom_svg_path ? custom_svg_path : ''}"
                >
                <ha-icon
                    .icon="${!custom_svg_path ? icon : ''}"
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

		const row_names = [
			'power_row',
			'channel_row',
			'apps_row',
			'source_row',
			'volume_row',
			'media_control_row',
			'navigation_row',
		];

		var content = [];
		Object.keys(this._config).forEach((row_name) => {
			if (row_names.includes(row_name)) {
				let row_actions = this._config[row_name];

				if (row_name === 'volume_row') {
					let volume_row = [];
					if (this._config.volume_row == 'buttons') {
						volume_row = [
							this.buildIconButton('volume_down'),
							this.buildIconButton('volume_mute'),
							this.buildIconButton('volume_up'),
						];
					} else if (this._config.volume_row == 'slider') {
						volume_row = [this.volume_slider];
					}
					content.push(volume_row);
				} else if (row_name === 'navigation_row') {
					let navigation_row = [];

					if (this._config.navigation_row == 'buttons') {
						let up_row = [this.buildIconButton('up')];
						let middle_row = [
							this.buildIconButton('left'),
							this.buildIconButton('enter'),
							this.buildIconButton('right'),
						];
						let down_row = [this.buildIconButton('down')];
						navigation_row = [up_row, middle_row, down_row];
					} else if (this._config.navigation_row == 'touchpad') {
						var touchpad = [
							html`
								<toucharea
									id="toucharea"
									@click="${this.onClick}"
									@dblclick="${this.onDoubleClick}"
									@touchstart="${this.onTouchStart}"
									@touchmove="${this.onTouchMove}"
									@touchend="${this.onTouchEnd}"
								>
								</toucharea>
							`,
						];
						navigation_row = [touchpad];
					}
					content.push(...navigation_row);
				} else {
					let row_content = this.buildButtonsFromActions(row_actions);
					content.push(row_content);
				}
			}
		});

		content = content.map(this.buildRow);

		var output = html`
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
					height: 250px;
					background: #6d767e;
					touch-action: none;
					text-align: center;
				}
			</style>
		`;
	}

	applyThemesOnElement(element, themes, localTheme) {
		if (!element._themes) {
			element._themes = {};
		}
		let themeName = themes.default_theme;
		if (
			localTheme === 'default' ||
			(localTheme && themes.themes[localTheme])
		) {
			themeName = localTheme;
		}
		const styles = Object.assign({}, element._themes);
		if (themeName !== 'default') {
			var theme = themes.themes[themeName];
			Object.keys(theme).forEach((key) => {
				var prefixedKey = '--' + key;
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
