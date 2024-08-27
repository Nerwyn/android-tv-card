import { IElementConfig } from '../../models';

/**
 * https://www.home-assistant.io/integrations/roku/#source-automation
 */
export const rokuDefaultSources: IElementConfig[] = [
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
];
