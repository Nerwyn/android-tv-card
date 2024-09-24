import { IElementConfig } from '../../interfaces';

/**
 * This is a list of common streaming apps, their icons, and the deep links to open them in Android TV, mostly collected from the following Home Assistant Community Forum guide.
 * Not all have been tested, if any do not work please let me know!
 * https://community.home-assistant.io/t/android-tv-remote-app-links-deep-linking-guide/567921
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
