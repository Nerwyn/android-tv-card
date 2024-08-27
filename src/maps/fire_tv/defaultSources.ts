import { IElementConfig } from '../../models';

/**
 * https://www.home-assistant.io/integrations/androidtv#media_playerselect_source
 */
export const fireTVDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'hulu',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.hulu.plus',
			},
		},
		icon: 'mdi:hulu',
	},
	{
		type: 'button',
		name: 'netflix',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.netflix.ninja',
			},
		},
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.amazon.firebat/.deeplink.DeepLinkRoutingActivity',
			},
		},
		icon: 'primevideo',
	},
	{
		type: 'button',
		name: 'youtube',
		tap_action: {
			action: 'perform-action',
			perform_action: 'media_player.select_source',
			data: {
				source: 'com.amazon.firetv.youtube',
			},
		},
		icon: 'mdi:youtube',
	},
];
