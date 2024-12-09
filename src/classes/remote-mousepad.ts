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

		this.setInitialXY(e);
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

		this.setDeltaXY(e);

		// Only consider significant enough movement
		const sensitivity = 2;
		if (
			this.holdMove ||
			Math.abs(Math.abs(this.deltaX ?? 0) - Math.abs(this.deltaY ?? 0)) >
				sensitivity
		) {
			if (this.holdTimer) {
				clearTimeout(this.holdTimer);
				this.holdMove = true;
				this.sendAction(`${this.getMultiPrefix()}mouse_action`);
			}
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
