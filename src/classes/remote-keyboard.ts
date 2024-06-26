import { CSSResult, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-keyboard')
export class RemoteKeyboard extends BaseKeyboardElement {
	onEnd(e: TouchEvent | MouseEvent) {
		if (!this.swiping) {
			e.stopImmediatePropagation();
			this.fireHapticEvent('light');
			for (const element of (e.currentTarget as HTMLElement).children) {
				if (element.nodeName.toLowerCase() == 'input') {
					(element as HTMLInputElement).focus();
				}
			}
		}
	}

	onKeyDown(e: KeyboardEvent) {
		e.stopImmediatePropagation();

		const inKey = e.key;
		let outKey: string;
		let keyToKey: Record<string, string>;
		if (inKey) {
			if ((e.currentTarget as HTMLInputElement).value != '') {
				(e.currentTarget as HTMLInputElement).blur();
				(e.currentTarget as HTMLInputElement).value = '';
				(e.currentTarget as HTMLInputElement).focus();
			}

			switch (this.keyboardMode) {
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
							entity_id: this.getRokuId(),
							command: outKey,
						});
					}
					break;
				case 'FIRE':
				case 'FIRETV':
				case 'FIRE_TV':
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
						this.hass.callService('androidtv', 'adb_command', {
							entity_id: this.keyboardId,
							command: `input keyevent ${outKey}`,
						});
					}
					break;
				case 'ANDROID':
				case 'ANDROIDTV':
				case 'ANDROID_TV':
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
						this.sendCommand(outKey, 'tap_action');
					}
					break;
			}
		}
	}

	onInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const text = e.data;
		if (text) {
			switch (this.keyboardMode) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.keyboardId,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.getRokuId(),
						command: `Lit_${text}`,
					});
					break;
				case 'FIRE':
				case 'FIRETV':
				case 'FIRE_TV':
				case 'FIRE TV':
				case 'ANDROID':
				case 'ANDROIDTV':
				case 'ANDROID_TV':
				case 'ANDROID TV':
				default:
					this.hass.callService('androidtv', 'adb_command', {
						entity_id: this.keyboardId,
						command: `input text "${text}"`,
					});
					break;
			}
		}
	}

	onPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		e.preventDefault();

		const text = e.clipboardData?.getData('Text');
		if (text) {
			switch (this.keyboardMode) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this.keyboardId,
						method: 'Input.SendText',
						text: text,
						done: false,
					});
					break;
				case 'ROKU':
					this.hass.callService('remote', 'send_command', {
						entity_id: this.getRokuId(),
						command: `Lit_${text}`,
					});
					break;
				case 'FIRE':
				case 'FIRETV':
				case 'FIRE_TV':
				case 'FIRE TV':
				case 'ANDROID':
				case 'ANDROIDTV':
				case 'ANDROID_TV':
				case 'ANDROID TV':
				default:
					this.hass.callService('androidtv', 'adb_command', {
						entity_id: this.keyboardId,
						command: `input text "${text}"`,
					});
					break;
			}
		}

		(e.currentTarget as HTMLInputElement).blur();
		(e.currentTarget as HTMLInputElement).value = '';
		(e.currentTarget as HTMLInputElement).focus();
	}

	onFocus(e: InputEvent) {
		(e.currentTarget as HTMLInputElement).value = '';
		(
			(e.currentTarget as HTMLInputElement)
				.previousElementSibling as HTMLElement
		).style.setProperty('color', 'var(--state-active-color)');
		(e.currentTarget as HTMLInputElement).style.setProperty(
			'z-index',
			'9',
			'important',
		);
	}

	onFocusOut(e: InputEvent) {
		(e.currentTarget as HTMLInputElement).value = '';
		(
			(e.currentTarget as HTMLInputElement)
				.previousElementSibling as HTMLElement
		).style.removeProperty('color');
		(e.currentTarget as HTMLInputElement).style.removeProperty('z-index');
	}

	render() {
		const inputTemplate = html`
			<input
				spellcheck="false"
				autocorrect="off"
				autocomplete="off"
				autocapitalize="off"
				onchange="this.value=''"
				onkeyup="this.value=''"
				@focus=${this.onFocus}
				@focusout=${this.onFocusOut}
				@input=${this.onInput}
				@paste=${this.onPaste}
				@keydown=${this.onKeyDown}
			></input>
		`;
		return super.render(inputTemplate);
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				input {
					opacity: 0;
					filter: alpha(opacity=0);
					top: 0;
					left: 0;
					position: absolute;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					height: -moz-available;
					height: -webkit-fill-available;
					height: fill-available;
					z-index: 0;
				}
			`,
		];
	}
}
