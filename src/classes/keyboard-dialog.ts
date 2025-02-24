import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, IAction, KeyboardPlatform } from '../models/interfaces';

import './keyboards/adb-keyboard';
import './keyboards/android-tv-keyboard';
import './keyboards/kodi-keyboard';
import './keyboards/roku-keyboard';
import './keyboards/unified-remote-keyboard';
import './keyboards/webos-keyboard';

@customElement('keyboard-dialog')
export class KeyboardDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() action!: IAction;
	@state() open: boolean = false;

	showDialog(e: CustomEvent) {
		this.action = e.detail;
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
		if (this.action) {
			switch (this.action.platform as KeyboardPlatform) {
				case 'Unified Remote':
					keyboard = html`<unified-remote-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></unified-remote-keyboard>`;
					break;
				case 'Kodi':
					keyboard = html`<kodi-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></kodi-keyboard>`;
					break;
				case 'LG webOS':
					keyboard = html`<webos-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></webos-keyboard>`;
					break;
				case 'Roku':
					keyboard = html`<roku-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></roku-keyboard>`;
					break;
				case 'Fire TV':
				case 'Sony BRAVIA':
					keyboard = html`<adb-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></adb-keyboard>`;
					break;
				case 'Android TV':
				default:
					keyboard = html`<android-tv-keyboard
						.hass=${this.hass}
						.action=${this.action ?? {}}
						.open=${this.open}
					></android-tv-keyboard>`;
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
				height: fit-content;
				width: 85%;
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
				pointer-events: none;
				transform: scale(0);
			}
			dialog[open] {
				opacity: 1;
				transform: scale(1);
				pointer-events: all;
				transition: all 0.1s ease-in-out;
			}
			dialog::backdrop {
				background-color: var(
					--mdc-dialog-scrim-color,
					rgba(0, 0, 0, 0.32)
				);
			}
		`;
	}
}
