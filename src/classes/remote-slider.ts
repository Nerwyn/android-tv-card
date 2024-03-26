import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { renderTemplate } from 'ha-nunjucks';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@state() getValueFromHass: boolean = true;
	@state() showTooltip: boolean = false;
	@state() sliderOn: boolean = true;
	@state() currentValue = this.value;

	class: string = 'slider';
	oldValue?: number;
	newValue?: number;
	speed: number = 0.02;
	range: [number, number] = [0, 1];
	step: number = 0.01;

	precision: number = 2;
	tooltipPosition: number = 0;

	startX?: number;
	startY?: number;
	scrolling: boolean = false;
	getValueFromHassTimer?: ReturnType<typeof setTimeout>;

	onInput(e: InputEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.scrolling) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.value = slider.value;
			this.currentValue = slider.value;
			this.setTooltip(slider, true);

			this.fireHapticEvent('selection');

			const start = parseFloat(
				(this.oldValue as unknown as string) ?? this.value ?? '0',
			);
			const end = parseFloat(slider.value ?? start);
			slider.value = start.toString();
			this.newValue = end;

			if (end > this.range[0]) {
				this.sliderOn = true;
			}

			let i = start;
			if (start > end) {
				const id = setInterval(() => {
					i -= this.speed;
					slider.value = i.toString();
					this.currentValue = slider.value;

					if (end >= i) {
						clearInterval(id);
						slider.value = end.toString();
						this.currentValue = slider.value;
						if (
							this.value == undefined ||
							(end <= this.range[0] &&
								this.class != 'slider-line-thumb')
						) {
							this.sliderOn = false;
						}
					}
				}, 1);
			} else if (start < end) {
				this.sliderOn = true;
				const id = setInterval(() => {
					i += this.speed;
					slider.value = i.toString();
					this.currentValue = slider.value;

					if (end <= i) {
						clearInterval(id);
						slider.value = end.toString();
						this.currentValue = slider.value;
					}
				}, 1);
			} else {
				slider.value = end.toString();
			}

			this.oldValue = end;
		} else {
			this.setValue();
			slider.value = (this.value ?? 0).toString();
			this.setTooltip(slider, false);
			this.currentValue = slider.value;
		}
	}

	onStart(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.scrolling) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.value = slider.value;
			this.currentValue = slider.value;
			this.setTooltip(slider, true);
		}
	}

	onEnd(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;
		this.setTooltip(slider, false);
		this.setValue();

		if (!this.scrolling) {
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
			slider.value = (this.value ?? 0).toString();
			this.currentValue = slider.value;
		}

		this.scrolling = false;
		this.startX = undefined;
		this.startY = undefined;
		this.getValueFromHassTimer = setTimeout(
			() => (this.getValueFromHass = true),
			1000,
		);
	}

	onMove(e: TouchEvent | MouseEvent) {
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

		if (this.startY == undefined) {
			this.startY = currentY;
		}
		if (this.startX == undefined) {
			this.startX = currentX;
		} else if (
			Math.abs(currentX - this.startX) <
			Math.abs(currentY - this.startY) - 20
		) {
			this.scrolling = true;
			this.getValueFromHass = true;
			this.setValue();
			slider.value = (this.value ?? 0).toString();
			this.currentValue = slider.value;
			this.setTooltip(slider, false);
			this.sliderOn = !(
				this.value == undefined || Number(this.value) <= this.range[0]
			);
		}
	}

	setValue() {
		if (this.getValueFromHass) {
			const entityId = renderTemplate(
				this.hass,
				(this.actions.tap_action?.data?.entity_id as string) ?? '',
			) as string;
			let valueAttribute = renderTemplate(
				this.hass,
				this.actions.value_attribute as string,
			) as string;
			if (valueAttribute) {
				if (valueAttribute.toLowerCase() == 'state') {
					this.value = parseFloat(this.hass.states[entityId].state);
				} else {
					let value;
					const indexMatch = valueAttribute.match(/\[\d+\]$/);

					if (indexMatch) {
						const index = parseInt(
							indexMatch[0].replace(/\[|\]/g, ''),
						);
						valueAttribute = valueAttribute.replace(
							indexMatch[0],
							'',
						);
						value =
							this.hass.states[entityId].attributes[
								valueAttribute
							];
						if (value && value.length) {
							value = value[index];
						} else {
							value == undefined;
						}
					} else {
						value =
							this.hass.states[entityId].attributes[
								valueAttribute
							];
					}

					if (valueAttribute.toLowerCase() == 'brightness') {
						value = Math.round((100 * parseInt(value ?? 0)) / 255);
					}
					this.value = value;
				}
			} else {
				this.value =
					this.hass.states[entityId].attributes.volume_level ?? 0;
			}

			if (this.oldValue == undefined) {
				this.oldValue = Number(this.value);
			}
			if (this.newValue == undefined) {
				this.newValue = Number(this.value);
			}
		}

		if (
			this.value != undefined &&
			typeof this.value == 'number' &&
			!this.precision
		) {
			this.value = Math.trunc(Number(this.value));
		}
	}

	setTooltip(slider: HTMLInputElement, show: boolean) {
		if (show) {
			this.tooltipPosition = Math.round(
				(slider.offsetWidth / (this.range[1] - this.range[0])) *
					(Number(this.currentValue) -
						(this.range[0] + this.range[1]) / 2),
			);
		}

		this.showTooltip = show;
	}

	buildBackground() {
		return html`<div class="slider-background"></div>`;
	}

	buildTooltip() {
		const tooltipText = `${Number(this.currentValue).toFixed(
			this.precision,
		)}`;
		const display = (
			'tooltip' in this.actions
				? renderTemplate(
						this.hass,
						this.actions.tooltip as unknown as string,
				  )
				: true
		)
			? 'initial'
			: 'none';
		// prettier-ignore
		return html`
			<div
				class="tooltip ${this.showTooltip ? 'faded-in' : 'faded-out'}"
				style=${styleMap({
					'--x-position': this.tooltipPosition.toString() + 'px',
					display: display
				})}
			>${tooltipText}</div>
		`;
	}

	buildSlider() {
		const value = this.getValueFromHass ? this.value : this.currentValue;
		this.sliderOn = !(
			value == undefined ||
			(Number(value) <= this.range[0] &&
				this.class != 'slider-line-thumb')
		);
		return html`
			<input
				type="range"
				class="${this.sliderOn ? 'slider' : 'slider-off'}"
				min="${this.range[0]}"
				max="${this.range[1]}"
				step=${this.step}
				value="${value}"
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

		if ('range' in this.actions) {
			this.range[0] = parseFloat(
				renderTemplate(
					this.hass,
					this.actions.range![0] as unknown as string,
				) as string,
			);
			this.range[1] = parseFloat(
				renderTemplate(
					this.hass,
					this.actions.range![1] as unknown as string,
				) as string,
			);
		}

		this.speed = (this.range[1] - this.range[0]) / 50;

		if ('step' in this.actions) {
			this.step = Number(
				renderTemplate(
					this.hass,
					this.actions.step as unknown as string,
				),
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

		const style = structuredClone(this.actions.style ?? {});
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
			) as string;
		}

		return html`
			${this.buildTooltip()}
			<div class="container" style=${styleMap(style)}>
				${this.buildBackground()}${this.buildSlider()}
			</div>
		`;
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				flex-flow: column;
				place-content: center space-evenly;
				align-items: center;
				position: relative;
				width: 100%;
				border: none;
				padding: 0px;
				box-sizing: border-box;
				line-height: 0;
				outline: 0px;
				overflow: visible;
				font-size: inherit;
				color: inherit;
			}

			.container {
				all: inherit;
				overflow: hidden;
				height: var(--height);
				border-radius: var(--border-radius);

				--color: var(--primary-text-color);
				--height: 50px;
				--background: var(--primary-background-color);
				--background-height: 50px;
				--border-radius: 25px;
			}

			.slider-background {
				position: absolute;
				width: inherit;
				height: var(--background-height);
				background: var(--background);
				border-radius: var(--border-radius);
			}

			.slider,
			.slider-off {
				position: absolute;
				appearance: none;
				-webkit-appearance: none;
				-moz-appearance: none;
				height: var(--height);
				width: inherit;
				border-radius: var(--border-radius);
				background: none;
				overflow: hidden;
			}

			.slider::-webkit-slider-thumb {
				appearance: none;
				-webkit-appearance: none;
				height: var(--height);
				width: 24px;
				cursor: pointer;
				z-index: 1;
				background: var(--color);
				box-shadow: -100vw 0 0 100vw var(--color);
			}

			.slider::-moz-range-thumb {
				appearance: none;
				-webkit-appearance: none;
				height: var(--height);
				width: 24px;
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
				transform: translateX(var(--x-position));
				--x-position: 0px;
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
		`;
	}
}
