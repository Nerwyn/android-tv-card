import { html, css } from 'lit';
import { customElement, property, queryAsync } from 'lit/decorators.js';
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
	multiTap = false;

	clickAction(actionType: ActionType) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.cancelEndAction();

		const haptic = this.actionToHaptic[actionType];
		this.fireHapticEvent(haptic);

		this.sendAction(actionType);
	}

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		e.preventDefault();
		this.clickCount++;

		if (
			'double_tap_action' in this.actions &&
			this.actions.double_tap_action!.action != 'none'
		) {
			// Double tap action is defined
			if (this.clickCount > 1) {
				// Double tap action is triggered
				this.clickAction(
					this.multiTap
						? 'multi_double_tap_action'
						: 'double_tap_action',
				);
			} else {
				// Single tap action is triggered if double tap is not within 200ms
				if (!this.clickTimer) {
					this.clickTimer = setTimeout(() => {
						this.clickAction(
							this.multiTap ? 'multi_tap_action' : 'tap_action',
						);
					}, 200);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			this.clickAction(this.multiTap ? 'multi_tap_action' : 'tap_action');
		}

		this.cancelEndAction();
	}

	onHoldStart(e: TouchEvent | MouseEvent) {
		e.preventDefault();
		this._rippleHandlers.startPress(e as unknown as Event);
		this.holdStart = true;

		if ('targetTouches' in e) {
			const targetTouches = e.targetTouches;
			this.initialX = targetTouches[0].clientX;
			this.initialY = targetTouches[0].clientY;
			this.multiTap = targetTouches.length > 1;
		} else {
			this.initialX = e.clientX;
			this.initialY = e.clientY;
		}

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
							this.fireHapticEvent('selection');
							this.sendAction(
								this.multiTap
									? 'multi_tap_action'
									: 'tap_action',
								this.directionActions[this.holdAction!],
							);
							if (!this.hold) {
								this.cancelEndAction();
							}
						}, 100);
					}
				} else {
					this.fireHapticEvent('medium');
					this.sendAction(
						this.multiTap ? 'multi_hold_action' : 'hold_action',
					);
					this.cancelEndAction();
				}
			}, 500);
		}
	}

	onHoldEnd(e: TouchEvent | MouseEvent) {
		this._rippleHandlers.endPress();

		if (this.hold || this.holdMove) {
			this.hold = false;
			this.holdMove = false;
			e.stopImmediatePropagation();
			e.preventDefault();
			this.cancelEndAction();
		} else {
			this.onClick(e);
		}
	}

	onHoldMove(e: TouchEvent | MouseEvent) {
		e.preventDefault();

		if (!this.initialX || !this.initialY || !this.holdStart) {
			return;
		}
		this.holdMove = true;

		let currentX: number;
		let currentY: number;
		if ('targetTouches' in e) {
			const targetTouches = e.targetTouches;
			currentX = targetTouches[0].clientX || 0;
			currentY = targetTouches[0].clientY || 0;
			this.multiTap = targetTouches.length > 1;
		} else {
			currentX = e.clientX || 0;
			currentY = e.clientY || 0;
		}

		const diffX = this.initialX - currentX;
		const diffY = this.initialY - currentY;

		let action;
		if (Math.abs(diffX) > Math.abs(diffY)) {
			// Sliding horizontally
			action = diffX > 0 ? 'left' : 'right';
		} else {
			// Sliding vertically
			action = diffY > 0 ? 'up' : 'down';
		}
		this.fireHapticEvent('selection');
		this.holdAction = action as DirectionAction;
		this.sendAction(
			this.multiTap ? 'multi_tap_action' : 'tap_action',
			this.directionActions[this.holdAction!],
		);

		this.initialX = undefined;
		this.initialY = undefined;
	}

	onMouseLeave(_e: MouseEvent) {
		this._rippleHandlers.endHover();
		this.cancelEndAction();
	}

	onTouchCancel(_e: TouchEvent) {
		this._rippleHandlers.endPress();
		this.cancelEndAction();
	}

	cancelEndAction() {
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
		this.multiTap = false;
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
