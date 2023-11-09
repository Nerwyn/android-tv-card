export {};

declare global {
	interface Window {
		loadCardHelpers: function;
		initialX?: number;
		initialY?: number;
		customCards: CustomCard[];
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
}
