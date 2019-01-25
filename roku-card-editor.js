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

export class RokuCardEditor extends LitElement {
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
          ${
            customElements.get("ha-entity-picker")
              ? html`
                  <ha-entity-picker
                    .hass="${this.hass}"
                    .value="${this._entity}"
                    .configValue=${"entity"}
                    domain-filter="media_player"
                    @change="${this._valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>
                `
              : html`
                  <paper-input
                    label="Entity"
                    .value="${this._entity}"
                    .configValue="${"entity"}"
                    @value-changed="${this._valueChanged}"
                  ></paper-input>
                `
          }
          ${
            customElements.get("ha-entity-picker")
              ? html`
                  <ha-entity-picker
                    .hass="${this.hass}"
                    .value="${this._remote}"
                    .configValue=${"remote"}
                    domain-filter="remote"
                    @change="${this._valueChanged}"
                    allow-custom-entity
                  ></ha-entity-picker>
                `
              : html`
                  <paper-input
                    label="Remote (Optional)"
                    .value="${this._remote}"
                    .configValue="${"remote"}"
                    @value-changed="${this._valueChanged}"
                  ></paper-input>
                `
          }
          </div>
          <div class="side-by-side">
          ${
            customElements.get("hui-theme-select-editor")
              ? html`
                  <hui-theme-select-editor
                    .hass="${this.hass}"
                    .value="${this._theme}"
                    .configValue="${"theme"}"
                    @theme-changed="${this._valueChanged}"
                  ></hui-theme-select-editor>
                `
              : html`
                  <paper-input
                    label="Theme (Optional)"
                    .value="${this._theme}"
                    .configValue="${"theme"}"
                    @value-changed="${this._valueChanged}"
                  ></paper-input>
                `
          }
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

customElements.define("roku-card-editor", RokuCardEditor);
