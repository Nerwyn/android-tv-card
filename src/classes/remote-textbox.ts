import { customElement } from 'lit/decorators.js';

import { IData } from '../models';
import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-textbox')
export class RemoteTextbox extends BaseKeyboardElement {
	onClick(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();

		const text = prompt('Text Input: ');
		if (text) {
			let data: IData;
			switch ((this.keyboardMode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this.keyboardId!,
						method: 'Input.SendText',
						text: text,
						done: false,
					};
					this.hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this.keyboardId!,
						command: 'input text "' + text + '"',
					};
					this.hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}
}
