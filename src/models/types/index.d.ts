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

	interface HapticEvent extends Event {
		detail: string;
	}

	interface EventTarget {
		action: string;
	}

	interface VolumeSlider extends HTMLElement {
		hass: HomeAssistant;
	}
}
