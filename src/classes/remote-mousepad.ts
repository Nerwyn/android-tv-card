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
			this.targetTouches = e.targetTouches;
			const touch = Array.from(this.targetTouches).filter(
				(t) => t.identifier == 0,
			)[0];
			if (!touch) {
				return;
			}
			this.initialX = touch.clientX;
			this.initialY = touch.clientY;
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
			const touch = Array.from(this.targetTouches).filter(
				(t) => t.identifier == 0,
			)[0];
			if (!touch) {
				return;
			}
			currentX = touch.clientX;
			currentY = touch.clientY;
		} else {
			currentX = e.clientX ?? 0;
			currentY = e.clientY ?? 0;
		}

		this.deltaX = currentX - this.initialX;
		this.deltaY = currentY - this.initialY;
		this.initialX = currentX;
		this.initialY = currentY;

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
}
