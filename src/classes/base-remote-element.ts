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

	value: number = 0;
	touchscreen = 'ontouchstart' in document.documentElement;
	buttonPressStart?: number;
	buttonPressEnd?: number;

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

	endAction() {
		this.buttonPressStart = undefined;
		this.buttonPressEnd = undefined;
	}

	sendAction(actionType: ActionType, actions: IActions = this.actions) {
		let action: IAction;
		switch (actionType) {
			case 'momentary_start_action':
				action = actions.momentary_start_action!;
				break;
			case 'momentary_end_action':
				action = actions.momentary_end_action!;
				break;
			case 'multi_hold_action':
				action =
					actions.multi_hold_action ??
					actions.hold_action ??
					actions.multi_tap_action ??
					actions.tap_action!;
				break;
			case 'multi_double_tap_action':
				action =
					actions.multi_double_tap_action ??
					actions.double_tap_action ??
					actions.multi_tap_action ??
					actions.tap_action!;
				break;
			case 'multi_tap_action':
				action = actions.multi_tap_action ?? actions.tap_action!;
				break;
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

		try {
			switch (action.action) {
				case 'navigate':
					this.navigate(action);
					break;
				case 'url':
					this.toUrl(action);
					break;
				case 'assist':
					this.assist(action);
					break;
				case 'more-info':
					this.moreInfo(action);
					break;
				case 'call-service':
					this.callService(action);
					break;
				case 'source':
					this.changeSource(action.source!);
					break;
				case 'key':
					this.sendCommand(action.key!, actionType);
					break;
				case 'repeat':
				case 'none':
				default:
					break;
			}
		} catch (e) {
			this.endAction();
			throw e;
		}
	}

	sendCommand(key: string, actionType: ActionType) {
		const data: IData = {
			entity_id: renderTemplate(this.hass, this.remoteId as string),
			command: renderTemplate(this.hass, key),
		};
		if (actionType == 'hold_action' && !('hold_action' in this.actions)) {
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

	callService(action: IAction) {
		const domainService = renderTemplate(
			this.hass,
			action.service as string,
		) as string;

		const [domain, service] = domainService.split('.');
		const data = structuredClone(action.data);
		let holdSecs: number = 0;
		if (this.buttonPressStart && this.buttonPressEnd) {
			holdSecs = this.buttonPressEnd - this.buttonPressStart;
		}
		for (const key in data) {
			data[key] = renderTemplate(this.hass, data[key] as string);
			if (data[key]) {
				if (data[key] == 'VALUE') {
					data[key] = this.value;
				} else if (data[key].toString().includes('VALUE')) {
					data[key] = data[key]
						.toString()
						.replace(/VALUE/g, (this.value ?? '').toString());
				}

				if (holdSecs) {
					if (data[key] == 'HOLD_SECS') {
						data[key] = holdSecs;
					} else if (data[key].toString().includes('HOLD_SECS')) {
						data[key] = data[key]
							.toString()
							.replace(/HOLD_SECS/g, (holdSecs ?? '').toString());
					}
				}
			}
		}

		this.hass.callService(domain, service, data);
	}

	navigate(action: IAction) {
		const path =
			(renderTemplate(this.hass, action.navigation_path!) as string) ??
			'';
		const replace =
			(renderTemplate(
				this.hass,
				(action.navigation_replace as unknown as string)!,
			) as boolean) ?? false;
		if (path.includes('//')) {
			console.error(
				'Protocol detected in navigation path. To navigate to another website use the action "url" with the key "url_path" instead.',
			);
			return;
		}
		if (replace == true) {
			window.history.replaceState(
				window.history.state?.root ? { root: true } : null,
				'',
				path,
			);
		} else {
			window.history.pushState(null, '', path);
		}
		const event = new Event('location-changed', {
			bubbles: false,
			cancelable: true,
			composed: false,
		});
		event.detail = { replace: replace == true };
		window.dispatchEvent(event);
	}

	toUrl(action: IAction) {
		let url = (renderTemplate(this.hass, action.url_path!) as string) ?? '';
		if (!url.includes('//')) {
			url = `https://${url}`;
		}
		window.open(url);
	}

	assist(action: IAction) {
		// eslint-disable-next-line
		// @ts-ignore
		if (this.hass?.auth?.external?.config?.hasAssist) {
			// eslint-disable-next-line
			// @ts-ignore
			this.hass?.auth?.external?.fireMessage({
				type: 'assist/show',
				payload: {
					pipeline_id: action.pipeline_id,
					start_listening: action.start_listening,
				},
			});
		} else {
			window.open(`${window.location.href}?conversation=1`, '_self');
		}
	}

	moreInfo(action: IAction) {
		const entityId = renderTemplate(
			this.hass,
			action.data!.entity_id as string,
		);

		const event = new Event('hass-more-info', {
			bubbles: true,
			cancelable: true,
			composed: true,
		});
		event.detail = { entityId };
		this.dispatchEvent(event);
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
				this.fireHapticEvent('warning');

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
							text = `Are you sure you want to navigate to '${renderTemplate(
								this.hass,
								action.navigation_path!,
							)}'`;
							break;
						case 'url':
							text = `Are you sure you want to navigate to '${renderTemplate(
								this.hass,
								action.url_path!,
							)}'?`;
							break;
						case 'assist':
							text = `Are you sure you want to call assist?`;
							break;
						case 'none':
							return false;
						case 'call-service':
							text = `Are you sure you want to run action '${renderTemplate(
								this.hass,
								action.service!,
							)}'?`;
							break;
						case 'source':
							text = `Are you sure you want to run action '${renderTemplate(
								this.hass,
								action.source!,
							)}'?`;
							break;
						case 'key':
						default:
							text = `Are you sure you want to run action '${renderTemplate(
								this.hass,
								action.key!,
							)}'?`;
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
