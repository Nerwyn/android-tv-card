import { IElementConfig } from '../../models';

/**
 * https://www.home-assistant.io/integrations/kodi/#action-kodicall_method
 * https://kodi.wiki/?title=JSON-RPC_API
 */
export const kodiDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Up',
			},
		},
		icon: 'mdi:chevron-up',
	},
	{
		type: 'button',
		name: 'down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Down',
			},
		},
		icon: 'mdi:chevron-down',
	},
	{
		type: 'button',
		name: 'left',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Left',
			},
		},
		icon: 'mdi:chevron-left',
	},
	{
		type: 'button',
		name: 'right',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Right',
			},
		},
		icon: 'mdi:chevron-right',
	},
	{
		// Duplicate to be consistent with other platforms
		type: 'button',
		name: 'center',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Select',
			},
		},
		icon: 'mdi:circle',
	},
	{
		type: 'button',
		name: 'select',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Select',
			},
		},
		icon: 'mdi:circle',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Application.SetVolume',
				volume: 'increment',
			},
		},
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Application.SetVolume',
				volume: 'decrement',
			},
		},
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Application.SetMute',
				mute: true,
			},
		},
		icon: 'mdi:volume-low',
	},
	{
		type: 'button',
		name: 'volume_unmute',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Application.SetMute',
				mute: false,
			},
		},
		icon: 'mdi:volume-variant-off',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Back',
			},
		},
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'menu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.ContextMenu',
			},
		},
		icon: 'mdi:menu',
	},
	{
		type: 'button',
		name: 'play_pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Player.PlayPause',
			},
		},
		icon: 'mdi:play-pause',
	},
	{
		type: 'button',
		name: 'home',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Home',
			},
		},
		icon: 'mdi:home',
	},
	{
		type: 'button',
		name: 'info',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Info',
			},
		},
		icon: 'mdi:information',
	},
	{
		type: 'button',
		name: 'codec',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.ShowCodec',
			},
		},
		icon: 'mdi:information-box',
	},
	{
		type: 'button',
		name: 'osd',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.ShowOSD',
			},
		},
		icon: 'mdi:television-guide',
	},
	{
		type: 'button',
		name: 'process_info',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.ShowPlayerProcessInfo',
			},
		},
		icon: 'mdi:information-variant-circle',
	},
	{
		type: 'button',
		name: '',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: '',
			},
		},
		icon: '',
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
		icon: 'mdi:kodi',
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
		type: 'touchpad',
		name: 'touchpad',
		tap_action: {
			action: 'perform-action',
			perform_action: 'kodi.call_method',
			data: {
				method: 'Input.Select',
			},
		},
		up: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'kodi.call_method',
				data: {
					method: 'Input.Up',
				},
			},
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'kodi.call_method',
				data: {
					method: 'Input.Down',
				},
			},
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'kodi.call_method',
				data: {
					method: 'Input.Left',
				},
			},
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'kodi.call_method',
				data: {
					method: 'Input.Right',
				},
			},
			hold_action: { action: 'repeat' },
		},
	},
];
