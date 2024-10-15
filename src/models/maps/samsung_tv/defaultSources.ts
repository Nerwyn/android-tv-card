import { IElementConfig } from '../../interfaces';

/**
 * https://github.com/ollo69/ha-samsungtv-smart
 */
export const samsungTVDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'dazn',
		tap_action: {
			action: 'source',
			source: 'DAZN',
		},
		icon: 'dazn',
	},
	{
		type: 'button',
		name: 'netflix',
		tap_action: {
			action: 'source',
			source: 'Netflix',
		},
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'source',
			source: 'Prime Video',
		},
		icon: 'primevideo',
	},
	{
		type: 'button',
		name: 'youtube',
		tap_action: {
			action: 'source',
			source: 'YouTube',
		},
		icon: 'mdi:youtube',
	},
];
