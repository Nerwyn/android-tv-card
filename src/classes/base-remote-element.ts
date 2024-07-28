import { CSSResult, LitElement, css, html } from 'lit';
import { eventOptions, property, state } from 'lit/decorators.js';
import { StyleInfo } from 'lit/directives/style-map.js';

import { HapticType, HomeAssistant, forwardHaptic } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';

import {
	ActionType,
	IAction,
	IConfirmation,
	IData,
	IElementConfig,
	ITarget,
} from '../models';
import { deepGet, deepSet, getDeepKeys } from '../utils';

export class BaseRemoteElement extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) config!: IElementConfig;
	@property({ attribute: false }) icons!: Record<string, string>;
	@property({ attribute: false }) autofillEntityId: boolean = false;

	@state() renderRipple = true;
	@state() renderRippleOff?: ReturnType<typeof setTimeout>;
	@state() renderRippleOn?: ReturnType<typeof setTimeout>;
	@state() renderRippleTransition?: ReturnType<typeof setTimeout>;
	@state() rippleTransition?: boolean;

	@state() value?: string | number | boolean = 0;
	entityId?: string;
	getValueFromHass: boolean = true;
	getValueFromHassTimer?: ReturnType<typeof setTimeout>;
	valueUpdateInterval?: ReturnType<typeof setInterval>;

	precision?: number;

	buttonPressStart?: number;
	buttonPressEnd?: number;
	fireMouseEvent?: boolean = true;

	swiping?: boolean = false;
	initialX?: number;
	initialY?: number;

	fireHapticEvent(haptic: HapticType) {
		if (
			this.renderTemplate(this.config.haptics as unknown as string) ??
			true
		) {
			forwardHaptic(haptic);
		}
	}

	endAction() {
		this.buttonPressStart = undefined;
		this.buttonPressEnd = undefined;

		this.swiping = false;
		this.initialX = undefined;
		this.initialY = undefined;
	}

	sendAction(actionType: ActionType, config: IElementConfig = this.config) {
		let action;
		switch (actionType) {
			case 'momentary_start_action':
				action = config.momentary_start_action;
				break;
			case 'momentary_end_action':
				action = config.momentary_end_action;
				break;
			case 'multi_hold_action':
				action =
					config.multi_hold_action ??
					config.hold_action ??
					config.multi_tap_action ??
					config.tap_action;
				break;
			case 'multi_double_tap_action':
				action =
					config.multi_double_tap_action ??
					config.double_tap_action ??
					config.multi_tap_action ??
					config.tap_action;
				break;
			case 'multi_tap_action':
				action = config.multi_tap_action ?? config.tap_action;
				break;
			case 'hold_action':
				action = config.hold_action ?? config.tap_action;
				break;
			case 'double_tap_action':
				action = config.double_tap_action ?? config.tap_action;
				break;
			case 'tap_action':
			default:
				action = config.tap_action;
				break;
		}

		if (!action || !this.handleConfirmation(action)) {
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
					this.changeSource(action);
					break;
				case 'key':
					this.sendCommand(action, actionType);
					break;
				case 'fire-dom-event':
					this.fireDomEvent(action);
					break;
				case 'textbox':
				case 'search':
				case 'keyboard':
					this.keyboard(action);
					break;
				case 'repeat':
				default:
					break;
			}
		} catch (e) {
			this.endAction();
			throw e;
		}
	}

	sendCommand(action: IAction, actionType: ActionType) {
		const data: IData = {
			entity_id: this.renderTemplate(action.remote_id as string),
			command: this.renderTemplate(action.key as string),
		};
		if (actionType == 'hold_action' && !this.config.hold_action) {
			data.hold_secs = 0.5;
		}
		this.hass.callService('remote', 'send_command', data);
	}

	changeSource(action: IAction) {
		this.hass.callService('remote', 'turn_on', {
			entity_id: this.renderTemplate(action.remote_id as string),
			activity: this.renderTemplate(action.source as string),
		});
	}

	callService(action: IAction) {
		const domainService = this.renderTemplate(
			action.service as string,
		) as string;

		const [domain, service] = domainService.split('.');
		const data = structuredClone(action.data);
		for (const key in data) {
			if (Array.isArray(data[key])) {
				for (const i in data[key] as string[]) {
					(data[key] as string[])[i] = this.renderTemplate(
						(data[key] as string[])[i],
					) as string;
				}
			} else {
				data[key] = this.renderTemplate(data[key] as string);
			}
		}

		let target = structuredClone(action.target);
		for (const key in target) {
			if (Array.isArray(target[key as keyof ITarget])) {
				for (const i in target[key as keyof ITarget] as string[]) {
					(target[key as keyof ITarget] as string[])[i] =
						this.renderTemplate(
							(target[key as keyof ITarget] as string[])[i],
						) as string;
				}
			} else {
				target[key as keyof ITarget] = this.renderTemplate(
					target[key as keyof ITarget] as string,
				) as string;
			}
		}

		if (this.renderTemplate(this.autofillEntityId)) {
			let entityId: string | undefined;
			switch (domain) {
				case 'remote':
					entityId = action.remote_id;
					break;
				case 'media_player':
				case 'kodi':
				case 'denonavr':
					entityId = action.media_player_id;
					break;
				default:
					break;
			}
			if (
				entityId &&
				!data?.entity_id &&
				!data?.device_id &&
				!data?.area_id &&
				!data?.label_id &&
				!target?.entity_id &&
				!target?.device_id &&
				!target?.area_id &&
				!target?.label_id
			) {
				target = {
					...target,
					entity_id: this.renderTemplate(entityId) as
						| string
						| string[],
				};
			}
		}

		this.hass.callService(domain, service, data, target);
	}

	navigate(action: IAction) {
		const path =
			(this.renderTemplate(action.navigation_path as string) as string) ??
			'';
		const replace =
			(this.renderTemplate(
				action.navigation_replace as unknown as string,
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
		let url =
			(this.renderTemplate(action.url_path as string) as string) ?? '';
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
		const entityId = this.renderTemplate(
			(action.target?.entity_id ?? action.data?.entity_id) as string,
		);
		const event = new Event('hass-more-info', {
			bubbles: true,
			cancelable: true,
			composed: true,
		});
		event.detail = { entityId };
		this.dispatchEvent(event);
	}

	keyboard(action: IAction) {
		const event = new Event('keyboard-dialog-open', {
			composed: true,
			bubbles: true,
		});
		event.detail = this.deepRenderTemplate(action);
		(
			(this.getRootNode() as ShadowRoot).querySelector(
				'keyboard-dialog',
			) as LitElement
		).shadowRoot
			?.querySelector('dialog')
			?.dispatchEvent(event);
	}

	fireDomEvent(action: IAction) {
		const event = new Event(action.event_type ?? 'll-custom', {
			composed: true,
			bubbles: true,
		});
		event.detail = action;
		this.dispatchEvent(event);
	}

	handleConfirmation(action: IAction): boolean {
		if ('confirmation' in action) {
			let confirmation = action.confirmation;
			if (typeof confirmation == 'string') {
				confirmation = this.renderTemplate(
					action.confirmation as string,
				) as unknown as boolean;
			}
			if (confirmation != false) {
				this.fireHapticEvent('warning');

				let text: string = '';
				if (confirmation != true && confirmation?.text) {
					text = this.renderTemplate(
						confirmation?.text as string,
					) as string;
				} else {
					text = `Are you sure you want to run action '${
						this.renderTemplate(action.action as string) as string
					}'?`;
				}
				if (confirmation == true) {
					if (!confirm(text)) {
						return false;
					}
				} else {
					if (confirmation?.exemptions) {
						if (
							!(confirmation as IConfirmation).exemptions
								?.map((exemption) =>
									this.renderTemplate(exemption.user),
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

	setValue() {
		this.entityId = this.renderTemplate(
			(this.config.tap_action?.data?.entity_id as string) ?? '',
		) as string;

		if (this.getValueFromHass && this.entityId) {
			clearInterval(this.valueUpdateInterval);
			this.valueUpdateInterval = undefined;

			let valueAttribute = (
				(this.renderTemplate(
					this.config.value_attribute as string,
				) as string) ?? 'state'
			).toLowerCase();
			if (!this.hass.states[this.entityId]) {
				this.value = undefined;
			} else if (valueAttribute == 'state') {
				this.value = this.hass.states[this.entityId].state;
			} else {
				let value:
					| string
					| number
					| boolean
					| string[]
					| number[]
					| undefined;
				const indexMatch = valueAttribute.match(/\[\d+\]$/);

				if (indexMatch) {
					const index = parseInt(indexMatch[0].replace(/\[|\]/g, ''));
					valueAttribute = valueAttribute.replace(indexMatch[0], '');
					value =
						this.hass.states[this.entityId].attributes[
							valueAttribute
						];
					if (value && Array.isArray(value) && value.length) {
						value = value[index];
					} else {
						value == undefined;
					}
				} else {
					value =
						this.hass.states[this.entityId].attributes[
							valueAttribute
						];
				}

				if (value != undefined || valueAttribute == 'elapsed') {
					switch (valueAttribute) {
						case 'brightness':
							this.value = Math.round(
								(100 * parseInt((value as string) ?? 0)) / 255,
							);
							break;
						case 'media_position':
							try {
								const setIntervalValue = () => {
									if (
										this.hass.states[
											this.entityId as string
										].state == 'playing'
									) {
										this.value = Math.min(
											Math.floor(
												Math.floor(value as number) +
													(Date.now() -
														Date.parse(
															this.hass.states[
																this
																	.entityId as string
															].attributes
																.media_position_updated_at,
														)) /
														1000,
											),
											Math.floor(
												this.hass.states[
													this.entityId as string
												].attributes.media_duration,
											),
										);
									} else {
										this.value = value as number;
									}
								};

								setIntervalValue();
								this.valueUpdateInterval = setInterval(
									setIntervalValue,
									500,
								);
							} catch (e) {
								console.error(e);
								this.value = value as string | number | boolean;
							}
							break;
						case 'elapsed':
							if (this.entityId.startsWith('timer.')) {
								if (
									this.hass.states[this.entityId as string]
										.state == 'idle'
								) {
									this.value = 0;
								} else {
									const durationHMS =
										this.hass.states[
											this.entityId as string
										].attributes.duration.split(':');
									const durationSeconds =
										parseInt(durationHMS[0]) * 3600 +
										parseInt(durationHMS[1]) * 60 +
										parseInt(durationHMS[2]);
									const endSeconds = Date.parse(
										this.hass.states[
											this.entityId as string
										].attributes.finishes_at,
									);
									try {
										const setIntervalValue = () => {
											if (
												this.hass.states[
													this.entityId as string
												].state == 'active'
											) {
												const remainingSeconds =
													(endSeconds - Date.now()) /
													1000;
												const value = Math.floor(
													durationSeconds -
														remainingSeconds,
												);
												this.value = Math.min(
													value,
													durationSeconds,
												);
											} else {
												const remainingHMS =
													this.hass.states[
														this.entityId as string
													].attributes.remaining.split(
														':',
													);
												const remainingSeconds =
													parseInt(remainingHMS[0]) *
														3600 +
													parseInt(remainingHMS[1]) *
														60 +
													parseInt(remainingHMS[2]);
												this.value = Math.floor(
													durationSeconds -
														remainingSeconds,
												);
											}
										};

										setIntervalValue();
										this.valueUpdateInterval = setInterval(
											setIntervalValue,
											500,
										);
									} catch (e) {
										console.error(e);
										this.value = 0;
									}
								}
								break;
							}
						// falls through
						default:
							this.value = value as string | number | boolean;
							break;
					}
				} else {
					this.value = value;
				}
			}
		}
	}

	renderTemplate(
		str: string | number | boolean,
		context?: object,
	): string | number | boolean {
		let holdSecs: number = 0;
		if (this.buttonPressStart && this.buttonPressEnd) {
			holdSecs = (this.buttonPressEnd - this.buttonPressStart) / 1000;
		}
		context = {
			VALUE: this.value as string,
			HOLD_SECS: holdSecs ?? 0,
			value: this.value as string,
			hold_secs: holdSecs ?? 0,
			config: {
				...this.config,
				entity: this.entityId,
			},
			...context,
		};
		context = {
			render: (str2: string) => this.renderTemplate(str2, context),
			...context,
		};

		let value: string | number = context['value' as keyof typeof context];
		if (
			value != undefined &&
			typeof value == 'number' &&
			this.precision != undefined
		) {
			value = Number(value).toFixed(this.precision);
			context = {
				...context,
				VALUE: value,
				value: value,
			};
		}

		const res = renderTemplate(this.hass, str as string, context);
		if (res != str) {
			return res;
		}

		// Legacy VALUE interpolation (and others)
		if (typeof str == 'string') {
			for (const key of ['VALUE', 'HOLD_SECS']) {
				if (str == key) {
					return context[key as keyof object] as string;
				} else if (str.toString().includes(key)) {
					str = str.replace(
						new RegExp(key, 'g'),
						(context[key as keyof object] ?? '') as string,
					);
				}
			}
		}

		return str;
	}

	deepRenderTemplate(obj: object, context?: object) {
		const res = structuredClone(obj);
		const keys = getDeepKeys(res);
		for (const key of keys) {
			deepSet(
				res,
				key,
				this.renderTemplate(
					deepGet(res, key) as unknown as string,
					context,
				),
			);
		}
		return res;
	}

	buildIcon(icon?: string, context?: object) {
		icon = this.renderTemplate(icon ?? '', context) as string;
		if (icon) {
			let iconElement = html``;
			if (icon.includes(':')) {
				iconElement = html` <ha-icon .icon="${icon}"></ha-icon> `;
			} else {
				iconElement = html`
					<ha-svg-icon
						.path=${this.icons[icon] ?? icon}
					></ha-svg-icon>
				`;
			}
			return html`<div class="icon">${iconElement}</div>`;
		}
		return '';
	}

	buildLabel(label?: string, context?: object) {
		if (label) {
			const text: string = this.renderTemplate(
				label as string,
				context,
			) as string;
			if (text) {
				return html`<pre class="label">${text}</pre>`;
			}
		}
		return '';
	}

	buildRipple() {
		return this.renderRipple
			? html`<md-ripple
					class="${this.renderRippleTransition
						? `transition-${this.rippleTransition ? 'on' : 'off'}`
						: ''}"
			  ></md-ripple>`
			: '';
	}

	buildStyle(_style: StyleInfo = {}, context?: object) {
		// TODO REMOVE
		const style = structuredClone(_style);
		for (const key in style) {
			style[key] = this.renderTemplate(
				style[key] as string,
				context,
			) as string;
		}
		return style;
	}

	buildStyles(actions: IElementConfig = this.config, context?: object) {
		return actions.styles
			? html`
					<style>
						${(
							this.renderTemplate(
								actions.styles,
								context,
							) as string
						)
							.replace(/ !important/g, '')
							.replace(/;/g, ' !important;')}
					</style>
			  `
			: '';
	}

	// Skeletons for overridden event handlers
	onStart(_e: MouseEvent | TouchEvent) {}
	onEnd(_e: MouseEvent | TouchEvent) {}
	onMove(_e: MouseEvent | TouchEvent) {}

	@eventOptions({ passive: true })
	onMouseDown(e: MouseEvent | TouchEvent) {
		if (this.fireMouseEvent) {
			this.onStart(e);
		}
	}
	onMouseUp(e: MouseEvent | TouchEvent) {
		if (this.fireMouseEvent) {
			this.onEnd(e);
		}
		this.fireMouseEvent = true;
	}
	@eventOptions({ passive: true })
	onMouseMove(e: MouseEvent | TouchEvent) {
		if (this.fireMouseEvent) {
			this.onMove(e);
		}
	}

	@eventOptions({ passive: true })
	onTouchStart(e: TouchEvent) {
		this.fireMouseEvent = false;
		this.onStart(e);
	}
	onTouchEnd(e: TouchEvent) {
		this.fireMouseEvent = false;
		this.onEnd(e);
	}
	@eventOptions({ passive: true })
	onTouchMove(e: TouchEvent) {
		this.fireMouseEvent = false;
		this.onMove(e);
	}

	onContextMenu(e: PointerEvent) {
		if (!this.fireMouseEvent) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	}

	toggleRipple() {
		this.cancelRippleToggle();
		this.renderRippleTransition = setTimeout(
			() => (this.rippleTransition = false),
			400,
		);
		this.renderRippleOff = setTimeout(
			() => (this.renderRipple = false),
			800,
		);
		this.renderRippleOn = setTimeout(() => this.cancelRippleToggle(), 850);
	}

	cancelRippleToggle() {
		clearTimeout(this.renderRippleOff);
		clearTimeout(this.renderRippleOn);
		clearTimeout(this.renderRippleTransition);
		this.renderRippleOff = undefined;
		this.renderRippleOn = undefined;
		this.renderRippleTransition = undefined;
		this.rippleTransition = true;
		this.renderRipple = true;
	}

	static get styles(): CSSResult | CSSResult[] {
		return css`
			:host {
				display: flex;
				flex-flow: column;
				place-content: center space-evenly;
				align-items: center;
				position: relative;
				border: none;
				border-radius: 10px;
				padding: 0px;
				box-sizing: border-box;
				outline: 0px;
				overflow: visible;
				font-size: inherit;
				color: inherit;
			}
			ha-icon,
			svg {
				display: inline-flex;
				flex-direction: column;
				justify-content: center;
				text-align: center;
				align-items: center;
				vertical-align: middle;
				height: var(--size, 48px);
				width: var(--size, 48px);
				z-index: 2;
				pointer-events: none;
			}

			md-ripple.transition-on {
				opacity: 1
				transition: opacity 375ms linear;
			}
			md-ripple.transition-off {
				opacity: 0;
				transition: opacity 375ms linear;
			}

			.icon {
				pointer-events: none;
				position: relative;
				flex-flow: column;
				place-content: center;
				z-index: 2;
				display: var(--icon-display, inline-flex);
				transform: var(--icon-transform);
				color: var(--icon-color, var(--primary-text-color));
				filter: var(--icon-filter, none);
			}

			.label {
				position: relative;
				pointer-events: none;
				justify-content: center;
				align-items: center;
				height: 15px;
				line-height: 15px;
				width: inherit;
				margin: 0;
				font-family: inherit;
				font-size: 12px;
				font-weight: bold;
				z-index: 2;
				display: var(--label-display, inline-flex);
				transform: var(--label-transform);
				color: var(--label-color, inherit);
				filter: var(--label-filter, none);
			}
		`;
	}
}
