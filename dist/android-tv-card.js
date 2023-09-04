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
        console.log('foobar');
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
        action = action || e.currentTarget.action;
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

/***/ "./src/models/interfaces/customAction.ts":
/*!***********************************************!*\
  !*** ./src/models/interfaces/customAction.ts ***!
  \***********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QWEsbUJBQU8sQ0FBQyxtREFBVTs7Ozs7Ozs7Ozs7QUNuQmxCO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7VUNEN0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9hbmRyb2lkLXR2LWNhcmQudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9kZWZhdWx0S2V5cy50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2RlZmF1bHRTb3VyY2VzLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvZW51bXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9lbnVtcy9zdmcudHMiLCJ3ZWJwYWNrOi8vYW5kcm9pZC10di1jYXJkLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvY3VzdG9tQWN0aW9uLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMva2V5LnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC8uL3NyYy9tb2RlbHMvaW50ZXJmYWNlcy9zZXJ2aWNlRGF0YS50cyIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvLi9zcmMvbW9kZWxzL2ludGVyZmFjZXMvc291cmNlLnRzIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hbmRyb2lkLXR2LWNhcmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2FuZHJvaWQtdHYtY2FyZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IG1vZGVsc18xID0gcmVxdWlyZShcIi4vbW9kZWxzXCIpO1xuY29uc3QgTGl0RWxlbWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjdXN0b21FbGVtZW50cy5nZXQoJ2hhLXBhbmVsLWxvdmVsYWNlJykpO1xuY29uc3QgaHRtbCA9IExpdEVsZW1lbnQucHJvdG90eXBlLmh0bWw7XG5jbGFzcyBBbmRyb2lkVFZDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb29iYXInKTtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0S2V5cyA9IHt9O1xuICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzID0ge307XG4gICAgICAgIHRoaXMuY3VzdG9tS2V5cyA9IHt9O1xuICAgICAgICB0aGlzLmN1c3RvbVNvdXJjZXMgPSB7fTtcbiAgICAgICAgdGhpcy5jdXN0b21JY29ucyA9IHt9O1xuICAgICAgICB0aGlzLmNsaWNrVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNsaWNrQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaExvbmdDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhvbGRBY3Rpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmhvbGRUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIF9oYXNzOiB7fSxcbiAgICAgICAgICAgIF9jb25maWc6IHt9LFxuICAgICAgICAgICAgX2FwcHM6IHt9LFxuICAgICAgICAgICAgdHJpZ2dlcjoge30sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBnZXRTdHViQ29uZmlnKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGdldENhcmRTaXplKCkge1xuICAgICAgICBsZXQgbnVtUm93cyA9IE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZykuZmlsdGVyKChrZXkpID0+IGtleS5pbmNsdWRlcygnX3JvdycpKS5sZW5ndGg7XG4gICAgICAgIGlmICgndGl0bGUnIGluIHRoaXMuX2NvbmZpZykge1xuICAgICAgICAgICAgbnVtUm93cyArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudW1Sb3dzO1xuICAgIH1cbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHsgdGhlbWU6ICdkZWZhdWx0JyB9LCBjb25maWcpO1xuICAgICAgICAgICAgdGhpcy5jdXN0b21LZXlzID0gY29uZmlnLmN1c3RvbV9rZXlzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5jdXN0b21Tb3VyY2VzID0gY29uZmlnLmN1c3RvbV9zb3VyY2VzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5jdXN0b21JY29ucyA9IGNvbmZpZy5jdXN0b21faWNvbnMgfHwge307XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRLZXlzID0gbW9kZWxzXzEuZGVmYXVsdEtleXM7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRTb3VyY2VzID0gbW9kZWxzXzEuZGVmYXVsdFNvdXJjZXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLmFsdF92b2x1bWVfaWNvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZUFsdFZvbHVtZUljb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmxvYWRDYXJkSGVscGVycygpO1xuICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkSGFzc0hlbHBlcnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcudm9sdW1lX3JvdyA9PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVuZGVyVm9sdW1lU2xpZGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJSZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzQnV0dG9uRW5hYmxlZChyb3csIGJ1dHRvbikge1xuICAgICAgICBpZiAoISh0aGlzLl9jb25maWdbcm93XSBpbnN0YW5jZW9mIEFycmF5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1tyb3ddLmluY2x1ZGVzKGJ1dHRvbik7XG4gICAgfVxuICAgIHNldCBoYXNzKGhhc3MpIHtcbiAgICAgICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgICAgIGlmICh0aGlzLnZvbHVtZV9zbGlkZXIpIHtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5oYXNzID0gaGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faGFzc1Jlc29sdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhc3NSZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGhhc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNzO1xuICAgIH1cbiAgICBmaXJlRXZlbnQod2luZG93LCB0eXBlLCBkZXRhaWwpIHtcbiAgICAgICAgY29uc3QgZSA9IG5ldyBFdmVudCh0eXBlLCB7XG4gICAgICAgICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGUuZGV0YWlsID0gZGV0YWlsO1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICAgIGZpcmVIYXB0aWNFdmVudCh3aW5kb3csIGRldGFpbCkge1xuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZV9idXR0b25fZmVlZGJhY2sgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLmVuYWJsZV9idXR0b25fZmVlZGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KHdpbmRvdywgJ2hhcHRpYycsIGRldGFpbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZENhcmRIZWxwZXJzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdGhpcy5faGVscGVycyA9IHlpZWxkIHdpbmRvdy5sb2FkQ2FyZEhlbHBlcnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oZWxwZXJzUmVzb2x2ZSlcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWxwZXJzUmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZEhhc3NIZWxwZXJzKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hlbHBlcnMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKHRoaXMuX2hlbHBlcnNSZXNvbHZlID0gcmVzb2x2ZSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2hhc3MgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKHRoaXMuX2hhc3NSZXNvbHZlID0gcmVzb2x2ZSkpO1xuICAgICAgICAgICAgdGhpcy5faGVscGVyc1Jlc29sdmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl9oYXNzUmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlclZvbHVtZVNsaWRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCBzbGlkZXJfY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b206bXktc2xpZGVyJyxcbiAgICAgICAgICAgICAgICBlbnRpdHk6IHRoaXMuX2NvbmZpZy5tZWRpYV9wbGF5ZXJfaWQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgICAgICAgbWFpblNsaWRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVNsaWRlckNvbG9yOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICBtYWluU2xpZGVyQ29sb3JPZmY6ICdyZ2IoNjAsIDYwLCA2MCknLFxuICAgICAgICAgICAgICAgIHNlY29uZGFyeVNsaWRlckNvbG9yT2ZmOiAncmdiKDYwLCA2MCwgNjApJyxcbiAgICAgICAgICAgICAgICB0aHVtYldpZHRoOiAnMHB4JyxcbiAgICAgICAgICAgICAgICB0aHVtYkhvcml6b250YWxQYWRkaW5nOiAnMHB4JyxcbiAgICAgICAgICAgICAgICByYWRpdXM6ICcyNXB4JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnNsaWRlcl9jb25maWcgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJfY29uZmlnID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzbGlkZXJfY29uZmlnKSwgdGhpcy5fY29uZmlnLnNsaWRlcl9jb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyID1cbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLl9oZWxwZXJzLmNyZWF0ZUNhcmRFbGVtZW50KHNsaWRlcl9jb25maWcpO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLnN0eWxlID0gJ2ZsZXg6IDAuOTsnO1xuICAgICAgICAgICAgdGhpcy52b2x1bWVfc2xpZGVyLm9udG91Y2hzdGFydCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVIYXB0aWNFdmVudCh3aW5kb3csICdsaWdodCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChfZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUhhcHRpY0V2ZW50KHdpbmRvdywgJ2xpZ2h0Jyk7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudm9sdW1lX3NsaWRlci5oYXNzID0gdGhpcy5faGFzcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZUFsdFZvbHVtZUljb25zKCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRLZXlzLnZvbHVtZV91cC5pY29uID0gJ21kaTp2b2x1bWUtaGlnaCc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX2Rvd24uaWNvbiA9ICdtZGk6dm9sdW1lLW1lZGl1bSc7XG4gICAgICAgIHRoaXMuZGVmYXVsdEtleXMudm9sdW1lX211dGUuaWNvbiA9ICdtZGk6dm9sdW1lLXZhcmlhbnQtb2ZmJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZCBjb21tYW5kIHRvIGFuIEFuZHJvaWQgVFYgcmVtb3RlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICAgIHNlbmRLZXkoa2V5LCBsb25nUHJlc3MgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcucmVtb3RlX2lkLFxuICAgICAgICAgICAgY29tbWFuZDoga2V5LFxuICAgICAgICB9O1xuICAgICAgICBpZiAobG9uZ1ByZXNzKSB7XG4gICAgICAgICAgICBkYXRhLmhvbGRfc2VjcyA9IDAuNTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdyZW1vdGUnLCAnc2VuZF9jb21tYW5kJywgZGF0YSk7XG4gICAgfVxuICAgIGdldEluZm8oYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jdXN0b21LZXlzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tU291cmNlc1thY3Rpb25dIHx8XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRLZXlzW2FjdGlvbl0gfHxcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFNvdXJjZXNbYWN0aW9uXSB8fFxuICAgICAgICAgICAge30pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZW5kIGVpdGhlciBhIGNvbW1hbmQgdG8gYW4gQW5kcm9pZCBUViByZW1vdGUgb3IgYSBjdXN0b20ga2V5IHRvIGFueSBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xvbmdQcmVzcz1mYWxzZV1cbiAgICAgKi9cbiAgICBzZW5kQWN0aW9uKGFjdGlvbiwgbG9uZ1ByZXNzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHRoaXMuZ2V0SW5mbyhhY3Rpb24pO1xuICAgICAgICBpZiAoJ2tleScgaW4gaW5mbykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gaW5mby5rZXk7XG4gICAgICAgICAgICB0aGlzLnNlbmRLZXkoa2V5LCBsb25nUHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCdzb3VyY2UnIGluIGluZm8pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU291cmNlKGluZm8uc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgnc2VydmljZScgaW4gaW5mbykge1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZV9kYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpbmZvLnNlcnZpY2VfZGF0YSB8fCB7fSkpO1xuICAgICAgICAgICAgaWYgKGxvbmdQcmVzcyAmJiBpbmZvLnNlcnZpY2UgPT0gJ3JlbW90ZS5zZW5kX2NvbW1hbmQnKSB7XG4gICAgICAgICAgICAgICAgc2VydmljZV9kYXRhLmhvbGRfc2VjcyA9IDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFtkb21haW4sIHNlcnZpY2VdID0gaW5mby5zZXJ2aWNlLnNwbGl0KCcuJywgMik7XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKGRvbWFpbiwgc2VydmljZSwgc2VydmljZV9kYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPcGVuIGFuIEFuZHJvaWQgVFYgYXBwIHVzaW5nIGl0J3MgZGVlcCBsaW5rXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBBbmRyb2lkIFRWIGRlZXAgbGluayBmb3IgYW4gYXBwXG4gICAgICovXG4gICAgY2hhbmdlU291cmNlKHNvdXJjZSkge1xuICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdyZW1vdGUnLCAndHVybl9vbicsIHtcbiAgICAgICAgICAgIGFjdGl2aXR5OiBzb3VyY2UsXG4gICAgICAgICAgICBlbnRpdHlfaWQ6IHRoaXMuX2NvbmZpZy5yZW1vdGVfaWQsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBjbGljayB3aXRoIG5vIG1vdmVtZW50XG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIG9uVG91Y2hDbGljayhlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNvbnN0IGNsaWNrX2FjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpO1xuICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCAnY2VudGVyJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGUuZGV0YWlsICYmIGUuZGV0YWlsID4gdGhpcy5jbGlja0NvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrQ291bnQrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmVuYWJsZV9kb3VibGVfY2xpY2spIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrQ291bnQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMub25Ub3VjaERvdWJsZUNsaWNrKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gc2V0VGltZW91dChjbGlja19hY3Rpb24sIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbGlja19hY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBkb3VibGUgY2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaERvdWJsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1RpbWVyKTtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja0NvdW50ID0gMDtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gKF9hID0gdGhpcy5fY29uZmlnLmRvdWJsZV9jbGlja19rZXljb2RlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnYmFjayc7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCBhY3Rpb24sIGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgc3dpcGUgYW5kIGxvbmcgY2xpY2sgc3RhcnRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTG9uZ0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIE9ubHkgcmVwZWF0IGhvbGQgYWN0aW9uIGZvciBkaXJlY3Rpb25hbCBrZXlzXG4gICAgICAgICAgICBpZiAoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXS5pbmNsdWRlcyh0aGlzLnRvdWNoQWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIHRoaXMudG91Y2hBY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIChfYSA9IHRoaXMuX2NvbmZpZy5sb25nX2NsaWNrX2tleWNvZGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdjZW50ZXInLCB0aGlzLl9jb25maWcubG9uZ19jbGlja19rZXljb2RlID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgd2luZG93LmluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciB0b3VjaHBhZCBzd2lwZSBlbmRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Ub3VjaEVuZChlKSB7XG4gICAgICAgIGlmICh0aGlzLnRvdWNoTG9uZ0NsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoTG9uZ0NsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvdWNoVGltZXIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudG91Y2hJbnRlcnZhbCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrVGltZXIpO1xuICAgICAgICB0aGlzLnRvdWNoQWN0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50b3VjaEludGVydmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbGlja1RpbWVyID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgdG91Y2hwYWQgc3dpcGUgbW92ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICghd2luZG93LmluaXRpYWxYIHx8ICF3aW5kb3cuaW5pdGlhbFkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYIHx8IDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFkgfHwgMDtcbiAgICAgICAgY29uc3QgZGlmZlggPSB3aW5kb3cuaW5pdGlhbFggLSBjdXJyZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlkgPSB3aW5kb3cuaW5pdGlhbFkgLSBjdXJyZW50WTtcbiAgICAgICAgbGV0IGFjdGlvbjtcbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZYKSA+IE1hdGguYWJzKGRpZmZZKSkge1xuICAgICAgICAgICAgLy8gU2xpZGluZyBob3Jpem9udGFsbHlcbiAgICAgICAgICAgIGFjdGlvbiA9IGRpZmZYID4gMCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTbGlkaW5nIHZlcnRpY2FsbHlcbiAgICAgICAgICAgIGFjdGlvbiA9IGRpZmZZID4gMCA/ICd1cCcgOiAnZG93bic7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrKGUsIGFjdGlvbiwgZmFsc2UpO1xuICAgICAgICB3aW5kb3cuaW5pdGlhbFggPSB1bmRlZmluZWQ7XG4gICAgICAgIHdpbmRvdy5pbml0aWFsWSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgYnV0dG9uIGNsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWN0aW9uXVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xvbmdQcmVzcz1mYWxzZV1cbiAgICAgKi9cbiAgICBvbkJ1dHRvbkNsaWNrKGUsIGFjdGlvbiwgbG9uZ1ByZXNzID0gZmFsc2UpIHtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uIHx8IGUuY3VycmVudFRhcmdldC5hY3Rpb247XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldEluZm8oYWN0aW9uKTtcbiAgICAgICAgbGV0IGhhcHRpYyA9IGxvbmdQcmVzcyA/ICdtZWRpdW0nIDogJ2xpZ2h0JztcbiAgICAgICAgaWYgKGFjdGlvbiA9PSAnY2VudGVyJyAmJiAhbG9uZ1ByZXNzKSB7XG4gICAgICAgICAgICBoYXB0aWMgPSAnc2VsZWN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhY3Rpb24gPT0gdGhpcy5fY29uZmlnLmRvdWJsZV9jbGlja19rZXljb2RlKSB7XG4gICAgICAgICAgICBoYXB0aWMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJlSGFwdGljRXZlbnQod2luZG93LCBoYXB0aWMpO1xuICAgICAgICBjb25zdCBrZXkgPSAna2V5JyBpbiBpbmZvID8gaW5mby5rZXkgOiAnJztcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0tFWUJPQVJEJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uS2V5Ym9hcmRQcmVzcyhlLCBsb25nUHJlc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnVEVYVEJPWCc6XG4gICAgICAgICAgICAgICAgdGhpcy5vblRleHRib3hQcmVzcyhlLCBsb25nUHJlc3MpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnU0VBUkNIJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VhcmNoUHJlc3MoZSwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQWN0aW9uKGFjdGlvbiwgbG9uZ1ByZXNzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBidXR0b24gbG9uZyBjbGljayBzdGFydFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkxvbmdDbGlja1N0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5ob2xkQWN0aW9uID0gZS5jdXJyZW50VGFyZ2V0LmFjdGlvbjtcbiAgICAgICAgdGhpcy5ob2xkVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaG9sZExvbmdDbGljayA9IHRydWU7XG4gICAgICAgICAgICAvLyBPbmx5IHJlcGVhdCBob2xkIGFjdGlvbiBmb3IgZGlyZWN0aW9uYWwga2V5cyBhbmQgdm9sdW1lXG4gICAgICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgICAgIGlmIChbJ3VwJywgJ2Rvd24nLCAnbGVmdCcsICdyaWdodCcsICd2b2x1bWVfdXAnLCAndm9sdW1lX2Rvd24nLCAnZGVsZXRlJ10uaW5jbHVkZXModGhpcy5ob2xkQWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9sZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2soZSwgdGhpcy5ob2xkQWN0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub25CdXR0b25DbGljayhlLCB0aGlzLmhvbGRBY3Rpb24sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBidXR0b24gbG9uZyBjbGljayBlbmRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25CdXR0b25Mb25nQ2xpY2tFbmQoZSkge1xuICAgICAgICBpZiAodGhpcy5ob2xkTG9uZ0NsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmhvbGRMb25nQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaG9sZFRpbWVyKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhvbGRJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaG9sZEFjdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuaG9sZFRpbWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob2xkSW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlib2FyZCBrZXlkb3duIGV2ZW50cywgdXNlZCBmb3Igbm9uLWFscGhhbnVtZXJpY2FsIGtleXNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25LZXlEb3duKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBrZXlUb0tleSA9IHtcbiAgICAgICAgICAgIEJhY2tzcGFjZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICBEZWxldGU6ICdmb3J3YXJkX2RlbGV0ZScsXG4gICAgICAgICAgICBFbnRlcjogJ2VudGVyJyxcbiAgICAgICAgICAgIEFycm93TGVmdDogJ2xlZnQnLFxuICAgICAgICAgICAgQXJyb3dSaWdodDogJ3JpZ2h0JyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5VG9LZXlbKF9hID0gZS5rZXkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnXTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC52YWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbmRBY3Rpb24oa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBrZXlib2FyZCBpbnB1dCBldmVudHMsIHVzZWQgZm9yIGFscGhhbnVtZXJpY2FsIGtleXMgYW5kIHdvcmtzIG9uIGFsbCBwbGF0Zm9ybXNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25JbnB1dChlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChlLmRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW50aXR5X2lkOiB0aGlzLl9jb25maWcuYWRiX2lkLFxuICAgICAgICAgICAgICAgIGNvbW1hbmQ6ICdpbnB1dCB0ZXh0IFwiJyArIGUuZGF0YSArICdcIicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgnYW5kcm9pZHR2JywgJ2FkYl9jb21tYW5kJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgcGFzdGUgZXZlbnRzLCBhcyBvbklucHV0IHBhc3RlIGV2ZW50cyByZXR1cm4gbnVsbCBmb3IgZGF0YSBmaWVsZFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBvblBhc3RlKGUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRleHQgPSAoX2EgPSBlLmNsaXBib2FyZERhdGEpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXREYXRhKCdUZXh0Jyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnaW5wdXQgdGV4dCBcIicgKyB0ZXh0ICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmZvY3VzKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIG9uIGZvY3VzIGV2ZW50cywgY2xlYXJzIGlucHV0IGFuZCBjaGFuZ2VzIGljb24gY29sb3JcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Gb2N1cyhlKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJ3ZhcigtLXN0YXRlLWFjdGl2ZS1jb2xvciknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuekluZGV4ID0gJzknO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIG9uIGZvY3VzIG91dCBldmVudHMsIGNsZWFycyBpbnB1dCBhbmQgcmVzZXRzIGljb24gY29sb3JcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgb25Gb2N1c091dChlKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9ICcnO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgLmNoaWxkcmVuWzBdLnN0eWxlLmNvbG9yID0gJyc7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuekluZGV4ID0gJyc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIGNsaWNraW5nIHRoZSBrZXlib2FyZCBidXR0b25cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uS2V5Ym9hcmRQcmVzcyhlLCBfbG9uZ3ByZXNzKSB7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jaGlsZHJlblsxXS5mb2N1cygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBzZW5kaW5nIGJ1bGsgdGV4dCB2aWEgbGVnYWN5IHByb21wdCBtZXRob2RcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uVGV4dGJveFByZXNzKGUsIF9sb25ncHJlc3MpIHtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHByb21wdCgnVGV4dCBJbnB1dDogJyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnaW5wdXQgdGV4dCBcIicgKyB0ZXh0ICsgJ1wiJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9oYXNzLmNhbGxTZXJ2aWNlKCdhbmRyb2lkdHYnLCAnYWRiX2NvbW1hbmQnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBnbG9iYWwgR29vZ2xlIEFzc2lzdGFudCBzZWFyY2hcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbbG9uZ1ByZXNzPWZhbHNlXVxuICAgICAqL1xuICAgIG9uU2VhcmNoUHJlc3MoZSwgX2xvbmdwcmVzcykge1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gcHJvbXB0KCdHb29nbGUgQXNzaXN0YW50IFNlYXJjaDogJyk7XG4gICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGVudGl0eV9pZDogdGhpcy5fY29uZmlnLmFkYl9pZCxcbiAgICAgICAgICAgICAgICBjb21tYW5kOiAnYW0gc3RhcnQgLWEgXCJhbmRyb2lkLnNlYXJjaC5hY3Rpb24uR0xPQkFMX1NFQVJDSFwiIC0tZXMgcXVlcnkgXCInICtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCArXG4gICAgICAgICAgICAgICAgICAgICdcIicsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5faGFzcy5jYWxsU2VydmljZSgnYW5kcm9pZHR2JywgJ2FkYl9jb21tYW5kJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnVpbGRJY29uQnV0dG9uKGFjdGlvbikge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9mO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5nZXRJbmZvKGFjdGlvbik7XG4gICAgICAgIGxldCBpY29uID0gKF9hID0gaW5mbyA9PT0gbnVsbCB8fCBpbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbmZvLmljb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICBsZXQgc3ZnX3BhdGggPSAoX2MgPSAoX2IgPSBpbmZvLnN2Z19wYXRoKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB0aGlzLmN1c3RvbUljb25zW2ljb25dKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJztcbiAgICAgICAgLy8gVXNlIG9yaWdpbmFsIGljb24gaWYgbm9uZSBwcm92aWRlZCBmb3IgY3VzdG9tIGtleSBvciBzb3VyY2VcbiAgICAgICAgaWYgKCEoaWNvbiB8fCBzdmdfcGF0aCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25JbmZvID0gdGhpcy5kZWZhdWx0S2V5c1thY3Rpb25dIHx8IHRoaXMuZGVmYXVsdFNvdXJjZXNbYWN0aW9uXSB8fCB7fTtcbiAgICAgICAgICAgIGljb24gPSAoX2QgPSBpY29uSW5mbyA9PT0gbnVsbCB8fCBpY29uSW5mbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWNvbkluZm8uaWNvbikgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICBzdmdfcGF0aCA9IChfZiA9IGljb25JbmZvID09PSBudWxsIHx8IGljb25JbmZvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpY29uSW5mby5zdmdfcGF0aCkgIT09IG51bGwgJiYgX2YgIT09IHZvaWQgMCA/IF9mIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGtJbnB1dCA9IGh0bWwgYGA7XG4gICAgICAgIGlmICgna2V5JyBpbiBpbmZvICYmIGluZm8ua2V5ID09ICdLRVlCT0FSRCcpIHtcbiAgICAgICAgICAgIGtJbnB1dCA9IGh0bWwgYFxyXG5cdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0c3BlbGxjaGVjaz1cImZhbHNlXCJcclxuXHRcdFx0XHRcdGF1dG9jb3JyZWN0PVwib2ZmXCJcclxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRhdXRvY2FwaXRhbGl6ZT1cIm9mZlwiXHJcblx0XHRcdFx0XHRvbmNoYW5nZT1cInRoaXMudmFsdWU9JydcIlxyXG5cdFx0XHRcdFx0b25rZXl1cD1cInRoaXMudmFsdWU9JydcIlxyXG5cdFx0XHRcdFx0QGZvY3VzPVwiJHt0aGlzLm9uRm9jdXN9XCJcclxuXHRcdFx0XHRcdEBmb2N1c291dD1cIiR7dGhpcy5vbkZvY3VzT3V0fVwiXHJcblx0XHRcdFx0XHRAaW5wdXQ9XCIke3RoaXMub25JbnB1dH1cIlxyXG5cdFx0XHRcdFx0QHBhc3RlPVwiJHt0aGlzLm9uUGFzdGV9XCJcclxuXHRcdFx0XHRcdEBrZXlkb3duPVwiJHt0aGlzLm9uS2V5RG93bn1cIlxyXG5cdFx0XHRcdD48L2lucHV0PlxyXG5cdFx0XHRgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sIGBcclxuXHRcdFx0PGhhLWljb24tYnV0dG9uXHJcblx0XHRcdFx0LmFjdGlvbj1cIiR7YWN0aW9ufVwiXHJcblx0XHRcdFx0QGNsaWNrPVwiJHt0aGlzLm9uQnV0dG9uQ2xpY2t9XCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vbkJ1dHRvbkxvbmdDbGlja1N0YXJ0fVwiXHJcblx0XHRcdFx0QHRvdWNoZW5kPVwiJHt0aGlzLm9uQnV0dG9uTG9uZ0NsaWNrRW5kfVwiXHJcblx0XHRcdFx0dGl0bGU9XCIke2FjdGlvbn1cIlxyXG5cdFx0XHRcdC5wYXRoPVwiJHtzdmdfcGF0aH1cIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGhhLWljb24gLmljb249XCIkeyFzdmdfcGF0aCA/IGljb24gOiAnJ31cIj48L2hhLWljb24+XHJcblx0XHRcdFx0JHtrSW5wdXR9XHJcblx0XHRcdDwvaGEtaWNvbi1idXR0b24+XHJcblx0XHRgO1xuICAgIH1cbiAgICBidWlsZFJvdyhjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBodG1sIGAgPGRpdiBjbGFzcz1cInJvd1wiPiR7Y29udGVudH08L2Rpdj4gYDtcbiAgICB9XG4gICAgYnVpbGRCdXR0b25zRnJvbUFjdGlvbnMoYWN0aW9ucykge1xuICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gdGhpcy5idWlsZEljb25CdXR0b24oYWN0aW9uKSk7XG4gICAgfVxuICAgIHRyaWdnZXJSZW5kZXIoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuX2hhc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sIGBgO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb250ZW50ID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuX2NvbmZpZykuZm9yRWFjaCgocm93X25hbWUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3dfbmFtZS5pbmNsdWRlcygnX3JvdycpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb3dfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2b2x1bWVfcm93Jzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy52b2x1bWVfcm93ID09ICdidXR0b25zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCd2b2x1bWVfZG93bicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigndm9sdW1lX211dGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEljb25CdXR0b24oJ3ZvbHVtZV91cCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fY29uZmlnLnZvbHVtZV9yb3cgPT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2goW3RoaXMudm9sdW1lX3NsaWRlcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbmF2aWdhdGlvbl9yb3cnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2NvbmZpZy5uYXZpZ2F0aW9uX3Jvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2J1dHRvbnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ3VwJyldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRJY29uQnV0dG9uKCdsZWZ0JyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbignY2VudGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkSWNvbkJ1dHRvbigncmlnaHQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaChbdGhpcy5idWlsZEljb25CdXR0b24oJ2Rvd24nKV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG91Y2hwYWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG91Y2hwYWQgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIGBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dG91Y2hhcmVhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInRvdWNoYXJlYVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCIke3RoaXMub25Ub3VjaENsaWNrfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAdG91Y2hzdGFydD1cIiR7dGhpcy5vblRvdWNoU3RhcnR9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaG1vdmU9XCIke3RoaXMub25Ub3VjaE1vdmV9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEB0b3VjaGVuZD1cIiR7dGhpcy5vblRvdWNoRW5kfVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdG91Y2hhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnB1c2godG91Y2hwYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucHVzaCh0aGlzLmJ1aWxkQnV0dG9uc0Zyb21BY3Rpb25zKHRoaXMuX2NvbmZpZ1tyb3dfbmFtZV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50Lm1hcCh0aGlzLmJ1aWxkUm93KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gaHRtbCBgXHJcblx0XHRcdCR7dGhpcy5yZW5kZXJTdHlsZSgpfVxyXG5cdFx0XHQ8aGEtY2FyZCAuaGVhZGVyPVwiJHt0aGlzLl9jb25maWcudGl0bGV9XCI+JHtjb250ZW50fTwvaGEtY2FyZD5cclxuXHRcdGA7XG4gICAgICAgIHJldHVybiBodG1sIGAke291dHB1dH1gO1xuICAgIH1cbiAgICByZW5kZXJTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIGh0bWwgYFxyXG5cdFx0XHQ8c3R5bGU+XHJcblx0XHRcdFx0LnJlbW90ZSB7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxNnB4IDBweCAxNnB4IDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aW1nLFxyXG5cdFx0XHRcdGhhLWljb24tYnV0dG9uIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA0OHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0LS1tZGMtaWNvbi1zaXplOiAxMDAlO1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdFx0ZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG5cdFx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0d2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHRcdFx0XHRcdGhlaWdodDogZmlsbC1hdmFpbGFibGU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5yb3cge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDhweCAzNnB4IDhweCAzNnB4O1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5kaWFnb25hbCB7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG91Y2hhcmVhIHtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0XHRcdFx0XHRmbGV4LWdyb3c6IDE7XHJcblx0XHRcdFx0XHRoZWlnaHQ6ICR7dGhpcy5fY29uZmlnWyd0b3VjaHBhZF9oZWlnaHQnXSB8fCAnMjUwcHgnfTtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICM2ZDc2N2U7XHJcblx0XHRcdFx0XHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L3N0eWxlPlxyXG5cdFx0YDtcbiAgICB9XG4gICAgYXBwbHlUaGVtZXNPbkVsZW1lbnQoZWxlbWVudCwgdGhlbWVzLCBsb2NhbFRoZW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZWxlbWVudC5fdGhlbWVzID0gKF9hID0gZWxlbWVudC5fdGhlbWVzKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fTtcbiAgICAgICAgbGV0IHRoZW1lTmFtZSA9IHRoZW1lcy5kZWZhdWx0X3RoZW1lO1xuICAgICAgICBpZiAobG9jYWxUaGVtZSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICAgICAgICAobG9jYWxUaGVtZSAmJiB0aGVtZXMudGhlbWVzW2xvY2FsVGhlbWVdKSkge1xuICAgICAgICAgICAgdGhlbWVOYW1lID0gbG9jYWxUaGVtZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHlsZXMgPSBPYmplY3QuYXNzaWduKHt9LCBlbGVtZW50Ll90aGVtZXMpO1xuICAgICAgICBpZiAodGhlbWVOYW1lICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gdGhlbWVzLnRoZW1lc1t0aGVtZU5hbWVdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhlbWUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeGVkS2V5ID0gJy0tJyArIGtleTtcbiAgICAgICAgICAgICAgICBlbGVtZW50Ll90aGVtZXNbcHJlZml4ZWRLZXldID0gJyc7XG4gICAgICAgICAgICAgICAgc3R5bGVzW3ByZWZpeGVkS2V5XSA9IHRoZW1lW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC51cGRhdGVTdHlsZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlU3R5bGVzKHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgICAgICAgICAvLyBpbXBsZW1lbnQgdXBkYXRlU3R5bGVzKCkgbWV0aG9kIG9mIFBvbGVtZXIgZWxlbWVudHNcbiAgICAgICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZVN1YnRyZWUoXG4gICAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi9cbiAgICAgICAgICAgIGVsZW1lbnQsIHN0eWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT10aGVtZS1jb2xvcl0nKTtcbiAgICAgICAgaWYgKG1ldGEpIHtcbiAgICAgICAgICAgIGlmICghbWV0YS5oYXNBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcpKSB7XG4gICAgICAgICAgICAgICAgbWV0YS5zZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtY29udGVudCcsIG1ldGEuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGhlbWVDb2xvciA9IHN0eWxlc1snLS1wcmltYXJ5LWNvbG9yJ10gfHxcbiAgICAgICAgICAgICAgICBtZXRhLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC1jb250ZW50Jyk7XG4gICAgICAgICAgICBtZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIHRoZW1lQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhbmRyb2lkLXR2LWNhcmQnLCBBbmRyb2lkVFZDYXJkKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0S2V5cyA9IHZvaWQgMDtcbi8qKlxuICogVGhpcyBpcyB0aGUgbGlzdCBvZiBtb3N0IGNvbW1vbiBjb21tYW5kcyBmcm9tIHRoZSBBbmRyb2lkIFRWIFJlbW90ZSBpbnRlZ3JhdGlvbiBwYWdlLlxuICogTm90IGFsbCBhcmUgZW5zdXJlZCB0byB3b3JrLCBhbmQgaWYgdGhleSBkbyBub3QgaXQgaXMgbGlrZWx5IGFuIGlzc3VlIHdpdGggdGhlIHVuZGVybHlpbmcgcGFja2FnZSB1c2VkIGJ5IHRoZSBBbmRyb2lkIFRWIFJlbW90ZSBpbnRlZ3JhdGlvbiBvciB0aGUgQW5kcm9pZCBUViBSZW1vdGUgUHJvdG9jb2wgVjIgaXRzZWxmLlxuICogaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vaW50ZWdyYXRpb25zL2FuZHJvaWR0dl9yZW1vdGUvI3JlbW90ZVxuICovXG5leHBvcnRzLmRlZmF1bHRLZXlzID0ge1xuICAgIHBvd2VyOiB7IGtleTogJ1BPV0VSJywgaWNvbjogJ21kaTpwb3dlcicgfSxcbiAgICB2b2x1bWVfdXA6IHsga2V5OiAnVk9MVU1FX1VQJywgaWNvbjogJ21kaTp2b2x1bWUtcGx1cycgfSxcbiAgICB2b2x1bWVfZG93bjogeyBrZXk6ICdWT0xVTUVfRE9XTicsIGljb246ICdtZGk6dm9sdW1lLW1pbnVzJyB9LFxuICAgIHZvbHVtZV9tdXRlOiB7IGtleTogJ01VVEUnLCBpY29uOiAnbWRpOnZvbHVtZS1tdXRlJyB9LFxuICAgIGJhY2s6IHsga2V5OiAnQkFDSycsIGljb246ICdtZGk6a2V5Ym9hcmQtYmFja3NwYWNlJyB9LFxuICAgIGhvbWU6IHsga2V5OiAnSE9NRScsIGljb246ICdtZGk6aG9tZScgfSxcbiAgICB1cDogeyBrZXk6ICdEUEFEX1VQJywgaWNvbjogJ21kaTpjaGV2cm9uLXVwJyB9LFxuICAgIGxlZnQ6IHsga2V5OiAnRFBBRF9MRUZUJywgaWNvbjogJ21kaTpjaGV2cm9uLWxlZnQnIH0sXG4gICAgY2VudGVyOiB7IGtleTogJ0RQQURfQ0VOVEVSJywgaWNvbjogJ21kaTpjaGVja2JveC1ibGFuay1jaXJjbGUnIH0sXG4gICAgcmlnaHQ6IHsga2V5OiAnRFBBRF9SSUdIVCcsIGljb246ICdtZGk6Y2hldnJvbi1yaWdodCcgfSxcbiAgICBkb3duOiB7IGtleTogJ0RQQURfRE9XTicsIGljb246ICdtZGk6Y2hldnJvbi1kb3duJyB9LFxuICAgIHBsYXk6IHsga2V5OiAnTUVESUFfUExBWScsIGljb246ICdtZGk6cGxheScgfSxcbiAgICBwYXVzZTogeyBrZXk6ICdNRURJQV9QQVVTRScsIGljb246ICdtZGk6cGF1c2UnIH0sXG4gICAgcGxheV9wYXVzZTogeyBrZXk6ICdNRURJQV9QTEFZX1BBVVNFJywgaWNvbjogJ21kaTpwbGF5LXBhdXNlJyB9LFxuICAgIHN0b3A6IHsga2V5OiAnTUVESUFfU1RPUCcsIGljb246ICdtZGk6c3RvcCcgfSxcbiAgICByZXdpbmQ6IHsga2V5OiAnTUVESUFfUkVXSU5EJywgaWNvbjogJ21kaTpyZXdpbmQnIH0sXG4gICAgZmFzdF9mb3J3YXJkOiB7IGtleTogJ01FRElBX0ZBU1RfRk9SV0FSRCcsIGljb246ICdtZGk6ZmFzdC1mb3J3YXJkJyB9LFxuICAgIHByZXZpb3VzOiB7IGtleTogJ01FRElBX1BSRVZJT1VTJywgaWNvbjogJ21kaTpza2lwLXByZXZpb3VzJyB9LFxuICAgIHJlY29yZDogeyBrZXk6ICdNRURJQV9SRUNPUkQnLCBpY29uOiAnbWRpOnJlY29yZCcgfSxcbiAgICBuZXh0OiB7IGtleTogJ01FRElBX05FWFQnLCBpY29uOiAnbWRpOnNraXAtbmV4dCcgfSxcbiAgICBtZW51OiB7IGtleTogJ01FTlUnLCBpY29uOiAnbWRpOm1lbnUnIH0sXG4gICAgYTogeyBrZXk6ICdCVVRUT05fQScsIGljb246ICdtZGk6YWxwaGEtYS1jaXJjbGUnIH0sXG4gICAgYjogeyBrZXk6ICdCVVRUT05fQicsIGljb246ICdtZGk6YWxwaGEtQi1jaXJjbGUnIH0sXG4gICAgeDogeyBrZXk6ICdCVVRUT05fWCcsIGljb246ICdtZGk6YWxwaGEteC1jaXJjbGUnIH0sXG4gICAgeTogeyBrZXk6ICdCVVRUT05fWScsIGljb246ICdtZGk6YWxwaGEteS1jaXJjbGUnIH0sXG4gICAgbjA6IHsga2V5OiAnMCcsIGljb246ICdtZGk6bnVtZXJpYy0wJyB9LFxuICAgIG4xOiB7IGtleTogJzEnLCBpY29uOiAnbWRpOm51bWVyaWMtMScgfSxcbiAgICBuMjogeyBrZXk6ICcyJywgaWNvbjogJ21kaTpudW1lcmljLTInIH0sXG4gICAgbjM6IHsga2V5OiAnMycsIGljb246ICdtZGk6bnVtZXJpYy0zJyB9LFxuICAgIG40OiB7IGtleTogJzQnLCBpY29uOiAnbWRpOm51bWVyaWMtNCcgfSxcbiAgICBuNTogeyBrZXk6ICc1JywgaWNvbjogJ21kaTpudW1lcmljLTUnIH0sXG4gICAgbjY6IHsga2V5OiAnNicsIGljb246ICdtZGk6bnVtZXJpYy02JyB9LFxuICAgIG43OiB7IGtleTogJzcnLCBpY29uOiAnbWRpOm51bWVyaWMtNycgfSxcbiAgICBuODogeyBrZXk6ICc4JywgaWNvbjogJ21kaTpudW1lcmljLTgnIH0sXG4gICAgbjk6IHsga2V5OiAnOScsIGljb246ICdtZGk6bnVtZXJpYy05JyB9LFxuICAgIGNoYW5uZWxfdXA6IHsga2V5OiAnQ0hBTk5FTF9VUCcsIGljb246ICdtZGk6YXJyb3ctdXAtY2lyY2xlJyB9LFxuICAgIGNoYW5uZWxfZG93bjogeyBrZXk6ICdDSEFOTkVMX0RPV04nLCBpY29uOiAnbWRpOmFycm93LWRvd24tY2lyY2xlJyB9LFxuICAgIGYxOiB7IGtleTogJ0YxJywgaWNvbjogJ21kaTprZXlib2FyZC1mMScgfSxcbiAgICBmMjogeyBrZXk6ICdGMicsIGljb246ICdtZGk6a2V5Ym9hcmQtZjInIH0sXG4gICAgZjM6IHsga2V5OiAnRjMnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYzJyB9LFxuICAgIGY0OiB7IGtleTogJ0Y0JywgaWNvbjogJ21kaTprZXlib2FyZC1mNCcgfSxcbiAgICBmNTogeyBrZXk6ICdGNScsIGljb246ICdtZGk6a2V5Ym9hcmQtZjUnIH0sXG4gICAgZjY6IHsga2V5OiAnRjYnLCBpY29uOiAnbWRpOmtleWJvYXJkLWY2JyB9LFxuICAgIGY3OiB7IGtleTogJ0Y3JywgaWNvbjogJ21kaTprZXlib2FyZC1mNycgfSxcbiAgICBmODogeyBrZXk6ICdGOCcsIGljb246ICdtZGk6a2V5Ym9hcmQtZjgnIH0sXG4gICAgZjk6IHsga2V5OiAnRjknLCBpY29uOiAnbWRpOmtleWJvYXJkLWY5JyB9LFxuICAgIGYxMDogeyBrZXk6ICdGMTAnLCBpY29uOiAnbWRpOmtleWJvYXJkLWYxMCcgfSxcbiAgICBmMTE6IHsga2V5OiAnRjExJywgaWNvbjogJ21kaTprZXlib2FyZC1mMTEnIH0sXG4gICAgZjEyOiB7IGtleTogJ0YxMicsIGljb246ICdtZGk6a2V5Ym9hcmQtZjEyJyB9LFxuICAgIHR2OiB7IGtleTogJ1RWJywgaWNvbjogJ21kaTp0ZWxldmlzaW9uLWJveCcgfSxcbiAgICByZWQ6IHsga2V5OiAnUFJPR19SRUQnLCBpY29uOiAnbWRpOmFscGhhLXItYm94JyB9LFxuICAgIGdyZWVuOiB7IGtleTogJ1BST0dfR1JFRU4nLCBpY29uOiAnbWRpOmFscGhhLWctYm94JyB9LFxuICAgIHllbGxvdzogeyBrZXk6ICdQUk9HX1lFTExPVycsIGljb246ICdtZGk6YWxwaGEteS1ib3gnIH0sXG4gICAgYmx1ZTogeyBrZXk6ICdQUk9HX0JMVUUnLCBpY29uOiAnbWRpOmFscGhhLWItYm94JyB9LFxuICAgIGJ1dHRvbl9tb2RlOiB7IGtleTogJ0JVVFRPTl9NT0RFJywgaWNvbjogJ21kaTpnZXN0dXJlLXRhcC1idXRvbicgfSxcbiAgICBleHBsb3JlcjogeyBrZXk6ICdFWFBMT1JFUicsIGljb246ICdtZGk6Zm9sZGVyLW11bHRpcGxlJyB9LFxuICAgIGluZm86IHsga2V5OiAnSU5GTycsIGljb246ICdtZGk6aW5mb3JtYXRpb24nIH0sXG4gICAgZ3VpZGU6IHsga2V5OiAnR1VJREUnLCBpY29uOiAnbWRpOnRlbGV2aXNpb24tZ3VpZGUnIH0sXG4gICAgdGVsZXRleHQ6IHsga2V5OiAnVFZfVEVMRVRFWFQnLCBpY29uOiAnbWRpOmNhcmQtdGV4dCcgfSxcbiAgICBjYXB0aW9uczogeyBrZXk6ICdDQVBUSU9OUycsIGljb246ICdtZGk6Y2xvc2VkLWNhcHRpb24nIH0sXG4gICAgZHZyOiB7IGtleTogJ0RWUicsIGljb246ICdtZGk6YXVkaW8tdmlkZW8nIH0sXG4gICAgYXVkaW9fdHJhY2s6IHsga2V5OiAnTUVESUFfQVVESU9fVFJBQ0snLCBpY29uOiAnbWRpOndhdmVmb3JtJyB9LFxuICAgIHNldHRpbmdzOiB7IGtleTogJ1NFVFRJTkdTJywgaWNvbjogJ21kaTpjb2cnIH0sXG4gICAgZGVsZXRlOiB7IGtleTogJ0RFTCcsIGljb246ICdtZGk6YmFja3NwYWNlJyB9LFxuICAgIGZvcndhcmRfZGVsZXRlOiB7IGtleTogJ0ZPV0FSRF9ERUwnLCBpY29uOiAnbWRpOmJhY2tzcGFjZS1yZXZlcnNlJyB9LFxuICAgIGVudGVyOiB7IGtleTogJ0VOVEVSJywgaWNvbjogJ21kaTptYWduaWZ5JyB9LFxuICAgIGtleWJvYXJkOiB7IGtleTogJ0tFWUJPQVJEJywgaWNvbjogJ21kaTprZXlib2FyZCcgfSxcbiAgICBzZWFyY2g6IHsga2V5OiAnU0VBUkNIJywgaWNvbjogJ21kaTpnb29nbGUtYXNzaXN0YW50JyB9LFxuICAgIHRleHRib3g6IHsga2V5OiAnVEVYVEJPWCcsIGljb246ICdtZGk6dGV4dC1ib3gnIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHRTb3VyY2VzID0gdm9pZCAwO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbi8qKlxuICogVGhpcyBpcyBhIGxpc3Qgb2YgY29tbW9uIHN0cmVhbWluZyBhcHBzLCB0aGVpciBpY29ucywgYW5kIHRoZSBkZWVwIGxpbmtzIHRvIG9wZW4gdGhlbSBpbiBBbmRyb2lkIFRWLCBtb3N0bHkgY29sbGVjdGVkIGZyb20gdGhlIGZvbGxvd2luZyBIb21lIEFzc2lzdGFudCBDb21tdW5pdHkgRm9ydW0gZ3VpZGUuXG4gKiBOb3QgYWxsIGhhdmUgYmVlbiB0ZXN0ZWQsIGlmIGFueSBkbyBub3Qgd29yayBwbGVhc2UgbGV0IG1lIGtub3chXG4gKiBodHRwczovL2NvbW11bml0eS5ob21lLWFzc2lzdGFudC5pby90L2FuZHJvaWQtdHYtcmVtb3RlLWFwcC1saW5rcy1kZWVwLWxpbmtpbmctZ3VpZGUvNTY3OTIxXG4gKi9cbmV4cG9ydHMuZGVmYXVsdFNvdXJjZXMgPSB7XG4gICAgYXBwbGV0djoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3R2LmFwcGxlLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuQVBQTEVUVixcbiAgICB9LFxuICAgIGNydW5jaHlyb2xsOiB7XG4gICAgICAgIHNvdXJjZTogJ2NydW5jaHlyb2xsOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5DUlVOQ0hZUk9MTCxcbiAgICB9LFxuICAgIGRpc25leToge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL3d3dy5kaXNuZXlwbHVzLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuRElTTkVZLFxuICAgIH0sXG4gICAgZW1ieToge1xuICAgICAgICBzb3VyY2U6ICdlbWJ5YXR2Oi8vdHYuZW1ieS5lbWJ5YXR2L3N0YXJ0YXBwJyxcbiAgICAgICAgaWNvbjogJ21kaTplbWJ5JyxcbiAgICB9LFxuICAgIGZveHNwb3J0czoge1xuICAgICAgICBzb3VyY2U6ICdmb3hzcG9ydHM6Ly9saXZlJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5GT1hTUE9SVFMsXG4gICAgfSxcbiAgICBodWx1OiB7XG4gICAgICAgIHNvdXJjZTogJ2h1bHU6Ly8nLFxuICAgICAgICBpY29uOiAnbWRpOmh1bHUnLFxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICAgIHNvdXJjZTogJ2h0dHBzOi8vcGxheS5tYXguY29tJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5NQVgsXG4gICAgfSxcbiAgICBtbGJ0djoge1xuICAgICAgICBzb3VyY2U6ICdtbGJhdGJhdDovLycsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuTUxCVFYsXG4gICAgfSxcbiAgICBuYmE6IHtcbiAgICAgICAgc291cmNlOiAnZ2FtZXRpbWU6Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLk5CQSxcbiAgICB9LFxuICAgIG5ldGZsaXg6IHsgc291cmNlOiAnbmV0ZmxpeDovLycsIGljb246ICdtZGk6bmV0ZmxpeCcgfSxcbiAgICBwbGV4OiB7XG4gICAgICAgIHNvdXJjZTogJ3BsZXg6Ly8nLFxuICAgICAgICBpY29uOiAnbWRpOnBsZXgnLFxuICAgIH0sXG4gICAgcHJpbWV2aWRlbzoge1xuICAgICAgICBzb3VyY2U6ICdodHRwczovL2FwcC5wcmltZXZpZGVvLmNvbScsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuUFJJTUVWSURFTyxcbiAgICB9LFxuICAgIHBpYToge1xuICAgICAgICBzb3VyY2U6ICdwaWF2cG46Ly8nLFxuICAgICAgICBzdmdfcGF0aDogXzEuc3ZnLlBJQSxcbiAgICB9LFxuICAgIHNwb3RpZnk6IHsgc291cmNlOiAnc3BvdGlmeTovLycsIGljb246ICdtZGk6c3BvdGlmeScgfSxcbiAgICBzdXJmc2hhcms6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly9zdXJmc2hhcmsuY29tL2xvY2F0aW9ucy11bCcsXG4gICAgICAgIHN2Z19wYXRoOiBfMS5zdmcuU1VSRlNIQVJLLFxuICAgIH0sXG4gICAgdnVkdToge1xuICAgICAgICBzb3VyY2U6ICd2dWR1YXBwOi8vJyxcbiAgICAgICAgc3ZnX3BhdGg6IF8xLnN2Zy5WVURVLFxuICAgIH0sXG4gICAgeW91dHViZTogeyBzb3VyY2U6ICd2bmQueW91dHViZTovLycsIGljb246ICdtZGk6eW91dHViZScgfSxcbiAgICB5b3V0dWJldHY6IHtcbiAgICAgICAgc291cmNlOiAnaHR0cHM6Ly90di55b3V0dWJlLmNvbScsXG4gICAgICAgIGljb246ICdtZGk6eW91dHViZS10dicsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3N2Z1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3ZnID0gdm9pZCAwO1xudmFyIHN2ZztcbihmdW5jdGlvbiAoc3ZnKSB7XG4gICAgc3ZnW1wiQVBQTEVUVlwiXSA9IFwiTSA2LjgyMDMxMiA4LjI0NjA5NCBDIDcuMTc5Njg4IDcuODI0MjE5IDcuMzk4NDM4IDcuMjczNDM4IDcuMzk4NDM4IDYuNjc1NzgxIEMgNy4zOTg0MzggNi42MTMyODEgNy4zOTg0MzggNi41NTA3ODEgNy4zOTQ1MzEgNi40OTIxODggTCA3LjM5NDUzMSA2LjUgQyA2Ljc0NjA5NCA2LjU2NjQwNiA2LjE4MzU5NCA2Ljg3MTA5NCA1Ljc4NTE1NiA3LjMyNDIxOSBMIDUuNzgxMjUgNy4zMjgxMjUgQyA1LjQxNzk2OSA3LjcyNjU2MiA1LjE5NTMxMiA4LjI2MTcxOSA1LjE5NTMxMiA4Ljg1MTU2MiBDIDUuMTk1MzEyIDguOTEwMTU2IDUuMTk5MjE5IDguOTY4NzUgNS4yMDMxMjUgOS4wMjM0MzggTCA1LjIwMzEyNSA5LjAxNTYyNSBDIDUuMjA3MDMxIDkuMDE1NjI1IDUuMjE0ODQ0IDkuMDE1NjI1IDUuMjIyNjU2IDkuMDE1NjI1IEMgNS44NjcxODggOS4wMTU2MjUgNi40NDUzMTIgOC43MTg3NSA2LjgyMDMxMiA4LjI1IFogTSA4LjE5NTMxMiAxMi4zMDQ2ODggQyA4LjIwMzEyNSAxMy4yOTI5NjkgOC43OTY4NzUgMTQuMTQwNjI1IDkuNjQ4NDM4IDE0LjUxMTcxOSBMIDkuNjY0MDYyIDE0LjUxOTUzMSBDIDkuNDY4NzUgMTUuMTA5Mzc1IDkuMjE0ODQ0IDE1LjYyNSA4Ljg5NDUzMSAxNi4wOTM3NSBMIDguOTA2MjUgMTYuMDcwMzEyIEMgOC40NDkyMTkgMTYuNzM0Mzc1IDcuOTgwNDY5IDE3LjM5ODQzOCA3LjIzMDQ2OSAxNy40MTQwNjIgQyA2LjUgMTcuNDI5Njg4IDYuMjY5NTMxIDE2Ljk4MDQ2OSA1LjQyNTc4MSAxNi45ODA0NjkgQyA0LjU4OTg0NCAxNi45ODA0NjkgNC4zMjgxMjUgMTcuMzk4NDM4IDMuNjMyODEyIDE3LjQyOTY4OCBDIDIuOTI1NzgxIDE3LjQ1MzEyNSAyLjM3NSAxNi43MDMxMjUgMS45MTQwNjIgMTYuMDM5MDYyIEMgMS4yMjY1NjIgMTUuMTA5Mzc1IDAuODEyNSAxMy45NDE0MDYgMC44MTI1IDEyLjY3MTg3NSBDIDAuODEyNSAxMS45MDIzNDQgMC45NjQ4NDQgMTEuMTY3OTY5IDEuMjQyMTg4IDEwLjUgTCAxLjIyNjU2MiAxMC41MzUxNTYgQyAxLjY3OTY4OCA5LjczNDM3NSAyLjUxOTUzMSA5LjE5NTMxMiAzLjQ4NDM3NSA5LjE3MTg3NSBMIDMuNDg4MjgxIDkuMTcxODc1IEMgNC4xOTE0MDYgOS4xNTYyNSA0Ljg2MzI4MSA5LjY0ODQzOCA1LjI5Njg3NSA5LjY0ODQzOCBDIDUuNzI2NTYyIDkuNjQ4NDM4IDYuNTM1MTU2IDkuMDYyNSA3LjM4NjcxOSA5LjE0ODQzOCBDIDguMjEwOTM4IDkuMTc5Njg4IDguOTMzNTk0IDkuNTkzNzUgOS4zNzg5MDYgMTAuMjE4NzUgTCA5LjM4NjcxOSAxMC4yMjY1NjIgQyA4LjY3NTc4MSAxMC42NjQwNjIgOC4yMTA5MzggMTEuNDI5Njg4IDguMTk1MzEyIDEyLjMwNDY4OCBaIE0gMTUuMDE5NTMxIDE3LjMwNDY4OCBDIDE0LjU4OTg0NCAxNy40Mjk2ODggMTQuMDk3NjU2IDE3LjUgMTMuNTg1OTM4IDE3LjUgQyAxMy41ODIwMzEgMTcuNSAxMy41NzQyMTkgMTcuNSAxMy41NjY0MDYgMTcuNSBDIDEyLjQxNzk2OSAxNy41IDExLjg0NzY1NiAxNi44NTE1NjIgMTEuODQ3NjU2IDE1LjU0Njg3NSBMIDExLjg0NzY1NiA5Ljc5Njg3NSBMIDEwLjg1MTU2MiA5Ljc5Njg3NSBMIDEwLjg1MTU2MiA4Ljc1MzkwNiBMIDExLjg5ODQzOCA4Ljc1MzkwNiBMIDExLjg5ODQzOCA3LjM5ODQzOCBMIDEzLjI4MTI1IDYuODMyMDMxIEwgMTMuMjgxMjUgOC43NjE3MTkgTCAxNC44Nzg5MDYgOC43NjE3MTkgTCAxNC44Nzg5MDYgOS44MDQ2ODggTCAxMy4yODkwNjIgOS44MDQ2ODggTCAxMy4yODkwNjIgMTUuMjM4MjgxIEMgMTMuMjg1MTU2IDE1LjI3NzM0NCAxMy4yODUxNTYgMTUuMzIwMzEyIDEzLjI4NTE1NiAxNS4zNjcxODggQyAxMy4yODUxNTYgMTUuNjQwNjI1IDEzLjM1OTM3NSAxNS44OTg0MzggMTMuNDkyMTg4IDE2LjExNzE4OCBMIDEzLjQ5MjE4OCAxNi4xMDkzNzUgQyAxMy42NDQ1MzEgMTYuMjY1NjI1IDEzLjg1NTQ2OSAxNi4zNjMyODEgMTQuMDg5ODQ0IDE2LjM2MzI4MSBDIDE0LjEyODkwNiAxNi4zNjMyODEgMTQuMTYwMTU2IDE2LjM1OTM3NSAxNC4xOTUzMTIgMTYuMzU1NDY5IEwgMTQuMTkxNDA2IDE2LjM1NTQ2OSBDIDE0LjQ5MjE4OCAxNi4zNDM3NSAxNC43NzczNDQgMTYuMzA0Njg4IDE1LjA1MDc4MSAxNi4yNDIxODggTCAxNS4wMTk1MzEgMTYuMjUgWiBNIDIwLjAxOTUzMSAxNy4zNjcxODggTCAxOC4zMjQyMTkgMTcuMzY3MTg4IEwgMTUuMTk1MzEyIDguNzUzOTA2IEwgMTYuNzI2NTYyIDguNzUzOTA2IEwgMTguNjE3MTg4IDE0LjM1NTQ2OSBDIDE4LjY4NzUgMTQuNTc0MjE5IDE4Ljg3MTA5NCAxNS4xOTkyMTkgMTkuMTY0MDYyIDE2LjI0MjE4OCBMIDE5LjQ0MTQwNiAxNS4zMDg1OTQgTCAxOS43NSAxNC4zNjcxODggTCAyMS43MTA5MzggOC43NDYwOTQgTCAyMy4yMzA0NjkgOC43NDYwOTQgWiBNIDIwLjAxOTUzMSAxNy4zNjcxODggXCI7XG4gICAgc3ZnW1wiQ1JVTkNIWVJPTExcIl0gPSBcIk0gMi45MzM1OTQgMTMuNDY4NzUgQyAyLjcwNzAzMSAxMC42MDE1NjIgMy42NTYyNSA3Ljc2OTUzMSA1LjU2NjQwNiA1LjYyMTA5NCBDIDcuNDc2NTYyIDMuNDc2NTYyIDEwLjE3OTY4OCAyLjE5OTIxOSAxMy4wNTA3ODEgMi4wODk4NDQgQyAxNS45MjE4NzUgMS45ODQzNzUgMTguNzEwOTM4IDMuMDUwNzgxIDIwLjc3NzM0NCA1LjA0Njg3NSBDIDIyLjg0NzY1NiA3LjA0Mjk2OSAyNC4wMDc4MTIgOS43OTI5NjkgMjQgMTIuNjY3OTY5IEwgMjQgMTIgQyAyNCA1LjM3MTA5NCAxOC42Mjg5MDYgMCAxMiAwIEMgNS4zNzEwOTQgMCAwIDUuMzcxMDk0IDAgMTIgQyAwIDE4LjYyODkwNiA1LjM3MTA5NCAyNCAxMiAyNCBMIDEyLjgwMDc4MSAyNCBDIDcuMjYxNzE5IDIzLjYwOTM3NSAyLjk2NDg0NCAxOS4wMTU2MjUgMi45MzM1OTQgMTMuNDY4NzUgWiBNIDE5LjE5OTIxOSAxNCBDIDE0Ljg4NjcxOSAxNC4wMTU2MjUgMTMuODEyNSA4LjAxMTcxOSAxNy44NjcxODggNi41MzEyNSBDIDE2LjY3OTY4OCA1Ljg5ODQzOCAxNS4zNDc2NTYgNS41NzQyMTkgMTQgNS42MDE1NjIgQyAxMC42MDE1NjIgNS42MDE1NjIgNy41MzkwNjIgNy42NDg0MzggNi4yMzgyODEgMTAuNzg1MTU2IEMgNC45Mzc1IDEzLjkyNTc4MSA1LjY1NjI1IDE3LjUzOTA2MiA4LjA1ODU5NCAxOS45NDE0MDYgQyAxMC40NjA5MzggMjIuMzQzNzUgMTQuMDc0MjE5IDIzLjA2MjUgMTcuMjE0ODQ0IDIxLjc2MTcxOSBDIDIwLjM1MTU2MiAyMC40NjA5MzggMjIuMzk4NDM4IDE3LjM5ODQzOCAyMi4zOTg0MzggMTQgQyAyMi40MjE4NzUgMTMuNDY0ODQ0IDIyLjM3ODkwNiAxMi45MjU3ODEgMjIuMjY1NjI1IDEyLjM5ODQzOCBDIDIxLjYwOTM3NSAxMy40NDkyMTkgMjAuNDM3NSAxNC4wNjI1IDE5LjE5OTIxOSAxNCBaIE0gMTkuMTk5MjE5IDE0IFwiO1xuICAgIHN2Z1tcIkRJU05FWVwiXSA9IFwiTSAyMi4xNTIzNDQgOS4wODU5MzggQyAxOS4zMzU5MzggNS4xMTcxODggMTMuNjAxNTYyIDIuODkwNjI1IDEwLjQzNzUgMi4zNjMyODEgQyA2Ljk0MTQwNiAxLjc4MTI1IDQuODEyNSAyLjAwMzkwNiAzLjAzOTA2MiAyLjMyODEyNSBDIDIuMzgyODEyIDIuNDQ5MjE5IDAuMzkwNjI1IDIuODE2NDA2IDAuMDc4MTI1IDQuMzI0MjE5IEMgLTAuMTk5MjE5IDUuNjgzNTk0IDEuMTM2NzE5IDYuNjUyMzQ0IDEuNDA2MjUgNi44MzIwMzEgQyAxLjk0MTQwNiA3LjE4NzUgMi42NjAxNTYgNy4wNDI5NjkgMy4wMTk1MzEgNi41MTE3MTkgQyAzLjM3ODkwNiA1Ljk4MDQ2OSAzLjI0MjE4OCA1LjI1MzkwNiAyLjcxMDkzOCA0Ljg5MDYyNSBDIDIuNjg3NSA0Ljg3NSAyLjY2NDA2MiA0Ljg1NTQ2OSAyLjY0MDYyNSA0LjgzNTkzOCBDIDIuODI0MjE5IDQuNzczNDM4IDMuMDg5ODQ0IDQuNjk5MjE5IDMuNDYwOTM4IDQuNjI4OTA2IEMgNC45MjE4NzUgNC4zNTkzNzUgNi43NTM5MDYgNC4xMjEwOTQgMTAuMDU0Njg4IDQuNjcxODc1IEMgMTIuNzI2NTYyIDUuMTE3MTg4IDE3Ljg1OTM3NSA3LjA3ODEyNSAyMC4yNDYwOTQgMTAuNDM3NSBDIDIxLjI3MzQzOCAxMS44ODI4MTIgMjEuNjUyMzQ0IDEzLjQyNTc4MSAyMS4zNzg5MDYgMTUuMDE5NTMxIEMgMjEuMTEzMjgxIDE2LjU1ODU5NCAyMC40Mzc1IDE3LjYwMTU2MiAxOS4zMTI1IDE4LjIxNDg0NCBDIDE3LjI4NTE1NiAxOS4zMTY0MDYgMTQuMDc0MjE5IDE4Ljg0Mzc1IDExLjcwNzAzMSAxOC4xOTUzMTIgTCAxMS43MDcwMzEgMTMuMTk1MzEyIEMgMTIuNDc2NTYyIDEzLjE5NTMxMiAxMy4xOTkyMTkgMTMuMjY5NTMxIDE0LjEyODkwNiAxMy40NDE0MDYgQyAxNC43NDIxODggMTMuNTU4NTk0IDE1LjEwNTQ2OSAxMy44ODI4MTIgMTUuMjIyNjU2IDE0LjA3NDIxOSBDIDE1LjE5OTIxOSAxNC4wODU5MzggMTUuMTcxODc1IDE0LjA5NzY1NiAxNS4xNDA2MjUgMTQuMTA1NDY5IEMgMTQuNTI3MzQ0IDE0LjMxMjUgMTQuMTk1MzEyIDE0Ljk3MjY1NiAxNC40MDIzNDQgMTUuNTg1OTM4IEMgMTQuNjA1NDY5IDE2LjE5OTIxOSAxNS4yNjU2MjUgMTYuNTMxMjUgMTUuODgyODEyIDE2LjMyODEyNSBDIDE3LjIzNDM3NSAxNS44NzUgMTcuNjU2MjUgMTQuODM1OTM4IDE3LjU5NzY1NiAxNC4wMDc4MTIgQyAxNy41MDc4MTIgMTIuNjYwMTU2IDE2LjIyNjU2MiAxMS40NTMxMjUgMTQuNTU0Njg4IDExLjE0MDYyNSBDIDEzLjQ3NjU2MiAxMC45NDE0MDYgMTIuNjIxMDk0IDEwLjg1NTQ2OSAxMS43MDcwMzEgMTAuODU1NDY5IEwgMTEuNzA3MDMxIDguNzgxMjUgQyAxMS43MDcwMzEgOC4xMzY3MTkgMTEuMTgzNTk0IDcuNjEzMjgxIDEwLjUzOTA2MiA3LjYxMzI4MSBDIDkuODk0NTMxIDcuNjEzMjgxIDkuMzY3MTg4IDguMTM2NzE5IDkuMzY3MTg4IDguNzgxMjUgTCA5LjM2NzE4OCAxMC45NTcwMzEgQyA1LjA4MjAzMSAxMS4yODEyNSAzLjA2MjUgMTIuMTcxODc1IDIuNzIyNjU2IDEzLjg0NzY1NiBDIDIuMjE0ODQ0IDE2LjM2MzI4MSA2LjQ0NTMxMiAxOC42MzY3MTkgOC4zMjQyMTkgMTkuNTExNzE5IEMgOC4zODY3MTkgMTkuNTM5MDYyIDguNzY5NTMxIDE5LjY5OTIxOSA5LjM2NzE4OCAxOS45MTAxNTYgTCA5LjM2NzE4OCAyMS4wNjY0MDYgQyA5LjM2NzE4OCAyMS43MTQ4NDQgOS44OTQ1MzEgMjIuMjM4MjgxIDEwLjUzOTA2MiAyMi4yMzgyODEgQyAxMS4xODM1OTQgMjIuMjM4MjgxIDExLjcwNzAzMSAyMS43MTQ4NDQgMTEuNzA3MDMxIDIxLjA2NjQwNiBMIDExLjcwNzAzMSAyMC42MTMyODEgQyAxMy4wMjczNDQgMjAuOTQxNDA2IDE0LjU5Mzc1IDIxLjIxNDg0NCAxNi4xNjAxNTYgMjEuMjE0ODQ0IEMgMTcuNjU2MjUgMjEuMjE0ODQ0IDE5LjE1NjI1IDIwLjk2NDg0NCAyMC40Mjk2ODggMjAuMjczNDM4IEMgMjIuMTk5MjE5IDE5LjMwODU5NCAyMy4yOTI5NjkgMTcuNjc1NzgxIDIzLjY4MzU5NCAxNS40MTc5NjkgQyAyNC4wNjY0MDYgMTMuMTg3NSAyMy41NTQ2ODggMTEuMDU0Njg4IDIyLjE1MjM0NCA5LjA4NTkzOCBaIE0gOS4yNzczNDQgMTcuMzc1IEMgNy4yMjY1NjIgMTYuNDE3OTY5IDUuMjE0ODQ0IDE0Ljk2NDg0NCA1LjAzMTI1IDE0LjMyNDIxOSBDIDUuMTc5Njg4IDE0LjE2Nzk2OSA1Ljk2ODc1IDEzLjU4MjAzMSA5LjM2NzE4OCAxMy4zMDQ2ODggTCA5LjM2NzE4OCAxNy40MTAxNTYgQyA5LjMzOTg0NCAxNy4zOTg0MzggOS4zMDQ2ODggMTcuMzg2NzE5IDkuMjc3MzQ0IDE3LjM3NSBaIE0gOS4yNzczNDQgMTcuMzc1IFwiO1xuICAgIHN2Z1tcIkZPWFNQT1JUU1wiXSA9IFwiTSAwLjIzMDUgMTUuMTI1IEwgMC4yMzA1IDUgTCA2LjIxNDggNSBMIDYuMzk4NCA3Ljc2OTUgTCAzLjA0NjkgNy43Njk1IEwgMy4wNDY5IDkuMDg5OCBMIDUuNzc3MyA5LjA4OTggTCA1Ljc3NzMgMTEuODUxNiBMIDMuMDI3MyAxMS44NTE2IEwgMy4wMjczIDE1LjEyNSBMIDAuMjMwNSAxNS4xMjUgTSAyMy4yODEzIDE1LjA5MzggTCAyMC4yODUyIDkuODM5OCBMIDIzLjAwNzggNSBMIDIwLjAxMTcgNSBMIDE4Ljc2OTUgNy4xNzk3IEwgMTcuNTQ2OSA1IEwgMTQuNDQ1MyA1IEwgMTcuMjE4OCA5Ljg3NSBMIDE0LjI4MTMgMTUuMTAxNiBMIDE3LjI5MyAxNS4wOTc3IEwgMTguNzMwNSAxMi41MzkxIEwgMjAuMTgzNiAxNS4wOTM4IEwgMjMuMjgxMyAxNS4wOTM4IE0gMTEuOTEwMiAxMi4wOTc3IEwgMTEuOTEwMiA4LjA1MDggQyAxMS45MTAyIDcuNTg5OCAxMS41MTU2IDcuMTc1OCAxMS4wNzAzIDcuMTc1OCBDIDEwLjYyODkgNy4xNzU4IDEwLjI2OTUgNy41ODk4IDEwLjI2OTUgOC4wNTA4IEwgMTAuMjY5NSAxMi4wODIgQyAxMC4yNjk1IDEyLjU0NjkgMTAuNjI4OSAxMi45MTggMTEuMDcwMyAxMi45MTggQyAxMS41MTU2IDEyLjkxOCAxMS45MTAyIDEyLjU1ODYgMTEuOTEwMiAxMi4wOTc3IFogTSA2LjMyNDIgMTAuMDc0MiBDIDYuMzI0MiA3LjM1OTQgOC40NDE0IDUuMTUyMyAxMS4wNTg2IDUuMTUyMyBDIDEzLjY3NTggNS4xNTIzIDE1Ljc5NjkgNy4zNTk0IDE1Ljc5NjkgMTAuMDc0MiBDIDE1Ljc5NjkgMTIuNzkzIDEzLjY3NTggMTQuOTk2MSAxMS4wNTg2IDE0Ljk5NjEgQyA4LjQ0MTQgMTQuOTk2MSA2LjMyNDIgMTIuNzkzIDYuMzI0MiAxMC4wNzQyIFogTSAwIDE5LjUxOTUgTCAwIDE4Ljk5NjEgTCAwLjI2MTcgMTguNzM0NCBMIDIuMzg2NyAxOC43MzQ0IEwgMi40NjQ4IDE4LjY1NjMgTCAyLjQ2NDggMTguMTAxNiBMIDIuNDEwMiAxOC4wMzkxIEwgMC40Mzc1IDE4LjAzOTEgTCAwIDE3LjU5MzggTCAwIDE2LjMyMDMgTCAwLjUwMzkgMTUuODA4NiBMIDMuMzYzMyAxNS44MDg2IEwgMy4zNjMzIDE2LjM3MTEgTCAzLjE1NjMgMTYuNTg1OSBMIDEuMDgyIDE2LjU4NTkgTCAxLjAwMzkgMTYuNjY4IEwgMS4wMDM5IDE3LjIwNyBMIDEuMDYyNSAxNy4yNjU2IEwgMy4wMjczIDE3LjI2NTYgTCAzLjQ2NDggMTcuNzE0OCBMIDMuNDY0OCAxOS4wMDM5IEwgMi45NjA5IDE5LjUxOTUgTCAwIDE5LjUxOTUgTSA2LjQ2MDkgMTcuNjA1NSBMIDYuNjA5NCAxNy40NTMxIEwgNi42MDk0IDE2Ljc0MjIgTCA2LjQ2MDkgMTYuNTkzOCBMIDUuMDkzOCAxNi41OTM4IEwgNS4wOTM4IDE3LjYwNTUgWiBNIDQuMDg5OCAxNS44MDg2IEwgNy4wNTQ3IDE1LjgwODYgTCA3LjYxNzIgMTYuMzc4OSBMIDcuNjE3MiAxNy43NTM5IEwgNy4wNTQ3IDE4LjMyODEgTCA1LjA5MzggMTguMzI4MSBMIDUuMDkzOCAxOS41MTk1IEwgNC4wODk4IDE5LjUxOTUgWiBNIDEwLjUxNTYgMTguNjQ4NCBMIDEwLjcyMjcgMTguNDQxNCBMIDEwLjcyMjcgMTYuODIwMyBMIDEwLjUxNTYgMTYuNjEzMyBMIDkuMzQ3NyAxNi42MTMzIEwgOS4xNDA2IDE2LjgyMDMgTCA5LjE0MDYgMTguNDQxNCBMIDkuMzQ3NyAxOC42NDg0IFogTSA4LjE0NDUgMTguOTQ5MiBMIDguMTQ0NSAxNi4zNzg5IEwgOC42OTkyIDE1LjgwODYgTCAxMS4xNjAyIDE1LjgwODYgTCAxMS43MjI3IDE2LjM3ODkgTCAxMS43MjI3IDE4Ljk0OTIgTCAxMS4xNjAyIDE5LjUxOTUgTCA4LjY5OTIgMTkuNTE5NSBaIE0gMTQuNzM0NCAxNy4zOTg0IEwgMTQuODc1IDE3LjI1MzkgTCAxNC44NzUgMTYuNzEwOSBMIDE0LjczNDQgMTYuNTY2NCBMIDEzLjM4MjggMTYuNTY2NCBMIDEzLjM4MjggMTcuMzk4NCBaIE0gMTIuMzc4OSAxNS44MDg2IEwgMTUuMzc1IDE1LjgwODYgTCAxNS44Nzg5IDE2LjMyMDMgTCAxNS44Nzg5IDE3LjUwMzkgTCAxNS4zOTg0IDE3Ljk5NjEgTCAxNi4wMzEzIDE5LjUxOTUgTCAxNC45MTQxIDE5LjUxOTUgTCAxNC40NDUzIDE4LjE3MTkgTCAxMy4zODI4IDE4LjE3MTkgTCAxMy4zODI4IDE5LjUxOTUgTCAxMi4zNzg5IDE5LjUxOTUgWiBNIDE3LjM3ODkgMTYuNjY4IEwgMTYuMjE4OCAxNi42NjggTCAxNi4yMTg4IDE1LjgwODYgTCAxOS41MzkxIDE1LjgwODYgTCAxOS41MzkxIDE2LjY2OCBMIDE4LjM4MjggMTYuNjY4IEwgMTguMzgyOCAxOS41MTk1IEwgMTcuMzc4OSAxOS41MTk1IEwgMTcuMzc4OSAxNi42NjggTSAyMC4wODIgMTkuNjIxMSBMIDIwLjA4MiAxOS4wOTc3IEwgMjAuMzQzOCAxOC44MzU5IEwgMjIuNDY4OCAxOC44MzU5IEwgMjIuNTQ2OSAxOC43NTc4IEwgMjIuNTQ2OSAxOC4yMDMxIEwgMjIuNDkyMiAxOC4xNDA2IEwgMjAuNTE5NSAxOC4xNDA2IEwgMjAuMDgyIDE3LjY5NTMgTCAyMC4wODIgMTYuNDIxOSBMIDIwLjU4NTkgMTUuOTEwMiBMIDIzLjQ0NTMgMTUuOTEwMiBMIDIzLjQ0NTMgMTYuNDcyNyBMIDIzLjIzODMgMTYuNjg3NSBMIDIxLjE2OCAxNi42ODc1IEwgMjEuMDg1OSAxNi43Njk1IEwgMjEuMDg1OSAxNy4zMDg2IEwgMjEuMTQ0NSAxNy4zNjcyIEwgMjMuMTEzMyAxNy4zNjcyIEwgMjMuNTQ2OSAxNy44MTY0IEwgMjMuNTQ2OSAxOS4xMDU1IEwgMjMuMDQzIDE5LjYyMTEgTCAyMC4wODIgMTkuNjIxMVwiO1xuICAgIHN2Z1tcIk1BWFwiXSA9IFwiTSAzLjc0NDMgOCBDIDMuMDk0OSA4IDIuNDM4MSA4LjI5MzIgMS41OTU3IDguOTU3NCBMIDEuNTk1NyA4LjE2NyBMIDAgOC4xNjcgTCAwIDE0LjQ3NTYgTCAxLjY5NTkgMTQuNDc1NiBMIDEuNjk1OSAxMC41NTMxIEMgMi40MzgxIDkuOTU1NyAyLjc3NTggOS43NjY0IDMuMDU0MSA5Ljc2NjQgQyAzLjM4NDQgOS43NjY0IDMuNTk5NiA5Ljk3NDIgMy41OTk2IDEwLjUwMTIgTCAzLjU5OTYgMTQuNDc1NiBMIDUuMjk1NSAxNC40NzU2IEwgNS4yOTU1IDEwLjU0MiBDIDYuMDM3NyA5Ljk1NTcgNi4zNjggOS43NjY0IDYuNjUzNyA5Ljc2NjQgQyA2Ljk4NCA5Ljc2NjQgNy4xOTkyIDkuOTc0MiA3LjE5OTIgMTAuNTAxMiBMIDcuMTk5MiAxNC40NzU2IEwgOC44OTUxIDE0LjQ3NTYgTCA4Ljg5NTEgOS44OTI2IEMgOC44OTUxIDguNDcxMyA4LjEwNDcgOCA3LjM0MzkgOCBDIDYuNjk0NSA4IDYuMDM3NyA4LjI3NDYgNS4xNzMgOC45NDYzIEMgNC44OTQ3IDguMjQxMiA0LjI4OTggOCAzLjc0NDMgOCBaIE0gMTIuMzQyNiA4IEMgMTAuNjU3OCA4IDkuMjU4OCA5LjQ4MDcgOS4yNTg4IDExLjMyMTMgQyA5LjI1ODggMTMuMTYxOSAxMC42NTc4IDE0LjY0MjYgMTIuMzQyNiAxNC42NDI2IEMgMTMuMTc3NSAxNC42NDI2IDEzLjg5NzUgMTQuMzI3MSAxNC40NTA0IDEzLjY0NDMgTCAxNC40NTA0IDE0LjQ3NTYgTCAxNi4wNjg0IDE0LjQ3NTYgTCAxNi4wNjg0IDguMTY3IEwgMTQuNDUwNCA4LjE2NyBMIDE0LjQ1MDQgOC45OTgyIEMgMTMuODk3NSA4LjMxNTQgMTMuMTc3NSA4IDEyLjM0MjYgOCBaIE0gMTYuMzY1MiA4LjE2NyBDIDE3LjA2MjkgOS4yODQgMTcuODU3IDEwLjI4MjIgMTguNzgxMSAxMS4yODA1IEMgMTcuODU3IDEyLjMxOTUgMTcuMDYyOSAxMy40MDMxIDE2LjM2NTIgMTQuNDc1NiBMIDE4LjQxIDE0LjQ3NTYgQyAxOC44OTYxIDEzLjY3NCAxOS40NDE2IDEyLjk1MDQgMjAuMDY4NyAxMi4yNjc2IEMgMjAuNjg0OCAxMi45NTA0IDIxLjIwMDYgMTMuNjc0IDIxLjY4MyAxNC40NzU2IEwgMjMuNzUgMTQuNDc1NiBDIDIzLjA0MTIgMTMuMzY5NyAyMi4yNjkzIDEyLjMxOTUgMjEuMzQxNiAxMS4yODA1IEMgMjIuMjU4MiAxMC4yODIyIDIzLjA0MTIgOS4yNTA2IDIzLjc1IDguMTY3IEwgMjEuNzIzOCA4LjE2NyBDIDIxLjIxOTEgOC45Njg2IDIwLjY3MzYgOS42NDAyIDIwLjA2ODcgMTAuMzAwOCBDIDE5LjQ0OSA5LjY0MDIgMTguOTA3MiA4Ljk2ODYgMTguNDEgOC4xNjcgWiBNIDEyLjU5ODYgOS40NjIxIEMgMTMuNjA4IDkuNDYyMSAxNC40MjA3IDEwLjI4OTYgMTQuNDIwNyAxMS4zMjEzIEMgMTQuNDIwNyAxMi4zNTI5IDEzLjYwOCAxMy4xODA1IDEyLjU5ODYgMTMuMTgwNSBDIDExLjU5MyAxMy4xODA1IDEwLjc4MDMgMTIuMzUyOSAxMC43ODAzIDExLjMyMTMgQyAxMC43ODAzIDEwLjI4OTYgMTEuNTkzIDkuNDYyMSAxMi41OTg2IDkuNDYyMSBaIE0gMTIuNTk4NiA5Ljg4MTQgQyAxMS44MjY4IDkuODgxNCAxMS4xOTk2IDEwLjUyMzQgMTEuMTk5NiAxMS4zMjEzIEMgMTEuMTk5NiAxMi4xMTkxIDExLjgyNjggMTIuNzYxMSAxMi41OTg2IDEyLjc2MTEgQyAxMy4zNzA1IDEyLjc2MTEgMTMuOTk3NyAxMi4xMTkxIDEzLjk5NzcgMTEuMzIxMyBDIDEzLjk5NzcgMTAuNTIzNCAxMy4zNzA1IDkuODgxNCAxMi41OTg2IDkuODgxNCBaIE0gMTIuNTk4NiA5Ljg4MTRcIjtcbiAgICBzdmdbXCJNTEJUVlwiXSA9IFwiTSAyMy4yNTM5IDcuMDAzOSBDIDIzLjI2NTYgNi4yOTMgMjIuNjk1MyA1LjcxMDkgMjEuOTg4MyA1LjcwMzEgQyAyMS45ODA1IDUuNzAzMSAyMS45NzI3IDUuNzAzMSAyMS45NjQ4IDUuNzAzMSBMIDE2LjM4MjggNS43MDMxIEwgMTkuNTg1OSAxMS4wNjI1IEwgMTkuODc4OSAxMS4xMDE2IEwgMjAuMDY2NCAxMS4zNDM4IEwgMjAuMDY2NCAxMS41NzQyIEwgMjAuMjY5NSAxMS42MTcyIEwgMjAuNDU3IDExLjg3MTEgTCAyMC40NTcgMTIuMDg5OCBMIDIwLjY2NDEgMTIuMTI4OSBMIDIwLjg3NSAxMi4zNTk0IEwgMjAuODc1IDEyLjg2NzIgQyAyMS4xMjg5IDEzLjA5NzcgMjEuNDEwMiAxMy4yODUyIDIxLjcxODggMTMuNDI5NyBDIDIyIDEzLjUzOTEgMjIuMDMxMyAxMy45OTIyIDIyLjIwMzEgMTQuMjM0NCBDIDIyLjQxNDEgMTQuNTg1OSAyMi43MDcgMTQuNzI2NiAyMi42NDQ1IDE0LjkyNTggQyAyMi41MDM5IDE1LjQ0OTIgMjEuOTY0OCAxNi4zMzk4IDIxLjQ2NDggMTYuMzc4OSBMIDE5LjQ4MDUgMTYuMzc4OSBMIDE5LjQ4MDUgMTcuMjMwNSBMIDIxLjk2NDggMTcuMjMwNSBDIDIyLjY4MzYgMTcuMjI2NiAyMy4yNjE3IDE2LjY0NDUgMjMuMjU3OCAxNS45MjU4IEwgMjMuMjU3OCA3LjAwMzkgTSA5LjYwMTYgMTYuMzk0NSBMIDguNjQ0NSAxNi4zOTQ1IEMgOC42NDQ1IDEzLjk5MjIgOS40NTMxIDEyLjY2NDEgMTAuNDI1OCAxMi4zOTg0IEMgMTAuNTU4NiAxMi4zNzUgMTAuNDkyMiAxMS43MTg4IDEwLjMyNDIgMTEuNTE5NSBMIDkuNzY1NiAxMS41MTk1IEMgOS42NzU4IDExLjUxOTUgOS43MjY2IDExLjM0NzcgOS43MjY2IDExLjM0NzcgTCAxMC4xNzk3IDEwLjM3ODkgTCAxMC4xMjExIDEwLjEwOTQgTCA4LjQ0MTQgMTAuMTA5NCBMIDkuODIwMyA5LjE0NDUgQyA5Ljg4MjggNi41OTM4IDEyLjQ5NjEgNi4zOTQ1IDE0LjA2NjQgNy40NTcgQyAxNS4wMDM5IDguMDc4MSAxNS4wNzQyIDkuMzA4NiAxNS4wMDM5IDEwLjE1NjMgQyAxNC45OTIyIDEwLjIxMDkgMTQuNzU3OCAxMC4xNzU4IDE0Ljc1NzggMTAuMTc1OCBDIDE0Ljc1NzggMTAuMTc1OCAxNC42MDE2IDExLjExMzMgMTUuMDE1NiAxMS4xMTMzIEwgMTYuODUxNiAxMS4xMTMzIEMgMTcuNTk3NyAxMS4wODIgMTguMzIwMyAxMS41ODk4IDE4LjMyMDMgMTEuNTg5OCBMIDE4LjQ5NjEgMTAuOTQ1MyBMIDE0LjQ3NjYgNS43MDMxIEwgMS45OTYxIDUuNzAzMSBDIDEuNjUyMyA1LjY5OTIgMS4zMjAzIDUuODM1OSAxLjA3NDIgNi4wNzgxIEMgMC44MzIgNi4zMjQyIDAuNjk1MyA2LjY1NjMgMC42OTkyIDcuMDAzOSBMIDAuNjk5MiAxNS45Mjk3IEMgMC42OTUzIDE2LjI3MzQgMC44MjgxIDE2LjYwOTQgMS4wNzQyIDE2Ljg1MTYgQyAxLjMyMDMgMTcuMDk3NyAxLjY1MjMgMTcuMjM0NCAxLjk5NjEgMTcuMjM0NCBMIDEwLjA5NzcgMTcuMjM0NCBDIDkuOTAyMyAxNi44OTQ1IDkuNjc1OCAxNi41MDc4IDkuNjA1NSAxNi4zOTQ1IE0gMi41IDE0LjUgQyAyLjUgMTQuMDA3OCAyLjg5NDUgMTMuNjA5NCAzLjM4NjcgMTMuNjA5NCBDIDMuODc1IDEzLjYwOTQgNC4yNzM0IDE0LjAwNzggNC4yNzM0IDE0LjUgQyA0LjI3MzQgMTQuOTg4MyAzLjg3NSAxNS4zODY3IDMuMzg2NyAxNS4zODY3IEwgMy4zNzg5IDE1LjM4NjcgQyAyLjg5NDUgMTUuMzg2NyAyLjUgMTQuOTk2MSAyLjUgMTQuNTExNyBDIDIuNSAxNC41MDc4IDIuNSAxNC41MDM5IDIuNSAxNC41XCI7XG4gICAgc3ZnW1wiTkJBXCJdID0gXCJNIDcuODU1NSAyMS4xNjAyIEMgNy41NTQ3IDIwLjg5MDYgNy43NTM5IDIwLjc3MzQgNy43MzgzIDIwLjY1NjMgQyA3LjUzOTEgMTkuODIwMyA2Ljg2NzIgMTkuMzIwMyA3LjIxODggMTkuMDU0NyBDIDcuMTQ4NCAxOC44NDM4IDcuMDY2NCAxOC42MzY3IDYuOTY4OCAxOC40MzM2IEMgNS45MzM2IDE3Ljg0NzcgNS4wNjI1IDE2Ljg3ODkgNC45MTQxIDE2Ljc0NjEgQyA0Ljc2MTcgMTYuNjEzMyA0LjQyOTcgMTYuMzQzOCA0LjM2MzMgMTYuMTk1MyBDIDQuMjk2OSAxNi4wNDMgMi45MDYzIDE0LjIzODMgMi42MjUgMTMuNjIxMSBMIDIuMTQwNiAxMy41NTQ3IEMgMS45MjE5IDEyLjYzNjcgMS4xNzE5IDExLjg2NzIgMS4xNTIzIDEwLjk2NDggQyAxLjE3NTggMTAuNTQzIDEuMjUgMTAuMTI4OSAxLjM3MTEgOS43MjY2IEMgMS40Njg4IDkuNTc4MSAxLjU4NTkgOS40NDE0IDEuNzIyNyA5LjMyNDIgTCAxLjcyMjcgOS4wNzQyIEMgMC42NTIzIDkuMTA5NCAwLjk1MzEgOC45OTIyIDAuNzY5NSA4LjU3NDIgQyAwLjU4NTkgOC4xNTYzIDAuNzM0NCA4LjIyMjcgMC43ODUyIDguMDIzNCBDIDAuOTM3NSA3LjQzNzUgMS40MDIzIDYuNTE5NSAxLjYwNTUgNi4xMDE2IEMgMS44MDQ3IDUuNjgzNiAxLjg3MTEgNS4zODI4IDEuODcxMSA1LjM4MjggQyAyLjY3NTggMy43NjE3IDIuOTc2NiAzLjg3ODkgMy45MjU4IDMuNzc3MyBMIDMuOTc2NiAzLjcxMDkgQyA0LjkyOTcgMy42NzU4IDQuNzgxMyAzLjU5MzggNC45MTQxIDIuNjc1OCBDIDQuNzgxMyAyLjc0MjIgNC43MzA1IDIuMzkwNiA0LjczMDUgMi4zOTA2IEMgNC42NDQ1IDEuODcxMSA0Ljg3ODkgMS45NzI3IDQuOTgwNSAxLjk1NyBDIDQuOTk2MSAxLjEwMTYgNS4wOTc3IDAuODIwMyA1LjcxNDggMC41ODU5IEwgMi40OTIyIDAuNTg1OSBDIDEuNDM3NSAwLjU4NTkgMC41ODU5IDEuNDM3NSAwLjU4NTkgMi40ODgzIEwgMC41ODU5IDIxLjUwNzggQyAwLjU4NTkgMjIuNTYyNSAxLjQzNzUgMjMuNDE0MSAyLjQ5MjIgMjMuNDE0MSBMIDguMTA1NSAyMy40MTQxIEMgNy40NTMxIDIzLjA2MjUgNy44Mzk4IDIyLjQxNDEgNy44NTU1IDIxLjE2MDIgTSAyMS41MDc4IDAuNTg1OSBMIDYuMjg1MiAwLjU4NTkgQyA2LjUxNTYgMC42NDg0IDYuNzE0OCAwLjc5NjkgNi44MzU5IDEuMDAzOSBDIDcuMDcwMyAxLjAxOTUgNy4zNTU1IDEuNTU0NyA2LjkxOCAyLjMyNDIgQyA3LjEyMTEgMi40NTcgNi45Njg4IDIuNjQwNiA2LjgyMDMgMi44NTk0IEMgNi42NjggMy4wNzQyIDYuNzM0NCAzLjA1ODYgNi42MTcyIDMuMDQzIEMgNi40NTMxIDMuMzk0NSA2LjI1IDMuNzI2NiA2LjEwMTYgMy43NDIyIEMgNi4wMzUyIDMuODIwMyA2LjAyNzMgMy45Mjk3IDYuMDgyIDQuMDExNyBDIDYuMzA4NiA0LjEwMTYgNi41MTU2IDQuMjI2NiA2LjcwMzEgNC4zNzg5IEwgNi43MDMxIDQuNDYwOSBDIDYuODY3MiA0LjU2MjUgNi45NTMxIDQuNjQ0NSA3LjEzNjcgNC43NDYxIEMgNy41ODU5IDUuMDMxMyA4LjE1NjMgNS41NDY5IDguMDg5OCA3LjMyMDMgQyA4LjIyMjcgNy43MDMxIDguMjczNCA4LjQ1NyA4LjM5MDYgOC43MDcgQyA4LjUwNzggOC45NTcgOC43OTMgOS40OTIyIDguODU5NCA5LjkyNTggQyA4Ljg1OTQgOS45MjU4IDguOTI1OCAxMC41NzgxIDkuMDA3OCAxMC42NjQxIEwgOS4wNTg2IDEwLjY2NDEgQyA5LjQ0MTQgMTAuNzQ2MSA5LjM3NSAxMC43OTY5IDkuNDEwMiAxMC44NjMzIEwgOS41MDc4IDEwLjk0NTMgQyA5LjYwOTQgMTAuOTk2MSA5Ljc3NzMgMTEuMDQ2OSA5Ljc3NzMgMTEuMjMwNSBMIDkuODU5NCAxMS4zNjMzIEMgOS45MTAyIDExLjQ0NTMgOS45NTcgMTEuNTI3MyA5Ljk5NjEgMTEuNjE3MiBDIDEwLjEyODkgMTEuOTkyMiAxMC4xMjg5IDEyLjQwNjMgOS45OTYxIDEyLjc4NTIgTCA5Ljk5NjEgMTIuODM1OSBDIDkuODQ3NyAxMy4yMDMxIDkuNTc0MiAxMy41MDM5IDkuMjI2NiAxMy42ODc1IEwgOS4xOTE0IDEzLjY4NzUgTCA5LjE0MDYgMTMuNzIyNyBDIDguOTE4IDEzLjgyODEgOC42NzE5IDEzLjg4NjcgOC40MjE5IDEzLjg4NjcgQyA3LjQ4ODMgMTMuNzY1NiA2LjgzMiAxMi45MDYzIDYuOTU3IDExLjk3MjcgQyA3LjAzOTEgMTEuMzU5NCA3LjQ0NTMgMTAuODM5OCA4LjAyMzQgMTAuNjEzMyBDIDcuODIwMyAxMC4xMjg5IDcuNDIxOSA5LjM0MzggNy4zMDQ3IDkuMDkzOCBDIDcuMTg3NSA4LjgzOTggNi45MDIzIDcuMjE4OCA2Ljg1MTYgNi45MDIzIEMgNi44MDA4IDYuNTg1OSA2LjExNzIgNy4zMjAzIDYuMTE3MiA3LjM1NTUgQyA2LjExNzIgNy4zODY3IDUuNTgyIDguNjkxNCA1LjU2NjQgOC43NTc4IEMgNS41NTQ3IDguODI4MSA1LjU0NjkgOC45MDIzIDUuNTQ2OSA4Ljk3NjYgQyA1LjU0NjkgOC45NzY2IDUuODAwOCA5LjAwNzggNS45MzM2IDkuNDI1OCBDIDYuMDY2NCA5Ljg0MzggNi41IDExLjM5ODQgNi41IDExLjM5ODQgTCA2LjM4MjggMTEuNTE1NiBDIDYuOTE4IDEzLjMwNDcgNi43MzQ0IDE0LjA3NDIgNi45Njg4IDE0LjYwNTUgQyA3LjIwMzEgMTUuMTQwNiA3LjM1NTUgMTUuMjQyMiA3LjYwNTUgMTUuODc4OSBDIDcuODU1NSAxNi41MTE3IDcuOTg4MyAxOC4xMTcyIDguMDc0MiAxOC4xODM2IEMgOC4zNTU1IDE4LjU1MDggOC41MjM0IDE4LjgzNTkgOC41MjM0IDE5LjAzNTIgQyA4LjUyMzQgMTkuMjM4MyA4LjI3MzQgMTkuODU1NSA4LjM3NSAyMC4yMjI3IEMgOC40NzI3IDIwLjU4OTggOC40NTcgMjAuOTA2MyA4LjU1ODYgMjAuOTkyMiBDIDguNjU2MyAyMS4wNzQyIDguNjQwNiAyMS4xNzU4IDguNjA1NSAyMS4yNDIyIEMgOC41ODk4IDIxLjI3MzQgOC41NzgxIDIxLjMwODYgOC41NzQyIDIxLjM0MzggQyA4LjcyMjcgMjEuOTEwMiA5LjI0MjIgMjIuODYzMyA4LjQyMTkgMjMuMzYzMyBMIDguMzc1IDIzLjM5ODQgTCAyMS41NDMgMjMuMzk4NCBDIDIyLjU4MiAyMy4zOTA2IDIzLjQyMTkgMjIuNTUwOCAyMy40MzM2IDIxLjUxMTcgTCAyMy40MzM2IDIuNDkyMiBDIDIzLjQyMTkgMS40MzM2IDIyLjU2NjQgMC41ODU5IDIxLjUwNzggMC41ODU5IFogTSAyMS41MDc4IDAuNTg1OSBNIDE1Ljc5MyA1LjExMzMgTCAxOS4yMzgzIDUuMTEzMyBMIDE4LjUzNTIgMTYuNjI4OSBMIDE3Ljc4MTMgNS4xMTMzIEwgMjEuMTQwNiA1LjExMzMgTCAxOS42NTYzIDE4LjkwMjMgTCAxNy4yNDYxIDE4LjkwMjMgWiBNIDE1LjM0MzggNi44MzU5IEwgMTMuODg2NyA2LjgzNTkgTCAxMy44ODY3IDE4Ljg4NjcgTCAxMi4wMzUyIDE4Ljg4NjcgTCAxMi4wMzUyIDYuODM1OSBMIDEwLjYxMzMgNi44MzU5IEwgMTAuNjEzMyA1LjA5NzcgTCAxNS4zNDM4IDUuMDk3NyBaIE0gMy41NDMgMjIuMjI2NiBMIDMuNTQzIDE4Ljc4NTIgTCA0LjIxMDkgMTguNzg1MiBDIDQuNTk3NyAxOC43ODUyIDQuODI4MSAxOC45ODQ0IDQuODI4MSAxOS40NzI3IEwgNC44MjgxIDE5Ljk4ODMgQyA0LjgyODEgMjAuMzA0NyA0LjczMDUgMjAuNDU3IDQuNTk3NyAyMC41MzkxIEMgNC43NTM5IDIwLjY1NjMgNC44NDM4IDIwLjg0MzggNC44MjgxIDIxLjA0MyBMIDQuODI4MSAyMS41NDMgQyA0LjgyODEgMjIuMDExNyA0LjU3ODEgMjIuMjI2NiA0LjIxMDkgMjIuMjI2NiBaIE0gNC4wMTE3IDIwLjcyMjcgTCA0LjAxMTcgMjEuNzkzIEwgNC4xOTUzIDIxLjc5MyBDIDQuMzQzOCAyMS43OTMgNC4zOTQ1IDIxLjcxMDkgNC4zOTQ1IDIxLjU0MyBMIDQuMzk0NSAyMC45NTcgQyA0LjM5NDUgMjAuNzkzIDQuMzQzOCAyMC43MjI3IDQuMTk1MyAyMC43MjI3IFogTSA0LjAxMTcgMTkuMjE4OCBMIDQuMDExNyAyMC4zNTU1IEwgNC4xNzk3IDIwLjM1NTUgQyA0LjM0MzggMjAuMzU1NSA0LjM3ODkgMjAuMzA0NyA0LjM3ODkgMjAuMTA1NSBMIDQuMzc4OSAxOS40Mzc1IEMgNC4zNzg5IDE5LjI2OTUgNC4zMjgxIDE5LjIwMzEgNC4xNzk3IDE5LjIwMzEgTCA0LjAxMTcgMTkuMjAzMSBaIE0gNS45MzM2IDIxLjUyNzMgTCA1LjUxNTYgMjEuNTI3MyBMIDUuNDY0OCAyMi4yMjY2IEwgNC45OTYxIDIyLjIyNjYgTCA1LjQxNDEgMTguNzg1MiBMIDYuMDY2NCAxOC43ODUyIEwgNi40Njg4IDIyLjIyNjYgTCA1Ljk4NDQgMjIuMjI2NiBaIE0gNS43MTQ4IDE5LjE2OCBMIDUuNjk5MiAxOS4xNjggQyA1LjY2NDEgMTkuNTg1OSA1LjYxNzIgMjAuMzA0NyA1LjU5NzcgMjAuNTM5MSBMIDUuNTQ2OSAyMS4xNDA2IEwgNS44OTg0IDIxLjE0MDYgTCA1Ljg0NzcgMjAuNTM5MSBDIDUuODMyIDIwLjMwNDcgNS43NjU2IDE5LjU4NTkgNS43MTQ4IDE5LjE2OCBNIDIuMTg3NSAyMi4yMjY2IEwgMS43ODkxIDIyLjIyNjYgTCAxLjc4OTEgMTguNzg1MiBMIDIuNDIxOSAxOC43ODUyIEwgMi45NDE0IDIxLjYwOTQgQyAyLjg5MDYgMjAuOTQxNCAyLjgzOTggMjAuMTIxMSAyLjgzOTggMTkuNDIxOSBMIDIuODM5OCAxOC43ODUyIEwgMy4yNDIyIDE4Ljc4NTIgTCAzLjI0MjIgMjIuMjI2NiBMIDIuNjU2MyAyMi4yMjY2IEwgMi4xNDA2IDE5LjQ3MjcgQyAyLjE3MTkgMjAuMTA1NSAyLjE4NzUgMjAuNjI1IDIuMTg3NSAyMS4xNDA2IFogTSAyLjE4NzUgMjIuMjI2NlwiO1xuICAgIHN2Z1tcIlBSSU1FVklERU9cIl0gPSBcIk0gMS4xNjAxNTYgMi40NTMxMjUgWiBNIDEuMTYwMTU2IDIuNDUzMTI1IFogTSAxMC4yNDYwOTQgMC40MTQwNjIgQyA5Ljc5Mjk2OSAwLjQxNDA2MiA5LjUyMzQzOCAwLjYzNjcxOSA5LjQ4ODI4MSAxLjA0Mjk2OSBDIDkuNDY4NzUgMS40NTMxMjUgOS43MDMxMjUgMS42OTE0MDYgMTAuMDI3MzQ0IDEuNzUgQyAxMC4xNTYyNSAxLjc3NzM0NCAxMC4yODUxNTYgMS43NzczNDQgMTAuNDE0MDYyIDEuNzUgQyAxMC43MTA5MzggMS43MTA5MzggMTAuOTMzNTk0IDEuNDY4NzUgMTAuOTUzMTI1IDEuMTcxODc1IEMgMTAuOTgwNDY5IDAuODI0MjE5IDEwLjgyNDIxOSAwLjU1NDY4OCAxMC41MTU2MjUgMC40NTMxMjUgQyAxMC40MjU3ODEgMC40MjU3ODEgMTAuMzM5ODQ0IDAuNDA2MjUgMTAuMjQ2MDk0IDAuNDE0MDYyIFogTSAzLjQ5NjA5NCAyLjMyNDIxOSBDIDMuMDQ2ODc1IDIuMzE2NDA2IDIuNjM2NzE5IDIuNDcyNjU2IDIuMjUzOTA2IDIuNzU3ODEyIEMgMi4yMTg3NSAyLjc4OTA2MiAyLjE3OTY4OCAyLjgxNjQwNiAyLjEyODkwNiAyLjg0Mzc1IEMgMi4xMTcxODggMi44MzU5MzggMi4xMDkzNzUgMi44MzIwMzEgMi4xMDkzNzUgMi44MjQyMTkgQyAyLjA4OTg0NCAyLjc2OTUzMSAyLjA3ODEyNSAyLjcwNzAzMSAyLjA2MjUgMi42NTYyNSBDIDIuMDE1NjI1IDIuNTA3ODEyIDEuOTYwOTM4IDIuNDYwOTM4IDEuODA4NTk0IDIuNDYwOTM4IEMgMS42MzY3MTkgMi40NjA5MzggMS40NTcwMzEgMi40NjQ4NDQgMS4yODUxNTYgMi40NjA5MzggQyAxLjE2MDE1NiAyLjQ1MzEyNSAxLjAzOTA2MiAyLjQ3MjY1NiAwLjk0MTQwNiAyLjU3NDIxOSBDIDAuOTQxNDA2IDQuNTY2NDA2IDAuOTQ5MjE5IDYuNTcwMzEyIDAuOTQ5MjE5IDguNTU0Njg4IEMgMS4wMjM0MzggOC42NzU3ODEgMS4xMzY3MTkgOC42OTUzMTIgMS4yNzM0MzggOC42OTUzMTIgQyAxLjQ3NjU2MiA4LjY5MTQwNiAxLjY4MzU5NCA4LjY5NTMxMiAxLjg4NjcxOSA4LjY5NTMxMiBDIDIuMjQ2MDk0IDguNjk1MzEyIDIuMjQ2MDk0IDguNjk1MzEyIDIuMjQ2MDk0IDguMzM5ODQ0IEwgMi4yNDYwOTQgNi43MTg3NSBDIDIuMjQ2MDk0IDYuNjc5Njg4IDIuMjI2NTYyIDYuNjI4OTA2IDIuMjY1NjI1IDYuNTk3NjU2IEMgMi41NTQ2ODggNi44MjAzMTIgMi44OTg0MzggNi45NTMxMjUgMy4yNTc4MTIgNi45ODgyODEgQyAzLjc2NTYyNSA3LjA0Mjk2OSA0LjIxNDg0NCA2LjkxNDA2MiA0LjYwMTU2MiA2LjU3ODEyNSBDIDQuODc4OTA2IDYuMzIwMzEyIDUuMDg1OTM4IDUuOTg4MjgxIDUuMTk1MzEyIDUuNjI1IEMgNS4zNDM3NSA1LjE2MDE1NiA1LjM1NTQ2OSA0LjY3OTY4OCA1LjMxNjQwNiA0LjIwNzAzMSBDIDUuMjk2ODc1IDMuOTEwMTU2IDUuMjE0ODQ0IDMuNjEzMjgxIDUuMDkzNzUgMy4zNTE1NjIgQyA0Ljg1OTM3NSAyLjg1OTM3NSA0LjUgMi41IDMuOTUzMTI1IDIuMzcxMDk0IEMgMy43OTY4NzUgMi4zMzU5MzggMy42NDQ1MzEgMi4zMjQyMTkgMy40OTYwOTQgMi4zMjQyMTkgWiBNIDE0LjY2MDE1NiAyLjMyNDIxOSBDIDE0LjUxNTYyNSAyLjMyNDIxOSAxNC4zNzUgMi4zMzU5MzggMTQuMjM0Mzc1IDIuMzcxMDk0IEMgMTMuODYzMjgxIDIuNDM3NSAxMy41MzEyNSAyLjYwMTU2MiAxMy4yMTQ4NDQgMi43OTY4NzUgQyAxMy4xNzk2ODggMi44MTY0MDYgMTMuMTQwNjI1IDIuODU5Mzc1IDEzLjA4NTkzOCAyLjg1OTM3NSBDIDEzLjA1ODU5NCAyLjc2OTUzMSAxMy4wMzkwNjIgMi42OTUzMTIgMTMuMDExNzE5IDIuNjIxMDk0IEMgMTIuOTc2NTYyIDIuNTE5NTMxIDEyLjkxNzk2OSAyLjQ2MDkzOCAxMi44MDg1OTQgMi40NjA5MzggTCAxMi4xMDE1NjIgMi40NjA5MzggQyAxMi4wMzEyNSAyLjQ2MDkzOCAxMS45NjQ4NDQgMi41IDExLjkzNzUgMi41NjY0MDYgQyAxMS45MzM1OTQgMi42MTMyODEgMTEuOTI1NzgxIDIuNjYwMTU2IDExLjkyNTc4MSAyLjcwNzAzMSBMIDExLjkyNTc4MSA2LjY1NjI1IEMgMTEuOTI1NzgxIDYuODUxNTYyIDExLjk3MjY1NiA2LjkxNDA2MiAxMi4xNzU3ODEgNi45MTQwNjIgTCAxMi45Mzc1IDYuOTE0MDYyIEMgMTMuMTQ4NDM4IDYuOTE0MDYyIDEzLjE5NTMxMiA2Ljg2NzE4OCAxMy4xOTUzMTIgNi42NTYyNSBMIDEzLjE5NTMxMiAzLjYxMzI4MSBDIDEzLjE3OTY4OCAzLjU3NDIxOSAxMy4yMTQ4NDQgMy41MTk1MzEgMTMuMjUzOTA2IDMuNTAzOTA2IEMgMTMuNTY2NDA2IDMuMzU1NDY5IDEzLjkxNzk2OSAzLjI4OTA2MiAxNC4yNTM5MDYgMy4zMTY0MDYgQyAxNC40NDkyMTkgMy4zMjQyMTkgMTQuNjEzMjgxIDMuNDU3MDMxIDE0LjY1MjM0NCAzLjY1MjM0NCBDIDE0LjY3OTY4OCAzLjc1IDE0LjY4NzUgMy44NTU0NjkgMTQuNjg3NSAzLjk0OTIxOSBMIDE0LjY4NzUgNi42NDQ1MzEgQyAxNC42ODc1IDYuODU5Mzc1IDE0LjcyNjU2MiA2LjkwNjI1IDE0Ljk0MTQwNiA2LjkwNjI1IEwgMTUuNTQyOTY5IDYuOTA2MjUgQyAxNS42Mjg5MDYgNi45MDYyNSAxNS43MTg3NSA2LjkwNjI1IDE1LjgwNDY4OCA2LjkwMjM0NCBDIDE1Ljg4NjcxOSA2LjkwMjM0NCAxNS45NDkyMTkgNi44NDc2NTYgMTUuOTQ5MjE5IDYuNzY1NjI1IEMgMTUuOTYwOTM4IDYuNzEwOTM4IDE1Ljk2MDkzOCA2LjY1NjI1IDE1Ljk2MDkzOCA2LjYwNTQ2OSBMIDE1Ljk2MDkzOCAzLjYwNTQ2OSBDIDE1Ljk1MzEyNSAzLjU1ODU5NCAxNS45ODA0NjkgMy41MTE3MTkgMTYuMDI3MzQ0IDMuNSBDIDE2LjMzMjAzMSAzLjM1NTQ2OSAxNi42NzE4NzUgMy4yODkwNjIgMTcuMDA3ODEyIDMuMzE2NDA2IEMgMTcuMTkxNDA2IDMuMzI0MjE5IDE3LjM1MTU2MiAzLjQ1MzEyNSAxNy4zOTA2MjUgMy42MjUgQyAxNy40MjU3ODEgMy43MjY1NjIgMTcuNDMzNTk0IDMuODI4MTI1IDE3LjQyNTc4MSAzLjkzNzUgTCAxNy40MjU3ODEgNi41NzgxMjUgQyAxNy40MjU3ODEgNi42NDQ1MzEgMTcuNDI1NzgxIDYuNzA3MDMxIDE3LjQ0MTQwNiA2Ljc2NTYyNSBDIDE3LjQ1MzEyNSA2LjgzMjAzMSAxNy41MDc4MTIgNi44OTQ1MzEgMTcuNTc0MjE5IDYuOTAyMzQ0IEMgMTcuNjIxMDk0IDYuOTA2MjUgMTcuNjY3OTY5IDYuOTA2MjUgMTcuNzE0ODQ0IDYuOTA2MjUgTCAxOC40MTAxNTYgNi45MDYyNSBDIDE4LjY2Nzk2OSA2LjkwNjI1IDE4LjcwMzEyNSA2Ljg3NSAxOC43MDMxMjUgNi42MTcxODggTCAxOC43MDMxMjUgMy42NjAxNTYgQyAxOC43MDMxMjUgMy41OTM3NSAxOC43MDMxMjUgMy41MzEyNSAxOC42OTUzMTIgMy40NzI2NTYgQyAxOC42Njc5NjkgMy4xNzU3ODEgMTguNTg1OTM4IDIuODk4NDM4IDE4LjM3MTA5NCAyLjY3NTc4MSBDIDE4LjE0ODQzOCAyLjQzNzUgMTcuODUxNTYyIDIuMzQzNzUgMTcuNTI3MzQ0IDIuMzMyMDMxIEMgMTcuMDc0MjE5IDIuMzA0Njg4IDE2LjYyODkwNiAyLjQwNjI1IDE2LjIzMDQ2OSAyLjYxMzI4MSBDIDE2LjA3ODEyNSAyLjY5NTMxMiAxNS45MjU3ODEgMi43ODEyNSAxNS43ODUxNTYgMi44NzEwOTQgQyAxNS43NzczNDQgMi44NTkzNzUgMTUuNzczNDM4IDIuODU5Mzc1IDE1Ljc3NzM0NCAyLjg1MTU2MiBDIDE1Ljc3MzQzOCAyLjg0Mzc1IDE1Ljc1NzgxMiAyLjgzMjAzMSAxNS43NDYwOTQgMi44MDg1OTQgQyAxNS41OTc2NTYgMi41ODU5MzggMTUuMzU1NDY5IDIuNDI1NzgxIDE1LjA4NTkzOCAyLjM3MTA5NCBDIDE0Ljk0MTQwNiAyLjMzNTkzOCAxNC44MDA3ODEgMi4zMjQyMTkgMTQuNjYwMTU2IDIuMzI0MjE5IFogTSAyMS44OTQ1MzEgMi4zNjMyODEgQyAyMS43MDcwMzEgMi4zNDM3NSAyMS41MTE3MTkgMi4zNTE1NjIgMjEuMzIwMzEyIDIuMzcxMDk0IEMgMjAuNDIxODc1IDIuNDgwNDY5IDE5LjgzNTkzOCAyLjk3MjY1NiAxOS41NjY0MDYgMy44MzU5MzggQyAxOS4zNzUgNC40MjE4NzUgMTkuNDAyMzQ0IDUuMDE1NjI1IDE5LjU1MDc4MSA1LjYxMzI4MSBDIDE5Ljc1MzkwNiA2LjM2NzE4OCAyMC4yNTM5MDYgNi44MjAzMTIgMjEuMDE1NjI1IDYuOTgwNDY5IEMgMjEuNDQ5MjE5IDcuMDc4MTI1IDIxLjg4MjgxMiA3LjA1NDY4OCAyMi4zMjAzMTIgNi45ODgyODEgQyAyMi41NTA3ODEgNi45NDkyMTkgMjIuNzc3MzQ0IDYuODk0NTMxIDIyLjk5NjA5NCA2LjgwNDY4OCBDIDIzLjEyNSA2Ljc1NzgxMiAyMy4xOTE0MDYgNi42Nzk2ODggMjMuMTgzNTk0IDYuNTMxMjUgQyAyMy4xODM1OTQgNi4zOTQ1MzEgMjMuMTgzNTk0IDYuMjUzOTA2IDIzLjE4MzU5NCA2LjEwOTM3NSBDIDIzLjE4MzU5NCA1LjkzMzU5NCAyMy4xMTcxODggNS44ODI4MTIgMjIuOTUzMTI1IDUuOTIxODc1IEMgMjIuNzg1MTU2IDUuOTYwOTM4IDIyLjYyODkwNiA1Ljk5NjA5NCAyMi40NjA5MzggNi4wMzEyNSBDIDIyLjEwOTM3NSA2LjEwNTQ2OSAyMS43NDYwOTQgNi4xMDU0NjkgMjEuMzg2NzE5IDYuMDQyOTY5IEMgMjAuOTAyMzQ0IDUuOTQ5MjE5IDIwLjU5Mzc1IDUuNTMxMjUgMjAuNjE3MTg4IDUuMDE1NjI1IEMgMjAuNjcxODc1IDUuMDIzNDM4IDIwLjcyNjU2MiA1LjAzMTI1IDIwLjc4MTI1IDUuMDQyOTY5IEMgMjEuMjA3MDMxIDUuMTE3MTg4IDIxLjY0NDUzMSA1LjEyNSAyMi4wNzgxMjUgNS4wNTg1OTQgQyAyMi4zMjgxMjUgNS4wMjM0MzggMjIuNTYyNSA0Ljk0OTIxOSAyMi43ODUxNTYgNC44MjgxMjUgQyAyMy4wNDI5NjkgNC42Nzk2ODggMjMuMjMwNDY5IDQuNDc2NTYyIDIzLjMxMjUgNC4xOTUzMTIgQyAyMy41MDc4MTIgMy40NzI2NTYgMjMuMjAzMTI1IDIuNzUgMjIuNDUzMTI1IDIuNDgwNDY5IEMgMjIuMjczNDM4IDIuNDI1NzgxIDIyLjA4MjAzMSAyLjM4NjcxOSAyMS44OTQ1MzEgMi4zNjMyODEgWiBNIDguODIwMzEyIDIuNDEwMTU2IEMgOC40NDkyMTkgMi4zODY3MTkgOC4wODU5MzggMi41IDcuNzg5MDYyIDIuNzMwNDY5IEMgNy42NzE4NzUgMi44MTY0MDYgNy41NjY0MDYgMi45MTc5NjkgNy40NTcwMzEgMy4wMTk1MzEgQyA3LjQzNzUgMy4wNTQ2ODggNy40MDIzNDQgMy4wNzQyMTkgNy4zNjMyODEgMy4wODU5MzggQyA3LjMyODEyNSAyLjkzMzU5NCA3LjI5Mjk2OSAyLjc4OTA2MiA3LjI1MzkwNiAyLjY0ODQzOCBDIDcuMjE0ODQ0IDIuNTA3ODEyIDcuMTQ0NTMxIDIuNDUzMTI1IDYuOTk2MDk0IDIuNDUzMTI1IEwgNi40NDkyMTkgMi40NTMxMjUgQyA2LjE4NzUgMi40NTMxMjUgNi4xNjAxNTYgMi40ODQzNzUgNi4xNjAxNTYgMi43NSBMIDYuMTYwMTU2IDYuNjI1IEMgNi4xNjAxNTYgNi42NjQwNjIgNi4xNjAxNTYgNi43MTA5MzggNi4xNjc5NjkgNi43NTc4MTIgQyA2LjE3NTc4MSA2LjgzMjAzMSA2LjIyNjU2MiA2Ljg5NDUzMSA2LjMwMDc4MSA2LjkwMjM0NCBDIDYuMzQzNzUgNi45MDYyNSA2LjM5MDYyNSA2LjkwNjI1IDYuNDI5Njg4IDYuOTA2MjUgTCA3LjE3MTg3NSA2LjkwNjI1IEMgNy4yMDcwMzEgNi45MDYyNSA3LjI1MzkwNiA2LjkwNjI1IDcuMjkyOTY5IDYuOTAyMzQ0IEMgNy4zNjcxODggNi45MDIzNDQgNy40Mjk2ODggNi44NDc2NTYgNy40Mjk2ODggNi43NzM0MzggQyA3LjQzNzUgNi43MTg3NSA3LjQzNzUgNi42NzE4NzUgNy40Mzc1IDYuNjI1IEwgNy40Mzc1IDMuODgyODEyIEMgNy40Mzc1IDMuODI0MjE5IDcuNDM3NSAzLjc2OTUzMSA3LjUxNTYyNSAzLjczNDM3NSBDIDcuODc1IDMuNjIxMDk0IDguMjQ2MDk0IDMuNTQ2ODc1IDguNjMyODEyIDMuNTc4MTI1IEMgOC43MDcwMzEgMy41ODU5MzggOC43ODUxNTYgMy41ODU5MzggOC44NTkzNzUgMy41ODU5MzggQyA4Ljk2MDkzOCAzLjU3NDIxOSA5LjAwMzkwNiAzLjUzMTI1IDkuMDI3MzQ0IDMuNDI5Njg4IEMgOS4wNDI5NjkgMy4zNTE1NjIgOS4wNDI5NjkgMy4yNzczNDQgOS4wMzUxNTYgMy4xOTUzMTIgQyA5LjAzNTE1NiAzIDkuMDQyOTY5IDIuODA0Njg4IDkuMDM1MTU2IDIuNjA5Mzc1IEMgOS4wMjM0MzggMi40NjQ4NDQgOC45Njg3NSAyLjQxNzk2OSA4LjgyMDMxMiAyLjQxMDE1NiBaIE0gOS43NzczNDQgMi40NTMxMjUgQyA5LjY0NDUzMSAyLjQ2MDkzOCA5LjU4OTg0NCAyLjUxMTcxOSA5LjU4MjAzMSAyLjY0ODQzOCBMIDkuNTgyMDMxIDQuNjcxODc1IEMgOS41ODIwMzEgNS4zMjAzMTIgOS41ODIwMzEgNS45Njg3NSA5LjU4MjAzMSA2LjYwNTQ2OSBDIDkuNTgyMDMxIDYuNjQ0NTMxIDkuNTgyMDMxIDYuNjkxNDA2IDkuNTgyMDMxIDYuNzM4MjgxIEMgOS41ODk4NDQgNi44MjAzMTIgOS42NTYyNSA2Ljg3ODkwNiA5LjczODI4MSA2Ljg4NjcxOSBDIDkuNzY1NjI1IDYuODk0NTMxIDkuNzkyOTY5IDYuODk0NTMxIDkuODIwMzEyIDYuODk0NTMxIEwgMTAuNjE3MTg4IDYuODk0NTMxIEMgMTAuNjQ4NDM4IDYuODk0NTMxIDEwLjY3NTc4MSA2Ljg5NDUzMSAxMC43MTA5MzggNi44ODY3MTkgQyAxMC43ODUxNTYgNi44Nzg5MDYgMTAuODM5ODQ0IDYuODMyMDMxIDEwLjg0Mzc1IDYuNzU3ODEyIEMgMTAuODUxNTYyIDYuNjkxNDA2IDEwLjg1OTM3NSA2LjYyODkwNiAxMC44NTkzNzUgNi41NzAzMTIgTCAxMC44NTkzNzUgMi43NzczNDQgQyAxMC44NTkzNzUgMi43MjI2NTYgMTAuODU5Mzc1IDIuNjc1NzgxIDEwLjg1MTU2MiAyLjYyODkwNiBDIDEwLjgzOTg0NCAyLjQ5MjE4OCAxMC43OTY4NzUgMi40NTMxMjUgMTAuNjY3OTY5IDIuNDUzMTI1IEMgMTAuMzcxMDk0IDIuNDQ1MzEyIDEwLjA3NDIxOSAyLjQ0NTMxMiA5Ljc3NzM0NCAyLjQ1MzEyNSBaIE0gMjEuNjM2NzE5IDMuMjQyMTg4IEMgMjEuNzQ2MDk0IDMuMjUgMjEuODQ3NjU2IDMuMjY5NTMxIDIxLjk0MTQwNiAzLjMwODU5NCBDIDIyLjA4OTg0NCAzLjM3MTA5NCAyMi4xODM1OTQgMy41MDM5MDYgMjIuMjA3MDMxIDMuNjY3OTY5IEMgMjIuMjI2NTYyIDMuNzYxNzE5IDIyLjIxODc1IDMuODcxMDk0IDIyLjE4MzU5NCAzLjk2NDg0NCBDIDIyLjExNzE4OCA0LjE2Nzk2OSAyMS45NTcwMzEgNC4yNTM5MDYgMjEuNzUzOTA2IDQuMjk2ODc1IEMgMjEuNjM2NzE5IDQuMzI0MjE5IDIxLjUxMTcxOSA0LjMzNTkzOCAyMS4zODI4MTIgNC4zMjQyMTkgQyAyMS4xNjAxNTYgNC4zMjQyMTkgMjAuOTM3NSA0LjMwODU5NCAyMC43MTQ4NDQgNC4yNzM0MzggQyAyMC42MjUgNC4yNjE3MTkgMjAuNjI1IDQuMjYxNzE5IDIwLjY0MDYyNSA0LjE2Nzk2OSBDIDIwLjY1MjM0NCA0LjAzMTI1IDIwLjY5MTQwNiAzLjkwMjM0NCAyMC43NDYwOTQgMy43NzczNDQgQyAyMC45MTQwNjIgMy4zNTU0NjkgMjEuMjczNDM4IDMuMjE0ODQ0IDIxLjYzNjcxOSAzLjI0MjE4OCBaIE0gMy4wODIwMzEgMy4yODkwNjIgQyAzLjE2NDA2MiAzLjI4OTA2MiAzLjI1IDMuMjk2ODc1IDMuMzMyMDMxIDMuMzE2NDA2IEMgMy41NzQyMTkgMy4zNTE1NjIgMy43NzczNDQgMy41MDM5MDYgMy44NzEwOTQgMy43MjI2NTYgQyAzLjk2MDkzOCAzLjkxMDE1NiA0LjAxNTYyNSA0LjEwNTQ2OSA0LjAxOTUzMSA0LjMwODU5NCBDIDQuMDU0Njg4IDQuNjcxODc1IDQuMDU0Njg4IDUuMDM5MDYyIDMuOTUzMTI1IDUuMzgyODEyIEMgMy45MTQwNjIgNS41NTg1OTQgMy44MjQyMTkgNS43MTg3NSAzLjY5MTQwNiA1LjgzOTg0NCBDIDMuNTQyOTY5IDUuOTYwOTM4IDMuMzU5Mzc1IDYuMDM1MTU2IDMuMTcxODc1IDYuMDM1MTU2IEMgMi44Nzg5MDYgNi4wNTg1OTQgMi41ODk4NDQgNS45OTYwOTQgMi4zMzIwMzEgNS44NTU0NjkgQyAyLjI3MzQzOCA1LjgyODEyNSAyLjIzMDQ2OSA1Ljc2NTYyNSAyLjIzODI4MSA1LjY5OTIxOSBMIDIuMjM4MjgxIDQuNjY3OTY5IEMgMi4yMzgyODEgNC4zMjQyMTkgMi4yNDYwOTQgMy45ODQzNzUgMi4yMzgyODEgMy42NDA2MjUgQyAyLjIzMDQ2OSAzLjU1ODU5NCAyLjI3NzM0NCAzLjQ5MjE4OCAyLjM1MTU2MiAzLjQ2NDg0NCBDIDIuNTg5ODQ0IDMuMzUxNTYyIDIuODI0MjE5IDMuMjg5MDYyIDMuMDgyMDMxIDMuMjg5MDYyIFogTSA2LjU5Mzc1IDguODMyMDMxIEMgNi41NTA3ODEgOC44MjQyMTkgNi41MTE3MTkgOC44MzIwMzEgNi40NjQ4NDQgOC44Mzk4NDQgQyA2LjEwNTQ2OSA4Ljg2MzI4MSA1Ljg0Mzc1IDkuMTEzMjgxIDUuODA4NTk0IDkuNDUzMTI1IEMgNS43NzczNDQgOS44Nzg5MDYgNS45NzI2NTYgMTAuMTY3OTY5IDYuMzQ3NjU2IDEwLjI2MTcxOSBDIDYuNDE3OTY5IDEwLjI2OTUzMSA2LjQ4NDM3NSAxMC4yODEyNSA2LjU1MDc4MSAxMC4yODEyNSBDIDcuMDQyOTY5IDEwLjI5Njg3NSA3LjQxNDA2MiAxMC4wMTk1MzEgNy4zNjcxODggOS40NTcwMzEgQyA3LjM1NTQ2OSA5LjIwMzEyNSA3LjE5MTQwNiA4Ljk4MDQ2OSA2Ljk1NzAzMSA4Ljg5MDYyNSBDIDYuODM1OTM4IDguODQzNzUgNi43MTQ4NDQgOC44MTY0MDYgNi41OTM3NSA4LjgzMjAzMSBaIE0gMTEuNzA3MDMxIDguODcxMDk0IEMgMTEuNDcyNjU2IDguODcxMDk0IDExLjQzMzU5NCA4LjkxNDA2MiAxMS40MzM1OTQgOS4xNDg0MzggTCAxMS40MzM1OTQgMTEuMTI1IEMgMTEuNDMzNTk0IDExLjE3MTg3NSAxMS40NDUzMTIgMTEuMjE0ODQ0IDExLjQxNzk2OSAxMS4yNTM5MDYgQyAxMS4zNjMyODEgMTEuMjUzOTA2IDExLjMzMjAzMSAxMS4yMTQ4NDQgMTEuMjg5MDYyIDExLjE4NzUgQyAxMC42NTYyNSAxMC44MTY0MDYgOS45ODgyODEgMTAuNzUgOS4zMTI1IDExLjA1ODU5NCBDIDguODM5ODQ0IDExLjI4MTI1IDguNTUwNzgxIDExLjY3OTY4OCA4LjM1OTM3NSAxMi4xNTIzNDQgQyA4LjE3OTY4OCAxMi42MDU0NjkgOC4xMzI4MTIgMTMuMDc4MTI1IDguMTQ0NTMxIDEzLjU2MjUgQyA4LjE0NDUzMSAxNC4wMTU2MjUgOC4yNDYwOTQgMTQuNDYwOTM4IDguNDQ5MjE5IDE0Ljg2NzE4OCBDIDguNjgzNTk0IDE1LjMxMjUgOS4wMjM0MzggMTUuNjU2MjUgOS41MDc4MTIgMTUuNzk2ODc1IEMgMTAuMTc1NzgxIDE2LjAwNzgxMiAxMC43OTY4NzUgMTUuOTA2MjUgMTEuMzcxMDk0IDE1LjQ4MDQ2OSBDIDExLjQxMDE1NiAxNS40NjA5MzggMTEuNDMzNTk0IDE1LjQxNDA2MiAxMS40OTIxODggMTUuNDA2MjUgQyAxMS41MTk1MzEgMTUuNDcyNjU2IDExLjU0Njg3NSAxNS41NDY4NzUgMTEuNTU4NTk0IDE1LjYxMzI4MSBDIDExLjU4MjAzMSAxNS43MTQ4NDQgMTEuNjY3OTY5IDE1Ljc4NTE1NiAxMS43Njk1MzEgMTUuNzg1MTU2IEwgMTEuOTE3OTY5IDE1Ljc4NTE1NiBDIDEyLjE0MDYyNSAxNS43ODUxNTYgMTIuMzUxNTYyIDE1Ljc4OTA2MiAxMi41NjY0MDYgMTUuNzg1MTU2IEMgMTIuNzQyMTg4IDE1Ljc4NTE1NiAxMi43ODkwNjIgMTUuNzMwNDY5IDEyLjc5Njg3NSAxNS41NDY4NzUgTCAxMi43OTY4NzUgOS4xMDkzNzUgQyAxMi43ODkwNjIgOC45MTQwNjIgMTIuNzQyMTg4IDguODcxMDk0IDEyLjU1ODU5NCA4Ljg3MTA5NCBaIE0gMjEuMDUwNzgxIDEwLjg3MTA5NCBDIDIwLjg1NTQ2OSAxMC44NjMyODEgMjAuNjYwMTU2IDEwLjg3MTA5NCAyMC40NjQ4NDQgMTAuOTAyMzQ0IEMgMTkuNjQwNjI1IDExLjAyMzQzOCAxOS4wNDY4NzUgMTEuNDY0ODQ0IDE4Ljc1NzgxMiAxMi4yNDYwOTQgQyAxOC40ODA0NjkgMTIuOTk2MDk0IDE4LjQ4NDM3NSAxMy44MTI1IDE4Ljc2MTcxOSAxNC41NjI1IEMgMTkuMDAzOTA2IDE1LjIzODI4MSAxOS41IDE1LjY2Nzk2OSAyMC4xOTkyMTkgMTUuODQzNzUgQyAyMC41NzAzMTIgMTUuOTM3NSAyMC45NjQ4NDQgMTUuOTYwOTM4IDIxLjM0NzY1NiAxNS45MDYyNSBDIDIyLjYyODkwNiAxNS43NSAyMy4xNjQwNjIgMTQuNzc3MzQ0IDIzLjI1IDEzLjkzMzU5NCBDIDIzLjI1IDEzLjkzMzU5NCAyMy4yODUxNTYgMTMuNjgzNTk0IDIzLjI4NTE1NiAxMy41NjI1IEwgMjMuMjc3MzQ0IDEzLjA1ODU5NCBDIDIzLjI3NzM0NCAxMi45ODQzNzUgMjMuMjU3ODEyIDEyLjgzOTg0NCAyMy4yNTc4MTIgMTIuODM1OTM4IEMgMjMuMjQ2MDk0IDEyLjcxODc1IDIzLjIyMjY1NiAxMi42MDU0NjkgMjMuMTkxNDA2IDEyLjQ4ODI4MSBDIDIyLjk2ODc1IDExLjY4NzUgMjIuNDUzMTI1IDExLjE1MjM0NCAyMS42MzI4MTIgMTAuOTQ1MzEyIEMgMjEuNDM3NSAxMC44OTg0MzggMjEuMjQ2MDk0IDEwLjg3NSAyMS4wNTA3ODEgMTAuODcxMDk0IFogTSAxNS45NzY1NjIgMTAuOTIxODc1IEMgMTQuOTQ5MjE5IDEwLjk0NTMxMiAxNC4xNjQwNjIgMTEuNDY0ODQ0IDEzLjg0NzY1NiAxMi40ODgyODEgQyAxMy42MzI4MTIgMTMuMTcxODc1IDEzLjY2MDE1NiAxMy44NTkzNzUgMTMuODY3MTg4IDE0LjU0Mjk2OSBDIDE0LjA4NTkzOCAxNS4yMzgyODEgMTQuNTc4MTI1IDE1LjY2NDA2MiAxNS4yNzM0MzggMTUuODUxNTYyIEMgMTUuNTcwMzEyIDE1LjkyNTc4MSAxNS44Nzg5MDYgMTUuOTUzMTI1IDE2LjE5MTQwNiAxNS45NDUzMTIgQyAxNi42MzY3MTkgMTUuOTM3NSAxNy4wODIwMzEgMTUuODUxNTYyIDE3LjUgMTUuNjg3NSBDIDE3LjY4MzU5NCAxNS42MjEwOTQgMTcuNzIyNjU2IDE1LjU2MjUgMTcuNzIyNjU2IDE1LjM3MTA5NCBMIDE3LjcyMjY1NiAxNC45MzM1OTQgQyAxNy43MTQ4NDQgMTQuNzU3ODEyIDE3LjY0MDYyNSAxNC42OTUzMTIgMTcuNDY4NzUgMTQuNzM4MjgxIEMgMTcuMzMyMDMxIDE0Ljc2OTUzMSAxNy4yMDMxMjUgMTQuODA0Njg4IDE3LjA3MDMxMiAxNC44Mzk4NDQgQyAxNi42NTYyNSAxNC45MzM1OTQgMTYuMjMwNDY5IDE0Ljk1MzEyNSAxNS44MTI1IDE0Ljg3ODkwNiBDIDE1LjQwMjM0NCAxNC43OTY4NzUgMTUuMTE3MTg4IDE0LjU2MjUgMTUuMDA3ODEyIDE0LjE0NDUzMSBDIDE0Ljk3NjU2MiAxNC4wMjM0MzggMTQuOTQ5MjE5IDEzLjkwMjM0NCAxNC45NDE0MDYgMTMuNzczNDM4IEMgMTQuOTY4NzUgMTMuNzczNDM4IDE1LjAwMzkwNiAxMy43NzM0MzggMTUuMDIzNDM4IDEzLjc4NTE1NiBDIDE1LjQyOTY4OCAxMy44NTE1NjIgMTUuODM5ODQ0IDEzLjg4NjcxOSAxNi4yNSAxMy44NTE1NjIgQyAxNi42MDE1NjIgMTMuODMyMDMxIDE2Ljk2MDkzOCAxMy43NjU2MjUgMTcuMjc3MzQ0IDEzLjU5NzY1NiBDIDE3LjYwMTU2MiAxMy40MzM1OTQgMTcuODI0MjE5IDEzLjEzMjgxMiAxNy44OTA2MjUgMTIuNzgxMjUgQyAxNy45Mzc1IDEyLjU1ODU5NCAxNy45Mzc1IDEyLjMyODEyNSAxNy44OTA2MjUgMTIuMTA1NDY5IEMgMTcuNzY1NjI1IDExLjU1ODU5NCAxNy40MTQwNjIgMTEuMjE0ODQ0IDE2Ljg4NjcxOSAxMS4wMzkwNjIgQyAxNi41OTc2NTYgMTAuOTQ1MzEyIDE2LjI3NzM0NCAxMC45MTAxNTYgMTUuOTc2NTYyIDEwLjkyMTg3NSBaIE0gMC42ODc1IDExLjAxOTUzMSBDIDAuNTY2NDA2IDExLjAxOTUzMSAwLjUxNTYyNSAxMS4wNzgxMjUgMC41MzkwNjIgMTEuMTk5MjE5IEMgMC41NTg1OTQgMTEuMjgxMjUgMC41ODU5MzggMTEuMzcxMDk0IDAuNjE3MTg4IDExLjQ0NTMxMiBDIDAuOTg0Mzc1IDEyLjQxMDE1NiAxLjM1OTM3NSAxMy4zNjcxODggMS43MjY1NjIgMTQuMzI0MjE5IEMgMS44NzUgMTQuNzMwNDY5IDIuMDM1MTU2IDE1LjE0MDYyNSAyLjE5MTQwNiAxNS41NDY4NzUgQyAyLjI1NzgxMiAxNS43MTQ4NDQgMi4zNjcxODggMTUuNzk2ODc1IDIuNTU0Njg4IDE1Ljc4OTA2MiBDIDIuODI0MjE5IDE1Ljc4OTA2MiAzLjA5NzY1NiAxNS43ODkwNjIgMy4zNjcxODggMTUuNzg5MDYyIEMgMy41IDE1LjgwNDY4OCAzLjYyMTA5NCAxNS43MjI2NTYgMy42Njc5NjkgMTUuNTkzNzUgQyAzLjY4MzU5NCAxNS41NTQ2ODggMy43MDMxMjUgMTUuNTE5NTMxIDMuNzEwOTM4IDE1LjQ4MDQ2OSBDIDQuMTIxMDk0IDE0LjQyMTg3NSA0LjUzNTE1NiAxMy4zNDc2NTYgNC45NDUzMTIgMTIuMjg5MDYyIEwgNS4zMDg1OTQgMTEuMzE2NDA2IEMgNS4zOTA2MjUgMTEuMDkzNzUgNS4zMzU5MzggMTEuMDIzNDM4IDUuMTA5Mzc1IDExLjAyMzQzOCBMIDQuMTc1NzgxIDExLjAyMzQzOCBDIDQuMDY2NDA2IDExLjAyMzQzOCAzLjk2MDkzOCAxMS4wOTM3NSAzLjkzMzU5NCAxMS4xOTkyMTkgTCAzLjg5MDYyNSAxMS4zMTY0MDYgQyAzLjYxNzE4OCAxMi4yNjE3MTkgMy4zMzIwMzEgMTMuMTk5MjE5IDMuMDQ2ODc1IDE0LjE0ODQzOCBDIDMuMDE1NjI1IDE0LjI3MzQzOCAyLjk4MDQ2OSAxNC4zODY3MTkgMi45NDE0MDYgMTQuNTA3ODEyIEMgMi45MjU3ODEgMTQuNTA3ODEyIDIuOTIxODc1IDE0LjUwNzgxMiAyLjkyNTc4MSAxNC41IEMgMi42NzU3ODEgMTMuNjUyMzQ0IDIuNDMzNTk0IDEyLjgwMDc4MSAyLjE4MzU5NCAxMS45NDkyMTkgQyAyLjEwOTM3NSAxMS43MTQ4NDQgMi4wNDI5NjkgMTEuNDc2NTYyIDEuOTc2NTYyIDExLjI0NjA5NCBDIDEuOTMzNTk0IDExLjEyMTA5NCAxLjg3NSAxMS4wMTk1MzEgMS43MjY1NjIgMTEuMDE5NTMxIEMgMS4zODI4MTIgMTEuMDE5NTMxIDEuMDMxMjUgMTEuMDExNzE5IDAuNjg3NSAxMS4wMTk1MzEgWiBNIDYuMTQ4NDM4IDExLjAyMzQzOCBDIDUuOTU3MDMxIDExLjAyMzQzOCA1LjkwMjM0NCAxMS4wNzgxMjUgNS45MDIzNDQgMTEuMjY5NTMxIEwgNS45MDIzNDQgMTUuNSBDIDUuOTAyMzQ0IDE1LjUzNTE1NiA1LjkwMjM0NCAxNS41ODIwMzEgNS45MTAxNTYgMTUuNjEzMjgxIEMgNS45MTc5NjkgMTUuNzM4MjgxIDUuOTc2NTYyIDE1Ljc4OTA2MiA2LjEwMTU2MiAxNS43ODkwNjIgQyA2LjQyOTY4OCAxNS43OTY4NzUgNi43NTM5MDYgMTUuNzk2ODc1IDcuMDg1OTM4IDE1Ljc4OTA2MiBDIDcuMjA3MDMxIDE1Ljc4OTA2MiA3LjI2MTcxOSAxNS43MzA0NjkgNy4yNzM0MzggMTUuNjA5Mzc1IEwgNy4yNzM0MzggMTEuMjY5NTMxIEMgNy4yNzM0MzggMTEuMDc4MTI1IDcuMjE4NzUgMTEuMDIzNDM4IDcuMDIzNDM4IDExLjAyMzQzOCBaIE0gMTUuODUxNTYyIDExLjg2MzI4MSBDIDE1LjkzMzU5NCAxMS44NDc2NTYgMTYuMDIzNDM4IDExLjg1NTQ2OSAxNi4xMDkzNzUgMTEuODYzMjgxIEMgMTYuMTM2NzE5IDExLjg2MzI4MSAxNi4xNjQwNjIgMTEuODc1IDE2LjE5MTQwNiAxMS44NzUgQyAxNi42MjUgMTEuOTQxNDA2IDE2LjcyMjY1NiAxMi4yODEyNSAxNi42NDg0MzggMTIuNjA5Mzc1IEMgMTYuNTgyMDMxIDEyLjg1OTM3NSAxNi4zODY3MTkgMTIuOTQ5MjE5IDE2LjE1NjI1IDEyLjk5NjA5NCBDIDE2LjAzNTE1NiAxMy4wMTU2MjUgMTUuOTA2MjUgMTMuMDMxMjUgMTUuNzc3MzQ0IDEzLjAyMzQzOCBDIDE1LjUzMTI1IDEzLjAxNTYyNSAxNS4yODEyNSAxMi45OTYwOTQgMTUuMDM1MTU2IDEyLjk2MDkzOCBDIDE0Ljk4NDM3NSAxMi45NTcwMzEgMTQuOTYwOTM4IDEyLjkzMzU5NCAxNC45Njg3NSAxMi44NzUgQyAxNS4wMTU2MjUgMTIuNjM2NzE5IDE1LjA3MDMxMiAxMi40MTAxNTYgMTUuMjE4NzUgMTIuMjE0ODQ0IEMgMTUuMzg2NzE5IDExLjk4NDM3NSAxNS42MDU0NjkgMTEuODgyODEyIDE1Ljg1MTU2MiAxMS44NjMyODEgWiBNIDEwLjM5NDUzMSAxMS45MTAxNTYgQyAxMC43MTg3NSAxMS44ODI4MTIgMTEuMDM5MDYyIDExLjk0MTQwNiAxMS4zMzIwMzEgMTIuMDc4MTI1IEMgMTEuNDA2MjUgMTIuMDk3NjU2IDExLjQ0NTMxMiAxMi4xNzE4NzUgMTEuNDM3NSAxMi4yNTM5MDYgQyAxMS40MzM1OTQgMTIuNjMyODEyIDExLjQzNzUgMTMuMDAzOTA2IDExLjQzNzUgMTMuMzc1IEwgMTEuNDM3NSAxNC40ODgyODEgQyAxMS40NTMxMjUgMTQuNTU0Njg4IDExLjQwNjI1IDE0LjYyODkwNiAxMS4zMzU5MzggMTQuNjU2MjUgQyAxMS4wNDY4NzUgMTQuODIwMzEyIDEwLjcxMDkzOCAxNC44ODY3MTkgMTAuMzc4OTA2IDE0LjgzOTg0NCBDIDEwLjA5Mzc1IDE0LjgxMjUgOS44NTE1NjIgMTQuNjM2NzE5IDkuNzIyNjU2IDE0LjM4NjcxOSBDIDkuNjI4OTA2IDE0LjE5MTQwNiA5LjU3MDMxMiAxMy45ODA0NjkgOS41NTQ2ODggMTMuNzY1NjI1IEMgOS41IDEzLjM3ODkwNiA5LjUzNTE1NiAxMi45ODgyODEgOS42MjUgMTIuNjE3MTg4IEMgOS42NTYyNSAxMi41MTU2MjUgOS42OTE0MDYgMTIuNDE0MDYyIDkuNzUgMTIuMzIwMzEyIEMgOS44Nzg5MDYgMTIuMDg1OTM4IDEwLjEyMTA5NCAxMS45Mjk2ODggMTAuMzk0NTMxIDExLjkxMDE1NiBaIE0gMjAuODA4NTk0IDExLjk0MTQwNiBDIDIwLjkyMTg3NSAxMS45Mjk2ODggMjEuMDM5MDYyIDExLjkyOTY4OCAyMS4xNTIzNDQgMTEuOTQ5MjE5IEMgMjEuNDAyMzQ0IDEyLjAwMzkwNiAyMS42MDU0NjkgMTIuMTYwMTU2IDIxLjcxMDkzOCAxMi4zODY3MTkgQyAyMS44MTI1IDEyLjU5NzY1NiAyMS44NzUgMTIuODM5ODQ0IDIxLjg4NjcxOSAxMy4wNzgxMjUgQyAyMS44OTQ1MzEgMTMuMTkxNDA2IDIxLjkwMjM0NCAxMy4zMDA3ODEgMjEuODk0NTMxIDEzLjQwNjI1IEMgMjEuOTE0MDYyIDEzLjY3NTc4MSAyMS44ODI4MTIgMTMuOTQxNDA2IDIxLjgwODU5NCAxNC4xOTE0MDYgQyAyMS43NzM0MzggMTQuMzIwMzEyIDIxLjcxODc1IDE0LjQzMzU5NCAyMS42MzY3MTkgMTQuNTQ2ODc1IEMgMjEuNTAzOTA2IDE0LjczODI4MSAyMS4yODkwNjIgMTQuODU5Mzc1IDIxLjA1ODU5NCAxNC44Nzg5MDYgQyAyMC45NDE0MDYgMTQuODg2NzE5IDIwLjgyODEyNSAxNC44ODY3MTkgMjAuNzA3MDMxIDE0Ljg2NzE4OCBDIDIwLjQ0OTIxOSAxNC44MTI1IDIwLjI0MjE4OCAxNC42NDQ1MzEgMjAuMTMyODEyIDE0LjQwNjI1IEMgMjAuMDQ2ODc1IDE0LjIxODc1IDE5Ljk4NDM3NSAxNC4wMDc4MTIgMTkuOTcyNjU2IDEzLjgwMDc4MSBDIDE5LjkzNzUgMTMuNDQxNDA2IDE5LjkyOTY4OCAxMy4wNzgxMjUgMjAuMDE5NTMxIDEyLjcyNjU2MiBDIDIwLjA1MDc4MSAxMi41ODU5MzggMjAuMTEzMjgxIDEyLjQ0MTQwNiAyMC4xNzk2ODggMTIuMzIwMzEyIEMgMjAuMzE2NDA2IDEyLjA5NzY1NiAyMC41NTA3ODEgMTEuOTU3MDMxIDIwLjgwODU5NCAxMS45NDE0MDYgWiBNIDIwLjgwODU5NCAxNy43MjY1NjIgQyAyMC40NTcwMzEgMTcuNzQyMTg4IDIwLjEyMTA5NCAxNy43NzM0MzggMTkuNzgxMjUgMTcuODQzNzUgQyAxOS4zNDM3NSAxNy45NDkyMTkgMTguOTI5Njg4IDE4LjEwNTQ2OSAxOC41NTg1OTQgMTguMzY3MTg4IEMgMTguNTA3ODEyIDE4LjQwMjM0NCAxOC40NTMxMjUgMTguNDU3MDMxIDE4LjQxMDE1NiAxOC41MTE3MTkgQyAxOC4zNzg5MDYgMTguNTY2NDA2IDE4LjM2MzI4MSAxOC42MjUgMTguMzk4NDM4IDE4LjY4NzUgQyAxOC40MzM1OTQgMTguNzQ2MDk0IDE4LjQ5MjE4OCAxOC43NTM5MDYgMTguNTU4NTk0IDE4Ljc0NjA5NCBMIDE5LjE2MDE1NiAxOC42NzE4NzUgQyAxOS42MDU0NjkgMTguNjEzMjgxIDIwLjA2NjQwNiAxOC41ODk4NDQgMjAuNTIzNDM4IDE4LjYxMzI4MSBDIDIwLjY4NzUgMTguNjI1IDIwLjg0NzY1NiAxOC42NTIzNDQgMjAuOTk2MDk0IDE4LjY5OTIxOSBDIDIxLjE2NDA2MiAxOC43NTM5MDYgMjEuMjczNDM4IDE4Ljg5NDUzMSAyMS4yODEyNSAxOS4wNjI1IEMgMjEuMjg5MDYyIDE5LjE2NDA2MiAyMS4yODEyNSAxOS4yNjE3MTkgMjEuMjczNDM4IDE5LjM1OTM3NSBDIDIxLjIzODI4MSAxOS42MzY3MTkgMjEuMTg3NSAxOS45MDYyNSAyMS4xMDU0NjkgMjAuMTY0MDYyIEMgMjAuOTY4NzUgMjAuNjUyMzQ0IDIwLjgwMDc4MSAyMS4xMDkzNzUgMjAuNjI1IDIxLjU3NDIxOSBDIDIwLjYwNTQ2OSAyMS42Mjg5MDYgMjAuNTk3NjU2IDIxLjY3NTc4MSAyMC41OTM3NSAyMS43MjI2NTYgQyAyMC41OTc2NTYgMjEuODE2NDA2IDIwLjY2MDE1NiAyMS44NzEwOTQgMjAuNzUzOTA2IDIxLjg0Mzc1IEMgMjAuODE2NDA2IDIxLjgyNDIxOSAyMC44NjcxODggMjEuNzkyOTY5IDIwLjkxMDE1NiAyMS43NDIxODggQyAyMS4xMzI4MTIgMjEuNTQyOTY5IDIxLjMyODEyNSAyMS4yOTY4NzUgMjEuNDg0Mzc1IDIxLjAzNTE1NiBDIDIxLjkyMTg3NSAyMC4zMDQ2ODggMjIuMTgzNTk0IDE5LjQ4ODI4MSAyMi4yNTM5MDYgMTguNjQwNjI1IEMgMjIuMjU3ODEyIDE4LjQ5NjA5NCAyMi4yNTM5MDYgMTguMzQ3NjU2IDIyLjIzODI4MSAxOC4yMTQ4NDQgQyAyMi4yMTg3NSAxOC4wOTM3NSAyMi4xNDQ1MzEgMTcuOTg0Mzc1IDIyLjAzNTE1NiAxNy45Mzc1IEMgMjEuOTQ5MjE5IDE3Ljg5ODQzOCAyMS44NjcxODggMTcuODcxMDk0IDIxLjc3MzQzOCAxNy44NDM3NSBDIDIxLjQ1NzAzMSAxNy43NjE3MTkgMjEuMTMyODEyIDE3Ljc0MjE4OCAyMC44MDg1OTQgMTcuNzI2NTYyIFogTSAxLjc4NTE1NiAxNy45ODQzNzUgQyAxLjc1MzkwNiAxNy45OTIxODggMS43MTg3NSAxOC4wMTE3MTkgMS42OTkyMTkgMTguMDM5MDYyIEMgMS42NDQ1MzEgMTguMDkzNzUgMS42MzI4MTIgMTguMTY3OTY5IDEuNjY0MDYyIDE4LjIzNDM3NSBDIDEuNjc5Njg4IDE4LjI4OTA2MiAxLjcxODc1IDE4LjMzNTkzOCAxLjc1MzkwNiAxOC4zNjcxODggQyAxLjkyOTY4OCAxOC41MzEyNSAyLjA4OTg0NCAxOC42ODc1IDIuMjY1NjI1IDE4LjgzOTg0NCBDIDQuMTI4OTA2IDIwLjQ5NjA5NCA2LjI2OTUzMSAyMS42Mjg5MDYgOC43MDcwMzEgMjIuMTk1MzEyIEMgOS40MTQwNjIgMjIuMzU5Mzc1IDEwLjEyODkwNiAyMi40NzI2NTYgMTAuODU5Mzc1IDIyLjUyNzM0NCBDIDExLjEyODkwNiAyMi41NDY4NzUgMTEuNDA2MjUgMjIuNTU0Njg4IDExLjY3NTc4MSAyMi41NjY0MDYgQyAxMS44Nzg5MDYgMjIuNTY2NDA2IDEyLjA3NDIxOSAyMi41NjY0MDYgMTIuMjc3MzQ0IDIyLjU2NjQwNiBDIDEzLjA1ODU5NCAyMi41MzkwNjIgMTMuODQ3NjU2IDIyLjQ1MzEyNSAxNC42MjUgMjIuMzE2NDA2IEMgMTUuOTc2NTYyIDIyLjA2MjUgMTcuMjg1MTU2IDIxLjYyMTA5NCAxOC41MTE3MTkgMjEgQyAxOS4xNjAxNTYgMjAuNjcxODc1IDE5Ljc3MzQzOCAyMC4yNzczNDQgMjAuMzQ3NjU2IDE5LjgzMjAzMSBDIDIwLjQxNzk2OSAxOS43ODUxNTYgMjAuNDY4NzUgMTkuNzE4NzUgMjAuNTExNzE5IDE5LjY0NDUzMSBDIDIwLjUyMzQzOCAxOS42MjUgMjAuNTMxMjUgMTkuNjA1NDY5IDIwLjUzOTA2MiAxOS41ODU5MzggQyAyMC41NzgxMjUgMTkuNDE0MDYyIDIwLjQ3NjU2MiAxOS4yNDYwOTQgMjAuMzE2NDA2IDE5LjIwNzAzMSBDIDIwLjIxNDg0NCAxOS4xODc1IDIwLjEwNTQ2OSAxOS4xOTkyMTkgMjAuMDE5NTMxIDE5LjI0NjA5NCBDIDE5LjQxNzk2OSAxOS41MjM0MzggMTguODA0Njg4IDE5Ljc2NTYyNSAxOC4xNjc5NjkgMTkuOTc2NTYyIEMgMTYuOTcyNjU2IDIwLjM3NSAxNS43MzgyODEgMjAuNjUyMzQ0IDE0LjQ4NDM3NSAyMC44MTI1IEMgMTMuOTQ5MjE5IDIwLjg3ODkwNiAxMy40MTAxNTYgMjAuOTMzNTk0IDEyLjg3MTA5NCAyMC45NDkyMTkgQyAxMS44NzEwOTQgMjAuOTgwNDY5IDEwLjg1OTM3NSAyMC45MzM1OTQgOS44NjcxODggMjAuODEyNSBDIDkuMTcxODc1IDIwLjcyNjU2MiA4LjQ3NjU2MiAyMC41OTc2NTYgNy43OTI5NjkgMjAuNDQxNDA2IEMgNS43NTM5MDYgMTkuOTYwOTM4IDMuODA0Njg4IDE5LjE2MDE1NiAyLjAyMzQzOCAxOC4wNTg1OTQgQyAxLjk4MDQ2OSAxOC4wMzEyNSAxLjkzMzU5NCAxOC4wMTE3MTkgMS44OTQ1MzEgMTcuOTkyMTg4IEMgMS44NTkzNzUgMTcuOTc2NTYyIDEuODIwMzEyIDE3Ljk3NjU2MiAxLjc4NTE1NiAxNy45ODQzNzUgWiBNIDEuNzg1MTU2IDE3Ljk4NDM3NSBcIjtcbiAgICBzdmdbXCJQSUFcIl0gPSBcIk0gMjQgMTIgQyAyNCAxOC42Mjg5MDYgMTguNjI4OTA2IDI0IDEyIDI0IEMgNS4zNzEwOTQgMjQgMCAxOC42Mjg5MDYgMCAxMiBDIDAgNS4zNzEwOTQgNS4zNzEwOTQgMCAxMiAwIEMgMTguNjI4OTA2IDAgMjQgNS4zNzEwOTQgMjQgMTIgWiBNIDI0IDEyIE0gMTEuNDA2MjUgOC42OTUzMTIgQyAxMS40MDYyNSA4LjMzMjAzMSAxMC45Njg3NSA4LjE1MjM0NCAxMC43MTA5MzggOC40MDYyNSBDIDEwLjQ1NzAzMSA4LjY2NDA2MiAxMC42MzY3MTkgOS4xMDE1NjIgMTEgOS4xMDE1NjIgQyAxMS4yMjI2NTYgOS4xMDE1NjIgMTEuNDA2MjUgOC45MTc5NjkgMTEuNDAyMzQ0IDguNjk1MzEyIE0gMTMuMDAzOTA2IDguMjg5MDYyIEMgMTIuNjQwNjI1IDguMjg5MDYyIDEyLjQ1NzAzMSA4LjcyNjU2MiAxMi43MTQ4NDQgOC45ODQzNzUgQyAxMi45NzI2NTYgOS4yMzgyODEgMTMuNDA2MjUgOS4wNTg1OTQgMTMuNDA2MjUgOC42OTUzMTIgQyAxMy40MDYyNSA4LjQ3MjY1NiAxMy4yMjY1NjIgOC4yODkwNjIgMTMuMDAzOTA2IDguMjg5MDYyIE0gMTIuNTY2NDA2IDkuMzYzMjgxIEMgMTIuMjQyMTg4IDkuNjUyMzQ0IDExLjc1NzgxMiA5LjY1MjM0NCAxMS40Mzc1IDkuMzYzMjgxIEMgMTEuMzMyMDMxIDkuMjc3MzQ0IDExLjE5OTIxOSA5LjQyNTc4MSAxMS4yOTI5NjkgOS41MTk1MzEgQyAxMS42OTE0MDYgOS44OTQ1MzEgMTIuMzEyNSA5Ljg5NDUzMSAxMi43MDcwMzEgOS41MTk1MzEgQyAxMi43NSA5LjQ4MDQ2OSAxMi43NSA5LjQxNDA2MiAxMi43MTA5MzggOS4zNzUgQyAxMi42NzE4NzUgOS4zMzIwMzEgMTIuNjA5Mzc1IDkuMzI4MTI1IDEyLjU2NjQwNiA5LjM2MzI4MSBNIDE2LjMwNDY4OCAxMC45MzM1OTQgTCAxNi4zMDQ2ODggMTAuOTI5Njg4IEMgMTYuMzA0Njg4IDEwLjU1MDc4MSAxNi4wNTQ2ODggMTAuMjE4NzUgMTUuNjkxNDA2IDEwLjExNzE4OCBMIDE1LjY5MTQwNiA5LjM5MDYyNSBDIDE1LjY5MTQwNiA3LjQxNDA2MiAxNC4wODk4NDQgNS44MTI1IDEyLjExMzI4MSA1LjgxMjUgTCAxMS45NzY1NjIgNS44MTI1IEMgMTAgNS44MTI1IDguMzk0NTMxIDcuNDE0MDYyIDguMzk0NTMxIDkuMzkwNjI1IEwgOC4zOTQ1MzEgMTAuMDk3NjU2IEMgNy45OTYwOTQgMTAuMTcxODc1IDcuNzA3MDMxIDEwLjUxNTYyNSA3LjcwMzEyNSAxMC45MjE4NzUgQyA3LjU5Mzc1IDExLjEwNTQ2OSA3LjUzNTE1NiAxMS4zMTY0MDYgNy41MzUxNTYgMTEuNTMxMjUgTCA3LjUzNTE1NiAxNi4xMjEwOTQgQyA3LjUzNTE1NiAxNi42Njc5NjkgNy45MDIzNDQgMTcuMTQ0NTMxIDguNDI5Njg4IDE3LjI4OTA2MiBDIDguNTcwMzEyIDE3LjYwNTQ2OSA4Ljg4NjcxOSAxNy44MTI1IDkuMjM0Mzc1IDE3LjgxMjUgTCAxMC4yMzgyODEgMTcuODEyNSBDIDEwLjU3MDMxMiAxNy44MTI1IDEwLjg3NSAxNy42MjUgMTEuMDI3MzQ0IDE3LjMyODEyNSBMIDEyLjg3MTA5NCAxNy4zMjgxMjUgQyAxMy4wMTk1MzEgMTcuNjI1IDEzLjMyNDIxOSAxNy44MTI1IDEzLjY1NjI1IDE3LjgxMjUgTCAxNC42NjAxNTYgMTcuODEyNSBDIDE1IDE3LjgxMjUgMTUuMzA4NTk0IDE3LjYxNzE4OCAxNS40NTcwMzEgMTcuMzEyNSBDIDE2LjAzOTA2MiAxNy4yMTQ4NDQgMTYuNDY0ODQ0IDE2LjcxMDkzOCAxNi40NjQ4NDQgMTYuMTIxMDk0IEwgMTYuNDY0ODQ0IDExLjUzMTI1IEMgMTYuNDY0ODQ0IDExLjMyNDIxOSAxNi40MTAxNTYgMTEuMTE3MTg4IDE2LjMwNDY4OCAxMC45MzM1OTQgWiBNIDEzLjExMzI4MSAxNS4zODI4MTIgQyAxMy4xMzY3MTkgMTUuNTM5MDYyIDEzLjA4OTg0NCAxNS42OTUzMTIgMTIuOTg4MjgxIDE1LjgxNjQwNiBDIDEyLjg4NjcxOSAxNS45MzM1OTQgMTIuNzM4MjgxIDE2LjAwMzkwNiAxMi41NzgxMjUgMTYuMDAzOTA2IEwgMTEuNDIxODc1IDE2LjAwMzkwNiBDIDExLjI2NTYyNSAxNi4wMDM5MDYgMTEuMTEzMjgxIDE1LjkzMzU5NCAxMS4wMTE3MTkgMTUuODE2NDA2IEMgMTAuOTEwMTU2IDE1LjY5NTMxMiAxMC44NjMyODEgMTUuNTM5MDYyIDEwLjg4NjcxOSAxNS4zODI4MTIgTCAxMS4xMDkzNzUgMTMuODcxMDk0IEMgMTAuNjkxNDA2IDEzLjUxNTYyNSAxMC41MjczNDQgMTIuOTQ5MjE5IDEwLjY4NzUgMTIuNDIxODc1IEMgMTAuODQ3NjU2IDExLjg5ODQzOCAxMS4zMDA3ODEgMTEuNTE5NTMxIDExLjg0Mzc1IDExLjQ2MDkzOCBDIDEyLjQ0NTMxMiAxMS4zOTA2MjUgMTMuMDE5NTMxIDExLjcyMjY1NiAxMy4yNjE3MTkgMTIuMjc3MzQ0IEMgMTMuNSAxMi44MzIwMzEgMTMuMzUxNTYyIDEzLjQ4MDQ2OSAxMi44OTA2MjUgMTMuODcxMDk0IFogTSAxMy4yNDYwOTQgMTAuMzI0MjE5IEwgMTAuNzYxNzE5IDEwLjMyNDIxOSBDIDEwLjYwNTQ2OSAxMC4xNjc5NjkgMTAuMzkwNjI1IDEwLjA4MjAzMSAxMC4xNzE4NzUgMTAuMDgyMDMxIEwgOS43NSAxMC4wODIwMzEgTCA5Ljc1IDkuMzMyMDMxIEMgOS43NSA4LjA5Mzc1IDEwLjc1MzkwNiA3LjA4OTg0NCAxMS45OTIxODggNy4wODk4NDQgTCAxMi4xMDE1NjIgNy4wODk4NDQgQyAxMy4zMzk4NDQgNy4wODk4NDQgMTQuMzM5ODQ0IDguMDkzNzUgMTQuMzM5ODQ0IDkuMzMyMDMxIEwgMTQuMzM5ODQ0IDEwLjA4MjAzMSBMIDEzLjgzNTkzOCAxMC4wODIwMzEgQyAxMy42MTMyODEgMTAuMDgyMDMxIDEzLjQwMjM0NCAxMC4xNjc5NjkgMTMuMjQ2MDk0IDEwLjMyNDIxOSBaIE0gMTIuNzMwNDY5IDE1LjQ1NzAzMSBDIDEyLjc0MjE4OCAxNS40OTYwOTQgMTIuNzM0Mzc1IDE1LjUzNTE1NiAxMi43MDcwMzEgMTUuNTcwMzEyIEMgMTIuNjgzNTk0IDE1LjYwMTU2MiAxMi42NDQ1MzEgMTUuNjE3MTg4IDEyLjYwNTQ2OSAxNS42MTcxODggTCAxMS40MDIzNDQgMTUuNjE3MTg4IEMgMTEuMzYzMjgxIDE1LjYxNzE4OCAxMS4zMjQyMTkgMTUuNjAxNTYyIDExLjMwMDc4MSAxNS41NjY0MDYgQyAxMS4yNzM0MzggMTUuNTM1MTU2IDExLjI2NTYyNSAxNS40OTYwOTQgMTEuMjc3MzQ0IDE1LjQ1NzAzMSBMIDExLjUwNzgxMiAxMy43ODUxNTYgQyAxMS41MDc4MTIgMTMuNzYxNzE5IDExLjUwMzkwNiAxMy43MzgyODEgMTEuNDk2MDk0IDEzLjcxNDg0NCBDIDExLjQ3NjU2MiAxMy42ODM1OTQgMTEuNDUzMTI1IDEzLjY2MDE1NiAxMS40MjE4NzUgMTMuNjM2NzE5IEMgMTEuNDE3OTY5IDEzLjYzMjgxMiAxMS40MTc5NjkgMTMuNjMyODEyIDExLjQxNDA2MiAxMy42Mjg5MDYgQyAxMS4wNzAzMTIgMTMuMzc1IDEwLjkyNTc4MSAxMi45MzM1OTQgMTEuMDU4NTk0IDEyLjUyNzM0NCBDIDExLjE5MTQwNiAxMi4xMjEwOTQgMTEuNTY2NDA2IDExLjg0Mzc1IDExLjk5MjE4OCAxMS44Mzk4NDQgQyAxMi40MjE4NzUgMTEuODM5ODQ0IDEyLjgwMDc4MSAxMi4xMDkzNzUgMTIuOTM3NSAxMi41MTU2MjUgQyAxMy4wNzQyMTkgMTIuOTE3OTY5IDEyLjkzNzUgMTMuMzY3MTg4IDEyLjU5Mzc1IDEzLjYyMTA5NCBDIDEyLjU5Mzc1IDEzLjYyNSAxMi41OTM3NSAxMy42Mjg5MDYgMTIuNTgyMDMxIDEzLjYzNjcxOSBDIDEyLjU1MDc4MSAxMy42NjAxNTYgMTIuNTI3MzQ0IDEzLjY4MzU5NCAxMi41MDc4MTIgMTMuNzE0ODQ0IEMgMTIuNTAzOTA2IDEzLjcyMjY1NiAxMi41IDEzLjczNDM3NSAxMi41IDEzLjc0NjA5NCBaIE0gMTIuNzMwNDY5IDE1LjQ1NzAzMSBcIjtcbiAgICBzdmdbXCJTVVJGU0hBUktcIl0gPSBcIk0gMjQgMTIgQyAyNCAxOC42Mjg5MDYgMTguNjI4OTA2IDI0IDEyIDI0IEMgNS4zNzEwOTQgMjQgMCAxOC42Mjg5MDYgMCAxMiBDIDAgNS4zNzEwOTQgNS4zNzEwOTQgMCAxMiAwIEMgMTguNjI4OTA2IDAgMjQgNS4zNzEwOTQgMjQgMTIgWiBNIDI0IDEyTSAxNi41NDY4NzUgOC4zNTE1NjIgTCAxNi41NDY4NzUgOC4zNDM3NSBDIDE2LjUzOTA2MiA4LjI0MjE4OCAxNi41MzEyNSA4LjEyNSAxNi41MjczNDQgOCBDIDE2LjUxMTcxOSA3Ljc2NTYyNSAxNi40OTYwOTQgNy41MTU2MjUgMTYuNDgwNDY5IDcuMzIwMzEyIEMgMTYuNDU3MDMxIDcuMTg3NSAxNi40MjU3ODEgNy4wNzAzMTIgMTYuMzg2NzE5IDYuOTYwOTM4IEMgMTYuMTQ4NDM4IDYuNDI5Njg4IDE1LjY4MzU5NCA2LjE3NTc4MSAxNS4xOTE0MDYgNi4wNTQ2ODggQyAxNC45NjQ4NDQgNi4wMTU2MjUgMTQuNjkxNDA2IDYuMDA3ODEyIDE0LjM5ODQzOCA2IEwgMTEuNTcwMzEyIDYgQyA5Ljc1IDYuMDk3NjU2IDguOTg0Mzc1IDcuMTUyMzQ0IDguNzgxMjUgNy43MTQ4NDQgQyA3Ljk4NDM3NSAxMC4wOTc2NTYgNy40ODQzNzUgMTMuMTg3NSA3LjEyODkwNiAxNS40MTQwNjIgQyA3LjEyMTA5NCAxNS40NjA5MzggNy4xMTMyODEgMTUuNSA3LjEwNTQ2OSAxNS41NDI5NjkgTCA2Ljk4ODI4MSAxNi42MDE1NjIgQyA2Ljk4MDQ2OSAxNi43Njk1MzEgNyAxNi45NTMxMjUgNy4wNDI5NjkgMTcuMTI4OTA2IEMgNy4yNjU2MjUgMTcuNzczNDM4IDcuOTQxNDA2IDE4LjMyMDMxMiA5LjQyNTc4MSAxNy43NzczNDQgQyAxMC44MzIwMzEgMTcuMTY3OTY5IDEyLjQ4ODI4MSAxNi40MTAxNTYgMTQuMTk5MjE5IDE1LjU1ODU5NCBDIDE1LjE3NTc4MSAxNC45OTYwOTQgMTYuNjA1NDY5IDEzLjcwMzEyNSAxNi42Nzk2ODggMTIuMDY2NDA2IEMgMTYuNjY3OTY5IDEwLjg1OTM3NSAxNi42Mjg5MDYgOS41ODk4NDQgMTYuNTQ2ODc1IDguMzUxNTYyIFogTSAxNC4yODkwNjIgOS4yNDYwOTQgQyAxNC4yODkwNjIgOS4zODY3MTkgMTQuMTc1NzgxIDkuNSAxNC4wMzUxNTYgOS41IEMgMTMuMTgzNTk0IDkuNSAxMi40OTYwOTQgMTAuMTkxNDA2IDEyLjQ5NjA5NCAxMS4wMzkwNjIgTCAxMi40OTYwOTQgMTEuOTgwNDY5IEMgMTIuNDk2MDk0IDEzLjU2MjUgMTEuMjE0ODQ0IDE0Ljg0Mzc1IDkuNjM2NzE5IDE0Ljg0Mzc1IEMgOS40OTYwOTQgMTQuODQzNzUgOS4zODY3MTkgMTQuNzMwNDY5IDkuMzg2NzE5IDE0LjU5Mzc1IEwgOS4zODY3MTkgMTMuODEyNSBDIDkuMzg2NzE5IDEzLjY3MTg3NSA5LjUgMTMuNTU4NTk0IDkuNjQwNjI1IDEzLjU1ODU5NCBDIDEwLjQ5MjE4OCAxMy41NTg1OTQgMTEuMTc5Njg4IDEyLjg3MTA5NCAxMS4xNzk2ODggMTIuMDE5NTMxIEwgMTEuMTc5Njg4IDExLjA3ODEyNSBDIDExLjE3OTY4OCA5LjUgMTIuNDYwOTM4IDguMjE4NzUgMTQuMDQyOTY5IDguMjE4NzUgQyAxNC4xNzk2ODggOC4yMTg3NSAxNC4yODkwNjIgOC4zMjgxMjUgMTQuMjg5MDYyIDguNDY0ODQ0IFogTSAxNC4yODkwNjIgOS4yNDYwOTQgXCI7XG4gICAgc3ZnW1wiVlVEVVwiXSA9IFwiTSA2LjA5NzEgNi45OTI2IEwgNS4wNDY5IDYuOTkyNiBDIDQuODcyNSA2Ljk5NjMgNC43MTI5IDcuMTAzOSA0LjY1MzUgNy4yNzA5IEMgNC42NTM1IDcuMjgyIDQuNjUzNSA3LjI4OTUgNC42NTM1IDcuMzAwNiBDIDQuMjYwMiA4LjQzMjQgMy45MTUgOS40MDQ3IDMuNTE4IDEwLjUzNjUgQyAzLjQxNDEgMTAuODM3MSAzLjMxMDIgMTEuMTM0IDMuMTkxNCAxMS40MzQ2IEMgMy4xODQgMTEuNDYwNSAzLjE2NTQgMTEuNDgyOCAzLjEzOTUgMTEuNDkzOSBDIDMuMDk0OSAxMS40OTM5IDMuMDk0OSAxMS40NjA1IDMuMDgzOCAxMS40MzA5IEMgMi44Mzg5IDEwLjcyMjEgMi41OTM5IDEwLjAxNyAyLjM0MTYgOS4zMTE5IEwgMS42MjE3IDcuMjU2MSBDIDEuNjI1NCA3LjI0ODYgMS42MjU0IDcuMjQxMiAxLjYyMTcgNy4yMzM4IEMgMS41NDc1IDcuMDg1NCAxLjM5OSA2Ljk5MjYgMS4yMzU3IDYuOTkyNiBMIDAuMTcwNyA2Ljk5MjYgQyAwLjA4NTQgNi45ODUyIDAuMDExMSA3LjA0ODIgMCA3LjEzMzYgQyAtMC4wMDM3IDcuMTYzMyAwLjAwMzcgNy4xOTMgMC4wMTQ4IDcuMjE4OSBDIDAuNjI3MSA4LjkyOTcgMS4yMzU3IDEwLjY0MDQgMS44NDQzIDEyLjM0NzUgTCAxLjk3MDUgMTIuNyBDIDIuMTQ4NiAxMy4yMTk1IDIuNjM0OCAxMy41NjQ2IDMuMTgwMyAxMy41NjA5IEwgMy4zMjEzIDEzLjU2MDkgQyAzLjU1NTEgMTMuNTQ5OCAzLjc4ODkgMTMuNTIwMSA0LjAyMjcgMTMuNDY4MiBMIDQuNDUzMSAxMi4yMjg3IEwgNi4yNTY2IDcuMjMwMSBDIDYuMjY0MSA3LjIwNzggNi4yNjc4IDcuMTg5MyA2LjI3NTIgNy4xNzA3IEMgNi4yODYzIDcuMDg1NCA2LjIyNyA3LjAwMzcgNi4xNDE2IDYuOTkyNiBDIDYuMTI2OCA2Ljk5MjYgNi4xMTU2IDYuOTkyNiA2LjEwMDggNi45OTI2IE0gMTEuOTQxOCA3LjQ0MTYgQyAxMS45NDE4IDcuMjE1MiAxMS43Njc0IDcuMDI5NyAxMS41NDQ3IDcuMDExMSBMIDEwLjQ1NzQgNy4wMTExIEwgMTAuNDU3NCA3LjYxMjMgQyAxMC40NTc0IDguNzQ0MSAxMC40NTc0IDkuNzQ5OCAxMC40NTc0IDEwLjg4NTQgQyAxMC40NjExIDExLjAwMDQgMTAuNDUgMTEuMTE1NCAxMC40MjQgMTEuMjI2OCBDIDEwLjM0MjQgMTEuNjM1IDEwLjA0NTUgMTEuOTU3OCA5LjY0ODQgMTIuMDcyOSBDIDkuMDQzNiAxMi4yNjk1IDguMzkwNCAxMS45MzkzIDguMTkzNyAxMS4zMzA3IEMgOC4xNTY2IDExLjIxMTkgOC4xMzgxIDExLjA4OTUgOC4xMzgxIDEwLjk2NyBDIDguMTM4MSAxMC4xODQgOC4xMzgxIDguNTEwNCA4LjEzODEgNy42MDQ5IEwgOC4xMzgxIDcgQyA4LjEzODEgNyA3LjA1NDUgNyA3LjA0NzEgNyBDIDYuODI0NCA3LjAxNDggNi42NSA3LjIwNDEgNi42NSA3LjQyNjggTCA2LjY1IDcuNjQ1NyBDIDYuNjUgOC44MjIxIDYuNjUgOS44MzE0IDYuNjUgMTEuMDMwMSBDIDYuNjU3NCAxMi40NzczIDcuODMwMSAxMy42NDI2IDkuMjY5OSAxMy42MzE0IEMgOS40NDA2IDEzLjYzMTQgOS42MDc2IDEzLjYxMjkgOS43NzQ2IDEzLjU3OTUgQyAxMC40MjAzIDEzLjQ3MTkgMTEuMDAyOSAxMy4xMTkzIDExLjQwMzcgMTIuNTk5OCBDIDExLjc0NTEgMTIuMTY5MyAxMS45MzQ0IDExLjYzODcgMTEuOTQxOCAxMS4wODU3IEMgMTEuOTQxOCAxMC40NTg2IDExLjk0MTggOS44MzE0IDExLjk0MTggOS4yMDA2IFogTSAxMS45NDE4IDcuNDQxNiBNIDIzLjc1IDcuNDQxNiBDIDIzLjc1IDcuMjE4OSAyMy41NzkzIDcuMDI5NyAyMy4zNTY2IDcuMDExMSBMIDIyLjI2NTYgNy4wMTExIEwgMjIuMjY1NiA3LjYxMjMgQyAyMi4yNjU2IDguNzQ0MSAyMi4yNjU2IDkuNzQ5OCAyMi4yNjU2IDEwLjg4NTQgQyAyMi4yNjU2IDExLjAwMDQgMjIuMjU0NSAxMS4xMTU0IDIyLjIyODUgMTEuMjI2OCBDIDIyLjE1MDYgMTEuNjMxMiAyMS44NSAxMS45NTc4IDIxLjQ1MjkgMTIuMDcyOSBDIDIwLjg1MTggMTIuMjczMiAyMC4yMDIzIDExLjk0MyAyMC4wMDIgMTEuMzM4MSBDIDE5Ljk2MTEgMTEuMjE5MyAxOS45NDI2IDExLjA5MzIgMTkuOTQyNiAxMC45NjcgQyAxOS45NDI2IDEwLjE4NCAxOS45NDI2IDguNTEwNCAxOS45NDI2IDcuNjA0OSBMIDE5Ljk0MjYgNyBDIDE5Ljk0MjYgNyAxOC44NjI3IDcgMTguODQ3OSA3IEMgMTguNjI4OSA3LjAxODYgMTguNDU4MiA3LjIwNDEgMTguNDU0NSA3LjQyNjggTCAxOC40NTQ1IDcuNjQ1NyBDIDE4LjQ1NDUgOC44MjIxIDE4LjQ1NDUgOS44MzE0IDE4LjQ1NDUgMTEuMDMwMSBDIDE4LjQ2NTYgMTIuNDc3MyAxOS42MzgzIDEzLjY0MjYgMjEuMDc0NCAxMy42MzE0IEMgMjEuMjQ1MSAxMy42MzE0IDIxLjQxNTggMTMuNjEyOSAyMS41ODI4IDEzLjU3OTUgQyAyMi4yMjg1IDEzLjQ3MTkgMjIuODA3NCAxMy4xMTkzIDIzLjIwODIgMTIuNTk5OCBDIDIzLjU1MzMgMTIuMTY5MyAyMy43NDI2IDExLjYzODcgMjMuNzQ2MyAxMS4wODU3IEMgMjMuNzQ2MyAxMC40NTg2IDIzLjc0NjMgOS44MzE0IDIzLjc0NjMgOS4yMDA2IEwgMjMuNzQ2MyA3LjQ0MTYgWiBNIDIzLjc1IDcuNDQxNiBNIDE2LjEzNTIgMTEuNTM4NSBDIDE1Ljg0NTcgMTEuODg3MyAxNS40MzM4IDEyLjEwNjIgMTQuOTg4NSAxMi4xNDcxIEMgMTQuODk5NCAxMi4xNTA4IDE0LjgxMDQgMTIuMTUwOCAxNC43MjEzIDEyLjE0NzEgTCAxMy45NTMxIDEyLjE0NzEgQyAxMy44NjA0IDEyLjE0NzEgMTMuODU2NiAxMi4xNDcxIDEzLjg1NjYgMTIuMDUwNiBMIDEzLjg1NjYgOC40NTg0IEMgMTMuODU2NiA4LjM3MyAxMy44NTY2IDguMzczIDEzLjk0MiA4LjM3MyBDIDE0LjI2ODYgOC4zNzMgMTQuNTY5MSA4LjM3MyAxNC44ODA5IDguMzczIEMgMTUuNDM3NSA4LjM5MTYgMTUuOTQ5NiA4LjY4MTEgMTYuMjUzOSA5LjE0ODYgQyAxNi40NTA2IDkuNDM4MSAxNi41NjU2IDkuNzc5NSAxNi41ODA1IDEwLjEzMiBDIDE2LjYyMTMgMTAuNjQwNCAxNi40NjE3IDExLjE0NTEgMTYuMTM1MiAxMS41Mzg1IE0gMTYuNTY5MyA3LjQ4OTggQyAxNi4xMDE4IDcuMTg5MyAxNS41NiA3LjAyMjMgMTUuMDAzMyA3LjAwNzQgQyAxNC43NDM2IDcuMDA3NCAxNC40ODc1IDcuMDA3NCAxNC4yMjQgNy4wMDc0IEwgMTIuODQ3MyA3LjAwNzQgQyAxMi42MDk4IDcuMDA3NCAxMi40MjA1IDcuMjAwNCAxMi40MjA1IDcuNDM3OSBMIDEyLjQyMDUgMTMuMTE1NiBDIDEyLjQyMDUgMTMuMzUzMSAxMi42MDk4IDEzLjU0NjEgMTIuODQ3MyAxMy41NDYxIEwgMTQuOTE0MyAxMy41NDYxIEMgMTUuMDcwMSAxMy41NDYxIDE1LjIyNiAxMy41MzEzIDE1LjM4MTggMTMuNTAxNiBDIDE2LjAwNTMgMTMuNDA4OCAxNi41ODQyIDEzLjEzMDUgMTcuMDQ0MyAxMi43MDM3IEMgMTcuOTAxNiAxMS45NTQxIDE4LjI5MTIgMTAuOCAxOC4wNjg2IDkuNjc5MyBDIDE3LjkxMjcgOC43NzAxIDE3LjM2NzIgNy45NzYgMTYuNTgwNSA3LjUwNDcgTSAxOS4wMzM0IDE0LjQyOTMgQyAxOC40NjU2IDE0LjQ1NTMgMTguMDI0IDE0Ljk0NTEgMTguMDQ2MyAxNS41MTY2IEMgMTguMDY4NiAxNi4wODgxIDE4LjU0NzMgMTYuNTI5NyAxOS4xMTUgMTYuNTA3NCBDIDE5LjY3MTcgMTYuNDg1MiAyMC4xMDk2IDE2LjAyNSAyMC4xMDIxIDE1LjQ2NDYgQyAyMC4xMTMzIDE0LjkxMTcgMTkuNjc5MSAxNC40NDc5IDE5LjEyNjIgMTQuNDI5MyBMIDE5LjAzMzQgMTQuNDI5MyBNIDE5LjYxNiAxNS41MDkyIEMgMTkuNjA0OSAxNS42MzU0IDE5LjU0OTIgMTUuNzU3OCAxOS40NjM5IDE1Ljg1MDYgTCAxOS40MzQyIDE1Ljg4MDMgQyAxOS4xOTY3IDE2LjEwMjkgMTguODI1NiAxNi4wOTE4IDE4LjYwMjkgMTUuODU0MyBDIDE4LjM4MDMgMTUuNjIwNSAxOC4zOTE0IDE1LjI0NTcgMTguNjI4OSAxNS4wMjMgQyAxOC44NjI3IDE0LjgwMDQgMTkuMjMzOCAxNC44MTE1IDE5LjQ1NjQgMTUuMDQ5IEMgMTkuNDU2NCAxNS4wNDkgMTkuNDU2NCAxNS4wNDkgMTkuNDYwMiAxNS4wNDkgQyAxOS41NTI5IDE1LjE0OTIgMTkuNjA4NiAxNS4yNzkxIDE5LjYxNiAxNS40MTY0IFogTSAxOS42MTYgMTUuNTA5MiBNIDE2LjgxOCAxNS4zMTk5IEwgMTYuODE4IDE1Ljc3MjcgTCAxNy4yNjMzIDE1Ljc3MjcgTCAxNy4yNjMzIDE1LjkyODUgQyAxNy4xNTU3IDE2LjAxMDIgMTcuMDI5NSAxNi4wNTEgMTYuODk1OSAxNi4wNTEgQyAxNi42MDI3IDE2LjA2MjEgMTYuMzU0MSAxNS44MzIgMTYuMzQzIDE1LjUzNTIgQyAxNi4zMzkzIDE1LjUxMjkgMTYuMzM5MyAxNS40OTA2IDE2LjM0MyAxNS40NzIxIEMgMTYuMzIwNyAxNS4xNzUyIDE2LjUzOTYgMTQuOTE1NCAxNi44MzY1IDE0Ljg5MzIgTCAxNi44OTU5IDE0Ljg5MzIgQyAxNy4wNzAzIDE0Ljg5NjkgMTcuMjI5OSAxNC45OTM0IDE3LjMxNTIgMTUuMTQ1NSBMIDE3Ljc0NTcgMTQuOTIyOSBDIDE3LjU3NSAxNC42MTExIDE3LjI0ODQgMTQuNDI1NiAxNi44OTU5IDE0LjQzNjcgQyAxNi4zMjgxIDE0LjQyMTkgMTUuODU2OCAxNC44NzQ2IDE1Ljg0MiAxNS40NDI0IEMgMTUuODI3MSAxNS45OTUzIDE2LjI0MjggMTYuNDYyOSAxNi43OTIgMTYuNTAzNyBMIDE2Ljg5NTkgMTYuNTAzNyBDIDE3LjE5NjUgMTYuNTAzNyAxNy40ODU5IDE2LjM4ODcgMTcuNzAxMiAxNi4xNzM0IEMgMTcuNzM0NiAxNi4xNCAxNy43NTY4IDE2LjA4ODEgMTcuNzYwNSAxNi4wMzYxIEwgMTcuNzYwNSAxNS4zMTk5IFogTSAxNi44MTggMTUuMzE5OSBNIDE1LjMxODcgMTQuNDg1IEwgMTUuMjc3OSAxNC40ODUgQyAxNS4xNjY2IDE0LjQ5MjQgMTUuMDgxMiAxNC41ODUyIDE1LjA3NzUgMTQuNjk2NSBMIDE1LjA3NzUgMTUuNTc5NyBMIDE0LjI3NiAxNC40ODUgTCAxMy43NDE2IDE0LjQ4NSBMIDEzLjc0MTYgMTYuNDc3NyBMIDE0LjI1MzcgMTYuNDc3NyBMIDE0LjI1MzcgMTUuMzMxMSBMIDE1LjA5MjQgMTYuNDc3NyBMIDE1LjU4MjIgMTYuNDc3NyBMIDE1LjU4MjIgMTQuNDg1IFogTSAxNS4zMTg3IDE0LjQ4NSBNIDEyLjgxMzkgMTQuNDg1IEwgMTIuMTYwNyAxNC40ODUgTCAxMS40MTExIDE2LjQ4MTQgTCAxMS45OTM3IDE2LjQ4MTQgTCAxMi4wOTM5IDE2LjE5MiBMIDEyLjg3MzIgMTYuMTkyIEwgMTIuOTI1MiAxNi4zNDA0IEMgMTIuOTU4NiAxNi40MjIxIDEzLjAzMjggMTYuNDc0IDEzLjExODIgMTYuNDc3NyBMIDEzLjU1NjEgMTYuNDc3NyBaIE0gMTIuMjM4NyAxNS43NDMgTCAxMi40OTEgMTQuOTg5NiBMIDEyLjczOTYgMTUuNzQzIFogTSAxMi4yMzg3IDE1Ljc0MyBNIDEwLjM5NDMgMTQuNDg1IEwgOS41NTU3IDE0LjQ4NSBMIDkuNTU1NyAxNi4yNjk5IEMgOS41NjMxIDE2LjM4NSA5LjY1NTkgMTYuNDc3NyA5Ljc3MDkgMTYuNDgxNCBMIDEwLjM5NDMgMTYuNDgxNCBDIDEwLjkzOTggMTYuNTExMSAxMS40MTExIDE2LjA5MTggMTEuNDQwOCAxNS41Mzg5IEMgMTEuNDc0MiAxNC45ODk2IDExLjA1NDkgMTQuNTE4NCAxMC41MDU3IDE0LjQ4NSBDIDEwLjQ2ODYgMTQuNDg1IDEwLjQzMTQgMTQuNDg1IDEwLjM5NDMgMTQuNDg1IE0gMTAuMzk0MyAxNi4wMzYxIEwgMTAuMDY3OCAxNi4wMzYxIEwgMTAuMDY3OCAxNC45MjI5IEwgMTAuMzk0MyAxNC45MjI5IEMgMTAuNjc2NCAxNC45MDggMTAuOTEzOSAxNS4xMjMyIDEwLjkzMjQgMTUuNDA1MyBMIDEwLjkzMjQgMTUuNDY0NiBDIDEwLjkzMjQgMTUuNzYxNSAxMC42OTEyIDE2LjAzNjEgMTAuMzk4IDE2LjAzNjEgQyAxMC4zOTQzIDE2LjAzNjEgMTAuMzk4IDE2LjAzMjQgMTAuMzk4IDE2LjAzMjQgTCAxMC40MDE4IDE2LjAyODcgTSA4LjkwNjMgMTQuNDg1IEMgOC43OTQ5IDE0LjQ4ODcgOC43MDIxIDE0LjU3NzcgOC42OTg0IDE0LjY4OTEgTCA4LjY5ODQgMTUuNTc5NyBMIDcuODc4MyAxNC40ODUgTCA3LjM0MzkgMTQuNDg1IEwgNy4zNDM5IDE2LjQ3NzcgTCA3Ljg1MjMgMTYuNDc3NyBMIDcuODUyMyAxNS4zMzExIEwgOC42OTQ3IDE2LjQ4NTIgTCA5LjE4ODMgMTYuNDg1MiBMIDkuMTg4MyAxNC40ODUgWiBNIDguOTA2MyAxNC40ODUgTSA2LjQzMTEgMTQuNDg1IEwgNS43Nzc5IDE0LjQ4NSBMIDUuMDMyIDE2LjQ3NzcgTCA1LjYyNTggMTYuNDc3NyBMIDUuNzI2IDE2LjE4ODMgTCA2LjUxMjcgMTYuMTg4MyBMIDYuNTY0NiAxNi4zNDA0IEMgNi41OTggMTYuNDE4NCA2LjY3MjMgMTYuNDcwMyA2Ljc1NzYgMTYuNDc3NyBMIDcuMTkxOCAxNi40Nzc3IFogTSA1Ljg1NTkgMTUuNzQzIEwgNi4xMTE5IDE0Ljk4OTYgTCA2LjM2MDUgMTUuNzQzIFogTSA1Ljg1NTkgMTUuNzQzIE0gNS4yMjEzIDE0LjkwOCBMIDUuMjIxMyAxNC40NTkgTCAzLjY5NjEgMTQuNDU5IEwgMy42OTYxIDE2LjQ0OCBMIDQuMjM0MiAxNi40NDggTCA0LjIzNDIgMTUuNzU3OCBMIDQuNzY4NiAxNS43NTc4IEMgNC44NjUgMTUuNzQ2NyA0LjkzNTUgMTUuNjY4NyA0Ljk0MyAxNS41NzIzIEwgNC45NDMgMTUuMzA1MSBMIDQuMjQxNiAxNS4zMDUxIEwgNC4yNDE2IDE0LjkwOCBaIE0gNS4yMjEzIDE0LjkwOCBNIDAuMzk3MSAxNS4zOTQxIEwgMy4yNDcxIDE1LjM5NDEgTCAzLjI0NzEgMTUuNTUgTCAwLjM5NzEgMTUuNTUgWiBNIDAuMzk3MSAxNS4zOTQxIE0gMjAuNTU0OSAxNS4zOTQxIEwgMjMuNDA0OSAxNS4zOTQxIEwgMjMuNDA0OSAxNS41NSBMIDIwLjU1NDkgMTUuNTUgWiBNIDIwLjU1NDkgMTUuMzk0MVwiO1xufSkoc3ZnIHx8IChleHBvcnRzLnN2ZyA9IHN2ZyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VudW1zXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2VzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWZhdWx0S2V5c1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVmYXVsdFNvdXJjZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2N1c3RvbUFjdGlvblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4va2V5XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zZXJ2aWNlRGF0YVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc291cmNlXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hbmRyb2lkLXR2LWNhcmQudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=