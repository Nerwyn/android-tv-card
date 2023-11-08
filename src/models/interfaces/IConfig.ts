import { StyleInfo } from 'lit/directives/style-map.js';

import { IKey, ISource, IServiceCall } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	remote_id?: string;
	media_player_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;

	custom_keys?: Record<string, IKey | IServiceCall>;
	custom_sources?: Record<string, ISource | IServiceCall>;
	custom_icons?: Record<string, string>;

	enable_button_feedback?: boolean;
	button_style?: StyleInfo;

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

export type KeyboardMode = 'ANDROID TV' | 'KODI';
