import { IElementConfig } from '../../interfaces';

/**
 * https://www.home-assistant.io/integrations/webostv/#action-webostvbutton
 */
export const webosDefaultSources: IElementConfig[] = [
	{
		type: 'button',
		name: 'netflix',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'NETFLIX',
			},
		},
		icon: 'mdi:netflix',
	},
	{
		type: 'button',
		name: 'primevideo',
		tap_action: {
			action: 'perform-action',
			perform_action: 'webostv.button',
			data: {
				button: 'AMAZON',
			},
		},
		icon: 'primevideo',
	},
];
