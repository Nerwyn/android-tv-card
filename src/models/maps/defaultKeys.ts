import { IElementConfig } from '..';

/**
 * This is the list of most common commands from the Android TV Remote integration page.
 * Not all are ensured to work, and if they do not it is likely an issue with the underlying package used by the Android TV Remote integration or the Android TV Remote Protocol V2 itself.
 * https://www.home-assistant.io/integrations/androidtv_remote/#remote
 */
export const defaultKeys: Record<string, IElementConfig> = {
	power: {
		type: 'button',
		tap_action: { action: 'key', key: 'POWER' },
		icon: 'mdi:power',
	},
	volume_up: {
		type: 'button',
		tap_action: { action: 'key', key: 'VOLUME_UP' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-high',
	},
	volume_down: {
		type: 'button',
		tap_action: { action: 'key', key: 'VOLUME_DOWN' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:volume-medium',
	},
	volume_mute: {
		type: 'button',
		tap_action: { action: 'key', key: 'MUTE' },
		icon: 'mdi:volume-low',
	},
	back: {
		type: 'button',
		tap_action: { action: 'key', key: 'BACK' },
		icon: 'mdi:keyboard-backspace',
	},
	home: {
		type: 'button',
		tap_action: { action: 'key', key: 'HOME' },
		icon: 'mdi:home',
	},
	up: {
		type: 'button',
		tap_action: { action: 'key', key: 'DPAD_UP' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-up',
	},
	left: {
		type: 'button',
		tap_action: { action: 'key', key: 'DPAD_LEFT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-left',
	},
	center: {
		type: 'button',
		tap_action: { action: 'key', key: 'DPAD_CENTER' },
		icon: 'mdi:checkbox-blank-circle',
	},
	right: {
		type: 'button',
		tap_action: { action: 'key', key: 'DPAD_RIGHT' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-right',
	},
	down: {
		type: 'button',
		tap_action: { action: 'key', key: 'DPAD_DOWN' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:chevron-down',
	},
	play: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_PLAY' },
		icon: 'mdi:play',
	},
	pause: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_PAUSE' },
		icon: 'mdi:pause',
	},
	play_pause: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_PLAY_PAUSE' },
		icon: 'mdi:play-pause',
	},
	stop: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_STOP' },
		icon: 'mdi:stop',
	},
	rewind: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_REWIND' },
		icon: 'mdi:rewind',
	},
	fast_forward: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_FAST_FORWARD' },
		icon: 'mdi:fast-forward',
	},
	previous: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_PREVIOUS' },
		icon: 'mdi:skip-previous',
	},
	record: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_RECORD' },
		icon: 'mdi:record',
	},
	next: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_NEXT' },
		icon: 'mdi:skip-next',
	},
	menu: {
		type: 'button',
		tap_action: { action: 'key', key: 'MENU' },
		icon: 'mdi:menu',
	},
	a: {
		type: 'button',
		tap_action: { action: 'key', key: 'BUTTON_A' },
		icon: 'mdi:alpha-a-circle',
	},
	b: {
		type: 'button',
		tap_action: { action: 'key', key: 'BUTTON_B' },
		icon: 'mdi:alpha-b-circle',
	},
	x: {
		type: 'button',
		tap_action: { action: 'key', key: 'BUTTON_X' },
		icon: 'mdi:alpha-x-circle',
	},
	y: {
		type: 'button',
		tap_action: { action: 'key', key: 'BUTTON_Y' },
		icon: 'mdi:alpha-y-circle',
	},
	n0: {
		type: 'button',
		tap_action: { action: 'key', key: '0' },
		icon: 'mdi:numeric-0',
	},
	n1: {
		type: 'button',
		tap_action: { action: 'key', key: '1' },
		icon: 'mdi:numeric-1',
	},
	n2: {
		type: 'button',
		tap_action: { action: 'key', key: '2' },
		icon: 'mdi:numeric-2',
	},
	n3: {
		type: 'button',
		tap_action: { action: 'key', key: '3' },
		icon: 'mdi:numeric-3',
	},
	n4: {
		type: 'button',
		tap_action: { action: 'key', key: '4' },
		icon: 'mdi:numeric-4',
	},
	n5: {
		type: 'button',
		tap_action: { action: 'key', key: '5' },
		icon: 'mdi:numeric-5',
	},
	n6: {
		type: 'button',
		tap_action: { action: 'key', key: '6' },
		icon: 'mdi:numeric-6',
	},
	n7: {
		type: 'button',
		tap_action: { action: 'key', key: '7' },
		icon: 'mdi:numeric-7',
	},
	n8: {
		type: 'button',
		tap_action: { action: 'key', key: '8' },
		icon: 'mdi:numeric-8',
	},
	n9: {
		type: 'button',
		tap_action: { action: 'key', key: '9' },
		icon: 'mdi:numeric-9',
	},
	channel_up: {
		type: 'button',
		tap_action: { action: 'key', key: 'CHANNEL_UP' },
		icon: 'mdi:arrow-up-circle',
	},
	channel_down: {
		type: 'button',
		tap_action: { action: 'key', key: 'CHANNEL_DOWN' },
		icon: 'mdi:arrow-down-circle',
	},
	f1: {
		type: 'button',
		tap_action: { action: 'key', key: 'F1' },
		icon: 'mdi:keyboard-f1',
	},
	f2: {
		type: 'button',
		tap_action: { action: 'key', key: 'F2' },
		icon: 'mdi:keyboard-f2',
	},
	f3: {
		type: 'button',
		tap_action: { action: 'key', key: 'F3' },
		icon: 'mdi:keyboard-f3',
	},
	f4: {
		type: 'button',
		tap_action: { action: 'key', key: 'F4' },
		icon: 'mdi:keyboard-f4',
	},
	f5: {
		type: 'button',
		tap_action: { action: 'key', key: 'F5' },
		icon: 'mdi:keyboard-f5',
	},
	f6: {
		type: 'button',
		tap_action: { action: 'key', key: 'F6' },
		icon: 'mdi:keyboard-f6',
	},
	f7: {
		type: 'button',
		tap_action: { action: 'key', key: 'F7' },
		icon: 'mdi:keyboard-f7',
	},
	f8: {
		type: 'button',
		tap_action: { action: 'key', key: 'F8' },
		icon: 'mdi:keyboard-f8',
	},
	f9: {
		type: 'button',
		tap_action: { action: 'key', key: 'F9' },
		icon: 'mdi:keyboard-f9',
	},
	f10: {
		type: 'button',
		tap_action: { action: 'key', key: 'F10' },
		icon: 'mdi:keyboard-f10',
	},
	f11: {
		type: 'button',
		tap_action: { action: 'key', key: 'F11' },
		icon: 'mdi:keyboard-f11',
	},
	f12: {
		type: 'button',
		tap_action: { action: 'key', key: 'F12' },
		icon: 'mdi:keyboard-f12',
	},
	tv: {
		type: 'button',
		tap_action: { action: 'key', key: 'TV' },
		icon: 'mdi:television-box',
	},
	red: {
		type: 'button',
		tap_action: { action: 'key', key: 'PROG_RED' },
		icon: 'mdi:alpha-r-box',
	},
	green: {
		type: 'button',
		tap_action: { action: 'key', key: 'PROG_GREEN' },
		icon: 'mdi:alpha-g-box',
	},
	yellow: {
		type: 'button',
		tap_action: { action: 'key', key: 'PROG_YELLOW' },
		icon: 'mdi:alpha-y-box',
	},
	blue: {
		type: 'button',
		tap_action: { action: 'key', key: 'PROG_BLUE' },
		icon: 'mdi:alpha-b-box',
	},
	button_mode: {
		type: 'button',
		tap_action: { action: 'key', key: 'BUTTON_MODE' },
		icon: 'mdi:gesture-tap-button',
	},
	explorer: {
		type: 'button',
		tap_action: { action: 'key', key: 'EXPLORER' },
		icon: 'mdi:folder-multiple',
	},
	info: {
		type: 'button',
		tap_action: { action: 'key', key: 'INFO' },
		icon: 'mdi:information',
	},
	guide: {
		type: 'button',
		tap_action: { action: 'key', key: 'GUIDE' },
		icon: 'mdi:television-guide',
	},
	teletext: {
		type: 'button',
		tap_action: { action: 'key', key: 'TV_TELETEXT' },
		icon: 'mdi:card-text',
	},
	captions: {
		type: 'button',
		tap_action: { action: 'key', key: 'CAPTIONS' },
		icon: 'mdi:closed-caption',
	},
	dvr: {
		type: 'button',
		tap_action: { action: 'key', key: 'DVR' },
		icon: 'mdi:audio-video',
	},
	audio_track: {
		type: 'button',
		tap_action: { action: 'key', key: 'MEDIA_AUDIO_TRACK' },
		icon: 'mdi:waveform',
	},
	settings: {
		type: 'button',
		tap_action: { action: 'key', key: 'SETTINGS' },
		icon: 'mdi:cog',
	},
	delete: {
		type: 'button',
		tap_action: { action: 'key', key: 'DEL' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:backspace',
	},
	forward_delete: {
		type: 'button',
		tap_action: { action: 'key', key: 'FOWARD_DEL' },
		hold_action: { action: 'repeat' },
		icon: 'mdi:backspace-reverse',
	},
	enter: {
		type: 'button',
		tap_action: { action: 'key', key: 'ENTER' },
		icon: 'mdi:magnify',
	},
	keyboard: {
		type: 'button',
		tap_action: { action: 'keyboard' },
		icon: 'mdi:keyboard',
	},
	search: {
		type: 'button',
		tap_action: { action: 'search' },
		icon: 'mdi:google-assistant',
	},
	textbox: {
		type: 'button',
		tap_action: { action: 'textbox' },
		icon: 'mdi:text-box',
	},
	slider: {
		type: 'slider',
		range: [0, 1],
		value_attribute: 'volume_level',
		autofill_entity_id: true,
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.volume_set',
			data: {
				volume_level: '{{ value | float }}',
			},
		},
	},
	touchpad: {
		type: 'touchpad',
		tap_action: {
			action: 'key',
			key: 'DPAD_CENTER',
		},
		up: {
			tap_action: { action: 'key', key: 'DPAD_UP' },
			hold_action: { action: 'repeat' },
		},
		left: {
			tap_action: { action: 'key', key: 'DPAD_LEFT' },
			hold_action: { action: 'repeat' },
		},
		right: {
			tap_action: { action: 'key', key: 'DPAD_RIGHT' },
			hold_action: { action: 'repeat' },
		},
		down: {
			tap_action: { action: 'key', key: 'DPAD_DOWN' },
			hold_action: { action: 'repeat' },
		},
	},
};
