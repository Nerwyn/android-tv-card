export interface ISource {
	source: string;
	icon?: string;
	svg_path?: string;
}

export interface ISources {
	[key: string]: ISource;
}
