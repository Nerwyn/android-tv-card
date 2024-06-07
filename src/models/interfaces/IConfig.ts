import { StyleInfo } from 'lit/directives/style-map.js';

import { IActions } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;
	slider_id?: string;
	media_player_id?: string;
	autofill_entity_id?: boolean;

	custom_actions?: Record<string, IActions>;
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
}

export type Row = (string | Row[])[];

export type KeyboardMode = 'ANDROID TV' | 'KODI' | 'FIRE TV';
