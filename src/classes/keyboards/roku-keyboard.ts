import { customElement } from 'lit/decorators.js';
import { BaseKeyboard } from './base-keyboard';

@customElement('roku-keyboard')
export class RokuKeyboard extends BaseKeyboard {
	keyMap = {
		Backspace: 'backspace',
		Enter: 'enter',
	};
	inputMap = {
		deleteContentBackward: 'backspace',
		insertLineBreak: 'enter',
	};

	getRokuId(domain: 'remote' | 'media_player') {
		if ((this.action.keyboard_id ?? '').split('.')[0] != domain) {
			switch (domain) {
				case 'media_player':
					return this.action.media_player_id;
				case 'remote':
				default:
					return this.action.remote_id;
			}
		}
		return this.action.keyboard_id;
	}

	sendText(text: string) {
		this.hass.callService('remote', 'send_command', {
			entity_id: this.getRokuId('remote'),
			command: `Lit_${text}`,
		});
	}

	sendKey(key: string) {
		this.hass.callService('remote', 'send_command', {
			entity_id: this.getRokuId('remote'),
			command: key,
		});
	}

	sendSearch(text: string) {
		this.hass.callService('roku', 'search', {
			entity_id: this.getRokuId('media_player'),
			keyword: text,
		});
	}
}
