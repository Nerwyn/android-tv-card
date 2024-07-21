import { StyleInfo } from 'lit/directives/style-map.js';

import { IActions, IBasicActions, IMultiActions } from '.';

export const KeyboardModes = ['ANDROID TV', 'KODI', 'FIRE TV'] as const;
export type KeyboardMode = (typeof KeyboardModes)[number];

export const RemoteElementTypes = ['button', 'slider', 'touchpad'] as const;
export type RemoteElementType = (typeof RemoteElementTypes)[number];

export interface IRemoteElement
	extends ISliderElement,
		ITouchpadElement,
		IActions {
	type?: RemoteElementType;
	template?: string;

	icon?: string;
	style?: StyleInfo;
	styles?: string;

	haptics?: boolean;
}

export interface ISliderElement {
	value_attribute?: string;
	value_from_hass_delay?: boolean;
	range?: [number, number];
	step?: number;
	vertical?: boolean;
}

export interface ITouchpadElement {
	up?: IBasicActions & IMultiActions;
	down?: IBasicActions & IMultiActions;
	left?: IBasicActions & IMultiActions;
	right?: IBasicActions & IMultiActions;
}

export type Row = (string | Row[])[];

export interface IConfig {
	title?: string;

	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;
	slider_id?: string;
	media_player_id?: string;
	autofill_entity_id?: boolean;

	custom_actions?: Record<string, IRemoteElement>;
	custom_icons?: Record<string, string>;

	button_haptics?: boolean;
	button_style?: StyleInfo;

	touchpad_haptics?: boolean;
	touchpad_style?: StyleInfo;

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;

	rows?: Row[];
	row_styles?: Record<string, StyleInfo>;
	styles?: string;
}
