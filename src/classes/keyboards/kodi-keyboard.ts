import { PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseKeyboard } from './base-keyboard';

@customElement('kodi-keyboard')
export class KodiKeyboard extends BaseKeyboard {
	keyMap = {
		Backspace: 'Backspace',
		Enter: 'Enter',
	};
	inputMap = {
		Backspace: 'Backspace',
		Enter: 'Enter',
	};

	sendText(_text: string) {
		this.hass.callService('kodi', 'call_method', {
			entity_id: this.config.keyboard_id,
			method: 'Input.SendText',
			text: this.textarea?.value ?? '',
			done: false,
		});
	}

	sendKey(key: string) {
		this.hass.callService('kodi', 'call_method', {
			entity_id: this.config.keyboard_id,
			method: 'Input.SendText',
			text: this.textarea?.value ?? '',
			done: key == 'Enter',
		});
	}

	sendSearch(text: string) {
		this.hass.callService('kodi', 'call_method', {
			entity_id: this.config.keyboard_id,
			method: 'Input.SendText',
			text: text,
			done: true,
		});
	}

	updated(changedProperties: PropertyValues) {
		if (
			changedProperties.has('open') &&
			!changedProperties.get('open') &&
			this.config.action == 'search'
		) {
			this.hass.callService('kodi', 'call_method', {
				entity_id: this.config.keyboard_id,
				method: 'Addons.ExecuteAddon',
				addonid: 'script.globalsearch',
			});
		}
		super.updated(changedProperties);
	}
}
