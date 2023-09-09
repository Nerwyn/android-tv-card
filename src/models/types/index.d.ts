export {};

declare global {
	interface Window {
		loadCardHelpers: function;
		initialX?: number;
		initialY?: number;
		ShadyCSS?: shadyCSS;
		customCards: CustomCard[];
	}

	interface ShadyCSS {
		styleSubtree: function;
	}

	interface CustomCard {
		type: string;
		name: string;
		description: string;
	}

	interface Themes {}

	interface EventTarget {
		action: string;
	}

	interface VolumeSlider extends HTMLElement {
		hass: HomeAssistant;
	}
}
