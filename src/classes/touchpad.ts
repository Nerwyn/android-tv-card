import { html, css } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-touchpad')
export class RemoteTouchpad extends BaseRemoteElement {
	@property({ attribute: false }) enableDoubleClick?: boolean;
	@property({ attribute: false }) doubleClickAction?: string;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number;
	touchAction: string;
	touchTimer?: ReturnType<typeof setTimeout>;
	touchInterval?: ReturnType<typeof setInterval>;
	touchLongClick: boolean;
	touchLongClickKey?: string;

	constructor() {
		super();
		this.clickCount = 0;
		this.touchAction = '';
		this.touchLongClick = false;
	}

	onClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		const click_action = () => {
			clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
			this.clickTimer = undefined;
			this.fireHapticEvent('light');
			this.sendCommand('center');
			this.clickCount = 0;
		};
		if (e.detail && e.detail > this.clickCount) {
			this.clickCount++;
		}
		if (this.enableDoubleClick ?? false) {
			if (this.clickCount == 2) {
				this.onDblClick(e);
			} else {
				this.clickTimer = setTimeout(click_action, 200);
			}
		} else {
			click_action();
		}
	}

	onDblClick(_e: Event) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = undefined;
		this.clickCount = 0;

		this.fireHapticEvent('success');
		const action = this.doubleClickAction ?? 'back';
		this.sendCommand(action);
	}

	@eventOptions({ passive: true })
	onTouchStart(e: TouchEvent) {
		this.touchTimer = setTimeout(() => {
			this.touchLongClick = true;

			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.touchAction)) {
				this.touchInterval = setInterval(() => {
					this.sendCommand(this.touchAction);
				}, 100);
			} else {
				this.sendCommand(this.touchLongClickKey ?? 'center', true);
			}
		}, 500);

		window.initialX = e.touches[0].clientX;
		window.initialY = e.touches[0].clientY;
	}

	@eventOptions({ passive: true })
	onTouchEnd(e: Event) {
		if (this.touchLongClick) {
			this.touchLongClick = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}
		clearTimeout(this.touchTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.touchInterval as ReturnType<typeof setInterval>);
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);

		this.touchAction = '';
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
		this.touchAction = action;
		this.sendCommand(action);

		window.initialX = undefined;
		window.initialY = undefined;
	}

	render() {
		let style = {};
		if (this.elementStyle) {
			style = styleMap(this.elementStyle);
		}

		return html`
			<toucharea
				style=${style}
				@click=${this.onClick}
				@touchstart=${this.onTouchStart}
				@touchmove=${this.onTouchMove}
				@touchend=${this.onTouchEnd}
			>
			</toucharea>
		`;
	}

	static get styles() {
		return css`
			toucharea {
				border-radius: 32px;
				flex-grow: 1;
				height: 250px;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				background: #6d767e;
				touch-action: none;
				text-align: center;
			}
		`;
	}
}
