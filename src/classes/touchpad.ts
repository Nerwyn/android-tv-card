import { html, css } from 'lit';
import { customElement, property, eventOptions } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { IKey, ISource, ICustomAction, defaultKeys } from '../models';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-touchpad')
export class RemoteTouchpad extends BaseRemoteElement {
	@property({ attribute: false }) enableDoubleClick?: boolean;
	@property({ attribute: false }) upInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) downInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) leftInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) rightInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) centerInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) doubleInfo!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) longInfo!: IKey | ISource | ICustomAction;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number;
	touchAction: string;
	touchTimer?: ReturnType<typeof setTimeout>;
	touchInterval?: ReturnType<typeof setInterval>;
	touchLongClick: boolean;
	info: Record<string, IKey | ISource | ICustomAction>;

	constructor() {
		super();
		this.clickCount = 0;
		this.touchAction = '';
		this.touchLongClick = false;
		this.info = {
			up: this.upInfo,
			down: this.downInfo,
			left: this.leftInfo,
			right: this.rightInfo,
			center: this.centerInfo,
			double: this.doubleInfo,
			long: this.longInfo,
		};
	}

	onClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		const click_action = () => {
			clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
			this.clickTimer = undefined;
			this.fireHapticEvent('light');
			this.sendAction(this.info['center']);
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
		const info = this.doubleInfo ?? defaultKeys['back'];
		this.sendAction(info);
	}

	@eventOptions({ passive: true })
	onTouchStart(e: TouchEvent) {
		this.touchTimer = setTimeout(() => {
			this.touchLongClick = true;

			// Only repeat hold action for directional keys
			if (['up', 'down', 'left', 'right'].includes(this.touchAction)) {
				this.touchInterval = setInterval(() => {
					this.sendAction(this.info[this.touchAction]);
				}, 100);
			} else {
				this.sendAction(this.info['long'], true);
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
		this.sendAction(this.info[action]);

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
