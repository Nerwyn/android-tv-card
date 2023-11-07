import { IKey, ISource, ICustomAction } from '.';

export interface IConfig {
	theme?: string;
	title?: string;

	media_player_id?: string;
	remote_id?: string;
	keyboard_id?: string;
	keyboard_mode?: string;

	custom_keys?: Record<string, IKey | ICustomAction>;
	custom_sources?: Record<string, ISource | ICustomAction>;
	custom_icons?: Record<string, string>;

	slider_config?: Record<string, string>;
	enable_slider_feedback?: boolean;

	enable_button_feedback?: boolean;

	touchpad_height?: string;
	enable_touchpad_feedback?: boolean;
	enable_double_click?: boolean;
	double_click_keycode?: string;
	long_click_keycode?: string;

	rows?: Row[];
}

export type Row = (string | Row[])[];
