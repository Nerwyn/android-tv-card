import { IElementConfig } from '../../models';

/**
 * https://www.home-assistant.io/integrations/apple_tv/#launching-apps
 */
export const appleTVDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'YouTube',
			},
		},
		icon: 'primevideo',
	},
	{
		type: 'button',
		name: 'netflix',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Netflix',
			},
		},
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'spotify',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Spotify',
			},
		},
		icon: 'mdi:spotify',
	},
	{
		type: 'button',
		name: 'disney',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Disney+',
			},
		},
		icon: 'disney',
	},
	{
		type: 'button',
		name: 'youtube',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'YouTube',
			},
		},
		icon: 'mdi:youtube',
	},
	{
		type: 'button',
		name: 'appletv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'TV',
			},
		},
		icon: 'appletv',
	},
	{
		type: 'button',
		name: 'max',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'HBO Max',
			},
		},
		icon: 'max',
	},
	{
		type: 'button',
		name: 'skyshowtime',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'SkyShowtime',
			},
		},
		icon: 'showtime',
	},
	{
		type: 'button',
		name: 'plex',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Plex',
			},
		},
		icon: 'mdi:plex',
	},
	{
		type: 'button',
		name: 'discovery',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'discovery+',
			},
		},
		icon: 'discovery',
	},
	{
		type: 'button',
		name: 'viaplay',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Viaplay',
			},
		},
		icon: 'viaplay',
	},
	{
		type: 'button',
		name: 'tv2play',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'TV 2 Play',
			},
		},
		icon: 'tv2play',
	},
	{
		type: 'button',
		name: 'nrktv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'NRK TV',
			},
		},
		icon: 'nrktv',
	},
	{
		type: 'button',
		name: 'allente',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Allente',
			},
		},
		icon: 'allente',
	},
];
