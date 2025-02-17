import { LitElement, PropertyValues, css, html } from 'lit';
import { property } from 'lit/decorators.js';

import { HomeAssistant, IAction } from '../../models/interfaces';
import { querySelectorAsync } from '../../utils';

export class BaseKeyboard extends LitElement {
	@property() hass!: HomeAssistant;
	@property() action!: IAction;
	@property() open!: boolean;

	textarea?: HTMLTextAreaElement;
	onKeyDownFired: boolean = false;

	keyMap: Record<string, string> = {};
	inputMap: Record<string, string> = {};

	closeOnEnter: boolean = true;
	replaceOnSend: boolean = false;

	sendText(_text: string) {}
	sendKey(_text: string) {}
	sendSearch(_text: string) {}

	forceCursorToEnd(e?: Event) {
		if (!this.replaceOnSend) {
			e?.preventDefault();
			this.textarea!.selectionStart = this.textarea!.value.length;
			this.textarea!.selectionEnd = this.textarea!.value.length;
		}
	}

	onInput(e: InputEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inputType = e.inputType ?? '';
		const text = e.data ?? '';
		if (text && inputType == 'insertText') {
			this.sendText(text);
		} else if (!this.onKeyDownFired) {
			const key = this.inputMap[inputType ?? ''];
			if (key) {
				this.sendKey(key);
			}

			if (this.closeOnEnter && inputType == 'insertLineBreak') {
				this.closeDialog();
			}
		}
		this.onKeyDownFired = false;
	}

	onKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();
		this.forceCursorToEnd();

		const inKey = e.key;
		const outKey = this.keyMap[inKey ?? ''];
		if (outKey) {
			this.onKeyDownFired = true;
			if (this.replaceOnSend) {
				setTimeout(() => this.sendKey(outKey), 100);
			} else {
				this.sendKey(outKey);
			}
		}

		if (this.closeOnEnter && inKey == 'Enter') {
			if (this.replaceOnSend) {
				setTimeout(() => this.closeDialog(), 100);
			} else {
				this.closeDialog();
			}
		}
	}

	onPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();

		const text = e.clipboardData?.getData('Text');
		if (text) {
			if (this.replaceOnSend) {
				setTimeout(() => this.sendText(text), 100);
			} else {
				this.sendText(text);
			}
		}
	}

	textBox(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			this.sendText(text);
		}
		this.closeDialog();
	}

	search(_e: MouseEvent) {
		const text = this.textarea?.value;
		if (text) {
			this.sendSearch(text);
		}
		this.closeDialog();
	}

	enterDialog() {
		this.sendKey(this.keyMap['Enter']);
		this.closeDialog();
	}

	closeDialog(e?: MouseEvent) {
		e?.preventDefault();

		if (this.textarea) {
			this.textarea.value = '';
			this.textarea.blur();
		}
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
		let buttons = html``;
		let placeholder: string;
		let inputHandler: ((e: InputEvent) => void) | undefined;
		let keyDownHandler: ((e: KeyboardEvent) => void) | undefined;
		let pasteHandler: ((e: ClipboardEvent) => void) | undefined;
		let forceCursorToEndHandler: ((e: Event) => void) | undefined;

		switch (this.action.action) {
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
				placeholder = 'Type something...';
				buttons = html`${this.buildDialogButton(
					'Close',
					this.closeDialog,
				)}${this.buildDialogButton('Enter', this.enterDialog)}`;
				keyDownHandler = this.onKeyDown;
				inputHandler = this.onInput;
				pasteHandler = this.onPaste;
				forceCursorToEndHandler = this.forceCursorToEnd;
				break;
		}
		placeholder = this.action.keyboard_prompt ?? placeholder;

		const textarea = html`<textarea
			spellcheck="false"
			autocorrect="off"
			autocomplete="off"
			autocapitalize="off"
			placeholder="${placeholder}"
			@input=${inputHandler}
			@keydown=${keyDownHandler}
			@paste=${pasteHandler}
			@keyup=${forceCursorToEndHandler}
			@click=${forceCursorToEndHandler}
			@select=${forceCursorToEndHandler}
			@cancel=${this.closeDialog}
		></textarea>`;

		return html`${textarea}
			<div class="buttons">${buttons}</div>`;
	}

	updated(changedProperties: PropertyValues) {
		if (changedProperties.has('open') && !changedProperties.get('open')) {
			querySelectorAsync(this.shadowRoot!, 'textarea').then(
				(textarea) => {
					this.textarea = textarea as HTMLTextAreaElement;
					setTimeout(() => this.textarea?.focus(), 100);
				},
			);
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
				width: fill-available;
				width: -webkit-fill-available;
				width: -moz-available;
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
					background: var(
						--ha-ripple-hover-color,
						var(
							--ha-ripple-color,
							var(
								--md-ripple-hover-color,
								var(--secondary-text-color)
							)
						)
					);
					opacity: var(
						--ha-ripple-hover-opacity,
						var(--md-ripple-hover-opacity, 0.08)
					);
				}
			}
			button:active {
				background: var(
					--ha-ripple-pressed-color,
					var(
						--ha-ripple-color,
						var(
							--md-ripple-pressed-color,
							var(--secondary-text-color)
						)
					)
				);
				opacity: var(
					--ha-ripple-pressed-opacity,
					var(--md-ripple-pressed-opacity, 0.12)
				);
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
