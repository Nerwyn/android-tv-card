import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { IServiceCall } from '../models';
import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@property({ attribute: false }) mediaPlayerId!: string;
	@property({ attribute: false }) range: [number, number] = [0, 1];
	@property({ attribute: false }) info: IServiceCall = {
		service: 'media_player.volume_set',
		data: {
			entity_id: this.mediaPlayerId,
			volume_level: 'VALUE',
		},
	};

	value: number = 0;
	oldValue?: number;
	newValue?: number;
	step: number = 0.01;
	speed: number = 0.02;

	onInput(e: InputEvent) {
		e.preventDefault();
		e.stopImmediatePropagation();

		this.fireHapticEvent('selection');

		const slider = e.currentTarget as HTMLInputElement;
		const start = parseFloat(
			(this.oldValue as unknown as string) ?? this.value,
		);
		const end = parseFloat(slider.value ?? start);
		slider.value = start.toString();
		this.newValue = end;

		if (end > this.range[0]) {
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
					if (end <= this.range[0]) {
						slider.className = 'slider-off';
					}
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

	onEnd(_e: MouseEvent | TouchEvent) {
		const [domain, service] = this.info.service.split('.');
		if (!this.newValue && this.newValue != 0) {
			this.newValue = this.value as number;
		}
		const data = this.info.data ?? {};
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

		this.value =
			this.hass.states[this.mediaPlayerId].attributes.volume_level ?? 0;
		if (this.oldValue == undefined) {
			this.oldValue = this.value;
		}
		if (this.newValue == undefined) {
			this.newValue = this.value;
		}

		this.step = (this.range[1] - this.range[0]) / 100;
		this.speed = (this.range[1] - this.range[0]) / 50;

		let sliderClass = 'slider';
		if (!this.value || this.value <= this.range[0]) {
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
			/>
		`;

		return html`<div class="container" style=${styleMap(this._style ?? {})}>
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
				width: 100%;
				border: none;
				padding: 0px;
				box-sizing: border-box;
				line-height: 0;
				outline: 0px;
				overflow: hidden;
				font-size: inherit;
				color: inherit;
			}

			.container {
				all: inherit;
				overflow: hidden;
				height: 50px;
				border-radius: var(--border-radius);

				--color: var(--primary-text-color);
				--background: var(--secondary-background-color);
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
				height: inherit;
				width: inherit;
				border-radius: var(--border-radius);
				background: none;
				overflow: hidden;
			}

			.slider::-webkit-slider-thumb {
				appearance: none;
				-webkit-appearance: none;
				height: var(--background-height);
				width: 24px;
				cursor: pointer;
				z-index: 1;
				background: var(--color);
				box-shadow: -100vw 0 0 100vw var(--color);
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
