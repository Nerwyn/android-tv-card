import { HomeAssistant, HapticType, forwardHaptic } from 'custom-card-helpers';

import { LitElement, CSSResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';

import { IData, IKey, ISource, IAction } from '../models';
import { renderTemplate } from '../utils';

@customElement('base-remote-element')
export class BaseRemoteElement extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) hapticEnabled?: boolean;
	@property({ attribute: false }) remoteId?: string;
	@property({ attribute: false }) _style?: StyleInfo;

	longPress?: boolean = false;

	fireHapticEvent(haptic: HapticType) {
		if (
			renderTemplate(
				this.hass,
				this.hapticEnabled as unknown as string,
			) ??
			true
		) {
			forwardHaptic(haptic);
		}
	}

	sendAction(info: IAction, longPress: boolean = false) {
		if ('key' in info) {
			const key = (info as IKey).key;
			this.sendCommand(key, longPress);
		} else if ('source' in info) {
			this.changeSource((info as ISource).source);
		} else if ('service' in info) {
			const data = structuredClone(info.data || {});
			for (const key in data) {
				data[key] = renderTemplate(this.hass, data[key] as string);
			}
			if (longPress && info.service == 'remote.send_command') {
				data.hold_secs = 0.5;
			}
			const [domain, service] = renderTemplate(
				this.hass,
				info.service,
			).split('.', 2);
			this.hass.callService(domain, service, data);
		}
	}

	sendCommand(key: string, longPress: boolean = false) {
		const data: IData = {
			entity_id: renderTemplate(this.hass, this.remoteId as string),
			command: renderTemplate(this.hass, key),
		};
		if (longPress) {
			data.hold_secs = 0.5;
		}
		this.hass.callService('remote', 'send_command', data);
	}

	changeSource(source: string) {
		this.hass.callService('remote', 'turn_on', {
			entity_id: renderTemplate(this.hass, this.remoteId as string),
			activity: renderTemplate(this.hass, source),
		});
	}

	render() {}

	static get styles(): CSSResult | CSSResult[] {
		return css``;
	}
}
