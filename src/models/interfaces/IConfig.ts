import { StyleInfo } from 'lit/directives/style-map.js'; // TODO REMOVE

import { IElementConfig, Platform } from '.';

export type Row = (string | Row[])[];

export interface IConfig {
	title?: string;

	platform?: Platform;
	keyboard_id?: string;
	remote_id?: string;
	media_player_id?: string;
	slider_id?: string;
	autofill_entity_id?: boolean;

	custom_actions?: Record<string, IElementConfig>;
	custom_icons?: Record<string, string>;

	button_haptics?: boolean; // TODO Make just haptics
	button_style?: StyleInfo; // TODO REMOVE

	touchpad_haptics?: boolean; // TODO REMOVE
	touchpad_style?: StyleInfo; // TODO REMOVE

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;

	rows?: Row[];
	row_styles?: Record<string, StyleInfo>; // TODO REMOVE
	styles?: string;
}
