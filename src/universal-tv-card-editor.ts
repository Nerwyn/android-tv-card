import { renderTemplate } from 'ha-nunjucks';
import { LitElement, TemplateResult, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';

import { HomeAssistant } from 'custom-card-helpers';
import { dump, load } from 'js-yaml';

import {
	ActionType,
	ActionTypes,
	Actions,
	DirectionAction,
	DirectionActions,
	IAction,
	IConfig,
	IData,
	IElementConfig,
	ITarget,
	Platform,
	RemoteElementType,
	RemoteElementTypes,
	defaultKeys,
} from './models';
import { deepGet, deepSet } from './utils';

export class UniversalTVCardEditor extends LitElement {
	@property() hass!: HomeAssistant;
	@property() config!: IConfig;

	@state() activeEntryName: string = '';
	@state() actionsTabIndex: number = 0;
	@state() touchpadTabIndex: number = 2; // up, down, center, left, right

	@state() guiMode: boolean = true;
	@state() errors?: string[];

	yamlString?: string;
	activeEntryType: RemoteElementType = 'button';
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

	actionChanged(entry: IElementConfig) {
		const updatedConfig = structuredClone(this.config);
		updatedConfig.custom_actions = updatedConfig.custom_actions ?? {};
		updatedConfig.custom_actions[this.activeEntryName] = {
			...structuredClone(
				this.config.custom_actions?.[this.activeEntryName],
			),
			...entry,
		};
		this.configChanged(updatedConfig);
	}

	toggleGuiMode(_e: CustomEvent) {
		this.yamlString = undefined;
		this.autofillCooldown = false;
		this.guiMode = !this.guiMode;
	}

	get activeEntry(): IElementConfig | undefined {
		if (this.activeEntryName == '') {
			return undefined;
		}
		const activeEntry = (this.config.custom_actions ?? {})[
			this.activeEntryName
		];
		switch (this.activeEntryType) {
			case 'touchpad':
				if (this.touchpadTabIndex == 2) {
					return activeEntry;
				}
				return activeEntry[
					['up', 'down', 'center', 'left', 'right'][
						this.touchpadTabIndex
					] as DirectionAction
				] as IElementConfig;
			case 'slider':
			case 'button':
			default:
				return activeEntry;
		}
	}

	get yaml(): string {
		if (this.yamlString == undefined) {
			const yaml = dump(this.activeEntry);
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
		if (this.activeEntryName != '' && this.activeEntry) {
			if (css != this.activeEntry.styles) {
				this.actionChanged({
					type: this.activeEntry.type,
					styles: css,
				});
			}
		} else {
			if (css != this.config.styles) {
				this.configChanged({
					...this.config,
					styles: css,
				});
			}
		}
	}

	handleActionCodeChanged(e: CustomEvent) {
		const actionType = (e.target as HTMLElement).id as ActionType;
		const actionYaml = e.detail.value;
		e.stopPropagation();
		clearTimeout(this.codeEditorDelay);
		this.codeEditorDelay = undefined;
		this.codeEditorDelay = setTimeout(() => {
			if (this.activeEntry) {
				try {
					const actionObj = load(actionYaml) as IData;
					if (JSON.stringify(actionObj ?? {}).includes('null')) {
						return;
					}
					this.actionChanged({
						type: this.activeEntry.type,
						[actionType]: actionObj,
					});
					this.errors = undefined;
				} catch (e) {
					this.errors = [(e as Error).message];
				}
			}
		}, 1000);
	}

	handleActionsTabSelected(e: CustomEvent) {
		const i = e.detail.index;
		if (this.actionsTabIndex == i) {
			return;
		}
		this.actionsTabIndex = i;
	}

	handleTouchpadTabSelected(e: CustomEvent) {
		this.yamlString = undefined;
		const i = e.detail.index;
		if (this.touchpadTabIndex == i) {
			return;
		}
		this.touchpadTabIndex = i;
	}

	handleSelectorChange(e: CustomEvent) {
		const key = (e.target as HTMLElement).id;
		let value = e.detail.value;
		if (key.endsWith('.confirmation.exemptions')) {
			value = ((value as string[]) ?? []).map((v) => {
				return {
					user: v,
				};
			});
		}
		this.actionChanged(
			deepSet(
				structuredClone(this.activeEntry) as object,
				key,
				value,
			) as IElementConfig,
		);
	}

	addEntry(e: CustomEvent) {
		// TODO copy default actions
		const i = e.detail.index as number;
		const entryType = RemoteElementTypes[i];
		const entry: IElementConfig = {
			type: RemoteElementTypes[i],
			autofill_entity_id: true,
		};

		const updatedConfig = structuredClone(this.config);
		updatedConfig.custom_actions = updatedConfig.custom_actions ?? {};
		updatedConfig.custom_actions[
			`custom_${entryType}_${
				Object.keys(updatedConfig.custom_actions).length
			}`
		] = entry;
		this.autofillCooldown = false;
		this.configChanged(updatedConfig);
	}

	removeEntry(e: CustomEvent) {
		const i = (
			e.currentTarget as unknown as CustomEvent & Record<'index', number>
		).index;
		const entry = Object.keys(this.config.custom_actions ?? {})[i];
		const updatedConfig = structuredClone(this.config);
		delete updatedConfig.custom_actions?.[entry];
		this.configChanged(updatedConfig);
	}

	moveEntry(e: CustomEvent) {
		// TODO why doesn't this work?
		e.stopPropagation();
		console.log(e.detail);
		const { oldIndex, newIndex } = e.detail;
		const updatedConfig = structuredClone(this.config);
		const customActions = updatedConfig.custom_actions ?? {};
		const customActionKeys = Object.keys(customActions);
		customActionKeys.splice(
			newIndex,
			0,
			customActionKeys.splice(oldIndex, 1)[0],
		);
		const updatedCustomActions = customActionKeys.reduce(
			(temp: Record<string, IElementConfig>, key: string) => {
				temp[key] = customActions[key];
				return temp;
			},
			{},
		);

		// Convoluted update logic to try to force object key reorder
		const diffKey = customActionKeys[newIndex];
		const movedEntry = structuredClone(updatedCustomActions[diffKey]);
		delete updatedCustomActions[diffKey];
		updatedCustomActions['Moved__' + diffKey] = movedEntry;
		updatedConfig.custom_actions = updatedCustomActions;
		this.configChanged(updatedConfig);

		delete updatedCustomActions['Moved__' + diffKey];
		updatedCustomActions[diffKey] = movedEntry;
		updatedConfig.custom_actions = updatedCustomActions;
		this.configChanged(updatedConfig);
	}

	editEntry(e: CustomEvent) {
		this.yamlString = undefined;
		const i = (
			e.currentTarget as unknown as CustomEvent & Record<'index', number>
		).index;
		this.activeEntryName = Object.keys(this.config.custom_actions ?? {})[i];
		const context = this.getEntryContext(
			this.activeEntry ?? { type: 'button' },
		);
		this.actionsTabIndex =
			i > -1 &&
			(this.renderTemplate(
				this.activeEntry?.momentary_start_action?.action ?? 'none',
				context,
			) != 'none' ||
				this.renderTemplate(
					this.activeEntry?.momentary_end_action?.action ?? 'none',
					context,
				) != 'none')
				? 1
				: this.renderTemplate(
						this.activeEntry?.multi_tap_action?.action ?? 'none',
						context,
				  ) != 'none' ||
				  this.renderTemplate(
						this.activeEntry?.multi_double_tap_action?.action ??
							'none',
						context,
				  ) != 'none' ||
				  this.renderTemplate(
						this.activeEntry?.multi_hold_action?.action ?? 'none',
						context,
				  ) != 'none'
				? 2
				: 0;
		this.touchpadTabIndex = 2;
	}

	exitEditEntry(_e: CustomEvent) {
		this.activeEntryName = '';
		this.yamlString = undefined;
	}

	buildEntryList() {
		const customActions = this.config.custom_actions ?? {};
		const customActionNames = Object.keys(customActions);
		return html`
			<div class="content">
				<div class="entry-list-header">Custom Actions</div>
				<ha-sortable
					handle-selector=".handle"
					@item-moved=${this.moveEntry}
				>
					<div class="features">
						${customActionNames.map((customActionName, i) => {
							const customAction =
								customActions[customActionName];
							const context = this.getEntryContext(customAction);
							const icon = this.renderTemplate(
								customAction.icon as string,
								context,
							);
							const label = this.renderTemplate(
								customAction.label as string,
								context,
							);
							const entryType = this.renderTemplate(
								customAction.type as string,
								context,
							);
							return html`
								<div class="feature-list-item">
									<div class="handle">
										<ha-icon
											.icon="${'mdi:drag'}"
										></ha-icon>
									</div>
									<div class="feature-list-item-content">
										${icon
											? html`<ha-icon
													.icon="${icon}"
											  ></ha-icon>`
											: ''}
										<div class="feature-list-item-label">
											<span class="primary"
												>${entryType} ⸱
												${customActionName}
												${label
													? ` ⸱ ${label}`
													: ''}</span
											>
											${context.config.entity
												? html`<span class="secondary"
														>${context.config
															.entity_id}${context
															.config.attribute
															? ` ⸱ ${context.config.attribute}`
															: ''}</span
												  >`
												: ''}
										</div>
									</div>
									<ha-icon-button
										class="edit-icon"
										.index=${i}
										@click=${this.editEntry}
									>
										<ha-icon
											.icon="${'mdi:pencil'}"
										></ha-icon>
									</ha-icon-button>
									<ha-icon-button
										class="remove-icon"
										.index=${i}
										@click=${this.removeEntry}
									>
										<ha-icon
											.icon="${'mdi:delete'}"
										></ha-icon>
									</ha-icon-button>
								</div>
							`;
						})}
					</div>
				</ha-sortable>
			</div>
		`;
	}

	buildAddEntryButton() {
		return html`
			<ha-button-menu
				fixed
				@action=${this.addEntry}
				@closed=${(e: CustomEvent) => e.stopPropagation()}
			>
				<ha-button
					slot="trigger"
					outlined
					.label="${'ADD CUSTOM FEATURE'}"
				>
					<ha-icon .icon=${'mdi:plus'} slot="icon"></ha-icon>
				</ha-button>
				${RemoteElementTypes.map(
					(entryType) => html`
						<ha-list-item .value=${entryType}>
							${entryType}
						</ha-list-item>
					`,
				)}
			</ha-button-menu>
		`;
	}

	buildEntryHeader() {
		const entryType = this.renderTemplate(
			this.activeEntry?.type as string,
			this.getEntryContext(this.activeEntry ?? { type: 'button' }),
		);
		return html`
			<div class="header">
				<div class="back-title">
					<ha-icon-button-prev
						.label=${this.hass.localize('ui.common.back')}
						@click=${this.exitEditEntry}
					></ha-icon-button-prev>
					<span class="primary" slot="title"
						>${entryType} ⸱ ${this.activeEntryName}</span
					>
				</div>
				<ha-icon-button
					class="gui-mode-button"
					@click=${this.toggleGuiMode}
					.label=${this.hass.localize(
						this.guiMode
							? 'ui.panel.lovelace.editor.edit_card.show_code_editor'
							: 'ui.panel.lovelace.editor.edit_card.show_visual_editor',
					)}
				>
					<ha-icon
						class="header-icon"
						.icon="${this.guiMode
							? 'mdi:code-braces'
							: 'mdi:list-box-outline'}"
					></ha-icon>
				</ha-icon-button>
			</div>
		`;
	}

	buildSelector(
		label: string,
		key: string,
		selector: object,
		backupValue: string | number | boolean | object = '',
	) {
		const hass: HomeAssistant = {
			...this.hass,
			localize: (key, values) => {
				const value = {
					'ui.panel.lovelace.editor.action-editor.actions.repeat':
						'Repeat',
					'ui.panel.lovelace.editor.action-editor.actions.fire-dom-event':
						'Fire DOM event',
					'ui.panel.lovelace.editor.action-editor.actions.key': 'Key',
					'ui.panel.lovelace.editor.action-editor.actions.source':
						'Source',
					'ui.panel.lovelace.editor.action-editor.actions.keyboard':
						'Keyboard',
					'ui.panel.lovelace.editor.action-editor.actions.textbox':
						'Textbox',
					'ui.panel.lovelace.editor.action-editor.actions.search':
						'Search',
				}[key];
				return value ?? this.hass.localize(key, values);
			},
		};

		let value = deepGet(this.activeEntry as object, key);
		if (key.endsWith('.confirmation.exemptions')) {
			value = ((value as Record<string, { user: string }>[]) ?? []).map(
				(v) => v.user,
			);
		}

		return html`<ha-selector
			.hass=${hass}
			.selector=${selector}
			.value=${value ?? backupValue}
			.label="${label}"
			.name="${label}"
			.required=${false}
			id="${key}"
			@value-changed=${this.handleSelectorChange}
		></ha-selector>`;
	}

	buildMainFeatureOptions(
		additionalOptions: TemplateResult<1> = html``,
		additionalFormOptions: TemplateResult<1> = html``,
	) {
		// TODO add / figure out template custom actions
		return html`
			${this.buildSelector('Entity', 'entity_id', {
				entity: {},
			})}
			${
				this.activeEntry?.entity_id
					? this.buildSelector('Attribute', 'value_attribute', {
							attribute: {
								entity_id: this.activeEntry.entity_id,
							},
					  })
					: ''
			}
			${additionalOptions}
			<div class="form">
				${additionalFormOptions}
				${this.buildSelector(
					'Autofill entity',
					'autofill_entity_id',
					{
						boolean: {},
					},
					true,
				)}
				${this.buildSelector(
					'Haptics',
					'haptics',
					{
						boolean: {},
					},
					false,
				)}
			</div>
		</div> `;
	}

	buildAppearancePanel(appearanceOptions: TemplateResult<1> = html``) {
		return html`
			<ha-expansion-panel .header=${'Appearance'}>
				<div
					class="panel-header"
					slot="header"
					role="heading"
					aria-level="3"
				>
					<ha-icon .icon=${'mdi:palette'}></ha-icon>
					Appearance
				</div>
				<div class="content">
					${this.buildAlertBox(
						"Change the feature appearance based on its value using a template like '{{ value | float }}'.",
					)}
					${appearanceOptions}${this.buildCodeEditor('jinja2')}
				</div>
			</ha-expansion-panel>
		`;
	}

	buildCommonAppearanceOptions() {
		return html`${this.buildSelector('Label', 'label', {
				text: { multiline: true },
			})}
			<div class="form">
				${this.buildSelector('Icon', 'icon', {
					icon: {},
				})}${this.buildSelector('Units', 'unit_of_measurement', {
					text: {},
				})}
			</div>`;
	}

	buildInteractionsPanel(actionSelectors: TemplateResult<1>) {
		return html`
			<ha-expansion-panel .header=${'Interactions'}>
				<div
					class="panel-header"
					slot="header"
					role="heading"
					aria-level="3"
				>
					<ha-icon .icon=${'mdi:gesture-tap'}></ha-icon>
					Interactions
				</div>
				<div class="content">${actionSelectors}</div>
			</ha-expansion-panel>
		`;
	}

	buildActionOption(
		label: string,
		actionType: ActionType,
		selector: object,
		buildCodeEditor: boolean = false,
	) {
		// TODO add IDs and keyboard fields
		// ${this.buildSelector('Remote ID', 'remote_id', {
		// 	entity: {
		// 		filter: {
		// 			domain: 'remote',
		// 		},
		// 	},
		// })}
		// ${this.buildSelector('Media Player ID', 'media_player_id', {
		// 	entity: {
		// 		filter: {
		// 			domain: 'media_player',
		// 		},
		// 	},
		// })}
		const context = this.getEntryContext(
			this.activeEntry ?? ({} as IElementConfig),
		);
		const action = this.renderTemplate(
			this.activeEntry?.[actionType]?.action ?? 'none',
			context,
		);
		return html`<div class="action-options">
			${this.buildSelector(label, actionType, selector)}
			${action != 'none' && actionType == 'double_tap_action'
				? this.buildSelector(
						'Double tap window',
						'double_tap_action.double_tap_window',
						{
							number: {
								min: 0,
								step: 0,
								mode: 'box',
								unit_of_measurement: 'ms',
							},
						},
						200,
				  )
				: action != 'none' && actionType == 'hold_action'
				? html`<div class="form">
						${this.buildSelector(
							'Hold time',
							'hold_action.hold_time',
							{
								number: {
									min: 0,
									step: 0,
									mode: 'box',
									unit_of_measurement: 'ms',
								},
							},
							500,
						)}
						${this.renderTemplate(
							this.activeEntry?.hold_action?.action as string,
							context,
						) == 'repeat'
							? this.buildSelector(
									'Repeat delay',
									'hold_action.repeat_delay',
									{
										number: {
											min: 0,
											step: 0,
											mode: 'box',
											unit_of_measurement: 'ms',
										},
									},
									100,
							  )
							: ''}
				  </div>`
				: ''}
			${action == 'more-info'
				? this.buildSelector(
						'Entity',
						`${actionType}.target.entity_id`,
						{
							entity: {},
						},
				  )
				: ''}
			${action == 'toggle'
				? this.buildSelector('Target', `${actionType}.target`, {
						target: {},
				  })
				: ''}
			${buildCodeEditor || action == 'fire-dom-event'
				? this.buildCodeEditor('action', actionType)
				: ''}
			${action != 'none'
				? html`${this.buildSelector(
						'Confirmation',
						`${actionType}.confirmation`,
						{
							boolean: {},
						},
						false,
				  )}
				  ${this.activeEntry?.[actionType]?.confirmation
						? html`${this.buildSelector(
								'Text',
								`${actionType}.confirmation.text`,
								{
									text: {},
								},
						  )}
						  ${this.buildSelector(
								'Exemptions',
								`${actionType}.confirmation.exemptions`,
								{
									select: {
										multiple: true,
										mode: 'list',
										options: this.people,
										reorder: false,
									},
								},
						  )}`
						: ''}`
				: ''}
		</div>`;
	}

	buildButtonGuiEditor() {
		const actionsTabBar = html`
			<mwc-tab-bar
				.activeIndex=${this.actionsTabIndex}
				@MDCTabBar:activated=${this.handleActionsTabSelected}
			>
				<mwc-tab .label=${'default'}></mwc-tab>
				<mwc-tab .label=${'momentary'}></mwc-tab>
			</mwc-tab-bar>
		`;
		let actionSelectors: TemplateResult<1>;
		const actionsNoRepeat = Actions.concat();
		actionsNoRepeat.splice(Actions.indexOf('repeat'), 1);
		const defaultUiActions = {
			ui_action: {
				actions: actionsNoRepeat,
				default_action: 'none',
			},
		};
		switch (this.actionsTabIndex) {
			case 1: {
				actionSelectors = html`
					${actionsTabBar}
					${this.buildActionOption(
						'Start behavior (optional)',
						'momentary_start_action',
						defaultUiActions,
					)}
					${this.buildAlertBox(
						"Set the action below, and then use the code editor to set a data field to the seconds the feature was held down using a template like '{{ hold_secs | float }}'.",
					)}
					${this.buildActionOption(
						'End behavior (optional)',
						'momentary_end_action',
						defaultUiActions,
						true,
					)}
				`;
				break;
			}
			case 0:
			default: {
				actionSelectors = html`
					${actionsTabBar}
					${this.buildActionOption(
						'Tap behavior (optional)',
						'tap_action',
						defaultUiActions,
					)}
					${this.buildActionOption(
						'Double tap behavior (optional)',
						'double_tap_action',
						defaultUiActions,
					)}
					${this.buildActionOption(
						'Hold behavior (optional)',
						'hold_action',
						{
							ui_action: {
								actions: Actions,
								default_action: 'none',
							},
						},
					)}
				`;
				break;
			}
		}

		return html`
			${this.buildMainFeatureOptions()}
			${this.buildAppearancePanel(html`
				${this.buildCommonAppearanceOptions()}
			`)}
			${this.buildInteractionsPanel(actionSelectors)}
		`;
	}

	buildSliderGuiEditor() {
		const actionsNoRepeat = Actions.concat();
		actionsNoRepeat.splice(Actions.indexOf('repeat'), 1);

		const context = this.getEntryContext(
			this.activeEntry ?? ({} as IElementConfig),
		);
		const rangeMin = this.renderTemplate(
			this.activeEntry?.range?.[0] as number,
			context,
		);
		const rangeMax = this.renderTemplate(
			this.activeEntry?.range?.[0] as number,
			context,
		);
		const step =
			this.renderTemplate(this.activeEntry?.step as number, context) ?? 1;
		const unit = this.renderTemplate(
			this.activeEntry?.unit_of_measurement as string,
			context,
		);

		return html`
			${this.buildMainFeatureOptions(
				undefined,
				html`
					${this.buildSelector('Min', 'range.0', {
						number: {
							max: rangeMax ?? undefined,
							step: step,
							mode: 'box',
							unit_of_measurement: unit,
						},
					})}
					${this.buildSelector('Max', 'range.1', {
						number: {
							min: rangeMin ?? undefined,
							step: step,
							mode: 'box',
							unit_of_measurement: unit,
						},
					})}
					${this.buildSelector('Step', 'step', {
						number: {
							min: 0,
							step:
								step ??
								Math.min(
									1,
									((this.activeEntry?.range?.[1] ?? 1) -
										(this.activeEntry?.range?.[0] ?? 0)) /
										100,
								),
							mode: 'box',
							unit_of_measurement: unit,
						},
					})}
					${this.buildSelector(
						'Update after action delay',
						'value_from_hass_delay',
						{
							number: {
								min: 0,
								step: 0,
								mode: 'box',
								unit_of_measurement: 'ms',
							},
						},
						1000,
					)}
				`,
			)}
			${this.buildAppearancePanel(this.buildCommonAppearanceOptions())}
			${this.buildInteractionsPanel(html`
				${this.buildAlertBox()}
				${this.buildActionOption(
					'Behavior',
					'tap_action',
					{
						ui_action: {
							actions: actionsNoRepeat,
							default_action: 'perform-action',
						},
					},
					true,
				)}
			`)}
		`;
	}

	buildTouchpadGuiEditor() {
		// TODO touchpad gui editor
		return html``;
	}

	buildEntryGuiEditor() {
		let entryGuiEditor: TemplateResult<1>;
		switch (this.activeEntry?.type) {
			case 'slider':
				entryGuiEditor = this.buildSliderGuiEditor();
				break;
			case 'touchpad':
				entryGuiEditor = this.buildTouchpadGuiEditor();
				break;
			case 'button':
			default:
				entryGuiEditor = this.buildButtonGuiEditor();
				break;
		}
		return html`<div class="gui-editor">${entryGuiEditor}</div>`;
	}

	buildCodeEditor(mode: string, id?: string) {
		let title: string | undefined;
		let value: string;
		let handler: (e: CustomEvent) => void;
		switch (mode) {
			case 'jinja2':
				value =
					(this.activeEntryName != ''
						? this.activeEntry?.styles
						: this.config.styles) ?? '';
				handler = this.handleStyleCodeChanged;
				title = 'CSS Styles';
				break;
			case 'action':
				mode = 'yaml';
				handler = this.handleActionCodeChanged;
				value = dump(
					(this.activeEntry?.[
						(id ?? 'tap_action') as ActionType
					] as IAction) ?? {},
				);
				value = value.trim() == '{}' ? '' : value;
				break;
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

	buildEntryEditor() {
		let editor: TemplateResult<1>;
		if (this.guiMode) {
			editor = this.buildEntryGuiEditor();
		} else {
			editor = this.buildCodeEditor('yaml');
		}

		return html`${this.buildEntryHeader()}
			<div class="wrapper">${editor}</div> `;
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

		let editor: TemplateResult<1>;
		if (this.activeEntryName != '' && this.activeEntry) {
			editor = html`${this.buildEntryEditor()}${this.buildErrorPanel()}`;
		} else {
			editor = html`
				${this.buildEntryList()}${this.buildAddEntryButton()}
				${this.buildCodeEditor('jinja2')}${this.buildErrorPanel()}
			`;
		}
		// TODO Layout editor
		// TODO custom icons

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

	getEntryContext(entry: IElementConfig) {
		const context = {
			VALUE: 0,
			HOLD_SECS: 0,
			UNIT: '',
			value: 0,
			hold_secs: 0,
			unit: '',
			config: {
				...entry,
				entity: '',
				attribute: '',
			},
		};
		context.config.attribute = this.renderTemplate(
			entry.value_attribute ?? '',
			context,
		) as string;
		context.config.entity = this.renderTemplate(
			entry.entity_id ?? '',
			context,
		) as string;
		const unit = this.renderTemplate(
			entry.unit_of_measurement as string,
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

	populateMissingEntityId(entry: IElementConfig, parentEntityId: string) {
		for (const actionType of ActionTypes) {
			if (actionType in entry) {
				const action =
					entry[actionType as ActionType] ?? ({} as IAction);
				if (['perform-action', 'more-info'].includes(action.action)) {
					const data = action.data ?? {};
					const target = action.target ?? {};
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
						target.entity_id = entry.entity_id ?? parentEntityId;
						action.target = target;
						entry[actionType as ActionType] = action;
					}
					action.data = data;
					action.target = target;
				}
			}
		}

		if (!('entity_id' in entry)) {
			let entity_id =
				entry.tap_action?.target?.entity_id ??
				entry.tap_action?.data?.entity_id ??
				parentEntityId;
			if (Array.isArray(entity_id)) {
				entity_id = entity_id[0];
			}
			entry.entity_id = entity_id as string;
		}

		return entry;
	}

	autofillDefaultFields(config: IConfig) {
		const updatedConfig = structuredClone(config);
		const updatedEntries: Record<string, IElementConfig> =
			updatedConfig.custom_actions ?? {};
		for (const entryName in updatedEntries) {
			let entry = updatedEntries[entryName];
			if (!('autofill_entity_id' in entry)) {
				entry.autofill_entity_id =
					updatedConfig.autofill_entity_id ?? true;
			}
			if (
				this.renderTemplate(
					(entry.autofill_entity_id ?? true) as unknown as string,
					this.getEntryContext(entry),
				)
			) {
				// Feature entity ID
				entry = this.populateMissingEntityId(
					entry,
					updatedConfig.remote_id ??
						updatedConfig.media_player_id ??
						updatedConfig.keyboard_id ??
						'',
				);
				const entityId = this.renderTemplate(
					entry.entity_id as string,
					this.getEntryContext(entry),
				) as string;

				switch (
					this.renderTemplate(
						entry.type as string,
						this.getEntryContext(entry),
					)
				) {
					case 'slider': {
						const [domain, _service] = (entityId ?? '').split('.');

						let rangeMin = entry.range?.[0];
						let rangeMax = entry.range?.[1];
						if (rangeMin == undefined) {
							rangeMin =
								this.hass.states[entityId]?.attributes?.min ??
								0;
						}
						if (rangeMax == undefined) {
							rangeMax =
								this.hass.states[entityId]?.attributes?.max ??
								1;
						}
						entry.range = [rangeMin as number, rangeMax as number];

						if (!entry.tap_action) {
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
								target.entity_id = entityId as string;
								tap_action.target = target;
							}
							entry.tap_action = tap_action;
						}

						if (!entry.step) {
							const defaultStep =
								this.hass.states[entityId as string]?.attributes
									?.step;
							if (defaultStep) {
								entry.step = defaultStep;
							} else {
								const entryContext =
									this.getEntryContext(entry);
								entry.step =
									((this.renderTemplate(
										entry.range[1],
										entryContext,
									) as unknown as number) -
										(this.renderTemplate(
											entry.range[0],
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
			updatedEntries[entryName] = entry;
		}
		updatedConfig.custom_actions = updatedEntries;
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
		if ('slider_style' in updatedConfig) {
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
		if ('slider_range' in updatedConfig) {
			slider.range = updatedConfig.slider_range as [number, number];
			delete updatedConfig.slider_range;
		}
		if ('slider_step' in updatedConfig) {
			slider.step = updatedConfig.slider_step as number;
			delete updatedConfig.slider_step;
		}
		if ('slider_attribute' in updatedConfig) {
			slider.value_attribute = updatedConfig.slider_attribute as string;
			delete updatedConfig.slider_attribute;
		}
		if ('enable_slider_feedback' in updatedConfig) {
			slider.haptics = updatedConfig.enable_slider_feedback as boolean;
			delete updatedConfig.enable_slider_feedback;
		}
		if ('slider_haptics' in updatedConfig) {
			slider.haptics = updatedConfig.slider_haptics as boolean;
			delete updatedConfig.slider_haptics;
		}
		if ('slider_id' in updatedConfig) {
			slider.entity_id =
				slider.entity_id ??
				(updatedConfig.slider_id as string) ??
				config.media_player_id ??
				'';
			const tapAction =
				slider.tap_action ?? defaultKeys.slider.tap_action;
			if (tapAction) {
				const data = tapAction.data ?? {};
				const target = tapAction.target ?? {};
				if (!('entity_id' in target)) {
					target.entity_id =
						(data.entity_id as string) ??
						(updatedConfig.slider_id as string);
					delete data.entity_id;
				}
				tapAction.data = data;
				tapAction.target = target;
			}
			slider.tap_action = tapAction;
			delete updatedConfig.slider_id;
		}
		if (Object.keys(slider).length > 1) {
			customActions.slider = {
				...structuredClone(defaultKeys.slider),
				...slider,
			};
		}

		// Copy touchpad fields
		const touchpad = customActions.touchpad ?? {
			type: 'touchpad',
		};
		if ('touchpad_style' in updatedConfig) {
			let styles = touchpad.styles ?? '';
			styles += '\ntoucharea {';
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

		for (const entryName in customActions) {
			let entry = customActions[entryName];
			entry = this.updateDeprecatedActionFields(entry);
			for (const direction of DirectionActions) {
				if (entry[direction]) {
					entry[direction] = this.updateDeprecatedActionFields(
						entry[direction] as IElementConfig,
					);
				}
			}
			customActions[entryName] = entry;
		}

		// Convert style object to styles string
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

		// Convert button style object to styles string
		if (updatedConfig['button_style' as keyof IConfig]) {
			let styles = updatedConfig.button_styles ?? '';
			styles += '\n:host {';
			const style = updatedConfig[
				'button_style' as keyof IConfig
			] as unknown as Record<string, string>;
			for (const field in style) {
				styles += `\n  ${field}: ${style[field]};`;
			}
			styles += `\n}`;
			updatedConfig.button_styles = styles + (updatedConfig.styles ?? '');
			delete updatedConfig['button_style' as keyof IConfig];
		}

		// Convert row styles object to styles string
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

	updateDeprecatedActionFields(entry: IElementConfig) {
		// TODO copy custom action onto default action in this function
		const customAction = structuredClone(entry);

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

		// Convert style object to styles string
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

			.features {
				max-height: 480px;
				overflow: auto;
				overflow-y: scroll;
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
