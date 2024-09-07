import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/webostv/#generic-commands-and-buttons
 */
export const webosDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'home',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'HOME',
			},
		},
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'BACK',
			},
		},
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'menu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'MENU',
			},
		},
		icon: 'mdi:menu',
	},
	{
		type: 'button',
		name: 'dash',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'DASH',
			},
		},
		icon: 'mdi:view-dashboard-variant',
	},
	{
		type: 'button',
		name: 'exit',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'EXIT',
			},
		},
		icon: 'mdi:exit-to-app',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'VOLUMEUP',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'VOLUMEDOWN',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'MUTE',
			},
		},
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
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'UP',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'DOWN',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'LEFT',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'RIGHT',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-right',
	},
	{
		type: 'button',
		name: 'center',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'ENTER',
			},
		},
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
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'ENTER',
			},
		},
		up: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'webostv.button',
				data: {
					button: 'UP',
				},
			},
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'webostv.button',
				data: {
					button: 'DOWN',
				},
			},
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'webostv.button',
				data: {
					button: 'LEFT',
				},
			},
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'webostv.button',
				data: {
					button: 'RIGHT',
				},
			},
			hold_action: { action: 'repeat' },
		},
	},
	{
		type: 'button',
		name: 'play',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'PLAY',
			},
		},
		icon: 'mdi:play',
	},
	{
		type: 'button',
		name: 'pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'PAUSE',
			},
		},
		icon: 'mdi:pause',
	},
	{
		type: 'button',
		name: 'channel_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'CHANNELUP',
			},
		},
		icon: 'mdi:arrow-up-circle',
	},
	{
		type: 'button',
		name: 'channel_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'CHANNELDOWN',
			},
		},
		icon: 'mdi:arrow-down-circle',
	},
	{
		type: 'button',
		name: 'red',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'RED',
			},
		},
		icon: 'mdi:alpha-r-box',
	},
	{
		type: 'button',
		name: 'green',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'GREEN',
			},
		},
		icon: 'mdi:alpha-g-box',
	},
	{
		type: 'button',
		name: 'yellow',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'YELLOW',
			},
		},
		icon: 'mdi:alpha-y-box',
	},
	{
		type: 'button',
		name: 'blue',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'BLUE',
			},
		},
		icon: 'mdi:alpha-b-box',
	},
	{
		type: 'button',
		name: 'n0',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '0',
			},
		},
		icon: 'mdi:numeric-0',
	},
	{
		type: 'button',
		name: 'n1',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '1',
			},
		},
		icon: 'mdi:numeric-1',
	},
	{
		type: 'button',
		name: 'n2',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '2',
			},
		},
		icon: 'mdi:numeric-2',
	},
	{
		type: 'button',
		name: 'n3',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '3',
			},
		},
		icon: 'mdi:numeric-3',
	},
	{
		type: 'button',
		name: 'n4',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '4',
			},
		},
		icon: 'mdi:numeric-4',
	},
	{
		type: 'button',
		name: 'n5',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '5',
			},
		},
		icon: 'mdi:numeric-5',
	},
	{
		type: 'button',
		name: 'n6',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '6',
			},
		},
		icon: 'mdi:numeric-6',
	},
	{
		type: 'button',
		name: 'n7',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '7',
			},
		},
		icon: 'mdi:numeric-7',
	},
	{
		type: 'button',
		name: 'n8',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '8',
			},
		},
		icon: 'mdi:numeric-8',
	},
	{
		type: 'button',
		name: 'n9',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: '9',
			},
		},
		icon: 'mdi:numeric-9',
	},
	{
		type: 'button',
		name: 'numpad',
		icon: 'mdi:dialpad',
	},
	{
		type: 'button',
		name: 'asterisk',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'ASTERISK',
			},
		},
		icon: 'mdi:asterisk',
	},
	{
		type: 'button',
		name: 'info',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'INFO',
			},
		},
		icon: 'mdi:information',
	},
	{
		type: 'button',
		name: 'guide',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'GUIDE',
			},
		},
		icon: 'mdi:television-box',
	},
	{
		type: 'button',
		name: 'captions',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'CC',
			},
		},
		icon: 'mdi:closed-caption',
	},
];
