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
	IBasicActions,
	IConfig,
	IData,
	IElementConfig,
	IIconConfig,
	ITarget,
	Platform,
	Platforms,
	RemoteElementType,
	RemoteElementTypes,
	defaultIcons,
	defaultKeys,
	defaultSources,
} from './models';
import { deepGet, deepSet, mergeDeep } from './utils';

export class UniversalRemoteCardEditor extends LitElement {
	@property() hass!: HomeAssistant;
	@property() config!: IConfig;

	@state() baseTabIndex: number = 0;
	@state() entryIndex: number = -1;
	@state() actionsTabIndex: number = 0;
	@state() touchpadTabIndex: number = 2;

	@state() guiMode: boolean = true;
	@state() errors?: string[];

	yamlString?: string;
	autofillCooldown = false;
	codeEditorDelay?: ReturnType<typeof setTimeout>;
	people: Record<string, string>[] = [];

	BASE_TABS = ['general', 'layout', 'actions', 'icons'];
	TOUCHPAD_TABS = ['up', 'down', 'center', 'left', 'right'];
	DEFAULT_ACTIONS = [
		...structuredClone(defaultSources),
		...structuredClone(defaultKeys),
	];

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

	entriesChanged(entries: IElementConfig[] | IIconConfig[]) {
		let key;
		switch (this.baseTabIndex) {
			case 3:
				key = 'custom_icons';
				break;
			case 2:
			default:
				key = 'custom_actions';
				break;
		}

		this.configChanged({
			...this.config,
			[key]: entries,
		} as IConfig);
	}

	entryChanged(entry: IElementConfig) {
		let entries: IElementConfig[] | IIconConfig[];
		let oldEntry: IElementConfig | IIconConfig;
		let updatedEntry: IElementConfig | IIconConfig;
		switch (this.baseTabIndex) {
			case 3:
				entries = structuredClone(this.config.custom_icons ?? []);
				oldEntry = entries[this.entryIndex] as IIconConfig;
				updatedEntry = {
					...oldEntry,
					...entry,
				};
				break;
			case 2:
			default:
				entries = structuredClone(this.config.custom_actions ?? []);
				oldEntry = entries[this.entryIndex] as IElementConfig;
				switch (
					this.renderTemplate(
						oldEntry?.type,
						this.getEntryContext(oldEntry),
					)
				) {
					case 'touchpad':
						if (this.touchpadTabIndex != 2) {
							updatedEntry = {
								...oldEntry,
								[this.TOUCHPAD_TABS[this.touchpadTabIndex]]: {
									...oldEntry[
										this.TOUCHPAD_TABS[
											this.touchpadTabIndex
										] as DirectionAction
									],
									...entry,
								},
							};
							break;
						}
					// falls through
					case 'slider':
					case 'button':
					default:
						updatedEntry = {
							...oldEntry,
							...entry,
						};
				}
				break;
		}

		entries[this.entryIndex] = updatedEntry;
		this.entriesChanged(entries);
	}

	toggleGuiMode(_e: CustomEvent) {
		this.yamlString = undefined;
		this.autofillCooldown = false;
		this.guiMode = !this.guiMode;
	}

	get activeEntry(): IElementConfig | IIconConfig | undefined {
		if (this.entryIndex < 0) {
			return undefined;
		}
		let entry: IElementConfig | IIconConfig;
		switch (this.baseTabIndex) {
			case 3:
				return (this.config.custom_icons ?? [])[this.entryIndex];
			case 2:
			default:
				entry = (this.config.custom_actions ?? [])[this.entryIndex];
				switch (
					this.renderTemplate(
						entry?.type,
						this.getEntryContext(entry),
					)
				) {
					case 'touchpad':
						if (this.touchpadTabIndex != 2) {
							return entry[
								this.TOUCHPAD_TABS[
									this.touchpadTabIndex
								] as DirectionAction
							] as IElementConfig;
						}
					// falls through
					case 'slider':
					case 'button':
					default:
						return entry;
				}
		}
	}

	get yaml(): string {
		if (this.yamlString == undefined) {
			const yaml = dump(this.activeEntry);
			this.yamlString = yaml.trim() == '{}' ? '' : yaml;
		}
		return this.yamlString ?? '';
	}

	set yaml(yaml: string | undefined) {
		this.yamlString = yaml;
		try {
			const updatedEntry = load(this.yaml);
			let entries: IElementConfig[] | IIconConfig[];
			switch (this.baseTabIndex) {
				case 3:
					entries = structuredClone(this.config.custom_icons ?? []);
					entries[this.entryIndex] = updatedEntry as IIconConfig;
					break;
				case 2:
				default:
					entries = structuredClone(this.config.custom_actions ?? []);
					switch (
						this.renderTemplate(
							entries[this.entryIndex].type,
							this.getEntryContext(
								updatedEntry as IElementConfig,
							),
						)
					) {
						case 'touchpad':
							if (this.touchpadTabIndex != 2) {
								entries[this.entryIndex] = {
									...entries[this.entryIndex],
									[this.TOUCHPAD_TABS[
										this.touchpadTabIndex
									] as DirectionAction]: updatedEntry,
								};
								break;
							}
						// falls through
						case 'slider':
						case 'button':
						default:
							entries[this.entryIndex] =
								updatedEntry as IElementConfig;
					}
			}

			this.entriesChanged(entries);
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
		if (this.entryIndex > -1 && this.activeEntry) {
			if (css != (this.activeEntry as IElementConfig)?.styles) {
				this.entryChanged({
					styles: css,
				} as unknown as IElementConfig);
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
					this.entryChanged({
						[actionType]: actionObj,
					} as unknown as IElementConfig);
					this.errors = undefined;
				} catch (e) {
					this.errors = [(e as Error).message];
				}
			}
		}, 1000);
	}

	handleBaseTabSelected(e: CustomEvent) {
		const i = e.detail.index;
		if (this.baseTabIndex == i) {
			return;
		}
		this.baseTabIndex = i;
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
		this.setActionsTab(this.entryIndex);
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
		this.autofillCooldown = false;
		switch (this.baseTabIndex) {
			case 3:
			case 2:
				this.entryChanged(
					deepSet(
						structuredClone(this.activeEntry) as object,
						key,
						value,
					) as IElementConfig,
				);
				break;
			default:
				this.configChanged({
					...this.config,
					[key]: value,
				});
				break;
		}
	}

	addEntry(e: CustomEvent) {
		const i = e.detail.index as number;
		let entries: IElementConfig[] | IIconConfig[];
		switch (this.baseTabIndex) {
			case 3:
				entries = structuredClone(this.config.custom_icons) ?? [];
				entries.push({
					name: `custom_icon_${
						(this.config.custom_icons ?? []).length
					}`,
					path: '',
				});
				break;
			case 2:
			default: {
				const entryType = RemoteElementTypes[i];
				entries = structuredClone(this.config.custom_actions) ?? [];
				entries.push({
					type: RemoteElementTypes[i],
					name: `custom_${entryType}_${
						(this.config.custom_actions ?? []).length
					}`,
					autofill_entity_id: true,
				});
				break;
			}
		}
		this.autofillCooldown = false;
		this.entriesChanged(entries);
		const entriesList = this.shadowRoot?.querySelector('.features');
		if (entriesList) {
			setTimeout(
				() => (entriesList.scrollTop = entriesList.scrollHeight),
				100,
			);
		}
	}

	removeEntry(e: CustomEvent) {
		const i = (
			e.currentTarget as unknown as CustomEvent & Record<'index', number>
		).index;
		let entries: IElementConfig[] | IIconConfig[];
		switch (this.baseTabIndex) {
			case 3:
				entries = this.config.custom_icons ?? [];
				break;
			case 2:
			default:
				entries = this.config.custom_actions ?? [];
				break;
		}
		entries = structuredClone(entries);
		entries.splice(i, 1);
		this.entriesChanged(entries);
	}

	moveEntry(e: CustomEvent) {
		e.stopPropagation();
		let entries: IElementConfig[] | IIconConfig[];
		switch (this.baseTabIndex) {
			case 3:
				entries = this.config.custom_icons ?? [];
				break;
			case 2:
			default:
				entries = this.config.custom_actions ?? [];
				break;
		}
		entries = structuredClone(entries);
		const { oldIndex, newIndex } = e.detail;
		(entries as IElementConfig[]).splice(
			newIndex,
			0,
			(entries as IElementConfig[]).splice(oldIndex, 1)[0],
		);
		this.entriesChanged(entries);
	}

	copyEntry(e: CustomEvent) {
		let entries: IElementConfig[] | IIconConfig[];
		switch (this.baseTabIndex) {
			case 3:
				entries = this.config.custom_icons ?? [];
				break;
			case 2:
			default:
				entries = this.config.custom_actions ?? [];
				break;
		}
		entries = structuredClone(entries);
		const i = (
			e.currentTarget as unknown as CustomEvent & Record<'index', number>
		).index;
		const entry = structuredClone(entries[i]);
		entry.name = `${entry['name' as keyof object]}_copy`;
		(entries as IElementConfig[]).splice(
			i,
			1,
			(entries as IElementConfig[])[i],
			entry as IElementConfig,
		);
		this.entriesChanged(entries);
	}

	editEntry(e: CustomEvent) {
		this.yamlString = undefined;
		const i = (
			e.currentTarget as unknown as CustomEvent & Record<'index', number>
		).index;
		switch (this.baseTabIndex) {
			case 3:
				break;
			case 2:
			default:
				this.setActionsTab(i);
				this.touchpadTabIndex = 2;
				break;
		}
		this.entryIndex = i;
	}

	exitEditEntry(_e: CustomEvent) {
		this.yamlString = undefined;
		this.entryIndex = -1;
	}

	setActionsTab(i: number) {
		let entry = this.config.custom_actions?.[i] ?? {
			type: 'button',
			name: '',
		};
		const entryType = entry.type;
		if (entryType == 'touchpad' && this.touchpadTabIndex != 2) {
			entry = entry[
				this.TOUCHPAD_TABS[this.touchpadTabIndex] as DirectionAction
			] as IElementConfig;
		}
		const context = this.getEntryContext(entry);
		if (
			this.renderTemplate(
				entry?.momentary_start_action?.action ?? 'none',
				context,
			) != 'none' ||
			this.renderTemplate(
				entry?.momentary_end_action?.action ?? 'none',
				context,
			) != 'none'
		) {
			if (entryType == 'touchpad' && this.touchpadTabIndex == 2) {
				this.actionsTabIndex = 2;
			} else {
				this.actionsTabIndex = 1;
			}
		} else if (
			entryType == 'touchpad' &&
			(this.renderTemplate(
				entry?.multi_tap_action?.action ?? 'none',
				context,
			) != 'none' ||
				this.renderTemplate(
					entry?.multi_double_tap_action?.action ?? 'none',
					context,
				) != 'none' ||
				this.renderTemplate(
					entry?.multi_hold_action?.action ?? 'none',
					context,
				) != 'none')
		) {
			this.actionsTabIndex = 1;
		} else {
			this.actionsTabIndex = 0;
		}
	}

	buildEntryList() {
		let entries;
		let header: string;
		switch (this.baseTabIndex) {
			case 3:
				entries = this.config.custom_icons ?? [];
				header = 'Custom Icons';
				break;
			case 2:
			default:
				entries = this.config.custom_actions ?? [];
				header = 'Custom Actions';
				break;
		}
		return html`
			<div class="content">
				<div class="entry-list-header">${header}</div>
				<ha-sortable
					handle-selector=".handle"
					@item-moved=${this.moveEntry}
				>
					<div class="features">
						${entries.map((entry, i) => {
							let context = {
								config: { entity: '', attribute: '' },
							};
							let icon = '';
							if ((entry as IElementConfig).icon) {
								context = this.getEntryContext(
									entry as IElementConfig,
								);
								icon = this.renderTemplate(
									(entry as IElementConfig).icon ??
										(entry as IIconConfig).path,
									context,
								) as string;
								if (icon && !icon.includes(':')) {
									const iconConfig =
										(this.config.custom_icons ?? []).filter(
											(customIcon: IIconConfig) =>
												customIcon.name == icon,
										)[0] ??
										defaultIcons.filter(
											(defaultIcon: IIconConfig) =>
												defaultIcon.name == icon,
										)[0];
									icon = iconConfig?.path ?? icon;
								}
							} else if ((entry as IIconConfig).path) {
								icon = (entry as IIconConfig).path;
							}

							const label = this.renderTemplate(
								(entry as IElementConfig).label as string,
								context,
							);
							const entryType = this.renderTemplate(
								(entry as IElementConfig).type as string,
								context,
							);
							const name = this.renderTemplate(
								entry.name as string,
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
											? icon.includes(':')
												? html`<ha-icon
														.icon="${icon}"
												  ></ha-icon>`
												: html`<ha-svg-icon
														.path=${icon}
												  ></ha-svg-icon>`
											: ''}
										<div class="feature-list-item-label">
											<span class="primary"
												>${entryType} ⸱ ${name}
												${label
													? ` ⸱ ${label}`
													: ''}</span
											>
											${context.config.entity
												? html`<span class="secondary"
														>${context.config
															.entity}${context
															.config.attribute
															? ` ⸱ ${context.config.attribute}`
															: ''}</span
												  >`
												: ''}
										</div>
									</div>
									<ha-icon-button
										class="copy-icon"
										.index=${i}
										@click=${this.copyEntry}
									>
										<ha-icon
											.icon="${'mdi:content-copy'}"
										></ha-icon>
									</ha-icon-button>
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
		switch (this.baseTabIndex) {
			case 3:
				return html`
					<ha-button
						@action=${this.addEntry}
						outlined
						.label="${'ADD SVG ICON'}"
					>
						<ha-icon .icon=${'mdi:plus'} slot="icon"></ha-icon>
					</ha-button>
				`;
			case 2:
			default:
				return html`
					<ha-button-menu
						fixed
						@action=${this.addEntry}
						@closed=${(e: CustomEvent) => e.stopPropagation()}
					>
						<ha-button
							slot="trigger"
							outlined
							.label="${'ADD REMOTE ELEMENT'}"
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
	}

	buildEntryHeader() {
		let entryType: string;
		switch (this.baseTabIndex) {
			case 3:
				entryType = 'SVG Icon';
				break;
			case 2:
			default:
				entryType = this.renderTemplate(
					this.config.custom_actions?.[this.entryIndex]?.type ??
						'button',
					this.getEntryContext(
						(this.activeEntry as IElementConfig) ?? {
							type: 'button',
							name: '',
						},
					),
				) as string;
				break;
		}

		return html`
			<div class="header">
				<div class="back-title">
					<ha-icon-button-prev
						.label=${this.hass.localize('ui.common.back')}
						@click=${this.exitEditEntry}
					></ha-icon-button-prev>
					<span class="primary" slot="title">${entryType}</span>
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
		return html`
			${this.buildSelector('Name', 'name', {
				text: {},
			})}
			${this.buildSelector('Entity', 'entity_id', {
				entity: {},
			})}
			${
				(this.activeEntry as IElementConfig)?.entity_id
					? this.buildSelector('Attribute', 'value_attribute', {
							attribute: {
								entity_id: (this.activeEntry as IElementConfig)
									.entity_id,
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
		const context = this.getEntryContext(
			(this.activeEntry as IElementConfig) ?? {
				type: 'button',
				name: '',
			},
		);
		let icon = this.renderTemplate(
			(this.activeEntry as IElementConfig)?.icon ?? '',
			context,
		) as string;
		let customIcon;
		if (icon && !icon.includes(':')) {
			const iconConfig =
				(this.config.custom_icons ?? []).filter(
					(customIcon: IIconConfig) => customIcon.name == icon,
				)[0] ??
				defaultIcons.filter(
					(defaultIcon: IIconConfig) => defaultIcon.name == icon,
				)[0];
			icon = iconConfig?.path ?? icon;
			customIcon = html`<ha-svg-icon
				.path=${icon}
				class="custom-icon-picked"
			></ha-svg-icon>`;
		}
		return html`${this.buildSelector('Label', 'label', {
				text: { multiline: true },
			})}
			<div class="form">
				${this.buildSelector('Icon', 'icon', {
					icon: {},
				})}${customIcon ?? ''}${this.buildSelector(
					'Units',
					'unit_of_measurement',
					{
						text: {},
					},
				)}
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
		const context = this.getEntryContext(
			(this.activeEntry as IElementConfig) ?? ({} as IElementConfig),
		);
		const action = this.renderTemplate(
			(this.activeEntry as IElementConfig)?.[actionType]?.action ??
				'none',
			context,
		) as string;
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
				: action != 'none' && actionType == 'multi_double_tap_action'
				? this.buildSelector(
						'Double tap window',
						'multi_double_tap_action.double_tap_window',
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
							(this.activeEntry as IElementConfig)?.hold_action
								?.action as string,
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
				: action != 'none' && actionType == 'multi_hold_action'
				? html`<div class="form">
						${this.buildSelector(
							'Hold time',
							'multi_hold_action.hold_time',
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
							(this.activeEntry as IElementConfig)
								?.multi_hold_action?.action as string,
							context,
						) == 'repeat'
							? this.buildSelector(
									'Repeat delay',
									'multi_hold_action.repeat_delay',
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
			${action == 'key'
				? html`<div class="form">
						${this.buildSelector(
							'Remote ID',
							`${actionType}.remote_id`,
							{
								entity: {
									filter: {
										domain: 'remote',
									},
								},
							},
						)}
						${this.buildSelector('Key', `${actionType}.key`, {
							text: {},
						})}
				  </div>`
				: ''}
			${action == 'source'
				? html`<div class="form">
						${this.buildSelector(
							'Remote ID',
							`${actionType}.remote_id`,
							{
								entity: {
									filter: {
										domain: 'remote',
									},
								},
							},
						)}
						${this.buildSelector('Source', `${actionType}.source`, {
							text: {},
						})}
				  </div>`
				: ''}
			${['keyboard', 'textbox', 'search'].includes(action)
				? html`<div class="form">
							${this.buildSelector(
								'Keyboard ID',
								`${actionType}.keyboard_id`,
								{
									entity: {
										filter: {
											domain: ['remote', 'media_player'],
										},
									},
								},
							)}
							${this.buildSelector(
								'Platform',
								`${actionType}.platform`,
								{
									select: {
										mode: 'dropdown',
										options: Platforms,
										reorder: false,
									},
								},
							)}
						</div>
						${this.buildSelector(
							'Prompt',
							`${actionType}.keyboard_prompt`,
							{
								text: {},
							},
						)}`
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
				  ${(this.activeEntry as IElementConfig)?.[actionType]
						?.confirmation
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

	buildTabBar(
		index: number,
		handler: (e: CustomEvent) => void,
		tabs: string[],
	) {
		return html`
			<mwc-tab-bar .activeIndex=${index} @MDCTabBar:activated=${handler}>
				${tabs.map((tab) => html`<mwc-tab .label=${tab}></mwc-tab>`)}
			</mwc-tab-bar>
		`;
	}

	buildButtonGuiEditor() {
		const actionsTabBar = this.buildTabBar(
			this.actionsTabIndex,
			this.handleActionsTabSelected,
			['default', 'momentary'],
		);
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
			case 1:
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

			case 0:
			default:
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

		return html`
			${this.buildMainFeatureOptions()}
			${this.buildAppearancePanel(this.buildCommonAppearanceOptions())}
			${this.buildInteractionsPanel(actionSelectors)}
		`;
	}

	buildSliderGuiEditor() {
		const actionsNoRepeat = Actions.concat();
		actionsNoRepeat.splice(Actions.indexOf('repeat'), 1);

		const context = this.getEntryContext(
			(this.activeEntry as IElementConfig) ?? ({} as IElementConfig),
		);
		const rangeMin = this.renderTemplate(
			(this.activeEntry as IElementConfig)?.range?.[0] as number,
			context,
		);
		const rangeMax = this.renderTemplate(
			(this.activeEntry as IElementConfig)?.range?.[0] as number,
			context,
		);
		const step =
			this.renderTemplate(
				(this.activeEntry as IElementConfig)?.step as number,
				context,
			) ?? 1;
		const unit = this.renderTemplate(
			(this.activeEntry as IElementConfig)?.unit_of_measurement as string,
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
									(((this.activeEntry as IElementConfig)
										?.range?.[1] ?? 1) -
										((this.activeEntry as IElementConfig)
											?.range?.[0] ?? 0)) /
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
		const tabs = ['default', 'multi-touch'];
		if (this.touchpadTabIndex == 2) {
			tabs.push('momentary');
		}
		const actionsTabBar = this.buildTabBar(
			this.actionsTabIndex,
			this.handleActionsTabSelected,
			tabs,
		);
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
			case 2:
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
			case 1:
				actionSelectors = html`
					${actionsTabBar}
					${this.buildActionOption(
						'Multi-touch tap behavior (optional)',
						'multi_tap_action',
						defaultUiActions,
					)}
					${this.buildActionOption(
						'Multi-touch double tap behavior (optional)',
						'multi_double_tap_action',
						defaultUiActions,
					)}
					${this.buildActionOption(
						'Multi-touch hold behavior (optional)',
						'multi_hold_action',
						{
							ui_action: {
								actions: Actions,
								default_action: 'none',
							},
						},
					)}
				`;
				break;
			case 0:
			default:
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

		const touchpadTabBar = this.buildTabBar(
			this.touchpadTabIndex,
			this.handleTouchpadTabSelected,
			this.TOUCHPAD_TABS,
		);

		return html`
			${touchpadTabBar}
			${this.touchpadTabIndex == 2 ? this.buildMainFeatureOptions() : ''}
			${this.buildAppearancePanel(this.buildCommonAppearanceOptions())}
			${this.buildInteractionsPanel(actionSelectors)}
		`;
	}

	buildIconGuiEditor() {
		// TODO icon preview
		return html` <div class="content">
			${this.buildSelector('Name', 'name', {
				text: {},
			})}
			${this.buildSelector('SVG Path', 'path', {
				text: { multiline: true },
			})}
		</div>`;
	}

	buildEntryGuiEditor() {
		let entryGuiEditor: TemplateResult<1>;
		switch (this.baseTabIndex) {
			case 3:
				entryGuiEditor = this.buildIconGuiEditor();
				break;
			case 2:
			default:
				switch (this.config.custom_actions?.[this.entryIndex]?.type) {
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
					(this.entryIndex > -1
						? (this.activeEntry as IElementConfig)?.styles
						: this.config.styles) ?? '';
				handler = this.handleStyleCodeChanged;
				title = 'CSS Styles';
				break;
			case 'action':
				mode = 'yaml';
				handler = this.handleActionCodeChanged;
				value = dump(
					((this.activeEntry as IElementConfig)?.[
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
			// TODO instead of running automatically, make deprecated field update code a button
			let config = this.updateDeprecatedFields(this.config);
			config = this.autofillDefaultFields(config);
			config = this.updateDeprecatedTemplateFields(config);
			this.configChanged(config);
			setTimeout(() => (this.autofillCooldown = false), 1000);
		}

		this.buildPeopleList();

		const baseTabBar = this.buildTabBar(
			this.baseTabIndex,
			this.handleBaseTabSelected,
			this.BASE_TABS,
		);

		let editor: TemplateResult<1>;
		switch (this.baseTabIndex) {
			case 3:
				if (this.entryIndex > -1 && this.activeEntry) {
					editor = html`${this.buildEntryEditor()}${this.buildErrorPanel()}`;
				} else {
					editor = html`
						${this.buildEntryList()}${this.buildAddEntryButton()}
					`;
				}
				break;
			case 2:
				if (this.entryIndex > -1 && this.activeEntry) {
					editor = html`${this.buildEntryEditor()}${this.buildErrorPanel()}`;
				} else {
					editor = html`
						${this.buildEntryList()}${this.buildAddEntryButton()}
						${this.buildCodeEditor(
							'jinja2',
						)}${this.buildErrorPanel()}
					`;
				}
				break;
			case 1:
				editor = html``;
				break;
			case 0:
			default:
				editor = html``;
				break;
		}

		// TODO layout editor
		// TODO custom icons editor
		// TODO global options editor
		// Tabs:
		//   - General
		//     - Platform, IDs, global timings, and autofill toggle
		//     - Move overall styles here
		//   - Remote Elements
		//     - Maybe add a link to the default lists?
		//   - Custom Icons
		//     - Reuse entries list
		//     - Should preview icon
		//     - Warning message about icon size, dimensions, and tools to use
		//   - Layout

		return html`${baseTabBar}${editor} `;
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
		const updatedEntries: IElementConfig[] = [];

		for (const entry of updatedConfig.custom_actions ?? []) {
			updatedEntries.push(
				this.autofillDefaultEntryFields(updatedConfig, entry),
			);
		}
		updatedConfig.custom_actions = updatedEntries;
		return updatedConfig;
	}

	autofillDefaultEntryFields(config: IConfig, entry: IElementConfig) {
		if (!('autofill_entity_id' in entry)) {
			entry.autofill_entity_id = config.autofill_entity_id ?? true;
		}
		if (
			this.renderTemplate(
				(entry.autofill_entity_id ?? true) as unknown as string,
				this.getEntryContext(entry),
			)
		) {
			entry.value_attribute = entry.value_attribute ?? 'state';
			entry.haptics = entry.haptics ?? config.haptics ?? true;

			for (const actionType of ActionTypes) {
				if (entry[actionType]) {
					const action = entry[actionType] ?? ({} as IAction);

					switch (action.action) {
						case 'keyboard':
						case 'textbox':
						case 'search':
							action.keyboard_id =
								action.keyboard_id ?? config.keyboard_id;
							action.media_player_id =
								action.media_player_id ??
								config.media_player_id;
						// falls through
						case 'key':
						case 'source':
							action.remote_id =
								action.remote_id ?? config.remote_id;
							action.platform =
								action.platform ?? config.platform;
							switch (action.platform?.toUpperCase()) {
								case 'KODI':
								case 'ROKU':
									break;
								case 'FIRE' as Platform:
								case 'FIRETV' as Platform:
								case 'FIRE_TV' as Platform:
								case 'FIRE TV':
									action.platform = 'FIRE TV';
									break;
								case 'ANDROID' as Platform:
								case 'ANDROIDTV' as Platform:
								case 'ANDROID_TV' as Platform:
								case 'ANDROID TV':
								default:
									action.platform = 'ANDROID TV';
									break;
							}
							break;
						case 'toggle':
						case 'more-info':
						case 'service' as 'perform-action':
						case 'perform-action':
							if (
								!action.data?.entity_id &&
								!action.data?.device_id &&
								!action.data?.area_id &&
								!action.data?.label_id &&
								!action.target?.entity_id &&
								!action.target?.device_id &&
								!action.target?.area_id &&
								!action.target?.label_id
							) {
								let entityId: string | undefined;
								const [domain, _service] = (
									renderTemplate(
										this.hass,
										action.perform_action ??
											(action[
												'service' as 'perform_action'
											] as string) ??
											'',
										this.getEntryContext(entry),
									) as string
								).split('.');
								switch (domain) {
									case 'remote':
										entityId = config.remote_id;
										break;
									case 'media_player':
									case 'kodi':
									case 'denonavr':
										entityId = config.media_player_id;
										break;
									default:
										entityId = entry.entity_id;
										break;
								}
								if (entityId) {
									action.target = {
										...action.target,
										entity_id: entityId,
									};
								}
							}
						// falls through
						default:
							delete action.keyboard_id;
							delete action.keyboard_prompt;
							delete action.remote_id;
							delete action.media_player_id;
							delete action.platform;
							break;
					}

					entry[actionType] = action;
				}
			}

			// Set hold time if defined globally
			if (config.hold_time) {
				if (entry.hold_action) {
					entry.hold_action.hold_time =
						entry.hold_action?.hold_time ?? config.hold_time;
				}
				if (entry.multi_hold_action) {
					entry.multi_hold_action.hold_time =
						entry.multi_hold_action?.hold_time ?? config.hold_time;
				}
			}

			// Set repeat delay if defined globally
			if (config.repeat_delay) {
				if (entry.hold_action?.action == 'repeat') {
					entry.hold_action.repeat_delay =
						entry.hold_action.repeat_delay ?? config.repeat_delay;
				}
				if (entry.multi_hold_action?.action == 'repeat') {
					entry.multi_hold_action.repeat_delay =
						entry.multi_hold_action.repeat_delay ??
						config.repeat_delay;
				}
			}

			// Set double tap window if defined globally
			if (config.double_tap_window) {
				if (entry.double_tap_action) {
					entry.double_tap_action.double_tap_window =
						entry.double_tap_action.double_tap_window ??
						config.double_tap_window;
				}
				if (entry.multi_double_tap_action) {
					entry.multi_double_tap_action.double_tap_window =
						entry.multi_double_tap_action.double_tap_window ??
						config.double_tap_window;
				}
			}

			// Feature entity ID
			entry = this.populateMissingEntityId(
				entry,
				config.remote_id ??
					config.media_player_id ??
					config.keyboard_id ??
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
							this.hass.states[entityId]?.attributes?.min ?? 0;
					}
					if (rangeMax == undefined) {
						rangeMax =
							this.hass.states[entityId]?.attributes?.max ?? 1;
					}
					entry.range = [rangeMin as number, rangeMax as number];

					if (!entry.tap_action) {
						const tap_action = {} as IAction;
						const data = tap_action.data ?? {};
						tap_action.action = 'perform-action';
						switch (domain) {
							case 'number':
								tap_action.perform_action = 'number.set_value';
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
							const entryContext = this.getEntryContext(entry);
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
					for (const direction of DirectionActions) {
						entry[direction] = this.autofillDefaultEntryFields(
							config,
							(entry[direction] ?? {}) as IElementConfig,
						);
					}
					break;
				case 'button':
				case 'default':
					break;
			}

			// Copy custom action onto default action
			const defaultActions =
				structuredClone(
					this.DEFAULT_ACTIONS.filter(
						(defaultActions) => defaultActions.name == entry.name,
					)[0],
				) ?? {};
			entry = {
				...defaultActions,
				...entry,
			};
		}
		return entry;
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

		// Convert old custom icons object into an array
		if (
			!Array.isArray(updatedConfig.custom_icons) &&
			typeof updatedConfig.custom_icons == 'object' &&
			updatedConfig.custom_icons != null
		) {
			const customIcons: IIconConfig[] = [];
			for (const name of Object.keys(
				updatedConfig.custom_icons as unknown as Record<string, string>,
			)) {
				customIcons.push({
					name: name,
					path: updatedConfig?.custom_icons?.[name],
				});
			}
			updatedConfig.custom_icons = customIcons;
		}

		// Convert old custom actions object into an array
		let customActions: IElementConfig[] = [];
		if (
			!Array.isArray(updatedConfig.custom_actions) &&
			typeof updatedConfig.custom_actions == 'object' &&
			updatedConfig.custom_actions != null
		) {
			for (const name of Object.keys(
				updatedConfig.custom_actions as unknown as Record<
					string,
					IElementConfig
				>,
			)) {
				customActions.push({
					...(updatedConfig.custom_actions?.[
						name
					] as unknown as IElementConfig),
					name: name,
				});
			}
		} else {
			customActions = updatedConfig.custom_actions ?? [];
		}

		// Combine custom actions, custom keys, and custom sources fields
		for (const customKeys of ['custom_keys', 'custom_sources']) {
			if (customKeys in updatedConfig) {
				for (const name of Object.keys(
					updatedConfig[
						customKeys as keyof IConfig
					] as unknown as Record<string, IElementConfig>,
				)) {
					customActions.push({
						...((
							updatedConfig[
								customKeys as keyof IConfig
							] as unknown as Record<string, IElementConfig>
						)?.[name] as unknown as IElementConfig),
						name: name,
					});
				}
				delete updatedConfig[customKeys as keyof IConfig];
			}
		}

		// Copy slider fields
		const sliderIndex = customActions.findIndex(
			(customAction) => customAction.name == 'slider',
		);
		const slider = customActions[sliderIndex] ?? {
			type: 'slider',
			name: 'slider',
		};
		let updateSlider = false;
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
			slider.styles = (styles + (slider.styles ?? '')).trim();
			delete updatedConfig['slider_style' as keyof IConfig];
			updateSlider = true;
		}
		if ('tooltip' in slider) {
			let styles = slider.styles ?? '';
			styles += `\n.tooltip {\n  display: {{ "initial" if render(${slider.tooltip}) else "none" }};\n}`;
			slider.styles = (slider.styles ?? '' + styles).trim();
			updateSlider = true;
		}
		if ('slider_range' in updatedConfig) {
			slider.range = updatedConfig.slider_range as [number, number];
			delete updatedConfig.slider_range;
			updateSlider = true;
		}
		if ('slider_step' in updatedConfig) {
			slider.step = updatedConfig.slider_step as number;
			delete updatedConfig.slider_step;
			updateSlider = true;
		}
		if ('slider_attribute' in updatedConfig) {
			slider.value_attribute = updatedConfig.slider_attribute as string;
			delete updatedConfig.slider_attribute;
			updateSlider = true;
		}
		if ('enable_slider_feedback' in updatedConfig) {
			slider.haptics = updatedConfig.enable_slider_feedback as boolean;
			delete updatedConfig.enable_slider_feedback;
			updateSlider = true;
		}
		if ('slider_haptics' in updatedConfig) {
			slider.haptics = updatedConfig.slider_haptics as boolean;
			delete updatedConfig.slider_haptics;
			updateSlider = true;
		}
		if ('slider_id' in updatedConfig) {
			slider.entity_id =
				slider.entity_id ??
				(updatedConfig.slider_id as string) ??
				config.media_player_id ??
				'';
			const tapAction =
				slider.tap_action ??
				defaultKeys.filter(
					(defaultKey) => defaultKey.name == 'slider',
				)[0].tap_action;
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
			updateSlider = true;
		}
		if (updateSlider) {
			const defaultSlider = defaultKeys.filter(
				(defaultKey) => defaultKey.name == 'slider',
			)[0];
			if (sliderIndex > -1) {
				customActions[sliderIndex] = {
					...structuredClone(defaultSlider),
					...slider,
				};
			} else {
				customActions.push({
					...structuredClone(defaultSlider),
					...slider,
				});
			}
		}

		const touchpadIndex = customActions.findIndex(
			(customAction) => customAction.name == 'touchpad',
		);
		const touchpad = customActions[touchpadIndex] ?? {
			type: 'touchpad',
			name: 'touchpad',
		};
		let updateTouchpad = false;
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
			touchpad.styles = (styles + (touchpad.styles ?? '')).trim();
			delete updatedConfig['touchpad_style' as keyof IConfig];
			updateTouchpad = true;
		}
		if ('touchpad_height' in updatedConfig) {
			let styles = touchpad.styles ?? '';
			styles += `\ntoucharea {\n  height: ${
				(updatedConfig as Record<string, string>)['touchpad_height']
			};\n}`;
			touchpad.styles = (styles + (touchpad.styles ?? '')).trim();
			delete (updatedConfig as Record<string, string>)['touchpad_height'];
			updateTouchpad = true;
		}
		if ('enable_touchpad_feedback' in updatedConfig) {
			touchpad.haptics = (
				updatedConfig as Record<string, boolean>
			).enable_touchpad_feedback;
			delete (updatedConfig as Record<string, boolean>)
				.enable_touchpad_feedback;
			updateTouchpad = true;
		}
		if ('touchpad_haptics' in updatedConfig) {
			touchpad.haptics = (
				updatedConfig as Record<string, boolean>
			).touchpad_haptics;
			delete (updatedConfig as Record<string, boolean>).touchpad_haptics;
			updateTouchpad = true;
		}
		if ('enable_double_click' in updatedConfig) {
			touchpad.double_tap_action = {
				action: 'key',
				key: (updatedConfig['double_click_keycode' as keyof IConfig] ??
					'BACK') as string,
			};
			delete updatedConfig.enable_double_click;
			delete updatedConfig['double_click_keycode' as keyof IConfig];
			updateTouchpad = true;
		}
		if ('long_click_keycode' in updatedConfig) {
			touchpad.hold_action = {
				action: 'key',
				key: (updatedConfig.long_click_keycode ??
					'DPAD_CENTER') as string,
			};
			updateTouchpad = true;
		}
		const defaultTouchpad = defaultKeys.filter(
			(defaultKey) => defaultKey.name == 'touchpad',
		)[0];
		if (updatedConfig.rows.toString().includes('touchpad')) {
			const centerCustomAction = customActions.filter(
				(customAction) => customAction.name == 'center',
			)[0];
			if (
				centerCustomAction &&
				updatedConfig.rows.toString().includes('touchpad')
			) {
				for (const actionType of ActionTypes) {
					if (!touchpad[actionType]) {
						if (centerCustomAction[actionType]) {
							touchpad[actionType] =
								centerCustomAction[actionType];
						} else if (defaultTouchpad[actionType]) {
							touchpad[actionType] = defaultTouchpad[actionType];
						}
					}
				}
				updateTouchpad = true;
			}
			for (const direction of DirectionActions) {
				const customAction = customActions.filter(
					(customAction) => customAction.name == direction,
				)[0];
				if (
					!touchpad[direction] &&
					customAction &&
					updatedConfig.rows.toString().includes('touchpad')
				) {
					touchpad[direction] = customAction;
					updateTouchpad = true;
				}
			}
		}
		if (updateTouchpad) {
			for (const direction of DirectionActions) {
				if (!touchpad[direction]) {
					touchpad[direction] = structuredClone(
						defaultTouchpad[direction] ?? {},
					);
					delete touchpad[direction]?.['type' as keyof IBasicActions];
				}
			}
			if (touchpadIndex > -1) {
				customActions[touchpadIndex] = {
					...structuredClone(defaultTouchpad),
					...touchpad,
				};
			} else {
				customActions.push({
					...structuredClone(defaultTouchpad),
					...touchpad,
				});
			}
		}

		for (const [i, entry] of customActions.entries()) {
			const updatedEntry = this.updateDeprecatedActionFields(entry);
			for (const direction of DirectionActions) {
				if (updatedEntry[direction]) {
					updatedEntry[direction] = this.updateDeprecatedActionFields(
						updatedEntry[direction] as IElementConfig,
					);
				}
			}
			customActions[i] = updatedEntry;
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
			updatedConfig.styles = (
				styles + (updatedConfig.styles ?? '')
			).trim();
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
			updatedConfig.button_styles = (
				styles + (updatedConfig.styles ?? '')
			).trim();
			delete updatedConfig['button_style' as keyof IConfig];
		}

		// Convert row styles object to styles string
		if (updatedConfig['row_styles' as keyof IConfig]) {
			let styles = updatedConfig.styles ?? '';
			const rowStyles = updatedConfig[
				'row_styles' as keyof IConfig
			] as unknown as Record<string, Record<string, string>>;
			for (const style in rowStyles) {
				styles += `\n#${style} {`;
				for (const field in rowStyles[style]) {
					styles += `\n  ${field}: ${rowStyles[style][field]};`;
				}
				styles += '\n}';
			}
			updatedConfig.styles = (updatedConfig.styles ?? '' + styles).trim();
			delete updatedConfig['row_styles' as keyof IConfig];
		}

		updatedConfig.custom_actions = customActions;
		return updatedConfig;
	}

	updateDeprecatedActionFields(entry: IElementConfig) {
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
						if (action.key) {
							action.action = 'key';
						} else if (action.source) {
							action.action = 'source';
						} else if (action.perform_action) {
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
			customAction.styles = (styles + (customAction.styles ?? '')).trim();
			delete customAction['style' as keyof IElementConfig];
		}

		return customAction;
	}

	updateDeprecatedTemplateFields(config: IConfig) {
		const customActions = config.custom_actions ?? [];
		for (const [i, entry] of customActions.entries()) {
			if ('template' in entry) {
				const templateActions =
					config.custom_actions?.filter(
						(customActions) =>
							entry['template' as keyof IElementConfig] ==
							customActions.name,
					)[0] ??
					this.DEFAULT_ACTIONS.filter(
						(defaultActions) =>
							entry['template' as keyof IElementConfig] ==
							defaultActions.name,
					)[0] ??
					{};
				const updatedEntry = mergeDeep(
					structuredClone(templateActions),
					entry,
				) as IElementConfig;
				delete updatedEntry['template' as keyof IElementConfig];
				customActions[i] = updatedEntry;
			}
		}
		config.custom_actions = customActions;
		return config;
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

			.copy-icon,
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
			.custom-icon-picked {
				position: absolute;
				padding: 16px;
				pointer-events: none;
			}
		`;
	}
}
