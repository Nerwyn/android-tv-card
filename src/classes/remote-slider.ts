import { CSSResult, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@state() showTooltip: boolean = false;
	@state() sliderOn: boolean = true;
	@state() currentValue = this.value;

	class: string = 'slider';
	oldValue?: number;
	newValue?: number;
	speed: number = 0.02;
	range: [number, number] = [0, 1];
	step: number = 0.01;
	vertical: boolean = false;
	intervalId?: ReturnType<typeof setTimeout>;
	tooltipOffset: number = 0;

	onInput(e: InputEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.swiping) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.value = slider.value;

			this.fireHapticEvent('selection');

			const start = parseFloat(
				(this.oldValue as unknown as string) ?? this.value ?? '0',
			);
			const end = parseFloat(slider.value ?? start);
			this.newValue = end;

			this.currentValue = start;
			this.setTooltip(slider, true);

			if (end > this.range[0]) {
				this.sliderOn = true;
			}

			clearInterval(this.intervalId);
			this.intervalId = undefined;
			let i = start;
			if (start > end) {
				this.intervalId = setInterval(() => {
					i -= this.speed;
					this.currentValue = i;
					this.setTooltip(slider, this.showTooltip);

					if (end >= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setTooltip(slider, this.showTooltip);
					}
				}, 1);
			} else if (start < end) {
				this.sliderOn = true;
				this.intervalId = setInterval(() => {
					i += this.speed;
					this.currentValue = i;
					this.setTooltip(slider, this.showTooltip);

					if (end <= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setTooltip(slider, this.showTooltip);
					}
				}, 1);
			} else {
				this.currentValue = end;
			}

			this.oldValue = end;
		} else {
			if (this.value == undefined) {
				this.getValueFromHass = true;
			}
			this.setValue();
			this.currentValue = this.value ?? 0;
			this.setTooltip(slider, false);
		}
	}

	onStart(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.swiping) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.currentValue = slider.value;
			this.value = slider.value;
			this.setTooltip(slider, true);
			this.sliderOn = true;
		}
	}

	onEnd(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;
		this.setTooltip(slider, false);
		this.setValue();

		if (!this.swiping) {
			if (!this.newValue && this.newValue != 0) {
				this.newValue = Number(this.value);
			}
			if (!this.precision) {
				this.newValue = Math.trunc(this.newValue);
			}
			this.value = this.newValue;

			this.fireHapticEvent('light');
			this.sendAction('tap_action');
		} else {
			if (this.value == undefined) {
				this.getValueFromHass = true;
			}
			this.setValue();
			this.currentValue = this.value ?? 0;
		}

		this.endAction();
		this.resetGetValueFromHass();
	}

	onMove(e: MouseEvent | TouchEvent) {
		if (!this.vertical) {
			const slider = e.currentTarget as HTMLInputElement;

			let currentX: number;
			if ('clientX' in e) {
				currentX = e.clientX;
			} else {
				currentX = e.touches[0].clientX;
			}
			let currentY: number;
			if ('clientY' in e) {
				currentY = e.clientY;
			} else {
				currentY = e.touches[0].clientY;
			}

			if (this.initialY == undefined) {
				this.initialY = currentY;
			}
			if (this.initialX == undefined) {
				this.initialX = currentX;
			} else if (
				Math.abs(currentX - this.initialX) <
				Math.abs(currentY - this.initialY) - 20
			) {
				this.swiping = true;
				this.getValueFromHass = true;
				this.setValue();
				this.currentValue = this.value ?? 0;
				this.setTooltip(slider, false);
				this.setSliderState(this.value as number);
			}
		}
	}

	setValue() {
		super.setValue();
		if (this.getValueFromHass) {
			this.oldValue = Number(this.value);
			if (this.newValue == undefined) {
				this.newValue = Number(this.value);
			}
		}
	}

	setTooltip(slider: HTMLInputElement, show: boolean) {
		if (show) {
			this.tooltipOffset = Math.round(
				(slider.offsetWidth / (this.range[1] - this.range[0])) *
					(Number(this.currentValue) -
						(this.range[0] + this.range[1]) / 2),
			);
		}

		this.showTooltip = show;
	}

	setSliderState(value: number) {
		this.sliderOn =
			!(
				value == undefined ||
				this.hass.states[this.entityId as string].state == 'off' ||
				(this.entityId?.startsWith('timer.') &&
					this.hass.states[this.entityId as string].state == 'idle')
			) || (Number(value) as number) > this.range[0];
	}

	resetGetValueFromHass() {
		const valueFromHassDelay =
			'value_from_hass_delay' in this.actions
				? (this.renderTemplate(
						this.actions.value_from_hass_delay as unknown as string,
				  ) as number)
				: 1000;
		this.getValueFromHassTimer = setTimeout(
			() => (this.getValueFromHass = true),
			valueFromHassDelay,
		);
	}

	endAction() {
		clearInterval(this.valueUpdateInterval);
		this.valueUpdateInterval = undefined;

		super.endAction();
	}

	buildBackground() {
		return html`<div class="slider-background"></div>`;
	}

	buildTooltip(context: object) {
		const style: StyleInfo = this.buildStyle(
			{
				'--tooltip-label': `"${
					this.actions?.style?.['--tooltip-label'] ?? '{{ value }}'
				}"`,
				'--tooltip-offset':
					this.actions?.style?.['--tooltip-offset'] ??
					'{{ offset }}px',
				'--tooltip-transform':
					this.actions?.style?.['--tooltip-transform'] ??
					'translateX(var(--tooltip-offset))',
				'--tooltip-display':
					this.actions?.style?.['--tooltip-display'] ?? 'initial',
			},
			context,
		);

		// Deprecated tooltip hide/show field
		if ('tooltip' in this.actions) {
			style['--tooltip-display'] = this.renderTemplate(
				this.actions.tooltip as unknown as string,
				context,
			)
				? 'initial'
				: 'none';
		}

		// prettier-ignore
		return html`
			<div
				class="tooltip ${this.showTooltip ? 'faded-in' : 'faded-out'}"
				style=${styleMap(style)}
			></div>
		`;
	}

	buildSlider(context: object) {
		const value = context['value' as keyof typeof context] as number;
		this.setSliderState(value);

		const style: StyleInfo = {};
		if (
			this.renderTemplate(
				this.actions.tap_action?.action as string,
				context,
			) == 'none'
		) {
			style['pointer-events'] = 'none';
		}

		return html`
			<input
				type="range"
				class="${this.sliderOn ? 'slider' : 'slider-off'}"
				style=${styleMap(style)}
				min="${this.range[0]}"
				max="${this.range[1]}"
				step=${this.step}
				value="${value}"
				.value="${value}"
				@input=${this.onInput}
				@mousedown=${this.onMouseDown}
				@mouseup=${this.onMouseUp}
				@mousemove=${this.onMouseMove}
				@touchstart=${this.onTouchStart}
				@touchend=${this.onTouchEnd}
				@touchmove=${this.onTouchMove}
				@contextmenu=${this.onContextMenu}
			/>
		`;
	}

	render() {
		this.setValue();
		if (this.getValueFromHass) {
			this.currentValue = this.value;
		}

		if (this.actions.range) {
			this.range[0] = parseFloat(
				this.renderTemplate(
					this.actions.range[0] as unknown as string,
				) as string,
			);
			this.range[1] = parseFloat(
				this.renderTemplate(
					this.actions.range[1] as unknown as string,
				) as string,
			);
		}

		this.speed = (this.range[1] - this.range[0]) / 50;

		if ('step' in this.actions) {
			this.step = Number(
				this.renderTemplate(this.actions.step as unknown as string),
			);
		} else {
			this.step = (this.range[1] - this.range[0]) / 100;
		}
		const splitStep = this.step.toString().split('.');
		if (splitStep.length > 1) {
			this.precision = splitStep[1].length;
		} else {
			this.precision = 0;
		}

		const context = {
			VALUE: this.getValueFromHass ? this.value : this.currentValue,
			OFFSET: this.tooltipOffset,
			value: this.getValueFromHass ? this.value : this.currentValue,
			offset: this.tooltipOffset,
		};

		const style = this.actions.style ?? {};
		this.vertical =
			this.renderTemplate(this.actions.vertical ?? false, context) ==
			true;
		if (this.vertical) {
			style['transform'] = 'rotateZ(270deg)';
			if ('--vertical-width' in style) {
				this.style.width = style['--vertical-width'] as string;
			} else {
				this.style.width = '50px';
			}
		}

		return html`
			${this.buildTooltip(context)}
			<div
				class="container"
				style=${styleMap(this.buildStyle(style, context))}
			>
				${this.buildBackground()}${this.buildSlider(context)}
			</div>
		`;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				:host {
					display: flex;
					flex-flow: column;
					flex-grow: 0;
					place-content: center space-evenly;
					align-items: center;
					position: relative;
					height: fit-content;
					width: 100%;
					border: none;
					border-radius: 25px;
					padding: 0px;
					box-sizing: border-box;
					line-height: 0;
					outline: 0px;
					overflow: visible;
					font-size: inherit;
					color: inherit;

					--color: var(--primary-text-color);
				}

				.container {
					all: inherit;
					overflow: hidden;
					height: 50px;
				}

				.slider-background {
					position: absolute;
					width: inherit;
					height: var(--background-height, 100%);
					background: var(
						--background,
						var(--primary-background-color)
					);
				}

				.slider,
				.slider-off {
					position: absolute;
					appearance: none;
					-webkit-appearance: none;
					-moz-appearance: none;
					height: 100%;
					width: inherit;
					background: none;
					overflow: hidden;
				}

				.slider::-webkit-slider-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: 100%;
					width: 16px;
					cursor: pointer;
					z-index: 1;
					background: var(--color);
					box-shadow: -100vw 0 0 100vw var(--color);
				}

				.slider::-moz-range-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: 100%;
					width: 16px;
					border-color: var(--color);
					background: var(--color);
					cursor: pointer;
					z-index: 1;
					box-shadow: -100vw 0 0 100vw var(--color);
				}

				.slider-off::-webkit-slider-thumb {
					visibility: hidden;
				}

				.slider-off::-moz-range-thumb {
					visibility: hidden;
				}

				.tooltip {
					z-index: 3;
					background: var(--clear-background-color);
					color: var(--primary-text-color);
					position: absolute;
					border-radius: 0.8em;
					padding: 0.2em 0.4em;
					height: 20px;
					width: fit-content;
					line-height: 20px;
					top: -29px;
					transform: var(--tooltip-transform);
					display: var(--tooltip-display);
				}
				.faded-out {
					opacity: 0;
					transition:
						opacity 180ms ease-in-out 0s,
						left 180ms ease-in-out 0s,
						bottom 180ms ease-in-out 0s;
				}
				.faded-in {
					opacity: 1;
					transition: opacity 540ms ease-in-out 0s;
				}
				.tooltip::after {
					content: var(--tooltip-label);
				}
			`,
		];
	}
}
