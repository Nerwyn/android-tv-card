import { IElementConfig } from '../../interfaces';

/**
 * This list contains a subset of supported sources.
 * Supported sources can be added by their explicit App Name
 * 
 * https://www.home-assistant.io/integrations/braviatv/#play-media-action
 */
export const braviaTVDefaultSources: IElementConfig[] = [
	{
		type: 'button',
	 	name: 'appletv',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Apple TV',
				media_content_type: 'app'
			},
		},
		icon: 'appletv',
	},
	{
		type: 'button',
		name: 'jellyfin',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Jellyfin',
				media_content_type: 'app'
			},
		},
		icon: 'jellyfin',
	},
	{
		type: 'button',
		name: 'plex',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Plex',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:plex',
	},
	{
		type: 'button',
		name: 'spotify',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Spotify',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:spotify',
	},
	{
		type: 'button',
		name: 'youtube',	
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'YouTube',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:youtube',
	}, // Past this object is untested sources.
	{ 
		type: 'button',
		name: 'crunchyroll',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Crunchyroll',
				media_content_type: 'app'
			},
		},
		icon: 'crunchyroll',
	},
	{
		type: 'button',
		name: 'dazn',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'DAZN',
				media_content_type: 'app'
			},
		},
		icon: 'dazn',
	},
	{
		type: 'button',
		name: 'discoveryplus',	
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'discovery+',
				media_content_type: 'app'
			},
		},
		icon: 'discovery',
	},	
	{
		type: 'button',
		name: 'disney',
		
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Disney+',
				media_content_type: 'app'
			},
		},
		icon: 'disney',
	},
	{
		type: 'button',
		name: 'emby',
		
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Emby',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:emby',
	},
	{
		type: 'button',
		name: 'filmplus',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Filmplus',
				media_content_type: 'app'
			},
		},
		icon: 'filmplus',
	},
	{
		type: 'button',
		name: 'foxsports',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'FOX Sports',
				media_content_type: 'app'
			},
		},
		icon: 'foxsports',
	},
	{
		type: 'button',
		name: 'hulu',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Hulu',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:hulu',
	},
	{
		type: 'button',
		name: 'kijk',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'KIJK',
				media_content_type: 'app'
			},
		},
		icon: 'kijk',
	},
	{
		type: 'button',
		name: 'max',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Max', // Substring matching might fail us here...
				media_content_type: 'app'
			},
		},
		icon: 'max',
	},
	{
		type: 'button',
		name: 'mlbtv',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'MLB',
				media_content_type: 'app'
			},
		},
		icon: 'mlbtv',
	},
	{
		type: 'button',
		name: 'nba',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'NBA',
				media_content_type: 'app'
			},
		},
		icon: 'nba',
	},
	{
		type: 'button',
		name: 'npo_start',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'NPO Start',
				media_content_type: 'app'
			},
		},
		icon: 'npo',
	},
	{
		type: 'button',
		name: 'nrktv',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'NRK TV',
				media_content_type: 'app'
			},
		},
		icon: 'nrktv',
	},
	{
		type: 'button',
		name: 'paramount',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Paramount+',
				media_content_type: 'app'
			},
		},
		icon: 'paramount',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Amazon Prime Video',
				media_content_type: 'app'
			},
		},
		icon: 'primevideo',
	},
	{
		type: 'button',
		name: 'pia',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Private Internet Access VPN',
				media_content_type: 'app'
			},
		},
		icon: 'pia',
	},
	{
		type: 'button',
		name: 'rakutentv',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Rakuten',
				media_content_type: 'app'
			},
		},
		icon: 'rakutentv',
	},
	{
		type: 'button',
		name: 'rakutenviki',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Viki',
				media_content_type: 'app'
			},
		},
		icon: 'rakutenviki',
	},
	{
		type: 'button',
		name: 'skyshowtime',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'SkyShowtime',
				media_content_type: 'app'
			},
		},
		icon: 'showtime',
	},
	{
		type: 'button',
		name: 'starplus',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Star+',
				media_content_type: 'app'
			},
		},
		icon: 'starplus',
	},
	{
		type: 'button',
		name: 'stremio',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Stremio',
				media_content_type: 'app'
			},
		},
		icon: 'stremio',
	},
	{
		type: 'button',
		name: 'surfshark',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Surfshark',
				media_content_type: 'app'
			},
		},
		icon: 'surfshark',
	},
	{
		type: 'button',
		name: 'tv2play',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'TV2 Play', // or "TV 2 Play" ?
				media_content_type: 'app'
			},
		},
		icon: 'tv2play',
	},
	{
		type: 'button',
		name: 'viaplay',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Viaplay',
				media_content_type: 'app'
			},
		},
		icon: 'viaplay',
	},
	{
		type: 'button',
		name: 'videoland',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Videoplay',
				media_content_type: 'app'
			},
		},
		icon: 'videoland',
	},
	{
		type: 'button',
		name: 'vudu',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'Vudu',
				media_content_type: 'app'
			},
		},
		icon: 'vudu',
	},
	{
		type: 'button',
		name: 'youtubetv',
		tap_action: { 
			action: 'perform-action',
			perform_action: 'media_player.play_media',
			data: {
				media_content_id: 'YouTube TV',
				media_content_type: 'app'
			},
		},
		icon: 'mdi:youtube-tv',
	},
];

