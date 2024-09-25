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
	},
	
];
