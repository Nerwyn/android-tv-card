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
		case 'WEBOS':
			defaultKeys = webosDefaultKeys;
			defaultSources = webosDefaultSources;
			break;
		case 'SAMSUNG TV':
			defaultKeys = samsungTVDefaultKeys;
			defaultSources = samsungTVDefaultSources;
			break;
		case 'KODI':
			defaultKeys = kodiDefaultKeys;
			defaultSources = kodiDefaultSources;
			break;
		case 'ROKU':
			defaultKeys = rokuDefaultKeys;
			defaultSources = rokuDefaultSources;
			break;
		case 'APPLE TV':
			defaultKeys = appleTVDefaultKeys;
			defaultSources = appleTVDefaultSources;
			break;
		case 'FIRE TV':
			defaultKeys = fireTVDefaultKeys;
			defaultSources = fireTVDefaultSources;
			break;
		case 'ANDROID TV':
		default:
			defaultKeys = androidTVDefaultKeys;
			defaultSources = androidTVDefaultSources;
			break;
	}
	return [structuredClone(defaultKeys), structuredClone(defaultSources)];
}
