import { renderString } from 'nunjucks';

import { HomeAssistant } from 'custom-card-helpers';

export function renderTemplates(
	str: Record<string, string> | string,
	hass: HomeAssistant,
): Record<string, string> | string {
	// Recursion!
	if (typeof str == 'object' && str != null) {
		for (const key in str) {
			str[key] = renderTemplates(str[key], hass) as string;
		}
		return str;
	}

	// Define Home Assistant templating functions for nunjucks context
	function states(entity_id: string) {
		return hass.states[entity_id].state;
	}

	function is_state(entity_id: string, value: string | string[]) {
		const state = states(entity_id);
		if (typeof value == 'string') {
			return state == value;
		}
		return value.includes(state);
	}

	function state_attr(entity_id: string, attribute: string) {
		return hass.states[entity_id].attributes[attribute];
	}

	function is_state_attr(
		entity_id: string,
		attribute: string,
		value: string | string[],
	) {
		const stateAttr = state_attr(entity_id, attribute);
		if (typeof value == 'string') {
			return stateAttr == value;
		}
		return value.includes(stateAttr);
	}

	function has_value(entity_id: string) {
		try {
			const state = states(entity_id);
			if ([false, 0, -0, ''].includes(state)) {
				return true;
			} else {
				return Boolean(state);
			}
		} catch {
			return false;
		}
	}

	const context = {
		True: true,
		False: false,
		None: null,
		states,
		is_state,
		state_attr,
		is_state_attr,
		has_value,
	};

	if (typeof str == 'string' && (str.includes('{{') || str.includes('{%'))) {
		str = renderString(str, context).trim();
	}

	if (str == undefined || str == null) {
		str = '';
	}

	return str;
}
