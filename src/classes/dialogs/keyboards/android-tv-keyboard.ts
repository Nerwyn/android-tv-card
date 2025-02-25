import { customElement } from 'lit/decorators.js';
import { ADBKeyboard } from './adb-keyboard';

@customElement('android-tv-keyboard')
export class AndroidTVKeyboard extends ADBKeyboard {
	keyMap = {
		Backspace: 'DEL',
		Enter: 'ENTER',
	};
	inputMap = {
		deleteContentBackward: 'DEL',
		insertLineBreak: 'ENTER',
	};

	sendKey(key: string) {
		this.hass.callService('remote', 'send_command', {
			entity_id: this.action.remote_id,
			command: key,
		});
	}
}
