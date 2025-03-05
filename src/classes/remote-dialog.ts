import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, IDialog, KeyboardPlatform } from '../models/interfaces';

import './dialogs/keyboards/adb-keyboard';
import './dialogs/keyboards/android-tv-keyboard';
import './dialogs/keyboards/kodi-keyboard';
import './dialogs/keyboards/roku-keyboard';
import './dialogs/keyboards/unified-remote-keyboard';
import './dialogs/keyboards/webos-keyboard';
import './dialogs/remote-confirmation-dialog';

@customElement('remote-dialog')
export class RemoteDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() config!: IDialog;
	@state() open: boolean = false;
	@state() fadedIn: boolean = false;
	fadedInTimer?: ReturnType<typeof setTimeout> = undefined;

	showDialog(config: IDialog) {
		this.config = config;
		this.open = true;
		this.fadedInTimer = setTimeout(() => {
			this.fadedIn = true;
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

	closeDialog(e?: Event) {
		e?.preventDefault();
		clearTimeout(this.fadedInTimer);
		this.fadedIn = false;
		this.open = false;

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
		if (this.fadedIn && this.config.type == 'confirmation') {
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
		const open = this.open && this.fadedIn;
		if (this.config) {
			className = this.config.type;
			switch (this.config.type) {
				case 'confirmation':
					content = html`<remote-confirmation-dialog
						.hass=${this.hass}
						.config=${this.config}
						.open=${open}
					></remote-confirmation-dialog>`;
					break;
				case 'keyboard':
				default:
					switch (this.config.action?.platform as KeyboardPlatform) {
						case 'Unified Remote':
							content = html`<unified-remote-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></unified-remote-keyboard>`;
							break;
						case 'Kodi':
							content = html`<kodi-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></kodi-keyboard>`;
							break;
						case 'LG webOS':
							content = html`<webos-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></webos-keyboard>`;
							break;
						case 'Roku':
							content = html`<roku-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></roku-keyboard>`;
							break;
						case 'Fire TV':
						case 'Sony BRAVIA':
							content = html`<adb-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></adb-keyboard>`;
							break;
						case 'Android TV':
						default:
							content = html`<android-tv-keyboard
								.hass=${this.hass}
								.action=${this.config.action ?? {}}
								.open=${open}
							></android-tv-keyboard>`;
							break;
					}
					break;
			}
		}

		return html`<dialog
			class="${className} ${this.open ? '' : 'closed'} ${this.fadedIn
				? 'faded-in'
				: 'faded-out'}"
			@dialog-close=${this.closeDialog}
			@cancel=${this.closeDialog}
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
				outline: none;
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
			dialog.closed {
				transform: translateY(-50px) !important;
				height: 0 !important;
				opacity: 0 !important;
				transition:
					transform 0.15s cubic-bezier(0.3, 0, 0, 1),
					height 0.15s cubic-bezier(0.3, 0, 0.8, 0.15),
					opacity 0.05s linear 0.025s !important;
			}

			dialog::backdrop {
				background-color: var(
					--md-sys-color-scrim-mode,
					var(
						--md-sys-color-scrim,
						var(--mdc-dialog-scrim-color, #000)
					)
				);
				--md-sys-color-scrim-mode: light-dark(
					var(--md-sys-color-scrim-light),
					var(--md-sys-color-scrim-dark)
				);
			}
			dialog.faded-in::backdrop {
				opacity: 0.32;
				transition: opacity 0.15s linear;
			}
			dialog.faded-out::backdrop {
				opacity: 0;
				transition: opacity 0.075s linear;
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
