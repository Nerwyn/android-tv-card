import { html, css } from 'lit';
import {
	customElement,
	eventOptions,
	property,
	queryAsync,
} from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { Ripple } from '@material/mwc-ripple';
import { RippleHandlers } from '@material/mwc-ripple/ripple-handlers';

import { renderTemplate } from 'ha-nunjucks';

import { ActionType, IActions, DirectionAction } from '../models';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-touchpad')
export class RemoteTouchpad extends BaseRemoteElement {
	// https://github.com/home-assistant/frontend/blob/80edeebab9e6dfcd13751b5ed8ff005452826118/src/components/ha-control-button.ts#L31-L77
	@queryAsync('mwc-ripple') private _ripple!: Promise<Ripple | null>;
	private _rippleHandlers: RippleHandlers = new RippleHandlers(() => {
		return this._ripple;
	});

	@property({ attribute: false }) directionActions!: Record<
		DirectionAction,
		IActions
	>;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	holdTimer?: ReturnType<typeof setTimeout>;
	holdInterval?: ReturnType<typeof setInterval>;
	hold: boolean = false;
	holdStart: boolean = false;
	holdMove: boolean = false;
	holdAction?: DirectionAction;

	initialX?: number;
	initialY?: number;
	targetTouches?: TouchList;
	doubleTapCount: number = 0;

	clickAction(actionType: ActionType) {
		const haptic = this.actionToHaptic[actionType];
		this.fireHapticEvent(haptic);

		this.sendAction(actionType);
		this.endAction();
	}

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;
		const doubleTapThreshold = this.targetTouches?.length || 1;
		// if (this.targetTouches) {
		// 	// Track number of fingers used during double taps to prevent it being triggered immediately
		// 	if (
		// 		!this.doubleTapCount ||
		// 		this.targetTouches.length == this.doubleTapCount
		// 	) {
		// 		this.doubleTapCount++;
		// 		this.clickCount++;
		// 	} else if (this.targetTouches.length > this.doubleTapCount) {
		// 		this.doubleTapCount = this.targetTouches.length;
		// 	}
		// 	console.log('clickCount: ' + this.clickCount);
		// 	console.log('doubleTapCount: ' + this.doubleTapCount);
		// } else {
		// 	this.clickCount++;
		// }

		console.log('Debug 1');
		console.log(this.targetTouches);
		if (this.targetTouches) {
			console.log(this.targetTouches.length);
		}

		if (
			('double_tap_action' in this.actions &&
				this.actions.double_tap_action!.action != 'none') ||
			('multi_double_tap_action' in this.actions &&
				this.actions.multi_double_tap_action!.action != 'none')
		) {
			console.log('Debug 2');
			console.log(this.targetTouches);
			if (this.targetTouches) {
				console.log(this.targetTouches.length);
			}

			// Double tap action is defined
			if (this.clickCount > doubleTapThreshold) {
				// Double tap action is triggered
				console.log('Debug 3');
				console.log(this.targetTouches);
				if (this.targetTouches) {
					console.log(this.targetTouches.length);
				}
				this.clickAction(
					this.targetTouches && this.targetTouches.length > 1
						? 'multi_double_tap_action'
						: 'double_tap_action',
				);
			} else {
				// Single tap action is triggered if double tap is not within 200ms
				if (!this.clickTimer) {
					console.log('Debug 4');
					console.log(this.targetTouches);
					if (this.targetTouches) {
						console.log(this.targetTouches.length);
					}
					this.clickTimer = setTimeout(() => {
						console.log('Debug 5');
						console.log(this.targetTouches);
						if (this.targetTouches) {
							console.log(this.targetTouches.length);
						}
						this.clickAction(
							this.targetTouches && this.targetTouches.length > 1
								? 'multi_tap_action'
								: 'tap_action',
						);
					}, 200);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			console.log('Debug 6');
			console.log(this.targetTouches);
			if (this.targetTouches) {
				console.log(this.targetTouches.length);
			}
			this.clickAction(
				this.targetTouches && this.targetTouches.length > 1
					? 'multi_tap_action'
					: 'tap_action',
			);
		}
	}

	@eventOptions({ passive: true })
	onHoldStart(e: TouchEvent | MouseEvent) {
		this._rippleHandlers.startPress(e as unknown as Event);
		this.holdStart = true;

		if (!this.holdTimer) {
			this.holdTimer = setTimeout(() => {
				this.hold = true;

				// Only repeat hold action for directional keys
				if (
					['up', 'down', 'left', 'right'].includes(
						this.holdAction as DirectionAction,
					)
				) {
					if (!this.holdInterval) {
						this.holdInterval = setInterval(() => {
							if (!this.hold) {
								this.endAction();
							}
							this.fireHapticEvent('selection');
							this.sendAction(
								this.targetTouches &&
									this.targetTouches.length > 1
									? 'multi_tap_action'
									: 'tap_action',
								this.directionActions[this.holdAction!],
							);
						}, 100);
					}
				} else {
					this.fireHapticEvent('medium');
					this.sendAction(
						this.targetTouches && this.targetTouches.length > 1
							? 'multi_hold_action'
							: 'hold_action',
					);
					this.endAction();
				}
			}, 500);
		}

		if ('targetTouches' in e) {
			let totalX = 0;
			let totalY = 0;
			this.targetTouches = e.targetTouches;
			for (const touch of this.targetTouches) {
				totalX += touch.clientX;
				totalY += touch.clientY;
			}
			this.initialX = totalX / this.targetTouches.length;
			this.initialY = totalY / this.targetTouches.length;
		} else {
			this.initialX = e.clientX;
			this.initialY = e.clientY;
		}
	}

	onHoldEnd(e: TouchEvent | MouseEvent) {
		this._rippleHandlers.endPress();

		if (this.hold || this.holdMove) {
			e.stopImmediatePropagation();
			e.preventDefault();
			this.endAction();
		} else if (
			(this.touchscreen && this.targetTouches) ||
			!this.touchscreen
		) {
			this.onClick(e);
		}
	}

	@eventOptions({ passive: true })
	onHoldMove(e: TouchEvent | MouseEvent) {
		if (!this.initialX || !this.initialY || !this.holdStart) {
			return;
		}

		let currentX: number = 0;
		let currentY: number = 0;
		if ('targetTouches' in e) {
			this.targetTouches = e.targetTouches;
			for (const touch of this.targetTouches) {
				currentX += touch.clientX;
				currentY += touch.clientY;
			}
			currentX = currentX / this.targetTouches.length;
			currentY = currentY / this.targetTouches.length;
		} else {
			currentX = e.clientX || 0;
			currentY = e.clientY || 0;
		}

		const diffX = this.initialX - currentX;
		const diffY = this.initialY - currentY;

		// Only consider significant enough movement
		const sensitivity = 2;
		if (Math.abs(Math.abs(diffX) - Math.abs(diffY)) > sensitivity) {
			if (Math.abs(diffX) > Math.abs(diffY)) {
				// Sliding horizontally
				this.holdAction = diffX > 0 ? 'left' : 'right';
			} else {
				// Sliding vertically
				this.holdAction = diffY > 0 ? 'up' : 'down';
			}
			if (!this.holdMove) {
				this.fireHapticEvent('selection');
				this.sendAction(
					this.targetTouches && this.targetTouches.length > 1
						? 'multi_tap_action'
						: 'tap_action',
					this.directionActions[this.holdAction!],
				);
				this.holdMove = true;
			}
		}
	}

	onMouseLeave(_e: MouseEvent) {
		this._rippleHandlers.endHover();
		this.endAction();
	}

	onTouchCancel(_e: TouchEvent) {
		this._rippleHandlers.endPress();
		this.endAction();
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
		this.holdAction = undefined;
		this.clickCount = 0;

		this.initialX = undefined;
		this.initialY = undefined;
		this.targetTouches = undefined;
		this.doubleTapCount = 0;
	}

	render() {
		const style = structuredClone(this._style ?? {});
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
			) as string;
		}

		if (this.touchscreen) {
			return html`
				<toucharea
					style=${styleMap(style)}
					@touchstart=${this.onHoldStart}
					@touchend=${this.onHoldEnd}
					@touchmove=${this.onHoldMove}
					@touchcancel=${this.onTouchCancel}
					@mouseenter=${this._rippleHandlers.startHover}
					@mouseleave=${this.onMouseLeave}
					@focus=${this._rippleHandlers.startFocus}
					@blur=${this._rippleHandlers.endFocus}
				>
					<mwc-ripple></mwc-ripple>
				</toucharea>
			`;
		} else {
			return html`
				<toucharea
					style=${styleMap(style)}
					@mousedown=${this.onHoldStart}
					@mouseup=${this.onHoldEnd}
					@mousemove=${this.onHoldMove}
					@touchcancel=${this.onTouchCancel}
					@mouseenter=${this._rippleHandlers.startHover}
					@mouseleave=${this.onMouseLeave}
					@focus=${this._rippleHandlers.startFocus}
					@blur=${this._rippleHandlers.endFocus}
				>
					<mwc-ripple></mwc-ripple>
				</toucharea>
			`;
		}
	}

	static get styles() {
		return css`
			:host {
				display: contents;
			}
			toucharea {
				border-radius: 32px;
				flex-grow: 1;
				height: 250px;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				background: var(
					--secondary-background-color,
					rgb(111, 118, 125)
				);
				touch-action: none;
				text-align: center;
				position: relative;
				z-index: 0;
				overflow: hidden;
				--mdc-ripple-press-opacity: 0.04;
			}
			mwc-ripple {
				top: unset;
				left: unset;
				height: inherit;
				width: inherit;
			}
		`;
	}
}
