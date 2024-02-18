import { StyleInfo } from 'lit/directives/style-map.js';

import { IActions } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;

	custom_actions?: Record<string, IActions>;
	custom_icons?: Record<string, string>;

	enable_button_feedback?: boolean;
	button_style?: StyleInfo;

	enable_touchpad_feedback?: boolean;
	touchpad_style?: StyleInfo;

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;

	slider_id?: string;
	slider_attribute?: string;
	enable_slider_feedback?: boolean;
	slider_range?: [number, number];
	slider_style?: StyleInfo;

	rows?: Row[];
}

export type Row = (string | Row[])[];

export type KeyboardMode = 'ANDROID TV' | 'KODI' | 'FIRE TV';
