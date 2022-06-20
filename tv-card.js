const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

import {
    mdiPower,
    mdiArrowLeft,
    mdiArrowRight,
    mdiVideoInputHdmi,
    mdiHome,
    mdiArrowUp,
    mdiTelevisionGuide,
    mdiArrowDown,
    mdiRewind,
    mdiPlay,
    mdiPause,
    mdiFastForward,
    mdiVolumeMute,
    mdiVolumeMinus,
    mdiVolumePlus,
    mdiNetflix,
    mdiYoutube,
    mdiSpotify,
} from "https://unpkg.com/@mdi/js@6.4.95/mdi.js?module";

const custom_keys = {
    "power": ["KEY_POWER", mdiPower],
    "volume_up": ["KEY_VOLUP", mdiVolumePlus],
    "volume_down": ["KEY_VOLDOWN", mdiVolumeMinus],
    "volume_mute": ["KEY_MUTE", mdiVolumeMute],
    "return": ["KEY_RETURN", mdiArrowLeft],
    "source": ["KEY_SOURCE", mdiVideoInputHdmi],
    "info": ["KEY_INFO", mdiTelevisionGuide],
    "home": ["KEY_HOME", mdiHome],
    "channel_up": ["KEY_CHUP", mdiArrowUp],
    "channel_down": ["KEY_CHDOWN", mdiArrowDown],
    "up": ["KEY_UP", mdiArrowUp],
    "left": ["KEY_LEFT", mdiArrowLeft],
    "enter": ["KEY_ENTER", mdiArrowLeft],
    "right": ["KEY_RIGHT", mdiArrowRight],
    "down": ["KEY_DOWN", mdiArrowDown],
    "rewind": ["KEY_REWIND", mdiRewind],
    "play": ["KEY_PLAY", mdiPlay],
    "pause": ["KEY_PAUSE", mdiPause],
    "fast_forward": ["KEY_FF", mdiFastForward],
};

const custom_sources = {
    "netflix": ["Netflix", mdiNetflix],
    "spotify": ["Spotify", mdiSpotify],
    "youtube": ["YouTube", mdiYoutube],
};

var fireEvent = function(node, type, detail, options) {
    options = options || {};
    detail = detail === null || detail === undefined ? {} : detail;
    var event = new Event(type, {
        bubbles: false,
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};

var holdtimer = null;
var holdaction = null;
var holdinterval = null;
var timer = null;

class TVCardServices extends LitElement {
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
        return 7;
    }
    
    setConfig(config) {
        if (!config.entity) {
            console.log("Invalid configuration");
            return;
        }
        
        this._config = { theme: "default", ...config };
        
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
    
    async loadCardHelpers() {
        this._helpers = await (window).loadCardHelpers();
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
            "type": "custom:my-slider",
            "entity": "media_player.tv",
            "height": "50px",
            "mainSliderColor": "white",
            "secondarySliderColor": "rgb(60, 60, 60)",
            "mainSliderColorOff": "rgb(60, 60, 60)",
            "secondarySliderColorOff": "rgb(60, 60, 60)",
            "thumbWidth": "0px",
            "thumbHorizontalPadding": "0px",
            "radius": "25px",
        }

        if (this._config.slider_config instanceof Array) {
            slider_config = { ...slider_config, ...this._config.slider_config };
        }
        
        this.volume_slider = await this._helpers.createCardElement(slider_config);
        this.volume_slider.style = "flex: 0.9;";
        this.volume_slider.ontouchstart = (e) => {
            e.stopImmediatePropagation();
            if (this._config.enable_button_feedback) fireEvent(window, "haptic", "light");
        }
        this.volume_slider.addEventListener("input", (e) => {
            if (this._config.enable_slider_feedback) fireEvent(window, "haptic", "light");
        }, true);

        this.volume_slider.hass = this._hass;
    }

    sendKey(key) {
        let entity_id = this._config.entity;

        this._hass.callService("media_player", "play_media", {
            media_content_id: key,
            media_content_type: "send_key",
        }, { entity_id: entity_id });
    }

    changeSource(source) {
        let entity_id = this._config.entity;

        this._hass.callService("media_player", "select_source", {
            source: source,
            entity_id: entity_id,
        });
    }

    onClick(event) {
        event.stopImmediatePropagation();
        let click_action = () => {
            this.sendKey("KEY_ENTER");
            if (this._config.enable_button_feedback) fireEvent(window, "haptic", "light");
        }
        if (this._config.enable_double_click) {
            timer = setTimeout(click_action, 200);
        } else {
            click_action();
        }
    }

    onDoubleClick(event) {
        if (!this._config.enable_double_click) return;

        event.stopImmediatePropagation();

        clearTimeout(timer);
        timer = null;

        this.sendKey(this._config.double_click_keycode? this._config.double_click_keycode : "KEY_RETURN");
        if (this._config.enable_button_feedback) fireEvent(window, "haptic", "success");
    }

    onTouchStart(event) {
        event.stopImmediatePropagation();

        holdaction = "KEY_ENTER";
        holdtimer = setTimeout(() => {
            //hold
            holdinterval = setInterval(() => {
                this.sendKey(holdaction);
                if (this._config.enable_button_feedback) fireEvent(window, "haptic", "light");
            }, 200);
        }, 700);
        window.initialX = event.touches[0].clientX;
        window.initialY = event.touches[0].clientY;
    }

    onTouchEnd(event) {
        clearTimeout(timer);
        clearTimeout(holdtimer);
        clearInterval(holdinterval);

        holdtimer = null;
        timer = null;
        holdinterval = null;
        holdaction = null;
    }
    
    onTouchMove(event) {
        if (!initialX || !initialY) {
            return;
        }
    
        var currentX = event.touches[0].clientX;
        var currentY = event.touches[0].clientY;
    
        var diffX = initialX - currentX;
        var diffY = initialY - currentY;
    
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // sliding horizontally
            let key = diffX > 0 ? "KEY_LEFT" : "KEY_RIGHT";
            holdaction = key;
            this.sendKey(key);
        } else {
            // sliding vertically
            let key = diffY > 0 ? "KEY_UP" : "KEY_DOWN";
            holdaction = key;
            this.sendKey(key);
        }

        if (this._config.enable_button_feedback) fireEvent(window, "haptic", "selection");
        initialX = null;
        initialY = null;
    }

    buildIconButton(action) {
        let icon = "";
        if (custom_keys.hasOwnProperty(action)) {
            icon = custom_keys[action][1];
        } else if (custom_sources.hasOwnProperty(action)) {
            icon = custom_sources[action][1];
        }

        return html`
            <ha-icon-button
                .action="${action}"
                @click="${this.handleActionClick}"
                title="${action}"
                .path="${icon}"
            </ha-icon-button>
        `;
    }

    render() {
        if (!this._config || !this._hass || !this.volume_slider) {
            return html ``;
        }

        const emptyButton = this.buildIconButton("");
        
        var power_row = [];
        if (this.isButtonEnabled("power_row", "power")) {
            power_row.push(this.buildIconButton("power"));
        } else if (this._config.use_empty_buttons) {
            power_row.push(emptyButton);
        }

        var channel_row = [];
        if (this.isButtonEnabled("channel_row", "channel_up")) {
            channel_row.push(
                this.buildIconButton("up")
            );
        } else if (this._config.use_empty_buttons) {
            channel_row.push(emptyButton);
        }
        
        if (this.isButtonEnabled("channel_row", "info")) {
            channel_row.push(
                this.buildIconButton("info")
            );
        } else if (this._config.use_empty_buttons) {
            channel_row.push(emptyButton);
        }

        if (this.isButtonEnabled("channel_row", "channel_down")) {
            channel_row.push(
                this.buildIconButton("down")
            );
        } else if (this._config.use_empty_buttons) {
            channel_row.push(emptyButton);
        }

        var apps_row = [];
        if (this.isButtonEnabled("apps_row", "netflix")) {
            apps_row.push(this.buildIconButton("netflix"));
        } else if (this._config.use_empty_buttons) {
            apps_row.push(emptyButton);
        }

        if (this.isButtonEnabled("apps_row", "spotify")) {
            apps_row.push(
                this.buildIconButton("spotify")
            );
        } else if (this._config.use_empty_buttons) {
            apps_row.push(emptyButton);
        }
        
        if (this.isButtonEnabled("apps_row", "youtube")) {
            apps_row.push(
                this.buildIconButton("youtube")
            );
        } else if (this._config.use_empty_buttons) {
            apps_row.push(emptyButton);
        }

        var media_control_row = [];
        if (this.isButtonEnabled("media_control_row", "rewind")) {
            media_control_row.push(
                this.buildIconButton("rewind")
            );
        } else if (this._config.use_empty_buttons) {
            media_control_row.push(emptyButton);
        }

        if (this.isButtonEnabled("media_control_row", "play")) {
            media_control_row.push(
                this.buildIconButton("play")
            );
        } else if (this._config.use_empty_buttons) {
            media_control_row.push(emptyButton);
        }

        if (this.isButtonEnabled("media_control_row", "pause")) {
            media_control_row.push(
                this.buildIconButton("pause")
            );
        } else if (this._config.use_empty_buttons) {
            media_control_row.push(emptyButton);
        }

        if (this.isButtonEnabled("media_control_row", "forward")) {
            media_control_row.push(
                this.buildIconButton("fast_forward")
            );
        } else if (this._config.use_empty_buttons) {
            media_control_row.push(emptyButton);
        }

        var volume_row = [];
        if (this._config.volume_row == "buttons") {
            volume_row = [
                this.buildIconButton("volume_minus"),
                this.buildIconButton("mute"),
                this.buildIconButton("volume_plus")
            ];
        } else if (this._config.volume_row == "slider") {
            volume_row = [this.volume_slider];
        }

        var touchpad = [html`
            <toucharea
                id="toucharea"
                @click="${this.onClick}"
                @dblclick="${this.onDoubleClick}"
                @touchstart="${this.onTouchStart}"
                @touchmove="${this.onTouchMove}"
                @touchend="${this.onTouchEnd}">
            </toucharea>
        `];

        var navigation_row = [];
        
        if (this.isButtonEnabled("navigation_row", "return")) {
            navigation_row.push(this.buildIconButton("left"));
        } else if (this._config.use_empty_buttons) {
            navigation_row.push(emptyButton);
        }
        
        if (this.isButtonEnabled("navigation_row", "home")) {
            navigation_row.push(this.buildIconButton("home"));
        } else if (this._config.use_empty_buttons) {
            navigation_row.push(emptyButton);
        }

        if (this.isButtonEnabled("navigation_row", "source")) {
            navigation_row.push(this.buildIconButton("source"));
        } else if (this._config.use_empty_buttons) {
            navigation_row.push(emptyButton);
        }
        
        var layout_map = {
            "power_row": power_row,
            "channel_row": channel_row,
            "apps_row": apps_row,
            "media_control_row": media_control_row,
            "volume_row": volume_row,
            "touchpad": touchpad,
            "navigation_row": navigation_row
        };

        var layout = (this._config.layout instanceof Array)? this._config.layout : [
            "power_row",
            "channel_row",
            "apps_row",
            "volume_row",
            "touchpad",
            "navigation_row",
            "media_control_row",
        ];

        var rows = layout.map(row => layout_map[row]);
        
        var rowIsEmpty = (arr) => (arr instanceof Array? arr.every(el => el === emptyButton) : false);
        var content = rows.filter(row => !rowIsEmpty(row));
        var content = content.map(row => html`
            <div class="row">
                ${row}
            </div>
        `);

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

    handleActionClick(e) {
        let action = e.currentTarget.action;
        
        if (custom_keys[action]) {
            this.sendKey(custom_keys[action]);
        } else if (custom_sources[action]) {
            this.changeSource(custom_sources[action]);
        }

        if (this._config.enable_button_feedback) fireEvent(window, "haptic", "light");
    }

    applyThemesOnElement(element, themes, localTheme) {
        if (!element._themes) {
            element._themes = {};
        }
        let themeName = themes.default_theme;
        if (localTheme === "default" || (localTheme && themes.themes[localTheme])) {
            themeName = localTheme;
        }
        const styles = Object.assign({}, element._themes);
        if (themeName !== "default") {
            var theme = themes.themes[themeName];
            Object.keys(theme).forEach((key) => {
            var prefixedKey = "--" + key;
            element._themes[prefixedKey] = "";
            styles[prefixedKey] = theme[key];
            });
        }
        if (element.updateStyles) {
            element.updateStyles(styles);
        } else if (window.ShadyCSS) {
            // implement updateStyles() method of Polemer elements
            window.ShadyCSS.styleSubtree(
            /** @type {!HTMLElement} */ (element),
            styles
            );
        }

        const meta = document.querySelector("meta[name=theme-color]");
        if (meta) {
            if (!meta.hasAttribute("default-content")) {
            meta.setAttribute("default-content", meta.getAttribute("content"));
            }
            const themeColor =
            styles["--primary-color"] || meta.getAttribute("default-content");
            meta.setAttribute("content", themeColor);
        }
    }
}

customElements.define("tv-card", TVCardServices);
