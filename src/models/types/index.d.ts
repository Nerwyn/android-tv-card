export {};

declare global {
	interface Window {
		loadCardHelpers: Function;
		initialX?: number;
		initialY?: number;
	}
}
