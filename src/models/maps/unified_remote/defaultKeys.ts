import { IElementConfig } from '../../interfaces';

/**
 * https://github.com/DaviPtrs/hass-unified-remote?tab=readme-ov-file#how-to-use
 *
 * https://github.com/unifiedremote/Remotes/blob/329d04f3c32b29038b0a6bc1ba034eefaff04267/Main/Monitor/remote_win.lua
 * https://github.com/unifiedremote/Remotes/blob/329d04f3c32b29038b0a6bc1ba034eefaff04267/Main/Media/remote.lua
 * https://github.com/unifiedremote/Remotes/blob/329d04f3c32b29038b0a6bc1ba034eefaff04267/Main/Keyboards/keyboard.lua
 * https://github.com/unifiedremote/Remotes/blob/329d04f3c32b29038b0a6bc1ba034eefaff04267/Core/Input/remote.lua
 */
export const unifiedRemoteDefaultKeys: IElementConfig[] = [
	{
		type: 'button',
		name: 'monitor_off',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Monitor',
				action: 'turn_off',
			},
		},
		icon: 'mdi:monitor-off',
	},
	{
		type: 'button',
		name: 'monitor_on',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Monitor',
				action: 'turn_on',
			},
		},
		icon: 'mdi:monitor',
	},
	{
		type: 'button',
		name: 'windows',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'LWIN',
						},
					],
				},
			},
		},
		icon: 'mdi:microsoft',
	},
	{
		type: 'button',
		name: 'back',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'BACK',
						},
					],
				},
			},
		},
		icon: 'mdi:keyboard-backspace',
	},
	{
		type: 'button',
		name: 'volume_down',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'volume_down',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-medium',
	},
	{
		type: 'button',
		name: 'volume_up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'volume_up',
			},
		},
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-high',
	},
	{
		type: 'button',
		name: 'volume_mute',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'volume_mute',
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
		step: 0.1,
		value_attribute: 'volume_level',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Volume',
				action: 'volume_{{ ((value * 10) | round) * 10 }}',
			},
		},
	},
	{
		type: 'touchpad',
		name: 'mousepad',
		mouse_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: 'MoveBy',
				extras: {
					Values: [
						{
							Value: '{{ 3 * deltaX }}',
						},
						{
							Value: '{{ 3 * deltaY }}',
						},
					],
				},
			},
		},
		multi_mouse_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: '{{ "Horz" if (deltaX | abs) > (deltaY | abs) else "Vert" }}',
				extras: {
					Values: [
						{
							Value: '{{ -0.2 * (deltaX if (deltaX | abs) > (deltaY | abs) else deltaY) }}',
						},
					],
				},
			},
		},
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: 'Click',
			},
		},
		hold_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Relmtech.Basic Input',
				action: 'hold',
			},
		},
		multi_tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Relmtech.Basic Input',
				action: 'right',
			},
		},
		up: {},
		down: {},
		left: {},
		right: {},
	},
	{
		type: 'button',
		name: 'up',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'UP',
						},
					],
				},
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
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'DOWN',
						},
					],
				},
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
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'LEFT',
						},
					],
				},
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
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'RIGHT',
						},
					],
				},
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
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'RETURN',
						},
					],
				},
			},
		},
		icon: 'mdi:checkbox-blank-circle',
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
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Navigation',
				action: 'toggle',
				extras: {
					Values: [
						{
							Value: 'RETURN',
						},
					],
				},
			},
		},
		up: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'unified_remote.call',
				data: {
					remote_id: 'Unified.Navigation',
					action: 'toggle',
					extras: {
						Values: [
							{
								Value: 'UP',
							},
						],
					},
				},
			},
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'unified_remote.call',
				data: {
					remote_id: 'Unified.Navigation',
					action: 'toggle',
					extras: {
						Values: [
							{
								Value: 'DOWN',
							},
						],
					},
				},
			},
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'unified_remote.call',
				data: {
					remote_id: 'Unified.Navigation',
					action: 'toggle',
					extras: {
						Values: [
							{
								Value: 'LEFT',
							},
						],
					},
				},
			},
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: {
				action: 'perform-action',
				perform_action: 'unified_remote.call',
				data: {
					remote_id: 'Unified.Navigation',
					action: 'toggle',
					extras: {
						Values: [
							{
								Value: 'RIGHT',
							},
						],
					},
				},
			},
			hold_action: { action: 'repeat' },
		},
	},
	{
		type: 'button',
		name: 'play_pause',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'play_pause',
			},
		},
		icon: 'mdi:play-pause',
	},
	{
		type: 'button',
		name: 'stop',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'stop',
			},
		},
		icon: 'mdi:stop',
	},
	{
		type: 'button',
		name: 'previous',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'previous',
			},
		},
		icon: 'mdi:skip-previous',
	},
	{
		type: 'button',
		name: 'next',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Unified.Media',
				action: 'next',
			},
		},
		icon: 'mdi:skip-next',
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
		name: 'delete',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: 'Press',
				extras: {
					Values: [
						{
							Value: 'back',
						},
					],
				},
			},
		},
		icon: 'mdi:backspace',
	},
	{
		type: 'button',
		name: 'forward_delete',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: 'Press',
				extras: {
					Values: [
						{
							Value: 'delete',
						},
					],
				},
			},
		},
		icon: 'mdi:backspace-reverse',
	},
	{
		type: 'button',
		name: 'enter',
		tap_action: {
			action: 'perform-action',
			perform_action: 'unified_remote.call',
			data: {
				remote_id: 'Core.Input',
				action: 'Press',
				extras: {
					Values: [
						{
							Value: 'enter',
						},
					],
				},
			},
		},
		icon: 'mdi:magnify',
	},
];
