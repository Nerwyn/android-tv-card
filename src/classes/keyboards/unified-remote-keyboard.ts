import { customElement } from 'lit/decorators.js';
import { BaseKeyboard } from './base-keyboard';

@customElement('unified-remote-keyboard')
export class UnifiedRemoteKeyboard extends BaseKeyboard {
	keyMap = {
		Backspace: 'back',
		Enter: 'enter',
	};
	inputMap = {
		deleteContentBackward: 'back',
		insertLineBreak: 'enter',
	};
	closeOnEnter = false;

	sendText(text: string) {
		this.hass.callService('unified_remote', 'call', {
			target: this.config.keyboard_id,
			remote_id: 'Core.Input',
			action: 'Text',
			extras: {
				Values: [
					{
						Value: text,
					},
				],
			},
		});
	}

	sendKey(key: string) {
		this.hass.callService('unified_remote', 'call', {
			target: this.config.keyboard_id,
			remote_id: 'Core.Input',
			action: 'Press',
			extras: {
				Values: [
					{
						Value: key,
					},
				],
			},
		});
	}
}
