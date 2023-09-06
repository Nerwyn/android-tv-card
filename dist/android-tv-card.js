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
class AndroidTVCard extends LitElement {
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
        const e = new Event(type, {
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
            this.volume_slider =
                yield this._helpers.createCardElement(slider_config);
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
        const data = {
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
        const info = this.getInfo(action);
        if ('key' in info) {
            const key = info.key;
            this.sendKey(key, longPress);
        }
        else if ('source' in info) {
            this.changeSource(info.source);
        }
        else if ('service' in info) {
            const service_data = JSON.parse(JSON.stringify(info.service_data || {}));
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
        const click_action = () => {
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
        const action = (_a = this._config.double_click_keycode) !== null && _a !== void 0 ? _a : 'back';
        this.onButtonClick(e, action, false);
    }
    /**
     * Event handler for touchpad swipe and long click start
     * @param {Event} e
     */
    onTouchStart(e) {
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
        window.initialX = e.touches[0].clientX;
        window.initialY = e.touches[0].clientY;
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
        var _a;
        action = action || ((_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.action) || '';
        const info = this.getInfo(action);
        let haptic = longPress ? 'medium' : 'light';
        if (action == 'center' && !longPress) {
            haptic = 'selection';
        }
        else if (action == this._config.double_click_keycode) {
            haptic = 'success';
        }
        this.fireHapticEvent(window, haptic);
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
    onButtonLongClickStart(e) {
        var _a;
        this.holdAction = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.action;
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
        var _a;
        e.stopImmediatePropagation();
        const keyToKey = {
            Backspace: 'delete',
            Delete: 'forward_delete',
            Enter: 'enter',
            ArrowLeft: 'left',
            ArrowRight: 'right',
        };
        const key = keyToKey[(_a = e.key) !== null && _a !== void 0 ? _a : ''];
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
            const data = {
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
        var _a;
        e.stopImmediatePropagation();
        e.preventDefault();
        const text = (_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('Text');
        if (text) {
            const data = {
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
        e.currentTarget.parentElement
            .children[0].style.color = 'var(--state-active-color)';
        e.currentTarget.style.zIndex = '9';
        e.currentTarget.parentElement.style.zIndex = '1';
    }
    /**
     * Event handler for on focus out events, clears input and resets icon color
     * @param {Event} e
     */
    onFocusOut(e) {
        e.currentTarget.value = '';
        e.currentTarget.parentElement
            .children[0].style.color = '';
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
        const text = prompt('Text Input: ');
        if (text) {
            const data = {
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
        const text = prompt('Google Assistant Search: ');
        if (text) {
            const data = {
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
        const info = this.getInfo(action);
        let icon = (_a = info === null || info === void 0 ? void 0 : info.icon) !== null && _a !== void 0 ? _a : '';
        let svg_path = (_c = (_b = info.svg_path) !== null && _b !== void 0 ? _b : this.customIcons[icon]) !== null && _c !== void 0 ? _c : '';
        // Use original icon if none provided for custom key or source
        if (!(icon || svg_path)) {
            const iconInfo = this.defaultKeys[action] || this.defaultSources[action] || {};
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
        const output = html `
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
            const theme = themes.themes[themeName];
            Object.keys(theme).forEach((key) => {
                const prefixedKey = '--' + key;
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
customElements.define('android-tv-card', AndroidTVCard);


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

/***/ "./src/models/interfaces/IConfig.ts":
/*!******************************************!*\
  !*** ./src/models/interfaces/IConfig.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/ICustomAction.ts":
/*!************************************************!*\
  !*** ./src/models/interfaces/ICustomAction.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/IKey.ts":
/*!***************************************!*\
  !*** ./src/models/interfaces/IKey.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/IServiceData.ts":
/*!***********************************************!*\
  !*** ./src/models/interfaces/IServiceData.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/models/interfaces/ISource.ts":
/*!******************************************!*\
  !*** ./src/models/interfaces/ISource.ts ***!
  \******************************************/
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
__exportStar(__webpack_require__(/*! ./IConfig */ "./src/models/interfaces/IConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./ICustomAction */ "./src/models/interfaces/ICustomAction.ts"), exports);
__exportStar(__webpack_require__(/*! ./IKey */ "./src/models/interfaces/IKey.ts"), exports);
__exportStar(__webpack_require__(/*! ./IServiceData */ "./src/models/interfaces/IServiceData.ts"), exports);
__exportStar(__webpack_require__(/*! ./ISource */ "./src/models/interfaces/ISource.ts"), exports);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYSxtQkFBTyxDQUFDLHFEQUFXO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLCtDQUFRO0FBQzdCLGFBQWEsbUJBQU8sQ0FBQywrREFBZ0I7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHFEQUFXOzs7Ozs7O1VDcEJoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL2FuZHJvaWQtdHYtY2FyZC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2RlZmF1bHRLZXlzLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZGVmYXVsdFNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9lbnVtcy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2VudW1zL3N2Zy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JQ29uZmlnLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JQ3VzdG9tQWN0aW9uLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JS2V5LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9JU2VydmljZURhdGEudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL0lTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vZGVsc18xID0gcmVxdWlyZShcIi4vbW9kZWxzXCIpO1xuY29uc3QgTGl0RWxlbWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdXN0b21FbGVtZW50cy5nZXQoJ2hhLXBhbmVsLWxvdmVsYWNlJykpO1xuY29uc3QgaHRtbCA9IExpdEVsZW1lbnQucHJvdG90eXBlLmh0bWw7XG5jbGFzcyBBbmRyb2lkVFZDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1c3RvbUtleXMgPSB7fTtcbiAgICAgICAgdGhpcy5jdXN0b21Tb3VyY2VzID0ge307XG4gICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hMb25nQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IGZhbHNlO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfaGFzczoge30sXG4gICAgICAgICAgICBfY29uZmlnOiB7fSxcbiAgICAgICAgICAgIF9hcHBzOiB7fSxcbiAgICAgICAgICAgIHRyaWdnZXI6IHt9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U3R1YkNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBnZXRDYXJkU2l6ZSgpIHtcbiAgICAgICAgbGV0IG51bVJvd3MgPSBPYmplY3Qua2V5cyh0aGlzLl9jb25maWcpLmZpbHRlcigoa2V5KSA9PiBrZXkuaW5jbHVkZXMoJ19yb3cnKSkubGVuZ3RoO1xuICAgICAgICBpZiAoJ3RpdGxlJyBpbiB0aGlzLl9jb25maWcpIHtcbiAgICAgICAgICAgIG51bVJvd3MgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVtUm93cztcbiAgICB9XG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IHRoZW1lOiAnZGVmYXVsdCcgfSwgY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tS2V5cyA9IGNvbmZpZy5jdXN0b21fa2V5cyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tU291cmNlcyA9IGNvbmZpZy5jdXN0b21fc291cmNlcyB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tSWNvbnMgPSBjb25maWcuY3VzdG9tX2ljb25zIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5cyA9IG1vZGVsc18xLmRlZmF1bHRLZXlzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0U291cmNlcyA9IG1vZGVsc18xLmRlZmF1bHRTb3VyY2VzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5hbHRfdm9sdW1lX2ljb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VBbHRWb2x1bWVJY29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkQ2FyZEhlbHBlcnMoKTtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMubG9hZEhhc3NIZWxwZXJzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlclZvbHVtZVNsaWRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyUmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0J1dHRvbkVuYWJsZWQocm93LCBidXR0b24pIHtcbiAgICAgICAgaWYgKCEodGhpcy5fY29uZmlnW3Jvd10gaW5zdGFuY2VvZiBBcnJheSkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWdbcm93XS5pbmNsdWRlcyhidXR0b24pO1xuICAgIH1cbiAgICBzZXQgaGFzcyhoYXNzKSB7XG4gICAgICAgIHRoaXMuX2hhc3MgPSBoYXNzO1xuICAgICAgICBpZiAodGhpcy52b2x1bWVfc2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuaGFzcyA9IGhhc3M7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhc3NSZXNvbHZlKSB7XG4gICAgICAgICAgICB0aGlzLl9oYXNzUmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBoYXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzcztcbiAgICB9XG4gICAgZmlyZUV2ZW50KHdpbmRvdywgdHlwZSwgZGV0YWlsKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgRXZlbnQodHlwZSwge1xuICAgICAgICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBlLmRldGFpbCA9IGRldGFpbDtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgICBmaXJlSGFwdGljRXZlbnQod2luZG93LCBkZXRhaWwpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5lbmFibGVfYnV0dG9uX2ZlZWRiYWNrID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbmFibGVfYnV0dG9uX2ZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudCh3aW5kb3csICdoYXB0aWMnLCBkZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRDYXJkSGVscGVycygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2hlbHBlcnMgPSB5aWVsZCB3aW5kb3cubG9hZENhcmRIZWxwZXJzKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faGVscGVyc1Jlc29sdmUpXG4gICAgICAgICAgICAgICAgdGhpcy5faGVscGVyc1Jlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRIYXNzSGVscGVycygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oZWxwZXJzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+ICh0aGlzLl9oZWxwZXJzUmVzb2x2ZSA9IHJlc29sdmUpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oYXNzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+ICh0aGlzLl9oYXNzUmVzb2x2ZSA9IHJlc29sdmUpKTtcbiAgICAgICAgICAgIHRoaXMuX2hlbHBlcnNSZXNvbHZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5faGFzc1Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJWb2x1bWVTbGlkZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgc2xpZGVyX2NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tOm15LXNsaWRlcicsXG4gICAgICAgICAgICAgICAgZW50aXR5OiB0aGlzLl9jb25maWcubWVkaWFfcGxheWVyX2lkLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxuICAgICAgICAgICAgICAgIG1haW5TbGlkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlTbGlkZXJDb2xvcjogJ3JnYig2MCwgNjAsIDYwKScsXG4gICAgICAgICAgICAgICAgbWFpblNsaWRlckNvbG9yT2ZmOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlTbGlkZXJDb2xvck9mZjogJ3JnYig2MCwgNjAsIDYwKScsXG4gICAgICAgICAgICAgICAgdGh1bWJXaWR0aDogJzBweCcsXG4gICAgICAgICAgICAgICAgdGh1bWJIb3Jpem9udGFsUGFkZGluZzogJzBweCcsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiAnMjVweCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zbGlkZXJfY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgc2xpZGVyX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc2xpZGVyX2NvbmZpZyksIHRoaXMuX2NvbmZpZy5zbGlkZXJfY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlciA9XG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5faGVscGVycy5jcmVhdGVDYXJkRWxlbWVudChzbGlkZXJfY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5zdHlsZSA9ICdmbGV4OiAwLjk7JztcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5vbnRvdWNoc3RhcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlSGFwdGljRXZlbnQod2luZG93LCAnbGlnaHQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoX2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csICdsaWdodCcpO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnZvbHVtZV9zbGlkZXIuaGFzcyA9IHRoaXMuX2hhc3M7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1c2VBbHRWb2x1bWVJY29ucygpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0S2V5cy52b2x1bWVfdXAuaWNvbiA9ICdtZGk6dm9sdW1lLWhpZ2gnO1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV9kb3duLmljb24gPSAnbWRpOnZvbHVtZS1tZWRpdW0nO1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV9tdXRlLmljb24gPSAnbWRpOnZvbHVtZS12YXJpYW50LW9mZic7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmQgY29tbWFuZCB0byBhbiBBbmRyb2lkIFRWIHJlbW90ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKi9cbiAgICBzZW5kS2V5KGtleSwgbG9uZ1ByZXNzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLnJlbW90ZV9pZCxcbiAgICAgICAgICAgIGNvbW1hbmQ6IGtleSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxvbmdQcmVzcykge1xuICAgICAgICAgICAgZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgncmVtb3RlJywgJ3NlbmRfY29tbWFuZCcsIGRhdGEpO1xuICAgIH1cbiAgICBnZXRJbmZvKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMuY3VzdG9tS2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmN1c3RvbVNvdXJjZXNbYWN0aW9uXSB8fFxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHt9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBlaXRoZXIgYSBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlIG9yIGEgY3VzdG9tIGtleSB0byBhbnkgc2VydmljZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgaWYgKCdrZXknIGluIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGluZm8ua2V5O1xuICAgICAgICAgICAgdGhpcy5zZW5kS2V5KGtleSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnc291cmNlJyBpbiBpbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNvdXJjZShpbmZvLnNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJ3NlcnZpY2UnIGluIGluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2VfZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaW5mby5zZXJ2aWNlX2RhdGEgfHwge30pKTtcbiAgICAgICAgICAgIGlmIChsb25nUHJlc3MgJiYgaW5mby5zZXJ2aWNlID09ICdyZW1vdGUuc2VuZF9jb21tYW5kJykge1xuICAgICAgICAgICAgICAgIHNlcnZpY2VfZGF0YS5ob2xkX3NlY3MgPSAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBbZG9tYWluLCBzZXJ2aWNlXSA9IGluZm8uc2VydmljZS5zcGxpdCgnLicsIDIpO1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZShkb21haW4sIHNlcnZpY2UsIHNlcnZpY2VfZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogT3BlbiBhbiBBbmRyb2lkIFRWIGFwcCB1c2luZyBpdCdzIGRlZXAgbGlua1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgQW5kcm9pZCBUViBkZWVwIGxpbmsgZm9yIGFuIGFwcFxuICAgICAqL1xuICAgIGNoYW5nZVNvdXJjZShzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgncmVtb3RlJywgJ3R1cm5fb24nLCB7XG4gICAgICAgICAgICBhY3Rpdml0eTogc291cmNlLFxuICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcucmVtb3RlX2lkLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgY2xpY2sgd2l0aCBubyBtb3ZlbWVudFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblRvdWNoQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBjbGlja19hY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgJ2NlbnRlcicsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChlLmRldGFpbCAmJiBlLmRldGFpbCA+IHRoaXMuY2xpY2tDb3VudCkge1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5lbmFibGVfZG91YmxlX2NsaWNrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja0NvdW50ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2hEb3VibGVDbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IHNldFRpbWVvdXQoY2xpY2tfYWN0aW9uLCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xpY2tfYWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgZG91YmxlIGNsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hEb3VibGVDbGljayhlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tUaW1lcik7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xpY2tDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IChfYSA9IHRoaXMuX2NvbmZpZy5kb3VibGVfY2xpY2tfa2V5Y29kZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2JhY2snO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgYWN0aW9uLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIGFuZCBsb25nIGNsaWNrIHN0YXJ0XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IHRydWU7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcGVhdCBob2xkIGFjdGlvbiBmb3IgZGlyZWN0aW9uYWwga2V5c1xuICAgICAgICAgICAgaWYgKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0J10uaW5jbHVkZXModGhpcy50b3VjaEFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLnRvdWNoQWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAoX2EgPSB0aGlzLl9jb25maWcubG9uZ19jbGlja19rZXljb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnY2VudGVyJywgdGhpcy5fY29uZmlnLmxvbmdfY2xpY2tfa2V5Y29kZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB3aW5kb3cuaW5pdGlhbFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgc3dpcGUgZW5kXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy50b3VjaExvbmdDbGljaykge1xuICAgICAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVyKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRvdWNoSW50ZXJ2YWwpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xpY2tUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRvdWNocGFkIHN3aXBlIG1vdmVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoIXdpbmRvdy5pbml0aWFsWCB8fCAhd2luZG93LmluaXRpYWxZKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCB8fCAwO1xuICAgICAgICBjb25zdCBjdXJyZW50WSA9IGUudG91Y2hlc1swXS5jbGllbnRZIHx8IDA7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gd2luZG93LmluaXRpYWxYIC0gY3VycmVudFg7XG4gICAgICAgIGNvbnN0IGRpZmZZID0gd2luZG93LmluaXRpYWxZIC0gY3VycmVudFk7XG4gICAgICAgIGxldCBhY3Rpb247XG4gICAgICAgIGlmIChNYXRoLmFicyhkaWZmWCkgPiBNYXRoLmFicyhkaWZmWSkpIHtcbiAgICAgICAgICAgIC8vIFNsaWRpbmcgaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICBhY3Rpb24gPSBkaWZmWCA+IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2xpZGluZyB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICBhY3Rpb24gPSBkaWZmWSA+IDAgPyAndXAnIDogJ2Rvd24nO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG91Y2hBY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCBhY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgd2luZG93LmluaXRpYWxYID0gdW5kZWZpbmVkO1xuICAgICAgICB3aW5kb3cuaW5pdGlhbFkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGJ1dHRvbiBjbGlja1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbl1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25CdXR0b25DbGljayhlLCBhY3Rpb24sIGxvbmdQcmVzcyA9IGZhbHNlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uIHx8ICgoX2EgPSBlLmN1cnJlbnRUYXJnZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY3Rpb24pIHx8ICcnO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5nZXRJbmZvKGFjdGlvbik7XG4gICAgICAgIGxldCBoYXB0aWMgPSBsb25nUHJlc3MgPyAnbWVkaXVtJyA6ICdsaWdodCc7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gJ2NlbnRlcicgJiYgIWxvbmdQcmVzcykge1xuICAgICAgICAgICAgaGFwdGljID0gJ3NlbGVjdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWN0aW9uID09IHRoaXMuX2NvbmZpZy5kb3VibGVfY2xpY2tfa2V5Y29kZSkge1xuICAgICAgICAgICAgaGFwdGljID0gJ3N1Y2Nlc3MnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgaGFwdGljKTtcbiAgICAgICAgY29uc3Qga2V5ID0gJ2tleScgaW4gaW5mbyA/IGluZm8ua2V5IDogJyc7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdLRVlCT0FSRCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vbktleWJvYXJkUHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RFWFRCT1gnOlxuICAgICAgICAgICAgICAgIHRoaXMub25UZXh0Ym94UHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1NFQVJDSCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vblNlYXJjaFByZXNzKGUsIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbihhY3Rpb24sIGxvbmdQcmVzcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGxvbmcgY2xpY2sgc3RhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25CdXR0b25Mb25nQ2xpY2tTdGFydChlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gKF9hID0gZS5jdXJyZW50VGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWN0aW9uO1xuICAgICAgICB0aGlzLmhvbGRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwZWF0IGhvbGQgYWN0aW9uIGZvciBkaXJlY3Rpb25hbCBrZXlzIGFuZCB2b2x1bWVcbiAgICAgICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgaWYgKFsndXAnLCAnZG93bicsICdsZWZ0JywgJ3JpZ2h0JywgJ3ZvbHVtZV91cCcsICd2b2x1bWVfZG93bicsICdkZWxldGUnXS5pbmNsdWRlcyh0aGlzLmhvbGRBY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob2xkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLmhvbGRBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMuaG9sZEFjdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGJ1dHRvbiBsb25nIGNsaWNrIGVuZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkxvbmdDbGlja0VuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLmhvbGRMb25nQ2xpY2spIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5ob2xkVGltZXIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaG9sZEludGVydmFsKTtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleWJvYXJkIGtleWRvd24gZXZlbnRzLCB1c2VkIGZvciBub24tYWxwaGFudW1lcmljYWwga2V5c1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbktleURvd24oZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGtleVRvS2V5ID0ge1xuICAgICAgICAgICAgQmFja3NwYWNlOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIERlbGV0ZTogJ2ZvcndhcmRfZGVsZXRlJyxcbiAgICAgICAgICAgIEVudGVyOiAnZW50ZXInLFxuICAgICAgICAgICAgQXJyb3dMZWZ0OiAnbGVmdCcsXG4gICAgICAgICAgICBBcnJvd1JpZ2h0OiAncmlnaHQnLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlUb0tleVsoX2EgPSBlLmtleSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyddO1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VuZEFjdGlvbihrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGtleWJvYXJkIGlucHV0IGV2ZW50cywgdXNlZCBmb3IgYWxwaGFudW1lcmljYWwga2V5cyBhbmQgd29ya3Mgb24gYWxsIHBsYXRmb3Jtc1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbklucHV0KGUpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5hZGJfaWQsXG4gICAgICAgICAgICAgICAgY29tbWFuZDogJ2lucHV0IHRleHQgXCInICsgZS5kYXRhICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBwYXN0ZSBldmVudHMsIGFzIG9uSW5wdXQgcGFzdGUgZXZlbnRzIHJldHVybiBudWxsIGZvciBkYXRhIGZpZWxkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uUGFzdGUoZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IChfYSA9IGUuY2xpcGJvYXJkRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldERhdGEoJ1RleHQnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIHRleHQgKyAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuZm9jdXMoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igb24gZm9jdXMgZXZlbnRzLCBjbGVhcnMgaW5wdXQgYW5kIGNoYW5nZXMgaWNvbiBjb2xvclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkZvY3VzKGUpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAuY2hpbGRyZW5bMF0uc3R5bGUuY29sb3IgPSAndmFyKC0tc3RhdGUtYWN0aXZlLWNvbG9yKSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnOSc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3Igb24gZm9jdXMgb3V0IGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCByZXNldHMgaWNvbiBjb2xvclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkZvY3VzT3V0KGUpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgICAuY2hpbGRyZW5bMF0uc3R5bGUuY29sb3IgPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnpJbmRleCA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS56SW5kZXggPSAnJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgY2xpY2tpbmcgdGhlIGtleWJvYXJkIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25LZXlib2FyZFByZXNzKGUsIF9sb25ncHJlc3MpIHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzFdLmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIHNlbmRpbmcgYnVsayB0ZXh0IHZpYSBsZWdhY3kgcHJvbXB0IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25UZXh0Ym94UHJlc3MoZSwgX2xvbmdwcmVzcykge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcHJvbXB0KCdUZXh0IElucHV0OiAnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIHRleHQgKyAnXCInLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2hhc3MuY2FsbFNlcnZpY2UoJ2FuZHJvaWR0dicsICdhZGJfY29tbWFuZCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGdsb2JhbCBHb29nbGUgQXNzaXN0YW50IHNlYXJjaFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtsb25nUHJlc3M9ZmFsc2VdXG4gICAgICovXG4gICAgb25TZWFyY2hQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBwcm9tcHQoJ0dvb2dsZSBBc3Npc3RhbnQgU2VhcmNoOiAnKTtcbiAgICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdhbSBzdGFydCAtYSBcImFuZHJvaWQuc2VhcmNoLmFjdGlvbi5HTE9CQUxfU0VBUkNIXCIgLS1lcyBxdWVyeSBcIicgK1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ICtcbiAgICAgICAgICAgICAgICAgICAgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidWlsZEljb25CdXR0b24oYWN0aW9uKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2Y7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgbGV0IGljb24gPSAoX2EgPSBpbmZvID09PSBudWxsIHx8IGluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluZm8uaWNvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGxldCBzdmdfcGF0aCA9IChfYyA9IChfYiA9IGluZm8uc3ZnX3BhdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHRoaXMuY3VzdG9tSWNvbnNbaWNvbl0pICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6ICcnO1xuICAgICAgICAvLyBVc2Ugb3JpZ2luYWwgaWNvbiBpZiBub25lIHByb3ZpZGVkIGZvciBjdXN0b20ga2V5IG9yIHNvdXJjZVxuICAgICAgICBpZiAoIShpY29uIHx8IHN2Z19wYXRoKSkge1xuICAgICAgICAgICAgY29uc3QgaWNvbkluZm8gPSB0aGlzLmRlZmF1bHRLZXlzW2FjdGlvbl0gfHwgdGhpcy5kZWZhdWx0U291cmNlc1thY3Rpb25dIHx8IHt9O1xuICAgICAgICAgICAgaWNvbiA9IChfZCA9IGljb25JbmZvID09PSBudWxsIHx8IGljb25JbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpY29uSW5mby5pY29uKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAgICAgICAgIHN2Z19wYXRoID0gKF9mID0gaWNvbkluZm8gPT09IG51bGwgfHwgaWNvbkluZm8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGljb25JbmZvLnN2Z19wYXRoKSAhPT0gbnVsbCAmJiBfZiAhPT0gdm9pZCAwID8gX2YgOiAnJztcbiAgICAgICAgfVxuICAgICAgICBsZXQga0lucHV0ID0gaHRtbCBgYDtcbiAgICAgICAgaWYgKCdrZXknIGluIGluZm8gJiYgaW5mby5rZXkgPT0gJ0tFWUJPQVJEJykge1xuICAgICAgICAgICAga0lucHV0ID0gaHRtbCBgXHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRzcGVsbGNoZWNrPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0YXV0b2NvcnJlY3Q9XCJvZmZcIlxyXG5cdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuXHRcdFx0XHRcdGF1dG9jYXBpdGFsaXplPVwib2ZmXCJcclxuXHRcdFx0XHRcdG9uY2hhbmdlPVwidGhpcy52YWx1ZT0nJ1wiXHJcblx0XHRcdFx0XHRvbmtleXVwPVwidGhpcy52YWx1ZT0nJ1wiXHJcblx0XHRcdFx0XHRAZm9jdXM9XCIke3RoaXMub25Gb2N1c31cIlxyXG5cdFx0XHRcdFx0QGZvY3Vzb3V0PVwiJHt0aGlzLm9uRm9jdXNPdXR9XCJcclxuXHRcdFx0XHRcdEBpbnB1dD1cIiR7dGhpcy5vbklucHV0fVwiXHJcblx0XHRcdFx0XHRAcGFzdGU9XCIke3RoaXMub25QYXN0ZX1cIlxyXG5cdFx0XHRcdFx0QGtleWRvd249XCIke3RoaXMub25LZXlEb3dufVwiXHJcblx0XHRcdFx0PjwvaW5wdXQ+XHJcblx0XHRcdGA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWwgYFxyXG5cdFx0XHQ8aGEtaWNvbi1idXR0b25cclxuXHRcdFx0XHQuYWN0aW9uPVwiJHthY3Rpb259XCJcclxuXHRcdFx0XHRAY2xpY2s9XCIke3RoaXMub25CdXR0b25DbGlja31cIlxyXG5cdFx0XHRcdEB0b3VjaHN0YXJ0PVwiJHt0aGlzLm9uQnV0dG9uTG9uZ0NsaWNrU3RhcnR9XCJcclxuXHRcdFx0XHRAdG91Y2hlbmQ9XCIke3RoaXMub25CdXR0b25Mb25nQ2xpY2tFbmR9XCJcclxuXHRcdFx0XHR0aXRsZT1cIiR7YWN0aW9ufVwiXHJcblx0XHRcdFx0LnBhdGg9XCIke3N2Z19wYXRofVwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8aGEtaWNvbiAuaWNvbj1cIiR7IXN2Z19wYXRoID8gaWNvbiA6ICcnfVwiPjwvaGEtaWNvbj5cclxuXHRcdFx0XHQke2tJbnB1dH1cclxuXHRcdFx0PC9oYS1pY29uLWJ1dHRvbj5cclxuXHRcdGA7XG4gICAgfVxuICAgIGJ1aWxkUm93KGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwgYCA8ZGl2IGNsYXNzPVwicm93XCI+JHtjb250ZW50fTwvZGl2PiBgO1xuICAgIH1cbiAgICBidWlsZEJ1dHRvbnNGcm9tQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB0aGlzLmJ1aWxkSWNvbkJ1dHRvbihhY3Rpb24pKTtcbiAgICB9XG4gICAgdHJpZ2dlclJlbmRlcigpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyID0gTWF0aC5yYW5kb20oKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5faGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWwgYGA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBbXTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fY29uZmlnKS5mb3JFYWNoKChyb3dfbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvd19uYW1lLmluY2x1ZGVzKCdfcm93JykpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJvd19uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZV9yb3cnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ2J1dHRvbnMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ3ZvbHVtZV9kb3duJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCd2b2x1bWVfbXV0ZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndm9sdW1lX3VwJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9jb25maWcudm9sdW1lX3JvdyA9PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy52b2x1bWVfc2xpZGVyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlICduYXZpZ2F0aW9uX3Jvdyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fY29uZmlnLm5hdmlnYXRpb25fcm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYnV0dG9ucyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFt0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndXAnKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ2xlZnQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdjZW50ZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdyaWdodCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFt0aGlzLmJ1aWxkSWNvbkJ1dHRvbignZG93bicpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3VjaHBhZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b3VjaHBhZCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0b3VjaGFyZWFcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwidG91Y2hhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cIiR7dGhpcy5vblRvdWNoQ2xpY2t9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaHN0YXJ0PVwiJHt0aGlzLm9uVG91Y2hTdGFydH1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QHRvdWNobW92ZT1cIiR7dGhpcy5vblRvdWNoTW92ZX1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QHRvdWNoZW5kPVwiJHt0aGlzLm9uVG91Y2hFbmR9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90b3VjaGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0b3VjaHBhZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKHRoaXMuYnVpbGRCdXR0b25zRnJvbUFjdGlvbnModGhpcy5fY29uZmlnW3Jvd19uYW1lXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnQubWFwKHRoaXMuYnVpbGRSb3cpO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSBodG1sIGBcclxuXHRcdFx0JHt0aGlzLnJlbmRlclN0eWxlKCl9XHJcblx0XHRcdDxoYS1jYXJkIC5oZWFkZXI9XCIke3RoaXMuX2NvbmZpZy50aXRsZX1cIj4ke2NvbnRlbnR9PC9oYS1jYXJkPlxyXG5cdFx0YDtcbiAgICAgICAgcmV0dXJuIGh0bWwgYCR7b3V0cHV0fWA7XG4gICAgfVxuICAgIHJlbmRlclN0eWxlKCkge1xuICAgICAgICByZXR1cm4gaHRtbCBgXHJcblx0XHRcdDxzdHlsZT5cclxuXHRcdFx0XHQucmVtb3RlIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDE2cHggMHB4IDE2cHggMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbWcsXHJcblx0XHRcdFx0aGEtaWNvbi1idXR0b24ge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ4cHg7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQ4cHg7XHJcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0XHQtLW1kYy1pY29uLXNpemU6IDEwMCU7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlucHV0IHtcclxuXHRcdFx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHRcdFx0XHRmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcblx0XHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IC1tb3otYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHR3aWR0aDogZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiBmaWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LnJvdyB7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdFx0cGFkZGluZzogOHB4IDM2cHggOHB4IDM2cHg7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmRpYWdvbmFsIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0b3VjaGFyZWEge1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRcdFx0XHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdFx0XHRcdGhlaWdodDogJHt0aGlzLl9jb25maWdbJ3RvdWNocGFkX2hlaWdodCddIHx8ICcyNTBweCd9O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogIzZkNzY3ZTtcclxuXHRcdFx0XHRcdHRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdDwvc3R5bGU+XHJcblx0XHRgO1xuICAgIH1cbiAgICBhcHBseVRoZW1lc09uRWxlbWVudChlbGVtZW50LCB0aGVtZXMsIGxvY2FsVGhlbWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBlbGVtZW50Ll90aGVtZXMgPSAoX2EgPSBlbGVtZW50Ll90aGVtZXMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgICAgICBsZXQgdGhlbWVOYW1lID0gdGhlbWVzLmRlZmF1bHRfdGhlbWU7XG4gICAgICAgIGlmIChsb2NhbFRoZW1lID09PSAnZGVmYXVsdCcgfHxcbiAgICAgICAgICAgIChsb2NhbFRoZW1lICYmIHRoZW1lcy50aGVtZXNbbG9jYWxUaGVtZV0pKSB7XG4gICAgICAgICAgICB0aGVtZU5hbWUgPSBsb2NhbFRoZW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGVsZW1lbnQuX3RoZW1lcyk7XG4gICAgICAgIGlmICh0aGVtZU5hbWUgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29uc3QgdGhlbWUgPSB0aGVtZXMudGhlbWVzW3RoZW1lTmFtZV07XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGVtZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZml4ZWRLZXkgPSAnLS0nICsga2V5O1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuX3RoZW1lc1twcmVmaXhlZEtleV0gPSAnJztcbiAgICAgICAgICAgICAgICBzdHlsZXNbcHJlZml4ZWRLZXldID0gdGhlbWVba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LnVwZGF0ZVN0eWxlcykge1xuICAgICAgICAgICAgZWxlbWVudC51cGRhdGVTdHlsZXMoc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAgICAgICAgIC8vIGltcGxlbWVudCB1cGRhdGVTdHlsZXMoKSBtZXRob2Qgb2YgUG9sZW1lciBlbGVtZW50c1xuICAgICAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlU3VidHJlZShcbiAgICAgICAgICAgIC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqL1xuICAgICAgICAgICAgZWxlbWVudCwgc3R5bGVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPXRoZW1lLWNvbG9yXScpO1xuICAgICAgICBpZiAobWV0YSkge1xuICAgICAgICAgICAgaWYgKCFtZXRhLmhhc0F0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JykpIHtcbiAgICAgICAgICAgICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50JywgbWV0YS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aGVtZUNvbG9yID0gc3R5bGVzWyctLXByaW1hcnktY29sb3InXSB8fFxuICAgICAgICAgICAgICAgIG1ldGEuZ2V0QXR0cmlidXRlKCdkZWZhdWx0LWNvbnRlbnQnKTtcbiAgICAgICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgdGhlbWVDb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FuZHJvaWQtdHYtY2FyZCcsIEFuZHJvaWRUVkNhcmQpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRLZXlzID0gdm9pZCAwO1xuLyoqXG4gKiBUaGlzIGlzIHRoZSBsaXN0IG9mIG1vc3QgY29tbW9uIGNvbW1hbmRzIGZyb20gdGhlIEFuZHJvaWQgVFYgUmVtb3RlIGludGVncmF0aW9uIHBhZ2UuXG4gKiBOb3QgYWxsIGFyZSBlbnN1cmVkIHRvIHdvcmssIGFuZCBpZiB0aGV5IGRvIG5vdCBpdCBpcyBsaWtlbHkgYW4gaXNzdWUgd2l0aCB0aGUgdW5kZXJseWluZyBwYWNrYWdlIHVzZWQgYnkgdGhlIEFuZHJvaWQgVFYgUmVtb3RlIGludGVncmF0aW9uIG9yIHRoZSBBbmRyb2lkIFRWIFJlbW90ZSBQcm90b2NvbCBWMiBpdHNlbGYuXG4gKiBodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9pbnRlZ3JhdGlvbnMvYW5kcm9pZHR2X3JlbW90ZS8jcmVtb3RlXG4gKi9cbmV4cG9ydHMuZGVmYXVsdEtleXMgPSB7XG4gICAgcG93ZXI6IHsga2V5OiAnUE9XRVInLCBpY29uOiAnbWRpOnBvd2VyJyB9LFxuICAgIHZvbHVtZV91cDogeyBrZXk6ICdWT0xVTUVfVVAnLCBpY29uOiAnbWRpOnZvbHVtZS1wbHVzJyB9LFxuICAgIHZvbHVtZV9kb3duOiB7IGtleTogJ1ZPTFVNRV9ET1dOJywgaWNvbjogJ21kaTp2b2x1bWUtbWludXMnIH0sXG4gICAgdm9sdW1lX211dGU6IHsga2V5OiAnTVVURScsIGljb246ICdtZGk6dm9sdW1lLW11dGUnIH0sXG4gICAgYmFjazogeyBrZXk6ICdCQUNLJywgaWNvbjogJ21kaTprZXlib2FyZC1iYWNrc3BhY2UnIH0sXG4gICAgaG9tZTogeyBrZXk6ICdIT01FJywgaWNvbjogJ21kaTpob21lJyB9LFxuICAgIHVwOiB7IGtleTogJ0RQQURfVVAnLCBpY29uOiAnbWRpOmNoZXZyb24tdXAnIH0sXG4gICAgbGVmdDogeyBrZXk6ICdEUEFEX0xFRlQnLCBpY29uOiAnbWRpOmNoZXZyb24tbGVmdCcgfSxcbiAgICBjZW50ZXI6IHsga2V5OiAnRFBBRF9DRU5URVInLCBpY29uOiAnbWRpOmNoZWNrYm94LWJsYW5rLWNpcmNsZScgfSxcbiAgICByaWdodDogeyBrZXk6ICdEUEFEX1JJR0hUJywgaWNvbjogJ21kaTpjaGV2cm9uLXJpZ2h0JyB9LFxuICAgIGRvd246IHsga2V5OiAnRFBBRF9ET1dOJywgaWNvbjogJ21kaTpjaGV2cm9uLWRvd24nIH0sXG4gICAgcGxheTogeyBrZXk6ICdNRURJQV9QTEFZJywgaWNvbjogJ21kaTpwbGF5JyB9LFxuICAgIHBhdXNlOiB7IGtleTogJ01FRElBX1BBVVNFJywgaWNvbjogJ21kaTpwYXVzZScgfSxcbiAgICBwbGF5X3BhdXNlOiB7IGtleTogJ01FRElBX1BMQVlfUEFVU0UnLCBpY29uOiAnbWRpOnBsYXktcGF1c2UnIH0sXG4gICAgc3RvcDogeyBrZXk6ICdNRURJQV9TVE9QJywgaWNvbjogJ21kaTpzdG9wJyB9LFxuICAgIHJld2luZDogeyBrZXk6ICdNRURJQV9SRVdJTkQnLCBpY29uOiAnbWRpOnJld2luZCcgfSxcbiAgICBmYXN0X2ZvcndhcmQ6IHsga2V5OiAnTUVESUFfRkFTVF9GT1JXQVJEJywgaWNvbjogJ21kaTpmYXN0LWZvcndhcmQnIH0sXG4gICAgcHJldmlvdXM6IHsga2V5OiAnTUVESUFfUFJFVklPVVMnLCBpY29uOiAnbWRpOnNraXAtcHJldmlvdXMnIH0sXG4gICAgcmVjb3JkOiB7IGtleTogJ01FRElBX1JFQ09SRCcsIGljb246ICdtZGk6cmVjb3JkJyB9LFxuICAgIG5leHQ6IHsga2V5OiAnTUVESUFfTkVYVCcsIGljb246ICdtZGk6c2tpcC1uZXh0JyB9LFxuICAgIG1lbnU6IHsga2V5OiAnTUVOVScsIGljb246ICdtZGk6bWVudScgfSxcbiAgICBhOiB7IGtleTogJ0JVVFRPTl9BJywgaWNvbjogJ21kaTphbHBoYS1hLWNpcmNsZScgfSxcbiAgICBiOiB7IGtleTogJ0JVVFRPTl9CJywgaWNvbjogJ21kaTphbHBoYS1CLWNpcmNsZScgfSxcbiAgICB4OiB7IGtleTogJ0JVVFRPTl9YJywgaWNvbjogJ21kaTphbHBoYS14LWNpcmNsZScgfSxcbiAgICB5OiB7IGtleTogJ0JVVFRPTl9ZJywgaWNvbjogJ21kaTphbHBoYS15LWNpcmNsZScgfSxcbiAgICBuMDogeyBrZXk6ICcwJywgaWNvbjogJ21kaTpudW1lcmljLTAnIH0sXG4gICAgbjE6IHsga2V5OiAnMScsIGljb246ICdtZGk6bnVtZXJpYy0xJyB9LFxuICAgIG4yOiB7IGtleTogJzInLCBpY29uOiAnbWRpOm51bWVyaWMtMicgfSxcbiAgICBuMzogeyBrZXk6ICczJywgaWNvbjogJ21kaTpudW1lcmljLTMnIH0sXG4gICAgbjQ6IHsga2V5OiAnNCcsIGljb246ICdtZGk6bnVtZXJpYy00JyB9LFxuICAgIG41OiB7IGtleTogJzUnLCBpY29uOiAnbWRpOm51bWVyaWMtNScgfSxcbiAgICBuNjogeyBrZXk6ICc2JywgaWNvbjogJ21kaTpudW1lcmljLTYnIH0sXG4gICAgbjc6IHsga2V5OiAnNycsIGljb246ICdtZGk6bnVtZXJpYy03JyB9LFxuICAgIG44OiB7IGtleTogJzgnLCBpY29uOiAnbWRpOm51bWVyaWMtOCcgfSxcbiAgICBuOTogeyBrZXk6ICc5JywgaWNvbjogJ21kaTpudW1lcmljLTknIH0sXG4gICAgY2hhbm5lbF91cDogeyBrZXk6ICdDSEFOTkVMX1VQJywgaWNvbjogJ21kaTphcnJvdy11cC1jaXJjbGUnIH0sXG4gICAgY2hhbm5lbF9kb3duOiB7IGtleTogJ0NIQU5ORUxfRE9XTicsIGljb246ICdtZGk6YXJyb3ctZG93bi1jaXJjbGUnIH0sXG4gICAgZjE6IHsga2V5OiAnRjEnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxJyB9LFxuICAgIGYyOiB7IGtleTogJ0YyJywgaWNvbjogJ21kaTprZXlib2FyZC1mMicgfSxcbiAgICBmMzogeyBrZXk6ICdGMycsIGljb246ICdtZGk6a2V5Ym9hcmQtZjMnIH0sXG4gICAgZjQ6IHsga2V5OiAnRjQnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY0JyB9LFxuICAgIGY1OiB7IGtleTogJ0Y1JywgaWNvbjogJ21kaTprZXlib2FyZC1mNScgfSxcbiAgICBmNjogeyBrZXk6ICdGNicsIGljb246ICdtZGk6a2V5Ym9hcmQtZjYnIH0sXG4gICAgZjc6IHsga2V5OiAnRjcnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY3JyB9LFxuICAgIGY4OiB7IGtleTogJ0Y4JywgaWNvbjogJ21kaTprZXlib2FyZC1mOCcgfSxcbiAgICBmOTogeyBrZXk6ICdGOScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjknIH0sXG4gICAgZjEwOiB7IGtleTogJ0YxMCcsIGljb246ICdtZGk6a2V5Ym9hcmQtZjEwJyB9LFxuICAgIGYxMTogeyBrZXk6ICdGMTEnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxMScgfSxcbiAgICBmMTI6IHsga2V5OiAnRjEyJywgaWNvbjogJ21kaTprZXlib2FyZC1mMTInIH0sXG4gICAgdHY6IHsga2V5OiAnVFYnLCBpY29uOiAnbWRpOnRlbGV2aXNpb24tYm94JyB9LFxuICAgIHJlZDogeyBrZXk6ICdQUk9HX1JFRCcsIGljb246ICdtZGk6YWxwaGEtci1ib3gnIH0sXG4gICAgZ3JlZW46IHsga2V5OiAnUFJPR19HUkVFTicsIGljb246ICdtZGk6YWxwaGEtZy1ib3gnIH0sXG4gICAgeWVsbG93OiB7IGtleTogJ1BST0dfWUVMTE9XJywgaWNvbjogJ21kaTphbHBoYS15LWJveCcgfSxcbiAgICBibHVlOiB7IGtleTogJ1BST0dfQkxVRScsIGljb246ICdtZGk6YWxwaGEtYi1ib3gnIH0sXG4gICAgYnV0dG9uX21vZGU6IHsga2V5OiAnQlVUVE9OX01PREUnLCBpY29uOiAnbWRpOmdlc3R1cmUtdGFwLWJ1dG9uJyB9LFxuICAgIGV4cGxvcmVyOiB7IGtleTogJ0VYUExPUkVSJywgaWNvbjogJ21kaTpmb2xkZXItbXVsdGlwbGUnIH0sXG4gICAgaW5mbzogeyBrZXk6ICdJTkZPJywgaWNvbjogJ21kaTppbmZvcm1hdGlvbicgfSxcbiAgICBndWlkZTogeyBrZXk6ICdHVUlERScsIGljb246ICdtZGk6dGVsZXZpc2lvbi1ndWlkZScgfSxcbiAgICB0ZWxldGV4dDogeyBrZXk6ICdUVl9URUxFVEVYVCcsIGljb246ICdtZGk6Y2FyZC10ZXh0JyB9LFxuICAgIGNhcHRpb25zOiB7IGtleTogJ0NBUFRJT05TJywgaWNvbjogJ21kaTpjbG9zZWQtY2FwdGlvbicgfSxcbiAgICBkdnI6IHsga2V5OiAnRFZSJywgaWNvbjogJ21kaTphdWRpby12aWRlbycgfSxcbiAgICBhdWRpb190cmFjazogeyBrZXk6ICdNRURJQV9BVURJT19UUkFDSycsIGljb246ICdtZGk6d2F2ZWZvcm0nIH0sXG4gICAgc2V0dGluZ3M6IHsga2V5OiAnU0VUVElOR1MnLCBpY29uOiAnbWRpOmNvZycgfSxcbiAgICBkZWxldGU6IHsga2V5OiAnREVMJywgaWNvbjogJ21kaTpiYWNrc3BhY2UnIH0sXG4gICAgZm9yd2FyZF9kZWxldGU6IHsga2V5OiAnRk9XQVJEX0RFTCcsIGljb246ICdtZGk6YmFja3NwYWNlLXJldmVyc2UnIH0sXG4gICAgZW50ZXI6IHsga2V5OiAnRU5URVInLCBpY29uOiAnbWRpOm1hZ25pZnknIH0sXG4gICAga2V5Ym9hcmQ6IHsga2V5OiAnS0VZQk9BUkQnLCBpY29uOiAnbWRpOmtleWJvYXJkJyB9LFxuICAgIHNlYXJjaDogeyBrZXk6ICdTRUFSQ0gnLCBpY29uOiAnbWRpOmdvb2dsZS1hc3Npc3RhbnQnIH0sXG4gICAgdGV4dGJveDogeyBrZXk6ICdURVhUQk9YJywgaWNvbjogJ21kaTp0ZXh0LWJveCcgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdFNvdXJjZXMgPSB2b2lkIDA7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuLyoqXG4gKiBUaGlzIGlzIGEgbGlzdCBvZiBjb21tb24gc3RyZWFtaW5nIGFwcHMsIHRoZWlyIGljb25zLCBhbmQgdGhlIGRlZXAgbGlua3MgdG8gb3BlbiB0aGVtIGluIEFuZHJvaWQgVFYsIG1vc3RseSBjb2xsZWN0ZWQgZnJvbSB0aGUgZm9sbG93aW5nIEhvbWUgQXNzaXN0YW50IENvbW11bml0eSBGb3J1bSBndWlkZS5cbiAqIE5vdCBhbGwgaGF2ZSBiZWVuIHRlc3RlZCwgaWYgYW55IGRvIG5vdCB3b3JrIHBsZWFzZSBsZXQgbWUga25vdyFcbiAqIGh0dHBzOi8vY29tbXVuaXR5LmhvbWUtYXNzaXN0YW50LmlvL3QvYW5kcm9pZC10di1yZW1vdGUtYXBwLWxpbmtzLWRlZXAtbGlua2luZy1ndWlkZS81Njc5MjFcbiAqL1xuZXhwb3J0cy5kZWZhdWx0U291cmNlcyA9IHtcbiAgICBhcHBsZXR2OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vdHYuYXBwbGUuY29tJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5BUFBMRVRWLFxuICAgIH0sXG4gICAgY3J1bmNoeXJvbGw6IHtcbiAgICAgICAgc291cmNlOiAnY3J1bmNoeXJvbGw6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkNSVU5DSFlST0xMLFxuICAgIH0sXG4gICAgZGlzbmV5OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vd3d3LmRpc25leXBsdXMuY29tJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5ESVNORVksXG4gICAgfSxcbiAgICBlbWJ5OiB7XG4gICAgICAgIHNvdXJjZTogJ2VtYnlhdHY6Ly90di5lbWJ5LmVtYnlhdHYvc3RhcnRhcHAnLFxuICAgICAgICBpY29uOiAnbWRpOmVtYnknLFxuICAgIH0sXG4gICAgZm94c3BvcnRzOiB7XG4gICAgICAgIHNvdXJjZTogJ2ZveHNwb3J0czovL2xpdmUnLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLkZPWFNQT1JUUyxcbiAgICB9LFxuICAgIGh1bHU6IHtcbiAgICAgICAgc291cmNlOiAnaHVsdTovLycsXG4gICAgICAgIGljb246ICdtZGk6aHVsdScsXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9wbGF5Lm1heC5jb20nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLk1BWCxcbiAgICB9LFxuICAgIG1sYnR2OiB7XG4gICAgICAgIHNvdXJjZTogJ21sYmF0YmF0Oi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5NTEJUVixcbiAgICB9LFxuICAgIG5iYToge1xuICAgICAgICBzb3VyY2U6ICdnYW1ldGltZTovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuTkJBLFxuICAgIH0sXG4gICAgbmV0ZmxpeDogeyBzb3VyY2U6ICduZXRmbGl4Oi8vJywgaWNvbjogJ21kaTpuZXRmbGl4JyB9LFxuICAgIHBsZXg6IHtcbiAgICAgICAgc291cmNlOiAncGxleDovLycsXG4gICAgICAgIGljb246ICdtZGk6cGxleCcsXG4gICAgfSxcbiAgICBwcmltZXZpZGVvOiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vYXBwLnByaW1ldmlkZW8uY29tJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5QUklNRVZJREVPLFxuICAgIH0sXG4gICAgcGlhOiB7XG4gICAgICAgIHNvdXJjZTogJ3BpYXZwbjovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuUElBLFxuICAgIH0sXG4gICAgc3BvdGlmeTogeyBzb3VyY2U6ICdzcG90aWZ5Oi8vJywgaWNvbjogJ21kaTpzcG90aWZ5JyB9LFxuICAgIHN1cmZzaGFyazoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3N1cmZzaGFyay5jb20vbG9jYXRpb25zLXVsJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5TVVJGU0hBUkssXG4gICAgfSxcbiAgICB2dWR1OiB7XG4gICAgICAgIHNvdXJjZTogJ3Z1ZHVhcHA6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlZVRFUsXG4gICAgfSxcbiAgICB5b3V0dWJlOiB7IHNvdXJjZTogJ3ZuZC55b3V0dWJlOi8vJywgaWNvbjogJ21kaTp5b3V0dWJlJyB9LFxuICAgIHlvdXR1YmV0djoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3R2LnlvdXR1YmUuY29tJyxcbiAgICAgICAgaWNvbjogJ21kaTp5b3V0dWJlLXR2JyxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc3ZnXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdmcgPSB2b2lkIDA7XG52YXIgc3ZnO1xuKGZ1bmN0aW9uIChzdmcpIHtcbiAgICBzdmdbXCJBUFBMRVRWXCJdID0gXCJNIDYuODIwMzEyIDguMjQ2MDk0IEMgNy4xNzk2ODggNy44MjQyMTkgNy4zOTg0MzggNy4yNzM0MzggNy4zOTg0MzggNi42NzU3ODEgQyA3LjM5ODQzOCA2LjYxMzI4MSA3LjM5ODQzOCA2LjU1MDc4MSA3LjM5NDUzMSA2LjQ5MjE4OCBMIDcuMzk0NTMxIDYuNSBDIDYuNzQ2MDk0IDYuNTY2NDA2IDYuMTgzNTk0IDYuODcxMDk0IDUuNzg1MTU2IDcuMzI0MjE5IEwgNS43ODEyNSA3LjMyODEyNSBDIDUuNDE3OTY5IDcuNzI2NTYyIDUuMTk1MzEyIDguMjYxNzE5IDUuMTk1MzEyIDguODUxNTYyIEMgNS4xOTUzMTIgOC45MTAxNTYgNS4xOTkyMTkgOC45Njg3NSA1LjIwMzEyNSA5LjAyMzQzOCBMIDUuMjAzMTI1IDkuMDE1NjI1IEMgNS4yMDcwMzEgOS4wMTU2MjUgNS4yMTQ4NDQgOS4wMTU2MjUgNS4yMjI2NTYgOS4wMTU2MjUgQyA1Ljg2NzE4OCA5LjAxNTYyNSA2LjQ0NTMxMiA4LjcxODc1IDYuODIwMzEyIDguMjUgWiBNIDguMTk1MzEyIDEyLjMwNDY4OCBDIDguMjAzMTI1IDEzLjI5Mjk2OSA4Ljc5Njg3NSAxNC4xNDA2MjUgOS42NDg0MzggMTQuNTExNzE5IEwgOS42NjQwNjIgMTQuNTE5NTMxIEMgOS40Njg3NSAxNS4xMDkzNzUgOS4yMTQ4NDQgMTUuNjI1IDguODk0NTMxIDE2LjA5Mzc1IEwgOC45MDYyNSAxNi4wNzAzMTIgQyA4LjQ0OTIxOSAxNi43MzQzNzUgNy45ODA0NjkgMTcuMzk4NDM4IDcuMjMwNDY5IDE3LjQxNDA2MiBDIDYuNSAxNy40Mjk2ODggNi4yNjk1MzEgMTYuOTgwNDY5IDUuNDI1NzgxIDE2Ljk4MDQ2OSBDIDQuNTg5ODQ0IDE2Ljk4MDQ2OSA0LjMyODEyNSAxNy4zOTg0MzggMy42MzI4MTIgMTcuNDI5Njg4IEMgMi45MjU3ODEgMTcuNDUzMTI1IDIuMzc1IDE2LjcwMzEyNSAxLjkxNDA2MiAxNi4wMzkwNjIgQyAxLjIyNjU2MiAxNS4xMDkzNzUgMC44MTI1IDEzLjk0MTQwNiAwLjgxMjUgMTIuNjcxODc1IEMgMC44MTI1IDExLjkwMjM0NCAwLjk2NDg0NCAxMS4xNjc5NjkgMS4yNDIxODggMTAuNSBMIDEuMjI2NTYyIDEwLjUzNTE1NiBDIDEuNjc5Njg4IDkuNzM0Mzc1IDIuNTE5NTMxIDkuMTk1MzEyIDMuNDg0Mzc1IDkuMTcxODc1IEwgMy40ODgyODEgOS4xNzE4NzUgQyA0LjE5MTQwNiA5LjE1NjI1IDQuODYzMjgxIDkuNjQ4NDM4IDUuMjk2ODc1IDkuNjQ4NDM4IEMgNS43MjY1NjIgOS42NDg0MzggNi41MzUxNTYgOS4wNjI1IDcuMzg2NzE5IDkuMTQ4NDM4IEMgOC4yMTA5MzggOS4xNzk2ODggOC45MzM1OTQgOS41OTM3NSA5LjM3ODkwNiAxMC4yMTg3NSBMIDkuMzg2NzE5IDEwLjIyNjU2MiBDIDguNjc1NzgxIDEwLjY2NDA2MiA4LjIxMDkzOCAxMS40Mjk2ODggOC4xOTUzMTIgMTIuMzA0Njg4IFogTSAxNS4wMTk1MzEgMTcuMzA0Njg4IEMgMTQuNTg5ODQ0IDE3LjQyOTY4OCAxNC4wOTc2NTYgMTcuNSAxMy41ODU5MzggMTcuNSBDIDEzLjU4MjAzMSAxNy41IDEzLjU3NDIxOSAxNy41IDEzLjU2NjQwNiAxNy41IEMgMTIuNDE3OTY5IDE3LjUgMTEuODQ3NjU2IDE2Ljg1MTU2MiAxMS44NDc2NTYgMTUuNTQ2ODc1IEwgMTEuODQ3NjU2IDkuNzk2ODc1IEwgMTAuODUxNTYyIDkuNzk2ODc1IEwgMTAuODUxNTYyIDguNzUzOTA2IEwgMTEuODk4NDM4IDguNzUzOTA2IEwgMTEuODk4NDM4IDcuMzk4NDM4IEwgMTMuMjgxMjUgNi44MzIwMzEgTCAxMy4yODEyNSA4Ljc2MTcxOSBMIDE0Ljg3ODkwNiA4Ljc2MTcxOSBMIDE0Ljg3ODkwNiA5LjgwNDY4OCBMIDEzLjI4OTA2MiA5LjgwNDY4OCBMIDEzLjI4OTA2MiAxNS4yMzgyODEgQyAxMy4yODUxNTYgMTUuMjc3MzQ0IDEzLjI4NTE1NiAxNS4zMjAzMTIgMTMuMjg1MTU2IDE1LjM2NzE4OCBDIDEzLjI4NTE1NiAxNS42NDA2MjUgMTMuMzU5Mzc1IDE1Ljg5ODQzOCAxMy40OTIxODggMTYuMTE3MTg4IEwgMTMuNDkyMTg4IDE2LjEwOTM3NSBDIDEzLjY0NDUzMSAxNi4yNjU2MjUgMTMuODU1NDY5IDE2LjM2MzI4MSAxNC4wODk4NDQgMTYuMzYzMjgxIEMgMTQuMTI4OTA2IDE2LjM2MzI4MSAxNC4xNjAxNTYgMTYuMzU5Mzc1IDE0LjE5NTMxMiAxNi4zNTU0NjkgTCAxNC4xOTE0MDYgMTYuMzU1NDY5IEMgMTQuNDkyMTg4IDE2LjM0Mzc1IDE0Ljc3NzM0NCAxNi4zMDQ2ODggMTUuMDUwNzgxIDE2LjI0MjE4OCBMIDE1LjAxOTUzMSAxNi4yNSBaIE0gMjAuMDE5NTMxIDE3LjM2NzE4OCBMIDE4LjMyNDIxOSAxNy4zNjcxODggTCAxNS4xOTUzMTIgOC43NTM5MDYgTCAxNi43MjY1NjIgOC43NTM5MDYgTCAxOC42MTcxODggMTQuMzU1NDY5IEMgMTguNjg3NSAxNC41NzQyMTkgMTguODcxMDk0IDE1LjE5OTIxOSAxOS4xNjQwNjIgMTYuMjQyMTg4IEwgMTkuNDQxNDA2IDE1LjMwODU5NCBMIDE5Ljc1IDE0LjM2NzE4OCBMIDIxLjcxMDkzOCA4Ljc0NjA5NCBMIDIzLjIzMDQ2OSA4Ljc0NjA5NCBaIE0gMjAuMDE5NTMxIDE3LjM2NzE4OCBcIjtcbiAgICBzdmdbXCJDUlVOQ0hZUk9MTFwiXSA9IFwiTSAyLjkzMzU5NCAxMy40Njg3NSBDIDIuNzA3MDMxIDEwLjYwMTU2MiAzLjY1NjI1IDcuNzY5NTMxIDUuNTY2NDA2IDUuNjIxMDk0IEMgNy40NzY1NjIgMy40NzY1NjIgMTAuMTc5Njg4IDIuMTk5MjE5IDEzLjA1MDc4MSAyLjA4OTg0NCBDIDE1LjkyMTg3NSAxLjk4NDM3NSAxOC43MTA5MzggMy4wNTA3ODEgMjAuNzc3MzQ0IDUuMDQ2ODc1IEMgMjIuODQ3NjU2IDcuMDQyOTY5IDI0LjAwNzgxMiA5Ljc5Mjk2OSAyNCAxMi42Njc5NjkgTCAyNCAxMiBDIDI0IDUuMzcxMDk0IDE4LjYyODkwNiAwIDEyIDAgQyA1LjM3MTA5NCAwIDAgNS4zNzEwOTQgMCAxMiBDIDAgMTguNjI4OTA2IDUuMzcxMDk0IDI0IDEyIDI0IEwgMTIuODAwNzgxIDI0IEMgNy4yNjE3MTkgMjMuNjA5Mzc1IDIuOTY0ODQ0IDE5LjAxNTYyNSAyLjkzMzU5NCAxMy40Njg3NSBaIE0gMTkuMTk5MjE5IDE0IEMgMTQuODg2NzE5IDE0LjAxNTYyNSAxMy44MTI1IDguMDExNzE5IDE3Ljg2NzE4OCA2LjUzMTI1IEMgMTYuNjc5Njg4IDUuODk4NDM4IDE1LjM0NzY1NiA1LjU3NDIxOSAxNCA1LjYwMTU2MiBDIDEwLjYwMTU2MiA1LjYwMTU2MiA3LjUzOTA2MiA3LjY0ODQzOCA2LjIzODI4MSAxMC43ODUxNTYgQyA0LjkzNzUgMTMuOTI1NzgxIDUuNjU2MjUgMTcuNTM5MDYyIDguMDU4NTk0IDE5Ljk0MTQwNiBDIDEwLjQ2MDkzOCAyMi4zNDM3NSAxNC4wNzQyMTkgMjMuMDYyNSAxNy4yMTQ4NDQgMjEuNzYxNzE5IEMgMjAuMzUxNTYyIDIwLjQ2MDkzOCAyMi4zOTg0MzggMTcuMzk4NDM4IDIyLjM5ODQzOCAxNCBDIDIyLjQyMTg3NSAxMy40NjQ4NDQgMjIuMzc4OTA2IDEyLjkyNTc4MSAyMi4yNjU2MjUgMTIuMzk4NDM4IEMgMjEuNjA5Mzc1IDEzLjQ0OTIxOSAyMC40Mzc1IDE0LjA2MjUgMTkuMTk5MjE5IDE0IFogTSAxOS4xOTkyMTkgMTQgXCI7XG4gICAgc3ZnW1wiRElTTkVZXCJdID0gXCJNIDIyLjE1MjM0NCA5LjA4NTkzOCBDIDE5LjMzNTkzOCA1LjExNzE4OCAxMy42MDE1NjIgMi44OTA2MjUgMTAuNDM3NSAyLjM2MzI4MSBDIDYuOTQxNDA2IDEuNzgxMjUgNC44MTI1IDIuMDAzOTA2IDMuMDM5MDYyIDIuMzI4MTI1IEMgMi4zODI4MTIgMi40NDkyMTkgMC4zOTA2MjUgMi44MTY0MDYgMC4wNzgxMjUgNC4zMjQyMTkgQyAtMC4xOTkyMTkgNS42ODM1OTQgMS4xMzY3MTkgNi42NTIzNDQgMS40MDYyNSA2LjgzMjAzMSBDIDEuOTQxNDA2IDcuMTg3NSAyLjY2MDE1NiA3LjA0Mjk2OSAzLjAxOTUzMSA2LjUxMTcxOSBDIDMuMzc4OTA2IDUuOTgwNDY5IDMuMjQyMTg4IDUuMjUzOTA2IDIuNzEwOTM4IDQuODkwNjI1IEMgMi42ODc1IDQuODc1IDIuNjY0MDYyIDQuODU1NDY5IDIuNjQwNjI1IDQuODM1OTM4IEMgMi44MjQyMTkgNC43NzM0MzggMy4wODk4NDQgNC42OTkyMTkgMy40NjA5MzggNC42Mjg5MDYgQyA0LjkyMTg3NSA0LjM1OTM3NSA2Ljc1MzkwNiA0LjEyMTA5NCAxMC4wNTQ2ODggNC42NzE4NzUgQyAxMi43MjY1NjIgNS4xMTcxODggMTcuODU5Mzc1IDcuMDc4MTI1IDIwLjI0NjA5NCAxMC40Mzc1IEMgMjEuMjczNDM4IDExLjg4MjgxMiAyMS42NTIzNDQgMTMuNDI1NzgxIDIxLjM3ODkwNiAxNS4wMTk1MzEgQyAyMS4xMTMyODEgMTYuNTU4NTk0IDIwLjQzNzUgMTcuNjAxNTYyIDE5LjMxMjUgMTguMjE0ODQ0IEMgMTcuMjg1MTU2IDE5LjMxNjQwNiAxNC4wNzQyMTkgMTguODQzNzUgMTEuNzA3MDMxIDE4LjE5NTMxMiBMIDExLjcwNzAzMSAxMy4xOTUzMTIgQyAxMi40NzY1NjIgMTMuMTk1MzEyIDEzLjE5OTIxOSAxMy4yNjk1MzEgMTQuMTI4OTA2IDEzLjQ0MTQwNiBDIDE0Ljc0MjE4OCAxMy41NTg1OTQgMTUuMTA1NDY5IDEzLjg4MjgxMiAxNS4yMjI2NTYgMTQuMDc0MjE5IEMgMTUuMTk5MjE5IDE0LjA4NTkzOCAxNS4xNzE4NzUgMTQuMDk3NjU2IDE1LjE0MDYyNSAxNC4xMDU0NjkgQyAxNC41MjczNDQgMTQuMzEyNSAxNC4xOTUzMTIgMTQuOTcyNjU2IDE0LjQwMjM0NCAxNS41ODU5MzggQyAxNC42MDU0NjkgMTYuMTk5MjE5IDE1LjI2NTYyNSAxNi41MzEyNSAxNS44ODI4MTIgMTYuMzI4MTI1IEMgMTcuMjM0Mzc1IDE1Ljg3NSAxNy42NTYyNSAxNC44MzU5MzggMTcuNTk3NjU2IDE0LjAwNzgxMiBDIDE3LjUwNzgxMiAxMi42NjAxNTYgMTYuMjI2NTYyIDExLjQ1MzEyNSAxNC41NTQ2ODggMTEuMTQwNjI1IEMgMTMuNDc2NTYyIDEwLjk0MTQwNiAxMi42MjEwOTQgMTAuODU1NDY5IDExLjcwNzAzMSAxMC44NTU0NjkgTCAxMS43MDcwMzEgOC43ODEyNSBDIDExLjcwNzAzMSA4LjEzNjcxOSAxMS4xODM1OTQgNy42MTMyODEgMTAuNTM5MDYyIDcuNjEzMjgxIEMgOS44OTQ1MzEgNy42MTMyODEgOS4zNjcxODggOC4xMzY3MTkgOS4zNjcxODggOC43ODEyNSBMIDkuMzY3MTg4IDEwLjk1NzAzMSBDIDUuMDgyMDMxIDExLjI4MTI1IDMuMDYyNSAxMi4xNzE4NzUgMi43MjI2NTYgMTMuODQ3NjU2IEMgMi4yMTQ4NDQgMTYuMzYzMjgxIDYuNDQ1MzEyIDE4LjYzNjcxOSA4LjMyNDIxOSAxOS41MTE3MTkgQyA4LjM4NjcxOSAxOS41MzkwNjIgOC43Njk1MzEgMTkuNjk5MjE5IDkuMzY3MTg4IDE5LjkxMDE1NiBMIDkuMzY3MTg4IDIxLjA2NjQwNiBDIDkuMzY3MTg4IDIxLjcxNDg0NCA5Ljg5NDUzMSAyMi4yMzgyODEgMTAuNTM5MDYyIDIyLjIzODI4MSBDIDExLjE4MzU5NCAyMi4yMzgyODEgMTEuNzA3MDMxIDIxLjcxNDg0NCAxMS43MDcwMzEgMjEuMDY2NDA2IEwgMTEuNzA3MDMxIDIwLjYxMzI4MSBDIDEzLjAyNzM0NCAyMC45NDE0MDYgMTQuNTkzNzUgMjEuMjE0ODQ0IDE2LjE2MDE1NiAyMS4yMTQ4NDQgQyAxNy42NTYyNSAyMS4yMTQ4NDQgMTkuMTU2MjUgMjAuOTY0ODQ0IDIwLjQyOTY4OCAyMC4yNzM0MzggQyAyMi4xOTkyMTkgMTkuMzA4NTk0IDIzLjI5Mjk2OSAxNy42NzU3ODEgMjMuNjgzNTk0IDE1LjQxNzk2OSBDIDI0LjA2NjQwNiAxMy4xODc1IDIzLjU1NDY4OCAxMS4wNTQ2ODggMjIuMTUyMzQ0IDkuMDg1OTM4IFogTSA5LjI3NzM0NCAxNy4zNzUgQyA3LjIyNjU2MiAxNi40MTc5NjkgNS4yMTQ4NDQgMTQuOTY0ODQ0IDUuMDMxMjUgMTQuMzI0MjE5IEMgNS4xNzk2ODggMTQuMTY3OTY5IDUuOTY4NzUgMTMuNTgyMDMxIDkuMzY3MTg4IDEzLjMwNDY4OCBMIDkuMzY3MTg4IDE3LjQxMDE1NiBDIDkuMzM5ODQ0IDE3LjM5ODQzOCA5LjMwNDY4OCAxNy4zODY3MTkgOS4yNzczNDQgMTcuMzc1IFogTSA5LjI3NzM0NCAxNy4zNzUgXCI7XG4gICAgc3ZnW1wiRk9YU1BPUlRTXCJdID0gXCJNIDAuMjMwNSAxNS4xMjUgTCAwLjIzMDUgNSBMIDYuMjE0OCA1IEwgNi4zOTg0IDcuNzY5NSBMIDMuMDQ2OSA3Ljc2OTUgTCAzLjA0NjkgOS4wODk4IEwgNS43NzczIDkuMDg5OCBMIDUuNzc3MyAxMS44NTE2IEwgMy4wMjczIDExLjg1MTYgTCAzLjAyNzMgMTUuMTI1IEwgMC4yMzA1IDE1LjEyNSBNIDIzLjI4MTMgMTUuMDkzOCBMIDIwLjI4NTIgOS44Mzk4IEwgMjMuMDA3OCA1IEwgMjAuMDExNyA1IEwgMTguNzY5NSA3LjE3OTcgTCAxNy41NDY5IDUgTCAxNC40NDUzIDUgTCAxNy4yMTg4IDkuODc1IEwgMTQuMjgxMyAxNS4xMDE2IEwgMTcuMjkzIDE1LjA5NzcgTCAxOC43MzA1IDEyLjUzOTEgTCAyMC4xODM2IDE1LjA5MzggTCAyMy4yODEzIDE1LjA5MzggTSAxMS45MTAyIDEyLjA5NzcgTCAxMS45MTAyIDguMDUwOCBDIDExLjkxMDIgNy41ODk4IDExLjUxNTYgNy4xNzU4IDExLjA3MDMgNy4xNzU4IEMgMTAuNjI4OSA3LjE3NTggMTAuMjY5NSA3LjU4OTggMTAuMjY5NSA4LjA1MDggTCAxMC4yNjk1IDEyLjA4MiBDIDEwLjI2OTUgMTIuNTQ2OSAxMC42Mjg5IDEyLjkxOCAxMS4wNzAzIDEyLjkxOCBDIDExLjUxNTYgMTIuOTE4IDExLjkxMDIgMTIuNTU4NiAxMS45MTAyIDEyLjA5NzcgWiBNIDYuMzI0MiAxMC4wNzQyIEMgNi4zMjQyIDcuMzU5NCA4LjQ0MTQgNS4xNTIzIDExLjA1ODYgNS4xNTIzIEMgMTMuNjc1OCA1LjE1MjMgMTUuNzk2OSA3LjM1OTQgMTUuNzk2OSAxMC4wNzQyIEMgMTUuNzk2OSAxMi43OTMgMTMuNjc1OCAxNC45OTYxIDExLjA1ODYgMTQuOTk2MSBDIDguNDQxNCAxNC45OTYxIDYuMzI0MiAxMi43OTMgNi4zMjQyIDEwLjA3NDIgWiBNIDAgMTkuNTE5NSBMIDAgMTguOTk2MSBMIDAuMjYxNyAxOC43MzQ0IEwgMi4zODY3IDE4LjczNDQgTCAyLjQ2NDggMTguNjU2MyBMIDIuNDY0OCAxOC4xMDE2IEwgMi40MTAyIDE4LjAzOTEgTCAwLjQzNzUgMTguMDM5MSBMIDAgMTcuNTkzOCBMIDAgMTYuMzIwMyBMIDAuNTAzOSAxNS44MDg2IEwgMy4zNjMzIDE1LjgwODYgTCAzLjM2MzMgMTYuMzcxMSBMIDMuMTU2MyAxNi41ODU5IEwgMS4wODIgMTYuNTg1OSBMIDEuMDAzOSAxNi42NjggTCAxLjAwMzkgMTcuMjA3IEwgMS4wNjI1IDE3LjI2NTYgTCAzLjAyNzMgMTcuMjY1NiBMIDMuNDY0OCAxNy43MTQ4IEwgMy40NjQ4IDE5LjAwMzkgTCAyLjk2MDkgMTkuNTE5NSBMIDAgMTkuNTE5NSBNIDYuNDYwOSAxNy42MDU1IEwgNi42MDk0IDE3LjQ1MzEgTCA2LjYwOTQgMTYuNzQyMiBMIDYuNDYwOSAxNi41OTM4IEwgNS4wOTM4IDE2LjU5MzggTCA1LjA5MzggMTcuNjA1NSBaIE0gNC4wODk4IDE1LjgwODYgTCA3LjA1NDcgMTUuODA4NiBMIDcuNjE3MiAxNi4zNzg5IEwgNy42MTcyIDE3Ljc1MzkgTCA3LjA1NDcgMTguMzI4MSBMIDUuMDkzOCAxOC4zMjgxIEwgNS4wOTM4IDE5LjUxOTUgTCA0LjA4OTggMTkuNTE5NSBaIE0gMTAuNTE1NiAxOC42NDg0IEwgMTAuNzIyNyAxOC40NDE0IEwgMTAuNzIyNyAxNi44MjAzIEwgMTAuNTE1NiAxNi42MTMzIEwgOS4zNDc3IDE2LjYxMzMgTCA5LjE0MDYgMTYuODIwMyBMIDkuMTQwNiAxOC40NDE0IEwgOS4zNDc3IDE4LjY0ODQgWiBNIDguMTQ0NSAxOC45NDkyIEwgOC4xNDQ1IDE2LjM3ODkgTCA4LjY5OTIgMTUuODA4NiBMIDExLjE2MDIgMTUuODA4NiBMIDExLjcyMjcgMTYuMzc4OSBMIDExLjcyMjcgMTguOTQ5MiBMIDExLjE2MDIgMTkuNTE5NSBMIDguNjk5MiAxOS41MTk1IFogTSAxNC43MzQ0IDE3LjM5ODQgTCAxNC44NzUgMTcuMjUzOSBMIDE0Ljg3NSAxNi43MTA5IEwgMTQuNzM0NCAxNi41NjY0IEwgMTMuMzgyOCAxNi41NjY0IEwgMTMuMzgyOCAxNy4zOTg0IFogTSAxMi4zNzg5IDE1LjgwODYgTCAxNS4zNzUgMTUuODA4NiBMIDE1Ljg3ODkgMTYuMzIwMyBMIDE1Ljg3ODkgMTcuNTAzOSBMIDE1LjM5ODQgMTcuOTk2MSBMIDE2LjAzMTMgMTkuNTE5NSBMIDE0LjkxNDEgMTkuNTE5NSBMIDE0LjQ0NTMgMTguMTcxOSBMIDEzLjM4MjggMTguMTcxOSBMIDEzLjM4MjggMTkuNTE5NSBMIDEyLjM3ODkgMTkuNTE5NSBaIE0gMTcuMzc4OSAxNi42NjggTCAxNi4yMTg4IDE2LjY2OCBMIDE2LjIxODggMTUuODA4NiBMIDE5LjUzOTEgMTUuODA4NiBMIDE5LjUzOTEgMTYuNjY4IEwgMTguMzgyOCAxNi42NjggTCAxOC4zODI4IDE5LjUxOTUgTCAxNy4zNzg5IDE5LjUxOTUgTCAxNy4zNzg5IDE2LjY2OCBNIDIwLjA4MiAxOS42MjExIEwgMjAuMDgyIDE5LjA5NzcgTCAyMC4zNDM4IDE4LjgzNTkgTCAyMi40Njg4IDE4LjgzNTkgTCAyMi41NDY5IDE4Ljc1NzggTCAyMi41NDY5IDE4LjIwMzEgTCAyMi40OTIyIDE4LjE0MDYgTCAyMC41MTk1IDE4LjE0MDYgTCAyMC4wODIgMTcuNjk1MyBMIDIwLjA4MiAxNi40MjE5IEwgMjAuNTg1OSAxNS45MTAyIEwgMjMuNDQ1MyAxNS45MTAyIEwgMjMuNDQ1MyAxNi40NzI3IEwgMjMuMjM4MyAxNi42ODc1IEwgMjEuMTY4IDE2LjY4NzUgTCAyMS4wODU5IDE2Ljc2OTUgTCAyMS4wODU5IDE3LjMwODYgTCAyMS4xNDQ1IDE3LjM2NzIgTCAyMy4xMTMzIDE3LjM2NzIgTCAyMy41NDY5IDE3LjgxNjQgTCAyMy41NDY5IDE5LjEwNTUgTCAyMy4wNDMgMTkuNjIxMSBMIDIwLjA4MiAxOS42MjExXCI7XG4gICAgc3ZnW1wiTUFYXCJdID0gXCJNIDMuNzQ0MyA4IEMgMy4wOTQ5IDggMi40MzgxIDguMjkzMiAxLjU5NTcgOC45NTc0IEwgMS41OTU3IDguMTY3IEwgMCA4LjE2NyBMIDAgMTQuNDc1NiBMIDEuNjk1OSAxNC40NzU2IEwgMS42OTU5IDEwLjU1MzEgQyAyLjQzODEgOS45NTU3IDIuNzc1OCA5Ljc2NjQgMy4wNTQxIDkuNzY2NCBDIDMuMzg0NCA5Ljc2NjQgMy41OTk2IDkuOTc0MiAzLjU5OTYgMTAuNTAxMiBMIDMuNTk5NiAxNC40NzU2IEwgNS4yOTU1IDE0LjQ3NTYgTCA1LjI5NTUgMTAuNTQyIEMgNi4wMzc3IDkuOTU1NyA2LjM2OCA5Ljc2NjQgNi42NTM3IDkuNzY2NCBDIDYuOTg0IDkuNzY2NCA3LjE5OTIgOS45NzQyIDcuMTk5MiAxMC41MDEyIEwgNy4xOTkyIDE0LjQ3NTYgTCA4Ljg5NTEgMTQuNDc1NiBMIDguODk1MSA5Ljg5MjYgQyA4Ljg5NTEgOC40NzEzIDguMTA0NyA4IDcuMzQzOSA4IEMgNi42OTQ1IDggNi4wMzc3IDguMjc0NiA1LjE3MyA4Ljk0NjMgQyA0Ljg5NDcgOC4yNDEyIDQuMjg5OCA4IDMuNzQ0MyA4IFogTSAxMi4zNDI2IDggQyAxMC42NTc4IDggOS4yNTg4IDkuNDgwNyA5LjI1ODggMTEuMzIxMyBDIDkuMjU4OCAxMy4xNjE5IDEwLjY1NzggMTQuNjQyNiAxMi4zNDI2IDE0LjY0MjYgQyAxMy4xNzc1IDE0LjY0MjYgMTMuODk3NSAxNC4zMjcxIDE0LjQ1MDQgMTMuNjQ0MyBMIDE0LjQ1MDQgMTQuNDc1NiBMIDE2LjA2ODQgMTQuNDc1NiBMIDE2LjA2ODQgOC4xNjcgTCAxNC40NTA0IDguMTY3IEwgMTQuNDUwNCA4Ljk5ODIgQyAxMy44OTc1IDguMzE1NCAxMy4xNzc1IDggMTIuMzQyNiA4IFogTSAxNi4zNjUyIDguMTY3IEMgMTcuMDYyOSA5LjI4NCAxNy44NTcgMTAuMjgyMiAxOC43ODExIDExLjI4MDUgQyAxNy44NTcgMTIuMzE5NSAxNy4wNjI5IDEzLjQwMzEgMTYuMzY1MiAxNC40NzU2IEwgMTguNDEgMTQuNDc1NiBDIDE4Ljg5NjEgMTMuNjc0IDE5LjQ0MTYgMTIuOTUwNCAyMC4wNjg3IDEyLjI2NzYgQyAyMC42ODQ4IDEyLjk1MDQgMjEuMjAwNiAxMy42NzQgMjEuNjgzIDE0LjQ3NTYgTCAyMy43NSAxNC40NzU2IEMgMjMuMDQxMiAxMy4zNjk3IDIyLjI2OTMgMTIuMzE5NSAyMS4zNDE2IDExLjI4MDUgQyAyMi4yNTgyIDEwLjI4MjIgMjMuMDQxMiA5LjI1MDYgMjMuNzUgOC4xNjcgTCAyMS43MjM4IDguMTY3IEMgMjEuMjE5MSA4Ljk2ODYgMjAuNjczNiA5LjY0MDIgMjAuMDY4NyAxMC4zMDA4IEMgMTkuNDQ5IDkuNjQwMiAxOC45MDcyIDguOTY4NiAxOC40MSA4LjE2NyBaIE0gMTIuNTk4NiA5LjQ2MjEgQyAxMy42MDggOS40NjIxIDE0LjQyMDcgMTAuMjg5NiAxNC40MjA3IDExLjMyMTMgQyAxNC40MjA3IDEyLjM1MjkgMTMuNjA4IDEzLjE4MDUgMTIuNTk4NiAxMy4xODA1IEMgMTEuNTkzIDEzLjE4MDUgMTAuNzgwMyAxMi4zNTI5IDEwLjc4MDMgMTEuMzIxMyBDIDEwLjc4MDMgMTAuMjg5NiAxMS41OTMgOS40NjIxIDEyLjU5ODYgOS40NjIxIFogTSAxMi41OTg2IDkuODgxNCBDIDExLjgyNjggOS44ODE0IDExLjE5OTYgMTAuNTIzNCAxMS4xOTk2IDExLjMyMTMgQyAxMS4xOTk2IDEyLjExOTEgMTEuODI2OCAxMi43NjExIDEyLjU5ODYgMTIuNzYxMSBDIDEzLjM3MDUgMTIuNzYxMSAxMy45OTc3IDEyLjExOTEgMTMuOTk3NyAxMS4zMjEzIEMgMTMuOTk3NyAxMC41MjM0IDEzLjM3MDUgOS44ODE0IDEyLjU5ODYgOS44ODE0IFogTSAxMi41OTg2IDkuODgxNFwiO1xuICAgIHN2Z1tcIk1MQlRWXCJdID0gXCJNIDIzLjI1MzkgNy4wMDM5IEMgMjMuMjY1NiA2LjI5MyAyMi42OTUzIDUuNzEwOSAyMS45ODgzIDUuNzAzMSBDIDIxLjk4MDUgNS43MDMxIDIxLjk3MjcgNS43MDMxIDIxLjk2NDggNS43MDMxIEwgMTYuMzgyOCA1LjcwMzEgTCAxOS41ODU5IDExLjA2MjUgTCAxOS44Nzg5IDExLjEwMTYgTCAyMC4wNjY0IDExLjM0MzggTCAyMC4wNjY0IDExLjU3NDIgTCAyMC4yNjk1IDExLjYxNzIgTCAyMC40NTcgMTEuODcxMSBMIDIwLjQ1NyAxMi4wODk4IEwgMjAuNjY0MSAxMi4xMjg5IEwgMjAuODc1IDEyLjM1OTQgTCAyMC44NzUgMTIuODY3MiBDIDIxLjEyODkgMTMuMDk3NyAyMS40MTAyIDEzLjI4NTIgMjEuNzE4OCAxMy40Mjk3IEMgMjIgMTMuNTM5MSAyMi4wMzEzIDEzLjk5MjIgMjIuMjAzMSAxNC4yMzQ0IEMgMjIuNDE0MSAxNC41ODU5IDIyLjcwNyAxNC43MjY2IDIyLjY0NDUgMTQuOTI1OCBDIDIyLjUwMzkgMTUuNDQ5MiAyMS45NjQ4IDE2LjMzOTggMjEuNDY0OCAxNi4zNzg5IEwgMTkuNDgwNSAxNi4zNzg5IEwgMTkuNDgwNSAxNy4yMzA1IEwgMjEuOTY0OCAxNy4yMzA1IEMgMjIuNjgzNiAxNy4yMjY2IDIzLjI2MTcgMTYuNjQ0NSAyMy4yNTc4IDE1LjkyNTggTCAyMy4yNTc4IDcuMDAzOSBNIDkuNjAxNiAxNi4zOTQ1IEwgOC42NDQ1IDE2LjM5NDUgQyA4LjY0NDUgMTMuOTkyMiA5LjQ1MzEgMTIuNjY0MSAxMC40MjU4IDEyLjM5ODQgQyAxMC41NTg2IDEyLjM3NSAxMC40OTIyIDExLjcxODggMTAuMzI0MiAxMS41MTk1IEwgOS43NjU2IDExLjUxOTUgQyA5LjY3NTggMTEuNTE5NSA5LjcyNjYgMTEuMzQ3NyA5LjcyNjYgMTEuMzQ3NyBMIDEwLjE3OTcgMTAuMzc4OSBMIDEwLjEyMTEgMTAuMTA5NCBMIDguNDQxNCAxMC4xMDk0IEwgOS44MjAzIDkuMTQ0NSBDIDkuODgyOCA2LjU5MzggMTIuNDk2MSA2LjM5NDUgMTQuMDY2NCA3LjQ1NyBDIDE1LjAwMzkgOC4wNzgxIDE1LjA3NDIgOS4zMDg2IDE1LjAwMzkgMTAuMTU2MyBDIDE0Ljk5MjIgMTAuMjEwOSAxNC43NTc4IDEwLjE3NTggMTQuNzU3OCAxMC4xNzU4IEMgMTQuNzU3OCAxMC4xNzU4IDE0LjYwMTYgMTEuMTEzMyAxNS4wMTU2IDExLjExMzMgTCAxNi44NTE2IDExLjExMzMgQyAxNy41OTc3IDExLjA4MiAxOC4zMjAzIDExLjU4OTggMTguMzIwMyAxMS41ODk4IEwgMTguNDk2MSAxMC45NDUzIEwgMTQuNDc2NiA1LjcwMzEgTCAxLjk5NjEgNS43MDMxIEMgMS42NTIzIDUuNjk5MiAxLjMyMDMgNS44MzU5IDEuMDc0MiA2LjA3ODEgQyAwLjgzMiA2LjMyNDIgMC42OTUzIDYuNjU2MyAwLjY5OTIgNy4wMDM5IEwgMC42OTkyIDE1LjkyOTcgQyAwLjY5NTMgMTYuMjczNCAwLjgyODEgMTYuNjA5NCAxLjA3NDIgMTYuODUxNiBDIDEuMzIwMyAxNy4wOTc3IDEuNjUyMyAxNy4yMzQ0IDEuOTk2MSAxNy4yMzQ0IEwgMTAuMDk3NyAxNy4yMzQ0IEMgOS45MDIzIDE2Ljg5NDUgOS42NzU4IDE2LjUwNzggOS42MDU1IDE2LjM5NDUgTSAyLjUgMTQuNSBDIDIuNSAxNC4wMDc4IDIuODk0NSAxMy42MDk0IDMuMzg2NyAxMy42MDk0IEMgMy44NzUgMTMuNjA5NCA0LjI3MzQgMTQuMDA3OCA0LjI3MzQgMTQuNSBDIDQuMjczNCAxNC45ODgzIDMuODc1IDE1LjM4NjcgMy4zODY3IDE1LjM4NjcgTCAzLjM3ODkgMTUuMzg2NyBDIDIuODk0NSAxNS4zODY3IDIuNSAxNC45OTYxIDIuNSAxNC41MTE3IEMgMi41IDE0LjUwNzggMi41IDE0LjUwMzkgMi41IDE0LjVcIjtcbiAgICBzdmdbXCJOQkFcIl0gPSBcIk0gNy44NTU1IDIxLjE2MDIgQyA3LjU1NDcgMjAuODkwNiA3Ljc1MzkgMjAuNzczNCA3LjczODMgMjAuNjU2MyBDIDcuNTM5MSAxOS44MjAzIDYuODY3MiAxOS4zMjAzIDcuMjE4OCAxOS4wNTQ3IEMgNy4xNDg0IDE4Ljg0MzggNy4wNjY0IDE4LjYzNjcgNi45Njg4IDE4LjQzMzYgQyA1LjkzMzYgMTcuODQ3NyA1LjA2MjUgMTYuODc4OSA0LjkxNDEgMTYuNzQ2MSBDIDQuNzYxNyAxNi42MTMzIDQuNDI5NyAxNi4zNDM4IDQuMzYzMyAxNi4xOTUzIEMgNC4yOTY5IDE2LjA0MyAyLjkwNjMgMTQuMjM4MyAyLjYyNSAxMy42MjExIEwgMi4xNDA2IDEzLjU1NDcgQyAxLjkyMTkgMTIuNjM2NyAxLjE3MTkgMTEuODY3MiAxLjE1MjMgMTAuOTY0OCBDIDEuMTc1OCAxMC41NDMgMS4yNSAxMC4xMjg5IDEuMzcxMSA5LjcyNjYgQyAxLjQ2ODggOS41NzgxIDEuNTg1OSA5LjQ0MTQgMS43MjI3IDkuMzI0MiBMIDEuNzIyNyA5LjA3NDIgQyAwLjY1MjMgOS4xMDk0IDAuOTUzMSA4Ljk5MjIgMC43Njk1IDguNTc0MiBDIDAuNTg1OSA4LjE1NjMgMC43MzQ0IDguMjIyNyAwLjc4NTIgOC4wMjM0IEMgMC45Mzc1IDcuNDM3NSAxLjQwMjMgNi41MTk1IDEuNjA1NSA2LjEwMTYgQyAxLjgwNDcgNS42ODM2IDEuODcxMSA1LjM4MjggMS44NzExIDUuMzgyOCBDIDIuNjc1OCAzLjc2MTcgMi45NzY2IDMuODc4OSAzLjkyNTggMy43NzczIEwgMy45NzY2IDMuNzEwOSBDIDQuOTI5NyAzLjY3NTggNC43ODEzIDMuNTkzOCA0LjkxNDEgMi42NzU4IEMgNC43ODEzIDIuNzQyMiA0LjczMDUgMi4zOTA2IDQuNzMwNSAyLjM5MDYgQyA0LjY0NDUgMS44NzExIDQuODc4OSAxLjk3MjcgNC45ODA1IDEuOTU3IEMgNC45OTYxIDEuMTAxNiA1LjA5NzcgMC44MjAzIDUuNzE0OCAwLjU4NTkgTCAyLjQ5MjIgMC41ODU5IEMgMS40Mzc1IDAuNTg1OSAwLjU4NTkgMS40Mzc1IDAuNTg1OSAyLjQ4ODMgTCAwLjU4NTkgMjEuNTA3OCBDIDAuNTg1OSAyMi41NjI1IDEuNDM3NSAyMy40MTQxIDIuNDkyMiAyMy40MTQxIEwgOC4xMDU1IDIzLjQxNDEgQyA3LjQ1MzEgMjMuMDYyNSA3LjgzOTggMjIuNDE0MSA3Ljg1NTUgMjEuMTYwMiBNIDIxLjUwNzggMC41ODU5IEwgNi4yODUyIDAuNTg1OSBDIDYuNTE1NiAwLjY0ODQgNi43MTQ4IDAuNzk2OSA2LjgzNTkgMS4wMDM5IEMgNy4wNzAzIDEuMDE5NSA3LjM1NTUgMS41NTQ3IDYuOTE4IDIuMzI0MiBDIDcuMTIxMSAyLjQ1NyA2Ljk2ODggMi42NDA2IDYuODIwMyAyLjg1OTQgQyA2LjY2OCAzLjA3NDIgNi43MzQ0IDMuMDU4NiA2LjYxNzIgMy4wNDMgQyA2LjQ1MzEgMy4zOTQ1IDYuMjUgMy43MjY2IDYuMTAxNiAzLjc0MjIgQyA2LjAzNTIgMy44MjAzIDYuMDI3MyAzLjkyOTcgNi4wODIgNC4wMTE3IEMgNi4zMDg2IDQuMTAxNiA2LjUxNTYgNC4yMjY2IDYuNzAzMSA0LjM3ODkgTCA2LjcwMzEgNC40NjA5IEMgNi44NjcyIDQuNTYyNSA2Ljk1MzEgNC42NDQ1IDcuMTM2NyA0Ljc0NjEgQyA3LjU4NTkgNS4wMzEzIDguMTU2MyA1LjU0NjkgOC4wODk4IDcuMzIwMyBDIDguMjIyNyA3LjcwMzEgOC4yNzM0IDguNDU3IDguMzkwNiA4LjcwNyBDIDguNTA3OCA4Ljk1NyA4Ljc5MyA5LjQ5MjIgOC44NTk0IDkuOTI1OCBDIDguODU5NCA5LjkyNTggOC45MjU4IDEwLjU3ODEgOS4wMDc4IDEwLjY2NDEgTCA5LjA1ODYgMTAuNjY0MSBDIDkuNDQxNCAxMC43NDYxIDkuMzc1IDEwLjc5NjkgOS40MTAyIDEwLjg2MzMgTCA5LjUwNzggMTAuOTQ1MyBDIDkuNjA5NCAxMC45OTYxIDkuNzc3MyAxMS4wNDY5IDkuNzc3MyAxMS4yMzA1IEwgOS44NTk0IDExLjM2MzMgQyA5LjkxMDIgMTEuNDQ1MyA5Ljk1NyAxMS41MjczIDkuOTk2MSAxMS42MTcyIEMgMTAuMTI4OSAxMS45OTIyIDEwLjEyODkgMTIuNDA2MyA5Ljk5NjEgMTIuNzg1MiBMIDkuOTk2MSAxMi44MzU5IEMgOS44NDc3IDEzLjIwMzEgOS41NzQyIDEzLjUwMzkgOS4yMjY2IDEzLjY4NzUgTCA5LjE5MTQgMTMuNjg3NSBMIDkuMTQwNiAxMy43MjI3IEMgOC45MTggMTMuODI4MSA4LjY3MTkgMTMuODg2NyA4LjQyMTkgMTMuODg2NyBDIDcuNDg4MyAxMy43NjU2IDYuODMyIDEyLjkwNjMgNi45NTcgMTEuOTcyNyBDIDcuMDM5MSAxMS4zNTk0IDcuNDQ1MyAxMC44Mzk4IDguMDIzNCAxMC42MTMzIEMgNy44MjAzIDEwLjEyODkgNy40MjE5IDkuMzQzOCA3LjMwNDcgOS4wOTM4IEMgNy4xODc1IDguODM5OCA2LjkwMjMgNy4yMTg4IDYuODUxNiA2LjkwMjMgQyA2LjgwMDggNi41ODU5IDYuMTE3MiA3LjMyMDMgNi4xMTcyIDcuMzU1NSBDIDYuMTE3MiA3LjM4NjcgNS41ODIgOC42OTE0IDUuNTY2NCA4Ljc1NzggQyA1LjU1NDcgOC44MjgxIDUuNTQ2OSA4LjkwMjMgNS41NDY5IDguOTc2NiBDIDUuNTQ2OSA4Ljk3NjYgNS44MDA4IDkuMDA3OCA1LjkzMzYgOS40MjU4IEMgNi4wNjY0IDkuODQzOCA2LjUgMTEuMzk4NCA2LjUgMTEuMzk4NCBMIDYuMzgyOCAxMS41MTU2IEMgNi45MTggMTMuMzA0NyA2LjczNDQgMTQuMDc0MiA2Ljk2ODggMTQuNjA1NSBDIDcuMjAzMSAxNS4xNDA2IDcuMzU1NSAxNS4yNDIyIDcuNjA1NSAxNS44Nzg5IEMgNy44NTU1IDE2LjUxMTcgNy45ODgzIDE4LjExNzIgOC4wNzQyIDE4LjE4MzYgQyA4LjM1NTUgMTguNTUwOCA4LjUyMzQgMTguODM1OSA4LjUyMzQgMTkuMDM1MiBDIDguNTIzNCAxOS4yMzgzIDguMjczNCAxOS44NTU1IDguMzc1IDIwLjIyMjcgQyA4LjQ3MjcgMjAuNTg5OCA4LjQ1NyAyMC45MDYzIDguNTU4NiAyMC45OTIyIEMgOC42NTYzIDIxLjA3NDIgOC42NDA2IDIxLjE3NTggOC42MDU1IDIxLjI0MjIgQyA4LjU4OTggMjEuMjczNCA4LjU3ODEgMjEuMzA4NiA4LjU3NDIgMjEuMzQzOCBDIDguNzIyNyAyMS45MTAyIDkuMjQyMiAyMi44NjMzIDguNDIxOSAyMy4zNjMzIEwgOC4zNzUgMjMuMzk4NCBMIDIxLjU0MyAyMy4zOTg0IEMgMjIuNTgyIDIzLjM5MDYgMjMuNDIxOSAyMi41NTA4IDIzLjQzMzYgMjEuNTExNyBMIDIzLjQzMzYgMi40OTIyIEMgMjMuNDIxOSAxLjQzMzYgMjIuNTY2NCAwLjU4NTkgMjEuNTA3OCAwLjU4NTkgWiBNIDIxLjUwNzggMC41ODU5IE0gMTUuNzkzIDUuMTEzMyBMIDE5LjIzODMgNS4xMTMzIEwgMTguNTM1MiAxNi42Mjg5IEwgMTcuNzgxMyA1LjExMzMgTCAyMS4xNDA2IDUuMTEzMyBMIDE5LjY1NjMgMTguOTAyMyBMIDE3LjI0NjEgMTguOTAyMyBaIE0gMTUuMzQzOCA2LjgzNTkgTCAxMy44ODY3IDYuODM1OSBMIDEzLjg4NjcgMTguODg2NyBMIDEyLjAzNTIgMTguODg2NyBMIDEyLjAzNTIgNi44MzU5IEwgMTAuNjEzMyA2LjgzNTkgTCAxMC42MTMzIDUuMDk3NyBMIDE1LjM0MzggNS4wOTc3IFogTSAzLjU0MyAyMi4yMjY2IEwgMy41NDMgMTguNzg1MiBMIDQuMjEwOSAxOC43ODUyIEMgNC41OTc3IDE4Ljc4NTIgNC44MjgxIDE4Ljk4NDQgNC44MjgxIDE5LjQ3MjcgTCA0LjgyODEgMTkuOTg4MyBDIDQuODI4MSAyMC4zMDQ3IDQuNzMwNSAyMC40NTcgNC41OTc3IDIwLjUzOTEgQyA0Ljc1MzkgMjAuNjU2MyA0Ljg0MzggMjAuODQzOCA0LjgyODEgMjEuMDQzIEwgNC44MjgxIDIxLjU0MyBDIDQuODI4MSAyMi4wMTE3IDQuNTc4MSAyMi4yMjY2IDQuMjEwOSAyMi4yMjY2IFogTSA0LjAxMTcgMjAuNzIyNyBMIDQuMDExNyAyMS43OTMgTCA0LjE5NTMgMjEuNzkzIEMgNC4zNDM4IDIxLjc5MyA0LjM5NDUgMjEuNzEwOSA0LjM5NDUgMjEuNTQzIEwgNC4zOTQ1IDIwLjk1NyBDIDQuMzk0NSAyMC43OTMgNC4zNDM4IDIwLjcyMjcgNC4xOTUzIDIwLjcyMjcgWiBNIDQuMDExNyAxOS4yMTg4IEwgNC4wMTE3IDIwLjM1NTUgTCA0LjE3OTcgMjAuMzU1NSBDIDQuMzQzOCAyMC4zNTU1IDQuMzc4OSAyMC4zMDQ3IDQuMzc4OSAyMC4xMDU1IEwgNC4zNzg5IDE5LjQzNzUgQyA0LjM3ODkgMTkuMjY5NSA0LjMyODEgMTkuMjAzMSA0LjE3OTcgMTkuMjAzMSBMIDQuMDExNyAxOS4yMDMxIFogTSA1LjkzMzYgMjEuNTI3MyBMIDUuNTE1NiAyMS41MjczIEwgNS40NjQ4IDIyLjIyNjYgTCA0Ljk5NjEgMjIuMjI2NiBMIDUuNDE0MSAxOC43ODUyIEwgNi4wNjY0IDE4Ljc4NTIgTCA2LjQ2ODggMjIuMjI2NiBMIDUuOTg0NCAyMi4yMjY2IFogTSA1LjcxNDggMTkuMTY4IEwgNS42OTkyIDE5LjE2OCBDIDUuNjY0MSAxOS41ODU5IDUuNjE3MiAyMC4zMDQ3IDUuNTk3NyAyMC41MzkxIEwgNS41NDY5IDIxLjE0MDYgTCA1Ljg5ODQgMjEuMTQwNiBMIDUuODQ3NyAyMC41MzkxIEMgNS44MzIgMjAuMzA0NyA1Ljc2NTYgMTkuNTg1OSA1LjcxNDggMTkuMTY4IE0gMi4xODc1IDIyLjIyNjYgTCAxLjc4OTEgMjIuMjI2NiBMIDEuNzg5MSAxOC43ODUyIEwgMi40MjE5IDE4Ljc4NTIgTCAyLjk0MTQgMjEuNjA5NCBDIDIuODkwNiAyMC45NDE0IDIuODM5OCAyMC4xMjExIDIuODM5OCAxOS40MjE5IEwgMi44Mzk4IDE4Ljc4NTIgTCAzLjI0MjIgMTguNzg1MiBMIDMuMjQyMiAyMi4yMjY2IEwgMi42NTYzIDIyLjIyNjYgTCAyLjE0MDYgMTkuNDcyNyBDIDIuMTcxOSAyMC4xMDU1IDIuMTg3NSAyMC42MjUgMi4xODc1IDIxLjE0MDYgWiBNIDIuMTg3NSAyMi4yMjY2XCI7XG4gICAgc3ZnW1wiUFJJTUVWSURFT1wiXSA9IFwiTSAxLjE2MDE1NiAyLjQ1MzEyNSBaIE0gMS4xNjAxNTYgMi40NTMxMjUgWiBNIDEwLjI0NjA5NCAwLjQxNDA2MiBDIDkuNzkyOTY5IDAuNDE0MDYyIDkuNTIzNDM4IDAuNjM2NzE5IDkuNDg4MjgxIDEuMDQyOTY5IEMgOS40Njg3NSAxLjQ1MzEyNSA5LjcwMzEyNSAxLjY5MTQwNiAxMC4wMjczNDQgMS43NSBDIDEwLjE1NjI1IDEuNzc3MzQ0IDEwLjI4NTE1NiAxLjc3NzM0NCAxMC40MTQwNjIgMS43NSBDIDEwLjcxMDkzOCAxLjcxMDkzOCAxMC45MzM1OTQgMS40Njg3NSAxMC45NTMxMjUgMS4xNzE4NzUgQyAxMC45ODA0NjkgMC44MjQyMTkgMTAuODI0MjE5IDAuNTU0Njg4IDEwLjUxNTYyNSAwLjQ1MzEyNSBDIDEwLjQyNTc4MSAwLjQyNTc4MSAxMC4zMzk4NDQgMC40MDYyNSAxMC4yNDYwOTQgMC40MTQwNjIgWiBNIDMuNDk2MDk0IDIuMzI0MjE5IEMgMy4wNDY4NzUgMi4zMTY0MDYgMi42MzY3MTkgMi40NzI2NTYgMi4yNTM5MDYgMi43NTc4MTIgQyAyLjIxODc1IDIuNzg5MDYyIDIuMTc5Njg4IDIuODE2NDA2IDIuMTI4OTA2IDIuODQzNzUgQyAyLjExNzE4OCAyLjgzNTkzOCAyLjEwOTM3NSAyLjgzMjAzMSAyLjEwOTM3NSAyLjgyNDIxOSBDIDIuMDg5ODQ0IDIuNzY5NTMxIDIuMDc4MTI1IDIuNzA3MDMxIDIuMDYyNSAyLjY1NjI1IEMgMi4wMTU2MjUgMi41MDc4MTIgMS45NjA5MzggMi40NjA5MzggMS44MDg1OTQgMi40NjA5MzggQyAxLjYzNjcxOSAyLjQ2MDkzOCAxLjQ1NzAzMSAyLjQ2NDg0NCAxLjI4NTE1NiAyLjQ2MDkzOCBDIDEuMTYwMTU2IDIuNDUzMTI1IDEuMDM5MDYyIDIuNDcyNjU2IDAuOTQxNDA2IDIuNTc0MjE5IEMgMC45NDE0MDYgNC41NjY0MDYgMC45NDkyMTkgNi41NzAzMTIgMC45NDkyMTkgOC41NTQ2ODggQyAxLjAyMzQzOCA4LjY3NTc4MSAxLjEzNjcxOSA4LjY5NTMxMiAxLjI3MzQzOCA4LjY5NTMxMiBDIDEuNDc2NTYyIDguNjkxNDA2IDEuNjgzNTk0IDguNjk1MzEyIDEuODg2NzE5IDguNjk1MzEyIEMgMi4yNDYwOTQgOC42OTUzMTIgMi4yNDYwOTQgOC42OTUzMTIgMi4yNDYwOTQgOC4zMzk4NDQgTCAyLjI0NjA5NCA2LjcxODc1IEMgMi4yNDYwOTQgNi42Nzk2ODggMi4yMjY1NjIgNi42Mjg5MDYgMi4yNjU2MjUgNi41OTc2NTYgQyAyLjU1NDY4OCA2LjgyMDMxMiAyLjg5ODQzOCA2Ljk1MzEyNSAzLjI1NzgxMiA2Ljk4ODI4MSBDIDMuNzY1NjI1IDcuMDQyOTY5IDQuMjE0ODQ0IDYuOTE0MDYyIDQuNjAxNTYyIDYuNTc4MTI1IEMgNC44Nzg5MDYgNi4zMjAzMTIgNS4wODU5MzggNS45ODgyODEgNS4xOTUzMTIgNS42MjUgQyA1LjM0Mzc1IDUuMTYwMTU2IDUuMzU1NDY5IDQuNjc5Njg4IDUuMzE2NDA2IDQuMjA3MDMxIEMgNS4yOTY4NzUgMy45MTAxNTYgNS4yMTQ4NDQgMy42MTMyODEgNS4wOTM3NSAzLjM1MTU2MiBDIDQuODU5Mzc1IDIuODU5Mzc1IDQuNSAyLjUgMy45NTMxMjUgMi4zNzEwOTQgQyAzLjc5Njg3NSAyLjMzNTkzOCAzLjY0NDUzMSAyLjMyNDIxOSAzLjQ5NjA5NCAyLjMyNDIxOSBaIE0gMTQuNjYwMTU2IDIuMzI0MjE5IEMgMTQuNTE1NjI1IDIuMzI0MjE5IDE0LjM3NSAyLjMzNTkzOCAxNC4yMzQzNzUgMi4zNzEwOTQgQyAxMy44NjMyODEgMi40Mzc1IDEzLjUzMTI1IDIuNjAxNTYyIDEzLjIxNDg0NCAyLjc5Njg3NSBDIDEzLjE3OTY4OCAyLjgxNjQwNiAxMy4xNDA2MjUgMi44NTkzNzUgMTMuMDg1OTM4IDIuODU5Mzc1IEMgMTMuMDU4NTk0IDIuNzY5NTMxIDEzLjAzOTA2MiAyLjY5NTMxMiAxMy4wMTE3MTkgMi42MjEwOTQgQyAxMi45NzY1NjIgMi41MTk1MzEgMTIuOTE3OTY5IDIuNDYwOTM4IDEyLjgwODU5NCAyLjQ2MDkzOCBMIDEyLjEwMTU2MiAyLjQ2MDkzOCBDIDEyLjAzMTI1IDIuNDYwOTM4IDExLjk2NDg0NCAyLjUgMTEuOTM3NSAyLjU2NjQwNiBDIDExLjkzMzU5NCAyLjYxMzI4MSAxMS45MjU3ODEgMi42NjAxNTYgMTEuOTI1NzgxIDIuNzA3MDMxIEwgMTEuOTI1NzgxIDYuNjU2MjUgQyAxMS45MjU3ODEgNi44NTE1NjIgMTEuOTcyNjU2IDYuOTE0MDYyIDEyLjE3NTc4MSA2LjkxNDA2MiBMIDEyLjkzNzUgNi45MTQwNjIgQyAxMy4xNDg0MzggNi45MTQwNjIgMTMuMTk1MzEyIDYuODY3MTg4IDEzLjE5NTMxMiA2LjY1NjI1IEwgMTMuMTk1MzEyIDMuNjEzMjgxIEMgMTMuMTc5Njg4IDMuNTc0MjE5IDEzLjIxNDg0NCAzLjUxOTUzMSAxMy4yNTM5MDYgMy41MDM5MDYgQyAxMy41NjY0MDYgMy4zNTU0NjkgMTMuOTE3OTY5IDMuMjg5MDYyIDE0LjI1MzkwNiAzLjMxNjQwNiBDIDE0LjQ0OTIxOSAzLjMyNDIxOSAxNC42MTMyODEgMy40NTcwMzEgMTQuNjUyMzQ0IDMuNjUyMzQ0IEMgMTQuNjc5Njg4IDMuNzUgMTQuNjg3NSAzLjg1NTQ2OSAxNC42ODc1IDMuOTQ5MjE5IEwgMTQuNjg3NSA2LjY0NDUzMSBDIDE0LjY4NzUgNi44NTkzNzUgMTQuNzI2NTYyIDYuOTA2MjUgMTQuOTQxNDA2IDYuOTA2MjUgTCAxNS41NDI5NjkgNi45MDYyNSBDIDE1LjYyODkwNiA2LjkwNjI1IDE1LjcxODc1IDYuOTA2MjUgMTUuODA0Njg4IDYuOTAyMzQ0IEMgMTUuODg2NzE5IDYuOTAyMzQ0IDE1Ljk0OTIxOSA2Ljg0NzY1NiAxNS45NDkyMTkgNi43NjU2MjUgQyAxNS45NjA5MzggNi43MTA5MzggMTUuOTYwOTM4IDYuNjU2MjUgMTUuOTYwOTM4IDYuNjA1NDY5IEwgMTUuOTYwOTM4IDMuNjA1NDY5IEMgMTUuOTUzMTI1IDMuNTU4NTk0IDE1Ljk4MDQ2OSAzLjUxMTcxOSAxNi4wMjczNDQgMy41IEMgMTYuMzMyMDMxIDMuMzU1NDY5IDE2LjY3MTg3NSAzLjI4OTA2MiAxNy4wMDc4MTIgMy4zMTY0MDYgQyAxNy4xOTE0MDYgMy4zMjQyMTkgMTcuMzUxNTYyIDMuNDUzMTI1IDE3LjM5MDYyNSAzLjYyNSBDIDE3LjQyNTc4MSAzLjcyNjU2MiAxNy40MzM1OTQgMy44MjgxMjUgMTcuNDI1NzgxIDMuOTM3NSBMIDE3LjQyNTc4MSA2LjU3ODEyNSBDIDE3LjQyNTc4MSA2LjY0NDUzMSAxNy40MjU3ODEgNi43MDcwMzEgMTcuNDQxNDA2IDYuNzY1NjI1IEMgMTcuNDUzMTI1IDYuODMyMDMxIDE3LjUwNzgxMiA2Ljg5NDUzMSAxNy41NzQyMTkgNi45MDIzNDQgQyAxNy42MjEwOTQgNi45MDYyNSAxNy42Njc5NjkgNi45MDYyNSAxNy43MTQ4NDQgNi45MDYyNSBMIDE4LjQxMDE1NiA2LjkwNjI1IEMgMTguNjY3OTY5IDYuOTA2MjUgMTguNzAzMTI1IDYuODc1IDE4LjcwMzEyNSA2LjYxNzE4OCBMIDE4LjcwMzEyNSAzLjY2MDE1NiBDIDE4LjcwMzEyNSAzLjU5Mzc1IDE4LjcwMzEyNSAzLjUzMTI1IDE4LjY5NTMxMiAzLjQ3MjY1NiBDIDE4LjY2Nzk2OSAzLjE3NTc4MSAxOC41ODU5MzggMi44OTg0MzggMTguMzcxMDk0IDIuNjc1NzgxIEMgMTguMTQ4NDM4IDIuNDM3NSAxNy44NTE1NjIgMi4zNDM3NSAxNy41MjczNDQgMi4zMzIwMzEgQyAxNy4wNzQyMTkgMi4zMDQ2ODggMTYuNjI4OTA2IDIuNDA2MjUgMTYuMjMwNDY5IDIuNjEzMjgxIEMgMTYuMDc4MTI1IDIuNjk1MzEyIDE1LjkyNTc4MSAyLjc4MTI1IDE1Ljc4NTE1NiAyLjg3MTA5NCBDIDE1Ljc3NzM0NCAyLjg1OTM3NSAxNS43NzM0MzggMi44NTkzNzUgMTUuNzc3MzQ0IDIuODUxNTYyIEMgMTUuNzczNDM4IDIuODQzNzUgMTUuNzU3ODEyIDIuODMyMDMxIDE1Ljc0NjA5NCAyLjgwODU5NCBDIDE1LjU5NzY1NiAyLjU4NTkzOCAxNS4zNTU0NjkgMi40MjU3ODEgMTUuMDg1OTM4IDIuMzcxMDk0IEMgMTQuOTQxNDA2IDIuMzM1OTM4IDE0LjgwMDc4MSAyLjMyNDIxOSAxNC42NjAxNTYgMi4zMjQyMTkgWiBNIDIxLjg5NDUzMSAyLjM2MzI4MSBDIDIxLjcwNzAzMSAyLjM0Mzc1IDIxLjUxMTcxOSAyLjM1MTU2MiAyMS4zMjAzMTIgMi4zNzEwOTQgQyAyMC40MjE4NzUgMi40ODA0NjkgMTkuODM1OTM4IDIuOTcyNjU2IDE5LjU2NjQwNiAzLjgzNTkzOCBDIDE5LjM3NSA0LjQyMTg3NSAxOS40MDIzNDQgNS4wMTU2MjUgMTkuNTUwNzgxIDUuNjEzMjgxIEMgMTkuNzUzOTA2IDYuMzY3MTg4IDIwLjI1MzkwNiA2LjgyMDMxMiAyMS4wMTU2MjUgNi45ODA0NjkgQyAyMS40NDkyMTkgNy4wNzgxMjUgMjEuODgyODEyIDcuMDU0Njg4IDIyLjMyMDMxMiA2Ljk4ODI4MSBDIDIyLjU1MDc4MSA2Ljk0OTIxOSAyMi43NzczNDQgNi44OTQ1MzEgMjIuOTk2MDk0IDYuODA0Njg4IEMgMjMuMTI1IDYuNzU3ODEyIDIzLjE5MTQwNiA2LjY3OTY4OCAyMy4xODM1OTQgNi41MzEyNSBDIDIzLjE4MzU5NCA2LjM5NDUzMSAyMy4xODM1OTQgNi4yNTM5MDYgMjMuMTgzNTk0IDYuMTA5Mzc1IEMgMjMuMTgzNTk0IDUuOTMzNTk0IDIzLjExNzE4OCA1Ljg4MjgxMiAyMi45NTMxMjUgNS45MjE4NzUgQyAyMi43ODUxNTYgNS45NjA5MzggMjIuNjI4OTA2IDUuOTk2MDk0IDIyLjQ2MDkzOCA2LjAzMTI1IEMgMjIuMTA5Mzc1IDYuMTA1NDY5IDIxLjc0NjA5NCA2LjEwNTQ2OSAyMS4zODY3MTkgNi4wNDI5NjkgQyAyMC45MDIzNDQgNS45NDkyMTkgMjAuNTkzNzUgNS41MzEyNSAyMC42MTcxODggNS4wMTU2MjUgQyAyMC42NzE4NzUgNS4wMjM0MzggMjAuNzI2NTYyIDUuMDMxMjUgMjAuNzgxMjUgNS4wNDI5NjkgQyAyMS4yMDcwMzEgNS4xMTcxODggMjEuNjQ0NTMxIDUuMTI1IDIyLjA3ODEyNSA1LjA1ODU5NCBDIDIyLjMyODEyNSA1LjAyMzQzOCAyMi41NjI1IDQuOTQ5MjE5IDIyLjc4NTE1NiA0LjgyODEyNSBDIDIzLjA0Mjk2OSA0LjY3OTY4OCAyMy4yMzA0NjkgNC40NzY1NjIgMjMuMzEyNSA0LjE5NTMxMiBDIDIzLjUwNzgxMiAzLjQ3MjY1NiAyMy4yMDMxMjUgMi43NSAyMi40NTMxMjUgMi40ODA0NjkgQyAyMi4yNzM0MzggMi40MjU3ODEgMjIuMDgyMDMxIDIuMzg2NzE5IDIxLjg5NDUzMSAyLjM2MzI4MSBaIE0gOC44MjAzMTIgMi40MTAxNTYgQyA4LjQ0OTIxOSAyLjM4NjcxOSA4LjA4NTkzOCAyLjUgNy43ODkwNjIgMi43MzA0NjkgQyA3LjY3MTg3NSAyLjgxNjQwNiA3LjU2NjQwNiAyLjkxNzk2OSA3LjQ1NzAzMSAzLjAxOTUzMSBDIDcuNDM3NSAzLjA1NDY4OCA3LjQwMjM0NCAzLjA3NDIxOSA3LjM2MzI4MSAzLjA4NTkzOCBDIDcuMzI4MTI1IDIuOTMzNTk0IDcuMjkyOTY5IDIuNzg5MDYyIDcuMjUzOTA2IDIuNjQ4NDM4IEMgNy4yMTQ4NDQgMi41MDc4MTIgNy4xNDQ1MzEgMi40NTMxMjUgNi45OTYwOTQgMi40NTMxMjUgTCA2LjQ0OTIxOSAyLjQ1MzEyNSBDIDYuMTg3NSAyLjQ1MzEyNSA2LjE2MDE1NiAyLjQ4NDM3NSA2LjE2MDE1NiAyLjc1IEwgNi4xNjAxNTYgNi42MjUgQyA2LjE2MDE1NiA2LjY2NDA2MiA2LjE2MDE1NiA2LjcxMDkzOCA2LjE2Nzk2OSA2Ljc1NzgxMiBDIDYuMTc1NzgxIDYuODMyMDMxIDYuMjI2NTYyIDYuODk0NTMxIDYuMzAwNzgxIDYuOTAyMzQ0IEMgNi4zNDM3NSA2LjkwNjI1IDYuMzkwNjI1IDYuOTA2MjUgNi40Mjk2ODggNi45MDYyNSBMIDcuMTcxODc1IDYuOTA2MjUgQyA3LjIwNzAzMSA2LjkwNjI1IDcuMjUzOTA2IDYuOTA2MjUgNy4yOTI5NjkgNi45MDIzNDQgQyA3LjM2NzE4OCA2LjkwMjM0NCA3LjQyOTY4OCA2Ljg0NzY1NiA3LjQyOTY4OCA2Ljc3MzQzOCBDIDcuNDM3NSA2LjcxODc1IDcuNDM3NSA2LjY3MTg3NSA3LjQzNzUgNi42MjUgTCA3LjQzNzUgMy44ODI4MTIgQyA3LjQzNzUgMy44MjQyMTkgNy40Mzc1IDMuNzY5NTMxIDcuNTE1NjI1IDMuNzM0Mzc1IEMgNy44NzUgMy42MjEwOTQgOC4yNDYwOTQgMy41NDY4NzUgOC42MzI4MTIgMy41NzgxMjUgQyA4LjcwNzAzMSAzLjU4NTkzOCA4Ljc4NTE1NiAzLjU4NTkzOCA4Ljg1OTM3NSAzLjU4NTkzOCBDIDguOTYwOTM4IDMuNTc0MjE5IDkuMDAzOTA2IDMuNTMxMjUgOS4wMjczNDQgMy40Mjk2ODggQyA5LjA0Mjk2OSAzLjM1MTU2MiA5LjA0Mjk2OSAzLjI3NzM0NCA5LjAzNTE1NiAzLjE5NTMxMiBDIDkuMDM1MTU2IDMgOS4wNDI5NjkgMi44MDQ2ODggOS4wMzUxNTYgMi42MDkzNzUgQyA5LjAyMzQzOCAyLjQ2NDg0NCA4Ljk2ODc1IDIuNDE3OTY5IDguODIwMzEyIDIuNDEwMTU2IFogTSA5Ljc3NzM0NCAyLjQ1MzEyNSBDIDkuNjQ0NTMxIDIuNDYwOTM4IDkuNTg5ODQ0IDIuNTExNzE5IDkuNTgyMDMxIDIuNjQ4NDM4IEwgOS41ODIwMzEgNC42NzE4NzUgQyA5LjU4MjAzMSA1LjMyMDMxMiA5LjU4MjAzMSA1Ljk2ODc1IDkuNTgyMDMxIDYuNjA1NDY5IEMgOS41ODIwMzEgNi42NDQ1MzEgOS41ODIwMzEgNi42OTE0MDYgOS41ODIwMzEgNi43MzgyODEgQyA5LjU4OTg0NCA2LjgyMDMxMiA5LjY1NjI1IDYuODc4OTA2IDkuNzM4MjgxIDYuODg2NzE5IEMgOS43NjU2MjUgNi44OTQ1MzEgOS43OTI5NjkgNi44OTQ1MzEgOS44MjAzMTIgNi44OTQ1MzEgTCAxMC42MTcxODggNi44OTQ1MzEgQyAxMC42NDg0MzggNi44OTQ1MzEgMTAuNjc1NzgxIDYuODk0NTMxIDEwLjcxMDkzOCA2Ljg4NjcxOSBDIDEwLjc4NTE1NiA2Ljg3ODkwNiAxMC44Mzk4NDQgNi44MzIwMzEgMTAuODQzNzUgNi43NTc4MTIgQyAxMC44NTE1NjIgNi42OTE0MDYgMTAuODU5Mzc1IDYuNjI4OTA2IDEwLjg1OTM3NSA2LjU3MDMxMiBMIDEwLjg1OTM3NSAyLjc3NzM0NCBDIDEwLjg1OTM3NSAyLjcyMjY1NiAxMC44NTkzNzUgMi42NzU3ODEgMTAuODUxNTYyIDIuNjI4OTA2IEMgMTAuODM5ODQ0IDIuNDkyMTg4IDEwLjc5Njg3NSAyLjQ1MzEyNSAxMC42Njc5NjkgMi40NTMxMjUgQyAxMC4zNzEwOTQgMi40NDUzMTIgMTAuMDc0MjE5IDIuNDQ1MzEyIDkuNzc3MzQ0IDIuNDUzMTI1IFogTSAyMS42MzY3MTkgMy4yNDIxODggQyAyMS43NDYwOTQgMy4yNSAyMS44NDc2NTYgMy4yNjk1MzEgMjEuOTQxNDA2IDMuMzA4NTk0IEMgMjIuMDg5ODQ0IDMuMzcxMDk0IDIyLjE4MzU5NCAzLjUwMzkwNiAyMi4yMDcwMzEgMy42Njc5NjkgQyAyMi4yMjY1NjIgMy43NjE3MTkgMjIuMjE4NzUgMy44NzEwOTQgMjIuMTgzNTk0IDMuOTY0ODQ0IEMgMjIuMTE3MTg4IDQuMTY3OTY5IDIxLjk1NzAzMSA0LjI1MzkwNiAyMS43NTM5MDYgNC4yOTY4NzUgQyAyMS42MzY3MTkgNC4zMjQyMTkgMjEuNTExNzE5IDQuMzM1OTM4IDIxLjM4MjgxMiA0LjMyNDIxOSBDIDIxLjE2MDE1NiA0LjMyNDIxOSAyMC45Mzc1IDQuMzA4NTk0IDIwLjcxNDg0NCA0LjI3MzQzOCBDIDIwLjYyNSA0LjI2MTcxOSAyMC42MjUgNC4yNjE3MTkgMjAuNjQwNjI1IDQuMTY3OTY5IEMgMjAuNjUyMzQ0IDQuMDMxMjUgMjAuNjkxNDA2IDMuOTAyMzQ0IDIwLjc0NjA5NCAzLjc3NzM0NCBDIDIwLjkxNDA2MiAzLjM1NTQ2OSAyMS4yNzM0MzggMy4yMTQ4NDQgMjEuNjM2NzE5IDMuMjQyMTg4IFogTSAzLjA4MjAzMSAzLjI4OTA2MiBDIDMuMTY0MDYyIDMuMjg5MDYyIDMuMjUgMy4yOTY4NzUgMy4zMzIwMzEgMy4zMTY0MDYgQyAzLjU3NDIxOSAzLjM1MTU2MiAzLjc3NzM0NCAzLjUwMzkwNiAzLjg3MTA5NCAzLjcyMjY1NiBDIDMuOTYwOTM4IDMuOTEwMTU2IDQuMDE1NjI1IDQuMTA1NDY5IDQuMDE5NTMxIDQuMzA4NTk0IEMgNC4wNTQ2ODggNC42NzE4NzUgNC4wNTQ2ODggNS4wMzkwNjIgMy45NTMxMjUgNS4zODI4MTIgQyAzLjkxNDA2MiA1LjU1ODU5NCAzLjgyNDIxOSA1LjcxODc1IDMuNjkxNDA2IDUuODM5ODQ0IEMgMy41NDI5NjkgNS45NjA5MzggMy4zNTkzNzUgNi4wMzUxNTYgMy4xNzE4NzUgNi4wMzUxNTYgQyAyLjg3ODkwNiA2LjA1ODU5NCAyLjU4OTg0NCA1Ljk5NjA5NCAyLjMzMjAzMSA1Ljg1NTQ2OSBDIDIuMjczNDM4IDUuODI4MTI1IDIuMjMwNDY5IDUuNzY1NjI1IDIuMjM4MjgxIDUuNjk5MjE5IEwgMi4yMzgyODEgNC42Njc5NjkgQyAyLjIzODI4MSA0LjMyNDIxOSAyLjI0NjA5NCAzLjk4NDM3NSAyLjIzODI4MSAzLjY0MDYyNSBDIDIuMjMwNDY5IDMuNTU4NTk0IDIuMjc3MzQ0IDMuNDkyMTg4IDIuMzUxNTYyIDMuNDY0ODQ0IEMgMi41ODk4NDQgMy4zNTE1NjIgMi44MjQyMTkgMy4yODkwNjIgMy4wODIwMzEgMy4yODkwNjIgWiBNIDYuNTkzNzUgOC44MzIwMzEgQyA2LjU1MDc4MSA4LjgyNDIxOSA2LjUxMTcxOSA4LjgzMjAzMSA2LjQ2NDg0NCA4LjgzOTg0NCBDIDYuMTA1NDY5IDguODYzMjgxIDUuODQzNzUgOS4xMTMyODEgNS44MDg1OTQgOS40NTMxMjUgQyA1Ljc3NzM0NCA5Ljg3ODkwNiA1Ljk3MjY1NiAxMC4xNjc5NjkgNi4zNDc2NTYgMTAuMjYxNzE5IEMgNi40MTc5NjkgMTAuMjY5NTMxIDYuNDg0Mzc1IDEwLjI4MTI1IDYuNTUwNzgxIDEwLjI4MTI1IEMgNy4wNDI5NjkgMTAuMjk2ODc1IDcuNDE0MDYyIDEwLjAxOTUzMSA3LjM2NzE4OCA5LjQ1NzAzMSBDIDcuMzU1NDY5IDkuMjAzMTI1IDcuMTkxNDA2IDguOTgwNDY5IDYuOTU3MDMxIDguODkwNjI1IEMgNi44MzU5MzggOC44NDM3NSA2LjcxNDg0NCA4LjgxNjQwNiA2LjU5Mzc1IDguODMyMDMxIFogTSAxMS43MDcwMzEgOC44NzEwOTQgQyAxMS40NzI2NTYgOC44NzEwOTQgMTEuNDMzNTk0IDguOTE0MDYyIDExLjQzMzU5NCA5LjE0ODQzOCBMIDExLjQzMzU5NCAxMS4xMjUgQyAxMS40MzM1OTQgMTEuMTcxODc1IDExLjQ0NTMxMiAxMS4yMTQ4NDQgMTEuNDE3OTY5IDExLjI1MzkwNiBDIDExLjM2MzI4MSAxMS4yNTM5MDYgMTEuMzMyMDMxIDExLjIxNDg0NCAxMS4yODkwNjIgMTEuMTg3NSBDIDEwLjY1NjI1IDEwLjgxNjQwNiA5Ljk4ODI4MSAxMC43NSA5LjMxMjUgMTEuMDU4NTk0IEMgOC44Mzk4NDQgMTEuMjgxMjUgOC41NTA3ODEgMTEuNjc5Njg4IDguMzU5Mzc1IDEyLjE1MjM0NCBDIDguMTc5Njg4IDEyLjYwNTQ2OSA4LjEzMjgxMiAxMy4wNzgxMjUgOC4xNDQ1MzEgMTMuNTYyNSBDIDguMTQ0NTMxIDE0LjAxNTYyNSA4LjI0NjA5NCAxNC40NjA5MzggOC40NDkyMTkgMTQuODY3MTg4IEMgOC42ODM1OTQgMTUuMzEyNSA5LjAyMzQzOCAxNS42NTYyNSA5LjUwNzgxMiAxNS43OTY4NzUgQyAxMC4xNzU3ODEgMTYuMDA3ODEyIDEwLjc5Njg3NSAxNS45MDYyNSAxMS4zNzEwOTQgMTUuNDgwNDY5IEMgMTEuNDEwMTU2IDE1LjQ2MDkzOCAxMS40MzM1OTQgMTUuNDE0MDYyIDExLjQ5MjE4OCAxNS40MDYyNSBDIDExLjUxOTUzMSAxNS40NzI2NTYgMTEuNTQ2ODc1IDE1LjU0Njg3NSAxMS41NTg1OTQgMTUuNjEzMjgxIEMgMTEuNTgyMDMxIDE1LjcxNDg0NCAxMS42Njc5NjkgMTUuNzg1MTU2IDExLjc2OTUzMSAxNS43ODUxNTYgTCAxMS45MTc5NjkgMTUuNzg1MTU2IEMgMTIuMTQwNjI1IDE1Ljc4NTE1NiAxMi4zNTE1NjIgMTUuNzg5MDYyIDEyLjU2NjQwNiAxNS43ODUxNTYgQyAxMi43NDIxODggMTUuNzg1MTU2IDEyLjc4OTA2MiAxNS43MzA0NjkgMTIuNzk2ODc1IDE1LjU0Njg3NSBMIDEyLjc5Njg3NSA5LjEwOTM3NSBDIDEyLjc4OTA2MiA4LjkxNDA2MiAxMi43NDIxODggOC44NzEwOTQgMTIuNTU4NTk0IDguODcxMDk0IFogTSAyMS4wNTA3ODEgMTAuODcxMDk0IEMgMjAuODU1NDY5IDEwLjg2MzI4MSAyMC42NjAxNTYgMTAuODcxMDk0IDIwLjQ2NDg0NCAxMC45MDIzNDQgQyAxOS42NDA2MjUgMTEuMDIzNDM4IDE5LjA0Njg3NSAxMS40NjQ4NDQgMTguNzU3ODEyIDEyLjI0NjA5NCBDIDE4LjQ4MDQ2OSAxMi45OTYwOTQgMTguNDg0Mzc1IDEzLjgxMjUgMTguNzYxNzE5IDE0LjU2MjUgQyAxOS4wMDM5MDYgMTUuMjM4MjgxIDE5LjUgMTUuNjY3OTY5IDIwLjE5OTIxOSAxNS44NDM3NSBDIDIwLjU3MDMxMiAxNS45Mzc1IDIwLjk2NDg0NCAxNS45NjA5MzggMjEuMzQ3NjU2IDE1LjkwNjI1IEMgMjIuNjI4OTA2IDE1Ljc1IDIzLjE2NDA2MiAxNC43NzczNDQgMjMuMjUgMTMuOTMzNTk0IEMgMjMuMjUgMTMuOTMzNTk0IDIzLjI4NTE1NiAxMy42ODM1OTQgMjMuMjg1MTU2IDEzLjU2MjUgTCAyMy4yNzczNDQgMTMuMDU4NTk0IEMgMjMuMjc3MzQ0IDEyLjk4NDM3NSAyMy4yNTc4MTIgMTIuODM5ODQ0IDIzLjI1NzgxMiAxMi44MzU5MzggQyAyMy4yNDYwOTQgMTIuNzE4NzUgMjMuMjIyNjU2IDEyLjYwNTQ2OSAyMy4xOTE0MDYgMTIuNDg4MjgxIEMgMjIuOTY4NzUgMTEuNjg3NSAyMi40NTMxMjUgMTEuMTUyMzQ0IDIxLjYzMjgxMiAxMC45NDUzMTIgQyAyMS40Mzc1IDEwLjg5ODQzOCAyMS4yNDYwOTQgMTAuODc1IDIxLjA1MDc4MSAxMC44NzEwOTQgWiBNIDE1Ljk3NjU2MiAxMC45MjE4NzUgQyAxNC45NDkyMTkgMTAuOTQ1MzEyIDE0LjE2NDA2MiAxMS40NjQ4NDQgMTMuODQ3NjU2IDEyLjQ4ODI4MSBDIDEzLjYzMjgxMiAxMy4xNzE4NzUgMTMuNjYwMTU2IDEzLjg1OTM3NSAxMy44NjcxODggMTQuNTQyOTY5IEMgMTQuMDg1OTM4IDE1LjIzODI4MSAxNC41NzgxMjUgMTUuNjY0MDYyIDE1LjI3MzQzOCAxNS44NTE1NjIgQyAxNS41NzAzMTIgMTUuOTI1NzgxIDE1Ljg3ODkwNiAxNS45NTMxMjUgMTYuMTkxNDA2IDE1Ljk0NTMxMiBDIDE2LjYzNjcxOSAxNS45Mzc1IDE3LjA4MjAzMSAxNS44NTE1NjIgMTcuNSAxNS42ODc1IEMgMTcuNjgzNTk0IDE1LjYyMTA5NCAxNy43MjI2NTYgMTUuNTYyNSAxNy43MjI2NTYgMTUuMzcxMDk0IEwgMTcuNzIyNjU2IDE0LjkzMzU5NCBDIDE3LjcxNDg0NCAxNC43NTc4MTIgMTcuNjQwNjI1IDE0LjY5NTMxMiAxNy40Njg3NSAxNC43MzgyODEgQyAxNy4zMzIwMzEgMTQuNzY5NTMxIDE3LjIwMzEyNSAxNC44MDQ2ODggMTcuMDcwMzEyIDE0LjgzOTg0NCBDIDE2LjY1NjI1IDE0LjkzMzU5NCAxNi4yMzA0NjkgMTQuOTUzMTI1IDE1LjgxMjUgMTQuODc4OTA2IEMgMTUuNDAyMzQ0IDE0Ljc5Njg3NSAxNS4xMTcxODggMTQuNTYyNSAxNS4wMDc4MTIgMTQuMTQ0NTMxIEMgMTQuOTc2NTYyIDE0LjAyMzQzOCAxNC45NDkyMTkgMTMuOTAyMzQ0IDE0Ljk0MTQwNiAxMy43NzM0MzggQyAxNC45Njg3NSAxMy43NzM0MzggMTUuMDAzOTA2IDEzLjc3MzQzOCAxNS4wMjM0MzggMTMuNzg1MTU2IEMgMTUuNDI5Njg4IDEzLjg1MTU2MiAxNS44Mzk4NDQgMTMuODg2NzE5IDE2LjI1IDEzLjg1MTU2MiBDIDE2LjYwMTU2MiAxMy44MzIwMzEgMTYuOTYwOTM4IDEzLjc2NTYyNSAxNy4yNzczNDQgMTMuNTk3NjU2IEMgMTcuNjAxNTYyIDEzLjQzMzU5NCAxNy44MjQyMTkgMTMuMTMyODEyIDE3Ljg5MDYyNSAxMi43ODEyNSBDIDE3LjkzNzUgMTIuNTU4NTk0IDE3LjkzNzUgMTIuMzI4MTI1IDE3Ljg5MDYyNSAxMi4xMDU0NjkgQyAxNy43NjU2MjUgMTEuNTU4NTk0IDE3LjQxNDA2MiAxMS4yMTQ4NDQgMTYuODg2NzE5IDExLjAzOTA2MiBDIDE2LjU5NzY1NiAxMC45NDUzMTIgMTYuMjc3MzQ0IDEwLjkxMDE1NiAxNS45NzY1NjIgMTAuOTIxODc1IFogTSAwLjY4NzUgMTEuMDE5NTMxIEMgMC41NjY0MDYgMTEuMDE5NTMxIDAuNTE1NjI1IDExLjA3ODEyNSAwLjUzOTA2MiAxMS4xOTkyMTkgQyAwLjU1ODU5NCAxMS4yODEyNSAwLjU4NTkzOCAxMS4zNzEwOTQgMC42MTcxODggMTEuNDQ1MzEyIEMgMC45ODQzNzUgMTIuNDEwMTU2IDEuMzU5Mzc1IDEzLjM2NzE4OCAxLjcyNjU2MiAxNC4zMjQyMTkgQyAxLjg3NSAxNC43MzA0NjkgMi4wMzUxNTYgMTUuMTQwNjI1IDIuMTkxNDA2IDE1LjU0Njg3NSBDIDIuMjU3ODEyIDE1LjcxNDg0NCAyLjM2NzE4OCAxNS43OTY4NzUgMi41NTQ2ODggMTUuNzg5MDYyIEMgMi44MjQyMTkgMTUuNzg5MDYyIDMuMDk3NjU2IDE1Ljc4OTA2MiAzLjM2NzE4OCAxNS43ODkwNjIgQyAzLjUgMTUuODA0Njg4IDMuNjIxMDk0IDE1LjcyMjY1NiAzLjY2Nzk2OSAxNS41OTM3NSBDIDMuNjgzNTk0IDE1LjU1NDY4OCAzLjcwMzEyNSAxNS41MTk1MzEgMy43MTA5MzggMTUuNDgwNDY5IEMgNC4xMjEwOTQgMTQuNDIxODc1IDQuNTM1MTU2IDEzLjM0NzY1NiA0Ljk0NTMxMiAxMi4yODkwNjIgTCA1LjMwODU5NCAxMS4zMTY0MDYgQyA1LjM5MDYyNSAxMS4wOTM3NSA1LjMzNTkzOCAxMS4wMjM0MzggNS4xMDkzNzUgMTEuMDIzNDM4IEwgNC4xNzU3ODEgMTEuMDIzNDM4IEMgNC4wNjY0MDYgMTEuMDIzNDM4IDMuOTYwOTM4IDExLjA5Mzc1IDMuOTMzNTk0IDExLjE5OTIxOSBMIDMuODkwNjI1IDExLjMxNjQwNiBDIDMuNjE3MTg4IDEyLjI2MTcxOSAzLjMzMjAzMSAxMy4xOTkyMTkgMy4wNDY4NzUgMTQuMTQ4NDM4IEMgMy4wMTU2MjUgMTQuMjczNDM4IDIuOTgwNDY5IDE0LjM4NjcxOSAyLjk0MTQwNiAxNC41MDc4MTIgQyAyLjkyNTc4MSAxNC41MDc4MTIgMi45MjE4NzUgMTQuNTA3ODEyIDIuOTI1NzgxIDE0LjUgQyAyLjY3NTc4MSAxMy42NTIzNDQgMi40MzM1OTQgMTIuODAwNzgxIDIuMTgzNTk0IDExLjk0OTIxOSBDIDIuMTA5Mzc1IDExLjcxNDg0NCAyLjA0Mjk2OSAxMS40NzY1NjIgMS45NzY1NjIgMTEuMjQ2MDk0IEMgMS45MzM1OTQgMTEuMTIxMDk0IDEuODc1IDExLjAxOTUzMSAxLjcyNjU2MiAxMS4wMTk1MzEgQyAxLjM4MjgxMiAxMS4wMTk1MzEgMS4wMzEyNSAxMS4wMTE3MTkgMC42ODc1IDExLjAxOTUzMSBaIE0gNi4xNDg0MzggMTEuMDIzNDM4IEMgNS45NTcwMzEgMTEuMDIzNDM4IDUuOTAyMzQ0IDExLjA3ODEyNSA1LjkwMjM0NCAxMS4yNjk1MzEgTCA1LjkwMjM0NCAxNS41IEMgNS45MDIzNDQgMTUuNTM1MTU2IDUuOTAyMzQ0IDE1LjU4MjAzMSA1LjkxMDE1NiAxNS42MTMyODEgQyA1LjkxNzk2OSAxNS43MzgyODEgNS45NzY1NjIgMTUuNzg5MDYyIDYuMTAxNTYyIDE1Ljc4OTA2MiBDIDYuNDI5Njg4IDE1Ljc5Njg3NSA2Ljc1MzkwNiAxNS43OTY4NzUgNy4wODU5MzggMTUuNzg5MDYyIEMgNy4yMDcwMzEgMTUuNzg5MDYyIDcuMjYxNzE5IDE1LjczMDQ2OSA3LjI3MzQzOCAxNS42MDkzNzUgTCA3LjI3MzQzOCAxMS4yNjk1MzEgQyA3LjI3MzQzOCAxMS4wNzgxMjUgNy4yMTg3NSAxMS4wMjM0MzggNy4wMjM0MzggMTEuMDIzNDM4IFogTSAxNS44NTE1NjIgMTEuODYzMjgxIEMgMTUuOTMzNTk0IDExLjg0NzY1NiAxNi4wMjM0MzggMTEuODU1NDY5IDE2LjEwOTM3NSAxMS44NjMyODEgQyAxNi4xMzY3MTkgMTEuODYzMjgxIDE2LjE2NDA2MiAxMS44NzUgMTYuMTkxNDA2IDExLjg3NSBDIDE2LjYyNSAxMS45NDE0MDYgMTYuNzIyNjU2IDEyLjI4MTI1IDE2LjY0ODQzOCAxMi42MDkzNzUgQyAxNi41ODIwMzEgMTIuODU5Mzc1IDE2LjM4NjcxOSAxMi45NDkyMTkgMTYuMTU2MjUgMTIuOTk2MDk0IEMgMTYuMDM1MTU2IDEzLjAxNTYyNSAxNS45MDYyNSAxMy4wMzEyNSAxNS43NzczNDQgMTMuMDIzNDM4IEMgMTUuNTMxMjUgMTMuMDE1NjI1IDE1LjI4MTI1IDEyLjk5NjA5NCAxNS4wMzUxNTYgMTIuOTYwOTM4IEMgMTQuOTg0Mzc1IDEyLjk1NzAzMSAxNC45NjA5MzggMTIuOTMzNTk0IDE0Ljk2ODc1IDEyLjg3NSBDIDE1LjAxNTYyNSAxMi42MzY3MTkgMTUuMDcwMzEyIDEyLjQxMDE1NiAxNS4yMTg3NSAxMi4yMTQ4NDQgQyAxNS4zODY3MTkgMTEuOTg0Mzc1IDE1LjYwNTQ2OSAxMS44ODI4MTIgMTUuODUxNTYyIDExLjg2MzI4MSBaIE0gMTAuMzk0NTMxIDExLjkxMDE1NiBDIDEwLjcxODc1IDExLjg4MjgxMiAxMS4wMzkwNjIgMTEuOTQxNDA2IDExLjMzMjAzMSAxMi4wNzgxMjUgQyAxMS40MDYyNSAxMi4wOTc2NTYgMTEuNDQ1MzEyIDEyLjE3MTg3NSAxMS40Mzc1IDEyLjI1MzkwNiBDIDExLjQzMzU5NCAxMi42MzI4MTIgMTEuNDM3NSAxMy4wMDM5MDYgMTEuNDM3NSAxMy4zNzUgTCAxMS40Mzc1IDE0LjQ4ODI4MSBDIDExLjQ1MzEyNSAxNC41NTQ2ODggMTEuNDA2MjUgMTQuNjI4OTA2IDExLjMzNTkzOCAxNC42NTYyNSBDIDExLjA0Njg3NSAxNC44MjAzMTIgMTAuNzEwOTM4IDE0Ljg4NjcxOSAxMC4zNzg5MDYgMTQuODM5ODQ0IEMgMTAuMDkzNzUgMTQuODEyNSA5Ljg1MTU2MiAxNC42MzY3MTkgOS43MjI2NTYgMTQuMzg2NzE5IEMgOS42Mjg5MDYgMTQuMTkxNDA2IDkuNTcwMzEyIDEzLjk4MDQ2OSA5LjU1NDY4OCAxMy43NjU2MjUgQyA5LjUgMTMuMzc4OTA2IDkuNTM1MTU2IDEyLjk4ODI4MSA5LjYyNSAxMi42MTcxODggQyA5LjY1NjI1IDEyLjUxNTYyNSA5LjY5MTQwNiAxMi40MTQwNjIgOS43NSAxMi4zMjAzMTIgQyA5Ljg3ODkwNiAxMi4wODU5MzggMTAuMTIxMDk0IDExLjkyOTY4OCAxMC4zOTQ1MzEgMTEuOTEwMTU2IFogTSAyMC44MDg1OTQgMTEuOTQxNDA2IEMgMjAuOTIxODc1IDExLjkyOTY4OCAyMS4wMzkwNjIgMTEuOTI5Njg4IDIxLjE1MjM0NCAxMS45NDkyMTkgQyAyMS40MDIzNDQgMTIuMDAzOTA2IDIxLjYwNTQ2OSAxMi4xNjAxNTYgMjEuNzEwOTM4IDEyLjM4NjcxOSBDIDIxLjgxMjUgMTIuNTk3NjU2IDIxLjg3NSAxMi44Mzk4NDQgMjEuODg2NzE5IDEzLjA3ODEyNSBDIDIxLjg5NDUzMSAxMy4xOTE0MDYgMjEuOTAyMzQ0IDEzLjMwMDc4MSAyMS44OTQ1MzEgMTMuNDA2MjUgQyAyMS45MTQwNjIgMTMuNjc1NzgxIDIxLjg4MjgxMiAxMy45NDE0MDYgMjEuODA4NTk0IDE0LjE5MTQwNiBDIDIxLjc3MzQzOCAxNC4zMjAzMTIgMjEuNzE4NzUgMTQuNDMzNTk0IDIxLjYzNjcxOSAxNC41NDY4NzUgQyAyMS41MDM5MDYgMTQuNzM4MjgxIDIxLjI4OTA2MiAxNC44NTkzNzUgMjEuMDU4NTk0IDE0Ljg3ODkwNiBDIDIwLjk0MTQwNiAxNC44ODY3MTkgMjAuODI4MTI1IDE0Ljg4NjcxOSAyMC43MDcwMzEgMTQuODY3MTg4IEMgMjAuNDQ5MjE5IDE0LjgxMjUgMjAuMjQyMTg4IDE0LjY0NDUzMSAyMC4xMzI4MTIgMTQuNDA2MjUgQyAyMC4wNDY4NzUgMTQuMjE4NzUgMTkuOTg0Mzc1IDE0LjAwNzgxMiAxOS45NzI2NTYgMTMuODAwNzgxIEMgMTkuOTM3NSAxMy40NDE0MDYgMTkuOTI5Njg4IDEzLjA3ODEyNSAyMC4wMTk1MzEgMTIuNzI2NTYyIEMgMjAuMDUwNzgxIDEyLjU4NTkzOCAyMC4xMTMyODEgMTIuNDQxNDA2IDIwLjE3OTY4OCAxMi4zMjAzMTIgQyAyMC4zMTY0MDYgMTIuMDk3NjU2IDIwLjU1MDc4MSAxMS45NTcwMzEgMjAuODA4NTk0IDExLjk0MTQwNiBaIE0gMjAuODA4NTk0IDE3LjcyNjU2MiBDIDIwLjQ1NzAzMSAxNy43NDIxODggMjAuMTIxMDk0IDE3Ljc3MzQzOCAxOS43ODEyNSAxNy44NDM3NSBDIDE5LjM0Mzc1IDE3Ljk0OTIxOSAxOC45Mjk2ODggMTguMTA1NDY5IDE4LjU1ODU5NCAxOC4zNjcxODggQyAxOC41MDc4MTIgMTguNDAyMzQ0IDE4LjQ1MzEyNSAxOC40NTcwMzEgMTguNDEwMTU2IDE4LjUxMTcxOSBDIDE4LjM3ODkwNiAxOC41NjY0MDYgMTguMzYzMjgxIDE4LjYyNSAxOC4zOTg0MzggMTguNjg3NSBDIDE4LjQzMzU5NCAxOC43NDYwOTQgMTguNDkyMTg4IDE4Ljc1MzkwNiAxOC41NTg1OTQgMTguNzQ2MDk0IEwgMTkuMTYwMTU2IDE4LjY3MTg3NSBDIDE5LjYwNTQ2OSAxOC42MTMyODEgMjAuMDY2NDA2IDE4LjU4OTg0NCAyMC41MjM0MzggMTguNjEzMjgxIEMgMjAuNjg3NSAxOC42MjUgMjAuODQ3NjU2IDE4LjY1MjM0NCAyMC45OTYwOTQgMTguNjk5MjE5IEMgMjEuMTY0MDYyIDE4Ljc1MzkwNiAyMS4yNzM0MzggMTguODk0NTMxIDIxLjI4MTI1IDE5LjA2MjUgQyAyMS4yODkwNjIgMTkuMTY0MDYyIDIxLjI4MTI1IDE5LjI2MTcxOSAyMS4yNzM0MzggMTkuMzU5Mzc1IEMgMjEuMjM4MjgxIDE5LjYzNjcxOSAyMS4xODc1IDE5LjkwNjI1IDIxLjEwNTQ2OSAyMC4xNjQwNjIgQyAyMC45Njg3NSAyMC42NTIzNDQgMjAuODAwNzgxIDIxLjEwOTM3NSAyMC42MjUgMjEuNTc0MjE5IEMgMjAuNjA1NDY5IDIxLjYyODkwNiAyMC41OTc2NTYgMjEuNjc1NzgxIDIwLjU5Mzc1IDIxLjcyMjY1NiBDIDIwLjU5NzY1NiAyMS44MTY0MDYgMjAuNjYwMTU2IDIxLjg3MTA5NCAyMC43NTM5MDYgMjEuODQzNzUgQyAyMC44MTY0MDYgMjEuODI0MjE5IDIwLjg2NzE4OCAyMS43OTI5NjkgMjAuOTEwMTU2IDIxLjc0MjE4OCBDIDIxLjEzMjgxMiAyMS41NDI5NjkgMjEuMzI4MTI1IDIxLjI5Njg3NSAyMS40ODQzNzUgMjEuMDM1MTU2IEMgMjEuOTIxODc1IDIwLjMwNDY4OCAyMi4xODM1OTQgMTkuNDg4MjgxIDIyLjI1MzkwNiAxOC42NDA2MjUgQyAyMi4yNTc4MTIgMTguNDk2MDk0IDIyLjI1MzkwNiAxOC4zNDc2NTYgMjIuMjM4MjgxIDE4LjIxNDg0NCBDIDIyLjIxODc1IDE4LjA5Mzc1IDIyLjE0NDUzMSAxNy45ODQzNzUgMjIuMDM1MTU2IDE3LjkzNzUgQyAyMS45NDkyMTkgMTcuODk4NDM4IDIxLjg2NzE4OCAxNy44NzEwOTQgMjEuNzczNDM4IDE3Ljg0Mzc1IEMgMjEuNDU3MDMxIDE3Ljc2MTcxOSAyMS4xMzI4MTIgMTcuNzQyMTg4IDIwLjgwODU5NCAxNy43MjY1NjIgWiBNIDEuNzg1MTU2IDE3Ljk4NDM3NSBDIDEuNzUzOTA2IDE3Ljk5MjE4OCAxLjcxODc1IDE4LjAxMTcxOSAxLjY5OTIxOSAxOC4wMzkwNjIgQyAxLjY0NDUzMSAxOC4wOTM3NSAxLjYzMjgxMiAxOC4xNjc5NjkgMS42NjQwNjIgMTguMjM0Mzc1IEMgMS42Nzk2ODggMTguMjg5MDYyIDEuNzE4NzUgMTguMzM1OTM4IDEuNzUzOTA2IDE4LjM2NzE4OCBDIDEuOTI5Njg4IDE4LjUzMTI1IDIuMDg5ODQ0IDE4LjY4NzUgMi4yNjU2MjUgMTguODM5ODQ0IEMgNC4xMjg5MDYgMjAuNDk2MDk0IDYuMjY5NTMxIDIxLjYyODkwNiA4LjcwNzAzMSAyMi4xOTUzMTIgQyA5LjQxNDA2MiAyMi4zNTkzNzUgMTAuMTI4OTA2IDIyLjQ3MjY1NiAxMC44NTkzNzUgMjIuNTI3MzQ0IEMgMTEuMTI4OTA2IDIyLjU0Njg3NSAxMS40MDYyNSAyMi41NTQ2ODggMTEuNjc1NzgxIDIyLjU2NjQwNiBDIDExLjg3ODkwNiAyMi41NjY0MDYgMTIuMDc0MjE5IDIyLjU2NjQwNiAxMi4yNzczNDQgMjIuNTY2NDA2IEMgMTMuMDU4NTk0IDIyLjUzOTA2MiAxMy44NDc2NTYgMjIuNDUzMTI1IDE0LjYyNSAyMi4zMTY0MDYgQyAxNS45NzY1NjIgMjIuMDYyNSAxNy4yODUxNTYgMjEuNjIxMDk0IDE4LjUxMTcxOSAyMSBDIDE5LjE2MDE1NiAyMC42NzE4NzUgMTkuNzczNDM4IDIwLjI3NzM0NCAyMC4zNDc2NTYgMTkuODMyMDMxIEMgMjAuNDE3OTY5IDE5Ljc4NTE1NiAyMC40Njg3NSAxOS43MTg3NSAyMC41MTE3MTkgMTkuNjQ0NTMxIEMgMjAuNTIzNDM4IDE5LjYyNSAyMC41MzEyNSAxOS42MDU0NjkgMjAuNTM5MDYyIDE5LjU4NTkzOCBDIDIwLjU3ODEyNSAxOS40MTQwNjIgMjAuNDc2NTYyIDE5LjI0NjA5NCAyMC4zMTY0MDYgMTkuMjA3MDMxIEMgMjAuMjE0ODQ0IDE5LjE4NzUgMjAuMTA1NDY5IDE5LjE5OTIxOSAyMC4wMTk1MzEgMTkuMjQ2MDk0IEMgMTkuNDE3OTY5IDE5LjUyMzQzOCAxOC44MDQ2ODggMTkuNzY1NjI1IDE4LjE2Nzk2OSAxOS45NzY1NjIgQyAxNi45NzI2NTYgMjAuMzc1IDE1LjczODI4MSAyMC42NTIzNDQgMTQuNDg0Mzc1IDIwLjgxMjUgQyAxMy45NDkyMTkgMjAuODc4OTA2IDEzLjQxMDE1NiAyMC45MzM1OTQgMTIuODcxMDk0IDIwLjk0OTIxOSBDIDExLjg3MTA5NCAyMC45ODA0NjkgMTAuODU5Mzc1IDIwLjkzMzU5NCA5Ljg2NzE4OCAyMC44MTI1IEMgOS4xNzE4NzUgMjAuNzI2NTYyIDguNDc2NTYyIDIwLjU5NzY1NiA3Ljc5Mjk2OSAyMC40NDE0MDYgQyA1Ljc1MzkwNiAxOS45NjA5MzggMy44MDQ2ODggMTkuMTYwMTU2IDIuMDIzNDM4IDE4LjA1ODU5NCBDIDEuOTgwNDY5IDE4LjAzMTI1IDEuOTMzNTk0IDE4LjAxMTcxOSAxLjg5NDUzMSAxNy45OTIxODggQyAxLjg1OTM3NSAxNy45NzY1NjIgMS44MjAzMTIgMTcuOTc2NTYyIDEuNzg1MTU2IDE3Ljk4NDM3NSBaIE0gMS43ODUxNTYgMTcuOTg0Mzc1IFwiO1xuICAgIHN2Z1tcIlBJQVwiXSA9IFwiTSAyNCAxMiBDIDI0IDE4LjYyODkwNiAxOC42Mjg5MDYgMjQgMTIgMjQgQyA1LjM3MTA5NCAyNCAwIDE4LjYyODkwNiAwIDEyIEMgMCA1LjM3MTA5NCA1LjM3MTA5NCAwIDEyIDAgQyAxOC42Mjg5MDYgMCAyNCA1LjM3MTA5NCAyNCAxMiBaIE0gMjQgMTIgTSAxMS40MDYyNSA4LjY5NTMxMiBDIDExLjQwNjI1IDguMzMyMDMxIDEwLjk2ODc1IDguMTUyMzQ0IDEwLjcxMDkzOCA4LjQwNjI1IEMgMTAuNDU3MDMxIDguNjY0MDYyIDEwLjYzNjcxOSA5LjEwMTU2MiAxMSA5LjEwMTU2MiBDIDExLjIyMjY1NiA5LjEwMTU2MiAxMS40MDYyNSA4LjkxNzk2OSAxMS40MDIzNDQgOC42OTUzMTIgTSAxMy4wMDM5MDYgOC4yODkwNjIgQyAxMi42NDA2MjUgOC4yODkwNjIgMTIuNDU3MDMxIDguNzI2NTYyIDEyLjcxNDg0NCA4Ljk4NDM3NSBDIDEyLjk3MjY1NiA5LjIzODI4MSAxMy40MDYyNSA5LjA1ODU5NCAxMy40MDYyNSA4LjY5NTMxMiBDIDEzLjQwNjI1IDguNDcyNjU2IDEzLjIyNjU2MiA4LjI4OTA2MiAxMy4wMDM5MDYgOC4yODkwNjIgTSAxMi41NjY0MDYgOS4zNjMyODEgQyAxMi4yNDIxODggOS42NTIzNDQgMTEuNzU3ODEyIDkuNjUyMzQ0IDExLjQzNzUgOS4zNjMyODEgQyAxMS4zMzIwMzEgOS4yNzczNDQgMTEuMTk5MjE5IDkuNDI1NzgxIDExLjI5Mjk2OSA5LjUxOTUzMSBDIDExLjY5MTQwNiA5Ljg5NDUzMSAxMi4zMTI1IDkuODk0NTMxIDEyLjcwNzAzMSA5LjUxOTUzMSBDIDEyLjc1IDkuNDgwNDY5IDEyLjc1IDkuNDE0MDYyIDEyLjcxMDkzOCA5LjM3NSBDIDEyLjY3MTg3NSA5LjMzMjAzMSAxMi42MDkzNzUgOS4zMjgxMjUgMTIuNTY2NDA2IDkuMzYzMjgxIE0gMTYuMzA0Njg4IDEwLjkzMzU5NCBMIDE2LjMwNDY4OCAxMC45Mjk2ODggQyAxNi4zMDQ2ODggMTAuNTUwNzgxIDE2LjA1NDY4OCAxMC4yMTg3NSAxNS42OTE0MDYgMTAuMTE3MTg4IEwgMTUuNjkxNDA2IDkuMzkwNjI1IEMgMTUuNjkxNDA2IDcuNDE0MDYyIDE0LjA4OTg0NCA1LjgxMjUgMTIuMTEzMjgxIDUuODEyNSBMIDExLjk3NjU2MiA1LjgxMjUgQyAxMCA1LjgxMjUgOC4zOTQ1MzEgNy40MTQwNjIgOC4zOTQ1MzEgOS4zOTA2MjUgTCA4LjM5NDUzMSAxMC4wOTc2NTYgQyA3Ljk5NjA5NCAxMC4xNzE4NzUgNy43MDcwMzEgMTAuNTE1NjI1IDcuNzAzMTI1IDEwLjkyMTg3NSBDIDcuNTkzNzUgMTEuMTA1NDY5IDcuNTM1MTU2IDExLjMxNjQwNiA3LjUzNTE1NiAxMS41MzEyNSBMIDcuNTM1MTU2IDE2LjEyMTA5NCBDIDcuNTM1MTU2IDE2LjY2Nzk2OSA3LjkwMjM0NCAxNy4xNDQ1MzEgOC40Mjk2ODggMTcuMjg5MDYyIEMgOC41NzAzMTIgMTcuNjA1NDY5IDguODg2NzE5IDE3LjgxMjUgOS4yMzQzNzUgMTcuODEyNSBMIDEwLjIzODI4MSAxNy44MTI1IEMgMTAuNTcwMzEyIDE3LjgxMjUgMTAuODc1IDE3LjYyNSAxMS4wMjczNDQgMTcuMzI4MTI1IEwgMTIuODcxMDk0IDE3LjMyODEyNSBDIDEzLjAxOTUzMSAxNy42MjUgMTMuMzI0MjE5IDE3LjgxMjUgMTMuNjU2MjUgMTcuODEyNSBMIDE0LjY2MDE1NiAxNy44MTI1IEMgMTUgMTcuODEyNSAxNS4zMDg1OTQgMTcuNjE3MTg4IDE1LjQ1NzAzMSAxNy4zMTI1IEMgMTYuMDM5MDYyIDE3LjIxNDg0NCAxNi40NjQ4NDQgMTYuNzEwOTM4IDE2LjQ2NDg0NCAxNi4xMjEwOTQgTCAxNi40NjQ4NDQgMTEuNTMxMjUgQyAxNi40NjQ4NDQgMTEuMzI0MjE5IDE2LjQxMDE1NiAxMS4xMTcxODggMTYuMzA0Njg4IDEwLjkzMzU5NCBaIE0gMTMuMTEzMjgxIDE1LjM4MjgxMiBDIDEzLjEzNjcxOSAxNS41MzkwNjIgMTMuMDg5ODQ0IDE1LjY5NTMxMiAxMi45ODgyODEgMTUuODE2NDA2IEMgMTIuODg2NzE5IDE1LjkzMzU5NCAxMi43MzgyODEgMTYuMDAzOTA2IDEyLjU3ODEyNSAxNi4wMDM5MDYgTCAxMS40MjE4NzUgMTYuMDAzOTA2IEMgMTEuMjY1NjI1IDE2LjAwMzkwNiAxMS4xMTMyODEgMTUuOTMzNTk0IDExLjAxMTcxOSAxNS44MTY0MDYgQyAxMC45MTAxNTYgMTUuNjk1MzEyIDEwLjg2MzI4MSAxNS41MzkwNjIgMTAuODg2NzE5IDE1LjM4MjgxMiBMIDExLjEwOTM3NSAxMy44NzEwOTQgQyAxMC42OTE0MDYgMTMuNTE1NjI1IDEwLjUyNzM0NCAxMi45NDkyMTkgMTAuNjg3NSAxMi40MjE4NzUgQyAxMC44NDc2NTYgMTEuODk4NDM4IDExLjMwMDc4MSAxMS41MTk1MzEgMTEuODQzNzUgMTEuNDYwOTM4IEMgMTIuNDQ1MzEyIDExLjM5MDYyNSAxMy4wMTk1MzEgMTEuNzIyNjU2IDEzLjI2MTcxOSAxMi4yNzczNDQgQyAxMy41IDEyLjgzMjAzMSAxMy4zNTE1NjIgMTMuNDgwNDY5IDEyLjg5MDYyNSAxMy44NzEwOTQgWiBNIDEzLjI0NjA5NCAxMC4zMjQyMTkgTCAxMC43NjE3MTkgMTAuMzI0MjE5IEMgMTAuNjA1NDY5IDEwLjE2Nzk2OSAxMC4zOTA2MjUgMTAuMDgyMDMxIDEwLjE3MTg3NSAxMC4wODIwMzEgTCA5Ljc1IDEwLjA4MjAzMSBMIDkuNzUgOS4zMzIwMzEgQyA5Ljc1IDguMDkzNzUgMTAuNzUzOTA2IDcuMDg5ODQ0IDExLjk5MjE4OCA3LjA4OTg0NCBMIDEyLjEwMTU2MiA3LjA4OTg0NCBDIDEzLjMzOTg0NCA3LjA4OTg0NCAxNC4zMzk4NDQgOC4wOTM3NSAxNC4zMzk4NDQgOS4zMzIwMzEgTCAxNC4zMzk4NDQgMTAuMDgyMDMxIEwgMTMuODM1OTM4IDEwLjA4MjAzMSBDIDEzLjYxMzI4MSAxMC4wODIwMzEgMTMuNDAyMzQ0IDEwLjE2Nzk2OSAxMy4yNDYwOTQgMTAuMzI0MjE5IFogTSAxMi43MzA0NjkgMTUuNDU3MDMxIEMgMTIuNzQyMTg4IDE1LjQ5NjA5NCAxMi43MzQzNzUgMTUuNTM1MTU2IDEyLjcwNzAzMSAxNS41NzAzMTIgQyAxMi42ODM1OTQgMTUuNjAxNTYyIDEyLjY0NDUzMSAxNS42MTcxODggMTIuNjA1NDY5IDE1LjYxNzE4OCBMIDExLjQwMjM0NCAxNS42MTcxODggQyAxMS4zNjMyODEgMTUuNjE3MTg4IDExLjMyNDIxOSAxNS42MDE1NjIgMTEuMzAwNzgxIDE1LjU2NjQwNiBDIDExLjI3MzQzOCAxNS41MzUxNTYgMTEuMjY1NjI1IDE1LjQ5NjA5NCAxMS4yNzczNDQgMTUuNDU3MDMxIEwgMTEuNTA3ODEyIDEzLjc4NTE1NiBDIDExLjUwNzgxMiAxMy43NjE3MTkgMTEuNTAzOTA2IDEzLjczODI4MSAxMS40OTYwOTQgMTMuNzE0ODQ0IEMgMTEuNDc2NTYyIDEzLjY4MzU5NCAxMS40NTMxMjUgMTMuNjYwMTU2IDExLjQyMTg3NSAxMy42MzY3MTkgQyAxMS40MTc5NjkgMTMuNjMyODEyIDExLjQxNzk2OSAxMy42MzI4MTIgMTEuNDE0MDYyIDEzLjYyODkwNiBDIDExLjA3MDMxMiAxMy4zNzUgMTAuOTI1NzgxIDEyLjkzMzU5NCAxMS4wNTg1OTQgMTIuNTI3MzQ0IEMgMTEuMTkxNDA2IDEyLjEyMTA5NCAxMS41NjY0MDYgMTEuODQzNzUgMTEuOTkyMTg4IDExLjgzOTg0NCBDIDEyLjQyMTg3NSAxMS44Mzk4NDQgMTIuODAwNzgxIDEyLjEwOTM3NSAxMi45Mzc1IDEyLjUxNTYyNSBDIDEzLjA3NDIxOSAxMi45MTc5NjkgMTIuOTM3NSAxMy4zNjcxODggMTIuNTkzNzUgMTMuNjIxMDk0IEMgMTIuNTkzNzUgMTMuNjI1IDEyLjU5Mzc1IDEzLjYyODkwNiAxMi41ODIwMzEgMTMuNjM2NzE5IEMgMTIuNTUwNzgxIDEzLjY2MDE1NiAxMi41MjczNDQgMTMuNjgzNTk0IDEyLjUwNzgxMiAxMy43MTQ4NDQgQyAxMi41MDM5MDYgMTMuNzIyNjU2IDEyLjUgMTMuNzM0Mzc1IDEyLjUgMTMuNzQ2MDk0IFogTSAxMi43MzA0NjkgMTUuNDU3MDMxIFwiO1xuICAgIHN2Z1tcIlNVUkZTSEFSS1wiXSA9IFwiTSAyNCAxMiBDIDI0IDE4LjYyODkwNiAxOC42Mjg5MDYgMjQgMTIgMjQgQyA1LjM3MTA5NCAyNCAwIDE4LjYyODkwNiAwIDEyIEMgMCA1LjM3MTA5NCA1LjM3MTA5NCAwIDEyIDAgQyAxOC42Mjg5MDYgMCAyNCA1LjM3MTA5NCAyNCAxMiBaIE0gMjQgMTJNIDE2LjU0Njg3NSA4LjM1MTU2MiBMIDE2LjU0Njg3NSA4LjM0Mzc1IEMgMTYuNTM5MDYyIDguMjQyMTg4IDE2LjUzMTI1IDguMTI1IDE2LjUyNzM0NCA4IEMgMTYuNTExNzE5IDcuNzY1NjI1IDE2LjQ5NjA5NCA3LjUxNTYyNSAxNi40ODA0NjkgNy4zMjAzMTIgQyAxNi40NTcwMzEgNy4xODc1IDE2LjQyNTc4MSA3LjA3MDMxMiAxNi4zODY3MTkgNi45NjA5MzggQyAxNi4xNDg0MzggNi40Mjk2ODggMTUuNjgzNTk0IDYuMTc1NzgxIDE1LjE5MTQwNiA2LjA1NDY4OCBDIDE0Ljk2NDg0NCA2LjAxNTYyNSAxNC42OTE0MDYgNi4wMDc4MTIgMTQuMzk4NDM4IDYgTCAxMS41NzAzMTIgNiBDIDkuNzUgNi4wOTc2NTYgOC45ODQzNzUgNy4xNTIzNDQgOC43ODEyNSA3LjcxNDg0NCBDIDcuOTg0Mzc1IDEwLjA5NzY1NiA3LjQ4NDM3NSAxMy4xODc1IDcuMTI4OTA2IDE1LjQxNDA2MiBDIDcuMTIxMDk0IDE1LjQ2MDkzOCA3LjExMzI4MSAxNS41IDcuMTA1NDY5IDE1LjU0Mjk2OSBMIDYuOTg4MjgxIDE2LjYwMTU2MiBDIDYuOTgwNDY5IDE2Ljc2OTUzMSA3IDE2Ljk1MzEyNSA3LjA0Mjk2OSAxNy4xMjg5MDYgQyA3LjI2NTYyNSAxNy43NzM0MzggNy45NDE0MDYgMTguMzIwMzEyIDkuNDI1NzgxIDE3Ljc3NzM0NCBDIDEwLjgzMjAzMSAxNy4xNjc5NjkgMTIuNDg4MjgxIDE2LjQxMDE1NiAxNC4xOTkyMTkgMTUuNTU4NTk0IEMgMTUuMTc1NzgxIDE0Ljk5NjA5NCAxNi42MDU0NjkgMTMuNzAzMTI1IDE2LjY3OTY4OCAxMi4wNjY0MDYgQyAxNi42Njc5NjkgMTAuODU5Mzc1IDE2LjYyODkwNiA5LjU4OTg0NCAxNi41NDY4NzUgOC4zNTE1NjIgWiBNIDE0LjI4OTA2MiA5LjI0NjA5NCBDIDE0LjI4OTA2MiA5LjM4NjcxOSAxNC4xNzU3ODEgOS41IDE0LjAzNTE1NiA5LjUgQyAxMy4xODM1OTQgOS41IDEyLjQ5NjA5NCAxMC4xOTE0MDYgMTIuNDk2MDk0IDExLjAzOTA2MiBMIDEyLjQ5NjA5NCAxMS45ODA0NjkgQyAxMi40OTYwOTQgMTMuNTYyNSAxMS4yMTQ4NDQgMTQuODQzNzUgOS42MzY3MTkgMTQuODQzNzUgQyA5LjQ5NjA5NCAxNC44NDM3NSA5LjM4NjcxOSAxNC43MzA0NjkgOS4zODY3MTkgMTQuNTkzNzUgTCA5LjM4NjcxOSAxMy44MTI1IEMgOS4zODY3MTkgMTMuNjcxODc1IDkuNSAxMy41NTg1OTQgOS42NDA2MjUgMTMuNTU4NTk0IEMgMTAuNDkyMTg4IDEzLjU1ODU5NCAxMS4xNzk2ODggMTIuODcxMDk0IDExLjE3OTY4OCAxMi4wMTk1MzEgTCAxMS4xNzk2ODggMTEuMDc4MTI1IEMgMTEuMTc5Njg4IDkuNSAxMi40NjA5MzggOC4yMTg3NSAxNC4wNDI5NjkgOC4yMTg3NSBDIDE0LjE3OTY4OCA4LjIxODc1IDE0LjI4OTA2MiA4LjMyODEyNSAxNC4yODkwNjIgOC40NjQ4NDQgWiBNIDE0LjI4OTA2MiA5LjI0NjA5NCBcIjtcbiAgICBzdmdbXCJWVURVXCJdID0gXCJNIDYuMDk3MSA2Ljk5MjYgTCA1LjA0NjkgNi45OTI2IEMgNC44NzI1IDYuOTk2MyA0LjcxMjkgNy4xMDM5IDQuNjUzNSA3LjI3MDkgQyA0LjY1MzUgNy4yODIgNC42NTM1IDcuMjg5NSA0LjY1MzUgNy4zMDA2IEMgNC4yNjAyIDguNDMyNCAzLjkxNSA5LjQwNDcgMy41MTggMTAuNTM2NSBDIDMuNDE0MSAxMC44MzcxIDMuMzEwMiAxMS4xMzQgMy4xOTE0IDExLjQzNDYgQyAzLjE4NCAxMS40NjA1IDMuMTY1NCAxMS40ODI4IDMuMTM5NSAxMS40OTM5IEMgMy4wOTQ5IDExLjQ5MzkgMy4wOTQ5IDExLjQ2MDUgMy4wODM4IDExLjQzMDkgQyAyLjgzODkgMTAuNzIyMSAyLjU5MzkgMTAuMDE3IDIuMzQxNiA5LjMxMTkgTCAxLjYyMTcgNy4yNTYxIEMgMS42MjU0IDcuMjQ4NiAxLjYyNTQgNy4yNDEyIDEuNjIxNyA3LjIzMzggQyAxLjU0NzUgNy4wODU0IDEuMzk5IDYuOTkyNiAxLjIzNTcgNi45OTI2IEwgMC4xNzA3IDYuOTkyNiBDIDAuMDg1NCA2Ljk4NTIgMC4wMTExIDcuMDQ4MiAwIDcuMTMzNiBDIC0wLjAwMzcgNy4xNjMzIDAuMDAzNyA3LjE5MyAwLjAxNDggNy4yMTg5IEMgMC42MjcxIDguOTI5NyAxLjIzNTcgMTAuNjQwNCAxLjg0NDMgMTIuMzQ3NSBMIDEuOTcwNSAxMi43IEMgMi4xNDg2IDEzLjIxOTUgMi42MzQ4IDEzLjU2NDYgMy4xODAzIDEzLjU2MDkgTCAzLjMyMTMgMTMuNTYwOSBDIDMuNTU1MSAxMy41NDk4IDMuNzg4OSAxMy41MjAxIDQuMDIyNyAxMy40NjgyIEwgNC40NTMxIDEyLjIyODcgTCA2LjI1NjYgNy4yMzAxIEMgNi4yNjQxIDcuMjA3OCA2LjI2NzggNy4xODkzIDYuMjc1MiA3LjE3MDcgQyA2LjI4NjMgNy4wODU0IDYuMjI3IDcuMDAzNyA2LjE0MTYgNi45OTI2IEMgNi4xMjY4IDYuOTkyNiA2LjExNTYgNi45OTI2IDYuMTAwOCA2Ljk5MjYgTSAxMS45NDE4IDcuNDQxNiBDIDExLjk0MTggNy4yMTUyIDExLjc2NzQgNy4wMjk3IDExLjU0NDcgNy4wMTExIEwgMTAuNDU3NCA3LjAxMTEgTCAxMC40NTc0IDcuNjEyMyBDIDEwLjQ1NzQgOC43NDQxIDEwLjQ1NzQgOS43NDk4IDEwLjQ1NzQgMTAuODg1NCBDIDEwLjQ2MTEgMTEuMDAwNCAxMC40NSAxMS4xMTU0IDEwLjQyNCAxMS4yMjY4IEMgMTAuMzQyNCAxMS42MzUgMTAuMDQ1NSAxMS45NTc4IDkuNjQ4NCAxMi4wNzI5IEMgOS4wNDM2IDEyLjI2OTUgOC4zOTA0IDExLjkzOTMgOC4xOTM3IDExLjMzMDcgQyA4LjE1NjYgMTEuMjExOSA4LjEzODEgMTEuMDg5NSA4LjEzODEgMTAuOTY3IEMgOC4xMzgxIDEwLjE4NCA4LjEzODEgOC41MTA0IDguMTM4MSA3LjYwNDkgTCA4LjEzODEgNyBDIDguMTM4MSA3IDcuMDU0NSA3IDcuMDQ3MSA3IEMgNi44MjQ0IDcuMDE0OCA2LjY1IDcuMjA0MSA2LjY1IDcuNDI2OCBMIDYuNjUgNy42NDU3IEMgNi42NSA4LjgyMjEgNi42NSA5LjgzMTQgNi42NSAxMS4wMzAxIEMgNi42NTc0IDEyLjQ3NzMgNy44MzAxIDEzLjY0MjYgOS4yNjk5IDEzLjYzMTQgQyA5LjQ0MDYgMTMuNjMxNCA5LjYwNzYgMTMuNjEyOSA5Ljc3NDYgMTMuNTc5NSBDIDEwLjQyMDMgMTMuNDcxOSAxMS4wMDI5IDEzLjExOTMgMTEuNDAzNyAxMi41OTk4IEMgMTEuNzQ1MSAxMi4xNjkzIDExLjkzNDQgMTEuNjM4NyAxMS45NDE4IDExLjA4NTcgQyAxMS45NDE4IDEwLjQ1ODYgMTEuOTQxOCA5LjgzMTQgMTEuOTQxOCA5LjIwMDYgWiBNIDExLjk0MTggNy40NDE2IE0gMjMuNzUgNy40NDE2IEMgMjMuNzUgNy4yMTg5IDIzLjU3OTMgNy4wMjk3IDIzLjM1NjYgNy4wMTExIEwgMjIuMjY1NiA3LjAxMTEgTCAyMi4yNjU2IDcuNjEyMyBDIDIyLjI2NTYgOC43NDQxIDIyLjI2NTYgOS43NDk4IDIyLjI2NTYgMTAuODg1NCBDIDIyLjI2NTYgMTEuMDAwNCAyMi4yNTQ1IDExLjExNTQgMjIuMjI4NSAxMS4yMjY4IEMgMjIuMTUwNiAxMS42MzEyIDIxLjg1IDExLjk1NzggMjEuNDUyOSAxMi4wNzI5IEMgMjAuODUxOCAxMi4yNzMyIDIwLjIwMjMgMTEuOTQzIDIwLjAwMiAxMS4zMzgxIEMgMTkuOTYxMSAxMS4yMTkzIDE5Ljk0MjYgMTEuMDkzMiAxOS45NDI2IDEwLjk2NyBDIDE5Ljk0MjYgMTAuMTg0IDE5Ljk0MjYgOC41MTA0IDE5Ljk0MjYgNy42MDQ5IEwgMTkuOTQyNiA3IEMgMTkuOTQyNiA3IDE4Ljg2MjcgNyAxOC44NDc5IDcgQyAxOC42Mjg5IDcuMDE4NiAxOC40NTgyIDcuMjA0MSAxOC40NTQ1IDcuNDI2OCBMIDE4LjQ1NDUgNy42NDU3IEMgMTguNDU0NSA4LjgyMjEgMTguNDU0NSA5LjgzMTQgMTguNDU0NSAxMS4wMzAxIEMgMTguNDY1NiAxMi40NzczIDE5LjYzODMgMTMuNjQyNiAyMS4wNzQ0IDEzLjYzMTQgQyAyMS4yNDUxIDEzLjYzMTQgMjEuNDE1OCAxMy42MTI5IDIxLjU4MjggMTMuNTc5NSBDIDIyLjIyODUgMTMuNDcxOSAyMi44MDc0IDEzLjExOTMgMjMuMjA4MiAxMi41OTk4IEMgMjMuNTUzMyAxMi4xNjkzIDIzLjc0MjYgMTEuNjM4NyAyMy43NDYzIDExLjA4NTcgQyAyMy43NDYzIDEwLjQ1ODYgMjMuNzQ2MyA5LjgzMTQgMjMuNzQ2MyA5LjIwMDYgTCAyMy43NDYzIDcuNDQxNiBaIE0gMjMuNzUgNy40NDE2IE0gMTYuMTM1MiAxMS41Mzg1IEMgMTUuODQ1NyAxMS44ODczIDE1LjQzMzggMTIuMTA2MiAxNC45ODg1IDEyLjE0NzEgQyAxNC44OTk0IDEyLjE1MDggMTQuODEwNCAxMi4xNTA4IDE0LjcyMTMgMTIuMTQ3MSBMIDEzLjk1MzEgMTIuMTQ3MSBDIDEzLjg2MDQgMTIuMTQ3MSAxMy44NTY2IDEyLjE0NzEgMTMuODU2NiAxMi4wNTA2IEwgMTMuODU2NiA4LjQ1ODQgQyAxMy44NTY2IDguMzczIDEzLjg1NjYgOC4zNzMgMTMuOTQyIDguMzczIEMgMTQuMjY4NiA4LjM3MyAxNC41NjkxIDguMzczIDE0Ljg4MDkgOC4zNzMgQyAxNS40Mzc1IDguMzkxNiAxNS45NDk2IDguNjgxMSAxNi4yNTM5IDkuMTQ4NiBDIDE2LjQ1MDYgOS40MzgxIDE2LjU2NTYgOS43Nzk1IDE2LjU4MDUgMTAuMTMyIEMgMTYuNjIxMyAxMC42NDA0IDE2LjQ2MTcgMTEuMTQ1MSAxNi4xMzUyIDExLjUzODUgTSAxNi41NjkzIDcuNDg5OCBDIDE2LjEwMTggNy4xODkzIDE1LjU2IDcuMDIyMyAxNS4wMDMzIDcuMDA3NCBDIDE0Ljc0MzYgNy4wMDc0IDE0LjQ4NzUgNy4wMDc0IDE0LjIyNCA3LjAwNzQgTCAxMi44NDczIDcuMDA3NCBDIDEyLjYwOTggNy4wMDc0IDEyLjQyMDUgNy4yMDA0IDEyLjQyMDUgNy40Mzc5IEwgMTIuNDIwNSAxMy4xMTU2IEMgMTIuNDIwNSAxMy4zNTMxIDEyLjYwOTggMTMuNTQ2MSAxMi44NDczIDEzLjU0NjEgTCAxNC45MTQzIDEzLjU0NjEgQyAxNS4wNzAxIDEzLjU0NjEgMTUuMjI2IDEzLjUzMTMgMTUuMzgxOCAxMy41MDE2IEMgMTYuMDA1MyAxMy40MDg4IDE2LjU4NDIgMTMuMTMwNSAxNy4wNDQzIDEyLjcwMzcgQyAxNy45MDE2IDExLjk1NDEgMTguMjkxMiAxMC44IDE4LjA2ODYgOS42NzkzIEMgMTcuOTEyNyA4Ljc3MDEgMTcuMzY3MiA3Ljk3NiAxNi41ODA1IDcuNTA0NyBNIDE5LjAzMzQgMTQuNDI5MyBDIDE4LjQ2NTYgMTQuNDU1MyAxOC4wMjQgMTQuOTQ1MSAxOC4wNDYzIDE1LjUxNjYgQyAxOC4wNjg2IDE2LjA4ODEgMTguNTQ3MyAxNi41Mjk3IDE5LjExNSAxNi41MDc0IEMgMTkuNjcxNyAxNi40ODUyIDIwLjEwOTYgMTYuMDI1IDIwLjEwMjEgMTUuNDY0NiBDIDIwLjExMzMgMTQuOTExNyAxOS42NzkxIDE0LjQ0NzkgMTkuMTI2MiAxNC40MjkzIEwgMTkuMDMzNCAxNC40MjkzIE0gMTkuNjE2IDE1LjUwOTIgQyAxOS42MDQ5IDE1LjYzNTQgMTkuNTQ5MiAxNS43NTc4IDE5LjQ2MzkgMTUuODUwNiBMIDE5LjQzNDIgMTUuODgwMyBDIDE5LjE5NjcgMTYuMTAyOSAxOC44MjU2IDE2LjA5MTggMTguNjAyOSAxNS44NTQzIEMgMTguMzgwMyAxNS42MjA1IDE4LjM5MTQgMTUuMjQ1NyAxOC42Mjg5IDE1LjAyMyBDIDE4Ljg2MjcgMTQuODAwNCAxOS4yMzM4IDE0LjgxMTUgMTkuNDU2NCAxNS4wNDkgQyAxOS40NTY0IDE1LjA0OSAxOS40NTY0IDE1LjA0OSAxOS40NjAyIDE1LjA0OSBDIDE5LjU1MjkgMTUuMTQ5MiAxOS42MDg2IDE1LjI3OTEgMTkuNjE2IDE1LjQxNjQgWiBNIDE5LjYxNiAxNS41MDkyIE0gMTYuODE4IDE1LjMxOTkgTCAxNi44MTggMTUuNzcyNyBMIDE3LjI2MzMgMTUuNzcyNyBMIDE3LjI2MzMgMTUuOTI4NSBDIDE3LjE1NTcgMTYuMDEwMiAxNy4wMjk1IDE2LjA1MSAxNi44OTU5IDE2LjA1MSBDIDE2LjYwMjcgMTYuMDYyMSAxNi4zNTQxIDE1LjgzMiAxNi4zNDMgMTUuNTM1MiBDIDE2LjMzOTMgMTUuNTEyOSAxNi4zMzkzIDE1LjQ5MDYgMTYuMzQzIDE1LjQ3MjEgQyAxNi4zMjA3IDE1LjE3NTIgMTYuNTM5NiAxNC45MTU0IDE2LjgzNjUgMTQuODkzMiBMIDE2Ljg5NTkgMTQuODkzMiBDIDE3LjA3MDMgMTQuODk2OSAxNy4yMjk5IDE0Ljk5MzQgMTcuMzE1MiAxNS4xNDU1IEwgMTcuNzQ1NyAxNC45MjI5IEMgMTcuNTc1IDE0LjYxMTEgMTcuMjQ4NCAxNC40MjU2IDE2Ljg5NTkgMTQuNDM2NyBDIDE2LjMyODEgMTQuNDIxOSAxNS44NTY4IDE0Ljg3NDYgMTUuODQyIDE1LjQ0MjQgQyAxNS44MjcxIDE1Ljk5NTMgMTYuMjQyOCAxNi40NjI5IDE2Ljc5MiAxNi41MDM3IEwgMTYuODk1OSAxNi41MDM3IEMgMTcuMTk2NSAxNi41MDM3IDE3LjQ4NTkgMTYuMzg4NyAxNy43MDEyIDE2LjE3MzQgQyAxNy43MzQ2IDE2LjE0IDE3Ljc1NjggMTYuMDg4MSAxNy43NjA1IDE2LjAzNjEgTCAxNy43NjA1IDE1LjMxOTkgWiBNIDE2LjgxOCAxNS4zMTk5IE0gMTUuMzE4NyAxNC40ODUgTCAxNS4yNzc5IDE0LjQ4NSBDIDE1LjE2NjYgMTQuNDkyNCAxNS4wODEyIDE0LjU4NTIgMTUuMDc3NSAxNC42OTY1IEwgMTUuMDc3NSAxNS41Nzk3IEwgMTQuMjc2IDE0LjQ4NSBMIDEzLjc0MTYgMTQuNDg1IEwgMTMuNzQxNiAxNi40Nzc3IEwgMTQuMjUzNyAxNi40Nzc3IEwgMTQuMjUzNyAxNS4zMzExIEwgMTUuMDkyNCAxNi40Nzc3IEwgMTUuNTgyMiAxNi40Nzc3IEwgMTUuNTgyMiAxNC40ODUgWiBNIDE1LjMxODcgMTQuNDg1IE0gMTIuODEzOSAxNC40ODUgTCAxMi4xNjA3IDE0LjQ4NSBMIDExLjQxMTEgMTYuNDgxNCBMIDExLjk5MzcgMTYuNDgxNCBMIDEyLjA5MzkgMTYuMTkyIEwgMTIuODczMiAxNi4xOTIgTCAxMi45MjUyIDE2LjM0MDQgQyAxMi45NTg2IDE2LjQyMjEgMTMuMDMyOCAxNi40NzQgMTMuMTE4MiAxNi40Nzc3IEwgMTMuNTU2MSAxNi40Nzc3IFogTSAxMi4yMzg3IDE1Ljc0MyBMIDEyLjQ5MSAxNC45ODk2IEwgMTIuNzM5NiAxNS43NDMgWiBNIDEyLjIzODcgMTUuNzQzIE0gMTAuMzk0MyAxNC40ODUgTCA5LjU1NTcgMTQuNDg1IEwgOS41NTU3IDE2LjI2OTkgQyA5LjU2MzEgMTYuMzg1IDkuNjU1OSAxNi40Nzc3IDkuNzcwOSAxNi40ODE0IEwgMTAuMzk0MyAxNi40ODE0IEMgMTAuOTM5OCAxNi41MTExIDExLjQxMTEgMTYuMDkxOCAxMS40NDA4IDE1LjUzODkgQyAxMS40NzQyIDE0Ljk4OTYgMTEuMDU0OSAxNC41MTg0IDEwLjUwNTcgMTQuNDg1IEMgMTAuNDY4NiAxNC40ODUgMTAuNDMxNCAxNC40ODUgMTAuMzk0MyAxNC40ODUgTSAxMC4zOTQzIDE2LjAzNjEgTCAxMC4wNjc4IDE2LjAzNjEgTCAxMC4wNjc4IDE0LjkyMjkgTCAxMC4zOTQzIDE0LjkyMjkgQyAxMC42NzY0IDE0LjkwOCAxMC45MTM5IDE1LjEyMzIgMTAuOTMyNCAxNS40MDUzIEwgMTAuOTMyNCAxNS40NjQ2IEMgMTAuOTMyNCAxNS43NjE1IDEwLjY5MTIgMTYuMDM2MSAxMC4zOTggMTYuMDM2MSBDIDEwLjM5NDMgMTYuMDM2MSAxMC4zOTggMTYuMDMyNCAxMC4zOTggMTYuMDMyNCBMIDEwLjQwMTggMTYuMDI4NyBNIDguOTA2MyAxNC40ODUgQyA4Ljc5NDkgMTQuNDg4NyA4LjcwMjEgMTQuNTc3NyA4LjY5ODQgMTQuNjg5MSBMIDguNjk4NCAxNS41Nzk3IEwgNy44NzgzIDE0LjQ4NSBMIDcuMzQzOSAxNC40ODUgTCA3LjM0MzkgMTYuNDc3NyBMIDcuODUyMyAxNi40Nzc3IEwgNy44NTIzIDE1LjMzMTEgTCA4LjY5NDcgMTYuNDg1MiBMIDkuMTg4MyAxNi40ODUyIEwgOS4xODgzIDE0LjQ4NSBaIE0gOC45MDYzIDE0LjQ4NSBNIDYuNDMxMSAxNC40ODUgTCA1Ljc3NzkgMTQuNDg1IEwgNS4wMzIgMTYuNDc3NyBMIDUuNjI1OCAxNi40Nzc3IEwgNS43MjYgMTYuMTg4MyBMIDYuNTEyNyAxNi4xODgzIEwgNi41NjQ2IDE2LjM0MDQgQyA2LjU5OCAxNi40MTg0IDYuNjcyMyAxNi40NzAzIDYuNzU3NiAxNi40Nzc3IEwgNy4xOTE4IDE2LjQ3NzcgWiBNIDUuODU1OSAxNS43NDMgTCA2LjExMTkgMTQuOTg5NiBMIDYuMzYwNSAxNS43NDMgWiBNIDUuODU1OSAxNS43NDMgTSA1LjIyMTMgMTQuOTA4IEwgNS4yMjEzIDE0LjQ1OSBMIDMuNjk2MSAxNC40NTkgTCAzLjY5NjEgMTYuNDQ4IEwgNC4yMzQyIDE2LjQ0OCBMIDQuMjM0MiAxNS43NTc4IEwgNC43Njg2IDE1Ljc1NzggQyA0Ljg2NSAxNS43NDY3IDQuOTM1NSAxNS42Njg3IDQuOTQzIDE1LjU3MjMgTCA0Ljk0MyAxNS4zMDUxIEwgNC4yNDE2IDE1LjMwNTEgTCA0LjI0MTYgMTQuOTA4IFogTSA1LjIyMTMgMTQuOTA4IE0gMC4zOTcxIDE1LjM5NDEgTCAzLjI0NzEgMTUuMzk0MSBMIDMuMjQ3MSAxNS41NSBMIDAuMzk3MSAxNS41NSBaIE0gMC4zOTcxIDE1LjM5NDEgTSAyMC41NTQ5IDE1LjM5NDEgTCAyMy40MDQ5IDE1LjM5NDEgTCAyMy40MDQ5IDE1LjU1IEwgMjAuNTU0OSAxNS41NSBaIE0gMjAuNTU0OSAxNS4zOTQxXCI7XG59KShzdmcgfHwgKGV4cG9ydHMuc3ZnID0gc3ZnID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZW51bXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlZmF1bHRLZXlzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWZhdWx0U291cmNlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9JQ29uZmlnXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9JQ3VzdG9tQWN0aW9uXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9JS2V5XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9JU2VydmljZURhdGFcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL0lTb3VyY2VcIiksIGV4cG9ydHMpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FuZHJvaWQtdHYtY2FyZC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==