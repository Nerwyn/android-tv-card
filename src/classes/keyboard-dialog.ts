import { HomeAssistant } from 'custom-card-helpers';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { IAction } from '../models';

@customElement('keyboard-dialog')
export class KeyboardDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() haAction?: IAction;
	domain?: string;

	textarea?: HTMLTextAreaElement;
	onKeyDownFired: boolean = false;

	getRokuId(domain: 'remote' | 'media_player') {
		if ((this.haAction?.keyboard_id ?? '').split('.')[0] != domain) {
			switch (domain) {
				case 'media_player':
					return this.haAction?.media_player_id;
				case 'remote':
				default:
					return this.haAction?.remote_id;
			}
		}
		return this.haAction?.keyboard_id;
	}

	forceCursorToEnd() {
		// TODO prevent cursor from moving on arrow key or space
		this.textarea!.selectionStart = this.textarea!.value.length;
		this.textarea!.selectionEnd = this.textarea!.value.length;
	}

	keyboardOnClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();
	}

	kodiOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		if (['Backspace', 'Enter'].includes(e.key)) {
			const text = this.textarea?.value ?? '';
			this.hass.callService('kodi', 'call_method', {
				entity_id: this.haAction?.keyboard_id,
				method: 'Input.SendText',
				text: text,
				done: false,
			});
		}
	}

	kodiOnInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const text = this.textarea?.value ?? '';
		this.hass.callService('kodi', 'call_method', {
			entity_id: this.haAction?.keyboard_id,
			method: 'Input.SendText',
			text: text,
			done: false,
		});
	}

	rokuOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inKey = e.key;
		const keyToKey: Record<string, string> = {
			Backspace: 'backspace',
			Enter: 'enter',
		};
		const outKey = keyToKey[inKey ?? ''];
		if (outKey) {
			this.onKeyDownFired = true;
			this.hass.callService('remote', 'send_command', {
				entity_id: this.getRokuId('remote'),
				command: outKey,
			});
			if (inKey == 'Enter') {
				this.closeDialog();
			}
		}
	}

	rokuOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.hass.callService('remote', 'send_command', {
				entity_id: this.haAction?.keyboard_id,
				command: `Lit_${text}`,
			});
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: 'backspace',
				insertLineBreak: 'enter',
			};
			const key = inputTypeToKey[inputType ?? ''];

			if (key) {
				this.hass.callService('remote', 'send_command', {
					entity_id: this.getRokuId('remote'),
					command: key,
				});
			}
		}
		this.onKeyDownFired = false;
	}

	fireTvOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inKey = e.key;
		const keyToKey: Record<string, string> = {
			Backspace: '67',
			Enter: '66',
		};
		const outKey = keyToKey[inKey ?? ''];

		if (outKey) {
			this.onKeyDownFired = true;
			let domain: string;
			let service: string;
			switch (this.haAction?.keyboard_id) {
				case 'media_player':
					domain = 'androidtv';
					service = 'adb_command';
					break;
				case 'remote':
				default:
					domain = 'remote';
					service = 'send_command';
					break;
			}
			this.hass.callService(domain, service, {
				entity_id: this.haAction?.keyboard_id,
				command: `input keyevent ${outKey}`,
			});
			if (inKey == 'Enter') {
				this.closeDialog();
			}
		}
	}

	fireTvOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.androidTvSendText(text);
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: '67',
				insertLineBreak: '66',
			};
			const key = inputTypeToKey[inputType ?? ''];

			if (key) {
				let domain: string;
				let service: string;
				switch (this.haAction?.keyboard_id) {
					case 'media_player':
						domain = 'androidtv';
						service = 'adb_command';
						break;
					case 'remote':
					default:
						domain = 'remote';
						service = 'send_command';
						break;
				}
				this.hass.callService(domain, service, {
					entity_id: this.haAction?.keyboard_id,
					command: `input keyevent ${key}`,
				});
			}
		}
		this.onKeyDownFired = false;
	}

	androidTvOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inKey = e.key;
		const keyToKey: Record<string, string> = {
			Backspace: 'DEL',
			Enter: 'ENTER',
		};
		const outKey = keyToKey[inKey ?? ''];
		if (outKey) {
			this.onKeyDownFired = true;
			this.hass.callService('remote', 'send_command', {
				entity_id: this.haAction?.remote_id,
				command: outKey,
			});
			if (inKey == 'Enter') {
				this.closeDialog();
			}
		}
	}

	androidTvOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.androidTvSendText(text);
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: 'DEL',
				insertLineBreak: 'ENTER',
			};
			const key = inputTypeToKey[inputType ?? ''];
			if (key) {
				this.hass.callService('remote', 'send_command', {
					entity_id: this.haAction?.remote_id,
					command: key,
				});
				if (inputType == 'insertLineBreak') {
					this.closeDialog();
				}
			}
		}
		this.onKeyDownFired = false;
	}

	androidTvSendText(text: string) {
		let domain: string;
		let service: string;
		switch (this.domain) {
			case 'media_player':
				domain = 'androidtv';
				service = 'adb_command';
				break;
			case 'remote':
			default:
				domain = 'remote';
				service = 'send_command';
				break;
		}
		this.hass.callService(domain, service, {
			entity_id: this.haAction?.keyboard_id,
			command: `input text "${text}"`,
		});
	}

	keyboardOnPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		if (this.haAction?.platform != 'KODI') {
			this.forceCursorToEnd();
		}

		const text = e.clipboardData?.getData('Text');
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.haAction?.keyboard_id,
						method: 'Input.SendText',
						text: this.textarea?.value ?? '',
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.haAction?.keyboard_id,
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
						entity_id: this.haAction?.keyboard_id,
						command: `input text "${text}"`,
					});
					break;
				}
			}
		}
	}

	textBox(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.haAction?.keyboard_id,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.getRokuId('remote'),
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
						entity_id: this.haAction?.keyboard_id,
						command: `input text "${text}"`,
					});
					break;
				}
			}
		}
		this.closeDialog();
	}

	search(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI': {
					const entityId = this.haAction?.keyboard_id;
					Promise.resolve(
						this.hass.callService('kodi', 'call_method', {
							entity_id: entityId,
							method: 'Addons.ExecuteAddon',
							addonid: 'script.globalsearch',
						}),
					);
					setTimeout(() => {
						this.hass.callService('kodi', 'call_method', {
							entity_id: entityId,
							method: 'Input.SendText',
							text: text,
							done: true,
						});
					}, 1000);
					break;
				}
				case 'ROKU':
					this.hass.callService('roku', 'search', {
						entity_id: this.getRokuId('media_player'),
						keyword: text,
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
						entity_id: this.haAction?.keyboard_id,
						command: `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`,
					});
					break;
				}
			}
		}
		this.closeDialog();
	}

	showDialog(e: CustomEvent) {
		this.haAction = e.detail;
		this.domain = (this.haAction?.keyboard_id ?? '').split('.')[0];
		const dialog = this.shadowRoot?.querySelector('dialog');
		if (dialog) {
			try {
				dialog.showModal();
			} catch {
				dialog.close();
				dialog.showModal();
			}
		}
		this.textarea = this.shadowRoot?.querySelector(
			'textarea',
		) as HTMLTextAreaElement;
		const textarea = this.textarea;
		setTimeout(() => {
			textarea.focus();
		}, 0.4);
	}

	closeDialog(_e?: MouseEvent) {
		const dialog = this.shadowRoot?.querySelector('dialog');
		if (dialog) {
			try {
				dialog.close();
			} catch {
				dialog.showModal();
				dialog.close();
			}
		}
		this.textarea!.value = '';
		this.textarea!.blur();
		this.haAction = undefined;
		this.domain = undefined;
		this.textarea = undefined;
	}

	buildDialogButton(text: string, handler: (e: MouseEvent) => void) {
		return html`<div class="button">
			<button @click=${handler}></button>
			<span>${text}</span>
		</div>`;
	}

	render() {
		let buttons = html``;
		let placeholder;
		let inputHandler;
		let keyDownHandler;
		let pasteHandler;
		let clickHandler: ((e: MouseEvent) => void) | undefined =
			this.keyboardOnClick;
		switch (this.haAction?.action) {
			case 'search':
				placeholder = 'Search for something...';
				buttons = html`${this.buildDialogButton(
					'Search',
					this.search,
				)}${this.buildDialogButton('Close', this.closeDialog)}`;
				break;
			case 'textbox':
				placeholder = 'Type something...';
				buttons = html`${this.buildDialogButton(
					'Send',
					this.textBox,
				)}${this.buildDialogButton('Close', this.closeDialog)}`;
				break;
			case 'keyboard':
			default:
				switch (this.haAction?.platform) {
					case 'KODI':
						inputHandler = this.kodiOnInput;
						keyDownHandler = this.kodiOnKeyDown;
						clickHandler = undefined;
						break;
					case 'ROKU':
						inputHandler = this.rokuOnInput;
						keyDownHandler = this.rokuOnKeyDown;
						break;
					case 'FIRE TV':
						inputHandler = this.fireTvOnInput;
						keyDownHandler = this.fireTvOnKeyDown;
						break;
					case 'ANDROID TV':
					default:
						inputHandler = this.androidTvOnInput;
						keyDownHandler = this.androidTvOnKeyDown;
						break;
				}
				placeholder = 'Type something...';
				pasteHandler = this.keyboardOnPaste;
				buttons = this.buildDialogButton('Close', this.closeDialog);
				break;
		}
		const textarea = html`<textarea
			spellcheck="false"
			autocorrect="off"
			autocomplete="off"
			autocapitalize="off"
			placeholder="${placeholder}"
			@input=${inputHandler}
			@keyup=${keyDownHandler}
			@paste=${pasteHandler}
			@click=${clickHandler}
		></textarea>`;

		return html`<dialog @keyboard-dialog-open=${this.showDialog}>
			${textarea}
			<div class="buttons">${buttons}</div>
		</dialog>`;
	}

	static get styles() {
		return css`
			dialog {
				height: 0px;
				width: 0px;
				display: inline-flex;
				flex-direction: column;
				position: fixed;
				margin-top: var(--header-height);
				z-index: 9;
				border: none;
				background: var(--ha-card-background);
				border-radius: var(--ha-card-border-radius);
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
			textarea {
				position: relative;
				height: 180px;
				padding: 8px;
				outline: none;
				background: none;
				border: none;
				resize: none;
				font-family: inherit;
				font-weight: 500;
				font-size: 30px;
			}
			.buttons {
				height: 36px;
				display: inline-flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				margin: 0 12px;
			}
			.button {
				height: 100%;
				width: min-content;
				align-content: center;
				cursor: pointer;
				border-radius: var(--mdc-shape-small, 4px);
				overflow: hidden;
			}
			button {
				height: 100%;
				width: 100%;
				background: 0px 0px;
				opacity: 1;
				border: none;
				overflow: hidden;
				cursor: pointer;
				padding: 0;
			}
			@media (hover: hover) {
				button:hover {
					background: var(--ha-ripple-color);
					opacity: var(--md-ripple-hover-opacity);
				}
			}
			button:active {
				background: var(--ha-ripple-color);
				opacity: var(--md-ripple-pressed-opacity);
			}
			.button span {
				font-family: inherit;
				font-size: var(--paper-font-body1_-_font-size);
				font-weight: 600;
				text-transform: uppercase;
				color: var(--mdc-theme-primary, #6200ee);
				user-select: none;
				-webkit-user-select: none;
				-moz-user-select: none;
				position: relative;
				top: -32px;
				padding: 0 8px;
				pointer-events: none;
			}
			dialog::backdrop {
				background: rgb(0, 0, 0);
				opacity: 0.7;
			}
		`;
	}
}
