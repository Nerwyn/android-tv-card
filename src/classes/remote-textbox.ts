import { customElement } from 'lit/decorators.js';

import { BaseKeyboardElement } from './base-keyboard-element';

@customElement('remote-textbox')
export class RemoteTextbox extends BaseKeyboardElement {
	onEnd(e: TouchEvent | MouseEvent) {
		if (!this.swiping) {
			e.stopImmediatePropagation();

			const text = prompt('Text Input: ');
			if (text) {
				switch (
					(
						this.renderTemplate(this.keyboardMode) as string
					).toUpperCase()
				) {
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
	}
}
