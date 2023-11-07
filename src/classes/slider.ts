import { createThing, forwardHaptic } from 'custom-card-helpers';

import { customElement, property } from 'lit/decorators.js';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@property({ attribute: false }) mediaPlayerId!: string;
	@property({ attribute: false }) sliderConfig?: Record<string, string>;

	constructor() {
		super();
	}

	render() {
		let slider_config = {
			type: 'custom:my-slider',
			entity: this.mediaPlayerId,
			height: '50px',
			mainSliderColor: 'white',
			secondarySliderColor: 'rgb(60, 60, 60)',
			mainSliderColorOff: 'rgb(60, 60, 60)',
			secondarySliderColorOff: 'rgb(60, 60, 60)',
			thumbWidth: '0px',
			thumbHorizontalPadding: '0px',
			radius: '25px',
		};

		if (this.sliderConfig instanceof Object) {
			slider_config = { ...slider_config, ...this.sliderConfig };
		}

		// Retry due to slider intermittently not rendering
		let volumeSlider;
		for (let i = 0; i < 10; i++) {
			try {
				volumeSlider = createThing(slider_config, true);
				volumeSlider.setAttribute('style', 'width: inherit;');
			} catch {
				new Promise((resolve) => setTimeout(resolve, 100));
			}
		}

		volumeSlider.addEventListener(
			'ontouchstart',
			(e: Event) => {
				e.stopImmediatePropagation();
				if (this.hapticEnabled ?? true) {
					forwardHaptic('selection');
				}
			},
			{ passive: true },
		);
		volumeSlider.addEventListener(
			'input',
			(_e: Event) => {
				if (this.hapticEnabled ?? true) {
					forwardHaptic('light');
				}
			},
			true,
		);

		(volumeSlider as VolumeSlider).hass = this.hass;
		return volumeSlider;
	}
}
