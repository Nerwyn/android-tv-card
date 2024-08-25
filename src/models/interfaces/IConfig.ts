import { IElementConfig, Platform } from '.';

export type Row = (string | Row[])[];

export interface IIconConfig {
	name: string;
	path: string;
}

export interface IConfig {
	title?: string;

	platform?: Platform;
	keyboard_id?: string;
	remote_id?: string;
	media_player_id?: string;
	autofill_entity_id?: boolean;

	custom_actions?: IElementConfig[];
	custom_icons?: IIconConfig[];

	styles?: string;
	haptics?: boolean;

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;

	rows?: Row[];
}
