import { StyleInfo } from 'lit/directives/style-map.js';

export interface IStyle {
	icon?: string;
	svg_path?: string;
	style?: StyleInfo;
}

export interface IConfirmation {
	text?: string;
	exemptions?: IExemption[];
}

export interface IExemption {
	user: string;
}

export interface IKey {
	key: string;
}

export interface ISource {
	source: string;
}

export interface IServiceCall {
	service: string;
	data?: IData;
	target?: ITarget;
}

export interface IData {
	[key: string]: string | string[] | number | boolean;
}

export interface ITarget {
	entity_id?: string | string[];
	device_id?: string | string[];
	area_id?: string | string[];
}

export type Action = IKey | ISource | IServiceCall;

export interface IAction extends IStyle {
	tap_action?: Action;
	hold_action?: Action;
	double_tap_action?: Action;
	confirmation?: IConfirmation;
}

export type TouchAction =
	| 'up'
	| 'down'
	| 'left'
	| 'right'
	| 'center'
	| 'double'
	| 'long';
