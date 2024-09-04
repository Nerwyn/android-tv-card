import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/apple_tv/#remote
 */
export const appleTVDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'wakeup',
		tap_action: {
			action: 'key',
			key: 'wakeup',
		},
		icon: 'mdi:power-on',
	},
	{
		type: 'button',
		name: 'suspend',
		tap_action: {
			action: 'key',
			key: 'suspend',
		},
		icon: 'mdi:power-off',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: {
			action: 'key',
			key: 'home',
		},
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'menu',
		tap_action: {
			action: 'key',
			key: 'menu',
		},
		icon: 'mdi:menu',
	},
	{
		type: 'button',
		name: 'top_menu',
		tap_action: {
			action: 'key',
			key: 'top_menu',
		},
		icon: 'mdi:apple',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: {
			action: 'key',
			key: 'volume_up',
		},
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: {
			action: 'key',
			key: 'volume_down',
		},
		icon: 'mdi:volume-medium',
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
			action: 'key',
			key: 'up',
		},
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: {
			action: 'key',
			key: 'down',
		},
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: {
			action: 'key',
			key: 'left',
		},
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: {
			action: 'key',
			key: 'right',
		},
		icon: 'mdi:chevron-right',
	},
	{
		type: 'button',
		name: 'center',
		tap_action: {
			action: 'key',
			key: 'select',
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
		tap_action: {
			action: 'key',
			key: 'play',
		},
		icon: 'mdi:play',
	},
	{
		type: 'button',
		name: 'pause',
		tap_action: {
			action: 'key',
			key: 'pause',
		},
		icon: 'mdi:pause',
	},
	{
		type: 'button',
		name: 'skip_backward',
		tap_action: {
			action: 'key',
			key: 'skip_backward',
		},
		icon: 'mdi:skip-backward',
	},
	{
		type: 'button',
		name: 'skip_forward',
		tap_action: {
			action: 'key',
			key: 'skip_forward',
		},
		icon: 'mdi:skip-forward',
	},
	{
		type: 'button',
		name: 'previous',
		tap_action: {
			action: 'key',
			key: 'previous',
		},
		icon: 'mdi:skip-previous',
	},
	{
		type: 'button',
		name: 'next',
		tap_action: {
			action: 'key',
			key: 'next',
		},
		icon: 'mdi:skip-next',
	},
];