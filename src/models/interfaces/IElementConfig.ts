import {
	IAction,
	IActions,
	IBasicActions,
	IMomentaryActions,
	IMultiActions,
} from '.';

export const RemoteElementTypes = [
	'button',
	'button pad',
	'slider',
	'touchpad',
] as const;
export type RemoteElementType = (typeof RemoteElementTypes)[number];

export interface IElementConfig
	extends IBaseElementConfig,
		IButtonConfig,
		IButtonpadConfig,
		ISliderConfig,
		ITouchpadConfig,
		IActions {}

interface IBaseElementConfig extends IDisplayConfig {
	type: RemoteElementType;
	name: string;
	haptics?: boolean;

	entity_id?: string;
	autofill_entity_id?: boolean;
	value_attribute?: string;
}

interface IDisplayConfig {
	icon?: string;
	label?: string;
	unit_of_measurement?: string;
	styles?: string;
}

export interface IButtonConfig
	extends IBaseElementConfig,
		IBasicActions,
		IMomentaryActions {}

export interface IButtonpadConfig extends IBaseElementConfig {
	buttons?: string[];
}

export interface ISliderConfig extends IBaseElementConfig {
	value_from_hass_delay?: boolean;
	range?: [number, number];
	step?: number;
	vertical?: boolean;
	tap_action?: IAction;
}

export const DirectionActions = ['up', 'down', 'left', 'right'] as const;
export type DirectionAction = (typeof DirectionActions)[number];

export interface ITouchpadConfig extends IBaseElementConfig, IActions {
	up?: IBasicActions & IMultiActions & IMomentaryActions & IDisplayConfig;
	down?: IBasicActions & IMultiActions & IMomentaryActions & IDisplayConfig;
	left?: IBasicActions & IMultiActions & IMomentaryActions & IDisplayConfig;
	right?: IBasicActions & IMultiActions & IMomentaryActions & IDisplayConfig;
}
