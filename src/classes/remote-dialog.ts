import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, IDialog, KeyboardPlatform } from '../models/interfaces';

import './dialogs/confirmation-dialog';
import './dialogs/keyboards/adb-keyboard';
import './dialogs/keyboards/android-tv-keyboard';
import './dialogs/keyboards/kodi-keyboard';
import './dialogs/keyboards/roku-keyboard';
import './dialogs/keyboards/unified-remote-keyboard';
import './dialogs/keyboards/webos-keyboard';

@customElement('remote-dialog')
export class RemoteDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() config!: IDialog;
	@state() open: boolean = false;

	outsideClickAnimation: boolean = false;

	showDialog(e: CustomEvent) {
		this.config = e.detail;
		this.open = true;
		setTimeout(() => {
			this.outsideClickAnimation = true;
		}, 250);

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
		this.outsideClickAnimation = false;
		setTimeout(() => {
			this.outsideClickAnimation = false;
		}, 250);

		const dialog = this.shadowRoot?.querySelector('dialog');
		if (dialog) {
			setTimeout(() => {
				try {
					dialog.close();
				} catch {
					dialog.showModal();
					dialog.close();
				}
				window.removeEventListener('popstate', () =>
					this.closeDialog(),
				);
			}, 140);
		}
	}

	onClick(e: MouseEvent) {
		if (this.outsideClickAnimation && this.config.type == 'confirmation') {
			const rect = (e.target as HTMLElement)?.getBoundingClientRect();
			if (
				rect &&
				(rect.left > e.clientX ||
					rect.right < e.clientX ||
					rect.top > e.clientY ||
					rect.bottom < e.clientY)
			) {
				const dialog = this.shadowRoot?.querySelector('dialog');
				dialog?.animate(
					[
						{
							transform: 'rotate(-1deg)',
							'animation-timing-function': 'ease-in',
						},
						{
							transform: 'rotate(1.5deg)',
							'animation-timing-function': 'ease-out',
						},
						{
							transform: 'rotate(0deg)',
							'animation-timing-function': 'ease-in',
						},
					],
					{
						duration: 200,
						iterations: 2,
					},
				);
			}
		}
	}

	render() {
		let content = html``;
		let className = '';
		if (this.config) {
			className = this.config.type;
			switch (this.config.type) {
				case 'confirmation':
					content = html`<confirmation-dialog
						.hass=${this.hass}
						.config=${this.config}
					></confirmation-dialog>`;
					break;
				case 'keyboard':
				default:
					switch (this.config.action?.platform as KeyboardPlatform) {
						case 'Unified Remote':
							content = html`<unified-remote-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></unified-remote-keyboard>`;
							break;
						case 'Kodi':
							content = html`<kodi-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></kodi-keyboard>`;
							break;
						case 'LG webOS':
							content = html`<webos-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></webos-keyboard>`;
							break;
						case 'Roku':
							content = html`<roku-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></roku-keyboard>`;
							break;
						case 'Fire TV':
						case 'Sony BRAVIA':
							content = html`<adb-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></adb-keyboard>`;
							break;
						case 'Android TV':
						default:
							content = html`<android-tv-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${this.open}
							></android-tv-keyboard>`;
							break;
					}
					break;
			}
		}

		return html`<dialog
			class="${className} ${this.open ? '' : 'closed'}"
			@dialog-open=${this.showDialog}
			@dialog-close=${this.closeDialog}
			@click=${this.onClick}
		>
			${content}
		</dialog>`;
	}

	static get styles() {
		return css`
			:host {
				-webkit-tap-highlight-color: transparent;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			}

			dialog {
				padding: 24px;
				pointer-events: none;
				display: inline-flex;
				flex-direction: column;
				position: fixed;
				border: none;
				background: var(
					--ha-card-background,
					var(--card-background-color, #fff)
				);
				border-radius: var(--ha-card-border-radius, 12px);
			}
			dialog[open] {
				pointer-events: all;
				transform: translateY(0);
				height: fit-content;
				opacity: 1;
				transition:
					transform 0.5s cubic-bezier(0.3, 0, 0, 1),
					height 0.5s cubic-bezier(0.2, 0, 0, 1),
					opacity 0.05s linear;
			}
			dialog::backdrop {
				background-color: var(
					--mdc-dialog-scrim-color,
					rgba(0, 0, 0, 0.32)
				);
			}
			.closed {
				transform: translateY(-50px) !important;
				height: 0 !important;
				opacity: 0 !important;
				transition:
					transform 0.15s cubic-bezier(0.3, 0, 0, 1),
					height 0.15s cubic-bezier(0.3, 0, 0.8, 0.15),
					opacity 0.05s linear 0.025s !important;
			}

			.keyboard {
				width: 85%;
			}

			.confirmation {
				width: fit-content;
				min-width: 320px;
			}
		`;
	}
}
