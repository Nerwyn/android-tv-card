import { HomeAssistant, HapticType, forwardHaptic } from 'custom-card-helpers';

import { LitElement, CSSResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';

import { IData } from '../models';

@customElement('base-remote-element')
export class BaseRemoteElement extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) hapticEnabled?: boolean;
	@property({ attribute: false }) remoteId!: string;
	@property({ attribute: false }) action!: string;
	@property({ attribute: false }) elementStyle?: StyleInfo;

	longPress?: boolean;

	constructor() {
		super();
		this.longPress = false;
	}

	fireHapticEvent(haptic: HapticType) {
		if (this.hapticEnabled ?? true) {
			forwardHaptic(haptic);
		}
	}

	sendCommand(key: string, longPress: boolean = false) {
		const data: IData = {
			entity_id: this.remoteId,
			command: key,
		};
		if (longPress) {
			data.hold_secs = 0.5;
		}
		this.hass.callService('remote', 'send_command', data);
	}

	changeSource(source: string) {
		this.hass.callService('remote', 'turn_on', {
			entity_id: this.remoteId,
			activity: source,
		});
	}

	render() {}

	static get styles(): CSSResult | CSSResult[] {
		return css``;
	}
}
