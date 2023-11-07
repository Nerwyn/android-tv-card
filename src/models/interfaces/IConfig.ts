import { StyleInfo } from 'lit/directives/style-map.js';

import { IKey, ISource, ICustomAction } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	remote_id?: string;
	media_player_id?: string;
	keyboard_id?: string;
	keyboard_mode?: string;

	custom_keys?: Record<string, IKey | ICustomAction>;
	custom_sources?: Record<string, ISource | ICustomAction>;
	custom_icons?: Record<string, string>;

	enable_button_feedback?: boolean;

	enable_touchpad_feedback?: boolean;
	enable_double_click?: boolean;
	double_click_keycode?: string;
	long_click_keycode?: string;
	touchpad_style?: StyleInfo;

	enable_slider_feedback?: boolean;
	slider_range?: [number, number];
	slider_style?: StyleInfo;

	rows?: Row[];
}

export type Row = (string | Row[])[];
