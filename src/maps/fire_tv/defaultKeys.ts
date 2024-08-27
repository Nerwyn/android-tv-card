import { IElementConfig } from '../../models';

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
		name: 'home',
		tap_action: { action: 'key', key: 'HOME' },
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: { action: 'key', key: 'BACK' },
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: { action: 'key', key: 'VOLUME_UP' },
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: { action: 'key', key: 'VOLUME_DOWN' },
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volumemute',
		tap_action: { action: 'key', key: 'MUTE' },
		icon: 'mdi:volume-low',
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
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: { action: 'key', key: 'DOWN' },
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: { action: 'key', key: 'LEFT' },
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: { action: 'key', key: 'RIGHT' },
		icon: 'mdi:chevron-right',
	},
	{
		type: 'button',
		name: 'center',
		tap_action: { action: 'key', key: 'CENTER' },
		icon: 'mdi:circle',
	},
	{
		type: 'touchpad',
		name: 'touchpad',
		tap_action: {
			action: 'key',
			key: 'center',
		},
		up: {
			tap_action: { action: 'key', key: 'up' },
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: { action: 'key', key: 'down' },
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: { action: 'key', key: 'left' },
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: { action: 'key', key: 'right' },
			hold_action: { action: 'repeat' },
		},
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
];
