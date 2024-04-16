export {};

declare global {
	interface Window {
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

	interface Event {
		// eslint-disable-next-line
		detail?: Record<string, any>;
	}
}
