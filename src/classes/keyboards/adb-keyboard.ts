import { PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseKeyboard } from './base-keyboard';

@customElement('adb-keyboard')
export class ADBKeyboard extends BaseKeyboard {
	domain?: string;
	service?: string;

	keyMap = {
		Backspace: '67',
		Enter: '66',
	};
	inputMap = {
		deleteContentBackward: '67',
		insertLineBreak: '66',
	};

	sendText(text: string) {
		this.hass.callService(
			this.domain ?? 'remote',
			this.service ?? 'send_command',
			{
				entity_id: this.action.keyboard_id,
				command: `input text "${text}"`,
			},
		);
	}

	sendKey(key: string) {
		this.hass.callService(
			this.domain ?? 'remote',
			this.service ?? 'send_command',
			{
				entity_id: this.action.keyboard_id,
				command: `input keyevent ${key}`,
			},
		);
	}

	sendSearch(text: string) {
		this.hass.callService(
			this.domain ?? 'remote',
			this.service ?? 'send_command',
			{
				entity_id: this.action.keyboard_id,
				command: `am start -a "android.search.action.GLOBAL_SEARCH" --es query "${text}"`,
			},
		);
	}

	closeDialog(e?: MouseEvent) {
		this.domain = undefined;
		this.service = undefined;
		super.closeDialog(e);
	}

	updated(changedProperties: PropertyValues) {
		if (changedProperties.has('open') && !changedProperties.get('open')) {
			switch ((this.action.keyboard_id ?? '').split('.')[0]) {
				case 'media_player':
					this.domain = 'androidtv';
					this.service = 'adb_command';
					break;
				case 'remote':
				default:
					this.domain = 'remote';
					this.service = 'send_command';
					break;
			}
		}
		super.updated(changedProperties);
	}
}
