import { HapticType } from 'custom-card-helpers';

import { TemplateResult, CSSResult, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import {
	IKey,
	ISource,
	ICustomAction,
	defaultKeys,
	defaultSources,
} from '../models';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-button')
export class RemoteButton extends BaseRemoteElement {
	@property({ attribute: false }) info!: IKey | ISource | ICustomAction;
	@property({ attribute: false }) actionKey!: string;
	@property({ attribute: false }) customIcon?: string;

	timer?: ReturnType<typeof setTimeout>;
	interval?: ReturnType<typeof setInterval>;

	constructor() {
		super();
	}

	onClick(_e: Event, longPress: boolean = false) {
		let haptic: HapticType = longPress ? 'medium' : 'light';
		if (['up', 'down', 'left', 'right'].includes(this.actionKey)) {
			haptic = 'selection';
		}
		this.fireHapticEvent(haptic);

		this.sendAction(this.info, longPress);
	}

	onlongClickStart(e: Event) {
		this.timer = setTimeout(() => {
			this.longPress = true;

			// Only repeat hold action for directional keys and volume
			// prettier-ignore
			if (['up', 'down', 'left', 'right', 'volume_up', 'volume_down', 'delete'].includes(this.actionKey)) {
				this.interval = setInterval(() => {
					this.onClick(e, false)
				}, 100);
			} else {
				this.onClick(e, true)
			}
		}, 500);
	}

	onlongClickEnd(e: Event) {
		if (this.longPress) {
			this.longPress = false;
			e.stopImmediatePropagation();
			e.preventDefault();
		}

		clearTimeout(this.timer as ReturnType<typeof setTimeout>);
		clearInterval(this.interval as ReturnType<typeof setInterval>);

		this.timer = undefined;
		this.interval = undefined;
	}

	render(inputTemplate?: TemplateResult<1>) {
		let style = {};
		if (this.elementStyle) {
			style = this.elementStyle;
		}

		let icon = this.info?.icon ?? '';
		let svg_path = this.info.svg_path ?? this.customIcon ?? '';

		// Use original icon if none provided for custom key or source
		if (!(icon || svg_path)) {
			const iconInfo =
				defaultKeys[this.actionKey] ||
				defaultSources[this.actionKey] ||
				{};
			icon = iconInfo?.icon ?? '';
			svg_path = iconInfo?.svg_path ?? '';
		}

		return html`
			<ha-icon-button
				title="${this.actionKey}"
				style=${styleMap(style)}
				@click=${this.onClick}
				@touchstart=${this.onlongClickStart}
				@touchend=${this.onlongClickEnd}
				.action=${this.actionKey}
				.path=${svg_path}
			>
				<ha-icon .icon="${!svg_path ? icon : ''}"></ha-icon>
				${inputTemplate}
			</ha-icon-button>
		`;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				ha-icon-button {
					width: 48px;
					height: 48px;
					cursor: pointer;
					--mdc-icon-size: 100%;
					position: relative;
					display: inline-flex;
					flex-direction: column;
					align-content: center;
					justify-content: center;
					text-align: center;
					align-items: center;
				}
			`,
		];
	}
}
