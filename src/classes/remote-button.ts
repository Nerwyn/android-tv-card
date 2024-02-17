import { TemplateResult, CSSResult, html, css } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { renderTemplate } from 'ha-nunjucks';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-button')
export class RemoteButton extends BaseRemoteElement {
	@property({ attribute: false }) actionKey!: string;
	@property({ attribute: false }) icons!: Record<string, string>;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	holdTimer?: ReturnType<typeof setTimeout>;
	holdInterval?: ReturnType<typeof setInterval>;
	hold: boolean = false;

	holdMove: boolean = false;
	initialX?: number;
	initialY?: number;

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;

		if (
			'double_tap_action' in this.actions &&
			renderTemplate(this.hass, this.actions.double_tap_action!.action) !=
				'none'
		) {
			// Double tap action is defined
			if (this.clickCount > 1) {
				// Double tap action is triggered
				this.fireHapticEvent('success');
				this.sendAction('double_tap_action');
				this.endAction();
			} else {
				// Single tap action is triggered if double tap is not within 200ms
				if (!this.clickTimer) {
					this.clickTimer = setTimeout(() => {
						this.fireHapticEvent('light');
						this.sendAction('tap_action');
						this.endAction();
					}, 200);
				}
			}
		} else {
			// No double tap action defined, tap action is triggered
			this.fireHapticEvent('light');
			this.sendAction('tap_action');
			this.endAction();
		}
	}

	@eventOptions({ passive: true })
	onHoldStart(e: TouchEvent | MouseEvent) {
		this.holdMove = false;
		if ('targetTouches' in e) {
			this.initialX = e.targetTouches[0].clientX;
			this.initialY = e.targetTouches[0].clientY;
		} else {
			this.initialX = e.clientX;
			this.initialY = e.clientY;
		}

		if ('button_press' in this.actions) {
			this.buttonPressStart = new Date().getTime();
			this.sendAction('button_press');
		} else if (!this.holdTimer) {
			this.holdTimer = setTimeout(() => {
				if (!this.holdMove) {
					this.hold = true;

					if (
						renderTemplate(
							this.hass,
							this.actions.hold_action?.action as string,
						) == 'repeat'
					) {
						const repeat_delay =
							'repeat_delay' in this.actions.hold_action!
								? (renderTemplate(
										this.hass,
										this.actions.hold_action
											.repeat_delay as unknown as string,
								  ) as number)
								: 100;
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
			}, 500);
		}
	}

	onHoldEnd(e: TouchEvent | MouseEvent) {
		if (!this.holdMove) {
			if ('button_press' in this.actions) {
				if ('button_release' in this.actions) {
					this.buttonPressEnd = new Date().getTime();
					this.sendAction('button_release');
				}
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
	}

	@eventOptions({ passive: true })
	onHoldMove(e: TouchEvent | MouseEvent) {
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
			this.holdMove = true;
		}
	}

	onMouseLeave(_e: MouseEvent) {
		this.endAction();
		this.holdMove = true;
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

		this.holdMove = false;
		this.initialX = undefined;
		this.initialY = undefined;

		super.endAction();
	}

	render(inputTemplate?: TemplateResult<1>) {
		const icon =
			(renderTemplate(this.hass, this.actions.icon!) as string) ?? '';

		let haIcon = html``;
		let svgPath;
		if (icon.includes(':')) {
			haIcon = html`<ha-icon .icon="${icon}"></ha-icon>`;
		} else {
			svgPath = this.icons[icon] ?? icon;
		}

		const style = structuredClone(this._style ?? {});
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
			) as string;
		}

		const action = renderTemplate(this.hass, this.actionKey);

		if (this.touchscreen) {
			return html`
				<ha-icon-button
					title="${action}"
					style=${styleMap(style)}
					@touchstart=${this.onHoldStart}
					@touchend=${this.onHoldEnd}
					@touchmove=${this.onHoldMove}
					.action=${action}
					.path=${svgPath}
				>
					${haIcon}${inputTemplate}
				</ha-icon-button>
			`;
		} else {
			return html`
				<ha-icon-button
					title="${action}"
					style=${styleMap(style)}
					@mousedown=${this.onHoldStart}
					@mouseup=${this.onHoldEnd}
					@mousemove=${this.onHoldMove}
					@mouseleave=${this.onMouseLeave}
					.action=${action}
					.path=${svgPath}
				>
					${haIcon}${inputTemplate}
				</ha-icon-button>
			`;
		}
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				ha-icon-button,
				ha-icon,
				svg {
					display: flex;
					height: var(--size);
					width: var(--size);
				}
				ha-icon-button {
					cursor: pointer;
					position: relative;
					display: inline-flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					align-items: center;
					z-index: 1;

					--size: 48px;
					--mdc-icon-size: var(--size);
					--mdc-icon-button-size: var(--size);
					-webkit-tap-highlight-color: transparent;
				}
			`,
		];
	}
}
