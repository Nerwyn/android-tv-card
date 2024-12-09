import { CSSResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import {
	DOUBLE_TAP_WINDOW,
	HOLD_TIME,
	REPEAT_DELAY,
} from '../models/constants';
import { IButtonConfig } from '../models/interfaces';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-button')
export class RemoteButton extends BaseRemoteElement {
	@property() config!: IButtonConfig;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	holdTimer?: ReturnType<typeof setTimeout>;
	holdInterval?: ReturnType<typeof setInterval>;
	hold: boolean = false;

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;

		if (
			this.renderTemplate(
				this.config.double_tap_action?.action ?? 'none',
			) != 'none'
		) {
			// Double tap action is defined
			if (this.clickCount > 1) {
				// Double tap action is triggered
				this.fireHapticEvent('success');
				this.sendAction('double_tap_action');
				this.endAction();
			} else {
				// Single tap action is triggered if double tap is not within window
				if (!this.clickTimer) {
					const doubleTapWindow: number = this.config
						.double_tap_action?.double_tap_window
						? (this.renderTemplate(
								this.config.double_tap_action
									?.double_tap_window as unknown as string,
						  ) as number)
						: DOUBLE_TAP_WINDOW;
					this.clickTimer = setTimeout(() => {
						this.fireHapticEvent('light');
						this.sendAction('tap_action');
						this.endAction();
					}, doubleTapWindow);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			this.fireHapticEvent('light');
			this.sendAction('tap_action');
			this.endAction();
		}
	}

	onStart(e: TouchEvent | MouseEvent) {
		super.onStart(e);
		this.cancelRippleToggle();
		this.swiping = false;

		if (
			this.renderTemplate(
				this.config.momentary_start_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.momentaryStart = performance.now();
			this.sendAction('momentary_start_action');
		} else if (
			this.renderTemplate(
				this.config.momentary_end_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.momentaryStart = performance.now();
		} else if (!this.holdTimer) {
			const holdTime = this.renderTemplate(
				this.config.hold_action?.hold_time ?? HOLD_TIME,
			) as number;

			this.holdTimer = setTimeout(() => {
				if (!this.swiping) {
					this.hold = true;

					if (
						this.renderTemplate(
							this.config.hold_action?.action as string,
						) == 'repeat'
					) {
						const repeat_delay = this.renderTemplate(
							this.config.hold_action?.repeat_delay ??
								REPEAT_DELAY,
						) as number;
						if (!this.holdInterval) {
							this.holdInterval = setInterval(() => {
								this.fireHapticEvent('selection');
								this.sendAction('tap_action');
							}, repeat_delay);
						}
					} else {
						this.fireHapticEvent('medium');
						this.sendAction('hold_action');
					}
				}
			}, holdTime);
		}
	}

	onEnd(e: TouchEvent | MouseEvent) {
		if (!this.swiping) {
			if (
				this.renderTemplate(
					this.config.momentary_end_action?.action ?? 'none',
				) != 'none'
			) {
				this.fireHapticEvent('selection');
				this.momentaryEnd = performance.now();
				this.sendAction('momentary_end_action');
				this.endAction();
			} else if (
				this.renderTemplate(
					this.config.momentary_start_action?.action ?? 'none',
				) != 'none'
			) {
				this.endAction();
			} else if (this.hold) {
				// Hold action is triggered
				e.stopImmediatePropagation();
				e.preventDefault();
				this.endAction();
			} else {
				// Hold action is not triggered, fire tap action
				this.onClick(e);
			}
		}
		this.toggleRipple();
	}

	onMove(e: TouchEvent | MouseEvent) {
		let currentX: number;
		let currentY: number;
		if ('targetTouches' in e) {
			currentX = e.targetTouches[0].clientX;
			currentY = e.targetTouches[0].clientY;
		} else {
			currentX = e.clientX;
			currentY = e.clientY;
		}
		this.deltaX = currentX - (this.currentX ?? currentX);
		this.deltaY = currentY - (this.currentY ?? currentY);
		this.currentX = currentX;
		this.currentY = currentY;

		// Only consider significant enough movement
		const sensitivity = 24;
		const totalDeltaX = this.currentX - (this.initialX ?? 0);
		const totalDeltaY = this.currentY - (this.initialY ?? 0);
		if (
			Math.abs(Math.abs(totalDeltaX) - Math.abs(totalDeltaY)) >
			sensitivity
		) {
			this.endAction();
			this.swiping = true;
		}
	}

	onMouseLeave(_e: MouseEvent) {
		this.endAction();
		this.swiping = true;
		this.toggleRipple();
	}

	onTouchCancel(_e: TouchEvent) {
		this.endAction();
		this.toggleRipple();
	}

	endAction() {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = undefined;
		this.clickCount = 0;

		clearTimeout(this.holdTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.holdInterval as ReturnType<typeof setInterval>);
		this.holdTimer = undefined;
		this.holdInterval = undefined;
		this.hold = false;

		super.endAction();
	}

	render() {
		this.setValue();
		return html`
			<button
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
				${this.buildIcon(this.config.icon)}
				${this.buildLabel(this.config.label)}${this.buildRipple()}
			</button>
			${this.buildStyles(this.config.styles)}
		`;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				:host {
					align-content: center;
					text-align: center;
				}

				button {
					display: flex;
					height: inherit;
					width: inherit;
					border-radius: var(--size, 48px);
					overflow: visible;
					cursor: pointer;
					pointer-events: all;
					position: relative;
					opacity: 1;
					padding: 0;
					background: rgb(0, 0, 0, 0);
					border: none;
					flex-direction: column;
					align-content: center;
					text-align: center;
					justify-content: center;
					align-items: center;
					-webkit-tap-highlight-color: transparent;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}
			`,
		];
	}
}
