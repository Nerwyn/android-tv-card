import { TemplateResult, CSSResult, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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

	longTimer?: ReturnType<typeof setTimeout>;
	longInterval?: ReturnType<typeof setInterval>;

	clickAction(actionType: ActionType) {
		clearTimeout(this.clickTimer as ReturnType<typeof setTimeout>);
		this.clickTimer = undefined;

		const actionToHaptic: Record<ActionType, HapticType> = {
			single: 'light',
			hold: 'medium',
			double: 'success',
		};
		let haptic = actionToHaptic[actionType];
		if (['up', 'down', 'left', 'right'].includes(this.actionKey)) {
			haptic = 'selection';
		}
		this.fireHapticEvent(haptic);

		let action;
		switch (actionType) {
			case 'hold':
				action = this.actions.hold_action!;
				break;
			case 'double':
				action = this.actions.double_tap_action!;
				break;
			case 'single':
			default:
				action = this.actions.tap_action!;
				break;
		}
		this.sendAction(action, actionType);

		this.clickCount = 0;
	}

	onClick(e: MouseEvent) {
		e.stopImmediatePropagation();
		if (e.detail && e.detail > this.clickCount) {
			this.clickCount++;
		}

		if ('double_tap_action' in this.actions) {
			if (this.clickCount == 2) {
				this.clickAction('double');
			} else {
				this.clickTimer = setTimeout(() => {
					this.clickAction('single');
				}, 200);
			}
		} else {
			this.clickAction('single');
		}
	}

	onlongClickStart(_e: TouchEvent) {
		this.longTimer = setTimeout(() => {
			this.hold = true;

			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.actionKey)) {
				this.longInterval = setInterval(() => {
					this.clickAction('single')
				}, 100);
			} else {
				this.clickAction('hold')
			}
		}, 500);
	}

	onlongClickEnd(e: TouchEvent) {
		if (this.hold) {
			this.hold = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}

		clearTimeout(this.longTimer as ReturnType<typeof setTimeout>);
		clearInterval(this.longInterval as ReturnType<typeof setInterval>);

		this.longTimer = undefined;
		this.longInterval = undefined;
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

		return html`
			<ha-icon-button
				title="${action}"
				style=${styleMap(style)}
				@click=${this.onClick}
				@touchstart=${this.onlongClickStart}
				@touchend=${this.onlongClickEnd}
				.action=${action}
				.path=${svgPath}
			>
				${haIcon}${inputTemplate}
			</ha-icon-button>
		`;
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

					--size: 48px;
					--mdc-icon-size: var(--size);
					--mdc-icon-button-size: var(--size);
				}
			`,
		];
	}
}
