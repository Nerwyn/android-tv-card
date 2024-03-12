import { StyleInfo } from 'lit/directives/style-map.js';

export type Action =
	| 'key'
	| 'source'
	| 'repeat'
	| 'call-service'
	| 'navigate'
	| 'url'
	| 'assist'
	| 'more-info'
	| 'none';

export interface IData {
	[key: string]: string | string[] | number | number[] | boolean;
}

export interface ITarget {
	entity_id?: string | string[];
	device_id?: string | string[];
	area_id?: string | string[];
}

export interface IConfirmation {
	text?: string;
	exemptions?: [{ user: string }];
}

export interface IAction {
	action: Action;

	key?: string;
	source?: string;

	service?: string;
	data?: IData;
	target?: ITarget;

	navigation_path?: string;
	navigation_replace?: boolean;
	url_path?: string;

	confirmation?: boolean | IConfirmation;

	pipeline_id?: string;
	start_listening?: boolean;

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;
}

export interface IActions {
	icon?: string;
	style?: StyleInfo;
	haptics?: boolean;

	value_attribute?: string;
	range?: [number, number];
	step?: number;
	tooltip?: boolean;

	tap_action?: IAction;
	hold_action?: IAction;
	double_tap_action?: IAction;

	multi_tap_action?: IAction;
	multi_hold_action?: IAction;
	multi_double_tap_action?: IAction;

	momentary_start_action?: IAction;
	momentary_end_action?: IAction;
}

export type ActionType =
	| 'tap_action'
	| 'hold_action'
	| 'double_tap_action'
	| 'multi_tap_action'
	| 'multi_hold_action'
	| 'multi_double_tap_action'
	| 'momentary_start_action'
	| 'momentary_end_action';

export type DirectionAction = 'up' | 'down' | 'left' | 'right';
