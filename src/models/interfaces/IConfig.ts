import { IKeys, ISources } from '.';
import { TemplateResult } from 'lit-element';

export interface IConfig {
	theme?: string;
	title?: string;

	media_player_id?: string;
	remote_id?: string;
	adb_id?: string;

	keys?: IKeys;
	custom_keys?: IKeys;

	sources?: ISources;
	custom_sources?: ISources;

	icons?: Record<string, string>;
	custom_icons?: Record<string, string>;
	alt_volume_icons?: boolean;

	navigation_row?: string;
	touchpad_height?: string;
	volume_row?: string;
	volume_slider?: TemplateResult;
	slider_config?: Record<string, string>;

	enable_button_feedback?: boolean;
	enable_double_click?: boolean;
	double_click_keycode?: string;
	long_click_keycode?: string;

	rows?: string[][];
}
