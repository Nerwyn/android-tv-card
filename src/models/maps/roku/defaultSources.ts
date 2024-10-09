import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/roku/#source-automation
 */
export const rokuDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'appletv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Apple TV',
			},
		},
		icon: 'appletv',
	},
	{
		type: 'button',
		name: 'crunchyroll',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Crunchyroll',
			},
		},
		icon: 'crunchyroll',
	},
	{
		type: 'button',
		name: 'dazn',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'DAZN Live Sports Streaming',
			},
		},
		icon: 'dazn',
	},
	{
		type: 'button',
		name: 'discoveryplus',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'discovery+ | Stream TV Shows',
			},
		},
		icon: 'discovery',
	},
	{
		type: 'button',
		name: 'disney',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Disney Plus',
			},
		},
		icon: 'disney',
	},
	{
		type: 'button',
		name: 'emby',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Emby',
			},
		},
		icon: 'mdi:emby',
	},
	{
		type: 'button',
		name: 'foxsports',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'FOX Sports',
			},
		},
		icon: 'foxsports',
	},
	{
		type: 'button',
		name: 'hulu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Hulu',
			},
		},
		icon: 'mdi:hulu',
	},
	{
		type: 'button',
		name: 'jellyfin',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Jellyfin',
			},
		},
		icon: 'jellyfin',
	},
	{
		type: 'button',
		name: 'max',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Max',
			},
		},
		icon: 'max',
	},
	{
		type: 'button',
		name: 'mlbtv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'MLB',
			},
		},
		icon: 'mlbtv',
	},
	{
		type: 'button',
		name: 'nba',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'NBA',
			},
		},
		icon: 'nba',
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
		name: 'pandora',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Pandora',
			},
		},
		icon: 'mdi:pandora',
	},
	{
		type: 'button',
		name: 'paramount',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Paramount Plus',
			},
		},
		icon: 'paramount',
	},
	{
		type: 'button',
		name: 'plex',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Plex - Free Movies & TV',
			},
		},
		icon: 'mdi:plex',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Prime Video',
			},
		},
		icon: 'primevideo',
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
		name: 'vudu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Fandango at Home',
			},
		},
		icon: 'vudu',
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
		name: 'youtubetv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'YouTube TV',
			},
		},
		icon: 'mdi:youtube-tv',
	},
];
