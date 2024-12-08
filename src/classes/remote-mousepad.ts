import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HOLD_TIME } from '../models/constants';
import { IMousepadConfig } from '../models/interfaces';
import { RemoteTouchpad } from './remote-touchpad';

@customElement('remote-mousepad')
export class RemoteMousepad extends RemoteTouchpad {
	@property() config!: IMousepadConfig;

	onStart(e: TouchEvent | MouseEvent) {
		this.cancelRippleToggle();
		this.holdStart = true;

		if (!this.holdTimer) {
			this.setHoldTimer();
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

	onEnd(e: TouchEvent | MouseEvent) {
		if (this.hold || this.holdMove) {
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
			currentX = e.clientX ?? 0;
			currentY = e.clientY ?? 0;
		}

		this.deltaX = this.initialX - currentX;
		this.deltaY = this.initialY - currentY;
		this.initialX = currentX;
		this.initialY = currentY;
		console.log(`${this.deltaX},${this.deltaY}`);

		// Only consider significant enough movement
		const sensitivity = 2;
		if (
			this.holdMove ||
			Math.abs(Math.abs(this.deltaX) - Math.abs(this.deltaY)) >
				sensitivity
		) {
			clearTimeout(this.holdTimer);
			this.holdMove = true;
			this.sendAction(`${this.getMultiPrefix()}mouse_action`);
		}
	}

	setHoldTimer() {
		const holdAction = `${this.getMultiPrefix()}hold_action`;

		const holdTime = this.renderTemplate(
			this.config[holdAction as 'hold_action']?.hold_time ?? HOLD_TIME,
		) as number;

		this.holdTimer = setTimeout(() => {
			this.hold = true;
			const actions = this.getActions();

			this.fireHapticEvent('medium');
			this.sendAction(`${this.getMultiPrefix()}hold_action`, actions);
		}, holdTime);
	}

	render() {
		this.setValue();
		return html`<mousearea
			@mousedown=${this.onMouseDown}
			@mouseup=${this.onMouseUp}
			@mousemove=${this.onMouseMove}
			@mouseleave=${this.onMouseLeave}
			@touchstart=${this.onTouchStart}
			@touchend=${this.onTouchEnd}
			@touchmove=${this.onTouchMove}
			@touchcancel=${this.onTouchCancel}
			@contextmenu=${this.onContextMenu}
			>${this.buildIcon(this.config.icon)}${this.buildLabel(
				this.config.label,
			)}</mousearea
		>`;
	}
}
