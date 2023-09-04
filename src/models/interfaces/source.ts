export interface source {
	source: string;
	icon?: string;
	svg_path?: string;
}

export interface sources {
	[key: string]: source;
}
