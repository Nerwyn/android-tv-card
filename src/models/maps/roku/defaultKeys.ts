import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/roku/#remote
 */
export const rokuDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'power',
		tap_action: { action: 'key', key: 'power' },
		icon: 'mdi:power',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: { action: 'key', key: 'home' },
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: { action: 'key', key: 'back' },
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: { action: 'key', key: 'volume_up' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: { action: 'key', key: 'volume_down' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: { action: 'key', key: 'volume_mute' },
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
		tap_action: { action: 'key', key: 'up' },
		hold_action: { action: 'repeat' },
		icon: 'chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: { action: 'key', key: 'down' },
		hold_action: { action: 'repeat' },
		icon: 'chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: { action: 'key', key: 'left' },
		hold_action: { action: 'repeat' },
		icon: 'chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: { action: 'key', key: 'right' },
		hold_action: { action: 'repeat' },
		icon: 'chevron-right',
	},
	{
		type: 'button',
		name: 'center',
		tap_action: { action: 'key', key: 'select' },
		icon: 'circle',
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
			key: 'select',
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
		name: 'play',
		tap_action: { action: 'key', key: 'play' },
		icon: 'mdi:play',
	},
	{
		type: 'button',
		name: 'forward',
		tap_action: { action: 'key', key: 'forward' },
		icon: 'mdi:fast-forward',
	},
	{
		type: 'button',
		name: 'reverse',
		tap_action: { action: 'key', key: 'reverse' },
		icon: 'mdi:rewind',
	},
	{
		type: 'button',
		name: 'replay',
		tap_action: { action: 'key', key: 'replay' },
		icon: 'mdi:replay',
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
		tap_action: { action: 'key', key: 'backspace' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:backspace',
	},
	{
		type: 'button',
		name: 'enter',
		tap_action: { action: 'key', key: 'enter' },
		icon: 'mdi:magnify',
	},
	{
		type: 'button',
		name: 'channel_up',
		tap_action: { action: 'key', key: 'channel_up' },
		icon: 'mdi:arrow-up-circle',
	},
	{
		type: 'button',
		name: 'channel_down',
		tap_action: { action: 'key', key: 'channel_down' },
		icon: 'mdi:arrow-down-circle',
	},
	{
		type: 'button',
		name: 'find_remote',
		tap_action: { action: 'key', key: 'find_remote' },
		icon: 'mdi:remote-tv',
	},
	{
		type: 'button',
		name: 'info',
		tap_action: { action: 'key', key: 'info' },
		icon: 'mdi:information',
	},
	{
		type: 'button',
		name: 'input_av1',
		tap_action: { action: 'key', key: 'input_av1' },
		icon: 'mdi:import',
	},
	{
		type: 'button',
		name: 'input_hdmi1',
		tap_action: { action: 'key', key: 'input_hdmi1' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'input_hdmi2',
		tap_action: { action: 'key', key: 'input_hdmi2' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'input_hdmi3',
		tap_action: { action: 'key', key: 'input_hdmi3' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'input_hdmi4',
		tap_action: { action: 'key', key: 'input_hdmi4' },
		icon: 'mdi:video-input-hdmi',
	},
	{
		type: 'button',
		name: 'input_tuner',
		tap_action: { action: 'key', key: 'input_tuner' },
		icon: 'mdi:video-input-antenna',
	},
	{
		type: 'button',
		name: 'literal',
		tap_action: { action: 'key', key: 'literal' },
		icon: 'mdi:alphabetical',
	},
];
