import { StyleInfo } from 'lit/directives/style-map.js';

export interface IStyle {
	icon?: string;
	svg_path?: string;
	style?: StyleInfo;
}

export interface IKey extends IStyle {
	key: string;
}

export interface ISource extends IStyle {
	source: string;
}

export interface IServiceCall extends IStyle {
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
