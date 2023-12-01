import { HomeAssistant } from 'custom-card-helpers';
import { renderString } from 'nunjucks';

export function renderTemplate(hass: HomeAssistant, str: string): string {
	// Recursion!
	if (typeof str == 'object' && str != null) {
		for (const key in str as Record<string, string>) {
			(str as Record<string, string>)[key] = renderTemplate(
				hass,
				str[key],
			);
		}
		return str;
	}

	if (typeof str != 'string') {
		return str;
	}

	const context = {
		True: true,
		False: false,
		None: null,
		states(entity_id: string) {
			return _states(hass, entity_id);
		},
		is_state(entity_id: string, value: string) {
			return _is_state(hass, entity_id, value);
		},
		state_attr(entity_id: string, attribute: string) {
			return _state_attr(hass, entity_id, attribute);
		},
		is_state_attr(entity_id: string, attribute: string, value: string) {
			return _is_state_attr(hass, entity_id, attribute, value);
		},
		has_value(entity_id: string) {
			return _has_value(hass, entity_id);
		},
	};

	if (str.includes('{{') || str.includes('{%')) {
		str = renderString(str, context).trim();
	}

	if (str == undefined || str == null) {
		str = '';
	}

	return str;
}

function _states(hass: HomeAssistant, entity_id: string) {
	return hass.states[entity_id].state;
}

function _is_state(
	hass: HomeAssistant,
	entity_id: string,
	value: string | string[],
) {
	const state = _states(hass, entity_id);
	if (typeof value == 'string') {
		return state == value;
	}
	return value.includes(state);
}

function _state_attr(
	hass: HomeAssistant,
	entity_id: string,
	attribute: string,
) {
	return hass.states[entity_id].attributes[attribute];
}

function _is_state_attr(
	hass: HomeAssistant,
	entity_id: string,
	attribute: string,
	value: string | string[],
) {
	const stateAttr = _state_attr(hass, entity_id, attribute);
	if (typeof value == 'string') {
		return stateAttr == value;
	}
	return value.includes(stateAttr);
}

function _has_value(hass: HomeAssistant, entity_id: string) {
	try {
		const state = _states(hass, entity_id);
		if ([false, 0, -0, ''].includes(state)) {
			return true;
		} else {
			return Boolean(state);
		}
	} catch {
		return false;
	}
}
