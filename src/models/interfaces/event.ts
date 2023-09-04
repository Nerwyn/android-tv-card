export interface HAEvent extends Event {
	detail?: string;
	touches?: touch[];
	key?: string;
	currentTarget: eventTarget;
	data?: string;
	clipboardData: clipboardData;
}

interface touch {
	clientX?: number;
	clientY?: number;
}

interface eventTarget extends EventTarget {
	value?: string;
	blur: Function;
	focus: Function;
	parentElement: eventTarget;
	children: eventTarget[];
	style: style;
}

interface style {
	color: string;
	zIndex: string;
}

interface clipboardData {
	getData: Function;
}
