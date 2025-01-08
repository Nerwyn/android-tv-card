import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, IAction, KeyboardPlatform } from '../models/interfaces';

import './keyboards/base-keyboard';

@customElement('keyboard-dialog')
export class KeyboardDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() config!: IAction;
	@state() open: boolean = false;

	showDialog(e: CustomEvent) {
		this.config = e.detail;
		this.open = true;

		const dialog = this.shadowRoot?.querySelector('dialog');
		if (dialog) {
			try {
				dialog.showModal();
			} catch {
				dialog.close();
				dialog.showModal();
			}
			window.addEventListener('popstate', () => this.closeDialog());
		}
	}

	closeDialog() {
		this.open = false;
		const dialog = this.shadowRoot?.querySelector('dialog');
		if (dialog) {
			try {
				dialog.close();
			} catch {
				dialog.showModal();
				dialog.close();
			}
			window.removeEventListener('popstate', () => this.closeDialog());
		}
	}

	render() {
		let keyboard = html``;
		if (this.config) {
			switch (this.config.platform as KeyboardPlatform) {
				case 'Android TV':
				default:
					// TODO add other keyboards
					keyboard = html`<base-keyboard
						.hass=${this.hass}
						.config=${this.config ?? {}}
						.open=${this.open}
					></base-keyboard>`;
					break;
			}
		}

		return html`<dialog
			@keyboard-dialog-open=${this.showDialog}
			@keyboard-dialog-close=${this.closeDialog}
		>
			${keyboard}
		</dialog>`;
	}

	static get styles() {
		return css`
			:host {
				-webkit-tap-highlight-color: transparent;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			}

			dialog {
				height: 0px;
				width: 0px;
				display: inline-flex;
				flex-direction: column;
				position: fixed;
				border: none;
				background: var(
					--ha-card-background,
					var(--card-background-color, #fff)
				);
				border-radius: var(--ha-card-border-radius, 12px);
				opacity: 0;
				transition: all 0.1s ease-in-out;
				pointer-events: none;
			}
			dialog[open] {
				height: fit-content;
				width: 85%;
				opacity: 1;
				transition: all 0.1s ease-in-out;
				pointer-events: all;
			}
			dialog::backdrop {
				background: rgb(0, 0, 0);
				opacity: 0.7;
			}
		`;
	}
}
