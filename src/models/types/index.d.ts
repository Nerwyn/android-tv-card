export {};

declare global {
	interface Window {
		loadCardHelpers: function;
		initialX?: number;
		initialY?: number;
		ShadyCSS?: shadyCSS;
	}

	interface ShadyCSS {
		styleSubtree: function;
	}

	interface Element {
		_themes: Themes;
		updateStyles: function;
	}

	interface Themes {
		default_theme: string;
		themes: {
			[key: string]: Record<string, string>;
		};
		[key: string]: string;
	}

	interface HapticEvent extends Event {
		detail: string;
	}

	interface EventTarget {
		action: string;
	}
}
