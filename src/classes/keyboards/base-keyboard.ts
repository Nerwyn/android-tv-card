import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, KeyboardPlatform } from '../../models/interfaces';

import { IAction } from '../../models/interfaces';
import { waitForElement } from '../../utils';

@customElement('base-keyboard')
export class BaseKeyboard extends LitElement {
	@property() hass!: HomeAssistant;
	@property() config!: IAction;
	@property() open: boolean = false;

	domain?: string;
	service?: string;

	textarea?: HTMLTextAreaElement;
	onKeyDownFired: boolean = false;

	getRokuId(domain: 'remote' | 'media_player') {
		if ((this.config.keyboard_id ?? '').split('.')[0] != domain) {
			switch (domain) {
				case 'media_player':
					return this.config.media_player_id;
				case 'remote':
				default:
					return this.config.remote_id;
			}
		}
		return this.config.keyboard_id;
	}

	forceCursorToEnd() {
		this.textarea!.selectionStart = this.textarea!.value.length;
		this.textarea!.selectionEnd = this.textarea!.value.length;
	}

	forceCursorToEndEvent(e: Event) {
		e.preventDefault();
		this.forceCursorToEnd();
	}

	kodiOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		if (['Backspace', 'Enter'].includes(e.key)) {
			const text = this.textarea?.value ?? '';
			this.hass.callService('kodi', 'call_method', {
				entity_id: this.config.keyboard_id,
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
			entity_id: this.config.keyboard_id,
			method: 'Input.SendText',
			text: text,
			done: false,
		});
	}

	webosOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		if (['Backspace', 'Enter'].includes(e.key)) {
			const text = this.textarea?.value ?? '';
			this.hass.callService('webostv', 'command', {
				entity_id: this.config.keyboard_id,
				command: 'com.webos.service.ime/insertText',
				payload: {
					text: text,
					replace: true,
				},
			});
		}
	}

	webosOnInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const text = this.textarea?.value ?? '';
		this.hass.callService('webostv', 'command', {
			entity_id: this.config.keyboard_id,
			command: 'com.webos.service.ime/insertText',
			payload: {
				text: text,
				replace: true,
			},
		});
	}

	unifiedRemoteOnKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inKey = e.key;
		const keyToKey: Record<string, string> = {
			Backspace: 'back',
			Enter: 'enter',
		};
		const outKey = keyToKey[inKey ?? ''];
		if (outKey) {
			this.onKeyDownFired = true;
			this.hass.callService('unified_remote', 'call', {
				target: this.config.keyboard_id,
				remote_id: 'Core.Input',
				action: 'Press',
				extras: {
					Values: [
						{
							Value: outKey,
						},
					],
				},
			});
		}
	}

	unifiedRemoteOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.hass.callService('unified_remote', 'call', {
				target: this.config.keyboard_id,
				remote_id: 'Core.Input',
				action: 'Text',
				extras: {
					Values: [
						{
							Value: text,
						},
					],
				},
			});
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: 'back',
				insertLineBreak: 'enter',
			};
			const key = inputTypeToKey[inputType ?? ''];

			if (key) {
				this.hass.callService('unified_remote', 'call', {
					target: this.config.keyboard_id,
					remote_id: 'Core.Input',
					action: 'Press',
					extras: {
						Values: [
							{
								Value: key,
							},
						],
					},
				});
			}
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
				entity_id: this.config.keyboard_id,
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

	adbOnKeyDown(e: KeyboardEvent) {
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
			this.hass.callService(
				this.domain ?? 'remote',
				this.service ?? 'send_command',
				{
					entity_id: this.config.keyboard_id,
					command: `input keyevent ${outKey}`,
				},
			);
			if (inKey == 'Enter') {
				this.closeDialog();
			}
		}
	}

	adbOnInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.adbSendText(text);
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: '67',
				insertLineBreak: '66',
			};
			const key = inputTypeToKey[inputType ?? ''];
			if (key) {
				this.hass.callService(
					this.domain ?? 'remote',
					this.service ?? 'send_command',
					{
						entity_id: this.config.keyboard_id,
						command: `input keyevent ${key}`,
					},
				);
			}
		}
		this.onKeyDownFired = false;
	}

	adbSendText(text: string) {
		this.hass.callService(
			this.domain ?? 'remote',
			this.service ?? 'send_command',
			{
				entity_id: this.config.keyboard_id,
				command: `input text "${text}"`,
			},
		);
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
				entity_id: this.config.remote_id,
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
			this.adbSendText(text);
		} else if (!this.onKeyDownFired) {
			const inputTypeToKey: Record<string, string> = {
				deleteContentBackward: 'DEL',
				insertLineBreak: 'ENTER',
			};
			const key = inputTypeToKey[inputType ?? ''];
			if (key) {
				this.hass.callService('remote', 'send_command', {
					entity_id: this.config.remote_id,
					command: key,
				});
				if (inputType == 'insertLineBreak') {
					this.closeDialog();
				}
			}
		}
		this.onKeyDownFired = false;
	}

	keyboardOnPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		if (this.config.platform != 'Kodi') {
			this.forceCursorToEnd();
		}

		const text = e.clipboardData?.getData('Text');
		if (text) {
			switch (this.config.platform as KeyboardPlatform) {
				case 'Unified Remote':
					this.hass.callService('unified_remote', 'call', {
						target: this.config.keyboard_id,
						remote_id: 'Core.Input',
						action: 'Text',
						extras: {
							Values: [
								{
									Value: text,
								},
							],
						},
					});
					break;
				case 'Kodi':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.config.keyboard_id,
						method: 'Input.SendText',
						text: this.textarea?.value ?? '',
						done: false,
					});
					break;
				case 'LG webOS':
					this.hass.callService('webostv', 'command', {
						entity_id: this.config.keyboard_id,
						command: 'com.webos.service.ime/insertText',
						text: this.textarea?.value ?? '',
						replace: true,
					});
					break;
				case 'Roku':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.config.keyboard_id,
						command: `Lit_${text}`,
					});
					break;
				case 'Fire TV':
				case 'Sony BRAVIA':
				case 'Android TV':
				default:
					this.hass.callService(
						this.domain ?? 'remote',
						this.service ?? 'send_command',
						{
							entity_id: this.config.keyboard_id,
							command: `input text "${text}"`,
						},
					);
					break;
			}
		}
	}

	search(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			switch (this.config.platform as KeyboardPlatform) {
				case 'Kodi':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.config.keyboard_id,
						method: 'Input.SendText',
						text: text,
						done: true,
					});
					break;
				case 'LG webOS':
					break;
				case 'Roku':
					this.hass.callService('roku', 'search', {
						entity_id: this.getRokuId('media_player'),
						keyword: text,
					});
					break;
				case 'Fire TV':
				case 'Sony BRAVIA':
				case 'Android TV':
				default:
					this.hass.callService(
						this.domain ?? 'remote',
						this.service ?? 'send_command',
						{
							entity_id: this.config.keyboard_id,
							command: `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`,
						},
					);
					break;
			}
		}
		this.closeDialog();
	}

	textBox(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			switch (this.config.platform as KeyboardPlatform) {
				case 'Unified Remote':
					this.hass.callService('unified_remote', 'call', {
						target: this.config.keyboard_id,
						remote_id: 'Core.Input',
						action: 'Text',
						extras: {
							Values: [
								{
									Value: text,
								},
							],
						},
					});
					break;
				case 'Kodi':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.config.keyboard_id,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'LG webOS':
					this.hass.callService('webostv', 'command', {
						entity_id: this.config.keyboard_id,
						command: 'com.webos.service.ime/insertText',
						payload: {
							text: text,
							replace: true,
						},
					});
					break;
				case 'Roku':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.getRokuId('remote'),
						command: `Lit_${text}`,
					});
					break;
				case 'Fire TV':
				case 'Sony BRAVIA':
				case 'Android TV':
				default:
					this.hass.callService(
						this.domain ?? 'remote',
						this.service ?? 'send_command',
						{
							entity_id: this.config.keyboard_id,
							command: `input text "${text}"`,
						},
					);
					break;
			}
		}
		this.closeDialog();
	}

	enterDialog() {
		switch (this.config.platform as KeyboardPlatform) {
			case 'Unified Remote':
				this.hass.callService('unified_remote', 'call', {
					target: this.config.keyboard_id,
					remote_id: 'Core.Input',
					action: 'Press',
					extras: {
						Values: [
							{
								Value: 'enter',
							},
						],
					},
				});
				break;
			case 'Kodi':
				this.hass.callService('kodi', 'call_method', {
					entity_id: this.config.keyboard_id,
					method: 'Input.SendText',
					text: this.textarea?.value ?? '',
					done: true,
				});
				break;
			case 'LG webOS':
				this.hass.callService('webostv', 'command', {
					entity_id: this.config.keyboard_id,
					command: 'com.webos.service.ime/sendEnterKey',
				});
				break;
			case 'Roku':
				this.hass.callService('remote', 'send_command', {
					entity_id: this.getRokuId('remote'),
					command: 'enter',
				});
				break;
			case 'Fire TV':
			case 'Sony BRAVIA':
				this.hass.callService(
					this.domain ?? 'remote',
					this.service ?? 'send_command',
					{
						entity_id: this.config.keyboard_id,
						command: 'input keyevent 66',
					},
				);
				break;
			case 'Android TV':
			default:
				this.hass.callService('remote', 'send_command', {
					entity_id: this.config.remote_id,
					command: 'ENTER',
				});
				break;
		}
		this.closeDialog();
	}

	cancelDialog(e: Event) {
		e.preventDefault();
		this.closeDialog();
	}

	closeDialog(_e?: MouseEvent) {
		if (this.textarea) {
			this.textarea.value = '';
			this.textarea.blur();
		}
		this.domain = undefined;
		this.service = undefined;
		this.textarea = undefined;
		this.dispatchEvent(
			new Event('keyboard-dialog-close', {
				composed: true,
				bubbles: true,
			}),
		);
	}

	buildDialogButton(text: string, handler: (e: MouseEvent) => void) {
		return html`<div class="button">
			<button @click=${handler}></button>
			<span>${text}</span>
		</div>`;
	}

	render() {
		switch ((this.config.keyboard_id ?? '').split('.')[0]) {
			case 'media_player':
				this.domain = 'androidtv';
				this.service = 'adb_command';
				break;
			case 'remote':
			default:
				this.domain = 'remote';
				this.service = 'send_command';
				break;
		}

		if (this.config.platform == 'Kodi' && this.config.action == 'search') {
			this.hass.callService('kodi', 'call_method', {
				entity_id: this.config.keyboard_id,
				method: 'Addons.ExecuteAddon',
				addonid: 'script.globalsearch',
			});
		}

		let buttons = html``;
		let placeholder: string;
		let inputHandler: ((e: InputEvent) => void) | undefined;
		let keyDownHandler: ((e: KeyboardEvent) => void) | undefined;
		let pasteHandler: ((e: ClipboardEvent) => void) | undefined;
		let antiCursorMoveHandler: ((e: Event) => void) | undefined;
		switch (this.config.action) {
			case 'search':
				placeholder = 'Search for something...';
				buttons = html`${this.buildDialogButton(
					'Close',
					this.closeDialog,
				)}${this.buildDialogButton('Search', this.search)}`;
				break;
			case 'textbox':
				placeholder = 'Type something...';
				buttons = html`${this.buildDialogButton(
					'Close',
					this.closeDialog,
				)}${this.buildDialogButton('Send', this.textBox)}`;
				break;
			case 'keyboard':
			default:
				antiCursorMoveHandler = this.forceCursorToEndEvent;
				switch (this.config.platform as KeyboardPlatform) {
					case 'Unified Remote':
						inputHandler = this.unifiedRemoteOnInput;
						keyDownHandler = this.unifiedRemoteOnKeyDown;
						break;
					case 'Kodi':
						inputHandler = this.kodiOnInput;
						keyDownHandler = this.kodiOnKeyDown;
						antiCursorMoveHandler = undefined;
						break;
					case 'LG webOS':
						inputHandler = this.webosOnInput;
						keyDownHandler = this.webosOnKeyDown;
						antiCursorMoveHandler = undefined;
						break;
					case 'Roku':
						inputHandler = this.rokuOnInput;
						keyDownHandler = this.rokuOnKeyDown;
						break;
					case 'Fire TV':
					case 'Sony BRAVIA':
						inputHandler = this.adbOnInput;
						keyDownHandler = this.adbOnKeyDown;
						break;
					case 'Android TV':
					default:
						inputHandler = this.androidTvOnInput;
						keyDownHandler = this.androidTvOnKeyDown;
						break;
				}
				placeholder = 'Type something...';
				pasteHandler = this.keyboardOnPaste;
				buttons = html`${this.buildDialogButton(
					'Close',
					this.closeDialog,
				)}${this.buildDialogButton('Enter', this.enterDialog)}`;
				break;
		}
		placeholder = this.config.keyboard_prompt ?? placeholder;

		const textarea = html`<textarea
			spellcheck="false"
			autocorrect="off"
			autocomplete="off"
			autocapitalize="off"
			placeholder="${placeholder}"
			@input=${inputHandler}
			@keydown=${keyDownHandler}
			@paste=${pasteHandler}
			@keyup=${antiCursorMoveHandler}
			@click=${antiCursorMoveHandler}
			@select=${antiCursorMoveHandler}
			@cancel=${this.cancelDialog}
		></textarea>`;

		return html`${textarea}
			<div class="buttons">${buttons}</div>`;
	}

	updated() {
		if (this.open) {
			waitForElement(this.shadowRoot!, 'textarea').then((textarea) => {
				this.textarea = textarea as HTMLTextAreaElement;
				this.textarea?.focus();
			});
		}
	}

	static get styles() {
		return css`
			:host {
				-webkit-tap-highlight-color: transparent;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
				width: fill-available;
				width: -webkit-fill-available;
				width: -moz-available;
				display: inline-flex;
				flex-direction: row;
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
		`;
	}
}
