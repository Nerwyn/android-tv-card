import { load } from 'js-yaml';

import { HomeAssistant, IElementConfig } from '../models/interfaces';

export function fetchCustomActionsFromFile(
	hass: HomeAssistant,
	filename: string | undefined = undefined,
	output: IElementConfig[] | undefined = undefined,
) {
	if (!output && filename) {
		filename = `${filename.startsWith('/') ? '' : '/'}${filename}`;
		try {
			const extension = filename.split('.').pop()?.toLowerCase();
			switch (extension) {
				case 'json':
					hass.fetchWithAuth(filename)
						.then((r) => r.json())
						.then((json) => {
							output = json;
						});
					break;
				case 'yaml':
				case 'yml':
				default:
					hass.fetchWithAuth(filename)
						.then((r) => r.text())
						.then((text) => {
							output = load(text) as IElementConfig[];
						});
					break;
			}
		} catch (e) {
			console.error(`File ${filename} is not a valid JSON or YAML\n${e}`);
		}
	}
}
