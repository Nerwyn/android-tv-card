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
						this.renderTemplate(this._keyboardMode) as string
					).toUpperCase()
				) {
					case 'KODI':
						this.hass.callService('kodi', 'call_method', {
							entity_id: this._keyboardId,
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
					case 'FIRE TV':
					case 'ANDROID TV':
					default:
						this.hass.callService('androidtv', 'adb_command', {
							entity_id: this._keyboardId,
							command: `input text "${text}"`,
						});
						break;
				}
			}
		}
	}
}
