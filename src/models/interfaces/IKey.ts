export interface IKey {
	key: string;
	icon?: string;
	svg_path?: string;
}

export interface IKeys {
	[key: string]: IKey;
}
