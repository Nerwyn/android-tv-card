export interface IIcon {
	icon?: string;
	svg_path?: string;
}

export interface IKey extends IIcon {
	key: string;
}

export interface ISource extends IIcon {
	source: string;
}

export interface IServiceCall extends IIcon {
	service: string;
	data?: IData;
	target?: ITarget;
}

export type IAction = IKey | ISource | IServiceCall;

export interface IData {
	[key: string]: string | string[] | number | boolean;
}

export interface ITarget {
	entity_id?: string | string[];
	device_id?: string | string[];
	area_id?: string | string[];
}

export type TouchAction =
	| 'up'
	| 'down'
	| 'left'
	| 'right'
	| 'center'
	| 'double'
	| 'long';
