import { CSSResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-button')
export class RemoteButton extends BaseRemoteElement {
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
				// Single tap action is triggered if double tap is not within 200ms
				const doubleTapWindow: number =
					'double_tap_window' in (this.config.double_tap_action ?? {})
						? (this.renderTemplate(
								this.config.double_tap_action
									?.double_tap_window as unknown as string,
						  ) as number)
						: 200;
				if (!this.clickTimer) {
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
		this.cancelRippleToggle();
		this.swiping = false;
		if ('targetTouches' in e) {
			this.initialX = e.targetTouches[0].clientX;
			this.initialY = e.targetTouches[0].clientY;
		} else {
			this.initialX = e.clientX;
			this.initialY = e.clientY;
		}

		if (
			this.renderTemplate(
				this.config.momentary_start_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.buttonPressStart = performance.now();
			this.sendAction('momentary_start_action');
		} else if (
			this.renderTemplate(
				this.config.momentary_end_action?.action ?? 'none',
			) != 'none'
		) {
			this.fireHapticEvent('light');
			this.buttonPressStart = performance.now();
		} else if (!this.holdTimer) {
			const holdTime = this.renderTemplate(
				this.config.hold_action?.hold_time ?? 500,
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
							this.config.hold_action?.repeat_delay ?? 100,
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
				this.buttonPressEnd = performance.now();
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

		const diffX = (this.initialX ?? currentX) - currentX;
		const diffY = (this.initialY ?? currentY) - currentY;

		// Only consider significant enough movement
		const sensitivity = 8;
		if (Math.abs(Math.abs(diffX) - Math.abs(diffY)) > sensitivity) {
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
				style=${styleMap(this.buildStyle(this.config.style ?? {}))}
			>
				${this.buildIcon(this.config.icon)}${this.buildRipple()}
			</button>
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
					z-index: 1;
					align-content: center;
					text-align: center;
					justify-content: center;
					align-items: center;

					--mdc-icon-size: var(--size, 48px);
				}
			`,
		];
	}
}
