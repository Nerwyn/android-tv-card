import { LitElement, CSSResult, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';

import { HomeAssistant, HapticType, forwardHaptic } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';

import { IConfirmation, IData, IActions, IAction, ActionType } from '../models';

@customElement('base-remote-element')
export class BaseRemoteElement extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) actions!: IActions;
	@property({ attribute: false }) hapticEnabled?: boolean;
	@property({ attribute: false }) remoteId?: string;
	@property({ attribute: false }) _style?: StyleInfo;

	hold?: boolean = false;

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

	sendAction(actionType: ActionType, actions: IActions = this.actions) {
		let action;
		switch (actionType) {
			case 'hold_action':
				action = actions.hold_action ?? actions.tap_action!;
				break;
			case 'double_tap_action':
				action = actions.double_tap_action ?? actions.tap_action!;
				break;
			case 'tap_action':
			default:
				action = actions.tap_action!;
				break;
		}

		if (!this.handleConfirmation(action)) {
			return;
		}

		switch (action.action) {
			case 'navigate':
			case 'url':
				this.navigate(action);
				break;
			case 'assist':
			case 'none':
				break;
			case 'call-service':
				this.callService(
					action.service!,
					structuredClone(action.data || {}),
					actionType,
				);
				break;
			case 'source':
				this.changeSource(action.source!);
				break;
			case 'key':
			default:
				this.sendCommand(action.key!, actionType);
				break;
		}
	}

	sendCommand(key: string, actionType: ActionType) {
		const data: IData = {
			entity_id: renderTemplate(this.hass, this.remoteId as string),
			command: renderTemplate(this.hass, key),
		};
		if (actionType == 'hold_action') {
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

	callService(
		domainService: string,
		data: IData = {},
		actionType: ActionType,
	) {
		for (const key in data) {
			data[key] = renderTemplate(this.hass, data[key] as string);
		}
		if (
			actionType == 'hold_action' &&
			domainService == 'remote.send_command'
		) {
			data.hold_secs = 0.5;
		}

		const [domain, service] = (
			renderTemplate(this.hass, domainService) as string
		).split('.', 2);

		this.hass.callService(domain, service, data);
	}

	navigate(action: IAction) {
		let url: string;
		if (action.action == 'navigate') {
			url = `${window.location.origin}/${action.url_path}`;
		} else {
			url = action.navigation_path!;
		}
		if (action.navigation_replace == true) {
			window.location.replace(url);
		} else {
			window.location.assign(url);
		}
	}

	handleConfirmation(action: IAction): boolean {
		if ('confirmation' in action) {
			let confirmation = action.confirmation;
			if (typeof confirmation == 'string') {
				confirmation = renderTemplate(
					this.hass,
					action.confirmation as string,
				) as unknown as boolean;
			}
			if (confirmation != false) {
				let text: string = '';
				if (
					confirmation != true &&
					'text' in (confirmation as IConfirmation)
				) {
					text = renderTemplate(
						this.hass,
						(confirmation as IConfirmation).text as string,
					) as string;
				} else {
					switch (action.action) {
						case 'navigate':
							text = `Are you sure you want to navigate to '${action.navigation_path}'`;
							break;
						case 'url':
							text = `Are you sure you want to navigate to '${action.url_path}'?`;
							break;
						case 'assist':
							text = `Are you sure you want to call assist?`;
							break;
						case 'none':
							return false;
						case 'call-service':
							text = `Are you sure you want to run action '${action.service}'?`;
							break;
						case 'source':
							text = `Are you sure you want to run action '${action.source}'?`;
							break;
						case 'key':
						default:
							text = `Are you sure you want to run action '${action.key}'?`;
							break;
					}
				}
				if (confirmation == true) {
					if (!confirm(text)) {
						return false;
					}
				} else {
					if ('exemptions' in (confirmation as IConfirmation)) {
						if (
							!(confirmation as IConfirmation)
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
