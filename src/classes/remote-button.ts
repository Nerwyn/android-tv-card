import { TemplateResult, CSSResult, html, css } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { HapticType } from 'custom-card-helpers';
import { renderTemplate } from 'ha-nunjucks';

import { ActionType } from '../models';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-button')
export class RemoteButton extends BaseRemoteElement {
	@property({ attribute: false }) actionKey!: string;
	@property({ attribute: false }) customIcon?: string;

	clickTimer?: ReturnType<typeof setTimeout>;
	clickCount: number = 0;

	holdTimer?: ReturnType<typeof setTimeout>;
	holdInterval?: ReturnType<typeof setInterval>;
	hold: boolean = false;

	clickAction(actionType: ActionType) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = undefined;
		this.clickCount = 0;

		const actionToHaptic: Record<ActionType, HapticType> = {
			tap_action: 'light',
			hold_action: 'medium',
			double_tap_action: 'success',
		};
		let haptic = actionToHaptic[actionType];
		if (['up', 'down', 'left', 'right'].includes(this.actionKey)) {
			haptic = 'selection';
		}
		this.fireHapticEvent(haptic);

		this.sendAction(actionType);
	}

	onClick(e: TouchEvent | MouseEvent) {
		e.stopImmediatePropagation();
		this.clickCount++;

		if (
			'double_tap_action' in this.actions &&
			this.actions.double_tap_action!.action != 'none'
		) {
			// Double tap action is defined
			if (this.clickCount > 1) {
				// Double tap action is triggered
				this.clickAction('double_tap_action');
			} else {
				// Single tap action is triggered if double tap is not within 200ms
				this.clickTimer = setTimeout(() => {
					this.clickAction('tap_action');
				}, 200);
			}
		} else {
			// No double tap action defiend, tap action is triggered
			this.clickAction('tap_action');
		}
	}

	@eventOptions({ passive: true })
	onHoldStart(_e: TouchEvent | MouseEvent) {
		this.holdTimer = setTimeout(() => {
			this.hold = true;

			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.actionKey)) {
				this.holdInterval = setInterval(() => {
					this.clickAction('tap_action')
				}, 100);
			} else {
				this.clickAction('hold_action')
			}
		}, 500);
	}

	onHoldEnd(e: TouchEvent | MouseEvent) {
		clearTimeout(this.holdTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.holdInterval as ReturnType<typeof setInterval>);

		if (this.hold) {
			// Hold action is triggered
			this.hold = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		} else {
			// Hold action is not triggered, fire tap action
			this.onClick(e);
		}

		this.holdTimer = undefined;
		this.holdInterval = undefined;
	}

	render(inputTemplate?: TemplateResult<1>) {
		const icon = renderTemplate(
			this.hass,
			this.actions.icon as string,
		) as string;
		const svgPath =
			renderTemplate(this.hass, this.actions.svg_path as string) ??
			renderTemplate(this.hass, this.customIcon as string);

		let haIcon = html``;
		if (icon) {
			haIcon = html`<ha-icon .icon="${icon}"></ha-icon>`;
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
					align-content: center;
					justify-content: center;
					text-align: center;
					align-items: center;
					z-index: 1;

					--size: 48px;
					--mdc-icon-size: var(--size);
					--mdc-icon-button-size: var(--size);
				}
			`,
		];
	}
}
