if (!customElements.get("paper-input")) {
  console.log("imported", "paper-input");
  import("https://unpkg.com/@polymer/paper-input/paper-input.js?module");
}

const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

const LitElement = Object.getPrototypeOf(
  customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

export class TVCardEditor extends LitElement {
  setConfig(config) {
    this._config = config;
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  get _name() {
    return this._config.name || "";
  }

  get _entity() {
    return this._config.entity || "";
  }

  get _remote() {
    return this._config.remote || "";
  }

  get _theme() {
    return this._config.theme;
  }

  get _tv() {
    return this._config.tv || false;
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    const themes = ["Backend-selected", "default"].concat(
      Object.keys(this.hass.themes.themes).sort()
    );

    const entities = Object.keys(this.hass.states).filter(
      eid => eid.substr(0, eid.indexOf(".")) === "media_player"
    );
    const remotes = [""].concat(
      Object.keys(this.hass.states).filter(
        eid => eid.substr(0, eid.indexOf(".")) === "remote"
      )
    );

    return html`
      ${this.renderStyle()}
      <div class="card-config">
        <div class="side-by-side">
          <paper-input
            label="Name (Optional)"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-dropdown-menu
            label="Entity"
            @value-changed="${this._valueChanged}"
            .configValue="${"entity"}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${entities.indexOf(this._entity)}"
            >
              ${
                entities.map(entity => {
                  return html`
                    <paper-item>${entity}</paper-item>
                  `;
                })
              }
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div class="side-by-side">
          <paper-dropdown-menu
            label="Remote (Optional)"
            @value-changed="${this._valueChanged}"
            .configValue="${"remote"}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${remotes.indexOf(this._remote)}"
            >
              ${
                remotes.map(remote => {
                  return html`
                    <paper-item>${remote}</paper-item>
                  `;
                })
              }
            </paper-listbox>
          </paper-dropdown-menu>

          <paper-dropdown-menu
            label="Theme (Optional)"
            @value-changed="${this._valueChanged}"
            .configValue="${"theme"}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${themes.indexOf(this._theme)}"
            >
              ${
                themes.map(theme => {
                  return html`
                    <paper-item>${theme}</paper-item>
                  `;
                })
              }
            </paper-listbox>
          </paper-dropdown-menu>
          <paper-toggle-button
            ?checked="${this._tv !== false}"
            .configValue="${"tv"}"
            @change="${this._valueChanged}"
            >Roku TV?</paper-toggle-button
          >
        </div>
        <div>Use the YAML editor if you need to specify custom services</div>
      </div>
    `;
  }

  renderStyle() {
    return html`
      <style>
        paper-toggle-button {
          padding-top: 16px;
        }
        .side-by-side {
          display: flex;
        }
        .side-by-side > * {
          flex: 1;
          padding-right: 4px;
        }
      </style>
    `;
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === "") {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]:
            target.checked !== undefined ? target.checked : target.value
        };
      }
    }
    fireEvent(this, "config-changed", { config: this._config });
  }
}

customElements.define("tv-card-editor", TVCardEditor);
