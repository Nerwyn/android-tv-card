import { LitElement, CSSResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';

import { HomeAssistant, HapticType, forwardHaptic } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';

import {
	IConfirmation,
	IData,
	IKey,
	ISource,
	IAction,
	Action,
} from '../models';

@customElement('base-remote-element')
export class BaseRemoteElement extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) info!: IAction;
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

	sendAction(
		info: Action,
		longPress: boolean = false,
		_doubleTap: boolean = false,
	) {
		if (!this.handleConfirmation(info)) {
			return;
		}

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
			const [domain, service] = (
				renderTemplate(this.hass, info.service) as string
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

	handleConfirmation(info: Action): boolean {
		if ('confirmation' in info) {
			let confirmation = info.confirmation;
			if (typeof confirmation == 'string') {
				confirmation = renderTemplate(
					this.hass,
					info.confirmation as string,
				) as unknown as boolean;
			}
			if (confirmation != false) {
				let text: string;
				if ('text' in (info.confirmation as IConfirmation)) {
					text = renderTemplate(
						this.hass,
						(info.confirmation as IConfirmation).text as string,
					) as string;
				} else {
					let actionText = '';
					if ('key' in info) {
						actionText = info.key;
					} else if ('source' in info) {
						actionText = info.source;
					} else if ('service' in info) {
						actionText = info.service;
					}
					text = `Are you sure you want to run action '${actionText}'?`;
				}
				if (info.confirmation == true) {
					if (!confirm(text)) {
						return false;
					}
				} else {
					if ('exemptions' in (info.confirmation as IConfirmation)) {
						if (
							!(info.confirmation as IConfirmation)
								.exemptions!.map((exemption) =>
									renderTemplate(this.hass, exemption.user),
								)
								.includes(this.hass.user.id)
						) {
							if (!confirm(text)) {
								return false;
							}
						}
					} else if (!confirm(text)) {
						return false;
					}
				}
			}
		}
		return true;
	}

	render() {}

	static get styles(): CSSResult | CSSResult[] {
		return css``;
	}
}
