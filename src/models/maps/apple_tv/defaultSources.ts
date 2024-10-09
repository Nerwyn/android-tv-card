import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/apple_tv/#launching-apps
 */
export const appleTVDefaultSources: IElementConfig[] = [
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
				source: 'DAZN',
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
				source: 'discovery+',
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
				source: 'Disney+',
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
		name: 'f1tv',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'F1 TV',
			},
		},
		icon: 'f1tv',
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
		name: 'npostart',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'NPO',
			},
		},
		icon: 'npo',
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
				source: 'Paramount+',
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
				source: 'Plex',
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
		name: 'pia',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'PIA VPN',
			},
		},
		icon: 'pia',
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
		name: 'steam',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Steam Link',
			},
		},
		icon: 'mdi:steam',
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
		name: 'videoland',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'Videoland',
			},
		},
		icon: 'videoland',
	},
	{
		type: 'button',
		name: 'vlc',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'VLC',
			},
		},
		icon: 'mdi:vlc',
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
