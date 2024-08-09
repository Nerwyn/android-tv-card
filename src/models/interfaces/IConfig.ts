import { IElementConfig, Platform } from '.';

export type Row = (string | Row[])[];

export interface IConfig {
	title?: string;

	platform?: Platform;
	keyboard_id?: string;
	remote_id?: string;
	media_player_id?: string;
	autofill_entity_id?: boolean;

	custom_actions?: Record<string, IElementConfig>;
	custom_icons?: Record<string, string>;

	haptics?: boolean;
	button_styles?: string;

	hold_time?: number;
	repeat_delay?: number;
	double_tap_window?: number;

	rows?: Row[];
	styles?: string;
}
