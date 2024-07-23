import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

import { IAction } from '../models';

@customElement('keyboard-dialog')
export class KeyboardDialog extends LitElement {
	@property() hass!: HomeAssistant;
	dialogOpen = false;

	haAction?: IAction;
	entityId?: string;
	domain?: string;

	keyboardOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		const inKey = e.key;
		let outKey: string;
		let keyToKey: Record<string, string>;
		if (inKey) {
			switch (this.haAction?.platform) {
				case 'KODI':
					break;
				case 'ROKU':
					keyToKey = {
						Backspace: 'backspace',
						Enter: 'enter',
						ArrowLeft: 'left',
						ArrowRight: 'right',
					};
					outKey = keyToKey[inKey ?? ''];

					if (outKey) {
						this.hass.callService('remote', 'send_command', {
							entity_id: this.entityId,
							command: outKey,
						});
					}
					break;
				case 'FIRE TV':
					keyToKey = {
						Backspace: '67',
						Delete: '112',
						Enter: '66',
						ArrowLeft: '21',
						ArrowRight: '22',
					};
					outKey = keyToKey[inKey ?? ''];

					if (outKey) {
						let domain: string;
						let service: string;
						switch (this.entityId) {
							case 'remote':
								domain = 'remote';
								service = 'send_command';
								break;
							case 'media_player':
							default:
								domain = 'androidtv';
								service = 'adb_command';
								break;
						}
						this.hass.callService(domain, service, {
							entity_id: this.entityId,
							command: `input keyevent ${outKey}`,
						});
					}
					break;
				case 'ANDROID TV':
				default:
					keyToKey = {
						Backspace: 'DEL',
						Delete: 'FOWARD_DEL',
						Enter: 'ENTER',
						ArrowLeft: 'DPAD_LEFT',
						ArrowRight: 'DPAD_RIGHT',
					};
					outKey = keyToKey[inKey ?? ''];

					if (outKey) {
						this.hass.callService('remote', 'send_command', {
							entity_id: this.entityId,
							command: outKey,
						});
					}
					break;
			}
		}
	}

	keyboardOnInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const text = e.data;
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.entityId,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.entityId,
						command: `Lit_${text}`,
					});
					break;
				case 'FIRE TV':
				case 'ANDROID TV':
				default: {
					let domain: string;
					let service: string;
					switch (this.domain) {
						case 'remote':
							domain = 'remote';
							service = 'send_command';
							break;
						case 'media_player':
						default:
							domain = 'androidtv';
							service = 'adb_command';
							break;
					}
					this.hass.callService(domain, service, {
						entity_id: this.entityId,
						command: `input text "${text}"`,
					});
					break;
				}
			}
		}
	}

	keyboardOnPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		e.preventDefault();

		const text = e.clipboardData?.getData('Text');
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.entityId,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.entityId,
						command: `Lit_${text}`,
					});
					break;
				case 'FIRE TV':
				case 'ANDROID TV':
				default: {
					let domain: string;
					let service: string;
					switch (this.domain) {
						case 'remote':
							domain = 'remote';
							service = 'send_command';
							break;
						case 'media_player':
						default:
							domain = 'androidtv';
							service = 'adb_command';
							break;
					}
					this.hass.callService(domain, service, {
						entity_id: this.entityId,
						command: `input text "${text}"`,
					});
					break;
				}
			}
		}
	}

	showDialog(e: CustomEvent) {
		this.haAction = e.detail;
		this.entityId = (this.haAction?.target?.entity_id ??
			this.haAction?.data?.entity_id ??
			'') as string;
		this.domain = this.entityId.split('.')[0];

		setTimeout(() => {
			this.dialogOpen = true;
		}, 500);
		this.shadowRoot?.querySelector('dialog')?.showModal();
	}

	closeDialog(e: MouseEvent) {
		const target = e.target as HTMLDialogElement;
		if (this.dialogOpen) {
			const rect = target.getBoundingClientRect();
			const isInDialog =
				rect.top <= e.clientY &&
				e.clientY <= rect.top + rect.height &&
				rect.left <= e.clientX &&
				e.clientX <= rect.left + rect.width;

			if (!isInDialog) {
				this.haAction = undefined;
				this.entityId = undefined;
				this.domain = undefined;

				target.close();
				this.dialogOpen = false;
				const textarea = target.querySelector('textarea');
				if (textarea) {
					textarea.value = '';
					textarea.blur();
				}
			}
		}
	}

	render() {
		let textarea = html``;
		switch (this.haAction?.action) {
			case 'search':
				break;
			case 'textbox':
				break;
			case 'keyboard':
			default:
				textarea = html`<textarea
					spellcheck="false"
					autocorrect="off"
					autocomplete="off"
					autocapitalize="off"
					placeholder="Type something..."
					@input=${this.keyboardOnInput}
					@keydown=${this.keyboardOnKeyDown}
					@paste=${this.keyboardOnPaste}
				></textarea> `;
				break;
		}

		return html`<dialog
			@keyboard-dialog-open=${this.showDialog}
			@mousedown=${this.closeDialog}
		>
			${textarea}
		</dialog>`;
	}

	static get styles() {
		return css`
			dialog {
				height: 40%;
				width: 85%;
				display: block;
				position: fixed;
				z-index: 9;
				border: none;
				background: var(--ha-card-background);
				border-radius: var(--ha-card-border-radius);
				pointer-events: none;
				opacity: 0;
				transition: all 0.2s;
			}
			dialog[open] {
				opacity: 1;
				pointer-events: all;
				transition: all 0.2s;
			}
			dialog textarea {
				position: relative;
				height: 90%;
				width: 90%;
				top: 5%;
				left: 5%;
				outline: none;
				background: none;
				border: none;
				resize: none;
				font-family: inherit;
				font-weight: 500;
				font-size: 30px;
			}
			dialog::backdrop {
				background: rgb(0, 0, 0);
				opacity: 0.7;
			}
		`;
	}
}
