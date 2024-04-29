import { customElement } from 'lit/decorators.js';

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
					this.hass.callService('kodi', 'call_method', {
						entity_id: entityId,
						method: 'Addons.ExecuteAddon',
						addonid: 'script.globalsearch',
					});
				// fall through
				case 'ROKU':
				case 'FIRE':
				case 'FIRETV':
				case 'FIRE_TV':
				case 'FIRE TV':
					promptText = 'Global Search: ';
					break;
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
				switch (
					(
						this.renderTemplate(this.keyboardMode) as string
					).toUpperCase()
				) {
					case 'KODI':
						this.hass.callService('kodi', 'call_method', {
							entity_id: entityId,
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
							entity_id: entityId,
							command: `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`,
						});
						break;
				}
			}
		}
	}
}
