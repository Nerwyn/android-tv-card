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
	fireMouseAction: boolean = true;

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;
		const doubleTapThreshold = this.targetTouches?.length || 1;
		const multiPrefix = this.getMultiPrefix();

		if (
			this.renderTemplate(
				this.config.double_tap_action?.action ?? 'none',
			) != 'none' ||
			this.renderTemplate(
				this.config.multi_double_tap_action?.action ?? 'none',
			) != 'none'
		) {
			// Double tap action is defined
			const doubleTapAction: ActionType = `${multiPrefix}double_tap_action`;

			if (this.clickCount > doubleTapThreshold) {
				// Double tap action is triggered
				this.fireHapticEvent('success');
				this.sendAction(doubleTapAction);
				this.endAction();
			} else {
				// Single tap action is triggered if double tap is not within window
				if (!this.clickTimer) {
					let doubleTapWindow: number =
						'double_tap_window' in
						(this.config[doubleTapAction] ?? {})
							? (this.renderTemplate(
									this.config[doubleTapAction]
										?.double_tap_window as unknown as string,
							  ) as number)
							: DOUBLE_TAP_WINDOW;
					if (
						multiPrefix == 'multi_' &&
						this.config.multi_double_tap_action
					) {
						doubleTapWindow = this.renderTemplate(
							this.config.multi_double_tap_action
								?.double_tap_window ?? DOUBLE_TAP_WINDOW,
						) as number;
					}
					this.clickTimer = setTimeout(() => {
						this.fireHapticEvent('light');
						this.sendAction(`${multiPrefix}tap_action`);
						this.endAction();
					}, doubleTapWindow);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			this.fireHapticEvent('light');
			this.sendAction(`${multiPrefix}tap_action`);
			this.endAction();
		}
	}

	onStart(e: TouchEvent | MouseEvent) {
		super.onStart(e);
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
			if (e.cancelable) {
				e.preventDefault();
			}
			let holdMove = false;
			if ((this.targetTouches?.length ?? 0) > 1) {
				holdMove = true;
			}
			this.endAction();
			if (holdMove) {
				this.holdMove = true;
			}
		} else if (
			!this.holdMove &&
			(!('targetTouches' in e) || !e.targetTouches.length)
		) {
			this.onClick(e);
		}
		this.toggleRipple();
	}

	onMove(e: TouchEvent | MouseEvent) {
		if (!this.initialX || !this.initialY || !this.holdStart) {
			return;
		}
		super.onMove(e);
		const multiPrefix = this.getMultiPrefix();

		// Only consider significant enough movement
		const totalDeltaX = (this.currentX ?? 0) - this.initialX;
		const totalDeltaY = (this.currentY ?? 0) - this.initialY;
		if (
			this.renderTemplate(
				this.config[`${multiPrefix}mouse_action`]?.action ?? 'none',
			) != 'none'
		) {
			// Mouse actions
			if (
				this.holdMove ||
				Math.abs(Math.abs(totalDeltaX) - Math.abs(totalDeltaY)) > 1
			) {
				if (this.fireMouseAction) {
					clearTimeout(this.holdTimer);
					this.holdTimer = undefined;
					this.holdMove = true;

					const repeatDelay = this.renderTemplate(
						this.config[`${multiPrefix}mouse_action`]
							?.repeat_delay ?? 0, // default to 0 instead of normal repeat delay
					) as number;
					if (repeatDelay) {
						this.fireMouseAction = false;
						setTimeout(() => {
							this.fireMouseAction = true;
						}, repeatDelay);
					}

					this.sendAction(`${multiPrefix}mouse_action`);
				}
			}
		} else {
			if (Math.abs(Math.abs(totalDeltaX) - Math.abs(totalDeltaY)) > 2) {
				// Directional actions
				if (Math.abs(totalDeltaX) > Math.abs(totalDeltaY)) {
					this.direction = totalDeltaX < 0 ? 'left' : 'right';
				} else {
					this.direction = totalDeltaY < 0 ? 'up' : 'down';
				}
				if (!this.holdMove) {
					this.fireHapticEvent('light');
					this.sendAction(
						`${multiPrefix}tap_action`,
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
	}

	onMouseLeave(_e: MouseEvent) {
		this.endAction();
		this.toggleRipple();
	}

	onTouchCancel(_e: TouchEvent) {
		this.endAction();
		this.toggleRipple();
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
			const multiPrefix = this.getMultiPrefix();

			let repeat =
				this.renderTemplate(actions.hold_action?.action as string) ==
				'repeat';
			let repeatDelay = this.renderTemplate(
				actions.hold_action?.repeat_delay ?? REPEAT_DELAY,
			) as number;
			if (multiPrefix == 'multi_' && actions.multi_hold_action) {
				repeat =
					this.renderTemplate(
						actions.multi_hold_action?.action as string,
					) == 'repeat';
				repeatDelay = this.renderTemplate(
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
					}, repeatDelay);
				}
			} else {
				this.fireHapticEvent('medium');
				this.sendAction(`${multiPrefix}hold_action`, actions);
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
