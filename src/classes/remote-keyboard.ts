import { CSSResult, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { renderTemplate } from 'ha-nunjucks';

import { IData } from '../models';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-keyboard')
export class RemoteKeyboard extends BaseKeyboardElement {
	onHoldEnd(e: TouchEvent | MouseEvent) {
		if (!this.holdMove) {
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

			switch (
				(
					renderTemplate(this.hass, this.keyboardMode) as string
				).toUpperCase()
			) {
				case 'KODI':
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

					this.hass.callService('androidtv', 'adb_command', {
						entity_id: renderTemplate(this.hass, this.keyboardId),
						command: `input keyevent ${outKey}`,
					});
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

					this.sendCommand(outKey, 'tap_action');
					break;
			}
		}
	}

	onInput(e: InputEvent) {
		e.stopImmediatePropagation();

		const keyToKey: Record<string, string> = {
			a: '29',
			b: '30',
			c: '31',
			d: '32',
			e: '33',
			f: '34',
			g: '35',
			h: '36',
			i: '37',
			j: '38',
			k: '39',
			l: '40',
			m: '41',
			n: '42',
			o: '43',
			p: '44',
			q: '45',
			r: '46',
			s: '47',
			t: '48',
			u: '49',
			v: '50',
			w: '51',
			x: '52',
			y: '53',
			z: '54',
		};
		let key: string;

		const text = e.data;
		if (text) {
			const data: IData = {
				entity_id: renderTemplate(this.hass, this.keyboardId),
			};
			switch (
				(
					renderTemplate(this.hass, this.keyboardMode) as string
				).toUpperCase()
			) {
				case 'KODI':
					data.method = 'Input.SendText';
					data.text = text;
					data.done = false;
					this.hass.callService('kodi', 'call_method', data);
					break;
				case 'FIRE':
				case 'FIRETV':
				case 'FIRE_TV':
				case 'FIRE TV':
					for (const letter of text) {
						key = keyToKey[letter];
						data.command = `input keyevent ${key}`;
						this.hass.callService('androidtv', 'adb_command', data);
					}
					break;
				case 'ANDROID':
				case 'ANDROIDTV':
				case 'ANDROID_TV':
				case 'ANDROID TV':
				default:
					data.command = `input text "${text}"`;
					this.hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}

	onPaste(e: ClipboardEvent) {
		e.stopImmediatePropagation();
		e.preventDefault();

		const text = e.clipboardData?.getData('Text');
		if (text) {
			const data: IData = {
				entity_id: renderTemplate(this.hass, this.keyboardId),
			};
			switch (
				(
					renderTemplate(this.hass, this.keyboardMode) as string
				).toUpperCase()
			) {
				case 'KODI':
					data.method = 'Input.SendText';
					data.text = text;
					data.done = false;
					this.hass.callService('kodi', 'call_method', data);
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
					data.command = `input text "${text}"`;
					this.hass.callService('androidtv', 'adb_command', data);
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
