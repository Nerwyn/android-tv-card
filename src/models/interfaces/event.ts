export interface HAEvent extends Event {
	detail?: string;
	touches?: [
		{
			clientX?: number;
			clientY?: number;
		}
	];
}
