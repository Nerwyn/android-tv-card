import { CSSResult, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { ISliderConfig } from '../models';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@property() config!: ISliderConfig;

	@state() showTooltip: boolean = false;
	@state() thumbOffset: number = 0;
	@state() sliderOn: boolean = true;
	@state() currentValue = this.value;

	oldValue?: number;
	newValue?: number;
	speed: number = 0.02;
	range: [number, number] = [0, 1];
	step: number = 0.01;
	intervalId?: ReturnType<typeof setTimeout>;

	sliderWidth: number = 0;
	vertical: boolean = false;
	thumbWidth: number = 50;
	resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			this.sliderWidth = this.vertical
				? entry.contentRect.height
				: entry.contentRect.width;
			this.setThumbOffset();
		}
	});

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
			this.setThumbOffset();
			this.showTooltip = true;

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
					this.setThumbOffset();

					if (end >= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setThumbOffset();
					}
				}, 1);
			} else if (start < end) {
				this.sliderOn = true;
				this.intervalId = setInterval(() => {
					i += this.speed;
					this.currentValue = i;
					this.setThumbOffset();

					if (end <= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setThumbOffset();
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
			this.setThumbOffset();
			this.showTooltip = false;
		}
	}

	onStart(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.swiping) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.currentValue = slider.value;
			this.value = slider.value;
			this.setThumbOffset();
			this.showTooltip = true;
			this.sliderOn = true;
		}
	}

	onEnd(_e: MouseEvent | TouchEvent) {
		this.setThumbOffset();
		this.showTooltip = false;
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
			this.getValueFromHass = true;
			this.setValue();
			this.currentValue = this.value ?? 0;
			this.setThumbOffset();
			this.setSliderState(this.currentValue as number);
		}

		this.endAction();
		this.resetGetValueFromHass();
	}

	onMove(e: MouseEvent | TouchEvent) {
		if (!this.vertical) {
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
				Math.abs(currentY - this.initialY) - 50
			) {
				this.swiping = true;
				this.getValueFromHass = true;
				this.setValue();
				this.currentValue = this.value ?? 0;
				this.setThumbOffset();
				this.showTooltip = false;
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

	setThumbOffset() {
		const maxOffset = (this.sliderWidth - this.thumbWidth) / 2;
		const value = Number(
			this.getValueFromHass ? this.value : this.currentValue,
		);
		this.thumbOffset = Math.min(
			Math.max(
				Math.round(
					((this.sliderWidth - this.thumbWidth) /
						(this.range[1] - this.range[0])) *
						(value - (this.range[0] + this.range[1]) / 2),
				),
				-1 * maxOffset,
			),
			maxOffset,
		);
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
		const valueFromHassDelay = this.renderTemplate(
			this.config.value_from_hass_delay ?? 1000,
		) as number;
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
		const style: StyleInfo = {};
		if (this.vertical) {
			style['transform'] = 'rotateZ(270deg)';
			style['width'] = `${this.sliderWidth}px`;
		}
		return html`<div class="background" style=${styleMap(style)}></div>`;
	}

	buildTooltip() {
		return html`
			<div
				class="tooltip ${this.showTooltip ? 'faded-in' : 'faded-out'}"
			></div>
		`;
	}

	buildTooltipStyle(context: object) {
		let height, width;
		const containerElement = this.shadowRoot?.querySelector('.container');
		if (containerElement) {
			const style = getComputedStyle(containerElement);
			height = style.getPropertyValue('height');
			width = style.getPropertyValue('width');
		}

		const tooltipLabel = `'${this.renderTemplate(
			'{{ value }}{{ unit }}',
			context,
		)}'`;
		let tooltipTransform: string;
		let iconTransform: string;
		if (this.vertical) {
			tooltipTransform = `translate(calc(-0.7 * ${
				width ?? '48px'
			} - 0.8em - 18px), calc(-1 * var(--thumb-offset)))`;
			iconTransform = 'translateY(calc(-1 * var(--thumb-offset)))';
		} else {
			tooltipTransform = `translate(var(--thumb-offset), calc(-0.5 * ${
				height ?? '48px'
			} - 0.4em - 10px))`;
			iconTransform = 'translateX(var(--thumb-offset))';
		}

		// Moved out of html literal to prevent it from being broken by the minifier
		const styles = `
		:host {
			--tooltip-label: ${tooltipLabel};
			--tooltip-transform: ${tooltipTransform};
			--icon-transform: ${iconTransform};
		}
		`;

		return html`<style>
			${styles}
		</style>`;
	}

	buildSlider(config: ISliderConfig = this.config, context: object) {
		const value = context['value' as keyof typeof context] as number;
		this.setSliderState(value);

		const style: StyleInfo = {};
		if (
			this.renderTemplate(config.tap_action?.action as string, context) ==
			'none'
		) {
			style['pointer-events'] = 'none';
		}
		if (this.vertical) {
			style['transform'] = 'rotateZ(270deg)';
			style['width'] = `${this.sliderWidth}px`;
			style['touch-action'] = 'none';
		}

		return html`
			<input
				type="range"
				class="${this.sliderOn ? 'slider' : 'slider off'}"
				min="${this.range[0]}"
				max="${this.range[1]}"
				step=${this.step}
				value="${value}"
				.value="${value}"
				style=${styleMap(style)}
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
		const context = {
			VALUE: this.getValueFromHass ? this.value : this.currentValue,
			value: this.getValueFromHass ? this.value : this.currentValue,
		};

		if (this.config.range) {
			this.range[0] = parseFloat(
				this.renderTemplate(
					this.config.range[0] as unknown as string,
					context,
				) as string,
			);
			this.range[1] = parseFloat(
				this.renderTemplate(
					this.config.range[1] as unknown as string,
					context,
				) as string,
			);
		}

		this.speed = (this.range[1] - this.range[0]) / 50;

		if (this.config.step) {
			this.step = Number(this.renderTemplate(this.config.step, context));
		} else {
			this.step = (this.range[1] - this.range[0]) / 100;
		}
		const splitStep = this.step.toString().split('.');
		if (splitStep.length > 1) {
			this.precision = splitStep[1].length;
		} else {
			this.precision = 0;
		}

		this.vertical =
			this.renderTemplate(this.config.vertical ?? false, context) == true;
		this.resizeObserver.observe(this);

		// Thumb width, height, and vertical slider style adjustments
		const containerStyle: StyleInfo = {};
		const sliderElement = this.shadowRoot?.querySelector('input');
		if (sliderElement) {
			const style = getComputedStyle(sliderElement);
			const height = style.getPropertyValue('height');
			const thumbWidth = style.getPropertyValue('--thumb-width');
			if (thumbWidth) {
				this.thumbWidth = parseInt(thumbWidth.replace(/[^0-9]+/g, ''));
			} else if (height) {
				this.thumbWidth = parseInt(height.replace(/[^0-9]+/g, ''));
			} else {
				this.thumbWidth = 48;
			}

			if (this.vertical) {
				this.style.width = 'fit-content';
				containerStyle['height'] = `${this.sliderWidth}px`;
			}
		}
		this.setThumbOffset();
		this.style.setProperty('--thumb-offset', `${this.thumbOffset}px`);

		return html`
			<div class="container" style=${styleMap(containerStyle)}>
				${this.buildBackground()}${this.buildSlider(undefined, context)}
				${this.buildIcon(this.config.icon ?? '', context)}
				${this.buildLabel(this.config.label ?? '', context)}
			</div>
			${this.buildTooltip()}${this.buildTooltipStyle(context)}
			${this.buildStyles(undefined, context)}
		`;
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		this.resizeObserver.disconnect();
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
					align-self: stretch;
					position: relative;
					height: unset;
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
					pointer-events: none;

					--color: var(--primary-text-color);
					--mdc-icon-size: var(--size, 32px);
					--height: 48px;
					--tooltip-label: 0;
				}

				.container {
					all: inherit;
					overflow: hidden;
					height: var(--height);
					align-self: center;
					color: var(--background, var(--primary-background-color));
				}

				.background {
					position: absolute;
					width: inherit;
					height: var(--background-height, 100%);
					background: var(
						--background,
						var(--primary-background-color)
					);
				}

				.slider,
				.off {
					position: absolute;
					appearance: none;
					-webkit-appearance: none;
					-moz-appearance: none;
					pointer-events: all;
					height: 100%;
					width: inherit;
					background: none;
					overflow: hidden;
				}

				.slider::-webkit-slider-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: var(--height);
					width: var(--thumb-width, var(--height));
					cursor: pointer;
					background: var(--color);
					border-color: rgb(0, 0, 0, 0);
					box-shadow: var(
						--thumb-box-shadow,
						calc(-100vw - (var(--thumb-width, var(--height)) / 2)) 0
							0 100vw var(--color)
					);
					border-radius: var(--thumb-border-radius, var(--height));
				}
				.slider::-moz-range-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: var(--height);
					width: var(--thumb-width, var(--height));
					cursor: pointer;
					background: var(--color);
					border-color: rgb(0, 0, 0, 0);
					box-shadow: var(
						--thumb-box-shadow,
						calc(-100vw - (var(--thumb-width, var(--height)) / 2)) 0
							0 100vw var(--color)
					);
					border-radius: var(--thumb-border-radius, var(--height));
				}

				.off::-webkit-slider-thumb {
					visibility: hidden;
				}
				.off::-moz-range-thumb {
					visibility: hidden;
				}

				.tooltip {
					background: var(--clear-background-color);
					color: var(--primary-text-color);
					position: absolute;
					border-radius: 0.8em;
					padding: 0.2em 0.4em;
					height: 20px;
					width: fit-content;
					line-height: 20px;
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

				.icon {
					color: var(
						--icon-color,
						var(--background, var(--primary-background-color))
					);
				}
			`,
		];
	}
}
