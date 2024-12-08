import { CSSResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
	ActionType,
	DirectionAction,
	IActions,
	ITouchpadConfig,
} from '../models/interfaces';

import {
	DOUBLE_TAP_WINDOW,
	HOLD_TIME,
	REPEAT_DELAY,
} from '../models/constants';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-touchpad')
export class RemoteTouchpad extends BaseRemoteElement {
	@property() config!: ITouchpadConfig;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	holdTimer?: ReturnType<typeof setTimeout>;
	holdInterval?: ReturnType<typeof setInterval>;
	hold: boolean = false;
	holdStart: boolean = false;
	holdMove: boolean = false;
	direction?: DirectionAction;

	targetTouches?: Touch[];

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;
		const doubleTapThreshold = this.targetTouches?.length || 1;

		if (
			this.renderTemplate(
				this.config.double_tap_action?.action ?? 'none',
			) != 'none' ||
			this.renderTemplate(
				this.config.multi_double_tap_action?.action ?? 'none',
			) != 'none'
		) {
			// Double tap action is defined
			const doubleTapAction: ActionType = `${this.getMultiPrefix()}double_tap_action`;

			if (this.clickCount > doubleTapThreshold) {
				// Double tap action is triggered
				this.fireHapticEvent('success');
				this.sendAction(doubleTapAction);
				this.endAction();
			} else {
				// Single tap action is triggered if double tap is not within window
				if (!this.clickTimer) {
					const actionType = this.getMultiPrefix();
					let doubleTapWindow: number =
						'double_tap_window' in
						(this.config[doubleTapAction] ?? {})
							? (this.renderTemplate(
									this.config[doubleTapAction]
										?.double_tap_window as unknown as string,
							  ) as number)
							: DOUBLE_TAP_WINDOW;
					if (
						actionType == 'multi_' &&
						this.config.multi_double_tap_action
					) {
						doubleTapWindow = this.renderTemplate(
							this.config.multi_double_tap_action
								?.double_tap_window ?? REPEAT_DELAY,
						) as number;
					}
					this.clickTimer = setTimeout(() => {
						this.fireHapticEvent('light');
						this.sendAction(`${actionType}tap_action`);
						this.endAction();
					}, doubleTapWindow);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			this.fireHapticEvent('light');
			this.sendAction(`${this.getMultiPrefix()}tap_action`);
			this.endAction();
		}
	}

	onStart(e: TouchEvent | MouseEvent) {
		this.cancelRippleToggle();
		this.holdStart = true;

		if (
			!this.direction &&
			this.renderTemplate(
				this.config.momentary_start_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.momentaryStart = performance.now();
			this.sendAction('momentary_start_action');
		} else if (
			!this.direction &&
			this.renderTemplate(
				this.config.momentary_end_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.momentaryStart = performance.now();
		} else if (!this.holdTimer) {
			this.setHoldTimer();
		}

		this.setInitialXY(e);
	}

	onEnd(e: TouchEvent | MouseEvent) {
		if (
			!this.direction &&
			this.renderTemplate(
				this.config.momentary_end_action?.action ?? 'none',
			) != 'none'
		) {
			this.momentaryEnd = performance.now();
			this.fireHapticEvent('selection');
			this.sendAction('momentary_end_action');
			this.endAction();
		} else if (
			!this.direction &&
			this.renderTemplate(
				this.config.momentary_start_action?.action ?? 'none',
			) != 'none'
		) {
			this.endAction();
		} else if (this.hold || this.holdMove) {
			e.stopImmediatePropagation();
			e.preventDefault();
			this.endAction();
			if ('targetTouches' in e && e.targetTouches?.length) {
				this.hold = true;
			}
		} else if (!('targetTouches' in e) || !e.targetTouches.length) {
			this.onClick(e);
		}
		this.toggleRipple();
	}

	onMove(e: TouchEvent | MouseEvent) {
		if (!this.initialX || !this.initialY || !this.holdStart) {
			return;
		}

		this.setDeltaXY(e);

		// Only consider significant enough movement
		const sensitivity = 2;
		if (
			Math.abs(Math.abs(this.deltaX ?? 0) - Math.abs(this.deltaY ?? 0)) >
			sensitivity
		) {
			if (Math.abs(this.deltaX ?? 0) > Math.abs(this.deltaY ?? 0)) {
				// Sliding horizontally
				this.direction = this.deltaX ?? 0 < 0 ? 'left' : 'right';
			} else {
				// Sliding vertically
				this.direction = this.deltaY ?? 0 < 0 ? 'up' : 'down';
			}
			if (!this.holdMove) {
				this.fireHapticEvent('light');
				this.sendAction(
					`${this.getMultiPrefix()}tap_action`,
					this.getActions(),
				);
				this.holdMove = true;

				if (this.holdTimer) {
					clearTimeout(this.holdTimer);
					this.holdTimer = undefined;
					this.setHoldTimer();
				}
			}
		}
	}

	onMouseLeave(_e: MouseEvent) {
		this.endAction();
		this.toggleRipple();
	}

	onTouchCancel(_e: TouchEvent) {
		this.endAction();
		this.toggleRipple();
	}

	setTargetTouches(targetTouches: TouchList) {
		// if (!this.targetTouches) {
		// 	this.targetTouches = Array.from(targetTouches ?? []);
		// } else {
		// 	for (const touch of targetTouches) {
		// 		const i = this.targetTouches.findIndex(
		// 			(t) => t.identifier == touch.identifier,
		// 		);
		// 		if (i >= 0) {
		// 			this.targetTouches[i] = touch;
		// 		} else {
		// 			this.targetTouches.push(touch);
		// 		}
		// 	}
		// }
		this.targetTouches = Array.from(targetTouches ?? []);
	}

	setInitialXY(e: TouchEvent | MouseEvent) {
		if ('targetTouches' in e) {
			let totalX = 0;
			let totalY = 0;
			this.setTargetTouches(e.targetTouches);
			for (const touch of this.targetTouches ?? []) {
				totalX += touch.clientX;
				totalY += touch.clientY;
			}
			this.initialX = totalX / (this.targetTouches?.length ?? 1);
			this.initialY = totalY / (this.targetTouches?.length ?? 1);
		} else {
			this.initialX = e.clientX;
			this.initialY = e.clientY;
		}
	}

	setDeltaXY(e: TouchEvent | MouseEvent) {
		let currentX: number = 0;
		let currentY: number = 0;
		if ('targetTouches' in e) {
			this.setTargetTouches(e.targetTouches);
			for (const touch of this.targetTouches ?? []) {
				currentX += touch.clientX;
				currentY += touch.clientY;
			}
			currentX = currentX / (this.targetTouches?.length ?? 1);
			currentY = currentY / (this.targetTouches?.length ?? 1);
		} else {
			currentX = e.clientX ?? 0;
			currentY = e.clientY ?? 0;
		}

		this.deltaX = currentX - (this.initialX ?? 0);
		this.deltaY = currentY - (this.initialY ?? 0);
	}

	endAction() {
		clearTimeout(this.holdTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.holdInterval as ReturnType<typeof setInterval>);
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);

		this.holdTimer = undefined;
		this.holdInterval = undefined;
		this.clickTimer = undefined;

		this.hold = false;
		this.holdStart = false;
		this.holdMove = false;
		this.direction = undefined;
		this.clickCount = 0;

		this.targetTouches = undefined;

		super.endAction();
	}

	getActions(): IActions {
		return (
			this.direction ? this.config[this.direction] : this.config
		) as IActions;
	}

	getMultiPrefix(): 'multi_' | '' {
		return this.targetTouches && this.targetTouches.length > 1
			? 'multi_'
			: '';
	}

	setHoldTimer() {
		const holdAction = `${this.getMultiPrefix()}hold_action`;
		const actions = this.getActions();

		const holdTime = this.renderTemplate(
			actions[holdAction as ActionType]?.hold_time ?? HOLD_TIME,
		) as number;

		this.holdTimer = setTimeout(() => {
			this.hold = true;
			const actions = this.getActions();
			const actionType = this.getMultiPrefix();

			let repeat =
				this.renderTemplate(actions.hold_action?.action as string) ==
				'repeat';
			let repeat_delay = this.renderTemplate(
				actions.hold_action?.repeat_delay ?? REPEAT_DELAY,
			) as number;
			if (actionType == 'multi_' && actions.multi_hold_action) {
				repeat =
					this.renderTemplate(
						actions.multi_hold_action?.action as string,
					) == 'repeat';
				repeat_delay = this.renderTemplate(
					actions.multi_hold_action?.repeat_delay ?? REPEAT_DELAY,
				) as number;
			}

			if (repeat) {
				if (!this.holdInterval) {
					this.holdInterval = setInterval(() => {
						this.fireHapticEvent('selection');
						this.sendAction(
							`${this.getMultiPrefix()}tap_action`,
							this.getActions(),
						);
					}, repeat_delay);
				}
			} else {
				this.fireHapticEvent('medium');
				this.sendAction(`${this.getMultiPrefix()}hold_action`, actions);
			}
		}, holdTime);
	}

	render() {
		this.setValue();
		return html`
			<toucharea
				@mousedown=${this.onMouseDown}
				@mouseup=${this.onMouseUp}
				@mousemove=${this.onMouseMove}
				@mouseleave=${this.onMouseLeave}
				@touchstart=${this.onTouchStart}
				@touchend=${this.onTouchEnd}
				@touchmove=${this.onTouchMove}
				@touchcancel=${this.onTouchCancel}
				@contextmenu=${this.onContextMenu}
			>
				<div class="toucharea-row">
					<remote-icon-label
						id="up"
						.hass=${this.hass}
						.config=${this.config.up ?? {}}
						.icons=${this.icons}
					></remote-icon-label>
				</div>
				<div class="toucharea-row">
					<remote-icon-label
						id="left"
						.hass=${this.hass}
						.config=${this.config.left ?? {}}
						.icons=${this.icons}
					></remote-icon-label>
					<remote-icon-label
						id="center"
						.hass=${this.hass}
						.config=${this.config}
						.icons=${this.icons}
					></remote-icon-label>
					<remote-icon-label
						id="right"
						.hass=${this.hass}
						.config=${this.config.right ?? {}}
						.icons=${this.icons}
					></remote-icon-label>
				</div>
				<div class="toucharea-row">
					<remote-icon-label
						id="down"
						.hass=${this.hass}
						.config=${this.config.down ?? {}}
						.icons=${this.icons}
					></remote-icon-label>
				</div>
				${this.buildRipple()}
			</toucharea>
			${this.buildStyles(this.config.styles)}
		`;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				:host {
					display: contents;

					--mdc-ripple-press-opacity: 0.04;
				}
				toucharea {
					border-radius: 32px;
					flex-grow: 1;
					height: 250px;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					background: var(
						--primary-background-color,
						rgb(111, 118, 125)
					);
					touch-action: none;
					text-align: center;
					position: relative;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					justify-content: space-between;
				}
				.toucharea-row {
					min-height: var(--size, 48px);
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					width: -moz-available;
					width: -webkit-fill-available;
					width: fill-available;
					justify-content: space-around;
					align-items: center;
				}
			`,
		];
	}
}

@customElement('remote-icon-label')
export class IconLabelContainer extends BaseRemoteElement {
	render() {
		this.setValue();
		return html`
			${this.buildIcon(this.config.icon)}${this.buildLabel(
				this.config.label,
			)}${this.buildStyles(this.config.styles)}
		`;
	}
}
