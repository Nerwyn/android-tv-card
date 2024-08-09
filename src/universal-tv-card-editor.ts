import { renderTemplate } from 'ha-nunjucks';
import { LitElement, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { HomeAssistant } from 'custom-card-helpers';
import { dump, load } from 'js-yaml';

import {
	ActionType,
	ActionTypes,
	DirectionAction,
	DirectionActions,
	IAction,
	IConfig,
	IData,
	IElementConfig,
	ITarget,
	Platform,
	RemoteElementType,
	defaultKeys,
} from './models';
import { mergeDeep } from './utils';

export class UniversalTVCardEditor extends LitElement {
	@property() hass!: HomeAssistant;
	@property() config!: IConfig;

	@state() guiMode: boolean = true;
	@state() errors?: string[];

	yamlString?: string;
	autofillCooldown = false;
	codeEditorDelay?: ReturnType<typeof setTimeout>;
	people: Record<string, string>[] = [];

	static get properties() {
		return { hass: {}, config: {} };
	}

	setConfig(config: IConfig) {
		this.config = config;
	}

	configChanged(config: IConfig) {
		const event = new Event('config-changed', {
			bubbles: true,
			composed: true,
		});
		event.detail = {
			config: config,
		};
		this.dispatchEvent(event);
		this.requestUpdate();
	}

	toggleGuiMode(_e: CustomEvent) {
		this.yamlString = undefined;
		this.autofillCooldown = false;
		this.guiMode = !this.guiMode;
	}

	get yaml(): string {
		if (this.yamlString == undefined) {
			const yaml = dump(this.config);
			this.yamlString = yaml.trim() == '{}' ? '' : yaml;
		}
		return this.yamlString || '';
	}

	set yaml(yaml: string | undefined) {
		this.yamlString = yaml;
		try {
			this.configChanged(load(this.yaml) as IConfig);
			this.errors = undefined;
		} catch (e) {
			this.errors = [(e as Error).message];
		}
	}

	handleYamlCodeChanged(e: CustomEvent) {
		e.stopPropagation();
		clearTimeout(this.codeEditorDelay);
		this.codeEditorDelay = undefined;
		this.codeEditorDelay = setTimeout(() => {
			const yaml = e.detail.value;
			if (yaml != this.yaml) {
				this.yaml = yaml;
			}
		}, 1000);
	}

	handleStyleCodeChanged(e: CustomEvent) {
		e.stopPropagation();
		const css = e.detail.value;
		if (css != this.config.styles) {
			this.configChanged({
				...this.config,
				styles: css,
			});
		}
	}

	buildCodeEditor(mode: string, id?: string) {
		let title: string | undefined;
		let value: string;
		let handler: (e: CustomEvent) => void;
		switch (mode) {
			// case 'jinja2':
			// 	value =
			// 		(this.entryIndex > -1
			// 			? this.activeEntry?.styles
			// 			: this.config.styles) ?? '';
			// 	handler = this.handleStyleCodeChanged;
			// 	title = 'CSS Styles';
			// 	break;
			// case 'action':
			// 	mode = 'yaml';
			// 	handler = this.handleActionCodeChanged;
			// 	value = dump(
			// 		(this.activeEntry?.[
			// 			(id ?? 'tap_action') as ActionType
			// 		] as IAction) ?? {},
			// 	);
			// 	value = value.trim() == '{}' ? '' : value;
			// 	break;
			case 'yaml':
			default:
				value = this.yaml;
				handler = this.handleYamlCodeChanged;
				break;
		}
		return html`
			<div class="yaml-editor">
				${title ? html`<div class="style-header">${title}</div>` : ''}
				<ha-code-editor
					mode="${mode}"
					id="${id}"
					autofocus
					autocomplete-entities
					autocomplete-icons
					.hass=${this.hass}
					.value=${value}
					.error=${Boolean(this.errors)}
					@value-changed=${handler}
					@keydown=${(e: CustomEvent) => e.stopPropagation()}
					dir="ltr"
				></ha-code-editor>
			</div>
		`;
	}

	buildRemoteEditor() {
		let editor: TemplateResult<1>;
		if (this.guiMode) {
			editor = html``;
		} else {
			editor = this.buildCodeEditor('yaml');
		}
		const tempToggle = html`<button @click=${this.toggleGuiMode}>
			Temporary Toggle!
		</button>`;

		return html`<div class="wrapper">${tempToggle}${editor}</div> `;
	}

	buildErrorPanel() {
		return html`
			${this.errors && this.errors.length > 0
				? html`<div class="error">
						${this.hass.localize(
							'ui.errors.config.error_detected',
						)}:
						<br />
						<ul>
							${this.errors!.map(
								(error) => html`<li>${error}</li>`,
							)}
						</ul>
				  </div>`
				: ''}
		`;
	}

	buildAlertBox(
		title = "Set the action below, and then use the code editor to set a data field to the feature's new value using a template like '{{ value | float }}'.",
		type: 'info' | 'warning' | 'error' | 'success' = 'info',
	) {
		return html`<ha-alert
			.title="${title}"
			.alertType="${type}"
		></ha-alert>`;
	}

	buildPeopleList() {
		this.people = [];
		const peopleEntities = Object.keys(this.hass.states).filter((entity) =>
			entity.startsWith('person.'),
		);
		for (const person of peopleEntities) {
			this.people.push({
				value: this.hass.states[person].attributes.user_id,
				label:
					this.hass.states[person].attributes.friendly_name ??
					this.hass.states[person].attributes.id ??
					person,
			});
		}
	}

	render() {
		if (!this.hass) {
			return html``;
		}

		if (!this.autofillCooldown) {
			this.autofillCooldown = true;
			let config = this.updateDeprecatedFields(this.config);
			config = this.autofillDefaultFields(config);
			this.configChanged(config);
			setTimeout(() => (this.autofillCooldown = false), 1000);
		}

		this.buildPeopleList();

		const editor = html`${this.buildRemoteEditor()}${this.buildErrorPanel()}`;
		return editor;
	}

	renderTemplate(str: string | number | boolean, context: object) {
		context = {
			render: (str2: string) => this.renderTemplate(str2, context),
			...context,
		};

		const res = renderTemplate(this.hass, str as string, context);
		if (res != str) {
			return res;
		}

		// Legacy string interpolation
		if (typeof str == 'string') {
			for (const key of ['VALUE', 'HOLD_SECS', 'UNIT']) {
				if (str == key) {
					return context[key as keyof object] as string;
				} else if (str.includes(key)) {
					str = str.replace(
						new RegExp(key, 'g'),
						(context[key as keyof object] ?? '') as string,
					);
				}
			}
		}

		return str;
	}

	getElementContext(element: IElementConfig) {
		const context = {
			VALUE: 0,
			HOLD_SECS: 0,
			UNIT: '',
			value: 0,
			hold_secs: 0,
			unit: '',
			config: {
				...element,
				entity: '',
				attribute: '',
			},
		};
		context.config.attribute = this.renderTemplate(
			element.value_attribute ?? '',
			context,
		) as string;
		context.config.entity = this.renderTemplate(
			element.entity_id ?? '',
			context,
		) as string;
		const unit = this.renderTemplate(
			element.unit_of_measurement as string,
			context,
		) as string;
		(context.UNIT = unit), (context.unit = unit);
		const value = this.getFeatureValue(
			context.config.entity,
			context.config.attribute,
		);
		context.VALUE = value;
		context.value = value;
		return context;
	}

	getFeatureValue(entityId: string, valueAttribute: string) {
		if (!this.hass.states[entityId]) {
			return '';
		} else if (valueAttribute == 'state' || !valueAttribute) {
			return this.hass.states[entityId].state;
		} else {
			let value;
			const indexMatch = valueAttribute.match(/\[\d+\]$/);
			if (indexMatch) {
				const index = parseInt(indexMatch[0].replace(/\[|\]/g, ''));
				valueAttribute = valueAttribute.replace(indexMatch[0], '');
				value = this.hass.states[entityId].attributes[valueAttribute];
				if (value && Array.isArray(value) && value.length) {
					return value[index];
				} else {
					return undefined;
				}
			} else {
				value = this.hass.states[entityId].attributes[valueAttribute];
			}
			if (value != undefined || valueAttribute == 'elapsed') {
				switch (valueAttribute) {
					case 'brightness':
						return Math.round(
							(100 * parseInt((value as string) ?? 0)) / 255,
						);
					case 'elapsed':
						if (entityId.startsWith('timer.')) {
							const durationHMS =
								this.hass.states[
									entityId
								].attributes.duration.split(':');
							const durationSeconds =
								parseInt(durationHMS[0]) * 3600 +
								parseInt(durationHMS[1]) * 60 +
								parseInt(durationHMS[2]);
							if (this.hass.states[entityId].state == 'idle') {
								return 0;
							} else if (
								this.hass.states[entityId].state == 'active'
							) {
								const endSeconds = Date.parse(
									this.hass.states[entityId].attributes
										.finishes_at,
								);
								const remainingSeconds =
									(endSeconds - Date.now()) / 1000;
								const value = Math.floor(
									durationSeconds - remainingSeconds,
								);
								return Math.min(value, durationSeconds);
							} else {
								const remainingHMS =
									this.hass.states[
										entityId
									].attributes.remaining.split(':');
								const remainingSeconds =
									parseInt(remainingHMS[0]) * 3600 +
									parseInt(remainingHMS[1]) * 60 +
									parseInt(remainingHMS[2]);
								return Math.floor(
									durationSeconds - remainingSeconds,
								);
							}
						}
					// falls through
					default:
						return value;
				}
			}
			return value;
		}
	}

	populateMissingEntityId(element: IElementConfig, parentEntityId: string) {
		for (const actionType of ActionTypes) {
			if (actionType in element) {
				const action =
					element[actionType as ActionType] ?? ({} as IAction);
				if (['perform-action', 'more-info'].includes(action.action)) {
					const data = action.data ?? ({} as IData);
					const target = action.target ?? ({} as ITarget);
					for (const targetId of [
						'entity_id',
						'device_id',
						'area_id',
						'label_id',
					]) {
						if (data[targetId]) {
							target[targetId as keyof ITarget] = data[
								targetId
							] as string | string[];
							delete data[targetId];
						}
					}
					if (
						!target.entity_id &&
						!target.device_id &&
						!target.area_id &&
						!target.label_id
					) {
						target.entity_id = element.entity_id ?? parentEntityId;
						action.target = target;
						element[actionType as ActionType] = action;
					}
				}
			}
		}

		if (!('entity_id' in element)) {
			let entity_id =
				element.tap_action?.target?.entity_id ??
				element.tap_action?.data?.entity_id ??
				parentEntityId;
			if (Array.isArray(entity_id)) {
				entity_id = entity_id[0];
			}
			element.entity_id = entity_id as string;
		}

		return element;
	}

	autofillDefaultFields(config: IConfig) {
		const updatedConfig = structuredClone(config);
		const updatedElements: Record<string, IElementConfig> =
			updatedConfig.custom_actions ?? {};
		for (const elementName in updatedElements) {
			let element = updatedElements[elementName];
			if (!('autofill_entity_id' in element)) {
				element.autofill_entity_id =
					updatedConfig.autofill_entity_id ?? true;
			}
			if (
				this.renderTemplate(
					(element.autofill_entity_id ?? true) as unknown as string,
					this.getElementContext(element),
				)
			) {
				// Feature entity ID
				element = this.populateMissingEntityId(
					element,
					updatedConfig.remote_id ??
						updatedConfig.media_player_id ??
						'',
				);
				const entryEntityId = this.renderTemplate(
					element.entity_id as string,
					this.getElementContext(element),
				) as string;

				switch (
					this.renderTemplate(
						element.type as string,
						this.getElementContext(element),
					)
				) {
					case 'slider': {
						const [domain, _service] = (entryEntityId ?? '').split(
							'.',
						);

						let rangeMin = element.range?.[0];
						let rangeMax = element.range?.[1];
						if (rangeMin == undefined) {
							rangeMin =
								this.hass.states[entryEntityId]?.attributes
									?.min ?? 0;
						}
						if (rangeMax == undefined) {
							rangeMax =
								this.hass.states[entryEntityId]?.attributes
									?.max ?? 100;
						}
						element.range = [
							rangeMin as number,
							rangeMax as number,
						];

						if (!element.tap_action) {
							const tap_action = {} as IAction;
							const data = tap_action.data ?? {};
							tap_action.action = 'perform-action';
							switch (domain) {
								case 'number':
									tap_action.perform_action =
										'number.set_value';
									if (!data.value) {
										data.value = '{{ value | float }}';
										tap_action.data = data;
									}
									break;
								case 'input_number':
									tap_action.perform_action =
										'input_number.set_value';
									if (!data.value) {
										data.value = '{{ value | float }}';
										tap_action.data = data;
									}
									break;
								default:
									break;
							}

							const target = tap_action.target ?? {};
							if (!target.entity_id) {
								target.entity_id = entryEntityId as string;
								tap_action.target = target;
							}
							element.tap_action = tap_action;
						}

						if (!element.step) {
							const defaultStep =
								this.hass.states[entryEntityId as string]
									?.attributes?.step;
							if (defaultStep) {
								element.step = defaultStep;
							} else {
								const entryContext =
									this.getElementContext(element);
								element.step =
									((this.renderTemplate(
										element.range[1],
										entryContext,
									) as unknown as number) -
										(this.renderTemplate(
											element.range[0],
											entryContext,
										) as unknown as number)) /
									100;
							}
						}
						break;
					}
					case 'touchpad':
					case 'button':
					case 'default':
						break;
				}
			}
			updatedElements[elementName] = element;
		}
		updatedConfig.custom_actions = updatedElements;
		return updatedConfig;
	}

	updateDeprecatedFields(config: IConfig = this.config): IConfig {
		const updatedConfig = structuredClone(config);

		// Convert old root level key names to new
		if ('adb_id' in updatedConfig) {
			updatedConfig.keyboard_id = (
				updatedConfig as Record<string, string>
			).adb_id;
			delete (updatedConfig as Record<string, string>).adb_id;
		}
		if ('keyboard_mode' in updatedConfig) {
			updatedConfig.platform = (updatedConfig as Record<string, string>)
				.keyboard_mode as Platform;
			delete (updatedConfig as Record<string, string>).keyboard_mode;
		}

		// Old haptic feedback toggle names
		if ('enable_button_feedback' in updatedConfig) {
			updatedConfig.haptics = (
				updatedConfig as Record<string, boolean>
			).enable_button_feedback;
		}
		if ('button_haptics' in updatedConfig) {
			updatedConfig.haptics = (
				updatedConfig as Record<string, boolean>
			).button_haptics;
		}

		// Convert old _row keys into rows array
		if (!updatedConfig.rows) {
			const rows: string[][] = [];
			const rowNames = Object.keys(updatedConfig).filter((row) =>
				row.includes('_row'),
			);
			for (const name of rowNames) {
				let row = (config as Record<string, string[]>)[name];
				if (typeof row == 'string') {
					row = [row];
				}
				if (name == 'volume_row') {
					row = ['volume_' + row[0]];
				} else if (name == 'navigation_row') {
					row = ['navigation_' + row[0]];
				}
				rows.push(row);
				delete (config as Record<string, string[]>)[name];
			}
			updatedConfig.rows = rows;
		}

		// Combine custom actions, custom keys, and custom sources fields
		const customActions = {
			...updatedConfig.custom_actions,
			...updatedConfig['custom_keys' as 'custom_actions'],
			...updatedConfig['custom_sources' as 'custom_actions'],
		} as Record<string, IElementConfig>;
		delete updatedConfig['custom_keys' as 'custom_actions'];
		delete updatedConfig['custom_sources' as 'custom_actions'];

		// Copy slider fields
		const slider = customActions.slider ?? {
			type: 'slider',
		};
		if ('slider_style' in config) {
			let styles = slider.styles ?? '';
			styles += '\n:host {';
			const style = updatedConfig[
				'slider_style' as keyof IConfig
			] as unknown as Record<string, string>;
			for (const field in style) {
				styles += `\n  ${field}: ${style[field]};`;
			}
			styles += `\n}`;
			slider.styles = styles + (slider.styles ?? '');
			delete updatedConfig['slider_style' as keyof IConfig];
		}
		if ('tooltip' in slider) {
			let styles = slider.styles ?? '';
			styles += `\n.tooltip {\n  display: {{ "initial" if render(${slider.tooltip}) else "none" }};\n}`;
			slider.styles = styles;
		}
		if ('slider_range' in config) {
			slider.range = config.slider_range as [number, number];
			delete updatedConfig['slider_range' as keyof IConfig];
		}
		if ('slider_step' in config) {
			slider.step = config.slider_step as number;
			delete updatedConfig['slider_step' as keyof IConfig];
		}
		if ('slider_attribute' in config) {
			slider.value_attribute = config.slider_attribute as string;
			delete updatedConfig['slider_attribute' as keyof IConfig];
		}
		if ('enable_slider_feedback' in config) {
			slider.haptics = config.enable_slider_feedback as boolean;
			delete updatedConfig['enable_slider_feedback' as keyof IConfig];
		}
		if ('slider_haptics' in config) {
			slider.haptics = config.slider_haptics as boolean;
			delete updatedConfig['slider_haptics' as keyof IConfig];
		}
		if ('slider_id' in config) {
			slider.entity_id =
				slider.entity_id ??
				(config.slider_id as string) ??
				config.media_player_id ??
				'';
			let tapAction = slider.tap_action;
			if (tapAction) {
				const data = tapAction.data ?? {};
				const target = tapAction.target ?? {};
				if (!('entity_id' in data) && !('entity_id' in target)) {
					target.entity_id = config.slider_id as string;
				}
			} else {
				tapAction = {
					target: {
						entity_id: config.slider_id as string,
					},
				} as IAction;
			}
			slider.tap_action = tapAction;
		}
		if (Object.keys(slider).length > 1) {
			customActions.slider = mergeDeep(
				structuredClone(defaultKeys.slider),
				slider,
			) as IElementConfig;
		}

		// Copy touchpad fields
		const touchpad = customActions.touchpad ?? {
			type: 'touchpad',
		};
		if ('touchpad_style' in updatedConfig) {
			let styles = touchpad.styles ?? '';
			styles += '\n:host {';
			const style = updatedConfig[
				'touchpad_style' as keyof IConfig
			] as unknown as Record<string, string>;
			for (const field in style) {
				styles += `\n  ${field}: ${style[field]};`;
			}
			styles += `\n}`;
			touchpad.styles = styles + (touchpad.styles ?? '');
			delete updatedConfig['touchpad_style' as keyof IConfig];
		}
		if ('touchpad_height' in updatedConfig) {
			let styles = touchpad.styles ?? '';
			styles += `\n:host {\n  height: ${
				(updatedConfig as Record<string, string>)['touchpad_height']
			};\n}`;
			touchpad.styles = styles += touchpad.styles ?? '';
			delete (updatedConfig as Record<string, string>)['touchpad_height'];
		}
		if ('enable_touchpad_feedback' in updatedConfig) {
			touchpad.haptics = (
				updatedConfig as Record<string, boolean>
			).enable_touchpad_feedback;
			delete (updatedConfig as Record<string, boolean>)
				.enable_touchpad_feedback;
		}
		if ('touchpad_haptics' in updatedConfig) {
			touchpad.haptics = (
				updatedConfig as Record<string, boolean>
			).touchpad_haptics;
			delete (updatedConfig as Record<string, boolean>).touchpad_haptics;
		}
		if ('enable_double_click' in updatedConfig) {
			touchpad.double_tap_action = {
				action: 'key',
				key: (updatedConfig['double_click_keycode' as keyof IConfig] ??
					'BACK') as string,
			};
			delete updatedConfig.enable_double_click;
			delete updatedConfig['double_click_keycode' as keyof IConfig];
		}
		if ('long_click_keycode' in updatedConfig) {
			touchpad.hold_action = {
				action: 'key',
				key: (updatedConfig.long_click_keycode ??
					'DPAD_CENTER') as string,
			};
		}
		if (!touchpad.tap_action && customActions.center?.tap_action) {
			touchpad.tap_action = customActions.center.tap_action;
		}
		for (const direction of DirectionActions) {
			if (!touchpad[direction] && customActions[direction]) {
				touchpad[direction] = customActions[direction];
			}
		}
		if (Object.keys(touchpad).length > 1) {
			customActions.touchpad = touchpad;
		}

		for (const elementName in customActions) {
			let element = customActions[elementName];
			element = this.updatedDeprecatedActionFields(element);
			const directions: DirectionAction[] = [
				'up',
				'down',
				'left',
				'right',
			];
			for (const direction of directions) {
				if (element[direction]) {
					element[direction] = this.updatedDeprecatedActionFields(
						element[direction] as IElementConfig,
					);
				}
			}
			customActions[elementName] = element;
		}

		if (updatedConfig['style' as keyof IConfig]) {
			let styles = updatedConfig.styles ?? '';
			styles += '\n:host {';
			const style = updatedConfig[
				'style' as keyof IConfig
			] as unknown as Record<string, string>;
			for (const field in style) {
				styles += `\n  ${field}: ${style[field]};`;
			}
			styles += `\n}`;
			updatedConfig.styles = styles + (updatedConfig.styles ?? '');
			delete updatedConfig['style' as keyof IConfig];
		}
		if (updatedConfig['row_styles' as keyof IConfig]) {
			let styles = updatedConfig.styles ?? '';
			const rowStyles = updatedConfig[
				'row_styles' as keyof IConfig
			] as unknown as Record<string, Record<string, string>>;
			for (const style in rowStyles) {
				styles += `\n#${style}: {`;
				for (const field in rowStyles[style]) {
					styles += `\n  ${field}: ${rowStyles[style][field]};`;
				}
				styles += '\n}';
			}
			updatedConfig.styles = styles;
			delete updatedConfig['row_styles' as keyof IConfig];
		}

		updatedConfig.custom_actions = customActions;
		return updatedConfig;
	}

	updatedDeprecatedActionFields(element: IElementConfig) {
		const customAction = structuredClone(element);

		// Copy svg_path to icon
		if ('svg_path' in customAction) {
			customAction.icon = customAction.svg_path as string;
		}

		// Copy action fields to tap_action
		const actionKeys = [
			'key',
			'source',
			'service',
			'service_data',
			'data',
			'target',
			'navigation_path',
			'navigation_replace',
			'url_path',
			'confirmation',
			'pipeline_id',
			'start_listening',
		];
		const tapAction = customAction.tap_action ?? ({} as IAction);
		let updateTapAction = false;
		for (const actionKey of actionKeys) {
			if (actionKey in customAction) {
				updateTapAction = true;
				(tapAction as unknown as Record<string, string>)[actionKey] =
					customAction[actionKey as keyof IElementConfig] as string;
				delete (customAction as unknown as Record<string, string>)[
					actionKey
				];
			}
		}
		if (updateTapAction) {
			customAction.tap_action = tapAction as IAction;
		}

		// For each type of action
		for (const actionType of ActionTypes) {
			if (actionType in customAction) {
				const action = customAction[
					actionType as ActionType
				] as IAction;
				if (action) {
					// Populate action field
					if (!action.action) {
						if (action.perform_action) {
							action.action = 'perform-action';
						} else if (action['service' as 'perform_action']) {
							// Deprecated in 2024.8
							action.action = 'perform-action';
							action.perform_action =
								action['service' as 'perform_action'];
							delete action['service' as 'perform_action'];
						} else if (action.navigation_path) {
							action.action = 'navigate';
						} else if (action.url_path) {
							action.action = 'url';
						} else if (action.browser_mod) {
							action.action = 'fire-dom-event';
						} else if (
							action.pipeline_id ||
							action.start_listening
						) {
							action.action = 'assist';
						} else {
							action.action = 'none';
						}
					} else if (
						action.action == ('call-service' as 'perform-action')
					) {
						action.action = 'perform-action';
						action.perform_action =
							action['service' as 'perform_action'] ?? '';
						delete action['service' as 'perform_action'];
					}

					if (action['service_data' as 'data']) {
						action.data = {
							...action['service_data' as 'data'],
							...action.data,
						};
						delete action['service_data' as 'data'];
					}
				}
			}
		}

		// Set entry type to button if not present
		customAction.type = (
			customAction.type ?? 'button'
		).toLowerCase() as RemoteElementType;

		// Move style keys to style object
		let deprecatedStyleKeyPresent = false;
		const deprecatedStyleKeys: Record<string, string> = {
			color: '--color',
			opacity: '--opacity',
			icon_color: '--icon-color',
			label_color: '--label-color',
			background_color: '--background',
			background_opacity: '--background-opacity',
			flex_basis: 'flex-basis',
		};
		let styles = ':host {';
		for (const field in deprecatedStyleKeys) {
			if (customAction[field as keyof IElementConfig]) {
				deprecatedStyleKeyPresent = true;
				styles += `\n${deprecatedStyleKeys[field]}: ${
					customAction[field as keyof IElementConfig]
				};`;
				delete customAction[field as keyof IElementConfig];
			}
		}
		styles += '\n';
		if (deprecatedStyleKeyPresent) {
			customAction.styles = styles + (customAction.styles ?? '');
		}

		if (customAction['style' as keyof IElementConfig]) {
			let styles = ':host {';
			const style = customAction[
				'style' as keyof IElementConfig
			] as Record<string, string>;
			for (const field in style) {
				styles += `\n  ${field}: ${style[field]};`;
			}
			styles += '\n}';
			customAction.styles = styles + (customAction.styles ?? '');
			delete customAction['style' as keyof IElementConfig];
		}

		const deprecatedStyles: Record<string, string> = {
			background_style: '.background',
			icon_style: '.icon',
			label_style: '.label',
			slider_style: '.slider',
			tooltip_style: '.tooltip',
		};
		for (const field in deprecatedStyles) {
			if (customAction[field as keyof IElementConfig]) {
				const style = customAction[
					field as keyof IElementConfig
				] as Record<string, string>;
				let styles = `\n${deprecatedStyles[field]} {`;
				for (const key in style) {
					styles += `\n  ${key}: ${style[key]};`;
				}
				if (
					field == 'tooltip_style' &&
					customAction['tooltip' as keyof IElementConfig]
				) {
					styles += `  display: ${
						customAction['tooltip' as keyof IElementConfig]
							? 'initial'
							: 'none'
					};`;
					delete customAction['tooltip' as keyof IElementConfig];
				}
				styles += '\n}';
				customAction.styles = (customAction.styles ?? '') + styles;
				delete customAction[field as keyof IElementConfig];
			}
		}
		return customAction;
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				flex-direction: column;
				-webkit-tap-highlight-color: transparent;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			}
			.content {
				padding: 12px;
				display: inline-flex;
				flex-direction: column;
				gap: 24px;
				box-sizing: border-box;
				width: 100%;
			}
			.action-options {
				display: inline-flex;
				flex-direction: column;
				gap: 8px;
				box-sizing: border-box;
				width: 100%;
			}

			ha-expansion-panel {
				display: block;
				border-radius: 6px;
				border: solid 1px var(--outline-color);
				--ha-card-border-radius: 6px;
				--expansion-panel-content-padding: 0;
			}
			ha-icon {
				display: flex;
				color: var(--secondary-text-color);
			}
			ha-button-menu {
				margin: 0 18px 12px;
			}
			ha-button {
				width: fit-content;
				--mdc-icon-size: 100%;
			}
			ha-list-item {
				text-transform: capitalize;
			}

			.feature-list-item {
				display: flex;
				align-items: center;
				pointer-events: none;
			}

			.handle {
				display: flex;
				align-items: center;
				cursor: move;
				cursor: grab;
				padding-right: 8px;
				padding-inline-end: 8px;
				padding-inline-start: initial;
				direction: var(--direction);
				pointer-events: all;
			}

			.feature-list-item-content {
				height: 60px;
				font-size: 16px;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				flex-grow: 1;
				gap: 8px;
			}
			.primary:first-letter {
				text-transform: capitalize;
			}
			.feature-list-item-label {
				display: flex;
				flex-direction: column;
			}
			.secondary {
				font-size: 12px;
				color: var(--secondary-text-color);
			}

			.edit-icon,
			.remove-icon {
				color: var(--secondary-text-color);
				pointer-events: all;
				--mdc-icon-button-size: 36px;
			}

			.header {
				display: inline-flex;
				justify-content: space-between;
				align-items: center;
			}
			.header-icon {
				color: var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6));
			}
			.back-title {
				display: flex;
				align-items: center;
				font-size: 18px;
			}

			.wrapper {
				width: 100%;
			}
			.gui-editor {
				display: inline-flex;
				flex-direction: column;
				gap: 24px;
				padding: 8px 0px;
				width: 100%;
			}
			.yaml-editor {
				display: inline-flex;
				flex-direction: column;
				padding: 8px 0px;
				width: 100%;
			}
			ha-code-editor {
				--code-mirror-max-height: calc(100vh - 245px);
			}
			.error,
			.info {
				word-break: break-word;
				margin-top: 8px;
			}
			.error {
				color: var(--error-color);
			}
			.error ul {
				margin: 4px 0;
			}
			.warning li,
			.error li {
				white-space: pre-wrap;
			}

			.entry-list-header {
				font-size: 20px;
				font-weight: 500;
			}
			.panel-header {
				display: inline-flex;
				gap: 4px;
			}
			.style-header {
				font-size: var(--mdc-typography-body1-font-size, 1rem);
				font-weight: 500;
				padding: 8px;
			}

			.form {
				display: grid;
				grid-template-columns: repeat(
					var(--form-grid-column-count, auto-fit),
					minmax(var(--form-grid-min-width, 200px), 1fr)
				);
				gap: 24px 8px;
			}
		`;
	}
}
