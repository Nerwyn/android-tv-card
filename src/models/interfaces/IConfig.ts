import { StyleInfo } from 'lit/directives/style-map.js'; // TODO REMOVE

import { IElementConfig } from '.';

export const KeyboardModes = ['ANDROID TV', 'KODI', 'FIRE TV'] as const;
export type KeyboardMode = (typeof KeyboardModes)[number];

export type Row = (string | Row[])[];

export interface IConfig {
	title?: string;

	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: KeyboardMode;
	slider_id?: string;
	media_player_id?: string;
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
