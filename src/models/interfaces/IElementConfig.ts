import { StyleInfo } from 'lit/directives/style-map.js'; // TODO REMOVE

import {
	IAction,
	IActions,
	IBasicActions,
	IMomentaryActions,
	IMultiActions,
} from '.';

export const RemoteElementTypes = ['button', 'slider', 'touchpad'] as const;
export type RemoteElementType = (typeof RemoteElementTypes)[number];

export interface IElementConfig
	extends IBaseElementConfig,
		IButtonConfig,
		ISliderConfig,
		ITouchpadConfig,
		IActions {}

interface IBaseElementConfig {
	type?: RemoteElementType;
	template?: string;
	entity_id?: string;
	value_attribute?: string;

	icon?: string;
	style?: StyleInfo; // TODO REMOVE
	styles?: string;

	haptics?: boolean;
}

export interface IButtonConfig
	extends IBaseElementConfig,
		IBasicActions,
		IMomentaryActions {}

export interface ISliderConfig extends IBaseElementConfig {
	value_from_hass_delay?: boolean;
	range?: [number, number];
	step?: number;
	vertical?: boolean;
	tap_action?: IAction;
}

export interface ITouchpadConfig extends IBaseElementConfig, IActions {
	up?: IBasicActions & IMultiActions;
	down?: IBasicActions & IMultiActions;
	left?: IBasicActions & IMultiActions;
	right?: IBasicActions & IMultiActions;
}
