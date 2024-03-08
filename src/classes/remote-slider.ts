import { html, css } from 'lit';
import { customElement, eventOptions, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { renderTemplate } from 'ha-nunjucks';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@property({ attribute: false }) sliderId!: string;
	@property({ attribute: false }) sliderAttribute?: string;
	@property({ attribute: false }) range: [number, number] = [0, 1];
	@property({ attribute: false }) step?: number;

	oldValue?: number;
	newValue?: number;
	speed: number = 0.02;
	precision: number = 2;

	getValueFromHass: boolean = true;
	showTooltip: boolean = false;

	lastX?: number;
	lastY?: number;
	scrolling: boolean = false;

	onInput(e: InputEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.scrolling) {
			this.setTooltip(slider);
			this.getValueFromHass = false;

			this.fireHapticEvent('selection');

			const start = parseFloat(
				(this.oldValue as unknown as string) ?? this.value,
			);
			const end = parseFloat(slider.value ?? start);
			slider.value = start.toString();
			this.newValue = end;

			if (
				end >
				(renderTemplate(
					this.hass,
					this.range[0] as unknown as string,
				) as unknown as number)
			) {
				slider.className = 'slider';
			}

			let i = start;
			if (start > end) {
				const id = setInterval(() => {
					i -= this.speed;
					slider.value = i.toString();

					if (end >= i) {
						clearInterval(id);
						slider.value = end.toString();
						if (
							end <=
							(renderTemplate(
								this.hass,
								this.range[0] as unknown as string,
							) as unknown as number)
						) {
							slider.className = 'slider-off';
						}
					}
				}, 1);
			} else if (start < end) {
				slider.className = 'slider';
				const id = setInterval(() => {
					i += this.speed;
					slider.value = i.toString();

					if (end <= i) {
						clearInterval(id);
						slider.value = end.toString();
					}
				}, 1);
			} else {
				slider.value = end.toString();
			}

			this.oldValue = end;
		}
	}

	@eventOptions({ passive: true })
	onStart(e: MouseEvent | TouchEvent) {
		if (!this.scrolling) {
			const slider = e.currentTarget as HTMLInputElement;
			this.showTooltip = true;
			this.setTooltip(slider);
		} else {
			this.scrolling = false;
			this.lastX = undefined;
			this.lastY = undefined;
		}
	}

	onEnd(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.scrolling) {
			this.showTooltip = false;
			this.setTooltip(slider);

			if (!this.newValue && this.newValue != 0) {
				this.newValue = this.value as number;
			}
			if (this.step ?? 1 % 1 == 0) {
				this.newValue = Math.trunc(this.newValue);
			}
			this.value = this.newValue;

			this.fireHapticEvent('light');
			this.sendAction('tap_action');
		} else {
			this.setValue();
			slider.value = this.value.toString();
		}
		this.lastX = undefined;
		this.lastY = undefined;
		this.scrolling = false;
		setTimeout(() => (this.getValueFromHass = true), 1000);
	}

	@eventOptions({ passive: true })
	onMove(e: TouchEvent | MouseEvent) {
		this.getValueFromHass = false;
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

		if (this.lastY == undefined) {
			this.lastY = currentY;
		}
		if (this.lastX == undefined) {
			this.lastX = currentX;
		} else if (
			Math.abs(currentX - this.lastX) <
			Math.abs(currentY - this.lastY) - 20
		) {
			this.scrolling = true;
			this.getValueFromHass = true;
			this.setValue();
			if (this.value != undefined) {
				slider.value = this.value.toString();
			}
			this.showTooltip = false;
			this.setTooltip(slider);

			if (
				this.value == undefined ||
				Number(this.value) <= this.range[0]
			) {
				slider.className = 'slider-off';
			} else {
				slider.className = 'slider';
			}
		}
	}

	setValue() {
		if (this.getValueFromHass) {
			const sliderId = renderTemplate(this.hass, this.sliderId) as string;
			const sliderAttribute = renderTemplate(
				this.hass,
				this.sliderAttribute as string,
			) as string;
			if (sliderAttribute) {
				if (sliderAttribute == 'state') {
					this.value = parseFloat(this.hass.states[sliderId].state);
				} else {
					this.value =
						this.hass.states[sliderId].attributes[sliderAttribute];
				}
			} else {
				this.value =
					this.hass.states[sliderId].attributes.volume_level ?? 0;
			}

			if (this.oldValue == undefined) {
				this.oldValue = Number(this.value);
			}
			if (this.newValue == undefined) {
				this.newValue = Number(this.value);
			}
		}

		if (this.step ?? 1 % 1 == 0) {
			this.value = Math.trunc(Number(this.value));
		}
	}

	setTooltip(slider: HTMLInputElement) {
		const tooltip = slider.parentElement
			?.previousElementSibling as HTMLElement;
		if (tooltip) {
			if (this.showTooltip) {
				this.value = slider.value;

				// Cannot set textContent directly or lit will shriek in console and crash window
				const children = tooltip.childNodes;
				for (const child of children) {
					if (child.nodeName == '#text') {
						child.nodeValue = Number(this.value).toFixed(
							this.precision,
						);
					}
				}

				const xPosition = Math.round(
					(slider.offsetWidth / (this.range[1] - this.range[0])) *
						(Number(this.value) -
							(this.range[0] + this.range[1]) / 2),
				);
				tooltip.style.setProperty('--x-position', `${xPosition}px`);

				tooltip.className = 'tooltip faded-in';
			} else {
				tooltip.className = 'tooltip faded-out';
			}
		}
	}

	render() {
		const background = html`<div class="slider-background"></div>`;

		this.setValue();
		const end = parseFloat(
			renderTemplate(
				this.hass,
				this.range[0] as unknown as string,
			) as string,
		);
		const start = parseFloat(
			renderTemplate(
				this.hass,
				this.range[1] as unknown as string,
			) as string,
		);

		if (this.step) {
			this.step = Number(
				renderTemplate(this.hass, this.step as unknown as string),
			);
			const splitStep = this.step.toString().split('.');
			if (splitStep.length > 1) {
				this.precision = splitStep[1].length;
			} else {
				this.precision = 0;
			}
		} else {
			this.step = (start - end) / 100;
		}
		this.speed = (start - end) / 50;

		let _class = 'slider';
		if (this.value == undefined || Number(this.value) <= end) {
			_class = 'slider-off';
		}
		const slider = html`
			<input
				type="range"
				class="${_class}"
				min="${end}"
				max="${start}"
				step=${this.step}
				value="${this.value}"
				@input=${this.onInput}
				@touchstart=${this.onStart}
				@touchend=${this.onEnd}
				@touchmove=${this.onMove}
				@mousedown=${this.onStart}
				@mouseup=${this.onEnd}
				@mousemove=${this.onMove}
			/>
		`;

		const style = structuredClone(this._style ?? {});
		for (const key in style) {
			style[key] = renderTemplate(
				this.hass,
				style[key] as string,
			) as string;
		}

		// prettier-ignore
		return html`<div class="tooltip ${this.showTooltip ? 'faded-in' : 'faded-out'}">${Number(this.value).toFixed(this.precision)}</div>
			<div class="container" style=${styleMap(style)}>${background}${slider}</div>`;
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
