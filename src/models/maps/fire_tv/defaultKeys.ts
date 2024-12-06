import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/androidtv#androidtvadb_command
 */
export const fireTVDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'power',
		tap_action: { action: 'key', key: 'POWER' },
		icon: 'mdi:power',
	},
	{
		type: 'button',
		name: 'sleep',
		tap_action: { action: 'key', key: 'SLEEP' },
		icon: 'mdi:power-sleep',
	},
	{
		type: 'button',
		name: 'resume',
		tap_action: { action: 'key', key: 'RESUME' },
		icon: 'mdi:power-on',
	},
	{
		type: 'button',
		name: 'wakeup',
		tap_action: { action: 'key', key: 'RESUME' },
		icon: 'mdi:power-on',
	},
	{
		type: 'button',
		name: 'suspend',
		tap_action: { action: 'key', key: 'SUSPEND' },
		icon: 'mdi:power-off',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: { action: 'key', key: 'HOME' },
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'move_home',
		tap_action: { action: 'key', key: 'MOVE_HOME' },
		icon: 'mdi:home-import-outline',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: { action: 'key', key: 'BACK' },
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'menu',
		tap_action: { action: 'key', key: 'MENU' },
		icon: 'mdi:menu',
	},
	{
		type: 'button',
		name: 'settings',
		tap_action: { action: 'key', key: 'SETTINGS' },
		icon: 'mdi:cog',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: { action: 'key', key: 'VOLUME_UP' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: { action: 'key', key: 'VOLUME_DOWN' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: { action: 'key', key: 'MUTE' },
		icon: 'mdi:volume-low',
	},
	{
		type: 'button',
		name: 'volume_buttons',
		icon: 'mdi:volume-plus',
	},
	{
		type: 'slider',
		name: 'slider',
		range: [0, 1],
		step: 0.01,
		value_attribute: 'volume_level',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.volume_set',
			data: {
				volume_level: '{{ value | float }}',
			},
		},
	},
	{
		type: 'button',
		name: 'up',
		tap_action: { action: 'key', key: 'UP' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: { action: 'key', key: 'DOWN' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: { action: 'key', key: 'LEFT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: { action: 'key', key: 'RIGHT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-right',
	},
	{
		type: 'button',
		name: 'center',
		tap_action: { action: 'key', key: 'CENTER' },
		icon: 'mdi:circle',
	},
	{
		type: 'button',
		name: 'navigation_buttons',
		icon: 'mdi:gamepad',
	},
	{
		type: 'button',
		name: 'dpad',
		icon: 'mdi:gamepad',
	},
	{
		type: 'touchpad',
		name: 'touchpad',
		tap_action: {
			action: 'key',
			key: 'CENTER',
		},
		up: {
			tap_action: { action: 'key', key: 'UP' },
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: { action: 'key', key: 'DOWN' },
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: { action: 'key', key: 'LEFT' },
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: { action: 'key', key: 'RIGHT' },
			hold_action: { action: 'repeat' },
		},
	},
	{
		type: 'button',
		name: 'play_pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.media_play_pause',
		},
		icon: 'mdi:play-pause',
	},
	{
		type: 'button',
		name: 'play',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.media_play',
		},
		icon: 'mdi:play',
	},
	{
		type: 'button',
		name: 'pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.media_pause',
		},
		icon: 'mdi:pause',
	},
	{
		type: 'button',
		name: 'fast_forward',
		tap_action: { action: 'key', key: 'FAST_FORWARD' },
		icon: 'mdi:fast-forward',
	},
	{
		type: 'button',
		name: 'rewind',
		tap_action: { action: 'key', key: 'REWIND' },
		icon: 'mdi:rewind',
	},
	{
		type: 'button',
		name: 'keyboard',
		tap_action: { action: 'keyboard' },
		icon: 'mdi:keyboard',
	},
	{
		type: 'button',
		name: 'textbox',
		tap_action: { action: 'textbox' },
		icon: 'mdi:text-box',
	},
	{
		type: 'button',
		name: 'search',
		tap_action: { action: 'search' },
		icon: 'mdi:search-web',
	},
	{
		type: 'button',
		name: 'delete',
		tap_action: { action: 'key', key: 'input keyevent 67' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:backspace',
	},
	{
		type: 'button',
		name: 'enter',
		tap_action: { action: 'key', key: 'ENTER' },
		icon: 'mdi:magnify',
	},
	{
		type: 'button',
		name: 'red',
		tap_action: { action: 'key', key: 'RED' },
		icon: 'mdi:alpha-r-box',
	},
	{
		type: 'button',
		name: 'green',
		tap_action: { action: 'key', key: 'GREEN' },
		icon: 'mdi:alpha-g-box',
	},
	{
		type: 'button',
		name: 'yellow',
		tap_action: { action: 'key', key: 'YELLOW' },
		icon: 'mdi:alpha-y-box',
	},
	{
		type: 'button',
		name: 'blue',
		tap_action: { action: 'key', key: 'BLUE' },
		icon: 'mdi:alpha-b-box',
	},
	{
		type: 'button',
		name: 'component_1',
		tap_action: { action: 'key', key: 'COMPONENT1' },
		icon: 'mdi:video-input-component',
	},
	{
		type: 'button',
		name: 'component_2',
		tap_action: { action: 'key', key: 'COMPONENT2' },
		icon: 'mdi:video-input-component',
	},
	{
		type: 'button',
		name: 'composite_1',
		tap_action: { action: 'key', key: 'COMPOSITE1' },
		icon: 'mdi:video-input-component',
	},
	{
		type: 'button',
		name: 'composite_2',
		tap_action: { action: 'key', key: 'COMPOSITE2' },
		icon: 'mdi:video-input-component',
	},
	{
		type: 'button',
		name: 'hdmi_1',
		tap_action: { action: 'key', key: 'HDMI1' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'hdmi_2',
		tap_action: { action: 'key', key: 'HDMI2' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'hdmi_3',
		tap_action: { action: 'key', key: 'HDMI3' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'hdmi_4',
		tap_action: { action: 'key', key: 'HDMI4' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'input',
		tap_action: { action: 'key', key: 'INPUT' },
		icon: 'mdi:import',
	},
	{
		type: 'button',
		name: 'vga',
		tap_action: { action: 'key', key: 'VGA' },
		icon: 'mdi:serial-port',
	},
	{
		type: 'button',
		name: 'end',
		tap_action: { action: 'key', key: 'END' },
		icon: 'mdi:arrow-collapse-right',
	},
	{
		type: 'button',
		name: 'escape',
		tap_action: { action: 'key', key: 'ESCAPE' },
		icon: 'mdi:exit-to-app',
	},
	{
		type: 'button',
		name: 'pairing',
		tap_action: { action: 'key', key: 'PAIRING' },
		icon: 'mdi:bluetooth-audio',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: { action: 'key', key: 'HOME' },
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'sys_up',
		tap_action: { action: 'key', key: 'SYSUP' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-up-circle',
	},
	{
		type: 'button',
		name: 'sys_down',
		tap_action: { action: 'key', key: 'SYSDOWN' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-down-circle',
	},
	{
		type: 'button',
		name: 'sys_left',
		tap_action: { action: 'key', key: 'SYSLEFT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-left-circle',
	},
	{
		type: 'button',
		name: 'sys_right',
		tap_action: { action: 'key', key: 'SYSRIGHT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-right-circle',
	},
	{
		type: 'button',
		name: 'text',
		tap_action: { action: 'key', key: 'TEXT' },
		icon: 'mdi:text',
	},
	{
		type: 'button',
		name: 'top',
		tap_action: { action: 'key', key: 'TOP' },
		icon: 'mdi:arrow-collapse-up',
	},
];
