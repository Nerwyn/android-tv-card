import {
	androidTVDefaultKeys,
	androidTVDefaultSources,
	appleTVDefaultKeys,
	appleTVDefaultSources,
	fireTVDefaultKeys,
	fireTVDefaultSources,
	kodiDefaultKeys,
	kodiDefaultSources,
	rokuDefaultKeys,
	rokuDefaultSources,
	samsungTVDefaultKeys,
	samsungTVDefaultSources,
	webosDefaultKeys,
	webosDefaultSources,
} from '../maps';
import { IElementConfig, Platform } from '../models';

export function getDefaultActions(platform: Platform) {
	let defaultKeys: IElementConfig[];
	let defaultSources: IElementConfig[];
	switch (platform) {
		case 'LG webOS':
			defaultKeys = webosDefaultKeys;
			defaultSources = webosDefaultSources;
			break;
		case 'Samsung TV':
			defaultKeys = samsungTVDefaultKeys;
			defaultSources = samsungTVDefaultSources;
			break;
		case 'Kodi':
			defaultKeys = kodiDefaultKeys;
			defaultSources = kodiDefaultSources;
			break;
		case 'Roku':
			defaultKeys = rokuDefaultKeys;
			defaultSources = rokuDefaultSources;
			break;
		case 'Apple TV':
			defaultKeys = appleTVDefaultKeys;
			defaultSources = appleTVDefaultSources;
			break;
		case 'Fire TV':
			defaultKeys = fireTVDefaultKeys;
			defaultSources = fireTVDefaultSources;
			break;
		case 'Android TV':
		default:
			defaultKeys = androidTVDefaultKeys;
			defaultSources = androidTVDefaultSources;
			break;
	}
	return [structuredClone(defaultKeys), structuredClone(defaultSources)];
}
