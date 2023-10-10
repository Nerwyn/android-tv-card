export interface ICustomAction {
	service: string;
	data?: IData;
	target?: ITarget;
	key?: string;
	source?: string;
	icon?: string;
	svg_path?: string;
}

export interface IData {
	[key: string]: string | string[] | number | boolean;
}

export interface ITarget {
	entity_id?: string | string[];
	device_id?: string | string[];
	area_id?: string | string[];
}
