import { customElement } from 'lit/decorators.js';

import { IData } from '../models';
import { renderTemplate } from '../utils';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-textbox')
export class RemoteTextbox extends BaseKeyboardElement {
	onClick(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();

		const text = prompt('Text Input: ');
		if (text) {
			const data: IData = {
				entity_id: renderTemplate(this.hass, this.keyboardId),
			};
			switch (
				renderTemplate(this.hass, this.keyboardMode).toUpperCase()
			) {
				case 'KODI':
					data.method = 'Input.SendText';
					data.text = text;
					data.done = false;
					this.hass.callService('kodi', 'call_method', data);
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
}
