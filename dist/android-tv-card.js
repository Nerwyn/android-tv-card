/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/android-tv-card.ts":
/*!********************************!*\
  !*** ./src/android-tv-card.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const models_1 = __webpack_require__(/*! ./models */ "./src/models/index.ts");
const LitElement = Object.getPrototypeOf(customElements.get('ha-panel-lovelace'));
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
        let numRows = Object.keys(this._config).filter((key) => key.includes('_row')).length;
        if ('title' in this._config) {
            numRows += 1;
        }
        return numRows;
    }
    setConfig(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this._config = Object.assign({ theme: 'default' }, config);
            this.customKeys = config.custom_keys || {};
            this.customSources = config.custom_sources || {};
            this.customIcons = config.custom_icons || {};
            this.defaultKeys = models_1.defaultKeys;
            this.defaultSources = models_1.defaultSources;
            if (this._config.alt_volume_icons) {
                this.useAltVolumeIcons();
            }
            yield this.loadCardHelpers();
            yield this.loadHassHelpers();
            if (this._config.volume_row == 'slider') {
                yield this.renderVolumeSlider();
            }
            this.triggerRender();
        });
    }
    isButtonEnabled(row, button) {
        if (!(this._config[row] instanceof Array))
            return false;
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
    fireEvent(window, type, detail) {
        let e = new Event(type, {
            bubbles: false,
        });
        e.detail = detail;
        window.dispatchEvent(e);
        return e;
    }
    fireHapticEvent(window, detail) {
        if (this._config.enable_button_feedback === undefined ||
            this._config.enable_button_feedback) {
            this.fireEvent(window, 'haptic', detail);
        }
    }
    loadCardHelpers() {
        return __awaiter(this, void 0, void 0, function* () {
            this._helpers = yield window.loadCardHelpers();
            if (this._helpersResolve)
                this._helpersResolve();
        });
    }
    loadHassHelpers() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._helpers === undefined)
                yield new Promise((resolve) => (this._helpersResolve = resolve));
            if (this._hass === undefined)
                yield new Promise((resolve) => (this._hassResolve = resolve));
            this._helpersResolve = undefined;
            this._hassResolve = undefined;
        });
    }
    renderVolumeSlider() {
        return __awaiter(this, void 0, void 0, function* () {
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
                slider_config = Object.assign(Object.assign({}, slider_config), this._config.slider_config);
            }
            this.volume_slider = yield this._helpers.createCardElement(slider_config);
            this.volume_slider.style = 'flex: 0.9;';
            this.volume_slider.ontouchstart = (e) => {
                e.stopImmediatePropagation();
                this.fireHapticEvent(window, 'light');
            };
            this.volume_slider.addEventListener('input', (_e) => {
                this.fireHapticEvent(window, 'light');
            }, true);
            this.volume_slider.hass = this._hass;
        });
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
        return (this.customKeys[action] ||
            this.customSources[action] ||
            this.defaultKeys[action] ||
            this.defaultSources[action] ||
            {});
    }
    /**
     * Send either a command to an Android TV remote or a custom key to any service
     * @param {string} action
     * @param {boolean} [longPress=false]
     */
    sendAction(action, longPress = false) {
        let info = this.getInfo(action);
        if ('key' in info) {
            let key = info.key;
            this.sendKey(key, longPress);
        }
        else if ('source' in info) {
            this.changeSource(info.source);
        }
        else if ('service' in info) {
            let service_data = JSON.parse(JSON.stringify(info.service_data || {}));
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
            }
            else {
                this.clickTimer = setTimeout(click_action, 200);
            }
        }
        else {
            click_action();
        }
    }
    /**
     * Event handler for touchpad double click
     * @param {Event} e
     */
    onTouchDoubleClick(e) {
        var _a;
        clearTimeout(this.clickTimer);
        this.clickTimer = null;
        this.clickCount = 0;
        let action = (_a = this._config.double_click_keycode) !== null && _a !== void 0 ? _a : 'back';
        this.onButtonClick(e, action, false);
    }
    /**
     * Event handler for touchpad swipe and long click start
     * @param {Event} e
     */
    onTouchStart(e) {
        var _a, _b;
        this.touchTimer = setTimeout(() => {
            var _a;
            this.touchLongClick = true;
            // Only repeat hold action for directional keys
            if (['up', 'down', 'left', 'right'].includes(this.touchAction)) {
                this.touchInterval = setInterval(() => {
                    this.onButtonClick(e, this.touchAction, false);
                }, 100);
            }
            else {
                this.onButtonClick(e, (_a = this._config.long_click_keycode) !== null && _a !== void 0 ? _a : 'center', this._config.long_click_keycode ? false : true);
            }
        }, 500);
        window.initialX = (_a = e.touches) === null || _a === void 0 ? void 0 : _a[0].clientX;
        window.initialY = (_b = e.touches) === null || _b === void 0 ? void 0 : _b[0].clientY;
    }
    /**
     * Event handler for touchpad swipe end
     * @param {Event} e
     */
    onTouchEnd(e) {
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
    onTouchMove(e) {
        var _a, _b;
        if (!window.initialX || !window.initialY) {
            return;
        }
        let currentX = ((_a = e.touches) === null || _a === void 0 ? void 0 : _a[0].clientX) || 0;
        let currentY = ((_b = e.touches) === null || _b === void 0 ? void 0 : _b[0].clientY) || 0;
        let diffX = window.initialX - currentX;
        let diffY = window.initialY - currentY;
        let action;
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Sliding horizontally
            action = diffX > 0 ? 'left' : 'right';
        }
        else {
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
    onButtonClick(e, action, longPress = false) {
        action = action || e.currentTarget.action;
        let info = this.getInfo(action);
        let haptic = longPress ? 'medium' : 'light';
        if (action == 'center' && !longPress) {
            haptic = 'selection';
        }
        else if (action == this._config.double_click_keycode) {
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
    onButtonLongClickStart(e) {
        this.holdAction = e.currentTarget.action;
        this.holdTimer = setTimeout(() => {
            this.holdLongClick = true;
            // Only repeat hold action for directional keys and volume
            // prettier-ignore
            if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.holdAction)) {
                this.holdInterval = setInterval(() => {
                    this.onButtonClick(e, this.holdAction, false);
                }, 100);
            }
            else {
                this.onButtonClick(e, this.holdAction, true);
            }
        }, 500);
    }
    /**
     * Event handler for button long click end
     * @param {Event} e
     */
    onButtonLongClickEnd(e) {
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
    onKeyDown(e) {
        var _a, _b, _c, _d;
        e.stopImmediatePropagation();
        const keyToKey = {
            Backspace: 'delete',
            Delete: 'forward_delete',
            Enter: 'enter',
            ArrowLeft: 'left',
            ArrowRight: 'right',
        };
        let key = keyToKey[(_a = e.key) !== null && _a !== void 0 ? _a : ''];
        if (key) {
            if (((_b = e.currentTarget) === null || _b === void 0 ? void 0 : _b.value) != '') {
                (_c = e.currentTarget) === null || _c === void 0 ? void 0 : _c.blur();
                e.currentTarget.value = '';
                (_d = e.currentTarget) === null || _d === void 0 ? void 0 : _d.focus();
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
                command: 'am start -a "android.search.action.GLOBAL_SEARCH" --es query "' +
                    text +
                    '"',
            };
            this._hass.callService('androidtv', 'adb_command', data);
        }
    }
    buildIconButton(action) {
        var _a, _b, _c, _d, _f;
        let info = this.getInfo(action);
        let icon = (_a = info === null || info === void 0 ? void 0 : info.icon) !== null && _a !== void 0 ? _a : '';
        let svg_path = (_c = (_b = info.svg_path) !== null && _b !== void 0 ? _b : this.customIcons[icon]) !== null && _c !== void 0 ? _c : '';
        // Use original icon if none provided for custom key or source
        if (!(icon || svg_path)) {
            let iconInfo = this.defaultKeys[action] || this.defaultSources[action] || {};
            icon = (_d = iconInfo === null || iconInfo === void 0 ? void 0 : iconInfo.icon) !== null && _d !== void 0 ? _d : '';
            svg_path = (_f = iconInfo === null || iconInfo === void 0 ? void 0 : iconInfo.svg_path) !== null && _f !== void 0 ? _f : '';
        }
        let kInput = html ``;
        if ('key' in info && info.key == 'KEYBOARD') {
            kInput = html `
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
        return html `
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
        return html ` <div class="row">${content}</div> `;
    }
    buildButtonsFromActions(actions) {
        return actions.map((action) => this.buildIconButton(action));
    }
    triggerRender() {
        this.trigger = Math.random();
    }
    render() {
        if (!this._config || !this._hass) {
            return html ``;
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
                        }
                        else if (this._config.volume_row == 'slider') {
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
                                    html `
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
                        content.push(this.buildButtonsFromActions(this._config[row_name]));
                    }
                }
            }
        });
        content = content.map(this.buildRow);
        let output = html `
			${this.renderStyle()}
			<ha-card .header="${this._config.title}">${content}</ha-card>
		`;
        return html `${output}`;
    }
    renderStyle() {
        return html `
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
        var _a;
        element._themes = (_a = element._themes) !== null && _a !== void 0 ? _a : {};
        let themeName = themes.default_theme;
        if (localTheme === 'default' ||
            (localTheme && themes.themes[localTheme])) {
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
        }
        else if (window.ShadyCSS) {
            // implement updateStyles() method of Polemer elements
            window.ShadyCSS.styleSubtree(
            /** @type {!HTMLElement} */
            element, styles);
        }
        const meta = document.querySelector('meta[name=theme-color]');
        if (meta) {
            if (!meta.hasAttribute('default-content')) {
                meta.setAttribute('default-content', meta.getAttribute('content'));
            }
            const themeColor = styles['--primary-color'] ||
                meta.getAttribute('default-content');
            meta.setAttribute('content', themeColor);
        }
    }
}
customElements.define('android-tv-card', TVCardServices);


/***/ }),

/***/ "./src/models/defaultKeys.ts":
/*!***********************************!*\
  !*** ./src/models/defaultKeys.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultKeys = void 0;
/**
 * This is the list of most common commands from the Android TV Remote integration page.
 * Not all are ensured to work, and if they do not it is likely an issue with the underlying package used by the Android TV Remote integration or the Android TV Remote Protocol V2 itself.
 * https://www.home-assistant.io/integrations/androidtv_remote/#remote
 */
exports.defaultKeys = {
    power: { key: 'POWER', icon: 'mdi:power' },
    volume_up: { key: 'VOLUME_UP', icon: 'mdi:volume-plus' },
    volume_down: { key: 'VOLUME_DOWN', icon: 'mdi:volume-minus' },
    volume_mute: { key: 'MUTE', icon: 'mdi:volume-mute' },
    back: { key: 'BACK', icon: 'mdi:keyboard-backspace' },
    home: { key: 'HOME', icon: 'mdi:home' },
    up: { key: 'DPAD_UP', icon: 'mdi:chevron-up' },
    left: { key: 'DPAD_LEFT', icon: 'mdi:chevron-left' },
    center: { key: 'DPAD_CENTER', icon: 'mdi:checkbox-blank-circle' },
    right: { key: 'DPAD_RIGHT', icon: 'mdi:chevron-right' },
    down: { key: 'DPAD_DOWN', icon: 'mdi:chevron-down' },
    play: { key: 'MEDIA_PLAY', icon: 'mdi:play' },
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
    delete: { key: 'DEL', icon: 'mdi:backspace' },
    forward_delete: { key: 'FOWARD_DEL', icon: 'mdi:backspace-reverse' },
    enter: { key: 'ENTER', icon: 'mdi:magnify' },
    keyboard: { key: 'KEYBOARD', icon: 'mdi:keyboard' },
    search: { key: 'SEARCH', icon: 'mdi:google-assistant' },
    textbox: { key: 'TEXTBOX', icon: 'mdi:text-box' },
};


/***/ }),

/***/ "./src/models/defaultSources.ts":
/*!**************************************!*\
  !*** ./src/models/defaultSources.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultSources = void 0;
const _1 = __webpack_require__(/*! . */ "./src/models/index.ts");
/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
 */
exports.defaultSources = {
    appletv: {
        source: 'https://tv.apple.com',
        svg_path: _1.svg.APPLETV,
    },
    crunchyroll: {
        source: 'crunchyroll://',
        svg_path: _1.svg.CRUNCHYROLL,
    },
    disney: {
        source: 'https://www.disneyplus.com',
        svg_path: _1.svg.DISNEY,
    },
    emby: {
        source: 'embyatv://tv.emby.embyatv/startapp',
        icon: 'mdi:emby',
    },
    foxsports: {
        source: 'foxsports://live',
        svg_path: _1.svg.FOXSPORTS,
    },
    hulu: {
        source: 'hulu://',
        icon: 'mdi:hulu',
    },
    max: {
        source: 'https://play.max.com',
        svg_path: _1.svg.MAX,
    },
    mlbtv: {
        source: 'mlbatbat://',
        svg_path: _1.svg.MLBTV,
    },
    nba: {
        source: 'gametime://',
        svg_path: _1.svg.NBA,
    },
    netflix: { source: 'netflix://', icon: 'mdi:netflix' },
    plex: {
        source: 'plex://',
        icon: 'mdi:plex',
    },
    primevideo: {
        source: 'https://app.primevideo.com',
        svg_path: _1.svg.PRIMEVIDEO,
    },
    pia: {
        source: 'piavpn://',
        svg_path: _1.svg.PIA,
    },
    spotify: { source: 'spotify://', icon: 'mdi:spotify' },
    surfshark: {
        source: 'https://surfshark.com/locations-ul',
        svg_path: _1.svg.SURFSHARK,
    },
    vudu: {
        source: 'vuduapp://',
        svg_path: _1.svg.VUDU,
    },
    youtube: { source: 'vnd.youtube://', icon: 'mdi:youtube' },
    youtubetv: {
        source: 'https://tv.youtube.com',
        icon: 'mdi:youtube-tv',
    },
};


/***/ }),

/***/ "./src/models/enums/index.ts":
/*!***********************************!*\
  !*** ./src/models/enums/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./svg */ "./src/models/enums/svg.ts"), exports);


/***/ }),

/***/ "./src/models/enums/svg.ts":
/*!*********************************!*\
  !*** ./src/models/enums/svg.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.svg = void 0;
var svg;
(function (svg) {
    svg["APPLETV"] = "M 6.820312 8.246094 C 7.179688 7.824219 7.398438 7.273438 7.398438 6.675781 C 7.398438 6.613281 7.398438 6.550781 7.394531 6.492188 L 7.394531 6.5 C 6.746094 6.566406 6.183594 6.871094 5.785156 7.324219 L 5.78125 7.328125 C 5.417969 7.726562 5.195312 8.261719 5.195312 8.851562 C 5.195312 8.910156 5.199219 8.96875 5.203125 9.023438 L 5.203125 9.015625 C 5.207031 9.015625 5.214844 9.015625 5.222656 9.015625 C 5.867188 9.015625 6.445312 8.71875 6.820312 8.25 Z M 8.195312 12.304688 C 8.203125 13.292969 8.796875 14.140625 9.648438 14.511719 L 9.664062 14.519531 C 9.46875 15.109375 9.214844 15.625 8.894531 16.09375 L 8.90625 16.070312 C 8.449219 16.734375 7.980469 17.398438 7.230469 17.414062 C 6.5 17.429688 6.269531 16.980469 5.425781 16.980469 C 4.589844 16.980469 4.328125 17.398438 3.632812 17.429688 C 2.925781 17.453125 2.375 16.703125 1.914062 16.039062 C 1.226562 15.109375 0.8125 13.941406 0.8125 12.671875 C 0.8125 11.902344 0.964844 11.167969 1.242188 10.5 L 1.226562 10.535156 C 1.679688 9.734375 2.519531 9.195312 3.484375 9.171875 L 3.488281 9.171875 C 4.191406 9.15625 4.863281 9.648438 5.296875 9.648438 C 5.726562 9.648438 6.535156 9.0625 7.386719 9.148438 C 8.210938 9.179688 8.933594 9.59375 9.378906 10.21875 L 9.386719 10.226562 C 8.675781 10.664062 8.210938 11.429688 8.195312 12.304688 Z M 15.019531 17.304688 C 14.589844 17.429688 14.097656 17.5 13.585938 17.5 C 13.582031 17.5 13.574219 17.5 13.566406 17.5 C 12.417969 17.5 11.847656 16.851562 11.847656 15.546875 L 11.847656 9.796875 L 10.851562 9.796875 L 10.851562 8.753906 L 11.898438 8.753906 L 11.898438 7.398438 L 13.28125 6.832031 L 13.28125 8.761719 L 14.878906 8.761719 L 14.878906 9.804688 L 13.289062 9.804688 L 13.289062 15.238281 C 13.285156 15.277344 13.285156 15.320312 13.285156 15.367188 C 13.285156 15.640625 13.359375 15.898438 13.492188 16.117188 L 13.492188 16.109375 C 13.644531 16.265625 13.855469 16.363281 14.089844 16.363281 C 14.128906 16.363281 14.160156 16.359375 14.195312 16.355469 L 14.191406 16.355469 C 14.492188 16.34375 14.777344 16.304688 15.050781 16.242188 L 15.019531 16.25 Z M 20.019531 17.367188 L 18.324219 17.367188 L 15.195312 8.753906 L 16.726562 8.753906 L 18.617188 14.355469 C 18.6875 14.574219 18.871094 15.199219 19.164062 16.242188 L 19.441406 15.308594 L 19.75 14.367188 L 21.710938 8.746094 L 23.230469 8.746094 Z M 20.019531 17.367188 ";
    svg["CRUNCHYROLL"] = "M 2.933594 13.46875 C 2.707031 10.601562 3.65625 7.769531 5.566406 5.621094 C 7.476562 3.476562 10.179688 2.199219 13.050781 2.089844 C 15.921875 1.984375 18.710938 3.050781 20.777344 5.046875 C 22.847656 7.042969 24.007812 9.792969 24 12.667969 L 24 12 C 24 5.371094 18.628906 0 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 L 12.800781 24 C 7.261719 23.609375 2.964844 19.015625 2.933594 13.46875 Z M 19.199219 14 C 14.886719 14.015625 13.8125 8.011719 17.867188 6.53125 C 16.679688 5.898438 15.347656 5.574219 14 5.601562 C 10.601562 5.601562 7.539062 7.648438 6.238281 10.785156 C 4.9375 13.925781 5.65625 17.539062 8.058594 19.941406 C 10.460938 22.34375 14.074219 23.0625 17.214844 21.761719 C 20.351562 20.460938 22.398438 17.398438 22.398438 14 C 22.421875 13.464844 22.378906 12.925781 22.265625 12.398438 C 21.609375 13.449219 20.4375 14.0625 19.199219 14 Z M 19.199219 14 ";
    svg["DISNEY"] = "M 22.152344 9.085938 C 19.335938 5.117188 13.601562 2.890625 10.4375 2.363281 C 6.941406 1.78125 4.8125 2.003906 3.039062 2.328125 C 2.382812 2.449219 0.390625 2.816406 0.078125 4.324219 C -0.199219 5.683594 1.136719 6.652344 1.40625 6.832031 C 1.941406 7.1875 2.660156 7.042969 3.019531 6.511719 C 3.378906 5.980469 3.242188 5.253906 2.710938 4.890625 C 2.6875 4.875 2.664062 4.855469 2.640625 4.835938 C 2.824219 4.773438 3.089844 4.699219 3.460938 4.628906 C 4.921875 4.359375 6.753906 4.121094 10.054688 4.671875 C 12.726562 5.117188 17.859375 7.078125 20.246094 10.4375 C 21.273438 11.882812 21.652344 13.425781 21.378906 15.019531 C 21.113281 16.558594 20.4375 17.601562 19.3125 18.214844 C 17.285156 19.316406 14.074219 18.84375 11.707031 18.195312 L 11.707031 13.195312 C 12.476562 13.195312 13.199219 13.269531 14.128906 13.441406 C 14.742188 13.558594 15.105469 13.882812 15.222656 14.074219 C 15.199219 14.085938 15.171875 14.097656 15.140625 14.105469 C 14.527344 14.3125 14.195312 14.972656 14.402344 15.585938 C 14.605469 16.199219 15.265625 16.53125 15.882812 16.328125 C 17.234375 15.875 17.65625 14.835938 17.597656 14.007812 C 17.507812 12.660156 16.226562 11.453125 14.554688 11.140625 C 13.476562 10.941406 12.621094 10.855469 11.707031 10.855469 L 11.707031 8.78125 C 11.707031 8.136719 11.183594 7.613281 10.539062 7.613281 C 9.894531 7.613281 9.367188 8.136719 9.367188 8.78125 L 9.367188 10.957031 C 5.082031 11.28125 3.0625 12.171875 2.722656 13.847656 C 2.214844 16.363281 6.445312 18.636719 8.324219 19.511719 C 8.386719 19.539062 8.769531 19.699219 9.367188 19.910156 L 9.367188 21.066406 C 9.367188 21.714844 9.894531 22.238281 10.539062 22.238281 C 11.183594 22.238281 11.707031 21.714844 11.707031 21.066406 L 11.707031 20.613281 C 13.027344 20.941406 14.59375 21.214844 16.160156 21.214844 C 17.65625 21.214844 19.15625 20.964844 20.429688 20.273438 C 22.199219 19.308594 23.292969 17.675781 23.683594 15.417969 C 24.066406 13.1875 23.554688 11.054688 22.152344 9.085938 Z M 9.277344 17.375 C 7.226562 16.417969 5.214844 14.964844 5.03125 14.324219 C 5.179688 14.167969 5.96875 13.582031 9.367188 13.304688 L 9.367188 17.410156 C 9.339844 17.398438 9.304688 17.386719 9.277344 17.375 Z M 9.277344 17.375 ";
    svg["FOXSPORTS"] = "M 0.2305 15.125 L 0.2305 5 L 6.2148 5 L 6.3984 7.7695 L 3.0469 7.7695 L 3.0469 9.0898 L 5.7773 9.0898 L 5.7773 11.8516 L 3.0273 11.8516 L 3.0273 15.125 L 0.2305 15.125 M 23.2813 15.0938 L 20.2852 9.8398 L 23.0078 5 L 20.0117 5 L 18.7695 7.1797 L 17.5469 5 L 14.4453 5 L 17.2188 9.875 L 14.2813 15.1016 L 17.293 15.0977 L 18.7305 12.5391 L 20.1836 15.0938 L 23.2813 15.0938 M 11.9102 12.0977 L 11.9102 8.0508 C 11.9102 7.5898 11.5156 7.1758 11.0703 7.1758 C 10.6289 7.1758 10.2695 7.5898 10.2695 8.0508 L 10.2695 12.082 C 10.2695 12.5469 10.6289 12.918 11.0703 12.918 C 11.5156 12.918 11.9102 12.5586 11.9102 12.0977 Z M 6.3242 10.0742 C 6.3242 7.3594 8.4414 5.1523 11.0586 5.1523 C 13.6758 5.1523 15.7969 7.3594 15.7969 10.0742 C 15.7969 12.793 13.6758 14.9961 11.0586 14.9961 C 8.4414 14.9961 6.3242 12.793 6.3242 10.0742 Z M 0 19.5195 L 0 18.9961 L 0.2617 18.7344 L 2.3867 18.7344 L 2.4648 18.6563 L 2.4648 18.1016 L 2.4102 18.0391 L 0.4375 18.0391 L 0 17.5938 L 0 16.3203 L 0.5039 15.8086 L 3.3633 15.8086 L 3.3633 16.3711 L 3.1563 16.5859 L 1.082 16.5859 L 1.0039 16.668 L 1.0039 17.207 L 1.0625 17.2656 L 3.0273 17.2656 L 3.4648 17.7148 L 3.4648 19.0039 L 2.9609 19.5195 L 0 19.5195 M 6.4609 17.6055 L 6.6094 17.4531 L 6.6094 16.7422 L 6.4609 16.5938 L 5.0938 16.5938 L 5.0938 17.6055 Z M 4.0898 15.8086 L 7.0547 15.8086 L 7.6172 16.3789 L 7.6172 17.7539 L 7.0547 18.3281 L 5.0938 18.3281 L 5.0938 19.5195 L 4.0898 19.5195 Z M 10.5156 18.6484 L 10.7227 18.4414 L 10.7227 16.8203 L 10.5156 16.6133 L 9.3477 16.6133 L 9.1406 16.8203 L 9.1406 18.4414 L 9.3477 18.6484 Z M 8.1445 18.9492 L 8.1445 16.3789 L 8.6992 15.8086 L 11.1602 15.8086 L 11.7227 16.3789 L 11.7227 18.9492 L 11.1602 19.5195 L 8.6992 19.5195 Z M 14.7344 17.3984 L 14.875 17.2539 L 14.875 16.7109 L 14.7344 16.5664 L 13.3828 16.5664 L 13.3828 17.3984 Z M 12.3789 15.8086 L 15.375 15.8086 L 15.8789 16.3203 L 15.8789 17.5039 L 15.3984 17.9961 L 16.0313 19.5195 L 14.9141 19.5195 L 14.4453 18.1719 L 13.3828 18.1719 L 13.3828 19.5195 L 12.3789 19.5195 Z M 17.3789 16.668 L 16.2188 16.668 L 16.2188 15.8086 L 19.5391 15.8086 L 19.5391 16.668 L 18.3828 16.668 L 18.3828 19.5195 L 17.3789 19.5195 L 17.3789 16.668 M 20.082 19.6211 L 20.082 19.0977 L 20.3438 18.8359 L 22.4688 18.8359 L 22.5469 18.7578 L 22.5469 18.2031 L 22.4922 18.1406 L 20.5195 18.1406 L 20.082 17.6953 L 20.082 16.4219 L 20.5859 15.9102 L 23.4453 15.9102 L 23.4453 16.4727 L 23.2383 16.6875 L 21.168 16.6875 L 21.0859 16.7695 L 21.0859 17.3086 L 21.1445 17.3672 L 23.1133 17.3672 L 23.5469 17.8164 L 23.5469 19.1055 L 23.043 19.6211 L 20.082 19.6211";
    svg["MAX"] = "M 3.7443 8 C 3.0949 8 2.4381 8.2932 1.5957 8.9574 L 1.5957 8.167 L 0 8.167 L 0 14.4756 L 1.6959 14.4756 L 1.6959 10.5531 C 2.4381 9.9557 2.7758 9.7664 3.0541 9.7664 C 3.3844 9.7664 3.5996 9.9742 3.5996 10.5012 L 3.5996 14.4756 L 5.2955 14.4756 L 5.2955 10.542 C 6.0377 9.9557 6.368 9.7664 6.6537 9.7664 C 6.984 9.7664 7.1992 9.9742 7.1992 10.5012 L 7.1992 14.4756 L 8.8951 14.4756 L 8.8951 9.8926 C 8.8951 8.4713 8.1047 8 7.3439 8 C 6.6945 8 6.0377 8.2746 5.173 8.9463 C 4.8947 8.2412 4.2898 8 3.7443 8 Z M 12.3426 8 C 10.6578 8 9.2588 9.4807 9.2588 11.3213 C 9.2588 13.1619 10.6578 14.6426 12.3426 14.6426 C 13.1775 14.6426 13.8975 14.3271 14.4504 13.6443 L 14.4504 14.4756 L 16.0684 14.4756 L 16.0684 8.167 L 14.4504 8.167 L 14.4504 8.9982 C 13.8975 8.3154 13.1775 8 12.3426 8 Z M 16.3652 8.167 C 17.0629 9.284 17.857 10.2822 18.7811 11.2805 C 17.857 12.3195 17.0629 13.4031 16.3652 14.4756 L 18.41 14.4756 C 18.8961 13.674 19.4416 12.9504 20.0687 12.2676 C 20.6848 12.9504 21.2006 13.674 21.683 14.4756 L 23.75 14.4756 C 23.0412 13.3697 22.2693 12.3195 21.3416 11.2805 C 22.2582 10.2822 23.0412 9.2506 23.75 8.167 L 21.7238 8.167 C 21.2191 8.9686 20.6736 9.6402 20.0687 10.3008 C 19.449 9.6402 18.9072 8.9686 18.41 8.167 Z M 12.5986 9.4621 C 13.608 9.4621 14.4207 10.2896 14.4207 11.3213 C 14.4207 12.3529 13.608 13.1805 12.5986 13.1805 C 11.593 13.1805 10.7803 12.3529 10.7803 11.3213 C 10.7803 10.2896 11.593 9.4621 12.5986 9.4621 Z M 12.5986 9.8814 C 11.8268 9.8814 11.1996 10.5234 11.1996 11.3213 C 11.1996 12.1191 11.8268 12.7611 12.5986 12.7611 C 13.3705 12.7611 13.9977 12.1191 13.9977 11.3213 C 13.9977 10.5234 13.3705 9.8814 12.5986 9.8814 Z M 12.5986 9.8814";
    svg["MLBTV"] = "M 23.2539 7.0039 C 23.2656 6.293 22.6953 5.7109 21.9883 5.7031 C 21.9805 5.7031 21.9727 5.7031 21.9648 5.7031 L 16.3828 5.7031 L 19.5859 11.0625 L 19.8789 11.1016 L 20.0664 11.3438 L 20.0664 11.5742 L 20.2695 11.6172 L 20.457 11.8711 L 20.457 12.0898 L 20.6641 12.1289 L 20.875 12.3594 L 20.875 12.8672 C 21.1289 13.0977 21.4102 13.2852 21.7188 13.4297 C 22 13.5391 22.0313 13.9922 22.2031 14.2344 C 22.4141 14.5859 22.707 14.7266 22.6445 14.9258 C 22.5039 15.4492 21.9648 16.3398 21.4648 16.3789 L 19.4805 16.3789 L 19.4805 17.2305 L 21.9648 17.2305 C 22.6836 17.2266 23.2617 16.6445 23.2578 15.9258 L 23.2578 7.0039 M 9.6016 16.3945 L 8.6445 16.3945 C 8.6445 13.9922 9.4531 12.6641 10.4258 12.3984 C 10.5586 12.375 10.4922 11.7188 10.3242 11.5195 L 9.7656 11.5195 C 9.6758 11.5195 9.7266 11.3477 9.7266 11.3477 L 10.1797 10.3789 L 10.1211 10.1094 L 8.4414 10.1094 L 9.8203 9.1445 C 9.8828 6.5938 12.4961 6.3945 14.0664 7.457 C 15.0039 8.0781 15.0742 9.3086 15.0039 10.1563 C 14.9922 10.2109 14.7578 10.1758 14.7578 10.1758 C 14.7578 10.1758 14.6016 11.1133 15.0156 11.1133 L 16.8516 11.1133 C 17.5977 11.082 18.3203 11.5898 18.3203 11.5898 L 18.4961 10.9453 L 14.4766 5.7031 L 1.9961 5.7031 C 1.6523 5.6992 1.3203 5.8359 1.0742 6.0781 C 0.832 6.3242 0.6953 6.6563 0.6992 7.0039 L 0.6992 15.9297 C 0.6953 16.2734 0.8281 16.6094 1.0742 16.8516 C 1.3203 17.0977 1.6523 17.2344 1.9961 17.2344 L 10.0977 17.2344 C 9.9023 16.8945 9.6758 16.5078 9.6055 16.3945 M 2.5 14.5 C 2.5 14.0078 2.8945 13.6094 3.3867 13.6094 C 3.875 13.6094 4.2734 14.0078 4.2734 14.5 C 4.2734 14.9883 3.875 15.3867 3.3867 15.3867 L 3.3789 15.3867 C 2.8945 15.3867 2.5 14.9961 2.5 14.5117 C 2.5 14.5078 2.5 14.5039 2.5 14.5";
    svg["NBA"] = "M 7.8555 21.1602 C 7.5547 20.8906 7.7539 20.7734 7.7383 20.6563 C 7.5391 19.8203 6.8672 19.3203 7.2188 19.0547 C 7.1484 18.8438 7.0664 18.6367 6.9688 18.4336 C 5.9336 17.8477 5.0625 16.8789 4.9141 16.7461 C 4.7617 16.6133 4.4297 16.3438 4.3633 16.1953 C 4.2969 16.043 2.9063 14.2383 2.625 13.6211 L 2.1406 13.5547 C 1.9219 12.6367 1.1719 11.8672 1.1523 10.9648 C 1.1758 10.543 1.25 10.1289 1.3711 9.7266 C 1.4688 9.5781 1.5859 9.4414 1.7227 9.3242 L 1.7227 9.0742 C 0.6523 9.1094 0.9531 8.9922 0.7695 8.5742 C 0.5859 8.1563 0.7344 8.2227 0.7852 8.0234 C 0.9375 7.4375 1.4023 6.5195 1.6055 6.1016 C 1.8047 5.6836 1.8711 5.3828 1.8711 5.3828 C 2.6758 3.7617 2.9766 3.8789 3.9258 3.7773 L 3.9766 3.7109 C 4.9297 3.6758 4.7813 3.5938 4.9141 2.6758 C 4.7813 2.7422 4.7305 2.3906 4.7305 2.3906 C 4.6445 1.8711 4.8789 1.9727 4.9805 1.957 C 4.9961 1.1016 5.0977 0.8203 5.7148 0.5859 L 2.4922 0.5859 C 1.4375 0.5859 0.5859 1.4375 0.5859 2.4883 L 0.5859 21.5078 C 0.5859 22.5625 1.4375 23.4141 2.4922 23.4141 L 8.1055 23.4141 C 7.4531 23.0625 7.8398 22.4141 7.8555 21.1602 M 21.5078 0.5859 L 6.2852 0.5859 C 6.5156 0.6484 6.7148 0.7969 6.8359 1.0039 C 7.0703 1.0195 7.3555 1.5547 6.918 2.3242 C 7.1211 2.457 6.9688 2.6406 6.8203 2.8594 C 6.668 3.0742 6.7344 3.0586 6.6172 3.043 C 6.4531 3.3945 6.25 3.7266 6.1016 3.7422 C 6.0352 3.8203 6.0273 3.9297 6.082 4.0117 C 6.3086 4.1016 6.5156 4.2266 6.7031 4.3789 L 6.7031 4.4609 C 6.8672 4.5625 6.9531 4.6445 7.1367 4.7461 C 7.5859 5.0313 8.1563 5.5469 8.0898 7.3203 C 8.2227 7.7031 8.2734 8.457 8.3906 8.707 C 8.5078 8.957 8.793 9.4922 8.8594 9.9258 C 8.8594 9.9258 8.9258 10.5781 9.0078 10.6641 L 9.0586 10.6641 C 9.4414 10.7461 9.375 10.7969 9.4102 10.8633 L 9.5078 10.9453 C 9.6094 10.9961 9.7773 11.0469 9.7773 11.2305 L 9.8594 11.3633 C 9.9102 11.4453 9.957 11.5273 9.9961 11.6172 C 10.1289 11.9922 10.1289 12.4063 9.9961 12.7852 L 9.9961 12.8359 C 9.8477 13.2031 9.5742 13.5039 9.2266 13.6875 L 9.1914 13.6875 L 9.1406 13.7227 C 8.918 13.8281 8.6719 13.8867 8.4219 13.8867 C 7.4883 13.7656 6.832 12.9063 6.957 11.9727 C 7.0391 11.3594 7.4453 10.8398 8.0234 10.6133 C 7.8203 10.1289 7.4219 9.3438 7.3047 9.0938 C 7.1875 8.8398 6.9023 7.2188 6.8516 6.9023 C 6.8008 6.5859 6.1172 7.3203 6.1172 7.3555 C 6.1172 7.3867 5.582 8.6914 5.5664 8.7578 C 5.5547 8.8281 5.5469 8.9023 5.5469 8.9766 C 5.5469 8.9766 5.8008 9.0078 5.9336 9.4258 C 6.0664 9.8438 6.5 11.3984 6.5 11.3984 L 6.3828 11.5156 C 6.918 13.3047 6.7344 14.0742 6.9688 14.6055 C 7.2031 15.1406 7.3555 15.2422 7.6055 15.8789 C 7.8555 16.5117 7.9883 18.1172 8.0742 18.1836 C 8.3555 18.5508 8.5234 18.8359 8.5234 19.0352 C 8.5234 19.2383 8.2734 19.8555 8.375 20.2227 C 8.4727 20.5898 8.457 20.9063 8.5586 20.9922 C 8.6563 21.0742 8.6406 21.1758 8.6055 21.2422 C 8.5898 21.2734 8.5781 21.3086 8.5742 21.3438 C 8.7227 21.9102 9.2422 22.8633 8.4219 23.3633 L 8.375 23.3984 L 21.543 23.3984 C 22.582 23.3906 23.4219 22.5508 23.4336 21.5117 L 23.4336 2.4922 C 23.4219 1.4336 22.5664 0.5859 21.5078 0.5859 Z M 21.5078 0.5859 M 15.793 5.1133 L 19.2383 5.1133 L 18.5352 16.6289 L 17.7813 5.1133 L 21.1406 5.1133 L 19.6563 18.9023 L 17.2461 18.9023 Z M 15.3438 6.8359 L 13.8867 6.8359 L 13.8867 18.8867 L 12.0352 18.8867 L 12.0352 6.8359 L 10.6133 6.8359 L 10.6133 5.0977 L 15.3438 5.0977 Z M 3.543 22.2266 L 3.543 18.7852 L 4.2109 18.7852 C 4.5977 18.7852 4.8281 18.9844 4.8281 19.4727 L 4.8281 19.9883 C 4.8281 20.3047 4.7305 20.457 4.5977 20.5391 C 4.7539 20.6563 4.8438 20.8438 4.8281 21.043 L 4.8281 21.543 C 4.8281 22.0117 4.5781 22.2266 4.2109 22.2266 Z M 4.0117 20.7227 L 4.0117 21.793 L 4.1953 21.793 C 4.3438 21.793 4.3945 21.7109 4.3945 21.543 L 4.3945 20.957 C 4.3945 20.793 4.3438 20.7227 4.1953 20.7227 Z M 4.0117 19.2188 L 4.0117 20.3555 L 4.1797 20.3555 C 4.3438 20.3555 4.3789 20.3047 4.3789 20.1055 L 4.3789 19.4375 C 4.3789 19.2695 4.3281 19.2031 4.1797 19.2031 L 4.0117 19.2031 Z M 5.9336 21.5273 L 5.5156 21.5273 L 5.4648 22.2266 L 4.9961 22.2266 L 5.4141 18.7852 L 6.0664 18.7852 L 6.4688 22.2266 L 5.9844 22.2266 Z M 5.7148 19.168 L 5.6992 19.168 C 5.6641 19.5859 5.6172 20.3047 5.5977 20.5391 L 5.5469 21.1406 L 5.8984 21.1406 L 5.8477 20.5391 C 5.832 20.3047 5.7656 19.5859 5.7148 19.168 M 2.1875 22.2266 L 1.7891 22.2266 L 1.7891 18.7852 L 2.4219 18.7852 L 2.9414 21.6094 C 2.8906 20.9414 2.8398 20.1211 2.8398 19.4219 L 2.8398 18.7852 L 3.2422 18.7852 L 3.2422 22.2266 L 2.6563 22.2266 L 2.1406 19.4727 C 2.1719 20.1055 2.1875 20.625 2.1875 21.1406 Z M 2.1875 22.2266";
    svg["PRIMEVIDEO"] = "M 1.160156 2.453125 Z M 1.160156 2.453125 Z M 10.246094 0.414062 C 9.792969 0.414062 9.523438 0.636719 9.488281 1.042969 C 9.46875 1.453125 9.703125 1.691406 10.027344 1.75 C 10.15625 1.777344 10.285156 1.777344 10.414062 1.75 C 10.710938 1.710938 10.933594 1.46875 10.953125 1.171875 C 10.980469 0.824219 10.824219 0.554688 10.515625 0.453125 C 10.425781 0.425781 10.339844 0.40625 10.246094 0.414062 Z M 3.496094 2.324219 C 3.046875 2.316406 2.636719 2.472656 2.253906 2.757812 C 2.21875 2.789062 2.179688 2.816406 2.128906 2.84375 C 2.117188 2.835938 2.109375 2.832031 2.109375 2.824219 C 2.089844 2.769531 2.078125 2.707031 2.0625 2.65625 C 2.015625 2.507812 1.960938 2.460938 1.808594 2.460938 C 1.636719 2.460938 1.457031 2.464844 1.285156 2.460938 C 1.160156 2.453125 1.039062 2.472656 0.941406 2.574219 C 0.941406 4.566406 0.949219 6.570312 0.949219 8.554688 C 1.023438 8.675781 1.136719 8.695312 1.273438 8.695312 C 1.476562 8.691406 1.683594 8.695312 1.886719 8.695312 C 2.246094 8.695312 2.246094 8.695312 2.246094 8.339844 L 2.246094 6.71875 C 2.246094 6.679688 2.226562 6.628906 2.265625 6.597656 C 2.554688 6.820312 2.898438 6.953125 3.257812 6.988281 C 3.765625 7.042969 4.214844 6.914062 4.601562 6.578125 C 4.878906 6.320312 5.085938 5.988281 5.195312 5.625 C 5.34375 5.160156 5.355469 4.679688 5.316406 4.207031 C 5.296875 3.910156 5.214844 3.613281 5.09375 3.351562 C 4.859375 2.859375 4.5 2.5 3.953125 2.371094 C 3.796875 2.335938 3.644531 2.324219 3.496094 2.324219 Z M 14.660156 2.324219 C 14.515625 2.324219 14.375 2.335938 14.234375 2.371094 C 13.863281 2.4375 13.53125 2.601562 13.214844 2.796875 C 13.179688 2.816406 13.140625 2.859375 13.085938 2.859375 C 13.058594 2.769531 13.039062 2.695312 13.011719 2.621094 C 12.976562 2.519531 12.917969 2.460938 12.808594 2.460938 L 12.101562 2.460938 C 12.03125 2.460938 11.964844 2.5 11.9375 2.566406 C 11.933594 2.613281 11.925781 2.660156 11.925781 2.707031 L 11.925781 6.65625 C 11.925781 6.851562 11.972656 6.914062 12.175781 6.914062 L 12.9375 6.914062 C 13.148438 6.914062 13.195312 6.867188 13.195312 6.65625 L 13.195312 3.613281 C 13.179688 3.574219 13.214844 3.519531 13.253906 3.503906 C 13.566406 3.355469 13.917969 3.289062 14.253906 3.316406 C 14.449219 3.324219 14.613281 3.457031 14.652344 3.652344 C 14.679688 3.75 14.6875 3.855469 14.6875 3.949219 L 14.6875 6.644531 C 14.6875 6.859375 14.726562 6.90625 14.941406 6.90625 L 15.542969 6.90625 C 15.628906 6.90625 15.71875 6.90625 15.804688 6.902344 C 15.886719 6.902344 15.949219 6.847656 15.949219 6.765625 C 15.960938 6.710938 15.960938 6.65625 15.960938 6.605469 L 15.960938 3.605469 C 15.953125 3.558594 15.980469 3.511719 16.027344 3.5 C 16.332031 3.355469 16.671875 3.289062 17.007812 3.316406 C 17.191406 3.324219 17.351562 3.453125 17.390625 3.625 C 17.425781 3.726562 17.433594 3.828125 17.425781 3.9375 L 17.425781 6.578125 C 17.425781 6.644531 17.425781 6.707031 17.441406 6.765625 C 17.453125 6.832031 17.507812 6.894531 17.574219 6.902344 C 17.621094 6.90625 17.667969 6.90625 17.714844 6.90625 L 18.410156 6.90625 C 18.667969 6.90625 18.703125 6.875 18.703125 6.617188 L 18.703125 3.660156 C 18.703125 3.59375 18.703125 3.53125 18.695312 3.472656 C 18.667969 3.175781 18.585938 2.898438 18.371094 2.675781 C 18.148438 2.4375 17.851562 2.34375 17.527344 2.332031 C 17.074219 2.304688 16.628906 2.40625 16.230469 2.613281 C 16.078125 2.695312 15.925781 2.78125 15.785156 2.871094 C 15.777344 2.859375 15.773438 2.859375 15.777344 2.851562 C 15.773438 2.84375 15.757812 2.832031 15.746094 2.808594 C 15.597656 2.585938 15.355469 2.425781 15.085938 2.371094 C 14.941406 2.335938 14.800781 2.324219 14.660156 2.324219 Z M 21.894531 2.363281 C 21.707031 2.34375 21.511719 2.351562 21.320312 2.371094 C 20.421875 2.480469 19.835938 2.972656 19.566406 3.835938 C 19.375 4.421875 19.402344 5.015625 19.550781 5.613281 C 19.753906 6.367188 20.253906 6.820312 21.015625 6.980469 C 21.449219 7.078125 21.882812 7.054688 22.320312 6.988281 C 22.550781 6.949219 22.777344 6.894531 22.996094 6.804688 C 23.125 6.757812 23.191406 6.679688 23.183594 6.53125 C 23.183594 6.394531 23.183594 6.253906 23.183594 6.109375 C 23.183594 5.933594 23.117188 5.882812 22.953125 5.921875 C 22.785156 5.960938 22.628906 5.996094 22.460938 6.03125 C 22.109375 6.105469 21.746094 6.105469 21.386719 6.042969 C 20.902344 5.949219 20.59375 5.53125 20.617188 5.015625 C 20.671875 5.023438 20.726562 5.03125 20.78125 5.042969 C 21.207031 5.117188 21.644531 5.125 22.078125 5.058594 C 22.328125 5.023438 22.5625 4.949219 22.785156 4.828125 C 23.042969 4.679688 23.230469 4.476562 23.3125 4.195312 C 23.507812 3.472656 23.203125 2.75 22.453125 2.480469 C 22.273438 2.425781 22.082031 2.386719 21.894531 2.363281 Z M 8.820312 2.410156 C 8.449219 2.386719 8.085938 2.5 7.789062 2.730469 C 7.671875 2.816406 7.566406 2.917969 7.457031 3.019531 C 7.4375 3.054688 7.402344 3.074219 7.363281 3.085938 C 7.328125 2.933594 7.292969 2.789062 7.253906 2.648438 C 7.214844 2.507812 7.144531 2.453125 6.996094 2.453125 L 6.449219 2.453125 C 6.1875 2.453125 6.160156 2.484375 6.160156 2.75 L 6.160156 6.625 C 6.160156 6.664062 6.160156 6.710938 6.167969 6.757812 C 6.175781 6.832031 6.226562 6.894531 6.300781 6.902344 C 6.34375 6.90625 6.390625 6.90625 6.429688 6.90625 L 7.171875 6.90625 C 7.207031 6.90625 7.253906 6.90625 7.292969 6.902344 C 7.367188 6.902344 7.429688 6.847656 7.429688 6.773438 C 7.4375 6.71875 7.4375 6.671875 7.4375 6.625 L 7.4375 3.882812 C 7.4375 3.824219 7.4375 3.769531 7.515625 3.734375 C 7.875 3.621094 8.246094 3.546875 8.632812 3.578125 C 8.707031 3.585938 8.785156 3.585938 8.859375 3.585938 C 8.960938 3.574219 9.003906 3.53125 9.027344 3.429688 C 9.042969 3.351562 9.042969 3.277344 9.035156 3.195312 C 9.035156 3 9.042969 2.804688 9.035156 2.609375 C 9.023438 2.464844 8.96875 2.417969 8.820312 2.410156 Z M 9.777344 2.453125 C 9.644531 2.460938 9.589844 2.511719 9.582031 2.648438 L 9.582031 4.671875 C 9.582031 5.320312 9.582031 5.96875 9.582031 6.605469 C 9.582031 6.644531 9.582031 6.691406 9.582031 6.738281 C 9.589844 6.820312 9.65625 6.878906 9.738281 6.886719 C 9.765625 6.894531 9.792969 6.894531 9.820312 6.894531 L 10.617188 6.894531 C 10.648438 6.894531 10.675781 6.894531 10.710938 6.886719 C 10.785156 6.878906 10.839844 6.832031 10.84375 6.757812 C 10.851562 6.691406 10.859375 6.628906 10.859375 6.570312 L 10.859375 2.777344 C 10.859375 2.722656 10.859375 2.675781 10.851562 2.628906 C 10.839844 2.492188 10.796875 2.453125 10.667969 2.453125 C 10.371094 2.445312 10.074219 2.445312 9.777344 2.453125 Z M 21.636719 3.242188 C 21.746094 3.25 21.847656 3.269531 21.941406 3.308594 C 22.089844 3.371094 22.183594 3.503906 22.207031 3.667969 C 22.226562 3.761719 22.21875 3.871094 22.183594 3.964844 C 22.117188 4.167969 21.957031 4.253906 21.753906 4.296875 C 21.636719 4.324219 21.511719 4.335938 21.382812 4.324219 C 21.160156 4.324219 20.9375 4.308594 20.714844 4.273438 C 20.625 4.261719 20.625 4.261719 20.640625 4.167969 C 20.652344 4.03125 20.691406 3.902344 20.746094 3.777344 C 20.914062 3.355469 21.273438 3.214844 21.636719 3.242188 Z M 3.082031 3.289062 C 3.164062 3.289062 3.25 3.296875 3.332031 3.316406 C 3.574219 3.351562 3.777344 3.503906 3.871094 3.722656 C 3.960938 3.910156 4.015625 4.105469 4.019531 4.308594 C 4.054688 4.671875 4.054688 5.039062 3.953125 5.382812 C 3.914062 5.558594 3.824219 5.71875 3.691406 5.839844 C 3.542969 5.960938 3.359375 6.035156 3.171875 6.035156 C 2.878906 6.058594 2.589844 5.996094 2.332031 5.855469 C 2.273438 5.828125 2.230469 5.765625 2.238281 5.699219 L 2.238281 4.667969 C 2.238281 4.324219 2.246094 3.984375 2.238281 3.640625 C 2.230469 3.558594 2.277344 3.492188 2.351562 3.464844 C 2.589844 3.351562 2.824219 3.289062 3.082031 3.289062 Z M 6.59375 8.832031 C 6.550781 8.824219 6.511719 8.832031 6.464844 8.839844 C 6.105469 8.863281 5.84375 9.113281 5.808594 9.453125 C 5.777344 9.878906 5.972656 10.167969 6.347656 10.261719 C 6.417969 10.269531 6.484375 10.28125 6.550781 10.28125 C 7.042969 10.296875 7.414062 10.019531 7.367188 9.457031 C 7.355469 9.203125 7.191406 8.980469 6.957031 8.890625 C 6.835938 8.84375 6.714844 8.816406 6.59375 8.832031 Z M 11.707031 8.871094 C 11.472656 8.871094 11.433594 8.914062 11.433594 9.148438 L 11.433594 11.125 C 11.433594 11.171875 11.445312 11.214844 11.417969 11.253906 C 11.363281 11.253906 11.332031 11.214844 11.289062 11.1875 C 10.65625 10.816406 9.988281 10.75 9.3125 11.058594 C 8.839844 11.28125 8.550781 11.679688 8.359375 12.152344 C 8.179688 12.605469 8.132812 13.078125 8.144531 13.5625 C 8.144531 14.015625 8.246094 14.460938 8.449219 14.867188 C 8.683594 15.3125 9.023438 15.65625 9.507812 15.796875 C 10.175781 16.007812 10.796875 15.90625 11.371094 15.480469 C 11.410156 15.460938 11.433594 15.414062 11.492188 15.40625 C 11.519531 15.472656 11.546875 15.546875 11.558594 15.613281 C 11.582031 15.714844 11.667969 15.785156 11.769531 15.785156 L 11.917969 15.785156 C 12.140625 15.785156 12.351562 15.789062 12.566406 15.785156 C 12.742188 15.785156 12.789062 15.730469 12.796875 15.546875 L 12.796875 9.109375 C 12.789062 8.914062 12.742188 8.871094 12.558594 8.871094 Z M 21.050781 10.871094 C 20.855469 10.863281 20.660156 10.871094 20.464844 10.902344 C 19.640625 11.023438 19.046875 11.464844 18.757812 12.246094 C 18.480469 12.996094 18.484375 13.8125 18.761719 14.5625 C 19.003906 15.238281 19.5 15.667969 20.199219 15.84375 C 20.570312 15.9375 20.964844 15.960938 21.347656 15.90625 C 22.628906 15.75 23.164062 14.777344 23.25 13.933594 C 23.25 13.933594 23.285156 13.683594 23.285156 13.5625 L 23.277344 13.058594 C 23.277344 12.984375 23.257812 12.839844 23.257812 12.835938 C 23.246094 12.71875 23.222656 12.605469 23.191406 12.488281 C 22.96875 11.6875 22.453125 11.152344 21.632812 10.945312 C 21.4375 10.898438 21.246094 10.875 21.050781 10.871094 Z M 15.976562 10.921875 C 14.949219 10.945312 14.164062 11.464844 13.847656 12.488281 C 13.632812 13.171875 13.660156 13.859375 13.867188 14.542969 C 14.085938 15.238281 14.578125 15.664062 15.273438 15.851562 C 15.570312 15.925781 15.878906 15.953125 16.191406 15.945312 C 16.636719 15.9375 17.082031 15.851562 17.5 15.6875 C 17.683594 15.621094 17.722656 15.5625 17.722656 15.371094 L 17.722656 14.933594 C 17.714844 14.757812 17.640625 14.695312 17.46875 14.738281 C 17.332031 14.769531 17.203125 14.804688 17.070312 14.839844 C 16.65625 14.933594 16.230469 14.953125 15.8125 14.878906 C 15.402344 14.796875 15.117188 14.5625 15.007812 14.144531 C 14.976562 14.023438 14.949219 13.902344 14.941406 13.773438 C 14.96875 13.773438 15.003906 13.773438 15.023438 13.785156 C 15.429688 13.851562 15.839844 13.886719 16.25 13.851562 C 16.601562 13.832031 16.960938 13.765625 17.277344 13.597656 C 17.601562 13.433594 17.824219 13.132812 17.890625 12.78125 C 17.9375 12.558594 17.9375 12.328125 17.890625 12.105469 C 17.765625 11.558594 17.414062 11.214844 16.886719 11.039062 C 16.597656 10.945312 16.277344 10.910156 15.976562 10.921875 Z M 0.6875 11.019531 C 0.566406 11.019531 0.515625 11.078125 0.539062 11.199219 C 0.558594 11.28125 0.585938 11.371094 0.617188 11.445312 C 0.984375 12.410156 1.359375 13.367188 1.726562 14.324219 C 1.875 14.730469 2.035156 15.140625 2.191406 15.546875 C 2.257812 15.714844 2.367188 15.796875 2.554688 15.789062 C 2.824219 15.789062 3.097656 15.789062 3.367188 15.789062 C 3.5 15.804688 3.621094 15.722656 3.667969 15.59375 C 3.683594 15.554688 3.703125 15.519531 3.710938 15.480469 C 4.121094 14.421875 4.535156 13.347656 4.945312 12.289062 L 5.308594 11.316406 C 5.390625 11.09375 5.335938 11.023438 5.109375 11.023438 L 4.175781 11.023438 C 4.066406 11.023438 3.960938 11.09375 3.933594 11.199219 L 3.890625 11.316406 C 3.617188 12.261719 3.332031 13.199219 3.046875 14.148438 C 3.015625 14.273438 2.980469 14.386719 2.941406 14.507812 C 2.925781 14.507812 2.921875 14.507812 2.925781 14.5 C 2.675781 13.652344 2.433594 12.800781 2.183594 11.949219 C 2.109375 11.714844 2.042969 11.476562 1.976562 11.246094 C 1.933594 11.121094 1.875 11.019531 1.726562 11.019531 C 1.382812 11.019531 1.03125 11.011719 0.6875 11.019531 Z M 6.148438 11.023438 C 5.957031 11.023438 5.902344 11.078125 5.902344 11.269531 L 5.902344 15.5 C 5.902344 15.535156 5.902344 15.582031 5.910156 15.613281 C 5.917969 15.738281 5.976562 15.789062 6.101562 15.789062 C 6.429688 15.796875 6.753906 15.796875 7.085938 15.789062 C 7.207031 15.789062 7.261719 15.730469 7.273438 15.609375 L 7.273438 11.269531 C 7.273438 11.078125 7.21875 11.023438 7.023438 11.023438 Z M 15.851562 11.863281 C 15.933594 11.847656 16.023438 11.855469 16.109375 11.863281 C 16.136719 11.863281 16.164062 11.875 16.191406 11.875 C 16.625 11.941406 16.722656 12.28125 16.648438 12.609375 C 16.582031 12.859375 16.386719 12.949219 16.15625 12.996094 C 16.035156 13.015625 15.90625 13.03125 15.777344 13.023438 C 15.53125 13.015625 15.28125 12.996094 15.035156 12.960938 C 14.984375 12.957031 14.960938 12.933594 14.96875 12.875 C 15.015625 12.636719 15.070312 12.410156 15.21875 12.214844 C 15.386719 11.984375 15.605469 11.882812 15.851562 11.863281 Z M 10.394531 11.910156 C 10.71875 11.882812 11.039062 11.941406 11.332031 12.078125 C 11.40625 12.097656 11.445312 12.171875 11.4375 12.253906 C 11.433594 12.632812 11.4375 13.003906 11.4375 13.375 L 11.4375 14.488281 C 11.453125 14.554688 11.40625 14.628906 11.335938 14.65625 C 11.046875 14.820312 10.710938 14.886719 10.378906 14.839844 C 10.09375 14.8125 9.851562 14.636719 9.722656 14.386719 C 9.628906 14.191406 9.570312 13.980469 9.554688 13.765625 C 9.5 13.378906 9.535156 12.988281 9.625 12.617188 C 9.65625 12.515625 9.691406 12.414062 9.75 12.320312 C 9.878906 12.085938 10.121094 11.929688 10.394531 11.910156 Z M 20.808594 11.941406 C 20.921875 11.929688 21.039062 11.929688 21.152344 11.949219 C 21.402344 12.003906 21.605469 12.160156 21.710938 12.386719 C 21.8125 12.597656 21.875 12.839844 21.886719 13.078125 C 21.894531 13.191406 21.902344 13.300781 21.894531 13.40625 C 21.914062 13.675781 21.882812 13.941406 21.808594 14.191406 C 21.773438 14.320312 21.71875 14.433594 21.636719 14.546875 C 21.503906 14.738281 21.289062 14.859375 21.058594 14.878906 C 20.941406 14.886719 20.828125 14.886719 20.707031 14.867188 C 20.449219 14.8125 20.242188 14.644531 20.132812 14.40625 C 20.046875 14.21875 19.984375 14.007812 19.972656 13.800781 C 19.9375 13.441406 19.929688 13.078125 20.019531 12.726562 C 20.050781 12.585938 20.113281 12.441406 20.179688 12.320312 C 20.316406 12.097656 20.550781 11.957031 20.808594 11.941406 Z M 20.808594 17.726562 C 20.457031 17.742188 20.121094 17.773438 19.78125 17.84375 C 19.34375 17.949219 18.929688 18.105469 18.558594 18.367188 C 18.507812 18.402344 18.453125 18.457031 18.410156 18.511719 C 18.378906 18.566406 18.363281 18.625 18.398438 18.6875 C 18.433594 18.746094 18.492188 18.753906 18.558594 18.746094 L 19.160156 18.671875 C 19.605469 18.613281 20.066406 18.589844 20.523438 18.613281 C 20.6875 18.625 20.847656 18.652344 20.996094 18.699219 C 21.164062 18.753906 21.273438 18.894531 21.28125 19.0625 C 21.289062 19.164062 21.28125 19.261719 21.273438 19.359375 C 21.238281 19.636719 21.1875 19.90625 21.105469 20.164062 C 20.96875 20.652344 20.800781 21.109375 20.625 21.574219 C 20.605469 21.628906 20.597656 21.675781 20.59375 21.722656 C 20.597656 21.816406 20.660156 21.871094 20.753906 21.84375 C 20.816406 21.824219 20.867188 21.792969 20.910156 21.742188 C 21.132812 21.542969 21.328125 21.296875 21.484375 21.035156 C 21.921875 20.304688 22.183594 19.488281 22.253906 18.640625 C 22.257812 18.496094 22.253906 18.347656 22.238281 18.214844 C 22.21875 18.09375 22.144531 17.984375 22.035156 17.9375 C 21.949219 17.898438 21.867188 17.871094 21.773438 17.84375 C 21.457031 17.761719 21.132812 17.742188 20.808594 17.726562 Z M 1.785156 17.984375 C 1.753906 17.992188 1.71875 18.011719 1.699219 18.039062 C 1.644531 18.09375 1.632812 18.167969 1.664062 18.234375 C 1.679688 18.289062 1.71875 18.335938 1.753906 18.367188 C 1.929688 18.53125 2.089844 18.6875 2.265625 18.839844 C 4.128906 20.496094 6.269531 21.628906 8.707031 22.195312 C 9.414062 22.359375 10.128906 22.472656 10.859375 22.527344 C 11.128906 22.546875 11.40625 22.554688 11.675781 22.566406 C 11.878906 22.566406 12.074219 22.566406 12.277344 22.566406 C 13.058594 22.539062 13.847656 22.453125 14.625 22.316406 C 15.976562 22.0625 17.285156 21.621094 18.511719 21 C 19.160156 20.671875 19.773438 20.277344 20.347656 19.832031 C 20.417969 19.785156 20.46875 19.71875 20.511719 19.644531 C 20.523438 19.625 20.53125 19.605469 20.539062 19.585938 C 20.578125 19.414062 20.476562 19.246094 20.316406 19.207031 C 20.214844 19.1875 20.105469 19.199219 20.019531 19.246094 C 19.417969 19.523438 18.804688 19.765625 18.167969 19.976562 C 16.972656 20.375 15.738281 20.652344 14.484375 20.8125 C 13.949219 20.878906 13.410156 20.933594 12.871094 20.949219 C 11.871094 20.980469 10.859375 20.933594 9.867188 20.8125 C 9.171875 20.726562 8.476562 20.597656 7.792969 20.441406 C 5.753906 19.960938 3.804688 19.160156 2.023438 18.058594 C 1.980469 18.03125 1.933594 18.011719 1.894531 17.992188 C 1.859375 17.976562 1.820312 17.976562 1.785156 17.984375 Z M 1.785156 17.984375 ";
    svg["PIA"] = "M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12 M 11.40625 8.695312 C 11.40625 8.332031 10.96875 8.152344 10.710938 8.40625 C 10.457031 8.664062 10.636719 9.101562 11 9.101562 C 11.222656 9.101562 11.40625 8.917969 11.402344 8.695312 M 13.003906 8.289062 C 12.640625 8.289062 12.457031 8.726562 12.714844 8.984375 C 12.972656 9.238281 13.40625 9.058594 13.40625 8.695312 C 13.40625 8.472656 13.226562 8.289062 13.003906 8.289062 M 12.566406 9.363281 C 12.242188 9.652344 11.757812 9.652344 11.4375 9.363281 C 11.332031 9.277344 11.199219 9.425781 11.292969 9.519531 C 11.691406 9.894531 12.3125 9.894531 12.707031 9.519531 C 12.75 9.480469 12.75 9.414062 12.710938 9.375 C 12.671875 9.332031 12.609375 9.328125 12.566406 9.363281 M 16.304688 10.933594 L 16.304688 10.929688 C 16.304688 10.550781 16.054688 10.21875 15.691406 10.117188 L 15.691406 9.390625 C 15.691406 7.414062 14.089844 5.8125 12.113281 5.8125 L 11.976562 5.8125 C 10 5.8125 8.394531 7.414062 8.394531 9.390625 L 8.394531 10.097656 C 7.996094 10.171875 7.707031 10.515625 7.703125 10.921875 C 7.59375 11.105469 7.535156 11.316406 7.535156 11.53125 L 7.535156 16.121094 C 7.535156 16.667969 7.902344 17.144531 8.429688 17.289062 C 8.570312 17.605469 8.886719 17.8125 9.234375 17.8125 L 10.238281 17.8125 C 10.570312 17.8125 10.875 17.625 11.027344 17.328125 L 12.871094 17.328125 C 13.019531 17.625 13.324219 17.8125 13.65625 17.8125 L 14.660156 17.8125 C 15 17.8125 15.308594 17.617188 15.457031 17.3125 C 16.039062 17.214844 16.464844 16.710938 16.464844 16.121094 L 16.464844 11.53125 C 16.464844 11.324219 16.410156 11.117188 16.304688 10.933594 Z M 13.113281 15.382812 C 13.136719 15.539062 13.089844 15.695312 12.988281 15.816406 C 12.886719 15.933594 12.738281 16.003906 12.578125 16.003906 L 11.421875 16.003906 C 11.265625 16.003906 11.113281 15.933594 11.011719 15.816406 C 10.910156 15.695312 10.863281 15.539062 10.886719 15.382812 L 11.109375 13.871094 C 10.691406 13.515625 10.527344 12.949219 10.6875 12.421875 C 10.847656 11.898438 11.300781 11.519531 11.84375 11.460938 C 12.445312 11.390625 13.019531 11.722656 13.261719 12.277344 C 13.5 12.832031 13.351562 13.480469 12.890625 13.871094 Z M 13.246094 10.324219 L 10.761719 10.324219 C 10.605469 10.167969 10.390625 10.082031 10.171875 10.082031 L 9.75 10.082031 L 9.75 9.332031 C 9.75 8.09375 10.753906 7.089844 11.992188 7.089844 L 12.101562 7.089844 C 13.339844 7.089844 14.339844 8.09375 14.339844 9.332031 L 14.339844 10.082031 L 13.835938 10.082031 C 13.613281 10.082031 13.402344 10.167969 13.246094 10.324219 Z M 12.730469 15.457031 C 12.742188 15.496094 12.734375 15.535156 12.707031 15.570312 C 12.683594 15.601562 12.644531 15.617188 12.605469 15.617188 L 11.402344 15.617188 C 11.363281 15.617188 11.324219 15.601562 11.300781 15.566406 C 11.273438 15.535156 11.265625 15.496094 11.277344 15.457031 L 11.507812 13.785156 C 11.507812 13.761719 11.503906 13.738281 11.496094 13.714844 C 11.476562 13.683594 11.453125 13.660156 11.421875 13.636719 C 11.417969 13.632812 11.417969 13.632812 11.414062 13.628906 C 11.070312 13.375 10.925781 12.933594 11.058594 12.527344 C 11.191406 12.121094 11.566406 11.84375 11.992188 11.839844 C 12.421875 11.839844 12.800781 12.109375 12.9375 12.515625 C 13.074219 12.917969 12.9375 13.367188 12.59375 13.621094 C 12.59375 13.625 12.59375 13.628906 12.582031 13.636719 C 12.550781 13.660156 12.527344 13.683594 12.507812 13.714844 C 12.503906 13.722656 12.5 13.734375 12.5 13.746094 Z M 12.730469 15.457031 ";
    svg["SURFSHARK"] = "M 24 12 C 24 18.628906 18.628906 24 12 24 C 5.371094 24 0 18.628906 0 12 C 0 5.371094 5.371094 0 12 0 C 18.628906 0 24 5.371094 24 12 Z M 24 12M 16.546875 8.351562 L 16.546875 8.34375 C 16.539062 8.242188 16.53125 8.125 16.527344 8 C 16.511719 7.765625 16.496094 7.515625 16.480469 7.320312 C 16.457031 7.1875 16.425781 7.070312 16.386719 6.960938 C 16.148438 6.429688 15.683594 6.175781 15.191406 6.054688 C 14.964844 6.015625 14.691406 6.007812 14.398438 6 L 11.570312 6 C 9.75 6.097656 8.984375 7.152344 8.78125 7.714844 C 7.984375 10.097656 7.484375 13.1875 7.128906 15.414062 C 7.121094 15.460938 7.113281 15.5 7.105469 15.542969 L 6.988281 16.601562 C 6.980469 16.769531 7 16.953125 7.042969 17.128906 C 7.265625 17.773438 7.941406 18.320312 9.425781 17.777344 C 10.832031 17.167969 12.488281 16.410156 14.199219 15.558594 C 15.175781 14.996094 16.605469 13.703125 16.679688 12.066406 C 16.667969 10.859375 16.628906 9.589844 16.546875 8.351562 Z M 14.289062 9.246094 C 14.289062 9.386719 14.175781 9.5 14.035156 9.5 C 13.183594 9.5 12.496094 10.191406 12.496094 11.039062 L 12.496094 11.980469 C 12.496094 13.5625 11.214844 14.84375 9.636719 14.84375 C 9.496094 14.84375 9.386719 14.730469 9.386719 14.59375 L 9.386719 13.8125 C 9.386719 13.671875 9.5 13.558594 9.640625 13.558594 C 10.492188 13.558594 11.179688 12.871094 11.179688 12.019531 L 11.179688 11.078125 C 11.179688 9.5 12.460938 8.21875 14.042969 8.21875 C 14.179688 8.21875 14.289062 8.328125 14.289062 8.464844 Z M 14.289062 9.246094 ";
    svg["VUDU"] = "M 6.0971 6.9926 L 5.0469 6.9926 C 4.8725 6.9963 4.7129 7.1039 4.6535 7.2709 C 4.6535 7.282 4.6535 7.2895 4.6535 7.3006 C 4.2602 8.4324 3.915 9.4047 3.518 10.5365 C 3.4141 10.8371 3.3102 11.134 3.1914 11.4346 C 3.184 11.4605 3.1654 11.4828 3.1395 11.4939 C 3.0949 11.4939 3.0949 11.4605 3.0838 11.4309 C 2.8389 10.7221 2.5939 10.017 2.3416 9.3119 L 1.6217 7.2561 C 1.6254 7.2486 1.6254 7.2412 1.6217 7.2338 C 1.5475 7.0854 1.399 6.9926 1.2357 6.9926 L 0.1707 6.9926 C 0.0854 6.9852 0.0111 7.0482 0 7.1336 C -0.0037 7.1633 0.0037 7.193 0.0148 7.2189 C 0.6271 8.9297 1.2357 10.6404 1.8443 12.3475 L 1.9705 12.7 C 2.1486 13.2195 2.6348 13.5646 3.1803 13.5609 L 3.3213 13.5609 C 3.5551 13.5498 3.7889 13.5201 4.0227 13.4682 L 4.4531 12.2287 L 6.2566 7.2301 C 6.2641 7.2078 6.2678 7.1893 6.2752 7.1707 C 6.2863 7.0854 6.227 7.0037 6.1416 6.9926 C 6.1268 6.9926 6.1156 6.9926 6.1008 6.9926 M 11.9418 7.4416 C 11.9418 7.2152 11.7674 7.0297 11.5447 7.0111 L 10.4574 7.0111 L 10.4574 7.6123 C 10.4574 8.7441 10.4574 9.7498 10.4574 10.8854 C 10.4611 11.0004 10.45 11.1154 10.424 11.2268 C 10.3424 11.635 10.0455 11.9578 9.6484 12.0729 C 9.0436 12.2695 8.3904 11.9393 8.1937 11.3307 C 8.1566 11.2119 8.1381 11.0895 8.1381 10.967 C 8.1381 10.184 8.1381 8.5104 8.1381 7.6049 L 8.1381 7 C 8.1381 7 7.0545 7 7.0471 7 C 6.8244 7.0148 6.65 7.2041 6.65 7.4268 L 6.65 7.6457 C 6.65 8.8221 6.65 9.8314 6.65 11.0301 C 6.6574 12.4773 7.8301 13.6426 9.2699 13.6314 C 9.4406 13.6314 9.6076 13.6129 9.7746 13.5795 C 10.4203 13.4719 11.0029 13.1193 11.4037 12.5998 C 11.7451 12.1693 11.9344 11.6387 11.9418 11.0857 C 11.9418 10.4586 11.9418 9.8314 11.9418 9.2006 Z M 11.9418 7.4416 M 23.75 7.4416 C 23.75 7.2189 23.5793 7.0297 23.3566 7.0111 L 22.2656 7.0111 L 22.2656 7.6123 C 22.2656 8.7441 22.2656 9.7498 22.2656 10.8854 C 22.2656 11.0004 22.2545 11.1154 22.2285 11.2268 C 22.1506 11.6312 21.85 11.9578 21.4529 12.0729 C 20.8518 12.2732 20.2023 11.943 20.002 11.3381 C 19.9611 11.2193 19.9426 11.0932 19.9426 10.967 C 19.9426 10.184 19.9426 8.5104 19.9426 7.6049 L 19.9426 7 C 19.9426 7 18.8627 7 18.8479 7 C 18.6289 7.0186 18.4582 7.2041 18.4545 7.4268 L 18.4545 7.6457 C 18.4545 8.8221 18.4545 9.8314 18.4545 11.0301 C 18.4656 12.4773 19.6383 13.6426 21.0744 13.6314 C 21.2451 13.6314 21.4158 13.6129 21.5828 13.5795 C 22.2285 13.4719 22.8074 13.1193 23.2082 12.5998 C 23.5533 12.1693 23.7426 11.6387 23.7463 11.0857 C 23.7463 10.4586 23.7463 9.8314 23.7463 9.2006 L 23.7463 7.4416 Z M 23.75 7.4416 M 16.1352 11.5385 C 15.8457 11.8873 15.4338 12.1062 14.9885 12.1471 C 14.8994 12.1508 14.8104 12.1508 14.7213 12.1471 L 13.9531 12.1471 C 13.8604 12.1471 13.8566 12.1471 13.8566 12.0506 L 13.8566 8.4584 C 13.8566 8.373 13.8566 8.373 13.942 8.373 C 14.2686 8.373 14.5691 8.373 14.8809 8.373 C 15.4375 8.3916 15.9496 8.6811 16.2539 9.1486 C 16.4506 9.4381 16.5656 9.7795 16.5805 10.132 C 16.6213 10.6404 16.4617 11.1451 16.1352 11.5385 M 16.5693 7.4898 C 16.1018 7.1893 15.56 7.0223 15.0033 7.0074 C 14.7436 7.0074 14.4875 7.0074 14.224 7.0074 L 12.8473 7.0074 C 12.6098 7.0074 12.4205 7.2004 12.4205 7.4379 L 12.4205 13.1156 C 12.4205 13.3531 12.6098 13.5461 12.8473 13.5461 L 14.9143 13.5461 C 15.0701 13.5461 15.226 13.5313 15.3818 13.5016 C 16.0053 13.4088 16.5842 13.1305 17.0443 12.7037 C 17.9016 11.9541 18.2912 10.8 18.0686 9.6793 C 17.9127 8.7701 17.3672 7.976 16.5805 7.5047 M 19.0334 14.4293 C 18.4656 14.4553 18.024 14.9451 18.0463 15.5166 C 18.0686 16.0881 18.5473 16.5297 19.115 16.5074 C 19.6717 16.4852 20.1096 16.025 20.1021 15.4646 C 20.1133 14.9117 19.6791 14.4479 19.1262 14.4293 L 19.0334 14.4293 M 19.616 15.5092 C 19.6049 15.6354 19.5492 15.7578 19.4639 15.8506 L 19.4342 15.8803 C 19.1967 16.1029 18.8256 16.0918 18.6029 15.8543 C 18.3803 15.6205 18.3914 15.2457 18.6289 15.023 C 18.8627 14.8004 19.2338 14.8115 19.4564 15.049 C 19.4564 15.049 19.4564 15.049 19.4602 15.049 C 19.5529 15.1492 19.6086 15.2791 19.616 15.4164 Z M 19.616 15.5092 M 16.818 15.3199 L 16.818 15.7727 L 17.2633 15.7727 L 17.2633 15.9285 C 17.1557 16.0102 17.0295 16.051 16.8959 16.051 C 16.6027 16.0621 16.3541 15.832 16.343 15.5352 C 16.3393 15.5129 16.3393 15.4906 16.343 15.4721 C 16.3207 15.1752 16.5396 14.9154 16.8365 14.8932 L 16.8959 14.8932 C 17.0703 14.8969 17.2299 14.9934 17.3152 15.1455 L 17.7457 14.9229 C 17.575 14.6111 17.2484 14.4256 16.8959 14.4367 C 16.3281 14.4219 15.8568 14.8746 15.842 15.4424 C 15.8271 15.9953 16.2428 16.4629 16.792 16.5037 L 16.8959 16.5037 C 17.1965 16.5037 17.4859 16.3887 17.7012 16.1734 C 17.7346 16.14 17.7568 16.0881 17.7605 16.0361 L 17.7605 15.3199 Z M 16.818 15.3199 M 15.3187 14.485 L 15.2779 14.485 C 15.1666 14.4924 15.0812 14.5852 15.0775 14.6965 L 15.0775 15.5797 L 14.276 14.485 L 13.7416 14.485 L 13.7416 16.4777 L 14.2537 16.4777 L 14.2537 15.3311 L 15.0924 16.4777 L 15.5822 16.4777 L 15.5822 14.485 Z M 15.3187 14.485 M 12.8139 14.485 L 12.1607 14.485 L 11.4111 16.4814 L 11.9937 16.4814 L 12.0939 16.192 L 12.8732 16.192 L 12.9252 16.3404 C 12.9586 16.4221 13.0328 16.474 13.1182 16.4777 L 13.5561 16.4777 Z M 12.2387 15.743 L 12.491 14.9896 L 12.7396 15.743 Z M 12.2387 15.743 M 10.3943 14.485 L 9.5557 14.485 L 9.5557 16.2699 C 9.5631 16.385 9.6559 16.4777 9.7709 16.4814 L 10.3943 16.4814 C 10.9398 16.5111 11.4111 16.0918 11.4408 15.5389 C 11.4742 14.9896 11.0549 14.5184 10.5057 14.485 C 10.4686 14.485 10.4314 14.485 10.3943 14.485 M 10.3943 16.0361 L 10.0678 16.0361 L 10.0678 14.9229 L 10.3943 14.9229 C 10.6764 14.908 10.9139 15.1232 10.9324 15.4053 L 10.9324 15.4646 C 10.9324 15.7615 10.6912 16.0361 10.398 16.0361 C 10.3943 16.0361 10.398 16.0324 10.398 16.0324 L 10.4018 16.0287 M 8.9063 14.485 C 8.7949 14.4887 8.7021 14.5777 8.6984 14.6891 L 8.6984 15.5797 L 7.8783 14.485 L 7.3439 14.485 L 7.3439 16.4777 L 7.8523 16.4777 L 7.8523 15.3311 L 8.6947 16.4852 L 9.1883 16.4852 L 9.1883 14.485 Z M 8.9063 14.485 M 6.4311 14.485 L 5.7779 14.485 L 5.032 16.4777 L 5.6258 16.4777 L 5.726 16.1883 L 6.5127 16.1883 L 6.5646 16.3404 C 6.598 16.4184 6.6723 16.4703 6.7576 16.4777 L 7.1918 16.4777 Z M 5.8559 15.743 L 6.1119 14.9896 L 6.3605 15.743 Z M 5.8559 15.743 M 5.2213 14.908 L 5.2213 14.459 L 3.6961 14.459 L 3.6961 16.448 L 4.2342 16.448 L 4.2342 15.7578 L 4.7686 15.7578 C 4.865 15.7467 4.9355 15.6687 4.943 15.5723 L 4.943 15.3051 L 4.2416 15.3051 L 4.2416 14.908 Z M 5.2213 14.908 M 0.3971 15.3941 L 3.2471 15.3941 L 3.2471 15.55 L 0.3971 15.55 Z M 0.3971 15.3941 M 20.5549 15.3941 L 23.4049 15.3941 L 23.4049 15.55 L 20.5549 15.55 Z M 20.5549 15.3941";
})(svg || (exports.svg = svg = {}));


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./enums */ "./src/models/enums/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./src/models/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./defaultKeys */ "./src/models/defaultKeys.ts"), exports);
__exportStar(__webpack_require__(/*! ./defaultSources */ "./src/models/defaultSources.ts"), exports);


/***/ }),

/***/ "./src/models/interfaces/customAction.ts":
/*!***********************************************!*\
  !*** ./src/models/interfaces/customAction.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/event.ts":
/*!****************************************!*\
  !*** ./src/models/interfaces/event.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/index.ts":
/*!****************************************!*\
  !*** ./src/models/interfaces/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./customAction */ "./src/models/interfaces/customAction.ts"), exports);
__exportStar(__webpack_require__(/*! ./event */ "./src/models/interfaces/event.ts"), exports);
__exportStar(__webpack_require__(/*! ./key */ "./src/models/interfaces/key.ts"), exports);
__exportStar(__webpack_require__(/*! ./serviceData */ "./src/models/interfaces/serviceData.ts"), exports);
__exportStar(__webpack_require__(/*! ./source */ "./src/models/interfaces/source.ts"), exports);


/***/ }),

/***/ "./src/models/interfaces/key.ts":
/*!**************************************!*\
  !*** ./src/models/interfaces/key.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/serviceData.ts":
/*!**********************************************!*\
  !*** ./src/models/interfaces/serviceData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/source.ts":
/*!*****************************************!*\
  !*** ./src/models/interfaces/source.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/android-tv-card.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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OUIsYUFBYSxtQkFBTyxDQUFDLDZDQUFPO0FBQzVCLGFBQWEsbUJBQU8sQ0FBQyw2REFBZTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsbURBQVU7Ozs7Ozs7Ozs7O0FDcEJsQjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7O1VDRDdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvYW5kcm9pZC10di1jYXJkLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZGVmYXVsdEtleXMudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9kZWZhdWx0U291cmNlcy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2VudW1zL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZW51bXMvc3ZnLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL2N1c3RvbUFjdGlvbi50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9rZXkudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL3NlcnZpY2VEYXRhLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9zb3VyY2UudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbW9kZWxzXzEgPSByZXF1aXJlKFwiLi9tb2RlbHNcIik7XG5jb25zdCBMaXRFbGVtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGN1c3RvbUVsZW1lbnRzLmdldCgnaGEtcGFuZWwtbG92ZWxhY2UnKSk7XG5jb25zdCBodG1sID0gTGl0RWxlbWVudC5wcm90b3R5cGUuaHRtbDtcbmNsYXNzIFRWQ2FyZFNlcnZpY2VzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1c3RvbUtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5jdXN0b21Tb3VyY2VzID0ge307XG4gICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hMb25nQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfaGFzczoge30sXG4gICAgICAgICAgICBfY29uZmlnOiB7fSxcbiAgICAgICAgICAgIF9hcHBzOiB7fSxcbiAgICAgICAgICAgIHRyaWdnZXI6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBnZXRDYXJkU2l6ZSgpIHtcbiAgICAgICAgbGV0IG51bVJvd3MgPSBPYmplY3Qua2V5cyh0aGlzLl9jb25maWcpLmZpbHRlcigoa2V5KSA9PiBrZXkuaW5jbHVkZXMoJ19yb3cnKSkubGVuZ3RoO1xuICAgICAgICBpZiAoJ3RpdGxlJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgICAgIG51bVJvd3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtUm93cztcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IHRoZW1lOiAnZGVmYXVsdCcgfSwgY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tS2V5cyA9IGNvbmZpZy5jdXN0b21fa2V5cyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tU291cmNlcyA9IGNvbmZpZy5jdXN0b21fc291cmNlcyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSBjb25maWcuY3VzdG9tX2ljb25zIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5cyA9IG1vZGVsc18xLmRlZmF1bHRLZXlzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IG1vZGVsc18xLmRlZmF1bHRTb3VyY2VzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbHRfdm9sdW1lX2ljb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VBbHRWb2x1bWVJY29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkQ2FyZEhlbHBlcnMoKTtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMubG9hZEhhc3NIZWxwZXJzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlclZvbHVtZVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0J1dHRvbkVuYWJsZWQocm93LCBidXR0b24pIHtcbiAgICAgICAgaWYgKCEodGhpcy5fY29uZmlnW3Jvd10gaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdbcm93XS5pbmNsdWRlcyhidXR0b24pO1xuICAgIH1cbiAgICBzZXQgaGFzcyhoYXNzKSB7XG4gICAgICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgICAgICBpZiAodGhpcy52b2x1bWVfc2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuaGFzcyA9IGhhc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhc3NSZXNvbHZlKSB7XG4gICAgICAgICAgICB0aGlzLl9oYXNzUmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzcztcbiAgICB9XG4gICAgZmlyZUV2ZW50KHdpbmRvdywgdHlwZSwgZGV0YWlsKSB7XG4gICAgICAgIGxldCBlID0gbmV3IEV2ZW50KHR5cGUsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgZS5kZXRhaWwgPSBkZXRhaWw7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgZGV0YWlsKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuZW5hYmxlX2J1dHRvbl9mZWVkYmFjayA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICB0aGlzLl9jb25maWcuZW5hYmxlX2J1dHRvbl9mZWVkYmFjaykge1xuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQod2luZG93LCAnaGFwdGljJywgZGV0YWlsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkQ2FyZEhlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9oZWxwZXJzID0geWllbGQgd2luZG93LmxvYWRDYXJkSGVscGVycygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hlbHBlcnNSZXNvbHZlKVxuICAgICAgICAgICAgICAgIHRoaXMuX2hlbHBlcnNSZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkSGFzc0hlbHBlcnMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faGVscGVycyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5faGVscGVyc1Jlc29sdmUgPSByZXNvbHZlKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5faGFzcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiAodGhpcy5faGFzc1Jlc29sdmUgPSByZXNvbHZlKSk7XG4gICAgICAgICAgICB0aGlzLl9oZWxwZXJzUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2hhc3NSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyVm9sdW1lU2xpZGVyKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHNsaWRlcl9jb25maWcgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbTpteS1zbGlkZXInLFxuICAgICAgICAgICAgICAgIGVudGl0eTogdGhpcy5fY29uZmlnLm1lZGlhX3BsYXllcl9pZCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBtYWluU2xpZGVyQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5U2xpZGVyQ29sb3I6ICdyZ2IoNjAsIDYwLCA2MCknLFxuICAgICAgICAgICAgICAgIG1haW5TbGlkZXJDb2xvck9mZjogJ3JnYig2MCwgNjAsIDYwKScsXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5U2xpZGVyQ29sb3JPZmY6ICdyZ2IoNjAsIDYwLCA2MCknLFxuICAgICAgICAgICAgICAgIHRodW1iV2lkdGg6ICcwcHgnLFxuICAgICAgICAgICAgICAgIHRodW1iSG9yaXpvbnRhbFBhZGRpbmc6ICcwcHgnLFxuICAgICAgICAgICAgICAgIHJhZGl1czogJzI1cHgnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuc2xpZGVyX2NvbmZpZyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHNsaWRlcl9jb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNsaWRlcl9jb25maWcpLCB0aGlzLl9jb25maWcuc2xpZGVyX2NvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIgPSB5aWVsZCB0aGlzLl9oZWxwZXJzLmNyZWF0ZUNhcmRFbGVtZW50KHNsaWRlcl9jb25maWcpO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLnN0eWxlID0gJ2ZsZXg6IDAuOTsnO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csICdsaWdodCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChfZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgJ2xpZ2h0Jyk7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5oYXNzID0gdGhpcy5faGFzcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZUFsdFZvbHVtZUljb25zKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV91cC5pY29uID0gJ21kaTp2b2x1bWUtaGlnaCc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX2Rvd24uaWNvbiA9ICdtZGk6dm9sdW1lLW1lZGl1bSc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX211dGUuaWNvbiA9ICdtZGk6dm9sdW1lLXZhcmlhbnQtb2ZmJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICAgIHNlbmRLZXkoa2V5LCBsb25nUHJlc3MgPSBmYWxzZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLnJlbW90ZV9pZCxcbiAgICAgICAgICAgIGNvbW1hbmQ6IGtleSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxvbmdQcmVzcykge1xuICAgICAgICAgICAgZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgncmVtb3RlJywgJ3NlbmRfY29tbWFuZCcsIGRhdGEpO1xuICAgIH1cbiAgICBnZXRJbmZvKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VzdG9tS2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVNvdXJjZXNbYWN0aW9uXSB8fFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBlaXRoZXIgYSBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlIG9yIGEgY3VzdG9tIGtleSB0byBhbnkgc2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5nZXRJbmZvKGFjdGlvbik7XG4gICAgICAgIGlmICgna2V5JyBpbiBpbmZvKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gaW5mby5rZXk7XG4gICAgICAgICAgICB0aGlzLnNlbmRLZXkoa2V5LCBsb25nUHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCdzb3VyY2UnIGluIGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU291cmNlKGluZm8uc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnc2VydmljZScgaW4gaW5mbykge1xuICAgICAgICAgICAgbGV0IHNlcnZpY2VfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5mby5zZXJ2aWNlX2RhdGEgfHwge30pKTtcbiAgICAgICAgICAgIGlmIChsb25nUHJlc3MgJiYgaW5mby5zZXJ2aWNlID09ICdyZW1vdGUuc2VuZF9jb21tYW5kJykge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VfZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgW2RvbWFpbiwgc2VydmljZV0gPSBpbmZvLnNlcnZpY2Uuc3BsaXQoJy4nLCAyKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlX2RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wZW4gYW4gQW5kcm9pZCBUViBhcHAgdXNpbmcgaXQncyBkZWVwIGxpbmtcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlIEFuZHJvaWQgVFYgZGVlcCBsaW5rIGZvciBhbiBhcHBcbiAgICAgKi9cbiAgICBjaGFuZ2VTb3VyY2Uoc291cmNlKSB7XG4gICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ3JlbW90ZScsICd0dXJuX29uJywge1xuICAgICAgICAgICAgYWN0aXZpdHk6IHNvdXJjZSxcbiAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLnJlbW90ZV9pZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIGNsaWNrIHdpdGggbm8gbW92ZW1lbnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaENsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IGNsaWNrX2FjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAnY2VudGVyJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGUuZGV0YWlsICYmIGUuZGV0YWlsID4gdGhpcy5jbGlja0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZV9kb3VibGVfY2xpY2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaERvdWJsZUNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gc2V0VGltZW91dChjbGlja19hY3Rpb24sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGlja19hY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBkb3VibGUgY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaERvdWJsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgbGV0IGFjdGlvbiA9IChfYSA9IHRoaXMuX2NvbmZpZy5kb3VibGVfY2xpY2tfa2V5Y29kZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2JhY2snO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIGFuZCBsb25nIGNsaWNrIHN0YXJ0XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IHRydWU7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcGVhdCBob2xkIGFjdGlvbiBmb3IgZGlyZWN0aW9uYWwga2V5c1xuICAgICAgICAgICAgaWYgKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10uaW5jbHVkZXModGhpcy50b3VjaEFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLnRvdWNoQWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAoX2EgPSB0aGlzLl9jb25maWcubG9uZ19jbGlja19rZXljb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnY2VudGVyJywgdGhpcy5fY29uZmlnLmxvbmdfY2xpY2tfa2V5Y29kZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWCA9IChfYSA9IGUudG91Y2hlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWSA9IChfYiA9IGUudG91Y2hlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iWzBdLmNsaWVudFk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIGVuZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblRvdWNoRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMudG91Y2hMb25nQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hMb25nQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lcik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50b3VjaEludGVydmFsKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lcik7XG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLmNsaWNrVGltZXIgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBzd2lwZSBtb3ZlXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgaWYgKCF3aW5kb3cuaW5pdGlhbFggfHwgIXdpbmRvdy5pbml0aWFsWSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjdXJyZW50WCA9ICgoX2EgPSBlLnRvdWNoZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jbGllbnRYKSB8fCAwO1xuICAgICAgICBsZXQgY3VycmVudFkgPSAoKF9iID0gZS50b3VjaGVzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMF0uY2xpZW50WSkgfHwgMDtcbiAgICAgICAgbGV0IGRpZmZYID0gd2luZG93LmluaXRpYWxYIC0gY3VycmVudFg7XG4gICAgICAgIGxldCBkaWZmWSA9IHdpbmRvdy5pbml0aWFsWSAtIGN1cnJlbnRZO1xuICAgICAgICBsZXQgYWN0aW9uO1xuICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZlgpID4gTWF0aC5hYnMoZGlmZlkpKSB7XG4gICAgICAgICAgICAvLyBTbGlkaW5nIGhvcml6b250YWxseVxuICAgICAgICAgICAgYWN0aW9uID0gZGlmZlggPiAwID8gJ2xlZnQnIDogJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNsaWRpbmcgdmVydGljYWxseVxuICAgICAgICAgICAgYWN0aW9uID0gZGlmZlkgPiAwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWCA9IHVuZGVmaW5lZDtcbiAgICAgICAgd2luZG93LmluaXRpYWxZID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBidXR0b24gY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb25dXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBsb25nUHJlc3MgPSBmYWxzZSkge1xuICAgICAgICBhY3Rpb24gPSBhY3Rpb24gfHwgZS5jdXJyZW50VGFyZ2V0LmFjdGlvbjtcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgbGV0IGhhcHRpYyA9IGxvbmdQcmVzcyA/ICdtZWRpdW0nIDogJ2xpZ2h0JztcbiAgICAgICAgaWYgKGFjdGlvbiA9PSAnY2VudGVyJyAmJiAhbG9uZ1ByZXNzKSB7XG4gICAgICAgICAgICBoYXB0aWMgPSAnc2VsZWN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT0gdGhpcy5fY29uZmlnLmRvdWJsZV9jbGlja19rZXljb2RlKSB7XG4gICAgICAgICAgICBoYXB0aWMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJlSGFwdGljRXZlbnQod2luZG93LCBoYXB0aWMpO1xuICAgICAgICBsZXQga2V5ID0gJ2tleScgaW4gaW5mbyA/IGluZm8ua2V5IDogJyc7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdLRVlCT0FSRCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWJvYXJkUHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RFWFRCT1gnOlxuICAgICAgICAgICAgICAgIHRoaXMub25UZXh0Ym94UHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vblNlYXJjaFByZXNzKGUsIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGxvbmcgY2xpY2sgc3RhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25CdXR0b25Mb25nQ2xpY2tTdGFydChlKSB7XG4gICAgICAgIHRoaXMuaG9sZEFjdGlvbiA9IGUuY3VycmVudFRhcmdldC5hY3Rpb247XG4gICAgICAgIHRoaXMuaG9sZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhvbGRMb25nQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgLy8gT25seSByZXBlYXQgaG9sZCBhY3Rpb24gZm9yIGRpcmVjdGlvbmFsIGtleXMgYW5kIHZvbHVtZVxuICAgICAgICAgICAgLy8gcHJldHRpZXItaWdub3JlXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnLCAndm9sdW1lX3VwJywgJ3ZvbHVtZV9kb3duJywgJ2RlbGV0ZSddLmluY2x1ZGVzKHRoaXMuaG9sZEFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMuaG9sZEFjdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgdGhpcy5ob2xkQWN0aW9uLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGxvbmcgY2xpY2sgZW5kXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uQnV0dG9uTG9uZ0NsaWNrRW5kKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaG9sZExvbmdDbGljaykge1xuICAgICAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmhvbGRUaW1lcik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5ob2xkSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmhvbGRBY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZEludGVydmFsID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Iga2V5Ym9hcmQga2V5ZG93biBldmVudHMsIHVzZWQgZm9yIG5vbi1hbHBoYW51bWVyaWNhbCBrZXlzXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uS2V5RG93bihlKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3Qga2V5VG9LZXkgPSB7XG4gICAgICAgICAgICBCYWNrc3BhY2U6ICdkZWxldGUnLFxuICAgICAgICAgICAgRGVsZXRlOiAnZm9yd2FyZF9kZWxldGUnLFxuICAgICAgICAgICAgRW50ZXI6ICdlbnRlcicsXG4gICAgICAgICAgICBBcnJvd0xlZnQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIEFycm93UmlnaHQ6ICdyaWdodCcsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBrZXkgPSBrZXlUb0tleVsoX2EgPSBlLmtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyddO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoKChfYiA9IGUuY3VycmVudFRhcmdldCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnZhbHVlKSAhPSAnJykge1xuICAgICAgICAgICAgICAgIChfYyA9IGUuY3VycmVudFRhcmdldCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmJsdXIoKTtcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAoX2QgPSBlLmN1cnJlbnRUYXJnZXQpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Iga2V5Ym9hcmQgaW5wdXQgZXZlbnRzLCB1c2VkIGZvciBhbHBoYW51bWVyaWNhbCBrZXlzIGFuZCB3b3JrcyBvbiBhbGwgcGxhdGZvcm1zXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uSW5wdXQoZSkge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZS5kYXRhKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5hZGJfaWQsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogJ2lucHV0IHRleHQgXCInICsgZS5kYXRhICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBwYXN0ZSBldmVudHMsIGFzIG9uSW5wdXQgcGFzdGUgZXZlbnRzIHJldHVybiBudWxsIGZvciBkYXRhIGZpZWxkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uUGFzdGUoZSkge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0ZXh0ID0gZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnaW5wdXQgdGV4dCBcIicgKyB0ZXh0ICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIG9uIGZvY3VzIGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCBjaGFuZ2VzIGljb24gY29sb3JcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Gb2N1cyhlKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5zdHlsZS5jb2xvciA9XG4gICAgICAgICAgICAndmFyKC0tc3RhdGUtYWN0aXZlLWNvbG9yKSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnOSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igb24gZm9jdXMgb3V0IGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCByZXNldHMgaWNvbiBjb2xvclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkZvY3VzT3V0KGUpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuekluZGV4ID0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNsaWNraW5nIHRoZSBrZXlib2FyZCBidXR0b25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uS2V5Ym9hcmRQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5mb2N1cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBzZW5kaW5nIGJ1bGsgdGV4dCB2aWEgbGVnYWN5IHByb21wdCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uVGV4dGJveFByZXNzKGUsIF9sb25ncHJlc3MpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IHRleHQgPSBwcm9tcHQoJ1RleHQgSW5wdXQ6ICcpO1xuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIHRleHQgKyAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGdsb2JhbCBHb29nbGUgQXNzaXN0YW50IHNlYXJjaFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25TZWFyY2hQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGxldCB0ZXh0ID0gcHJvbXB0KCdHb29nbGUgQXNzaXN0YW50IFNlYXJjaDogJyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5hZGJfaWQsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogJ2FtIHN0YXJ0IC1hIFwiYW5kcm9pZC5zZWFyY2guYWN0aW9uLkdMT0JBTF9TRUFSQ0hcIiAtLWVzIHF1ZXJ5IFwiJyArXG4gICAgICAgICAgICAgICAgICAgIHRleHQgK1xuICAgICAgICAgICAgICAgICAgICAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1aWxkSWNvbkJ1dHRvbihhY3Rpb24pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZjtcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgbGV0IGljb24gPSAoX2EgPSBpbmZvID09PSBudWxsIHx8IGluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluZm8uaWNvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGxldCBzdmdfcGF0aCA9IChfYyA9IChfYiA9IGluZm8uc3ZnX3BhdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuY3VzdG9tSWNvbnNbaWNvbl0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnO1xuICAgICAgICAvLyBVc2Ugb3JpZ2luYWwgaWNvbiBpZiBub25lIHByb3ZpZGVkIGZvciBjdXN0b20ga2V5IG9yIHNvdXJjZVxuICAgICAgICBpZiAoIShpY29uIHx8IHN2Z19wYXRoKSkge1xuICAgICAgICAgICAgbGV0IGljb25JbmZvID0gdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8IHRoaXMuZGVmYXVsdFNvdXJjZXNbYWN0aW9uXSB8fCB7fTtcbiAgICAgICAgICAgIGljb24gPSAoX2QgPSBpY29uSW5mbyA9PT0gbnVsbCB8fCBpY29uSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWNvbkluZm8uaWNvbikgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICBzdmdfcGF0aCA9IChfZiA9IGljb25JbmZvID09PSBudWxsIHx8IGljb25JbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpY29uSW5mby5zdmdfcGF0aCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtJbnB1dCA9IGh0bWwgYGA7XG4gICAgICAgIGlmICgna2V5JyBpbiBpbmZvICYmIGluZm8ua2V5ID09ICdLRVlCT0FSRCcpIHtcbiAgICAgICAgICAgIGtJbnB1dCA9IGh0bWwgYFxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0c3BlbGxjaGVjaz1cImZhbHNlXCJcclxuXHRcdFx0XHRcdGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRvbmNoYW5nZT1cInRoaXMudmFsdWU9JydcIlxyXG5cdFx0XHRcdFx0b25rZXl1cD1cInRoaXMudmFsdWU9JydcIlxyXG5cdFx0XHRcdFx0QGZvY3VzPVwiJHt0aGlzLm9uRm9jdXN9XCJcclxuXHRcdFx0XHRcdEBmb2N1c291dD1cIiR7dGhpcy5vbkZvY3VzT3V0fVwiXHJcblx0XHRcdFx0XHRAaW5wdXQ9XCIke3RoaXMub25JbnB1dH1cIlxyXG5cdFx0XHRcdFx0QHBhc3RlPVwiJHt0aGlzLm9uUGFzdGV9XCJcclxuXHRcdFx0XHRcdEBrZXlkb3duPVwiJHt0aGlzLm9uS2V5RG93bn1cIlxyXG5cdFx0XHRcdD48L2lucHV0PlxyXG5cdFx0XHRgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sIGBcclxuXHRcdFx0PGhhLWljb24tYnV0dG9uXHJcblx0XHRcdFx0LmFjdGlvbj1cIiR7YWN0aW9ufVwiXHJcblx0XHRcdFx0QGNsaWNrPVwiJHt0aGlzLm9uQnV0dG9uQ2xpY2t9XCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vbkJ1dHRvbkxvbmdDbGlja1N0YXJ0fVwiXHJcblx0XHRcdFx0QHRvdWNoZW5kPVwiJHt0aGlzLm9uQnV0dG9uTG9uZ0NsaWNrRW5kfVwiXHJcblx0XHRcdFx0dGl0bGU9XCIke2FjdGlvbn1cIlxyXG5cdFx0XHRcdC5wYXRoPVwiJHtzdmdfcGF0aH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGhhLWljb24gLmljb249XCIkeyFzdmdfcGF0aCA/IGljb24gOiAnJ31cIj48L2hhLWljb24+XHJcblx0XHRcdFx0JHtrSW5wdXR9XHJcblx0XHRcdDwvaGEtaWNvbi1idXR0b24+XHJcblx0XHRgO1xuICAgIH1cbiAgICBidWlsZFJvdyhjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBodG1sIGAgPGRpdiBjbGFzcz1cInJvd1wiPiR7Y29udGVudH08L2Rpdj4gYDtcbiAgICB9XG4gICAgYnVpbGRCdXR0b25zRnJvbUFjdGlvbnMoYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gdGhpcy5idWlsZEljb25CdXR0b24oYWN0aW9uKSk7XG4gICAgfVxuICAgIHRyaWdnZXJSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2hhc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sIGBgO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb250ZW50ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZykuZm9yRWFjaCgocm93X25hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dfbmFtZS5pbmNsdWRlcygnX3JvdycpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb3dfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2b2x1bWVfcm93Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy52b2x1bWVfcm93ID09ICdidXR0b25zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCd2b2x1bWVfZG93bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndm9sdW1lX211dGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ3ZvbHVtZV91cCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW3RoaXMudm9sdW1lX3NsaWRlcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbl9yb3cnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2NvbmZpZy5uYXZpZ2F0aW9uX3Jvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2J1dHRvbnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ3VwJyldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdsZWZ0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbignY2VudGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ2Rvd24nKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG91Y2hwYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG91Y2hwYWQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIGBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dG91Y2hhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInRvdWNoYXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCIke3RoaXMub25Ub3VjaENsaWNrfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vblRvdWNoU3RhcnR9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaG1vdmU9XCIke3RoaXMub25Ub3VjaE1vdmV9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaGVuZD1cIiR7dGhpcy5vblRvdWNoRW5kfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdG91Y2hhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2godG91Y2hwYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLmJ1aWxkQnV0dG9uc0Zyb21BY3Rpb25zKHRoaXMuX2NvbmZpZ1tyb3dfbmFtZV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50Lm1hcCh0aGlzLmJ1aWxkUm93KTtcbiAgICAgICAgbGV0IG91dHB1dCA9IGh0bWwgYFxyXG5cdFx0XHQke3RoaXMucmVuZGVyU3R5bGUoKX1cclxuXHRcdFx0PGhhLWNhcmQgLmhlYWRlcj1cIiR7dGhpcy5fY29uZmlnLnRpdGxlfVwiPiR7Y29udGVudH08L2hhLWNhcmQ+XHJcblx0XHRgO1xuICAgICAgICByZXR1cm4gaHRtbCBgJHtvdXRwdXR9YDtcbiAgICB9XG4gICAgcmVuZGVyU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcclxuXHRcdFx0PHN0eWxlPlxyXG5cdFx0XHRcdC5yZW1vdGUge1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMTZweCAwcHggMTZweCAwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGltZyxcclxuXHRcdFx0XHRoYS1pY29uLWJ1dHRvbiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDhweDtcclxuXHRcdFx0XHRcdGhlaWdodDogNDhweDtcclxuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHRcdC0tbWRjLWljb24tc2l6ZTogMTAwJTtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW5wdXQge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRcdGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuXHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHR3aWR0aDogLW1vei1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHR3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdHdpZHRoOiBmaWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogLW1vei1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IGZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucm93IHtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMzZweCA4cHggMzZweDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuZGlhZ29uYWwge1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRvdWNoYXJlYSB7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdFx0XHRcdFx0ZmxleC1ncm93OiAxO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAke3RoaXMuX2NvbmZpZ1sndG91Y2hwYWRfaGVpZ2h0J10gfHwgJzI1MHB4J307XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjNmQ3NjdlO1xyXG5cdFx0XHRcdFx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9zdHlsZT5cclxuXHRcdGA7XG4gICAgfVxuICAgIGFwcGx5VGhlbWVzT25FbGVtZW50KGVsZW1lbnQsIHRoZW1lcywgbG9jYWxUaGVtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGVsZW1lbnQuX3RoZW1lcyA9IChfYSA9IGVsZW1lbnQuX3RoZW1lcykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgICAgIGxldCB0aGVtZU5hbWUgPSB0aGVtZXMuZGVmYXVsdF90aGVtZTtcbiAgICAgICAgaWYgKGxvY2FsVGhlbWUgPT09ICdkZWZhdWx0JyB8fFxuICAgICAgICAgICAgKGxvY2FsVGhlbWUgJiYgdGhlbWVzLnRoZW1lc1tsb2NhbFRoZW1lXSkpIHtcbiAgICAgICAgICAgIHRoZW1lTmFtZSA9IGxvY2FsVGhlbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5fdGhlbWVzKTtcbiAgICAgICAgaWYgKHRoZW1lTmFtZSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgICAgICBsZXQgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICAgICAgICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoXG4gICAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgICAgIGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgICAgICAgaWYgKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHxcbiAgICAgICAgICAgICAgICBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgICAgICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbmRyb2lkLXR2LWNhcmQnLCBUVkNhcmRTZXJ2aWNlcyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdEtleXMgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgaXMgdGhlIGxpc3Qgb2YgbW9zdCBjb21tb24gY29tbWFuZHMgZnJvbSB0aGUgQW5kcm9pZCBUViBSZW1vdGUgaW50ZWdyYXRpb24gcGFnZS5cbiAqIE5vdCBhbGwgYXJlIGVuc3VyZWQgdG8gd29yaywgYW5kIGlmIHRoZXkgZG8gbm90IGl0IGlzIGxpa2VseSBhbiBpc3N1ZSB3aXRoIHRoZSB1bmRlcmx5aW5nIHBhY2thZ2UgdXNlZCBieSB0aGUgQW5kcm9pZCBUViBSZW1vdGUgaW50ZWdyYXRpb24gb3IgdGhlIEFuZHJvaWQgVFYgUmVtb3RlIFByb3RvY29sIFYyIGl0c2VsZi5cbiAqIGh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2ludGVncmF0aW9ucy9hbmRyb2lkdHZfcmVtb3RlLyNyZW1vdGVcbiAqL1xuZXhwb3J0cy5kZWZhdWx0S2V5cyA9IHtcbiAgICBwb3dlcjogeyBrZXk6ICdQT1dFUicsIGljb246ICdtZGk6cG93ZXInIH0sXG4gICAgdm9sdW1lX3VwOiB7IGtleTogJ1ZPTFVNRV9VUCcsIGljb246ICdtZGk6dm9sdW1lLXBsdXMnIH0sXG4gICAgdm9sdW1lX2Rvd246IHsga2V5OiAnVk9MVU1FX0RPV04nLCBpY29uOiAnbWRpOnZvbHVtZS1taW51cycgfSxcbiAgICB2b2x1bWVfbXV0ZTogeyBrZXk6ICdNVVRFJywgaWNvbjogJ21kaTp2b2x1bWUtbXV0ZScgfSxcbiAgICBiYWNrOiB7IGtleTogJ0JBQ0snLCBpY29uOiAnbWRpOmtleWJvYXJkLWJhY2tzcGFjZScgfSxcbiAgICBob21lOiB7IGtleTogJ0hPTUUnLCBpY29uOiAnbWRpOmhvbWUnIH0sXG4gICAgdXA6IHsga2V5OiAnRFBBRF9VUCcsIGljb246ICdtZGk6Y2hldnJvbi11cCcgfSxcbiAgICBsZWZ0OiB7IGtleTogJ0RQQURfTEVGVCcsIGljb246ICdtZGk6Y2hldnJvbi1sZWZ0JyB9LFxuICAgIGNlbnRlcjogeyBrZXk6ICdEUEFEX0NFTlRFUicsIGljb246ICdtZGk6Y2hlY2tib3gtYmxhbmstY2lyY2xlJyB9LFxuICAgIHJpZ2h0OiB7IGtleTogJ0RQQURfUklHSFQnLCBpY29uOiAnbWRpOmNoZXZyb24tcmlnaHQnIH0sXG4gICAgZG93bjogeyBrZXk6ICdEUEFEX0RPV04nLCBpY29uOiAnbWRpOmNoZXZyb24tZG93bicgfSxcbiAgICBwbGF5OiB7IGtleTogJ01FRElBX1BMQVknLCBpY29uOiAnbWRpOnBsYXknIH0sXG4gICAgcGF1c2U6IHsga2V5OiAnTUVESUFfUEFVU0UnLCBpY29uOiAnbWRpOnBhdXNlJyB9LFxuICAgIHBsYXlfcGF1c2U6IHsga2V5OiAnTUVESUFfUExBWV9QQVVTRScsIGljb246ICdtZGk6cGxheS1wYXVzZScgfSxcbiAgICBzdG9wOiB7IGtleTogJ01FRElBX1NUT1AnLCBpY29uOiAnbWRpOnN0b3AnIH0sXG4gICAgcmV3aW5kOiB7IGtleTogJ01FRElBX1JFV0lORCcsIGljb246ICdtZGk6cmV3aW5kJyB9LFxuICAgIGZhc3RfZm9yd2FyZDogeyBrZXk6ICdNRURJQV9GQVNUX0ZPUldBUkQnLCBpY29uOiAnbWRpOmZhc3QtZm9yd2FyZCcgfSxcbiAgICBwcmV2aW91czogeyBrZXk6ICdNRURJQV9QUkVWSU9VUycsIGljb246ICdtZGk6c2tpcC1wcmV2aW91cycgfSxcbiAgICByZWNvcmQ6IHsga2V5OiAnTUVESUFfUkVDT1JEJywgaWNvbjogJ21kaTpyZWNvcmQnIH0sXG4gICAgbmV4dDogeyBrZXk6ICdNRURJQV9ORVhUJywgaWNvbjogJ21kaTpza2lwLW5leHQnIH0sXG4gICAgbWVudTogeyBrZXk6ICdNRU5VJywgaWNvbjogJ21kaTptZW51JyB9LFxuICAgIGE6IHsga2V5OiAnQlVUVE9OX0EnLCBpY29uOiAnbWRpOmFscGhhLWEtY2lyY2xlJyB9LFxuICAgIGI6IHsga2V5OiAnQlVUVE9OX0InLCBpY29uOiAnbWRpOmFscGhhLUItY2lyY2xlJyB9LFxuICAgIHg6IHsga2V5OiAnQlVUVE9OX1gnLCBpY29uOiAnbWRpOmFscGhhLXgtY2lyY2xlJyB9LFxuICAgIHk6IHsga2V5OiAnQlVUVE9OX1knLCBpY29uOiAnbWRpOmFscGhhLXktY2lyY2xlJyB9LFxuICAgIG4wOiB7IGtleTogJzAnLCBpY29uOiAnbWRpOm51bWVyaWMtMCcgfSxcbiAgICBuMTogeyBrZXk6ICcxJywgaWNvbjogJ21kaTpudW1lcmljLTEnIH0sXG4gICAgbjI6IHsga2V5OiAnMicsIGljb246ICdtZGk6bnVtZXJpYy0yJyB9LFxuICAgIG4zOiB7IGtleTogJzMnLCBpY29uOiAnbWRpOm51bWVyaWMtMycgfSxcbiAgICBuNDogeyBrZXk6ICc0JywgaWNvbjogJ21kaTpudW1lcmljLTQnIH0sXG4gICAgbjU6IHsga2V5OiAnNScsIGljb246ICdtZGk6bnVtZXJpYy01JyB9LFxuICAgIG42OiB7IGtleTogJzYnLCBpY29uOiAnbWRpOm51bWVyaWMtNicgfSxcbiAgICBuNzogeyBrZXk6ICc3JywgaWNvbjogJ21kaTpudW1lcmljLTcnIH0sXG4gICAgbjg6IHsga2V5OiAnOCcsIGljb246ICdtZGk6bnVtZXJpYy04JyB9LFxuICAgIG45OiB7IGtleTogJzknLCBpY29uOiAnbWRpOm51bWVyaWMtOScgfSxcbiAgICBjaGFubmVsX3VwOiB7IGtleTogJ0NIQU5ORUxfVVAnLCBpY29uOiAnbWRpOmFycm93LXVwLWNpcmNsZScgfSxcbiAgICBjaGFubmVsX2Rvd246IHsga2V5OiAnQ0hBTk5FTF9ET1dOJywgaWNvbjogJ21kaTphcnJvdy1kb3duLWNpcmNsZScgfSxcbiAgICBmMTogeyBrZXk6ICdGMScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjEnIH0sXG4gICAgZjI6IHsga2V5OiAnRjInLCBpY29uOiAnbWRpOmtleWJvYXJkLWYyJyB9LFxuICAgIGYzOiB7IGtleTogJ0YzJywgaWNvbjogJ21kaTprZXlib2FyZC1mMycgfSxcbiAgICBmNDogeyBrZXk6ICdGNCcsIGljb246ICdtZGk6a2V5Ym9hcmQtZjQnIH0sXG4gICAgZjU6IHsga2V5OiAnRjUnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY1JyB9LFxuICAgIGY2OiB7IGtleTogJ0Y2JywgaWNvbjogJ21kaTprZXlib2FyZC1mNicgfSxcbiAgICBmNzogeyBrZXk6ICdGNycsIGljb246ICdtZGk6a2V5Ym9hcmQtZjcnIH0sXG4gICAgZjg6IHsga2V5OiAnRjgnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY4JyB9LFxuICAgIGY5OiB7IGtleTogJ0Y5JywgaWNvbjogJ21kaTprZXlib2FyZC1mOScgfSxcbiAgICBmMTA6IHsga2V5OiAnRjEwJywgaWNvbjogJ21kaTprZXlib2FyZC1mMTAnIH0sXG4gICAgZjExOiB7IGtleTogJ0YxMScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjExJyB9LFxuICAgIGYxMjogeyBrZXk6ICdGMTInLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxMicgfSxcbiAgICB0djogeyBrZXk6ICdUVicsIGljb246ICdtZGk6dGVsZXZpc2lvbi1ib3gnIH0sXG4gICAgcmVkOiB7IGtleTogJ1BST0dfUkVEJywgaWNvbjogJ21kaTphbHBoYS1yLWJveCcgfSxcbiAgICBncmVlbjogeyBrZXk6ICdQUk9HX0dSRUVOJywgaWNvbjogJ21kaTphbHBoYS1nLWJveCcgfSxcbiAgICB5ZWxsb3c6IHsga2V5OiAnUFJPR19ZRUxMT1cnLCBpY29uOiAnbWRpOmFscGhhLXktYm94JyB9LFxuICAgIGJsdWU6IHsga2V5OiAnUFJPR19CTFVFJywgaWNvbjogJ21kaTphbHBoYS1iLWJveCcgfSxcbiAgICBidXR0b25fbW9kZTogeyBrZXk6ICdCVVRUT05fTU9ERScsIGljb246ICdtZGk6Z2VzdHVyZS10YXAtYnV0b24nIH0sXG4gICAgZXhwbG9yZXI6IHsga2V5OiAnRVhQTE9SRVInLCBpY29uOiAnbWRpOmZvbGRlci1tdWx0aXBsZScgfSxcbiAgICBpbmZvOiB7IGtleTogJ0lORk8nLCBpY29uOiAnbWRpOmluZm9ybWF0aW9uJyB9LFxuICAgIGd1aWRlOiB7IGtleTogJ0dVSURFJywgaWNvbjogJ21kaTp0ZWxldmlzaW9uLWd1aWRlJyB9LFxuICAgIHRlbGV0ZXh0OiB7IGtleTogJ1RWX1RFTEVURVhUJywgaWNvbjogJ21kaTpjYXJkLXRleHQnIH0sXG4gICAgY2FwdGlvbnM6IHsga2V5OiAnQ0FQVElPTlMnLCBpY29uOiAnbWRpOmNsb3NlZC1jYXB0aW9uJyB9LFxuICAgIGR2cjogeyBrZXk6ICdEVlInLCBpY29uOiAnbWRpOmF1ZGlvLXZpZGVvJyB9LFxuICAgIGF1ZGlvX3RyYWNrOiB7IGtleTogJ01FRElBX0FVRElPX1RSQUNLJywgaWNvbjogJ21kaTp3YXZlZm9ybScgfSxcbiAgICBzZXR0aW5nczogeyBrZXk6ICdTRVRUSU5HUycsIGljb246ICdtZGk6Y29nJyB9LFxuICAgIGRlbGV0ZTogeyBrZXk6ICdERUwnLCBpY29uOiAnbWRpOmJhY2tzcGFjZScgfSxcbiAgICBmb3J3YXJkX2RlbGV0ZTogeyBrZXk6ICdGT1dBUkRfREVMJywgaWNvbjogJ21kaTpiYWNrc3BhY2UtcmV2ZXJzZScgfSxcbiAgICBlbnRlcjogeyBrZXk6ICdFTlRFUicsIGljb246ICdtZGk6bWFnbmlmeScgfSxcbiAgICBrZXlib2FyZDogeyBrZXk6ICdLRVlCT0FSRCcsIGljb246ICdtZGk6a2V5Ym9hcmQnIH0sXG4gICAgc2VhcmNoOiB7IGtleTogJ1NFQVJDSCcsIGljb246ICdtZGk6Z29vZ2xlLWFzc2lzdGFudCcgfSxcbiAgICB0ZXh0Ym94OiB7IGtleTogJ1RFWFRCT1gnLCBpY29uOiAnbWRpOnRleHQtYm94JyB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0U291cmNlcyA9IHZvaWQgMDtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG4vKipcbiAqIFRoaXMgaXMgYSBsaXN0IG9mIGNvbW1vbiBzdHJlYW1pbmcgYXBwcywgdGhlaXIgaWNvbnMsIGFuZCB0aGUgZGVlcCBsaW5rcyB0byBvcGVuIHRoZW0gaW4gQW5kcm9pZCBUViwgbW9zdGx5IGNvbGxlY3RlZCBmcm9tIHRoZSBmb2xsb3dpbmcgSG9tZSBBc3Npc3RhbnQgQ29tbXVuaXR5IEZvcnVtIGd1aWRlLlxuICogTm90IGFsbCBoYXZlIGJlZW4gdGVzdGVkLCBpZiBhbnkgZG8gbm90IHdvcmsgcGxlYXNlIGxldCBtZSBrbm93IVxuICogaHR0cHM6Ly9jb21tdW5pdHkuaG9tZS1hc3Npc3RhbnQuaW8vdC9hbmRyb2lkLXR2LXJlbW90ZS1hcHAtbGlua3MtZGVlcC1saW5raW5nLWd1aWRlLzU2NzkyMVxuICovXG5leHBvcnRzLmRlZmF1bHRTb3VyY2VzID0ge1xuICAgIGFwcGxldHY6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly90di5hcHBsZS5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkFQUExFVFYsXG4gICAgfSxcbiAgICBjcnVuY2h5cm9sbDoge1xuICAgICAgICBzb3VyY2U6ICdjcnVuY2h5cm9sbDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuQ1JVTkNIWVJPTEwsXG4gICAgfSxcbiAgICBkaXNuZXk6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly93d3cuZGlzbmV5cGx1cy5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkRJU05FWSxcbiAgICB9LFxuICAgIGVtYnk6IHtcbiAgICAgICAgc291cmNlOiAnZW1ieWF0djovL3R2LmVtYnkuZW1ieWF0di9zdGFydGFwcCcsXG4gICAgICAgIGljb246ICdtZGk6ZW1ieScsXG4gICAgfSxcbiAgICBmb3hzcG9ydHM6IHtcbiAgICAgICAgc291cmNlOiAnZm94c3BvcnRzOi8vbGl2ZScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuRk9YU1BPUlRTLFxuICAgIH0sXG4gICAgaHVsdToge1xuICAgICAgICBzb3VyY2U6ICdodWx1Oi8vJyxcbiAgICAgICAgaWNvbjogJ21kaTpodWx1JyxcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3BsYXkubWF4LmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuTUFYLFxuICAgIH0sXG4gICAgbWxidHY6IHtcbiAgICAgICAgc291cmNlOiAnbWxiYXRiYXQ6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLk1MQlRWLFxuICAgIH0sXG4gICAgbmJhOiB7XG4gICAgICAgIHNvdXJjZTogJ2dhbWV0aW1lOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5OQkEsXG4gICAgfSxcbiAgICBuZXRmbGl4OiB7IHNvdXJjZTogJ25ldGZsaXg6Ly8nLCBpY29uOiAnbWRpOm5ldGZsaXgnIH0sXG4gICAgcGxleDoge1xuICAgICAgICBzb3VyY2U6ICdwbGV4Oi8vJyxcbiAgICAgICAgaWNvbjogJ21kaTpwbGV4JyxcbiAgICB9LFxuICAgIHByaW1ldmlkZW86IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9hcHAucHJpbWV2aWRlby5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlBSSU1FVklERU8sXG4gICAgfSxcbiAgICBwaWE6IHtcbiAgICAgICAgc291cmNlOiAncGlhdnBuOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5QSUEsXG4gICAgfSxcbiAgICBzcG90aWZ5OiB7IHNvdXJjZTogJ3Nwb3RpZnk6Ly8nLCBpY29uOiAnbWRpOnNwb3RpZnknIH0sXG4gICAgc3VyZnNoYXJrOiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vc3VyZnNoYXJrLmNvbS9sb2NhdGlvbnMtdWwnLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlNVUkZTSEFSSyxcbiAgICB9LFxuICAgIHZ1ZHU6IHtcbiAgICAgICAgc291cmNlOiAndnVkdWFwcDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuVlVEVSxcbiAgICB9LFxuICAgIHlvdXR1YmU6IHsgc291cmNlOiAndm5kLnlvdXR1YmU6Ly8nLCBpY29uOiAnbWRpOnlvdXR1YmUnIH0sXG4gICAgeW91dHViZXR2OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vdHYueW91dHViZS5jb20nLFxuICAgICAgICBpY29uOiAnbWRpOnlvdXR1YmUtdHYnLFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zdmdcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN2ZyA9IHZvaWQgMDtcbnZhciBzdmc7XG4oZnVuY3Rpb24gKHN2Zykge1xuICAgIHN2Z1tcIkFQUExFVFZcIl0gPSBcIk0gNi44MjAzMTIgOC4yNDYwOTQgQyA3LjE3OTY4OCA3LjgyNDIxOSA3LjM5ODQzOCA3LjI3MzQzOCA3LjM5ODQzOCA2LjY3NTc4MSBDIDcuMzk4NDM4IDYuNjEzMjgxIDcuMzk4NDM4IDYuNTUwNzgxIDcuMzk0NTMxIDYuNDkyMTg4IEwgNy4zOTQ1MzEgNi41IEMgNi43NDYwOTQgNi41NjY0MDYgNi4xODM1OTQgNi44NzEwOTQgNS43ODUxNTYgNy4zMjQyMTkgTCA1Ljc4MTI1IDcuMzI4MTI1IEMgNS40MTc5NjkgNy43MjY1NjIgNS4xOTUzMTIgOC4yNjE3MTkgNS4xOTUzMTIgOC44NTE1NjIgQyA1LjE5NTMxMiA4LjkxMDE1NiA1LjE5OTIxOSA4Ljk2ODc1IDUuMjAzMTI1IDkuMDIzNDM4IEwgNS4yMDMxMjUgOS4wMTU2MjUgQyA1LjIwNzAzMSA5LjAxNTYyNSA1LjIxNDg0NCA5LjAxNTYyNSA1LjIyMjY1NiA5LjAxNTYyNSBDIDUuODY3MTg4IDkuMDE1NjI1IDYuNDQ1MzEyIDguNzE4NzUgNi44MjAzMTIgOC4yNSBaIE0gOC4xOTUzMTIgMTIuMzA0Njg4IEMgOC4yMDMxMjUgMTMuMjkyOTY5IDguNzk2ODc1IDE0LjE0MDYyNSA5LjY0ODQzOCAxNC41MTE3MTkgTCA5LjY2NDA2MiAxNC41MTk1MzEgQyA5LjQ2ODc1IDE1LjEwOTM3NSA5LjIxNDg0NCAxNS42MjUgOC44OTQ1MzEgMTYuMDkzNzUgTCA4LjkwNjI1IDE2LjA3MDMxMiBDIDguNDQ5MjE5IDE2LjczNDM3NSA3Ljk4MDQ2OSAxNy4zOTg0MzggNy4yMzA0NjkgMTcuNDE0MDYyIEMgNi41IDE3LjQyOTY4OCA2LjI2OTUzMSAxNi45ODA0NjkgNS40MjU3ODEgMTYuOTgwNDY5IEMgNC41ODk4NDQgMTYuOTgwNDY5IDQuMzI4MTI1IDE3LjM5ODQzOCAzLjYzMjgxMiAxNy40Mjk2ODggQyAyLjkyNTc4MSAxNy40NTMxMjUgMi4zNzUgMTYuNzAzMTI1IDEuOTE0MDYyIDE2LjAzOTA2MiBDIDEuMjI2NTYyIDE1LjEwOTM3NSAwLjgxMjUgMTMuOTQxNDA2IDAuODEyNSAxMi42NzE4NzUgQyAwLjgxMjUgMTEuOTAyMzQ0IDAuOTY0ODQ0IDExLjE2Nzk2OSAxLjI0MjE4OCAxMC41IEwgMS4yMjY1NjIgMTAuNTM1MTU2IEMgMS42Nzk2ODggOS43MzQzNzUgMi41MTk1MzEgOS4xOTUzMTIgMy40ODQzNzUgOS4xNzE4NzUgTCAzLjQ4ODI4MSA5LjE3MTg3NSBDIDQuMTkxNDA2IDkuMTU2MjUgNC44NjMyODEgOS42NDg0MzggNS4yOTY4NzUgOS42NDg0MzggQyA1LjcyNjU2MiA5LjY0ODQzOCA2LjUzNTE1NiA5LjA2MjUgNy4zODY3MTkgOS4xNDg0MzggQyA4LjIxMDkzOCA5LjE3OTY4OCA4LjkzMzU5NCA5LjU5Mzc1IDkuMzc4OTA2IDEwLjIxODc1IEwgOS4zODY3MTkgMTAuMjI2NTYyIEMgOC42NzU3ODEgMTAuNjY0MDYyIDguMjEwOTM4IDExLjQyOTY4OCA4LjE5NTMxMiAxMi4zMDQ2ODggWiBNIDE1LjAxOTUzMSAxNy4zMDQ2ODggQyAxNC41ODk4NDQgMTcuNDI5Njg4IDE0LjA5NzY1NiAxNy41IDEzLjU4NTkzOCAxNy41IEMgMTMuNTgyMDMxIDE3LjUgMTMuNTc0MjE5IDE3LjUgMTMuNTY2NDA2IDE3LjUgQyAxMi40MTc5NjkgMTcuNSAxMS44NDc2NTYgMTYuODUxNTYyIDExLjg0NzY1NiAxNS41NDY4NzUgTCAxMS44NDc2NTYgOS43OTY4NzUgTCAxMC44NTE1NjIgOS43OTY4NzUgTCAxMC44NTE1NjIgOC43NTM5MDYgTCAxMS44OTg0MzggOC43NTM5MDYgTCAxMS44OTg0MzggNy4zOTg0MzggTCAxMy4yODEyNSA2LjgzMjAzMSBMIDEzLjI4MTI1IDguNzYxNzE5IEwgMTQuODc4OTA2IDguNzYxNzE5IEwgMTQuODc4OTA2IDkuODA0Njg4IEwgMTMuMjg5MDYyIDkuODA0Njg4IEwgMTMuMjg5MDYyIDE1LjIzODI4MSBDIDEzLjI4NTE1NiAxNS4yNzczNDQgMTMuMjg1MTU2IDE1LjMyMDMxMiAxMy4yODUxNTYgMTUuMzY3MTg4IEMgMTMuMjg1MTU2IDE1LjY0MDYyNSAxMy4zNTkzNzUgMTUuODk4NDM4IDEzLjQ5MjE4OCAxNi4xMTcxODggTCAxMy40OTIxODggMTYuMTA5Mzc1IEMgMTMuNjQ0NTMxIDE2LjI2NTYyNSAxMy44NTU0NjkgMTYuMzYzMjgxIDE0LjA4OTg0NCAxNi4zNjMyODEgQyAxNC4xMjg5MDYgMTYuMzYzMjgxIDE0LjE2MDE1NiAxNi4zNTkzNzUgMTQuMTk1MzEyIDE2LjM1NTQ2OSBMIDE0LjE5MTQwNiAxNi4zNTU0NjkgQyAxNC40OTIxODggMTYuMzQzNzUgMTQuNzc3MzQ0IDE2LjMwNDY4OCAxNS4wNTA3ODEgMTYuMjQyMTg4IEwgMTUuMDE5NTMxIDE2LjI1IFogTSAyMC4wMTk1MzEgMTcuMzY3MTg4IEwgMTguMzI0MjE5IDE3LjM2NzE4OCBMIDE1LjE5NTMxMiA4Ljc1MzkwNiBMIDE2LjcyNjU2MiA4Ljc1MzkwNiBMIDE4LjYxNzE4OCAxNC4zNTU0NjkgQyAxOC42ODc1IDE0LjU3NDIxOSAxOC44NzEwOTQgMTUuMTk5MjE5IDE5LjE2NDA2MiAxNi4yNDIxODggTCAxOS40NDE0MDYgMTUuMzA4NTk0IEwgMTkuNzUgMTQuMzY3MTg4IEwgMjEuNzEwOTM4IDguNzQ2MDk0IEwgMjMuMjMwNDY5IDguNzQ2MDk0IFogTSAyMC4wMTk1MzEgMTcuMzY3MTg4IFwiO1xuICAgIHN2Z1tcIkNSVU5DSFlST0xMXCJdID0gXCJNIDIuOTMzNTk0IDEzLjQ2ODc1IEMgMi43MDcwMzEgMTAuNjAxNTYyIDMuNjU2MjUgNy43Njk1MzEgNS41NjY0MDYgNS42MjEwOTQgQyA3LjQ3NjU2MiAzLjQ3NjU2MiAxMC4xNzk2ODggMi4xOTkyMTkgMTMuMDUwNzgxIDIuMDg5ODQ0IEMgMTUuOTIxODc1IDEuOTg0Mzc1IDE4LjcxMDkzOCAzLjA1MDc4MSAyMC43NzczNDQgNS4wNDY4NzUgQyAyMi44NDc2NTYgNy4wNDI5NjkgMjQuMDA3ODEyIDkuNzkyOTY5IDI0IDEyLjY2Nzk2OSBMIDI0IDEyIEMgMjQgNS4zNzEwOTQgMTguNjI4OTA2IDAgMTIgMCBDIDUuMzcxMDk0IDAgMCA1LjM3MTA5NCAwIDEyIEMgMCAxOC42Mjg5MDYgNS4zNzEwOTQgMjQgMTIgMjQgTCAxMi44MDA3ODEgMjQgQyA3LjI2MTcxOSAyMy42MDkzNzUgMi45NjQ4NDQgMTkuMDE1NjI1IDIuOTMzNTk0IDEzLjQ2ODc1IFogTSAxOS4xOTkyMTkgMTQgQyAxNC44ODY3MTkgMTQuMDE1NjI1IDEzLjgxMjUgOC4wMTE3MTkgMTcuODY3MTg4IDYuNTMxMjUgQyAxNi42Nzk2ODggNS44OTg0MzggMTUuMzQ3NjU2IDUuNTc0MjE5IDE0IDUuNjAxNTYyIEMgMTAuNjAxNTYyIDUuNjAxNTYyIDcuNTM5MDYyIDcuNjQ4NDM4IDYuMjM4MjgxIDEwLjc4NTE1NiBDIDQuOTM3NSAxMy45MjU3ODEgNS42NTYyNSAxNy41MzkwNjIgOC4wNTg1OTQgMTkuOTQxNDA2IEMgMTAuNDYwOTM4IDIyLjM0Mzc1IDE0LjA3NDIxOSAyMy4wNjI1IDE3LjIxNDg0NCAyMS43NjE3MTkgQyAyMC4zNTE1NjIgMjAuNDYwOTM4IDIyLjM5ODQzOCAxNy4zOTg0MzggMjIuMzk4NDM4IDE0IEMgMjIuNDIxODc1IDEzLjQ2NDg0NCAyMi4zNzg5MDYgMTIuOTI1NzgxIDIyLjI2NTYyNSAxMi4zOTg0MzggQyAyMS42MDkzNzUgMTMuNDQ5MjE5IDIwLjQzNzUgMTQuMDYyNSAxOS4xOTkyMTkgMTQgWiBNIDE5LjE5OTIxOSAxNCBcIjtcbiAgICBzdmdbXCJESVNORVlcIl0gPSBcIk0gMjIuMTUyMzQ0IDkuMDg1OTM4IEMgMTkuMzM1OTM4IDUuMTE3MTg4IDEzLjYwMTU2MiAyLjg5MDYyNSAxMC40Mzc1IDIuMzYzMjgxIEMgNi45NDE0MDYgMS43ODEyNSA0LjgxMjUgMi4wMDM5MDYgMy4wMzkwNjIgMi4zMjgxMjUgQyAyLjM4MjgxMiAyLjQ0OTIxOSAwLjM5MDYyNSAyLjgxNjQwNiAwLjA3ODEyNSA0LjMyNDIxOSBDIC0wLjE5OTIxOSA1LjY4MzU5NCAxLjEzNjcxOSA2LjY1MjM0NCAxLjQwNjI1IDYuODMyMDMxIEMgMS45NDE0MDYgNy4xODc1IDIuNjYwMTU2IDcuMDQyOTY5IDMuMDE5NTMxIDYuNTExNzE5IEMgMy4zNzg5MDYgNS45ODA0NjkgMy4yNDIxODggNS4yNTM5MDYgMi43MTA5MzggNC44OTA2MjUgQyAyLjY4NzUgNC44NzUgMi42NjQwNjIgNC44NTU0NjkgMi42NDA2MjUgNC44MzU5MzggQyAyLjgyNDIxOSA0Ljc3MzQzOCAzLjA4OTg0NCA0LjY5OTIxOSAzLjQ2MDkzOCA0LjYyODkwNiBDIDQuOTIxODc1IDQuMzU5Mzc1IDYuNzUzOTA2IDQuMTIxMDk0IDEwLjA1NDY4OCA0LjY3MTg3NSBDIDEyLjcyNjU2MiA1LjExNzE4OCAxNy44NTkzNzUgNy4wNzgxMjUgMjAuMjQ2MDk0IDEwLjQzNzUgQyAyMS4yNzM0MzggMTEuODgyODEyIDIxLjY1MjM0NCAxMy40MjU3ODEgMjEuMzc4OTA2IDE1LjAxOTUzMSBDIDIxLjExMzI4MSAxNi41NTg1OTQgMjAuNDM3NSAxNy42MDE1NjIgMTkuMzEyNSAxOC4yMTQ4NDQgQyAxNy4yODUxNTYgMTkuMzE2NDA2IDE0LjA3NDIxOSAxOC44NDM3NSAxMS43MDcwMzEgMTguMTk1MzEyIEwgMTEuNzA3MDMxIDEzLjE5NTMxMiBDIDEyLjQ3NjU2MiAxMy4xOTUzMTIgMTMuMTk5MjE5IDEzLjI2OTUzMSAxNC4xMjg5MDYgMTMuNDQxNDA2IEMgMTQuNzQyMTg4IDEzLjU1ODU5NCAxNS4xMDU0NjkgMTMuODgyODEyIDE1LjIyMjY1NiAxNC4wNzQyMTkgQyAxNS4xOTkyMTkgMTQuMDg1OTM4IDE1LjE3MTg3NSAxNC4wOTc2NTYgMTUuMTQwNjI1IDE0LjEwNTQ2OSBDIDE0LjUyNzM0NCAxNC4zMTI1IDE0LjE5NTMxMiAxNC45NzI2NTYgMTQuNDAyMzQ0IDE1LjU4NTkzOCBDIDE0LjYwNTQ2OSAxNi4xOTkyMTkgMTUuMjY1NjI1IDE2LjUzMTI1IDE1Ljg4MjgxMiAxNi4zMjgxMjUgQyAxNy4yMzQzNzUgMTUuODc1IDE3LjY1NjI1IDE0LjgzNTkzOCAxNy41OTc2NTYgMTQuMDA3ODEyIEMgMTcuNTA3ODEyIDEyLjY2MDE1NiAxNi4yMjY1NjIgMTEuNDUzMTI1IDE0LjU1NDY4OCAxMS4xNDA2MjUgQyAxMy40NzY1NjIgMTAuOTQxNDA2IDEyLjYyMTA5NCAxMC44NTU0NjkgMTEuNzA3MDMxIDEwLjg1NTQ2OSBMIDExLjcwNzAzMSA4Ljc4MTI1IEMgMTEuNzA3MDMxIDguMTM2NzE5IDExLjE4MzU5NCA3LjYxMzI4MSAxMC41MzkwNjIgNy42MTMyODEgQyA5Ljg5NDUzMSA3LjYxMzI4MSA5LjM2NzE4OCA4LjEzNjcxOSA5LjM2NzE4OCA4Ljc4MTI1IEwgOS4zNjcxODggMTAuOTU3MDMxIEMgNS4wODIwMzEgMTEuMjgxMjUgMy4wNjI1IDEyLjE3MTg3NSAyLjcyMjY1NiAxMy44NDc2NTYgQyAyLjIxNDg0NCAxNi4zNjMyODEgNi40NDUzMTIgMTguNjM2NzE5IDguMzI0MjE5IDE5LjUxMTcxOSBDIDguMzg2NzE5IDE5LjUzOTA2MiA4Ljc2OTUzMSAxOS42OTkyMTkgOS4zNjcxODggMTkuOTEwMTU2IEwgOS4zNjcxODggMjEuMDY2NDA2IEMgOS4zNjcxODggMjEuNzE0ODQ0IDkuODk0NTMxIDIyLjIzODI4MSAxMC41MzkwNjIgMjIuMjM4MjgxIEMgMTEuMTgzNTk0IDIyLjIzODI4MSAxMS43MDcwMzEgMjEuNzE0ODQ0IDExLjcwNzAzMSAyMS4wNjY0MDYgTCAxMS43MDcwMzEgMjAuNjEzMjgxIEMgMTMuMDI3MzQ0IDIwLjk0MTQwNiAxNC41OTM3NSAyMS4yMTQ4NDQgMTYuMTYwMTU2IDIxLjIxNDg0NCBDIDE3LjY1NjI1IDIxLjIxNDg0NCAxOS4xNTYyNSAyMC45NjQ4NDQgMjAuNDI5Njg4IDIwLjI3MzQzOCBDIDIyLjE5OTIxOSAxOS4zMDg1OTQgMjMuMjkyOTY5IDE3LjY3NTc4MSAyMy42ODM1OTQgMTUuNDE3OTY5IEMgMjQuMDY2NDA2IDEzLjE4NzUgMjMuNTU0Njg4IDExLjA1NDY4OCAyMi4xNTIzNDQgOS4wODU5MzggWiBNIDkuMjc3MzQ0IDE3LjM3NSBDIDcuMjI2NTYyIDE2LjQxNzk2OSA1LjIxNDg0NCAxNC45NjQ4NDQgNS4wMzEyNSAxNC4zMjQyMTkgQyA1LjE3OTY4OCAxNC4xNjc5NjkgNS45Njg3NSAxMy41ODIwMzEgOS4zNjcxODggMTMuMzA0Njg4IEwgOS4zNjcxODggMTcuNDEwMTU2IEMgOS4zMzk4NDQgMTcuMzk4NDM4IDkuMzA0Njg4IDE3LjM4NjcxOSA5LjI3NzM0NCAxNy4zNzUgWiBNIDkuMjc3MzQ0IDE3LjM3NSBcIjtcbiAgICBzdmdbXCJGT1hTUE9SVFNcIl0gPSBcIk0gMC4yMzA1IDE1LjEyNSBMIDAuMjMwNSA1IEwgNi4yMTQ4IDUgTCA2LjM5ODQgNy43Njk1IEwgMy4wNDY5IDcuNzY5NSBMIDMuMDQ2OSA5LjA4OTggTCA1Ljc3NzMgOS4wODk4IEwgNS43NzczIDExLjg1MTYgTCAzLjAyNzMgMTEuODUxNiBMIDMuMDI3MyAxNS4xMjUgTCAwLjIzMDUgMTUuMTI1IE0gMjMuMjgxMyAxNS4wOTM4IEwgMjAuMjg1MiA5LjgzOTggTCAyMy4wMDc4IDUgTCAyMC4wMTE3IDUgTCAxOC43Njk1IDcuMTc5NyBMIDE3LjU0NjkgNSBMIDE0LjQ0NTMgNSBMIDE3LjIxODggOS44NzUgTCAxNC4yODEzIDE1LjEwMTYgTCAxNy4yOTMgMTUuMDk3NyBMIDE4LjczMDUgMTIuNTM5MSBMIDIwLjE4MzYgMTUuMDkzOCBMIDIzLjI4MTMgMTUuMDkzOCBNIDExLjkxMDIgMTIuMDk3NyBMIDExLjkxMDIgOC4wNTA4IEMgMTEuOTEwMiA3LjU4OTggMTEuNTE1NiA3LjE3NTggMTEuMDcwMyA3LjE3NTggQyAxMC42Mjg5IDcuMTc1OCAxMC4yNjk1IDcuNTg5OCAxMC4yNjk1IDguMDUwOCBMIDEwLjI2OTUgMTIuMDgyIEMgMTAuMjY5NSAxMi41NDY5IDEwLjYyODkgMTIuOTE4IDExLjA3MDMgMTIuOTE4IEMgMTEuNTE1NiAxMi45MTggMTEuOTEwMiAxMi41NTg2IDExLjkxMDIgMTIuMDk3NyBaIE0gNi4zMjQyIDEwLjA3NDIgQyA2LjMyNDIgNy4zNTk0IDguNDQxNCA1LjE1MjMgMTEuMDU4NiA1LjE1MjMgQyAxMy42NzU4IDUuMTUyMyAxNS43OTY5IDcuMzU5NCAxNS43OTY5IDEwLjA3NDIgQyAxNS43OTY5IDEyLjc5MyAxMy42NzU4IDE0Ljk5NjEgMTEuMDU4NiAxNC45OTYxIEMgOC40NDE0IDE0Ljk5NjEgNi4zMjQyIDEyLjc5MyA2LjMyNDIgMTAuMDc0MiBaIE0gMCAxOS41MTk1IEwgMCAxOC45OTYxIEwgMC4yNjE3IDE4LjczNDQgTCAyLjM4NjcgMTguNzM0NCBMIDIuNDY0OCAxOC42NTYzIEwgMi40NjQ4IDE4LjEwMTYgTCAyLjQxMDIgMTguMDM5MSBMIDAuNDM3NSAxOC4wMzkxIEwgMCAxNy41OTM4IEwgMCAxNi4zMjAzIEwgMC41MDM5IDE1LjgwODYgTCAzLjM2MzMgMTUuODA4NiBMIDMuMzYzMyAxNi4zNzExIEwgMy4xNTYzIDE2LjU4NTkgTCAxLjA4MiAxNi41ODU5IEwgMS4wMDM5IDE2LjY2OCBMIDEuMDAzOSAxNy4yMDcgTCAxLjA2MjUgMTcuMjY1NiBMIDMuMDI3MyAxNy4yNjU2IEwgMy40NjQ4IDE3LjcxNDggTCAzLjQ2NDggMTkuMDAzOSBMIDIuOTYwOSAxOS41MTk1IEwgMCAxOS41MTk1IE0gNi40NjA5IDE3LjYwNTUgTCA2LjYwOTQgMTcuNDUzMSBMIDYuNjA5NCAxNi43NDIyIEwgNi40NjA5IDE2LjU5MzggTCA1LjA5MzggMTYuNTkzOCBMIDUuMDkzOCAxNy42MDU1IFogTSA0LjA4OTggMTUuODA4NiBMIDcuMDU0NyAxNS44MDg2IEwgNy42MTcyIDE2LjM3ODkgTCA3LjYxNzIgMTcuNzUzOSBMIDcuMDU0NyAxOC4zMjgxIEwgNS4wOTM4IDE4LjMyODEgTCA1LjA5MzggMTkuNTE5NSBMIDQuMDg5OCAxOS41MTk1IFogTSAxMC41MTU2IDE4LjY0ODQgTCAxMC43MjI3IDE4LjQ0MTQgTCAxMC43MjI3IDE2LjgyMDMgTCAxMC41MTU2IDE2LjYxMzMgTCA5LjM0NzcgMTYuNjEzMyBMIDkuMTQwNiAxNi44MjAzIEwgOS4xNDA2IDE4LjQ0MTQgTCA5LjM0NzcgMTguNjQ4NCBaIE0gOC4xNDQ1IDE4Ljk0OTIgTCA4LjE0NDUgMTYuMzc4OSBMIDguNjk5MiAxNS44MDg2IEwgMTEuMTYwMiAxNS44MDg2IEwgMTEuNzIyNyAxNi4zNzg5IEwgMTEuNzIyNyAxOC45NDkyIEwgMTEuMTYwMiAxOS41MTk1IEwgOC42OTkyIDE5LjUxOTUgWiBNIDE0LjczNDQgMTcuMzk4NCBMIDE0Ljg3NSAxNy4yNTM5IEwgMTQuODc1IDE2LjcxMDkgTCAxNC43MzQ0IDE2LjU2NjQgTCAxMy4zODI4IDE2LjU2NjQgTCAxMy4zODI4IDE3LjM5ODQgWiBNIDEyLjM3ODkgMTUuODA4NiBMIDE1LjM3NSAxNS44MDg2IEwgMTUuODc4OSAxNi4zMjAzIEwgMTUuODc4OSAxNy41MDM5IEwgMTUuMzk4NCAxNy45OTYxIEwgMTYuMDMxMyAxOS41MTk1IEwgMTQuOTE0MSAxOS41MTk1IEwgMTQuNDQ1MyAxOC4xNzE5IEwgMTMuMzgyOCAxOC4xNzE5IEwgMTMuMzgyOCAxOS41MTk1IEwgMTIuMzc4OSAxOS41MTk1IFogTSAxNy4zNzg5IDE2LjY2OCBMIDE2LjIxODggMTYuNjY4IEwgMTYuMjE4OCAxNS44MDg2IEwgMTkuNTM5MSAxNS44MDg2IEwgMTkuNTM5MSAxNi42NjggTCAxOC4zODI4IDE2LjY2OCBMIDE4LjM4MjggMTkuNTE5NSBMIDE3LjM3ODkgMTkuNTE5NSBMIDE3LjM3ODkgMTYuNjY4IE0gMjAuMDgyIDE5LjYyMTEgTCAyMC4wODIgMTkuMDk3NyBMIDIwLjM0MzggMTguODM1OSBMIDIyLjQ2ODggMTguODM1OSBMIDIyLjU0NjkgMTguNzU3OCBMIDIyLjU0NjkgMTguMjAzMSBMIDIyLjQ5MjIgMTguMTQwNiBMIDIwLjUxOTUgMTguMTQwNiBMIDIwLjA4MiAxNy42OTUzIEwgMjAuMDgyIDE2LjQyMTkgTCAyMC41ODU5IDE1LjkxMDIgTCAyMy40NDUzIDE1LjkxMDIgTCAyMy40NDUzIDE2LjQ3MjcgTCAyMy4yMzgzIDE2LjY4NzUgTCAyMS4xNjggMTYuNjg3NSBMIDIxLjA4NTkgMTYuNzY5NSBMIDIxLjA4NTkgMTcuMzA4NiBMIDIxLjE0NDUgMTcuMzY3MiBMIDIzLjExMzMgMTcuMzY3MiBMIDIzLjU0NjkgMTcuODE2NCBMIDIzLjU0NjkgMTkuMTA1NSBMIDIzLjA0MyAxOS42MjExIEwgMjAuMDgyIDE5LjYyMTFcIjtcbiAgICBzdmdbXCJNQVhcIl0gPSBcIk0gMy43NDQzIDggQyAzLjA5NDkgOCAyLjQzODEgOC4yOTMyIDEuNTk1NyA4Ljk1NzQgTCAxLjU5NTcgOC4xNjcgTCAwIDguMTY3IEwgMCAxNC40NzU2IEwgMS42OTU5IDE0LjQ3NTYgTCAxLjY5NTkgMTAuNTUzMSBDIDIuNDM4MSA5Ljk1NTcgMi43NzU4IDkuNzY2NCAzLjA1NDEgOS43NjY0IEMgMy4zODQ0IDkuNzY2NCAzLjU5OTYgOS45NzQyIDMuNTk5NiAxMC41MDEyIEwgMy41OTk2IDE0LjQ3NTYgTCA1LjI5NTUgMTQuNDc1NiBMIDUuMjk1NSAxMC41NDIgQyA2LjAzNzcgOS45NTU3IDYuMzY4IDkuNzY2NCA2LjY1MzcgOS43NjY0IEMgNi45ODQgOS43NjY0IDcuMTk5MiA5Ljk3NDIgNy4xOTkyIDEwLjUwMTIgTCA3LjE5OTIgMTQuNDc1NiBMIDguODk1MSAxNC40NzU2IEwgOC44OTUxIDkuODkyNiBDIDguODk1MSA4LjQ3MTMgOC4xMDQ3IDggNy4zNDM5IDggQyA2LjY5NDUgOCA2LjAzNzcgOC4yNzQ2IDUuMTczIDguOTQ2MyBDIDQuODk0NyA4LjI0MTIgNC4yODk4IDggMy43NDQzIDggWiBNIDEyLjM0MjYgOCBDIDEwLjY1NzggOCA5LjI1ODggOS40ODA3IDkuMjU4OCAxMS4zMjEzIEMgOS4yNTg4IDEzLjE2MTkgMTAuNjU3OCAxNC42NDI2IDEyLjM0MjYgMTQuNjQyNiBDIDEzLjE3NzUgMTQuNjQyNiAxMy44OTc1IDE0LjMyNzEgMTQuNDUwNCAxMy42NDQzIEwgMTQuNDUwNCAxNC40NzU2IEwgMTYuMDY4NCAxNC40NzU2IEwgMTYuMDY4NCA4LjE2NyBMIDE0LjQ1MDQgOC4xNjcgTCAxNC40NTA0IDguOTk4MiBDIDEzLjg5NzUgOC4zMTU0IDEzLjE3NzUgOCAxMi4zNDI2IDggWiBNIDE2LjM2NTIgOC4xNjcgQyAxNy4wNjI5IDkuMjg0IDE3Ljg1NyAxMC4yODIyIDE4Ljc4MTEgMTEuMjgwNSBDIDE3Ljg1NyAxMi4zMTk1IDE3LjA2MjkgMTMuNDAzMSAxNi4zNjUyIDE0LjQ3NTYgTCAxOC40MSAxNC40NzU2IEMgMTguODk2MSAxMy42NzQgMTkuNDQxNiAxMi45NTA0IDIwLjA2ODcgMTIuMjY3NiBDIDIwLjY4NDggMTIuOTUwNCAyMS4yMDA2IDEzLjY3NCAyMS42ODMgMTQuNDc1NiBMIDIzLjc1IDE0LjQ3NTYgQyAyMy4wNDEyIDEzLjM2OTcgMjIuMjY5MyAxMi4zMTk1IDIxLjM0MTYgMTEuMjgwNSBDIDIyLjI1ODIgMTAuMjgyMiAyMy4wNDEyIDkuMjUwNiAyMy43NSA4LjE2NyBMIDIxLjcyMzggOC4xNjcgQyAyMS4yMTkxIDguOTY4NiAyMC42NzM2IDkuNjQwMiAyMC4wNjg3IDEwLjMwMDggQyAxOS40NDkgOS42NDAyIDE4LjkwNzIgOC45Njg2IDE4LjQxIDguMTY3IFogTSAxMi41OTg2IDkuNDYyMSBDIDEzLjYwOCA5LjQ2MjEgMTQuNDIwNyAxMC4yODk2IDE0LjQyMDcgMTEuMzIxMyBDIDE0LjQyMDcgMTIuMzUyOSAxMy42MDggMTMuMTgwNSAxMi41OTg2IDEzLjE4MDUgQyAxMS41OTMgMTMuMTgwNSAxMC43ODAzIDEyLjM1MjkgMTAuNzgwMyAxMS4zMjEzIEMgMTAuNzgwMyAxMC4yODk2IDExLjU5MyA5LjQ2MjEgMTIuNTk4NiA5LjQ2MjEgWiBNIDEyLjU5ODYgOS44ODE0IEMgMTEuODI2OCA5Ljg4MTQgMTEuMTk5NiAxMC41MjM0IDExLjE5OTYgMTEuMzIxMyBDIDExLjE5OTYgMTIuMTE5MSAxMS44MjY4IDEyLjc2MTEgMTIuNTk4NiAxMi43NjExIEMgMTMuMzcwNSAxMi43NjExIDEzLjk5NzcgMTIuMTE5MSAxMy45OTc3IDExLjMyMTMgQyAxMy45OTc3IDEwLjUyMzQgMTMuMzcwNSA5Ljg4MTQgMTIuNTk4NiA5Ljg4MTQgWiBNIDEyLjU5ODYgOS44ODE0XCI7XG4gICAgc3ZnW1wiTUxCVFZcIl0gPSBcIk0gMjMuMjUzOSA3LjAwMzkgQyAyMy4yNjU2IDYuMjkzIDIyLjY5NTMgNS43MTA5IDIxLjk4ODMgNS43MDMxIEMgMjEuOTgwNSA1LjcwMzEgMjEuOTcyNyA1LjcwMzEgMjEuOTY0OCA1LjcwMzEgTCAxNi4zODI4IDUuNzAzMSBMIDE5LjU4NTkgMTEuMDYyNSBMIDE5Ljg3ODkgMTEuMTAxNiBMIDIwLjA2NjQgMTEuMzQzOCBMIDIwLjA2NjQgMTEuNTc0MiBMIDIwLjI2OTUgMTEuNjE3MiBMIDIwLjQ1NyAxMS44NzExIEwgMjAuNDU3IDEyLjA4OTggTCAyMC42NjQxIDEyLjEyODkgTCAyMC44NzUgMTIuMzU5NCBMIDIwLjg3NSAxMi44NjcyIEMgMjEuMTI4OSAxMy4wOTc3IDIxLjQxMDIgMTMuMjg1MiAyMS43MTg4IDEzLjQyOTcgQyAyMiAxMy41MzkxIDIyLjAzMTMgMTMuOTkyMiAyMi4yMDMxIDE0LjIzNDQgQyAyMi40MTQxIDE0LjU4NTkgMjIuNzA3IDE0LjcyNjYgMjIuNjQ0NSAxNC45MjU4IEMgMjIuNTAzOSAxNS40NDkyIDIxLjk2NDggMTYuMzM5OCAyMS40NjQ4IDE2LjM3ODkgTCAxOS40ODA1IDE2LjM3ODkgTCAxOS40ODA1IDE3LjIzMDUgTCAyMS45NjQ4IDE3LjIzMDUgQyAyMi42ODM2IDE3LjIyNjYgMjMuMjYxNyAxNi42NDQ1IDIzLjI1NzggMTUuOTI1OCBMIDIzLjI1NzggNy4wMDM5IE0gOS42MDE2IDE2LjM5NDUgTCA4LjY0NDUgMTYuMzk0NSBDIDguNjQ0NSAxMy45OTIyIDkuNDUzMSAxMi42NjQxIDEwLjQyNTggMTIuMzk4NCBDIDEwLjU1ODYgMTIuMzc1IDEwLjQ5MjIgMTEuNzE4OCAxMC4zMjQyIDExLjUxOTUgTCA5Ljc2NTYgMTEuNTE5NSBDIDkuNjc1OCAxMS41MTk1IDkuNzI2NiAxMS4zNDc3IDkuNzI2NiAxMS4zNDc3IEwgMTAuMTc5NyAxMC4zNzg5IEwgMTAuMTIxMSAxMC4xMDk0IEwgOC40NDE0IDEwLjEwOTQgTCA5LjgyMDMgOS4xNDQ1IEMgOS44ODI4IDYuNTkzOCAxMi40OTYxIDYuMzk0NSAxNC4wNjY0IDcuNDU3IEMgMTUuMDAzOSA4LjA3ODEgMTUuMDc0MiA5LjMwODYgMTUuMDAzOSAxMC4xNTYzIEMgMTQuOTkyMiAxMC4yMTA5IDE0Ljc1NzggMTAuMTc1OCAxNC43NTc4IDEwLjE3NTggQyAxNC43NTc4IDEwLjE3NTggMTQuNjAxNiAxMS4xMTMzIDE1LjAxNTYgMTEuMTEzMyBMIDE2Ljg1MTYgMTEuMTEzMyBDIDE3LjU5NzcgMTEuMDgyIDE4LjMyMDMgMTEuNTg5OCAxOC4zMjAzIDExLjU4OTggTCAxOC40OTYxIDEwLjk0NTMgTCAxNC40NzY2IDUuNzAzMSBMIDEuOTk2MSA1LjcwMzEgQyAxLjY1MjMgNS42OTkyIDEuMzIwMyA1LjgzNTkgMS4wNzQyIDYuMDc4MSBDIDAuODMyIDYuMzI0MiAwLjY5NTMgNi42NTYzIDAuNjk5MiA3LjAwMzkgTCAwLjY5OTIgMTUuOTI5NyBDIDAuNjk1MyAxNi4yNzM0IDAuODI4MSAxNi42MDk0IDEuMDc0MiAxNi44NTE2IEMgMS4zMjAzIDE3LjA5NzcgMS42NTIzIDE3LjIzNDQgMS45OTYxIDE3LjIzNDQgTCAxMC4wOTc3IDE3LjIzNDQgQyA5LjkwMjMgMTYuODk0NSA5LjY3NTggMTYuNTA3OCA5LjYwNTUgMTYuMzk0NSBNIDIuNSAxNC41IEMgMi41IDE0LjAwNzggMi44OTQ1IDEzLjYwOTQgMy4zODY3IDEzLjYwOTQgQyAzLjg3NSAxMy42MDk0IDQuMjczNCAxNC4wMDc4IDQuMjczNCAxNC41IEMgNC4yNzM0IDE0Ljk4ODMgMy44NzUgMTUuMzg2NyAzLjM4NjcgMTUuMzg2NyBMIDMuMzc4OSAxNS4zODY3IEMgMi44OTQ1IDE1LjM4NjcgMi41IDE0Ljk5NjEgMi41IDE0LjUxMTcgQyAyLjUgMTQuNTA3OCAyLjUgMTQuNTAzOSAyLjUgMTQuNVwiO1xuICAgIHN2Z1tcIk5CQVwiXSA9IFwiTSA3Ljg1NTUgMjEuMTYwMiBDIDcuNTU0NyAyMC44OTA2IDcuNzUzOSAyMC43NzM0IDcuNzM4MyAyMC42NTYzIEMgNy41MzkxIDE5LjgyMDMgNi44NjcyIDE5LjMyMDMgNy4yMTg4IDE5LjA1NDcgQyA3LjE0ODQgMTguODQzOCA3LjA2NjQgMTguNjM2NyA2Ljk2ODggMTguNDMzNiBDIDUuOTMzNiAxNy44NDc3IDUuMDYyNSAxNi44Nzg5IDQuOTE0MSAxNi43NDYxIEMgNC43NjE3IDE2LjYxMzMgNC40Mjk3IDE2LjM0MzggNC4zNjMzIDE2LjE5NTMgQyA0LjI5NjkgMTYuMDQzIDIuOTA2MyAxNC4yMzgzIDIuNjI1IDEzLjYyMTEgTCAyLjE0MDYgMTMuNTU0NyBDIDEuOTIxOSAxMi42MzY3IDEuMTcxOSAxMS44NjcyIDEuMTUyMyAxMC45NjQ4IEMgMS4xNzU4IDEwLjU0MyAxLjI1IDEwLjEyODkgMS4zNzExIDkuNzI2NiBDIDEuNDY4OCA5LjU3ODEgMS41ODU5IDkuNDQxNCAxLjcyMjcgOS4zMjQyIEwgMS43MjI3IDkuMDc0MiBDIDAuNjUyMyA5LjEwOTQgMC45NTMxIDguOTkyMiAwLjc2OTUgOC41NzQyIEMgMC41ODU5IDguMTU2MyAwLjczNDQgOC4yMjI3IDAuNzg1MiA4LjAyMzQgQyAwLjkzNzUgNy40Mzc1IDEuNDAyMyA2LjUxOTUgMS42MDU1IDYuMTAxNiBDIDEuODA0NyA1LjY4MzYgMS44NzExIDUuMzgyOCAxLjg3MTEgNS4zODI4IEMgMi42NzU4IDMuNzYxNyAyLjk3NjYgMy44Nzg5IDMuOTI1OCAzLjc3NzMgTCAzLjk3NjYgMy43MTA5IEMgNC45Mjk3IDMuNjc1OCA0Ljc4MTMgMy41OTM4IDQuOTE0MSAyLjY3NTggQyA0Ljc4MTMgMi43NDIyIDQuNzMwNSAyLjM5MDYgNC43MzA1IDIuMzkwNiBDIDQuNjQ0NSAxLjg3MTEgNC44Nzg5IDEuOTcyNyA0Ljk4MDUgMS45NTcgQyA0Ljk5NjEgMS4xMDE2IDUuMDk3NyAwLjgyMDMgNS43MTQ4IDAuNTg1OSBMIDIuNDkyMiAwLjU4NTkgQyAxLjQzNzUgMC41ODU5IDAuNTg1OSAxLjQzNzUgMC41ODU5IDIuNDg4MyBMIDAuNTg1OSAyMS41MDc4IEMgMC41ODU5IDIyLjU2MjUgMS40Mzc1IDIzLjQxNDEgMi40OTIyIDIzLjQxNDEgTCA4LjEwNTUgMjMuNDE0MSBDIDcuNDUzMSAyMy4wNjI1IDcuODM5OCAyMi40MTQxIDcuODU1NSAyMS4xNjAyIE0gMjEuNTA3OCAwLjU4NTkgTCA2LjI4NTIgMC41ODU5IEMgNi41MTU2IDAuNjQ4NCA2LjcxNDggMC43OTY5IDYuODM1OSAxLjAwMzkgQyA3LjA3MDMgMS4wMTk1IDcuMzU1NSAxLjU1NDcgNi45MTggMi4zMjQyIEMgNy4xMjExIDIuNDU3IDYuOTY4OCAyLjY0MDYgNi44MjAzIDIuODU5NCBDIDYuNjY4IDMuMDc0MiA2LjczNDQgMy4wNTg2IDYuNjE3MiAzLjA0MyBDIDYuNDUzMSAzLjM5NDUgNi4yNSAzLjcyNjYgNi4xMDE2IDMuNzQyMiBDIDYuMDM1MiAzLjgyMDMgNi4wMjczIDMuOTI5NyA2LjA4MiA0LjAxMTcgQyA2LjMwODYgNC4xMDE2IDYuNTE1NiA0LjIyNjYgNi43MDMxIDQuMzc4OSBMIDYuNzAzMSA0LjQ2MDkgQyA2Ljg2NzIgNC41NjI1IDYuOTUzMSA0LjY0NDUgNy4xMzY3IDQuNzQ2MSBDIDcuNTg1OSA1LjAzMTMgOC4xNTYzIDUuNTQ2OSA4LjA4OTggNy4zMjAzIEMgOC4yMjI3IDcuNzAzMSA4LjI3MzQgOC40NTcgOC4zOTA2IDguNzA3IEMgOC41MDc4IDguOTU3IDguNzkzIDkuNDkyMiA4Ljg1OTQgOS45MjU4IEMgOC44NTk0IDkuOTI1OCA4LjkyNTggMTAuNTc4MSA5LjAwNzggMTAuNjY0MSBMIDkuMDU4NiAxMC42NjQxIEMgOS40NDE0IDEwLjc0NjEgOS4zNzUgMTAuNzk2OSA5LjQxMDIgMTAuODYzMyBMIDkuNTA3OCAxMC45NDUzIEMgOS42MDk0IDEwLjk5NjEgOS43NzczIDExLjA0NjkgOS43NzczIDExLjIzMDUgTCA5Ljg1OTQgMTEuMzYzMyBDIDkuOTEwMiAxMS40NDUzIDkuOTU3IDExLjUyNzMgOS45OTYxIDExLjYxNzIgQyAxMC4xMjg5IDExLjk5MjIgMTAuMTI4OSAxMi40MDYzIDkuOTk2MSAxMi43ODUyIEwgOS45OTYxIDEyLjgzNTkgQyA5Ljg0NzcgMTMuMjAzMSA5LjU3NDIgMTMuNTAzOSA5LjIyNjYgMTMuNjg3NSBMIDkuMTkxNCAxMy42ODc1IEwgOS4xNDA2IDEzLjcyMjcgQyA4LjkxOCAxMy44MjgxIDguNjcxOSAxMy44ODY3IDguNDIxOSAxMy44ODY3IEMgNy40ODgzIDEzLjc2NTYgNi44MzIgMTIuOTA2MyA2Ljk1NyAxMS45NzI3IEMgNy4wMzkxIDExLjM1OTQgNy40NDUzIDEwLjgzOTggOC4wMjM0IDEwLjYxMzMgQyA3LjgyMDMgMTAuMTI4OSA3LjQyMTkgOS4zNDM4IDcuMzA0NyA5LjA5MzggQyA3LjE4NzUgOC44Mzk4IDYuOTAyMyA3LjIxODggNi44NTE2IDYuOTAyMyBDIDYuODAwOCA2LjU4NTkgNi4xMTcyIDcuMzIwMyA2LjExNzIgNy4zNTU1IEMgNi4xMTcyIDcuMzg2NyA1LjU4MiA4LjY5MTQgNS41NjY0IDguNzU3OCBDIDUuNTU0NyA4LjgyODEgNS41NDY5IDguOTAyMyA1LjU0NjkgOC45NzY2IEMgNS41NDY5IDguOTc2NiA1LjgwMDggOS4wMDc4IDUuOTMzNiA5LjQyNTggQyA2LjA2NjQgOS44NDM4IDYuNSAxMS4zOTg0IDYuNSAxMS4zOTg0IEwgNi4zODI4IDExLjUxNTYgQyA2LjkxOCAxMy4zMDQ3IDYuNzM0NCAxNC4wNzQyIDYuOTY4OCAxNC42MDU1IEMgNy4yMDMxIDE1LjE0MDYgNy4zNTU1IDE1LjI0MjIgNy42MDU1IDE1Ljg3ODkgQyA3Ljg1NTUgMTYuNTExNyA3Ljk4ODMgMTguMTE3MiA4LjA3NDIgMTguMTgzNiBDIDguMzU1NSAxOC41NTA4IDguNTIzNCAxOC44MzU5IDguNTIzNCAxOS4wMzUyIEMgOC41MjM0IDE5LjIzODMgOC4yNzM0IDE5Ljg1NTUgOC4zNzUgMjAuMjIyNyBDIDguNDcyNyAyMC41ODk4IDguNDU3IDIwLjkwNjMgOC41NTg2IDIwLjk5MjIgQyA4LjY1NjMgMjEuMDc0MiA4LjY0MDYgMjEuMTc1OCA4LjYwNTUgMjEuMjQyMiBDIDguNTg5OCAyMS4yNzM0IDguNTc4MSAyMS4zMDg2IDguNTc0MiAyMS4zNDM4IEMgOC43MjI3IDIxLjkxMDIgOS4yNDIyIDIyLjg2MzMgOC40MjE5IDIzLjM2MzMgTCA4LjM3NSAyMy4zOTg0IEwgMjEuNTQzIDIzLjM5ODQgQyAyMi41ODIgMjMuMzkwNiAyMy40MjE5IDIyLjU1MDggMjMuNDMzNiAyMS41MTE3IEwgMjMuNDMzNiAyLjQ5MjIgQyAyMy40MjE5IDEuNDMzNiAyMi41NjY0IDAuNTg1OSAyMS41MDc4IDAuNTg1OSBaIE0gMjEuNTA3OCAwLjU4NTkgTSAxNS43OTMgNS4xMTMzIEwgMTkuMjM4MyA1LjExMzMgTCAxOC41MzUyIDE2LjYyODkgTCAxNy43ODEzIDUuMTEzMyBMIDIxLjE0MDYgNS4xMTMzIEwgMTkuNjU2MyAxOC45MDIzIEwgMTcuMjQ2MSAxOC45MDIzIFogTSAxNS4zNDM4IDYuODM1OSBMIDEzLjg4NjcgNi44MzU5IEwgMTMuODg2NyAxOC44ODY3IEwgMTIuMDM1MiAxOC44ODY3IEwgMTIuMDM1MiA2LjgzNTkgTCAxMC42MTMzIDYuODM1OSBMIDEwLjYxMzMgNS4wOTc3IEwgMTUuMzQzOCA1LjA5NzcgWiBNIDMuNTQzIDIyLjIyNjYgTCAzLjU0MyAxOC43ODUyIEwgNC4yMTA5IDE4Ljc4NTIgQyA0LjU5NzcgMTguNzg1MiA0LjgyODEgMTguOTg0NCA0LjgyODEgMTkuNDcyNyBMIDQuODI4MSAxOS45ODgzIEMgNC44MjgxIDIwLjMwNDcgNC43MzA1IDIwLjQ1NyA0LjU5NzcgMjAuNTM5MSBDIDQuNzUzOSAyMC42NTYzIDQuODQzOCAyMC44NDM4IDQuODI4MSAyMS4wNDMgTCA0LjgyODEgMjEuNTQzIEMgNC44MjgxIDIyLjAxMTcgNC41NzgxIDIyLjIyNjYgNC4yMTA5IDIyLjIyNjYgWiBNIDQuMDExNyAyMC43MjI3IEwgNC4wMTE3IDIxLjc5MyBMIDQuMTk1MyAyMS43OTMgQyA0LjM0MzggMjEuNzkzIDQuMzk0NSAyMS43MTA5IDQuMzk0NSAyMS41NDMgTCA0LjM5NDUgMjAuOTU3IEMgNC4zOTQ1IDIwLjc5MyA0LjM0MzggMjAuNzIyNyA0LjE5NTMgMjAuNzIyNyBaIE0gNC4wMTE3IDE5LjIxODggTCA0LjAxMTcgMjAuMzU1NSBMIDQuMTc5NyAyMC4zNTU1IEMgNC4zNDM4IDIwLjM1NTUgNC4zNzg5IDIwLjMwNDcgNC4zNzg5IDIwLjEwNTUgTCA0LjM3ODkgMTkuNDM3NSBDIDQuMzc4OSAxOS4yNjk1IDQuMzI4MSAxOS4yMDMxIDQuMTc5NyAxOS4yMDMxIEwgNC4wMTE3IDE5LjIwMzEgWiBNIDUuOTMzNiAyMS41MjczIEwgNS41MTU2IDIxLjUyNzMgTCA1LjQ2NDggMjIuMjI2NiBMIDQuOTk2MSAyMi4yMjY2IEwgNS40MTQxIDE4Ljc4NTIgTCA2LjA2NjQgMTguNzg1MiBMIDYuNDY4OCAyMi4yMjY2IEwgNS45ODQ0IDIyLjIyNjYgWiBNIDUuNzE0OCAxOS4xNjggTCA1LjY5OTIgMTkuMTY4IEMgNS42NjQxIDE5LjU4NTkgNS42MTcyIDIwLjMwNDcgNS41OTc3IDIwLjUzOTEgTCA1LjU0NjkgMjEuMTQwNiBMIDUuODk4NCAyMS4xNDA2IEwgNS44NDc3IDIwLjUzOTEgQyA1LjgzMiAyMC4zMDQ3IDUuNzY1NiAxOS41ODU5IDUuNzE0OCAxOS4xNjggTSAyLjE4NzUgMjIuMjI2NiBMIDEuNzg5MSAyMi4yMjY2IEwgMS43ODkxIDE4Ljc4NTIgTCAyLjQyMTkgMTguNzg1MiBMIDIuOTQxNCAyMS42MDk0IEMgMi44OTA2IDIwLjk0MTQgMi44Mzk4IDIwLjEyMTEgMi44Mzk4IDE5LjQyMTkgTCAyLjgzOTggMTguNzg1MiBMIDMuMjQyMiAxOC43ODUyIEwgMy4yNDIyIDIyLjIyNjYgTCAyLjY1NjMgMjIuMjI2NiBMIDIuMTQwNiAxOS40NzI3IEMgMi4xNzE5IDIwLjEwNTUgMi4xODc1IDIwLjYyNSAyLjE4NzUgMjEuMTQwNiBaIE0gMi4xODc1IDIyLjIyNjZcIjtcbiAgICBzdmdbXCJQUklNRVZJREVPXCJdID0gXCJNIDEuMTYwMTU2IDIuNDUzMTI1IFogTSAxLjE2MDE1NiAyLjQ1MzEyNSBaIE0gMTAuMjQ2MDk0IDAuNDE0MDYyIEMgOS43OTI5NjkgMC40MTQwNjIgOS41MjM0MzggMC42MzY3MTkgOS40ODgyODEgMS4wNDI5NjkgQyA5LjQ2ODc1IDEuNDUzMTI1IDkuNzAzMTI1IDEuNjkxNDA2IDEwLjAyNzM0NCAxLjc1IEMgMTAuMTU2MjUgMS43NzczNDQgMTAuMjg1MTU2IDEuNzc3MzQ0IDEwLjQxNDA2MiAxLjc1IEMgMTAuNzEwOTM4IDEuNzEwOTM4IDEwLjkzMzU5NCAxLjQ2ODc1IDEwLjk1MzEyNSAxLjE3MTg3NSBDIDEwLjk4MDQ2OSAwLjgyNDIxOSAxMC44MjQyMTkgMC41NTQ2ODggMTAuNTE1NjI1IDAuNDUzMTI1IEMgMTAuNDI1NzgxIDAuNDI1NzgxIDEwLjMzOTg0NCAwLjQwNjI1IDEwLjI0NjA5NCAwLjQxNDA2MiBaIE0gMy40OTYwOTQgMi4zMjQyMTkgQyAzLjA0Njg3NSAyLjMxNjQwNiAyLjYzNjcxOSAyLjQ3MjY1NiAyLjI1MzkwNiAyLjc1NzgxMiBDIDIuMjE4NzUgMi43ODkwNjIgMi4xNzk2ODggMi44MTY0MDYgMi4xMjg5MDYgMi44NDM3NSBDIDIuMTE3MTg4IDIuODM1OTM4IDIuMTA5Mzc1IDIuODMyMDMxIDIuMTA5Mzc1IDIuODI0MjE5IEMgMi4wODk4NDQgMi43Njk1MzEgMi4wNzgxMjUgMi43MDcwMzEgMi4wNjI1IDIuNjU2MjUgQyAyLjAxNTYyNSAyLjUwNzgxMiAxLjk2MDkzOCAyLjQ2MDkzOCAxLjgwODU5NCAyLjQ2MDkzOCBDIDEuNjM2NzE5IDIuNDYwOTM4IDEuNDU3MDMxIDIuNDY0ODQ0IDEuMjg1MTU2IDIuNDYwOTM4IEMgMS4xNjAxNTYgMi40NTMxMjUgMS4wMzkwNjIgMi40NzI2NTYgMC45NDE0MDYgMi41NzQyMTkgQyAwLjk0MTQwNiA0LjU2NjQwNiAwLjk0OTIxOSA2LjU3MDMxMiAwLjk0OTIxOSA4LjU1NDY4OCBDIDEuMDIzNDM4IDguNjc1NzgxIDEuMTM2NzE5IDguNjk1MzEyIDEuMjczNDM4IDguNjk1MzEyIEMgMS40NzY1NjIgOC42OTE0MDYgMS42ODM1OTQgOC42OTUzMTIgMS44ODY3MTkgOC42OTUzMTIgQyAyLjI0NjA5NCA4LjY5NTMxMiAyLjI0NjA5NCA4LjY5NTMxMiAyLjI0NjA5NCA4LjMzOTg0NCBMIDIuMjQ2MDk0IDYuNzE4NzUgQyAyLjI0NjA5NCA2LjY3OTY4OCAyLjIyNjU2MiA2LjYyODkwNiAyLjI2NTYyNSA2LjU5NzY1NiBDIDIuNTU0Njg4IDYuODIwMzEyIDIuODk4NDM4IDYuOTUzMTI1IDMuMjU3ODEyIDYuOTg4MjgxIEMgMy43NjU2MjUgNy4wNDI5NjkgNC4yMTQ4NDQgNi45MTQwNjIgNC42MDE1NjIgNi41NzgxMjUgQyA0Ljg3ODkwNiA2LjMyMDMxMiA1LjA4NTkzOCA1Ljk4ODI4MSA1LjE5NTMxMiA1LjYyNSBDIDUuMzQzNzUgNS4xNjAxNTYgNS4zNTU0NjkgNC42Nzk2ODggNS4zMTY0MDYgNC4yMDcwMzEgQyA1LjI5Njg3NSAzLjkxMDE1NiA1LjIxNDg0NCAzLjYxMzI4MSA1LjA5Mzc1IDMuMzUxNTYyIEMgNC44NTkzNzUgMi44NTkzNzUgNC41IDIuNSAzLjk1MzEyNSAyLjM3MTA5NCBDIDMuNzk2ODc1IDIuMzM1OTM4IDMuNjQ0NTMxIDIuMzI0MjE5IDMuNDk2MDk0IDIuMzI0MjE5IFogTSAxNC42NjAxNTYgMi4zMjQyMTkgQyAxNC41MTU2MjUgMi4zMjQyMTkgMTQuMzc1IDIuMzM1OTM4IDE0LjIzNDM3NSAyLjM3MTA5NCBDIDEzLjg2MzI4MSAyLjQzNzUgMTMuNTMxMjUgMi42MDE1NjIgMTMuMjE0ODQ0IDIuNzk2ODc1IEMgMTMuMTc5Njg4IDIuODE2NDA2IDEzLjE0MDYyNSAyLjg1OTM3NSAxMy4wODU5MzggMi44NTkzNzUgQyAxMy4wNTg1OTQgMi43Njk1MzEgMTMuMDM5MDYyIDIuNjk1MzEyIDEzLjAxMTcxOSAyLjYyMTA5NCBDIDEyLjk3NjU2MiAyLjUxOTUzMSAxMi45MTc5NjkgMi40NjA5MzggMTIuODA4NTk0IDIuNDYwOTM4IEwgMTIuMTAxNTYyIDIuNDYwOTM4IEMgMTIuMDMxMjUgMi40NjA5MzggMTEuOTY0ODQ0IDIuNSAxMS45Mzc1IDIuNTY2NDA2IEMgMTEuOTMzNTk0IDIuNjEzMjgxIDExLjkyNTc4MSAyLjY2MDE1NiAxMS45MjU3ODEgMi43MDcwMzEgTCAxMS45MjU3ODEgNi42NTYyNSBDIDExLjkyNTc4MSA2Ljg1MTU2MiAxMS45NzI2NTYgNi45MTQwNjIgMTIuMTc1NzgxIDYuOTE0MDYyIEwgMTIuOTM3NSA2LjkxNDA2MiBDIDEzLjE0ODQzOCA2LjkxNDA2MiAxMy4xOTUzMTIgNi44NjcxODggMTMuMTk1MzEyIDYuNjU2MjUgTCAxMy4xOTUzMTIgMy42MTMyODEgQyAxMy4xNzk2ODggMy41NzQyMTkgMTMuMjE0ODQ0IDMuNTE5NTMxIDEzLjI1MzkwNiAzLjUwMzkwNiBDIDEzLjU2NjQwNiAzLjM1NTQ2OSAxMy45MTc5NjkgMy4yODkwNjIgMTQuMjUzOTA2IDMuMzE2NDA2IEMgMTQuNDQ5MjE5IDMuMzI0MjE5IDE0LjYxMzI4MSAzLjQ1NzAzMSAxNC42NTIzNDQgMy42NTIzNDQgQyAxNC42Nzk2ODggMy43NSAxNC42ODc1IDMuODU1NDY5IDE0LjY4NzUgMy45NDkyMTkgTCAxNC42ODc1IDYuNjQ0NTMxIEMgMTQuNjg3NSA2Ljg1OTM3NSAxNC43MjY1NjIgNi45MDYyNSAxNC45NDE0MDYgNi45MDYyNSBMIDE1LjU0Mjk2OSA2LjkwNjI1IEMgMTUuNjI4OTA2IDYuOTA2MjUgMTUuNzE4NzUgNi45MDYyNSAxNS44MDQ2ODggNi45MDIzNDQgQyAxNS44ODY3MTkgNi45MDIzNDQgMTUuOTQ5MjE5IDYuODQ3NjU2IDE1Ljk0OTIxOSA2Ljc2NTYyNSBDIDE1Ljk2MDkzOCA2LjcxMDkzOCAxNS45NjA5MzggNi42NTYyNSAxNS45NjA5MzggNi42MDU0NjkgTCAxNS45NjA5MzggMy42MDU0NjkgQyAxNS45NTMxMjUgMy41NTg1OTQgMTUuOTgwNDY5IDMuNTExNzE5IDE2LjAyNzM0NCAzLjUgQyAxNi4zMzIwMzEgMy4zNTU0NjkgMTYuNjcxODc1IDMuMjg5MDYyIDE3LjAwNzgxMiAzLjMxNjQwNiBDIDE3LjE5MTQwNiAzLjMyNDIxOSAxNy4zNTE1NjIgMy40NTMxMjUgMTcuMzkwNjI1IDMuNjI1IEMgMTcuNDI1NzgxIDMuNzI2NTYyIDE3LjQzMzU5NCAzLjgyODEyNSAxNy40MjU3ODEgMy45Mzc1IEwgMTcuNDI1NzgxIDYuNTc4MTI1IEMgMTcuNDI1NzgxIDYuNjQ0NTMxIDE3LjQyNTc4MSA2LjcwNzAzMSAxNy40NDE0MDYgNi43NjU2MjUgQyAxNy40NTMxMjUgNi44MzIwMzEgMTcuNTA3ODEyIDYuODk0NTMxIDE3LjU3NDIxOSA2LjkwMjM0NCBDIDE3LjYyMTA5NCA2LjkwNjI1IDE3LjY2Nzk2OSA2LjkwNjI1IDE3LjcxNDg0NCA2LjkwNjI1IEwgMTguNDEwMTU2IDYuOTA2MjUgQyAxOC42Njc5NjkgNi45MDYyNSAxOC43MDMxMjUgNi44NzUgMTguNzAzMTI1IDYuNjE3MTg4IEwgMTguNzAzMTI1IDMuNjYwMTU2IEMgMTguNzAzMTI1IDMuNTkzNzUgMTguNzAzMTI1IDMuNTMxMjUgMTguNjk1MzEyIDMuNDcyNjU2IEMgMTguNjY3OTY5IDMuMTc1NzgxIDE4LjU4NTkzOCAyLjg5ODQzOCAxOC4zNzEwOTQgMi42NzU3ODEgQyAxOC4xNDg0MzggMi40Mzc1IDE3Ljg1MTU2MiAyLjM0Mzc1IDE3LjUyNzM0NCAyLjMzMjAzMSBDIDE3LjA3NDIxOSAyLjMwNDY4OCAxNi42Mjg5MDYgMi40MDYyNSAxNi4yMzA0NjkgMi42MTMyODEgQyAxNi4wNzgxMjUgMi42OTUzMTIgMTUuOTI1NzgxIDIuNzgxMjUgMTUuNzg1MTU2IDIuODcxMDk0IEMgMTUuNzc3MzQ0IDIuODU5Mzc1IDE1Ljc3MzQzOCAyLjg1OTM3NSAxNS43NzczNDQgMi44NTE1NjIgQyAxNS43NzM0MzggMi44NDM3NSAxNS43NTc4MTIgMi44MzIwMzEgMTUuNzQ2MDk0IDIuODA4NTk0IEMgMTUuNTk3NjU2IDIuNTg1OTM4IDE1LjM1NTQ2OSAyLjQyNTc4MSAxNS4wODU5MzggMi4zNzEwOTQgQyAxNC45NDE0MDYgMi4zMzU5MzggMTQuODAwNzgxIDIuMzI0MjE5IDE0LjY2MDE1NiAyLjMyNDIxOSBaIE0gMjEuODk0NTMxIDIuMzYzMjgxIEMgMjEuNzA3MDMxIDIuMzQzNzUgMjEuNTExNzE5IDIuMzUxNTYyIDIxLjMyMDMxMiAyLjM3MTA5NCBDIDIwLjQyMTg3NSAyLjQ4MDQ2OSAxOS44MzU5MzggMi45NzI2NTYgMTkuNTY2NDA2IDMuODM1OTM4IEMgMTkuMzc1IDQuNDIxODc1IDE5LjQwMjM0NCA1LjAxNTYyNSAxOS41NTA3ODEgNS42MTMyODEgQyAxOS43NTM5MDYgNi4zNjcxODggMjAuMjUzOTA2IDYuODIwMzEyIDIxLjAxNTYyNSA2Ljk4MDQ2OSBDIDIxLjQ0OTIxOSA3LjA3ODEyNSAyMS44ODI4MTIgNy4wNTQ2ODggMjIuMzIwMzEyIDYuOTg4MjgxIEMgMjIuNTUwNzgxIDYuOTQ5MjE5IDIyLjc3NzM0NCA2Ljg5NDUzMSAyMi45OTYwOTQgNi44MDQ2ODggQyAyMy4xMjUgNi43NTc4MTIgMjMuMTkxNDA2IDYuNjc5Njg4IDIzLjE4MzU5NCA2LjUzMTI1IEMgMjMuMTgzNTk0IDYuMzk0NTMxIDIzLjE4MzU5NCA2LjI1MzkwNiAyMy4xODM1OTQgNi4xMDkzNzUgQyAyMy4xODM1OTQgNS45MzM1OTQgMjMuMTE3MTg4IDUuODgyODEyIDIyLjk1MzEyNSA1LjkyMTg3NSBDIDIyLjc4NTE1NiA1Ljk2MDkzOCAyMi42Mjg5MDYgNS45OTYwOTQgMjIuNDYwOTM4IDYuMDMxMjUgQyAyMi4xMDkzNzUgNi4xMDU0NjkgMjEuNzQ2MDk0IDYuMTA1NDY5IDIxLjM4NjcxOSA2LjA0Mjk2OSBDIDIwLjkwMjM0NCA1Ljk0OTIxOSAyMC41OTM3NSA1LjUzMTI1IDIwLjYxNzE4OCA1LjAxNTYyNSBDIDIwLjY3MTg3NSA1LjAyMzQzOCAyMC43MjY1NjIgNS4wMzEyNSAyMC43ODEyNSA1LjA0Mjk2OSBDIDIxLjIwNzAzMSA1LjExNzE4OCAyMS42NDQ1MzEgNS4xMjUgMjIuMDc4MTI1IDUuMDU4NTk0IEMgMjIuMzI4MTI1IDUuMDIzNDM4IDIyLjU2MjUgNC45NDkyMTkgMjIuNzg1MTU2IDQuODI4MTI1IEMgMjMuMDQyOTY5IDQuNjc5Njg4IDIzLjIzMDQ2OSA0LjQ3NjU2MiAyMy4zMTI1IDQuMTk1MzEyIEMgMjMuNTA3ODEyIDMuNDcyNjU2IDIzLjIwMzEyNSAyLjc1IDIyLjQ1MzEyNSAyLjQ4MDQ2OSBDIDIyLjI3MzQzOCAyLjQyNTc4MSAyMi4wODIwMzEgMi4zODY3MTkgMjEuODk0NTMxIDIuMzYzMjgxIFogTSA4LjgyMDMxMiAyLjQxMDE1NiBDIDguNDQ5MjE5IDIuMzg2NzE5IDguMDg1OTM4IDIuNSA3Ljc4OTA2MiAyLjczMDQ2OSBDIDcuNjcxODc1IDIuODE2NDA2IDcuNTY2NDA2IDIuOTE3OTY5IDcuNDU3MDMxIDMuMDE5NTMxIEMgNy40Mzc1IDMuMDU0Njg4IDcuNDAyMzQ0IDMuMDc0MjE5IDcuMzYzMjgxIDMuMDg1OTM4IEMgNy4zMjgxMjUgMi45MzM1OTQgNy4yOTI5NjkgMi43ODkwNjIgNy4yNTM5MDYgMi42NDg0MzggQyA3LjIxNDg0NCAyLjUwNzgxMiA3LjE0NDUzMSAyLjQ1MzEyNSA2Ljk5NjA5NCAyLjQ1MzEyNSBMIDYuNDQ5MjE5IDIuNDUzMTI1IEMgNi4xODc1IDIuNDUzMTI1IDYuMTYwMTU2IDIuNDg0Mzc1IDYuMTYwMTU2IDIuNzUgTCA2LjE2MDE1NiA2LjYyNSBDIDYuMTYwMTU2IDYuNjY0MDYyIDYuMTYwMTU2IDYuNzEwOTM4IDYuMTY3OTY5IDYuNzU3ODEyIEMgNi4xNzU3ODEgNi44MzIwMzEgNi4yMjY1NjIgNi44OTQ1MzEgNi4zMDA3ODEgNi45MDIzNDQgQyA2LjM0Mzc1IDYuOTA2MjUgNi4zOTA2MjUgNi45MDYyNSA2LjQyOTY4OCA2LjkwNjI1IEwgNy4xNzE4NzUgNi45MDYyNSBDIDcuMjA3MDMxIDYuOTA2MjUgNy4yNTM5MDYgNi45MDYyNSA3LjI5Mjk2OSA2LjkwMjM0NCBDIDcuMzY3MTg4IDYuOTAyMzQ0IDcuNDI5Njg4IDYuODQ3NjU2IDcuNDI5Njg4IDYuNzczNDM4IEMgNy40Mzc1IDYuNzE4NzUgNy40Mzc1IDYuNjcxODc1IDcuNDM3NSA2LjYyNSBMIDcuNDM3NSAzLjg4MjgxMiBDIDcuNDM3NSAzLjgyNDIxOSA3LjQzNzUgMy43Njk1MzEgNy41MTU2MjUgMy43MzQzNzUgQyA3Ljg3NSAzLjYyMTA5NCA4LjI0NjA5NCAzLjU0Njg3NSA4LjYzMjgxMiAzLjU3ODEyNSBDIDguNzA3MDMxIDMuNTg1OTM4IDguNzg1MTU2IDMuNTg1OTM4IDguODU5Mzc1IDMuNTg1OTM4IEMgOC45NjA5MzggMy41NzQyMTkgOS4wMDM5MDYgMy41MzEyNSA5LjAyNzM0NCAzLjQyOTY4OCBDIDkuMDQyOTY5IDMuMzUxNTYyIDkuMDQyOTY5IDMuMjc3MzQ0IDkuMDM1MTU2IDMuMTk1MzEyIEMgOS4wMzUxNTYgMyA5LjA0Mjk2OSAyLjgwNDY4OCA5LjAzNTE1NiAyLjYwOTM3NSBDIDkuMDIzNDM4IDIuNDY0ODQ0IDguOTY4NzUgMi40MTc5NjkgOC44MjAzMTIgMi40MTAxNTYgWiBNIDkuNzc3MzQ0IDIuNDUzMTI1IEMgOS42NDQ1MzEgMi40NjA5MzggOS41ODk4NDQgMi41MTE3MTkgOS41ODIwMzEgMi42NDg0MzggTCA5LjU4MjAzMSA0LjY3MTg3NSBDIDkuNTgyMDMxIDUuMzIwMzEyIDkuNTgyMDMxIDUuOTY4NzUgOS41ODIwMzEgNi42MDU0NjkgQyA5LjU4MjAzMSA2LjY0NDUzMSA5LjU4MjAzMSA2LjY5MTQwNiA5LjU4MjAzMSA2LjczODI4MSBDIDkuNTg5ODQ0IDYuODIwMzEyIDkuNjU2MjUgNi44Nzg5MDYgOS43MzgyODEgNi44ODY3MTkgQyA5Ljc2NTYyNSA2Ljg5NDUzMSA5Ljc5Mjk2OSA2Ljg5NDUzMSA5LjgyMDMxMiA2Ljg5NDUzMSBMIDEwLjYxNzE4OCA2Ljg5NDUzMSBDIDEwLjY0ODQzOCA2Ljg5NDUzMSAxMC42NzU3ODEgNi44OTQ1MzEgMTAuNzEwOTM4IDYuODg2NzE5IEMgMTAuNzg1MTU2IDYuODc4OTA2IDEwLjgzOTg0NCA2LjgzMjAzMSAxMC44NDM3NSA2Ljc1NzgxMiBDIDEwLjg1MTU2MiA2LjY5MTQwNiAxMC44NTkzNzUgNi42Mjg5MDYgMTAuODU5Mzc1IDYuNTcwMzEyIEwgMTAuODU5Mzc1IDIuNzc3MzQ0IEMgMTAuODU5Mzc1IDIuNzIyNjU2IDEwLjg1OTM3NSAyLjY3NTc4MSAxMC44NTE1NjIgMi42Mjg5MDYgQyAxMC44Mzk4NDQgMi40OTIxODggMTAuNzk2ODc1IDIuNDUzMTI1IDEwLjY2Nzk2OSAyLjQ1MzEyNSBDIDEwLjM3MTA5NCAyLjQ0NTMxMiAxMC4wNzQyMTkgMi40NDUzMTIgOS43NzczNDQgMi40NTMxMjUgWiBNIDIxLjYzNjcxOSAzLjI0MjE4OCBDIDIxLjc0NjA5NCAzLjI1IDIxLjg0NzY1NiAzLjI2OTUzMSAyMS45NDE0MDYgMy4zMDg1OTQgQyAyMi4wODk4NDQgMy4zNzEwOTQgMjIuMTgzNTk0IDMuNTAzOTA2IDIyLjIwNzAzMSAzLjY2Nzk2OSBDIDIyLjIyNjU2MiAzLjc2MTcxOSAyMi4yMTg3NSAzLjg3MTA5NCAyMi4xODM1OTQgMy45NjQ4NDQgQyAyMi4xMTcxODggNC4xNjc5NjkgMjEuOTU3MDMxIDQuMjUzOTA2IDIxLjc1MzkwNiA0LjI5Njg3NSBDIDIxLjYzNjcxOSA0LjMyNDIxOSAyMS41MTE3MTkgNC4zMzU5MzggMjEuMzgyODEyIDQuMzI0MjE5IEMgMjEuMTYwMTU2IDQuMzI0MjE5IDIwLjkzNzUgNC4zMDg1OTQgMjAuNzE0ODQ0IDQuMjczNDM4IEMgMjAuNjI1IDQuMjYxNzE5IDIwLjYyNSA0LjI2MTcxOSAyMC42NDA2MjUgNC4xNjc5NjkgQyAyMC42NTIzNDQgNC4wMzEyNSAyMC42OTE0MDYgMy45MDIzNDQgMjAuNzQ2MDk0IDMuNzc3MzQ0IEMgMjAuOTE0MDYyIDMuMzU1NDY5IDIxLjI3MzQzOCAzLjIxNDg0NCAyMS42MzY3MTkgMy4yNDIxODggWiBNIDMuMDgyMDMxIDMuMjg5MDYyIEMgMy4xNjQwNjIgMy4yODkwNjIgMy4yNSAzLjI5Njg3NSAzLjMzMjAzMSAzLjMxNjQwNiBDIDMuNTc0MjE5IDMuMzUxNTYyIDMuNzc3MzQ0IDMuNTAzOTA2IDMuODcxMDk0IDMuNzIyNjU2IEMgMy45NjA5MzggMy45MTAxNTYgNC4wMTU2MjUgNC4xMDU0NjkgNC4wMTk1MzEgNC4zMDg1OTQgQyA0LjA1NDY4OCA0LjY3MTg3NSA0LjA1NDY4OCA1LjAzOTA2MiAzLjk1MzEyNSA1LjM4MjgxMiBDIDMuOTE0MDYyIDUuNTU4NTk0IDMuODI0MjE5IDUuNzE4NzUgMy42OTE0MDYgNS44Mzk4NDQgQyAzLjU0Mjk2OSA1Ljk2MDkzOCAzLjM1OTM3NSA2LjAzNTE1NiAzLjE3MTg3NSA2LjAzNTE1NiBDIDIuODc4OTA2IDYuMDU4NTk0IDIuNTg5ODQ0IDUuOTk2MDk0IDIuMzMyMDMxIDUuODU1NDY5IEMgMi4yNzM0MzggNS44MjgxMjUgMi4yMzA0NjkgNS43NjU2MjUgMi4yMzgyODEgNS42OTkyMTkgTCAyLjIzODI4MSA0LjY2Nzk2OSBDIDIuMjM4MjgxIDQuMzI0MjE5IDIuMjQ2MDk0IDMuOTg0Mzc1IDIuMjM4MjgxIDMuNjQwNjI1IEMgMi4yMzA0NjkgMy41NTg1OTQgMi4yNzczNDQgMy40OTIxODggMi4zNTE1NjIgMy40NjQ4NDQgQyAyLjU4OTg0NCAzLjM1MTU2MiAyLjgyNDIxOSAzLjI4OTA2MiAzLjA4MjAzMSAzLjI4OTA2MiBaIE0gNi41OTM3NSA4LjgzMjAzMSBDIDYuNTUwNzgxIDguODI0MjE5IDYuNTExNzE5IDguODMyMDMxIDYuNDY0ODQ0IDguODM5ODQ0IEMgNi4xMDU0NjkgOC44NjMyODEgNS44NDM3NSA5LjExMzI4MSA1LjgwODU5NCA5LjQ1MzEyNSBDIDUuNzc3MzQ0IDkuODc4OTA2IDUuOTcyNjU2IDEwLjE2Nzk2OSA2LjM0NzY1NiAxMC4yNjE3MTkgQyA2LjQxNzk2OSAxMC4yNjk1MzEgNi40ODQzNzUgMTAuMjgxMjUgNi41NTA3ODEgMTAuMjgxMjUgQyA3LjA0Mjk2OSAxMC4yOTY4NzUgNy40MTQwNjIgMTAuMDE5NTMxIDcuMzY3MTg4IDkuNDU3MDMxIEMgNy4zNTU0NjkgOS4yMDMxMjUgNy4xOTE0MDYgOC45ODA0NjkgNi45NTcwMzEgOC44OTA2MjUgQyA2LjgzNTkzOCA4Ljg0Mzc1IDYuNzE0ODQ0IDguODE2NDA2IDYuNTkzNzUgOC44MzIwMzEgWiBNIDExLjcwNzAzMSA4Ljg3MTA5NCBDIDExLjQ3MjY1NiA4Ljg3MTA5NCAxMS40MzM1OTQgOC45MTQwNjIgMTEuNDMzNTk0IDkuMTQ4NDM4IEwgMTEuNDMzNTk0IDExLjEyNSBDIDExLjQzMzU5NCAxMS4xNzE4NzUgMTEuNDQ1MzEyIDExLjIxNDg0NCAxMS40MTc5NjkgMTEuMjUzOTA2IEMgMTEuMzYzMjgxIDExLjI1MzkwNiAxMS4zMzIwMzEgMTEuMjE0ODQ0IDExLjI4OTA2MiAxMS4xODc1IEMgMTAuNjU2MjUgMTAuODE2NDA2IDkuOTg4MjgxIDEwLjc1IDkuMzEyNSAxMS4wNTg1OTQgQyA4LjgzOTg0NCAxMS4yODEyNSA4LjU1MDc4MSAxMS42Nzk2ODggOC4zNTkzNzUgMTIuMTUyMzQ0IEMgOC4xNzk2ODggMTIuNjA1NDY5IDguMTMyODEyIDEzLjA3ODEyNSA4LjE0NDUzMSAxMy41NjI1IEMgOC4xNDQ1MzEgMTQuMDE1NjI1IDguMjQ2MDk0IDE0LjQ2MDkzOCA4LjQ0OTIxOSAxNC44NjcxODggQyA4LjY4MzU5NCAxNS4zMTI1IDkuMDIzNDM4IDE1LjY1NjI1IDkuNTA3ODEyIDE1Ljc5Njg3NSBDIDEwLjE3NTc4MSAxNi4wMDc4MTIgMTAuNzk2ODc1IDE1LjkwNjI1IDExLjM3MTA5NCAxNS40ODA0NjkgQyAxMS40MTAxNTYgMTUuNDYwOTM4IDExLjQzMzU5NCAxNS40MTQwNjIgMTEuNDkyMTg4IDE1LjQwNjI1IEMgMTEuNTE5NTMxIDE1LjQ3MjY1NiAxMS41NDY4NzUgMTUuNTQ2ODc1IDExLjU1ODU5NCAxNS42MTMyODEgQyAxMS41ODIwMzEgMTUuNzE0ODQ0IDExLjY2Nzk2OSAxNS43ODUxNTYgMTEuNzY5NTMxIDE1Ljc4NTE1NiBMIDExLjkxNzk2OSAxNS43ODUxNTYgQyAxMi4xNDA2MjUgMTUuNzg1MTU2IDEyLjM1MTU2MiAxNS43ODkwNjIgMTIuNTY2NDA2IDE1Ljc4NTE1NiBDIDEyLjc0MjE4OCAxNS43ODUxNTYgMTIuNzg5MDYyIDE1LjczMDQ2OSAxMi43OTY4NzUgMTUuNTQ2ODc1IEwgMTIuNzk2ODc1IDkuMTA5Mzc1IEMgMTIuNzg5MDYyIDguOTE0MDYyIDEyLjc0MjE4OCA4Ljg3MTA5NCAxMi41NTg1OTQgOC44NzEwOTQgWiBNIDIxLjA1MDc4MSAxMC44NzEwOTQgQyAyMC44NTU0NjkgMTAuODYzMjgxIDIwLjY2MDE1NiAxMC44NzEwOTQgMjAuNDY0ODQ0IDEwLjkwMjM0NCBDIDE5LjY0MDYyNSAxMS4wMjM0MzggMTkuMDQ2ODc1IDExLjQ2NDg0NCAxOC43NTc4MTIgMTIuMjQ2MDk0IEMgMTguNDgwNDY5IDEyLjk5NjA5NCAxOC40ODQzNzUgMTMuODEyNSAxOC43NjE3MTkgMTQuNTYyNSBDIDE5LjAwMzkwNiAxNS4yMzgyODEgMTkuNSAxNS42Njc5NjkgMjAuMTk5MjE5IDE1Ljg0Mzc1IEMgMjAuNTcwMzEyIDE1LjkzNzUgMjAuOTY0ODQ0IDE1Ljk2MDkzOCAyMS4zNDc2NTYgMTUuOTA2MjUgQyAyMi42Mjg5MDYgMTUuNzUgMjMuMTY0MDYyIDE0Ljc3NzM0NCAyMy4yNSAxMy45MzM1OTQgQyAyMy4yNSAxMy45MzM1OTQgMjMuMjg1MTU2IDEzLjY4MzU5NCAyMy4yODUxNTYgMTMuNTYyNSBMIDIzLjI3NzM0NCAxMy4wNTg1OTQgQyAyMy4yNzczNDQgMTIuOTg0Mzc1IDIzLjI1NzgxMiAxMi44Mzk4NDQgMjMuMjU3ODEyIDEyLjgzNTkzOCBDIDIzLjI0NjA5NCAxMi43MTg3NSAyMy4yMjI2NTYgMTIuNjA1NDY5IDIzLjE5MTQwNiAxMi40ODgyODEgQyAyMi45Njg3NSAxMS42ODc1IDIyLjQ1MzEyNSAxMS4xNTIzNDQgMjEuNjMyODEyIDEwLjk0NTMxMiBDIDIxLjQzNzUgMTAuODk4NDM4IDIxLjI0NjA5NCAxMC44NzUgMjEuMDUwNzgxIDEwLjg3MTA5NCBaIE0gMTUuOTc2NTYyIDEwLjkyMTg3NSBDIDE0Ljk0OTIxOSAxMC45NDUzMTIgMTQuMTY0MDYyIDExLjQ2NDg0NCAxMy44NDc2NTYgMTIuNDg4MjgxIEMgMTMuNjMyODEyIDEzLjE3MTg3NSAxMy42NjAxNTYgMTMuODU5Mzc1IDEzLjg2NzE4OCAxNC41NDI5NjkgQyAxNC4wODU5MzggMTUuMjM4MjgxIDE0LjU3ODEyNSAxNS42NjQwNjIgMTUuMjczNDM4IDE1Ljg1MTU2MiBDIDE1LjU3MDMxMiAxNS45MjU3ODEgMTUuODc4OTA2IDE1Ljk1MzEyNSAxNi4xOTE0MDYgMTUuOTQ1MzEyIEMgMTYuNjM2NzE5IDE1LjkzNzUgMTcuMDgyMDMxIDE1Ljg1MTU2MiAxNy41IDE1LjY4NzUgQyAxNy42ODM1OTQgMTUuNjIxMDk0IDE3LjcyMjY1NiAxNS41NjI1IDE3LjcyMjY1NiAxNS4zNzEwOTQgTCAxNy43MjI2NTYgMTQuOTMzNTk0IEMgMTcuNzE0ODQ0IDE0Ljc1NzgxMiAxNy42NDA2MjUgMTQuNjk1MzEyIDE3LjQ2ODc1IDE0LjczODI4MSBDIDE3LjMzMjAzMSAxNC43Njk1MzEgMTcuMjAzMTI1IDE0LjgwNDY4OCAxNy4wNzAzMTIgMTQuODM5ODQ0IEMgMTYuNjU2MjUgMTQuOTMzNTk0IDE2LjIzMDQ2OSAxNC45NTMxMjUgMTUuODEyNSAxNC44Nzg5MDYgQyAxNS40MDIzNDQgMTQuNzk2ODc1IDE1LjExNzE4OCAxNC41NjI1IDE1LjAwNzgxMiAxNC4xNDQ1MzEgQyAxNC45NzY1NjIgMTQuMDIzNDM4IDE0Ljk0OTIxOSAxMy45MDIzNDQgMTQuOTQxNDA2IDEzLjc3MzQzOCBDIDE0Ljk2ODc1IDEzLjc3MzQzOCAxNS4wMDM5MDYgMTMuNzczNDM4IDE1LjAyMzQzOCAxMy43ODUxNTYgQyAxNS40Mjk2ODggMTMuODUxNTYyIDE1LjgzOTg0NCAxMy44ODY3MTkgMTYuMjUgMTMuODUxNTYyIEMgMTYuNjAxNTYyIDEzLjgzMjAzMSAxNi45NjA5MzggMTMuNzY1NjI1IDE3LjI3NzM0NCAxMy41OTc2NTYgQyAxNy42MDE1NjIgMTMuNDMzNTk0IDE3LjgyNDIxOSAxMy4xMzI4MTIgMTcuODkwNjI1IDEyLjc4MTI1IEMgMTcuOTM3NSAxMi41NTg1OTQgMTcuOTM3NSAxMi4zMjgxMjUgMTcuODkwNjI1IDEyLjEwNTQ2OSBDIDE3Ljc2NTYyNSAxMS41NTg1OTQgMTcuNDE0MDYyIDExLjIxNDg0NCAxNi44ODY3MTkgMTEuMDM5MDYyIEMgMTYuNTk3NjU2IDEwLjk0NTMxMiAxNi4yNzczNDQgMTAuOTEwMTU2IDE1Ljk3NjU2MiAxMC45MjE4NzUgWiBNIDAuNjg3NSAxMS4wMTk1MzEgQyAwLjU2NjQwNiAxMS4wMTk1MzEgMC41MTU2MjUgMTEuMDc4MTI1IDAuNTM5MDYyIDExLjE5OTIxOSBDIDAuNTU4NTk0IDExLjI4MTI1IDAuNTg1OTM4IDExLjM3MTA5NCAwLjYxNzE4OCAxMS40NDUzMTIgQyAwLjk4NDM3NSAxMi40MTAxNTYgMS4zNTkzNzUgMTMuMzY3MTg4IDEuNzI2NTYyIDE0LjMyNDIxOSBDIDEuODc1IDE0LjczMDQ2OSAyLjAzNTE1NiAxNS4xNDA2MjUgMi4xOTE0MDYgMTUuNTQ2ODc1IEMgMi4yNTc4MTIgMTUuNzE0ODQ0IDIuMzY3MTg4IDE1Ljc5Njg3NSAyLjU1NDY4OCAxNS43ODkwNjIgQyAyLjgyNDIxOSAxNS43ODkwNjIgMy4wOTc2NTYgMTUuNzg5MDYyIDMuMzY3MTg4IDE1Ljc4OTA2MiBDIDMuNSAxNS44MDQ2ODggMy42MjEwOTQgMTUuNzIyNjU2IDMuNjY3OTY5IDE1LjU5Mzc1IEMgMy42ODM1OTQgMTUuNTU0Njg4IDMuNzAzMTI1IDE1LjUxOTUzMSAzLjcxMDkzOCAxNS40ODA0NjkgQyA0LjEyMTA5NCAxNC40MjE4NzUgNC41MzUxNTYgMTMuMzQ3NjU2IDQuOTQ1MzEyIDEyLjI4OTA2MiBMIDUuMzA4NTk0IDExLjMxNjQwNiBDIDUuMzkwNjI1IDExLjA5Mzc1IDUuMzM1OTM4IDExLjAyMzQzOCA1LjEwOTM3NSAxMS4wMjM0MzggTCA0LjE3NTc4MSAxMS4wMjM0MzggQyA0LjA2NjQwNiAxMS4wMjM0MzggMy45NjA5MzggMTEuMDkzNzUgMy45MzM1OTQgMTEuMTk5MjE5IEwgMy44OTA2MjUgMTEuMzE2NDA2IEMgMy42MTcxODggMTIuMjYxNzE5IDMuMzMyMDMxIDEzLjE5OTIxOSAzLjA0Njg3NSAxNC4xNDg0MzggQyAzLjAxNTYyNSAxNC4yNzM0MzggMi45ODA0NjkgMTQuMzg2NzE5IDIuOTQxNDA2IDE0LjUwNzgxMiBDIDIuOTI1NzgxIDE0LjUwNzgxMiAyLjkyMTg3NSAxNC41MDc4MTIgMi45MjU3ODEgMTQuNSBDIDIuNjc1NzgxIDEzLjY1MjM0NCAyLjQzMzU5NCAxMi44MDA3ODEgMi4xODM1OTQgMTEuOTQ5MjE5IEMgMi4xMDkzNzUgMTEuNzE0ODQ0IDIuMDQyOTY5IDExLjQ3NjU2MiAxLjk3NjU2MiAxMS4yNDYwOTQgQyAxLjkzMzU5NCAxMS4xMjEwOTQgMS44NzUgMTEuMDE5NTMxIDEuNzI2NTYyIDExLjAxOTUzMSBDIDEuMzgyODEyIDExLjAxOTUzMSAxLjAzMTI1IDExLjAxMTcxOSAwLjY4NzUgMTEuMDE5NTMxIFogTSA2LjE0ODQzOCAxMS4wMjM0MzggQyA1Ljk1NzAzMSAxMS4wMjM0MzggNS45MDIzNDQgMTEuMDc4MTI1IDUuOTAyMzQ0IDExLjI2OTUzMSBMIDUuOTAyMzQ0IDE1LjUgQyA1LjkwMjM0NCAxNS41MzUxNTYgNS45MDIzNDQgMTUuNTgyMDMxIDUuOTEwMTU2IDE1LjYxMzI4MSBDIDUuOTE3OTY5IDE1LjczODI4MSA1Ljk3NjU2MiAxNS43ODkwNjIgNi4xMDE1NjIgMTUuNzg5MDYyIEMgNi40Mjk2ODggMTUuNzk2ODc1IDYuNzUzOTA2IDE1Ljc5Njg3NSA3LjA4NTkzOCAxNS43ODkwNjIgQyA3LjIwNzAzMSAxNS43ODkwNjIgNy4yNjE3MTkgMTUuNzMwNDY5IDcuMjczNDM4IDE1LjYwOTM3NSBMIDcuMjczNDM4IDExLjI2OTUzMSBDIDcuMjczNDM4IDExLjA3ODEyNSA3LjIxODc1IDExLjAyMzQzOCA3LjAyMzQzOCAxMS4wMjM0MzggWiBNIDE1Ljg1MTU2MiAxMS44NjMyODEgQyAxNS45MzM1OTQgMTEuODQ3NjU2IDE2LjAyMzQzOCAxMS44NTU0NjkgMTYuMTA5Mzc1IDExLjg2MzI4MSBDIDE2LjEzNjcxOSAxMS44NjMyODEgMTYuMTY0MDYyIDExLjg3NSAxNi4xOTE0MDYgMTEuODc1IEMgMTYuNjI1IDExLjk0MTQwNiAxNi43MjI2NTYgMTIuMjgxMjUgMTYuNjQ4NDM4IDEyLjYwOTM3NSBDIDE2LjU4MjAzMSAxMi44NTkzNzUgMTYuMzg2NzE5IDEyLjk0OTIxOSAxNi4xNTYyNSAxMi45OTYwOTQgQyAxNi4wMzUxNTYgMTMuMDE1NjI1IDE1LjkwNjI1IDEzLjAzMTI1IDE1Ljc3NzM0NCAxMy4wMjM0MzggQyAxNS41MzEyNSAxMy4wMTU2MjUgMTUuMjgxMjUgMTIuOTk2MDk0IDE1LjAzNTE1NiAxMi45NjA5MzggQyAxNC45ODQzNzUgMTIuOTU3MDMxIDE0Ljk2MDkzOCAxMi45MzM1OTQgMTQuOTY4NzUgMTIuODc1IEMgMTUuMDE1NjI1IDEyLjYzNjcxOSAxNS4wNzAzMTIgMTIuNDEwMTU2IDE1LjIxODc1IDEyLjIxNDg0NCBDIDE1LjM4NjcxOSAxMS45ODQzNzUgMTUuNjA1NDY5IDExLjg4MjgxMiAxNS44NTE1NjIgMTEuODYzMjgxIFogTSAxMC4zOTQ1MzEgMTEuOTEwMTU2IEMgMTAuNzE4NzUgMTEuODgyODEyIDExLjAzOTA2MiAxMS45NDE0MDYgMTEuMzMyMDMxIDEyLjA3ODEyNSBDIDExLjQwNjI1IDEyLjA5NzY1NiAxMS40NDUzMTIgMTIuMTcxODc1IDExLjQzNzUgMTIuMjUzOTA2IEMgMTEuNDMzNTk0IDEyLjYzMjgxMiAxMS40Mzc1IDEzLjAwMzkwNiAxMS40Mzc1IDEzLjM3NSBMIDExLjQzNzUgMTQuNDg4MjgxIEMgMTEuNDUzMTI1IDE0LjU1NDY4OCAxMS40MDYyNSAxNC42Mjg5MDYgMTEuMzM1OTM4IDE0LjY1NjI1IEMgMTEuMDQ2ODc1IDE0LjgyMDMxMiAxMC43MTA5MzggMTQuODg2NzE5IDEwLjM3ODkwNiAxNC44Mzk4NDQgQyAxMC4wOTM3NSAxNC44MTI1IDkuODUxNTYyIDE0LjYzNjcxOSA5LjcyMjY1NiAxNC4zODY3MTkgQyA5LjYyODkwNiAxNC4xOTE0MDYgOS41NzAzMTIgMTMuOTgwNDY5IDkuNTU0Njg4IDEzLjc2NTYyNSBDIDkuNSAxMy4zNzg5MDYgOS41MzUxNTYgMTIuOTg4MjgxIDkuNjI1IDEyLjYxNzE4OCBDIDkuNjU2MjUgMTIuNTE1NjI1IDkuNjkxNDA2IDEyLjQxNDA2MiA5Ljc1IDEyLjMyMDMxMiBDIDkuODc4OTA2IDEyLjA4NTkzOCAxMC4xMjEwOTQgMTEuOTI5Njg4IDEwLjM5NDUzMSAxMS45MTAxNTYgWiBNIDIwLjgwODU5NCAxMS45NDE0MDYgQyAyMC45MjE4NzUgMTEuOTI5Njg4IDIxLjAzOTA2MiAxMS45Mjk2ODggMjEuMTUyMzQ0IDExLjk0OTIxOSBDIDIxLjQwMjM0NCAxMi4wMDM5MDYgMjEuNjA1NDY5IDEyLjE2MDE1NiAyMS43MTA5MzggMTIuMzg2NzE5IEMgMjEuODEyNSAxMi41OTc2NTYgMjEuODc1IDEyLjgzOTg0NCAyMS44ODY3MTkgMTMuMDc4MTI1IEMgMjEuODk0NTMxIDEzLjE5MTQwNiAyMS45MDIzNDQgMTMuMzAwNzgxIDIxLjg5NDUzMSAxMy40MDYyNSBDIDIxLjkxNDA2MiAxMy42NzU3ODEgMjEuODgyODEyIDEzLjk0MTQwNiAyMS44MDg1OTQgMTQuMTkxNDA2IEMgMjEuNzczNDM4IDE0LjMyMDMxMiAyMS43MTg3NSAxNC40MzM1OTQgMjEuNjM2NzE5IDE0LjU0Njg3NSBDIDIxLjUwMzkwNiAxNC43MzgyODEgMjEuMjg5MDYyIDE0Ljg1OTM3NSAyMS4wNTg1OTQgMTQuODc4OTA2IEMgMjAuOTQxNDA2IDE0Ljg4NjcxOSAyMC44MjgxMjUgMTQuODg2NzE5IDIwLjcwNzAzMSAxNC44NjcxODggQyAyMC40NDkyMTkgMTQuODEyNSAyMC4yNDIxODggMTQuNjQ0NTMxIDIwLjEzMjgxMiAxNC40MDYyNSBDIDIwLjA0Njg3NSAxNC4yMTg3NSAxOS45ODQzNzUgMTQuMDA3ODEyIDE5Ljk3MjY1NiAxMy44MDA3ODEgQyAxOS45Mzc1IDEzLjQ0MTQwNiAxOS45Mjk2ODggMTMuMDc4MTI1IDIwLjAxOTUzMSAxMi43MjY1NjIgQyAyMC4wNTA3ODEgMTIuNTg1OTM4IDIwLjExMzI4MSAxMi40NDE0MDYgMjAuMTc5Njg4IDEyLjMyMDMxMiBDIDIwLjMxNjQwNiAxMi4wOTc2NTYgMjAuNTUwNzgxIDExLjk1NzAzMSAyMC44MDg1OTQgMTEuOTQxNDA2IFogTSAyMC44MDg1OTQgMTcuNzI2NTYyIEMgMjAuNDU3MDMxIDE3Ljc0MjE4OCAyMC4xMjEwOTQgMTcuNzczNDM4IDE5Ljc4MTI1IDE3Ljg0Mzc1IEMgMTkuMzQzNzUgMTcuOTQ5MjE5IDE4LjkyOTY4OCAxOC4xMDU0NjkgMTguNTU4NTk0IDE4LjM2NzE4OCBDIDE4LjUwNzgxMiAxOC40MDIzNDQgMTguNDUzMTI1IDE4LjQ1NzAzMSAxOC40MTAxNTYgMTguNTExNzE5IEMgMTguMzc4OTA2IDE4LjU2NjQwNiAxOC4zNjMyODEgMTguNjI1IDE4LjM5ODQzOCAxOC42ODc1IEMgMTguNDMzNTk0IDE4Ljc0NjA5NCAxOC40OTIxODggMTguNzUzOTA2IDE4LjU1ODU5NCAxOC43NDYwOTQgTCAxOS4xNjAxNTYgMTguNjcxODc1IEMgMTkuNjA1NDY5IDE4LjYxMzI4MSAyMC4wNjY0MDYgMTguNTg5ODQ0IDIwLjUyMzQzOCAxOC42MTMyODEgQyAyMC42ODc1IDE4LjYyNSAyMC44NDc2NTYgMTguNjUyMzQ0IDIwLjk5NjA5NCAxOC42OTkyMTkgQyAyMS4xNjQwNjIgMTguNzUzOTA2IDIxLjI3MzQzOCAxOC44OTQ1MzEgMjEuMjgxMjUgMTkuMDYyNSBDIDIxLjI4OTA2MiAxOS4xNjQwNjIgMjEuMjgxMjUgMTkuMjYxNzE5IDIxLjI3MzQzOCAxOS4zNTkzNzUgQyAyMS4yMzgyODEgMTkuNjM2NzE5IDIxLjE4NzUgMTkuOTA2MjUgMjEuMTA1NDY5IDIwLjE2NDA2MiBDIDIwLjk2ODc1IDIwLjY1MjM0NCAyMC44MDA3ODEgMjEuMTA5Mzc1IDIwLjYyNSAyMS41NzQyMTkgQyAyMC42MDU0NjkgMjEuNjI4OTA2IDIwLjU5NzY1NiAyMS42NzU3ODEgMjAuNTkzNzUgMjEuNzIyNjU2IEMgMjAuNTk3NjU2IDIxLjgxNjQwNiAyMC42NjAxNTYgMjEuODcxMDk0IDIwLjc1MzkwNiAyMS44NDM3NSBDIDIwLjgxNjQwNiAyMS44MjQyMTkgMjAuODY3MTg4IDIxLjc5Mjk2OSAyMC45MTAxNTYgMjEuNzQyMTg4IEMgMjEuMTMyODEyIDIxLjU0Mjk2OSAyMS4zMjgxMjUgMjEuMjk2ODc1IDIxLjQ4NDM3NSAyMS4wMzUxNTYgQyAyMS45MjE4NzUgMjAuMzA0Njg4IDIyLjE4MzU5NCAxOS40ODgyODEgMjIuMjUzOTA2IDE4LjY0MDYyNSBDIDIyLjI1NzgxMiAxOC40OTYwOTQgMjIuMjUzOTA2IDE4LjM0NzY1NiAyMi4yMzgyODEgMTguMjE0ODQ0IEMgMjIuMjE4NzUgMTguMDkzNzUgMjIuMTQ0NTMxIDE3Ljk4NDM3NSAyMi4wMzUxNTYgMTcuOTM3NSBDIDIxLjk0OTIxOSAxNy44OTg0MzggMjEuODY3MTg4IDE3Ljg3MTA5NCAyMS43NzM0MzggMTcuODQzNzUgQyAyMS40NTcwMzEgMTcuNzYxNzE5IDIxLjEzMjgxMiAxNy43NDIxODggMjAuODA4NTk0IDE3LjcyNjU2MiBaIE0gMS43ODUxNTYgMTcuOTg0Mzc1IEMgMS43NTM5MDYgMTcuOTkyMTg4IDEuNzE4NzUgMTguMDExNzE5IDEuNjk5MjE5IDE4LjAzOTA2MiBDIDEuNjQ0NTMxIDE4LjA5Mzc1IDEuNjMyODEyIDE4LjE2Nzk2OSAxLjY2NDA2MiAxOC4yMzQzNzUgQyAxLjY3OTY4OCAxOC4yODkwNjIgMS43MTg3NSAxOC4zMzU5MzggMS43NTM5MDYgMTguMzY3MTg4IEMgMS45Mjk2ODggMTguNTMxMjUgMi4wODk4NDQgMTguNjg3NSAyLjI2NTYyNSAxOC44Mzk4NDQgQyA0LjEyODkwNiAyMC40OTYwOTQgNi4yNjk1MzEgMjEuNjI4OTA2IDguNzA3MDMxIDIyLjE5NTMxMiBDIDkuNDE0MDYyIDIyLjM1OTM3NSAxMC4xMjg5MDYgMjIuNDcyNjU2IDEwLjg1OTM3NSAyMi41MjczNDQgQyAxMS4xMjg5MDYgMjIuNTQ2ODc1IDExLjQwNjI1IDIyLjU1NDY4OCAxMS42NzU3ODEgMjIuNTY2NDA2IEMgMTEuODc4OTA2IDIyLjU2NjQwNiAxMi4wNzQyMTkgMjIuNTY2NDA2IDEyLjI3NzM0NCAyMi41NjY0MDYgQyAxMy4wNTg1OTQgMjIuNTM5MDYyIDEzLjg0NzY1NiAyMi40NTMxMjUgMTQuNjI1IDIyLjMxNjQwNiBDIDE1Ljk3NjU2MiAyMi4wNjI1IDE3LjI4NTE1NiAyMS42MjEwOTQgMTguNTExNzE5IDIxIEMgMTkuMTYwMTU2IDIwLjY3MTg3NSAxOS43NzM0MzggMjAuMjc3MzQ0IDIwLjM0NzY1NiAxOS44MzIwMzEgQyAyMC40MTc5NjkgMTkuNzg1MTU2IDIwLjQ2ODc1IDE5LjcxODc1IDIwLjUxMTcxOSAxOS42NDQ1MzEgQyAyMC41MjM0MzggMTkuNjI1IDIwLjUzMTI1IDE5LjYwNTQ2OSAyMC41MzkwNjIgMTkuNTg1OTM4IEMgMjAuNTc4MTI1IDE5LjQxNDA2MiAyMC40NzY1NjIgMTkuMjQ2MDk0IDIwLjMxNjQwNiAxOS4yMDcwMzEgQyAyMC4yMTQ4NDQgMTkuMTg3NSAyMC4xMDU0NjkgMTkuMTk5MjE5IDIwLjAxOTUzMSAxOS4yNDYwOTQgQyAxOS40MTc5NjkgMTkuNTIzNDM4IDE4LjgwNDY4OCAxOS43NjU2MjUgMTguMTY3OTY5IDE5Ljk3NjU2MiBDIDE2Ljk3MjY1NiAyMC4zNzUgMTUuNzM4MjgxIDIwLjY1MjM0NCAxNC40ODQzNzUgMjAuODEyNSBDIDEzLjk0OTIxOSAyMC44Nzg5MDYgMTMuNDEwMTU2IDIwLjkzMzU5NCAxMi44NzEwOTQgMjAuOTQ5MjE5IEMgMTEuODcxMDk0IDIwLjk4MDQ2OSAxMC44NTkzNzUgMjAuOTMzNTk0IDkuODY3MTg4IDIwLjgxMjUgQyA5LjE3MTg3NSAyMC43MjY1NjIgOC40NzY1NjIgMjAuNTk3NjU2IDcuNzkyOTY5IDIwLjQ0MTQwNiBDIDUuNzUzOTA2IDE5Ljk2MDkzOCAzLjgwNDY4OCAxOS4xNjAxNTYgMi4wMjM0MzggMTguMDU4NTk0IEMgMS45ODA0NjkgMTguMDMxMjUgMS45MzM1OTQgMTguMDExNzE5IDEuODk0NTMxIDE3Ljk5MjE4OCBDIDEuODU5Mzc1IDE3Ljk3NjU2MiAxLjgyMDMxMiAxNy45NzY1NjIgMS43ODUxNTYgMTcuOTg0Mzc1IFogTSAxLjc4NTE1NiAxNy45ODQzNzUgXCI7XG4gICAgc3ZnW1wiUElBXCJdID0gXCJNIDI0IDEyIEMgMjQgMTguNjI4OTA2IDE4LjYyODkwNiAyNCAxMiAyNCBDIDUuMzcxMDk0IDI0IDAgMTguNjI4OTA2IDAgMTIgQyAwIDUuMzcxMDk0IDUuMzcxMDk0IDAgMTIgMCBDIDE4LjYyODkwNiAwIDI0IDUuMzcxMDk0IDI0IDEyIFogTSAyNCAxMiBNIDExLjQwNjI1IDguNjk1MzEyIEMgMTEuNDA2MjUgOC4zMzIwMzEgMTAuOTY4NzUgOC4xNTIzNDQgMTAuNzEwOTM4IDguNDA2MjUgQyAxMC40NTcwMzEgOC42NjQwNjIgMTAuNjM2NzE5IDkuMTAxNTYyIDExIDkuMTAxNTYyIEMgMTEuMjIyNjU2IDkuMTAxNTYyIDExLjQwNjI1IDguOTE3OTY5IDExLjQwMjM0NCA4LjY5NTMxMiBNIDEzLjAwMzkwNiA4LjI4OTA2MiBDIDEyLjY0MDYyNSA4LjI4OTA2MiAxMi40NTcwMzEgOC43MjY1NjIgMTIuNzE0ODQ0IDguOTg0Mzc1IEMgMTIuOTcyNjU2IDkuMjM4MjgxIDEzLjQwNjI1IDkuMDU4NTk0IDEzLjQwNjI1IDguNjk1MzEyIEMgMTMuNDA2MjUgOC40NzI2NTYgMTMuMjI2NTYyIDguMjg5MDYyIDEzLjAwMzkwNiA4LjI4OTA2MiBNIDEyLjU2NjQwNiA5LjM2MzI4MSBDIDEyLjI0MjE4OCA5LjY1MjM0NCAxMS43NTc4MTIgOS42NTIzNDQgMTEuNDM3NSA5LjM2MzI4MSBDIDExLjMzMjAzMSA5LjI3NzM0NCAxMS4xOTkyMTkgOS40MjU3ODEgMTEuMjkyOTY5IDkuNTE5NTMxIEMgMTEuNjkxNDA2IDkuODk0NTMxIDEyLjMxMjUgOS44OTQ1MzEgMTIuNzA3MDMxIDkuNTE5NTMxIEMgMTIuNzUgOS40ODA0NjkgMTIuNzUgOS40MTQwNjIgMTIuNzEwOTM4IDkuMzc1IEMgMTIuNjcxODc1IDkuMzMyMDMxIDEyLjYwOTM3NSA5LjMyODEyNSAxMi41NjY0MDYgOS4zNjMyODEgTSAxNi4zMDQ2ODggMTAuOTMzNTk0IEwgMTYuMzA0Njg4IDEwLjkyOTY4OCBDIDE2LjMwNDY4OCAxMC41NTA3ODEgMTYuMDU0Njg4IDEwLjIxODc1IDE1LjY5MTQwNiAxMC4xMTcxODggTCAxNS42OTE0MDYgOS4zOTA2MjUgQyAxNS42OTE0MDYgNy40MTQwNjIgMTQuMDg5ODQ0IDUuODEyNSAxMi4xMTMyODEgNS44MTI1IEwgMTEuOTc2NTYyIDUuODEyNSBDIDEwIDUuODEyNSA4LjM5NDUzMSA3LjQxNDA2MiA4LjM5NDUzMSA5LjM5MDYyNSBMIDguMzk0NTMxIDEwLjA5NzY1NiBDIDcuOTk2MDk0IDEwLjE3MTg3NSA3LjcwNzAzMSAxMC41MTU2MjUgNy43MDMxMjUgMTAuOTIxODc1IEMgNy41OTM3NSAxMS4xMDU0NjkgNy41MzUxNTYgMTEuMzE2NDA2IDcuNTM1MTU2IDExLjUzMTI1IEwgNy41MzUxNTYgMTYuMTIxMDk0IEMgNy41MzUxNTYgMTYuNjY3OTY5IDcuOTAyMzQ0IDE3LjE0NDUzMSA4LjQyOTY4OCAxNy4yODkwNjIgQyA4LjU3MDMxMiAxNy42MDU0NjkgOC44ODY3MTkgMTcuODEyNSA5LjIzNDM3NSAxNy44MTI1IEwgMTAuMjM4MjgxIDE3LjgxMjUgQyAxMC41NzAzMTIgMTcuODEyNSAxMC44NzUgMTcuNjI1IDExLjAyNzM0NCAxNy4zMjgxMjUgTCAxMi44NzEwOTQgMTcuMzI4MTI1IEMgMTMuMDE5NTMxIDE3LjYyNSAxMy4zMjQyMTkgMTcuODEyNSAxMy42NTYyNSAxNy44MTI1IEwgMTQuNjYwMTU2IDE3LjgxMjUgQyAxNSAxNy44MTI1IDE1LjMwODU5NCAxNy42MTcxODggMTUuNDU3MDMxIDE3LjMxMjUgQyAxNi4wMzkwNjIgMTcuMjE0ODQ0IDE2LjQ2NDg0NCAxNi43MTA5MzggMTYuNDY0ODQ0IDE2LjEyMTA5NCBMIDE2LjQ2NDg0NCAxMS41MzEyNSBDIDE2LjQ2NDg0NCAxMS4zMjQyMTkgMTYuNDEwMTU2IDExLjExNzE4OCAxNi4zMDQ2ODggMTAuOTMzNTk0IFogTSAxMy4xMTMyODEgMTUuMzgyODEyIEMgMTMuMTM2NzE5IDE1LjUzOTA2MiAxMy4wODk4NDQgMTUuNjk1MzEyIDEyLjk4ODI4MSAxNS44MTY0MDYgQyAxMi44ODY3MTkgMTUuOTMzNTk0IDEyLjczODI4MSAxNi4wMDM5MDYgMTIuNTc4MTI1IDE2LjAwMzkwNiBMIDExLjQyMTg3NSAxNi4wMDM5MDYgQyAxMS4yNjU2MjUgMTYuMDAzOTA2IDExLjExMzI4MSAxNS45MzM1OTQgMTEuMDExNzE5IDE1LjgxNjQwNiBDIDEwLjkxMDE1NiAxNS42OTUzMTIgMTAuODYzMjgxIDE1LjUzOTA2MiAxMC44ODY3MTkgMTUuMzgyODEyIEwgMTEuMTA5Mzc1IDEzLjg3MTA5NCBDIDEwLjY5MTQwNiAxMy41MTU2MjUgMTAuNTI3MzQ0IDEyLjk0OTIxOSAxMC42ODc1IDEyLjQyMTg3NSBDIDEwLjg0NzY1NiAxMS44OTg0MzggMTEuMzAwNzgxIDExLjUxOTUzMSAxMS44NDM3NSAxMS40NjA5MzggQyAxMi40NDUzMTIgMTEuMzkwNjI1IDEzLjAxOTUzMSAxMS43MjI2NTYgMTMuMjYxNzE5IDEyLjI3NzM0NCBDIDEzLjUgMTIuODMyMDMxIDEzLjM1MTU2MiAxMy40ODA0NjkgMTIuODkwNjI1IDEzLjg3MTA5NCBaIE0gMTMuMjQ2MDk0IDEwLjMyNDIxOSBMIDEwLjc2MTcxOSAxMC4zMjQyMTkgQyAxMC42MDU0NjkgMTAuMTY3OTY5IDEwLjM5MDYyNSAxMC4wODIwMzEgMTAuMTcxODc1IDEwLjA4MjAzMSBMIDkuNzUgMTAuMDgyMDMxIEwgOS43NSA5LjMzMjAzMSBDIDkuNzUgOC4wOTM3NSAxMC43NTM5MDYgNy4wODk4NDQgMTEuOTkyMTg4IDcuMDg5ODQ0IEwgMTIuMTAxNTYyIDcuMDg5ODQ0IEMgMTMuMzM5ODQ0IDcuMDg5ODQ0IDE0LjMzOTg0NCA4LjA5Mzc1IDE0LjMzOTg0NCA5LjMzMjAzMSBMIDE0LjMzOTg0NCAxMC4wODIwMzEgTCAxMy44MzU5MzggMTAuMDgyMDMxIEMgMTMuNjEzMjgxIDEwLjA4MjAzMSAxMy40MDIzNDQgMTAuMTY3OTY5IDEzLjI0NjA5NCAxMC4zMjQyMTkgWiBNIDEyLjczMDQ2OSAxNS40NTcwMzEgQyAxMi43NDIxODggMTUuNDk2MDk0IDEyLjczNDM3NSAxNS41MzUxNTYgMTIuNzA3MDMxIDE1LjU3MDMxMiBDIDEyLjY4MzU5NCAxNS42MDE1NjIgMTIuNjQ0NTMxIDE1LjYxNzE4OCAxMi42MDU0NjkgMTUuNjE3MTg4IEwgMTEuNDAyMzQ0IDE1LjYxNzE4OCBDIDExLjM2MzI4MSAxNS42MTcxODggMTEuMzI0MjE5IDE1LjYwMTU2MiAxMS4zMDA3ODEgMTUuNTY2NDA2IEMgMTEuMjczNDM4IDE1LjUzNTE1NiAxMS4yNjU2MjUgMTUuNDk2MDk0IDExLjI3NzM0NCAxNS40NTcwMzEgTCAxMS41MDc4MTIgMTMuNzg1MTU2IEMgMTEuNTA3ODEyIDEzLjc2MTcxOSAxMS41MDM5MDYgMTMuNzM4MjgxIDExLjQ5NjA5NCAxMy43MTQ4NDQgQyAxMS40NzY1NjIgMTMuNjgzNTk0IDExLjQ1MzEyNSAxMy42NjAxNTYgMTEuNDIxODc1IDEzLjYzNjcxOSBDIDExLjQxNzk2OSAxMy42MzI4MTIgMTEuNDE3OTY5IDEzLjYzMjgxMiAxMS40MTQwNjIgMTMuNjI4OTA2IEMgMTEuMDcwMzEyIDEzLjM3NSAxMC45MjU3ODEgMTIuOTMzNTk0IDExLjA1ODU5NCAxMi41MjczNDQgQyAxMS4xOTE0MDYgMTIuMTIxMDk0IDExLjU2NjQwNiAxMS44NDM3NSAxMS45OTIxODggMTEuODM5ODQ0IEMgMTIuNDIxODc1IDExLjgzOTg0NCAxMi44MDA3ODEgMTIuMTA5Mzc1IDEyLjkzNzUgMTIuNTE1NjI1IEMgMTMuMDc0MjE5IDEyLjkxNzk2OSAxMi45Mzc1IDEzLjM2NzE4OCAxMi41OTM3NSAxMy42MjEwOTQgQyAxMi41OTM3NSAxMy42MjUgMTIuNTkzNzUgMTMuNjI4OTA2IDEyLjU4MjAzMSAxMy42MzY3MTkgQyAxMi41NTA3ODEgMTMuNjYwMTU2IDEyLjUyNzM0NCAxMy42ODM1OTQgMTIuNTA3ODEyIDEzLjcxNDg0NCBDIDEyLjUwMzkwNiAxMy43MjI2NTYgMTIuNSAxMy43MzQzNzUgMTIuNSAxMy43NDYwOTQgWiBNIDEyLjczMDQ2OSAxNS40NTcwMzEgXCI7XG4gICAgc3ZnW1wiU1VSRlNIQVJLXCJdID0gXCJNIDI0IDEyIEMgMjQgMTguNjI4OTA2IDE4LjYyODkwNiAyNCAxMiAyNCBDIDUuMzcxMDk0IDI0IDAgMTguNjI4OTA2IDAgMTIgQyAwIDUuMzcxMDk0IDUuMzcxMDk0IDAgMTIgMCBDIDE4LjYyODkwNiAwIDI0IDUuMzcxMDk0IDI0IDEyIFogTSAyNCAxMk0gMTYuNTQ2ODc1IDguMzUxNTYyIEwgMTYuNTQ2ODc1IDguMzQzNzUgQyAxNi41MzkwNjIgOC4yNDIxODggMTYuNTMxMjUgOC4xMjUgMTYuNTI3MzQ0IDggQyAxNi41MTE3MTkgNy43NjU2MjUgMTYuNDk2MDk0IDcuNTE1NjI1IDE2LjQ4MDQ2OSA3LjMyMDMxMiBDIDE2LjQ1NzAzMSA3LjE4NzUgMTYuNDI1NzgxIDcuMDcwMzEyIDE2LjM4NjcxOSA2Ljk2MDkzOCBDIDE2LjE0ODQzOCA2LjQyOTY4OCAxNS42ODM1OTQgNi4xNzU3ODEgMTUuMTkxNDA2IDYuMDU0Njg4IEMgMTQuOTY0ODQ0IDYuMDE1NjI1IDE0LjY5MTQwNiA2LjAwNzgxMiAxNC4zOTg0MzggNiBMIDExLjU3MDMxMiA2IEMgOS43NSA2LjA5NzY1NiA4Ljk4NDM3NSA3LjE1MjM0NCA4Ljc4MTI1IDcuNzE0ODQ0IEMgNy45ODQzNzUgMTAuMDk3NjU2IDcuNDg0Mzc1IDEzLjE4NzUgNy4xMjg5MDYgMTUuNDE0MDYyIEMgNy4xMjEwOTQgMTUuNDYwOTM4IDcuMTEzMjgxIDE1LjUgNy4xMDU0NjkgMTUuNTQyOTY5IEwgNi45ODgyODEgMTYuNjAxNTYyIEMgNi45ODA0NjkgMTYuNzY5NTMxIDcgMTYuOTUzMTI1IDcuMDQyOTY5IDE3LjEyODkwNiBDIDcuMjY1NjI1IDE3Ljc3MzQzOCA3Ljk0MTQwNiAxOC4zMjAzMTIgOS40MjU3ODEgMTcuNzc3MzQ0IEMgMTAuODMyMDMxIDE3LjE2Nzk2OSAxMi40ODgyODEgMTYuNDEwMTU2IDE0LjE5OTIxOSAxNS41NTg1OTQgQyAxNS4xNzU3ODEgMTQuOTk2MDk0IDE2LjYwNTQ2OSAxMy43MDMxMjUgMTYuNjc5Njg4IDEyLjA2NjQwNiBDIDE2LjY2Nzk2OSAxMC44NTkzNzUgMTYuNjI4OTA2IDkuNTg5ODQ0IDE2LjU0Njg3NSA4LjM1MTU2MiBaIE0gMTQuMjg5MDYyIDkuMjQ2MDk0IEMgMTQuMjg5MDYyIDkuMzg2NzE5IDE0LjE3NTc4MSA5LjUgMTQuMDM1MTU2IDkuNSBDIDEzLjE4MzU5NCA5LjUgMTIuNDk2MDk0IDEwLjE5MTQwNiAxMi40OTYwOTQgMTEuMDM5MDYyIEwgMTIuNDk2MDk0IDExLjk4MDQ2OSBDIDEyLjQ5NjA5NCAxMy41NjI1IDExLjIxNDg0NCAxNC44NDM3NSA5LjYzNjcxOSAxNC44NDM3NSBDIDkuNDk2MDk0IDE0Ljg0Mzc1IDkuMzg2NzE5IDE0LjczMDQ2OSA5LjM4NjcxOSAxNC41OTM3NSBMIDkuMzg2NzE5IDEzLjgxMjUgQyA5LjM4NjcxOSAxMy42NzE4NzUgOS41IDEzLjU1ODU5NCA5LjY0MDYyNSAxMy41NTg1OTQgQyAxMC40OTIxODggMTMuNTU4NTk0IDExLjE3OTY4OCAxMi44NzEwOTQgMTEuMTc5Njg4IDEyLjAxOTUzMSBMIDExLjE3OTY4OCAxMS4wNzgxMjUgQyAxMS4xNzk2ODggOS41IDEyLjQ2MDkzOCA4LjIxODc1IDE0LjA0Mjk2OSA4LjIxODc1IEMgMTQuMTc5Njg4IDguMjE4NzUgMTQuMjg5MDYyIDguMzI4MTI1IDE0LjI4OTA2MiA4LjQ2NDg0NCBaIE0gMTQuMjg5MDYyIDkuMjQ2MDk0IFwiO1xuICAgIHN2Z1tcIlZVRFVcIl0gPSBcIk0gNi4wOTcxIDYuOTkyNiBMIDUuMDQ2OSA2Ljk5MjYgQyA0Ljg3MjUgNi45OTYzIDQuNzEyOSA3LjEwMzkgNC42NTM1IDcuMjcwOSBDIDQuNjUzNSA3LjI4MiA0LjY1MzUgNy4yODk1IDQuNjUzNSA3LjMwMDYgQyA0LjI2MDIgOC40MzI0IDMuOTE1IDkuNDA0NyAzLjUxOCAxMC41MzY1IEMgMy40MTQxIDEwLjgzNzEgMy4zMTAyIDExLjEzNCAzLjE5MTQgMTEuNDM0NiBDIDMuMTg0IDExLjQ2MDUgMy4xNjU0IDExLjQ4MjggMy4xMzk1IDExLjQ5MzkgQyAzLjA5NDkgMTEuNDkzOSAzLjA5NDkgMTEuNDYwNSAzLjA4MzggMTEuNDMwOSBDIDIuODM4OSAxMC43MjIxIDIuNTkzOSAxMC4wMTcgMi4zNDE2IDkuMzExOSBMIDEuNjIxNyA3LjI1NjEgQyAxLjYyNTQgNy4yNDg2IDEuNjI1NCA3LjI0MTIgMS42MjE3IDcuMjMzOCBDIDEuNTQ3NSA3LjA4NTQgMS4zOTkgNi45OTI2IDEuMjM1NyA2Ljk5MjYgTCAwLjE3MDcgNi45OTI2IEMgMC4wODU0IDYuOTg1MiAwLjAxMTEgNy4wNDgyIDAgNy4xMzM2IEMgLTAuMDAzNyA3LjE2MzMgMC4wMDM3IDcuMTkzIDAuMDE0OCA3LjIxODkgQyAwLjYyNzEgOC45Mjk3IDEuMjM1NyAxMC42NDA0IDEuODQ0MyAxMi4zNDc1IEwgMS45NzA1IDEyLjcgQyAyLjE0ODYgMTMuMjE5NSAyLjYzNDggMTMuNTY0NiAzLjE4MDMgMTMuNTYwOSBMIDMuMzIxMyAxMy41NjA5IEMgMy41NTUxIDEzLjU0OTggMy43ODg5IDEzLjUyMDEgNC4wMjI3IDEzLjQ2ODIgTCA0LjQ1MzEgMTIuMjI4NyBMIDYuMjU2NiA3LjIzMDEgQyA2LjI2NDEgNy4yMDc4IDYuMjY3OCA3LjE4OTMgNi4yNzUyIDcuMTcwNyBDIDYuMjg2MyA3LjA4NTQgNi4yMjcgNy4wMDM3IDYuMTQxNiA2Ljk5MjYgQyA2LjEyNjggNi45OTI2IDYuMTE1NiA2Ljk5MjYgNi4xMDA4IDYuOTkyNiBNIDExLjk0MTggNy40NDE2IEMgMTEuOTQxOCA3LjIxNTIgMTEuNzY3NCA3LjAyOTcgMTEuNTQ0NyA3LjAxMTEgTCAxMC40NTc0IDcuMDExMSBMIDEwLjQ1NzQgNy42MTIzIEMgMTAuNDU3NCA4Ljc0NDEgMTAuNDU3NCA5Ljc0OTggMTAuNDU3NCAxMC44ODU0IEMgMTAuNDYxMSAxMS4wMDA0IDEwLjQ1IDExLjExNTQgMTAuNDI0IDExLjIyNjggQyAxMC4zNDI0IDExLjYzNSAxMC4wNDU1IDExLjk1NzggOS42NDg0IDEyLjA3MjkgQyA5LjA0MzYgMTIuMjY5NSA4LjM5MDQgMTEuOTM5MyA4LjE5MzcgMTEuMzMwNyBDIDguMTU2NiAxMS4yMTE5IDguMTM4MSAxMS4wODk1IDguMTM4MSAxMC45NjcgQyA4LjEzODEgMTAuMTg0IDguMTM4MSA4LjUxMDQgOC4xMzgxIDcuNjA0OSBMIDguMTM4MSA3IEMgOC4xMzgxIDcgNy4wNTQ1IDcgNy4wNDcxIDcgQyA2LjgyNDQgNy4wMTQ4IDYuNjUgNy4yMDQxIDYuNjUgNy40MjY4IEwgNi42NSA3LjY0NTcgQyA2LjY1IDguODIyMSA2LjY1IDkuODMxNCA2LjY1IDExLjAzMDEgQyA2LjY1NzQgMTIuNDc3MyA3LjgzMDEgMTMuNjQyNiA5LjI2OTkgMTMuNjMxNCBDIDkuNDQwNiAxMy42MzE0IDkuNjA3NiAxMy42MTI5IDkuNzc0NiAxMy41Nzk1IEMgMTAuNDIwMyAxMy40NzE5IDExLjAwMjkgMTMuMTE5MyAxMS40MDM3IDEyLjU5OTggQyAxMS43NDUxIDEyLjE2OTMgMTEuOTM0NCAxMS42Mzg3IDExLjk0MTggMTEuMDg1NyBDIDExLjk0MTggMTAuNDU4NiAxMS45NDE4IDkuODMxNCAxMS45NDE4IDkuMjAwNiBaIE0gMTEuOTQxOCA3LjQ0MTYgTSAyMy43NSA3LjQ0MTYgQyAyMy43NSA3LjIxODkgMjMuNTc5MyA3LjAyOTcgMjMuMzU2NiA3LjAxMTEgTCAyMi4yNjU2IDcuMDExMSBMIDIyLjI2NTYgNy42MTIzIEMgMjIuMjY1NiA4Ljc0NDEgMjIuMjY1NiA5Ljc0OTggMjIuMjY1NiAxMC44ODU0IEMgMjIuMjY1NiAxMS4wMDA0IDIyLjI1NDUgMTEuMTE1NCAyMi4yMjg1IDExLjIyNjggQyAyMi4xNTA2IDExLjYzMTIgMjEuODUgMTEuOTU3OCAyMS40NTI5IDEyLjA3MjkgQyAyMC44NTE4IDEyLjI3MzIgMjAuMjAyMyAxMS45NDMgMjAuMDAyIDExLjMzODEgQyAxOS45NjExIDExLjIxOTMgMTkuOTQyNiAxMS4wOTMyIDE5Ljk0MjYgMTAuOTY3IEMgMTkuOTQyNiAxMC4xODQgMTkuOTQyNiA4LjUxMDQgMTkuOTQyNiA3LjYwNDkgTCAxOS45NDI2IDcgQyAxOS45NDI2IDcgMTguODYyNyA3IDE4Ljg0NzkgNyBDIDE4LjYyODkgNy4wMTg2IDE4LjQ1ODIgNy4yMDQxIDE4LjQ1NDUgNy40MjY4IEwgMTguNDU0NSA3LjY0NTcgQyAxOC40NTQ1IDguODIyMSAxOC40NTQ1IDkuODMxNCAxOC40NTQ1IDExLjAzMDEgQyAxOC40NjU2IDEyLjQ3NzMgMTkuNjM4MyAxMy42NDI2IDIxLjA3NDQgMTMuNjMxNCBDIDIxLjI0NTEgMTMuNjMxNCAyMS40MTU4IDEzLjYxMjkgMjEuNTgyOCAxMy41Nzk1IEMgMjIuMjI4NSAxMy40NzE5IDIyLjgwNzQgMTMuMTE5MyAyMy4yMDgyIDEyLjU5OTggQyAyMy41NTMzIDEyLjE2OTMgMjMuNzQyNiAxMS42Mzg3IDIzLjc0NjMgMTEuMDg1NyBDIDIzLjc0NjMgMTAuNDU4NiAyMy43NDYzIDkuODMxNCAyMy43NDYzIDkuMjAwNiBMIDIzLjc0NjMgNy40NDE2IFogTSAyMy43NSA3LjQ0MTYgTSAxNi4xMzUyIDExLjUzODUgQyAxNS44NDU3IDExLjg4NzMgMTUuNDMzOCAxMi4xMDYyIDE0Ljk4ODUgMTIuMTQ3MSBDIDE0Ljg5OTQgMTIuMTUwOCAxNC44MTA0IDEyLjE1MDggMTQuNzIxMyAxMi4xNDcxIEwgMTMuOTUzMSAxMi4xNDcxIEMgMTMuODYwNCAxMi4xNDcxIDEzLjg1NjYgMTIuMTQ3MSAxMy44NTY2IDEyLjA1MDYgTCAxMy44NTY2IDguNDU4NCBDIDEzLjg1NjYgOC4zNzMgMTMuODU2NiA4LjM3MyAxMy45NDIgOC4zNzMgQyAxNC4yNjg2IDguMzczIDE0LjU2OTEgOC4zNzMgMTQuODgwOSA4LjM3MyBDIDE1LjQzNzUgOC4zOTE2IDE1Ljk0OTYgOC42ODExIDE2LjI1MzkgOS4xNDg2IEMgMTYuNDUwNiA5LjQzODEgMTYuNTY1NiA5Ljc3OTUgMTYuNTgwNSAxMC4xMzIgQyAxNi42MjEzIDEwLjY0MDQgMTYuNDYxNyAxMS4xNDUxIDE2LjEzNTIgMTEuNTM4NSBNIDE2LjU2OTMgNy40ODk4IEMgMTYuMTAxOCA3LjE4OTMgMTUuNTYgNy4wMjIzIDE1LjAwMzMgNy4wMDc0IEMgMTQuNzQzNiA3LjAwNzQgMTQuNDg3NSA3LjAwNzQgMTQuMjI0IDcuMDA3NCBMIDEyLjg0NzMgNy4wMDc0IEMgMTIuNjA5OCA3LjAwNzQgMTIuNDIwNSA3LjIwMDQgMTIuNDIwNSA3LjQzNzkgTCAxMi40MjA1IDEzLjExNTYgQyAxMi40MjA1IDEzLjM1MzEgMTIuNjA5OCAxMy41NDYxIDEyLjg0NzMgMTMuNTQ2MSBMIDE0LjkxNDMgMTMuNTQ2MSBDIDE1LjA3MDEgMTMuNTQ2MSAxNS4yMjYgMTMuNTMxMyAxNS4zODE4IDEzLjUwMTYgQyAxNi4wMDUzIDEzLjQwODggMTYuNTg0MiAxMy4xMzA1IDE3LjA0NDMgMTIuNzAzNyBDIDE3LjkwMTYgMTEuOTU0MSAxOC4yOTEyIDEwLjggMTguMDY4NiA5LjY3OTMgQyAxNy45MTI3IDguNzcwMSAxNy4zNjcyIDcuOTc2IDE2LjU4MDUgNy41MDQ3IE0gMTkuMDMzNCAxNC40MjkzIEMgMTguNDY1NiAxNC40NTUzIDE4LjAyNCAxNC45NDUxIDE4LjA0NjMgMTUuNTE2NiBDIDE4LjA2ODYgMTYuMDg4MSAxOC41NDczIDE2LjUyOTcgMTkuMTE1IDE2LjUwNzQgQyAxOS42NzE3IDE2LjQ4NTIgMjAuMTA5NiAxNi4wMjUgMjAuMTAyMSAxNS40NjQ2IEMgMjAuMTEzMyAxNC45MTE3IDE5LjY3OTEgMTQuNDQ3OSAxOS4xMjYyIDE0LjQyOTMgTCAxOS4wMzM0IDE0LjQyOTMgTSAxOS42MTYgMTUuNTA5MiBDIDE5LjYwNDkgMTUuNjM1NCAxOS41NDkyIDE1Ljc1NzggMTkuNDYzOSAxNS44NTA2IEwgMTkuNDM0MiAxNS44ODAzIEMgMTkuMTk2NyAxNi4xMDI5IDE4LjgyNTYgMTYuMDkxOCAxOC42MDI5IDE1Ljg1NDMgQyAxOC4zODAzIDE1LjYyMDUgMTguMzkxNCAxNS4yNDU3IDE4LjYyODkgMTUuMDIzIEMgMTguODYyNyAxNC44MDA0IDE5LjIzMzggMTQuODExNSAxOS40NTY0IDE1LjA0OSBDIDE5LjQ1NjQgMTUuMDQ5IDE5LjQ1NjQgMTUuMDQ5IDE5LjQ2MDIgMTUuMDQ5IEMgMTkuNTUyOSAxNS4xNDkyIDE5LjYwODYgMTUuMjc5MSAxOS42MTYgMTUuNDE2NCBaIE0gMTkuNjE2IDE1LjUwOTIgTSAxNi44MTggMTUuMzE5OSBMIDE2LjgxOCAxNS43NzI3IEwgMTcuMjYzMyAxNS43NzI3IEwgMTcuMjYzMyAxNS45Mjg1IEMgMTcuMTU1NyAxNi4wMTAyIDE3LjAyOTUgMTYuMDUxIDE2Ljg5NTkgMTYuMDUxIEMgMTYuNjAyNyAxNi4wNjIxIDE2LjM1NDEgMTUuODMyIDE2LjM0MyAxNS41MzUyIEMgMTYuMzM5MyAxNS41MTI5IDE2LjMzOTMgMTUuNDkwNiAxNi4zNDMgMTUuNDcyMSBDIDE2LjMyMDcgMTUuMTc1MiAxNi41Mzk2IDE0LjkxNTQgMTYuODM2NSAxNC44OTMyIEwgMTYuODk1OSAxNC44OTMyIEMgMTcuMDcwMyAxNC44OTY5IDE3LjIyOTkgMTQuOTkzNCAxNy4zMTUyIDE1LjE0NTUgTCAxNy43NDU3IDE0LjkyMjkgQyAxNy41NzUgMTQuNjExMSAxNy4yNDg0IDE0LjQyNTYgMTYuODk1OSAxNC40MzY3IEMgMTYuMzI4MSAxNC40MjE5IDE1Ljg1NjggMTQuODc0NiAxNS44NDIgMTUuNDQyNCBDIDE1LjgyNzEgMTUuOTk1MyAxNi4yNDI4IDE2LjQ2MjkgMTYuNzkyIDE2LjUwMzcgTCAxNi44OTU5IDE2LjUwMzcgQyAxNy4xOTY1IDE2LjUwMzcgMTcuNDg1OSAxNi4zODg3IDE3LjcwMTIgMTYuMTczNCBDIDE3LjczNDYgMTYuMTQgMTcuNzU2OCAxNi4wODgxIDE3Ljc2MDUgMTYuMDM2MSBMIDE3Ljc2MDUgMTUuMzE5OSBaIE0gMTYuODE4IDE1LjMxOTkgTSAxNS4zMTg3IDE0LjQ4NSBMIDE1LjI3NzkgMTQuNDg1IEMgMTUuMTY2NiAxNC40OTI0IDE1LjA4MTIgMTQuNTg1MiAxNS4wNzc1IDE0LjY5NjUgTCAxNS4wNzc1IDE1LjU3OTcgTCAxNC4yNzYgMTQuNDg1IEwgMTMuNzQxNiAxNC40ODUgTCAxMy43NDE2IDE2LjQ3NzcgTCAxNC4yNTM3IDE2LjQ3NzcgTCAxNC4yNTM3IDE1LjMzMTEgTCAxNS4wOTI0IDE2LjQ3NzcgTCAxNS41ODIyIDE2LjQ3NzcgTCAxNS41ODIyIDE0LjQ4NSBaIE0gMTUuMzE4NyAxNC40ODUgTSAxMi44MTM5IDE0LjQ4NSBMIDEyLjE2MDcgMTQuNDg1IEwgMTEuNDExMSAxNi40ODE0IEwgMTEuOTkzNyAxNi40ODE0IEwgMTIuMDkzOSAxNi4xOTIgTCAxMi44NzMyIDE2LjE5MiBMIDEyLjkyNTIgMTYuMzQwNCBDIDEyLjk1ODYgMTYuNDIyMSAxMy4wMzI4IDE2LjQ3NCAxMy4xMTgyIDE2LjQ3NzcgTCAxMy41NTYxIDE2LjQ3NzcgWiBNIDEyLjIzODcgMTUuNzQzIEwgMTIuNDkxIDE0Ljk4OTYgTCAxMi43Mzk2IDE1Ljc0MyBaIE0gMTIuMjM4NyAxNS43NDMgTSAxMC4zOTQzIDE0LjQ4NSBMIDkuNTU1NyAxNC40ODUgTCA5LjU1NTcgMTYuMjY5OSBDIDkuNTYzMSAxNi4zODUgOS42NTU5IDE2LjQ3NzcgOS43NzA5IDE2LjQ4MTQgTCAxMC4zOTQzIDE2LjQ4MTQgQyAxMC45Mzk4IDE2LjUxMTEgMTEuNDExMSAxNi4wOTE4IDExLjQ0MDggMTUuNTM4OSBDIDExLjQ3NDIgMTQuOTg5NiAxMS4wNTQ5IDE0LjUxODQgMTAuNTA1NyAxNC40ODUgQyAxMC40Njg2IDE0LjQ4NSAxMC40MzE0IDE0LjQ4NSAxMC4zOTQzIDE0LjQ4NSBNIDEwLjM5NDMgMTYuMDM2MSBMIDEwLjA2NzggMTYuMDM2MSBMIDEwLjA2NzggMTQuOTIyOSBMIDEwLjM5NDMgMTQuOTIyOSBDIDEwLjY3NjQgMTQuOTA4IDEwLjkxMzkgMTUuMTIzMiAxMC45MzI0IDE1LjQwNTMgTCAxMC45MzI0IDE1LjQ2NDYgQyAxMC45MzI0IDE1Ljc2MTUgMTAuNjkxMiAxNi4wMzYxIDEwLjM5OCAxNi4wMzYxIEMgMTAuMzk0MyAxNi4wMzYxIDEwLjM5OCAxNi4wMzI0IDEwLjM5OCAxNi4wMzI0IEwgMTAuNDAxOCAxNi4wMjg3IE0gOC45MDYzIDE0LjQ4NSBDIDguNzk0OSAxNC40ODg3IDguNzAyMSAxNC41Nzc3IDguNjk4NCAxNC42ODkxIEwgOC42OTg0IDE1LjU3OTcgTCA3Ljg3ODMgMTQuNDg1IEwgNy4zNDM5IDE0LjQ4NSBMIDcuMzQzOSAxNi40Nzc3IEwgNy44NTIzIDE2LjQ3NzcgTCA3Ljg1MjMgMTUuMzMxMSBMIDguNjk0NyAxNi40ODUyIEwgOS4xODgzIDE2LjQ4NTIgTCA5LjE4ODMgMTQuNDg1IFogTSA4LjkwNjMgMTQuNDg1IE0gNi40MzExIDE0LjQ4NSBMIDUuNzc3OSAxNC40ODUgTCA1LjAzMiAxNi40Nzc3IEwgNS42MjU4IDE2LjQ3NzcgTCA1LjcyNiAxNi4xODgzIEwgNi41MTI3IDE2LjE4ODMgTCA2LjU2NDYgMTYuMzQwNCBDIDYuNTk4IDE2LjQxODQgNi42NzIzIDE2LjQ3MDMgNi43NTc2IDE2LjQ3NzcgTCA3LjE5MTggMTYuNDc3NyBaIE0gNS44NTU5IDE1Ljc0MyBMIDYuMTExOSAxNC45ODk2IEwgNi4zNjA1IDE1Ljc0MyBaIE0gNS44NTU5IDE1Ljc0MyBNIDUuMjIxMyAxNC45MDggTCA1LjIyMTMgMTQuNDU5IEwgMy42OTYxIDE0LjQ1OSBMIDMuNjk2MSAxNi40NDggTCA0LjIzNDIgMTYuNDQ4IEwgNC4yMzQyIDE1Ljc1NzggTCA0Ljc2ODYgMTUuNzU3OCBDIDQuODY1IDE1Ljc0NjcgNC45MzU1IDE1LjY2ODcgNC45NDMgMTUuNTcyMyBMIDQuOTQzIDE1LjMwNTEgTCA0LjI0MTYgMTUuMzA1MSBMIDQuMjQxNiAxNC45MDggWiBNIDUuMjIxMyAxNC45MDggTSAwLjM5NzEgMTUuMzk0MSBMIDMuMjQ3MSAxNS4zOTQxIEwgMy4yNDcxIDE1LjU1IEwgMC4zOTcxIDE1LjU1IFogTSAwLjM5NzEgMTUuMzk0MSBNIDIwLjU1NDkgMTUuMzk0MSBMIDIzLjQwNDkgMTUuMzk0MSBMIDIzLjQwNDkgMTUuNTUgTCAyMC41NTQ5IDE1LjU1IFogTSAyMC41NTQ5IDE1LjM5NDFcIjtcbn0pKHN2ZyB8fCAoZXhwb3J0cy5zdmcgPSBzdmcgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9lbnVtc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVmYXVsdEtleXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlZmF1bHRTb3VyY2VzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2N1c3RvbUFjdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZXZlbnRcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2tleVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2VydmljZURhdGFcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NvdXJjZVwiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYW5kcm9pZC10di1jYXJkLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9