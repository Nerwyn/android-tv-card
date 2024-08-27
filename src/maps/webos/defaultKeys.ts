import { IElementConfig } from '../../models';

/**
 * https://www.home-assistant.io/integrations/webostv/#generic-commands-and-buttons
 */
export const webosDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'UP',
			},
		},
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'DOWN',
			},
		},
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'LEFT',
			},
		},
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'RIGHT',
			},
		},
		icon: 'mdi:chevron-right',
	},
	{
		type: 'button',
		name: 'enter',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'ENTER',
			},
		},
		icon: 'mdi:circle',
	},
	{
		// Duplicate to be consistent with other platforms
		type: 'button',
		name: 'center',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'ENTER',
			},
		},
		icon: 'mdi:circle',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'HOME',
			},
		},
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'menu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'MENU',
			},
		},
		icon: 'mdi:menu',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'BACK',
			},
		},
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'dash',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'DASH',
			},
		},
		icon: 'mdi:view-dashboard-variant',
	},
	{
		type: 'button',
		name: 'info',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'INFO',
			},
		},
		icon: 'mdi:information',
	},
	{
		type: 'button',
		name: 'asterisk',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'ASTERISK',
			},
		},
		icon: 'mdi:asterisk',
	},
	{
		type: 'button',
		name: 'captions',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'CC',
			},
		},
		icon: 'mdi:closed-caption',
	},
	{
		type: 'button',
		name: 'exit',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'EXIT',
			},
		},
		icon: 'mdi:exit-to-app',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'VOLUMEUP',
			},
		},
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'VOLUMEDOWN',
			},
		},
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'MUTE',
			},
		},
		icon: 'mdi:volume-low',
	},
	{
		type: 'button',
		name: 'red',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'RED',
			},
		},
		icon: 'mdi:alpha-r-box',
	},
	{
		type: 'button',
		name: 'green',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'GREEN',
			},
		},
		icon: 'mdi:alpha-g-box',
	},
	{
		type: 'button',
		name: 'blue',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'BLUE',
			},
		},
		icon: 'mdi:alpha-b-box',
	},
	{
		type: 'button',
		name: 'yellow',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'YELLOW',
			},
		},
		icon: 'mdi:alpha-y-box',
	},
	{
		type: 'button',
		name: 'channel_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'CHANNELUP',
			},
		},
		icon: 'mdi:arrow-up-circle',
	},
	{
		type: 'button',
		name: 'channel_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'CHANNELDOWN',
			},
		},
		icon: 'mdi:arrow-down-circle',
	},
	{
		type: 'button',
		name: 'play',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'PLAY',
			},
		},
		icon: 'mdi:play',
	},
	{
		type: 'button',
		name: 'pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'PAUSE',
			},
		},
		icon: 'mdi:pause',
	},
	{
		type: 'button',
		name: 'guide',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: 'GUIDE',
			},
		},
		icon: 'mdi:television-box',
	},
	{
		type: 'button',
		name: 'n0',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '0',
			},
		},
		icon: 'mdi:numeric-0',
	},
	{
		type: 'button',
		name: 'n1',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '1',
			},
		},
		icon: 'mdi:numeric-1',
	},
	{
		type: 'button',
		name: 'n2',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '2',
			},
		},
		icon: 'mdi:numeric-2',
	},
	{
		type: 'button',
		name: 'n3',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '3',
			},
		},
		icon: 'mdi:numeric-3',
	},
	{
		type: 'button',
		name: 'n4',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '4',
			},
		},
		icon: 'mdi:numeric-4',
	},
	{
		type: 'button',
		name: 'n5',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '5',
			},
		},
		icon: 'mdi:numeric-5',
	},
	{
		type: 'button',
		name: 'n6',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '6',
			},
		},
		icon: 'mdi:numeric-6',
	},
	{
		type: 'button',
		name: 'n7',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '7',
			},
		},
		icon: 'mdi:numeric-7',
	},
	{
		type: 'button',
		name: 'n8',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '8',
			},
		},
		icon: 'mdi:numeric-8',
	},
	{
		type: 'button',
		name: 'n9',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webos.button',
			data: {
				method: '9',
			},
		},
		icon: 'mdi:numeric-9',
	},
];