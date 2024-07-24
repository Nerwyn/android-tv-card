import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

import { IAction } from '../models';

@customElement('keyboard-dialog')
export class KeyboardDialog extends LitElement {
	@property() hass!: HomeAssistant;
	@state() haAction?: IAction;
	domain?: string;

	dialogOpen = false;
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

	kodiOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.hass.callService('kodi', 'call_method', {
				entity_id: this.haAction?.keyboard_id,
				method: 'Input.SendText',
				text: text,
				done: false,
			});
		}
		this.onKeyDownFired = false;
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
				command: `input keyevent ${outKey}`,
			});
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
		this.forceCursorToEnd();

		const text = e.clipboardData?.getData('Text');
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

	textBox(_e: InputEvent) {
		const text = ''; // TODO
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

	search(_e: InputEvent) {
		let promptText: string;
		switch (this.haAction?.platform) {
			case 'KODI':
				this.hass.callService('kodi', 'call_method', {
					entity_id: this.haAction?.keyboard_id,
					method: 'Addons.ExecuteAddon',
					addonid: 'script.globalsearch',
				});
			// fall through
			case 'ROKU':
			case 'FIRE TV':
				promptText = 'Global Search: ';
				break;
			case 'ANDROID TV':
			default:
				promptText = 'Google Assistant Search: ';
				break;
		}

		const text = prompt(promptText);
		if (text) {
			switch (this.haAction?.platform) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.haAction?.keyboard_id,
						method: 'Input.SendText',
						text: text,
						done: true,
					});
					break;
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
	}

	showDialog(e: CustomEvent) {
		this.haAction = e.detail;
		this.domain = (this.haAction?.keyboard_id ?? '').split('.')[0];
		this.textarea = this.shadowRoot?.querySelector(
			'textarea',
		) as HTMLTextAreaElement;
		this.textarea.focus();
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
				target.close();
				this.haAction = undefined;
				this.domain = undefined;
				this.textarea = undefined;
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
		let inputHandler;
		let keyDownHandler;
		switch (this.haAction?.action) {
			case 'search':
				break;
			case 'textbox':
				break;
			case 'keyboard':
			default:
				switch (this.haAction?.platform) {
					case 'KODI':
						inputHandler = this.kodiOnInput;
						keyDownHandler = this.forceCursorToEnd;
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
				textarea = html`<textarea
					spellcheck="false"
					autocorrect="off"
					autocomplete="off"
					autocapitalize="off"
					placeholder="Type something..."
					@input=${inputHandler}
					@keydown=${keyDownHandler}
					@paste=${this.keyboardOnPaste}
				></textarea>`;
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
				height: fit-content;
				width: 85%;
				display: inline-flex;
				flex-direction: column;
				position: fixed;
				margin-top: var(--header-height);
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
			dialog::backdrop {
				background: rgb(0, 0, 0);
				opacity: 0.7;
			}
		`;
	}
}
