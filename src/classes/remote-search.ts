import { customElement } from 'lit/decorators.js';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-search')
export class RemoteSearch extends BaseKeyboardElement {
	onEnd(e: TouchEvent | MouseEvent) {
		if (!this.swiping) {
			e.stopImmediatePropagation();
			this.fireHapticEvent('light');

			let promptText: string;
			switch (this._keyboardMode) {
				case 'KODI':
					this.hass.callService('kodi', 'call_method', {
						entity_id: this._keyboardId,
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
				switch (this._keyboardMode) {
					case 'KODI':
						this.hass.callService('kodi', 'call_method', {
							entity_id: this._keyboardId,
							method: 'Input.SendText',
							text: text,
							done: true,
						});
						break;
					case 'ROKU':
						this.hass.callService('roku', 'search', {
							entity_id: this.getRokuId(
								this._keyboardId,
								'media_player',
							),
							keyword: text,
						});
						break;
					case 'FIRE TV':
					case 'ANDROID TV':
					default:
						this.hass.callService('androidtv', 'adb_command', {
							entity_id: this._keyboardId,
							command: `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`,
						});
						break;
				}
			}
		}
	}
}
