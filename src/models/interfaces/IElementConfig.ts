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
	type: RemoteElementType;
	template?: string;
	entity_id?: string;
	autofill_entity_id?: boolean;
	value_attribute?: string;

	icon?: string;
	label?: string;
	unit_of_measurement?: string;
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

export type DirectionAction = 'up' | 'down' | 'left' | 'right';

export interface ITouchpadConfig extends IBaseElementConfig, IActions {
	up?: IBasicActions & IMultiActions;
	down?: IBasicActions & IMultiActions;
	left?: IBasicActions & IMultiActions;
	right?: IBasicActions & IMultiActions;
}
