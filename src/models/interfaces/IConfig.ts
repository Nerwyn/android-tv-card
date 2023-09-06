import { IKeys, ISources } from '.';

export interface IConfig {
	theme?: string;
	keys?: IKeys;
	custom_keys?: IKeys;
	sources?: ISources;
	custom_sources?: ISources;
	icons?: Record<string, string>;
	custom_icons?: Record<string, string>;
	alt_volume_icons?: boolean;
	volume_row?: string;
	touchpad_height?: string;
	double_click_keycode?: string;
	window?: Window;
}
