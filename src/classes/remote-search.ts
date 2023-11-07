import { customElement } from 'lit/decorators.js';

import { IData } from '../models';
import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-search')
export class RemoteSearch extends BaseKeyboardElement {
	onClick(e: Event, _longpress: boolean) {
		e.stopImmediatePropagation();
		this.fireHapticEvent('light');

		let promptText: string;
		switch ((this.keyboardMode ?? '').toUpperCase()) {
			case 'KODI':
				promptText = 'Global Search: ';
				this.hass.callService('kodi', 'call_method', {
					entity_id: this.keyboardId!,
					method: 'Addons.ExecuteAddon',
					addonid: 'script.globalsearch',
				});
				break;
			case 'ANDROID TV':
			default:
				promptText = 'Google Assistant Search: ';
				break;
		}

		const text = prompt(promptText);
		if (text) {
			let data: IData;
			switch ((this.keyboardMode ?? '').toUpperCase()) {
				case 'KODI':
					data = {
						entity_id: this.keyboardId,
						method: 'Input.SendText',
						text: text,
						done: true,
					};
					this.hass.callService('kodi', 'call_method', data);
					break;
				case 'ANDROID TV':
				default:
					data = {
						entity_id: this.keyboardId!,
						command:
							'am start -a "android.search.action.GLOBAL_SEARCH" --es query "' +
							text +
							'"',
					};
					this.hass.callService('androidtv', 'adb_command', data);
					break;
			}
		}
	}
}
