import { StyleInfo } from 'lit/directives/style-map.js';

import { IAction } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;

	custom_keys?: Record<string, IAction>;
	custom_sources?: Record<string, IAction>;
	custom_icons?: Record<string, string>;

	enable_button_feedback?: boolean;
	button_style?: StyleInfo;

	enable_touchpad_feedback?: boolean;
	enable_double_click?: boolean;
	double_click_keycode?: string;
	long_click_keycode?: string;
	touchpad_style?: StyleInfo;

	slider_id?: string;
	slider_attribute?: string;
	enable_slider_feedback?: boolean;
	slider_range?: [number, number];
	slider_style?: StyleInfo;

	rows?: Row[];
}

export type Row = (string | Row[])[];

export type KeyboardMode = 'ANDROID TV' | 'KODI';
