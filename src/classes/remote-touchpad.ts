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

import { IAction, TouchAction } from '../models';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-touchpad')
export class RemoteTouchpad extends BaseRemoteElement {
	// https://github.com/home-assistant/frontend/blob/80edeebab9e6dfcd13751b5ed8ff005452826118/src/components/ha-control-button.ts#L31-L77
	@queryAsync('mwc-ripple') private _ripple!: Promise<Ripple | null>;
	private _rippleHandlers: RippleHandlers = new RippleHandlers(() => {
		return this._ripple;
	});

	@property({ attribute: false }) enableDoubleClick?: boolean;
	@property({ attribute: false }) touchActions!: Record<TouchAction, IAction>;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	touchAction?: TouchAction;
	touchTimer?: ReturnType<typeof setTimeout>;
	touchInterval?: ReturnType<typeof setInterval>;
	touchLongClick: boolean = false;

	onClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		const clickAction = () => {
			clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
			this.clickTimer = undefined;
			this.fireHapticEvent('light');
			this.sendAction(this.touchActions['center'], 'single');
			this.clickCount = 0;
		};
		if (e.detail && e.detail > this.clickCount) {
			this.clickCount++;
		}
		if (
			renderTemplate(
				this.hass,
				this.enableDoubleClick as unknown as string,
			) ??
			false
		) {
			if (this.clickCount == 2) {
				this.onDblClick(e);
			} else {
				this.clickTimer = setTimeout(clickAction, 200);
			}
		} else {
			clickAction();
		}
	}

	onDblClick(_e: MouseEvent) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = undefined;
		this.clickCount = 0;

		this.fireHapticEvent('success');
		this.sendAction(this.touchActions.double, 'double');
	}

	@eventOptions({ passive: true })
	onTouchStart(e: TouchEvent) {
		this._rippleHandlers.startPress(e);

		this.touchTimer = setTimeout(() => {
			this.touchLongClick = true;

			// Only repeat hold action for directional keys
			if (
				['up', 'down', 'left', 'right'].includes(
					this.touchAction as TouchAction,
				)
			) {
				this.touchInterval = setInterval(() => {
					this.fireHapticEvent('selection');
					this.sendAction(
						this.touchActions[this.touchAction as TouchAction],
						'single',
					);
				}, 100);
			} else {
				this.fireHapticEvent('medium');
				this.sendAction(this.touchActions.hold, 'hold');
			}
		}, 500);

		window.initialX = e.touches[0].clientX;
		window.initialY = e.touches[0].clientY;
	}

	onTouchEnd(e: Event) {
		this._rippleHandlers.endPress();

		if (this.touchLongClick) {
			this.touchLongClick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}
		clearTimeout(this.touchTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.touchInterval as ReturnType<typeof setInterval>);
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);

		this.touchAction = undefined;
		this.touchTimer = undefined;
		this.touchInterval = undefined;
		this.clickTimer = undefined;
	}

	@eventOptions({ passive: true })
	onTouchMove(e: TouchEvent) {
		if (!window.initialX || !window.initialY) {
			return;
		}

		const currentX = e.touches[0].clientX || 0;
		const currentY = e.touches[0].clientY || 0;

		const diffX = window.initialX - currentX;
		const diffY = window.initialY - currentY;

		let action;
		if (Math.abs(diffX) > Math.abs(diffY)) {
			// Sliding horizontally
			action = diffX > 0 ? 'left' : 'right';
		} else {
			// Sliding vertically
			action = diffY > 0 ? 'up' : 'down';
		}
		this.fireHapticEvent('selection');
		this.touchAction = action as TouchAction;
		this.sendAction(this.touchActions[action as TouchAction], 'single');

		window.initialX = undefined;
		window.initialY = undefined;
	}

	render() {
		const style = structuredClone(this._style ?? {});
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
			) as string;
		}

		return html`
			<toucharea
				style=${styleMap(style)}
				@click=${this.onClick}
				@touchstart=${this.onTouchStart}
				@touchmove=${this.onTouchMove}
				@touchend=${this.onTouchEnd}
				@focus=${this._rippleHandlers.startFocus}
				@blur=${this._rippleHandlers.endFocus}
				@mousedown=${this._rippleHandlers.startPress}
				@mouseup=${this._rippleHandlers.endPress}
				@mouseenter=${this._rippleHandlers.startHover}
				@mouseleave=${this._rippleHandlers.endHover}
			>
				<mwc-ripple></mwc-ripple>
			</toucharea>
		`;
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
