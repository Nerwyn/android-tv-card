import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { IData } from '../models';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@property({ attribute: false }) mediaPlayerId!: string;
	@property({ attribute: false }) value: number = 0;
	@property({ attribute: false }) range: [number, number] = [0, 1];

	oldValue: number = 0;
	newValue: number = 1;
	step: number = (this.range[1] - this.range[0]) / 100;
	speed: number = (this.range[1] - this.range[0]) / 50;

	constructor() {
		super();
	}

	onInput(e: InputEvent) {
		e.preventDefault();
		e.stopImmediatePropagation();

		const slider = e.currentTarget as HTMLInputElement;
		const start = parseFloat(
			(this.oldValue as unknown as string) ?? this.value ?? '0',
		);
		const end = parseFloat(slider.value ?? start);
		slider.value = start.toString();
		this.newValue = end;

		let i = start;
		if (start > end) {
			const id = setInterval(() => {
				i -= this.speed;
				slider.value = i.toString();

				if (end >= i) {
					clearInterval(id);
					slider.value = end.toString();
				}
			}, 1);
		} else if (start < end) {
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

	onTouchStart(_e: TouchEvent) {
		this.fireHapticEvent('selection');
	}

	onEnd(_e: MouseEvent | TouchEvent) {
		const [domain, service] = ['media_player', 'set_volume'];
		const data: IData = {
			volume_level: this.value,
		};
		if (!this.newValue && this.newValue != 0) {
			this.newValue = this.value as number;
		}
		if (this.newValue % 1 == 0) {
			this.newValue = Math.trunc(this.newValue);
		}
		for (const key in data) {
			if (data[key] == 'VALUE') {
				data[key] = this.newValue;
			} else if (data[key].toString().includes('VALUE')) {
				data[key] = data[key]
					.toString()
					.replace('VALUE', this.newValue.toString());
			}
		}
		this.fireHapticEvent('light');
		this.hass.callService(domain, service, data);
		this.value = this.newValue;
	}

	render() {
		const background = html`<div class="slider-background"></div>`;

		let sliderClass = 'slider';
		if (!this.value || this.value == 0) {
			sliderClass = 'slider-off';
		}
		const slider = html`
			<input
				type="range"
				class="${sliderClass}"
				min="${this.range[0]}"
				max="${this.range[1]}"
				step=${this.step}
				value="${this.value}"
				@input=${this.onInput}
				@mouseup=${this.onEnd}
				@touchend=${this.onEnd}
				@touchstart=${this.onTouchStart}
			/>
		`;

		const style = {};

		return html`<div class="container" style=${styleMap(style)}>
			${background}${slider}
		</div>`;
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				flex-flow: column;
				place-content: center space-evenly;
				align-items: center;
				position: relative;
				height: 50px;
				width: 100%;
				border-radius: 25px;
				border: none;
				padding: 0px;
				box-sizing: border-box;
				line-height: 0;
				outline: 0px;
				overflow: hidden;
				font-size: inherit;
				color: inherit;
				--slider-opacity: 1;
			}

			.slider-background {
				position: absolute;
				width: inherit;
				height: inherit;
				background: rgb(60, 60, 60);
				opacity: 0.2;
			}

			.slider,
			.slider-off {
				position: absolute;
				appearance: none;
				-webkit-appearance: none;
				-moz-appearance: none;
				height: inherit;
				border-radius: 25px;
				background: none;
			}

			.slider,
			.slider-off {
				width: inherit;
				overflow: hidden;
			}

			.slider::-webkit-slider-thumb {
				appearance: none;
				-webkit-appearance: none;
				height: 20px;
				width: 4px;
				border-radius: 12px;
				background: white;
				cursor: pointer;
				z-index: 1;
				box-shadow: -100vw 0 0 100vw white;
			}

			.slider-off::-webkit-slider-thumb {
				visibility: hidden;
			}

			.slider-off::-moz-range-thumb {
				visibility: hidden;
			}
		`;
	}
}
