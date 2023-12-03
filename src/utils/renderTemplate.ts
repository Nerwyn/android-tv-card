import { HomeAssistant } from 'custom-card-helpers';
import { renderString } from 'nunjucks';

export function renderTemplate(hass: HomeAssistant, str: string): string {
	if (
		typeof str == 'string' &&
		((str.includes('{{') && str.includes('}}')) ||
			(str.includes('{%') && str.includes('%}')))
	) {
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
			iif(
				condition: string,
				if_true: string,
				if_false?: string,
				if_none?: string,
			) {
				return _iif(hass, condition, if_true, if_false, if_none);
			},
		};

		str = renderString(structuredClone(str), context).trim();

		if (str == undefined || str == null) {
			str = '';
		}
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

function _iif(
	hass: HomeAssistant,
	condition: string,
	if_true?: string,
	if_false?: string,
	if_none?: string,
) {
	const template = `
		{% if ${condition} %}
		${if_true ?? true}
		{% else %}
		${if_false ?? false}
		{% endif %}
	`;

	const rendered = renderTemplate(hass, template);
	if (rendered == '' && if_none) {
		return if_none;
	} else {
		return rendered;
	}
}
