import { customElement } from 'lit/decorators.js';

import { IData } from '../models';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-search')
export class RemoteSearch extends BaseKeyboardElement {
	onEnd(e: TouchEvent | MouseEvent) {
		if (!this.swiping) {
			e.stopImmediatePropagation();
			this.fireHapticEvent('light');

			let promptText: string;
			const entityId = this.renderTemplate(this.keyboardId);
			switch (
				(this.renderTemplate(this.keyboardMode) as string).toUpperCase()
			) {
				case 'KODI':
					promptText = 'Global Search: ';
					this.hass.callService('kodi', 'call_method', {
						entity_id: entityId,
						method: 'Addons.ExecuteAddon',
						addonid: 'script.globalsearch',
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
					promptText = 'Google Assistant Search: ';
					break;
			}

			const text = prompt(promptText);
			if (text) {
				const data: IData = {
					entity_id: entityId,
				};
				switch (
					(
						this.renderTemplate(this.keyboardMode) as string
					).toUpperCase()
				) {
					case 'KODI':
						data.method = 'Input.SendText';
						data.text = text;
						data.done = true;
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
						data.command = `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`;
						this.hass.callService('androidtv', 'adb_command', data);
						break;
				}
			}
		}
	}
}
