var LitElement =
  LitElement ||
  Object.getPrototypeOf(customElements.get("hui-error-entity-row"));
var html = LitElement.prototype.html;

class RokuCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _apps: {}
    };
  }

  constructor() {
    super();
  }

  getCardSize() {
    return 1;
  }

  setConfig(config) {
    if (!config.entity || !config.ip_address) {
      console.log("Invalid configuration");
      return;
    }

    this._config = config;

    const HttpApps = new XMLHttpRequest();
    HttpApps.open("GET", this._config.ip_address + ":8060/query/apps");
    HttpApps.send();
    HttpApps.onreadystatechange = e => {
      if (HttpApps.responseXML) {
        const appsXml = HttpApps.responseXML;
        const tags = appsXml.getElementsByTagName("app");
        let apps = [];
        for (let i = 0; i < tags.length && i < 4; i++) {
          const HttpIcon = new XMLHttpRequest();
          HttpIcon.open(
            "GET",
            this._config.ip_address +
              ":8060/query/icon/" +
              String(tags[i].getAttribute("id"))
          );
          HttpIcon.responseType = "arraybuffer";
          HttpIcon.onreadystatechange = e => {
            if (HttpIcon.response) {
              const data = new Uint8Array(HttpIcon.response);
              const raw = String.fromCharCode.apply(null, data);
              const base64 = btoa(raw);
              apps.push({
                id: tags[i].getAttribute("id"),
                name: tags[i].childNodes[0].nodeValue,
                icon: "data:image/jpeg;base64," + base64
              });
            }
          };
          HttpIcon.send();
        }
        this._apps = apps;
      }
    };
  }

  render() {
    if (!this._config || !this._apps || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];
    return html`
      ${this.renderStyle()}
      <ha-card .header="${this._config.title}">
        <div class="remote">
          ${
            stateObj.state === "playing"
              ? html`
                  <div class="row playing">${stateObj.attributes.source}</div>
                `
              : ""
          }
          <div class="row">
            <paper-icon-button
              .action="${"back"}"
              @click="${this.handleActionClick}"
              icon="mdi:arrow-left"
              title="Back"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"info"}"
              @click="${this.handleActionClick}"
              icon="mdi:asterisk"
              title="Info"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"home"}"
              @click="${this.handleActionClick}"
              icon="mdi:home"
              title="Home"
            ></paper-icon-button>
          </div>

          <div class="row">
            ${
              this._apps && this._apps.length > 0
                ? html`
                    <img
                      src="${this._apps[0].icon}"
                      .app="${this._apps[0].id}"
                      @click="${this.launchApp}"
                    />
                  `
                : ""
            }
            <paper-icon-button
              .action="${"up"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-up"
              title="Up"
            ></paper-icon-button>
            ${
              this._apps && this._apps.length > 1
                ? html`
                    <img
                      src="${this._apps[1].icon}"
                      .app="${this._apps[1].id}"
                      @click="${this.launchApp}"
                    />
                  `
                : ""
            }
          </div>

          <div class="row">
            <paper-icon-button
              .action="${"left"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-left"
              title="Left"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"select"}"
              @click="${this.handleActionClick}"
              icon="mdi:checkbox-blank-circle"
              title="Select"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"right"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-right"
              title="Right"
            ></paper-icon-button>
          </div>

          <div class="row">
            ${
              this._apps && this._apps.length > 2
                ? html`
                    <img
                      src="${this._apps[2].icon}"
                      .app="${this._apps[2].id}"
                      @click="${this.launchApp}"
                    />
                  `
                : ""
            }
            <paper-icon-button
              .action="${"down"}"
              @click="${this.handleActionClick}"
              icon="mdi:chevron-down"
              title="Down"
            ></paper-icon-button>
            ${
              this._apps && this._apps.length > 3
                ? html`
                    <img
                      src="${this._apps[3].icon}"
                      .app="${this._apps[3].id}"
                      @click="${this.launchApp}"
                    />
                  `
                : ""
            }
          </div>

          <div class="row">
            <paper-icon-button
              .action="${"rev"}"
              @click="${this.handleActionClick}"
              icon="mdi:rewind"
              title="Rewind"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"play"}"
              @click="${this.handleActionClick}"
              icon="mdi:play-pause"
              title="Play/Pause"
            ></paper-icon-button>
            <paper-icon-button
              .action="${"fwd"}"
              @click="${this.handleActionClick}"
              icon="mdi:fast-forward"
              title="Fast-Forward"
            ></paper-icon-button>
          </div>
        </div>
      </ha-card>
    `;
  }

  renderStyle() {
    return html`
      <style>
        .remote {
          padding: 16px 0px 16px 0px;
        }

        img,
        paper-icon-button {
          width: 64px;
          height: 64px;
          cursor: pointer;
        }

        img {
          border-radius: 25px;
        }

        .row {
          display: flex;
          padding: 8px 36px 8px 36px;
          justify-content: space-evenly;
        }

        .row.playing {
          padding-bottom: 36px;
          font-size: 2.5em;
          font-weight: bold;
          font-style: italic;
        }
      </style>
    `;
  }

  launchApp(e) {
    const Http = new XMLHttpRequest();
    const url = this._config.ip_address + ":8060/launch/" + e.currentTarget.app;
    Http.open("POST", url);
    Http.send();
  }

  handleActionClick(e) {
    const Http = new XMLHttpRequest();
    const url =
      this._config.ip_address + ":8060/keypress/" + e.currentTarget.action;
    Http.open("POST", url);
    Http.send();
  }
}

customElements.define("roku-card", RokuCard);
