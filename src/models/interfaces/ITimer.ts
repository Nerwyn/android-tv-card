export interface ITimer {
	timer?: ReturnType<typeof setTimeout> | null;
	count?: number;
	action?: string;
	interval?: number;
	longClick?: boolean;
}
