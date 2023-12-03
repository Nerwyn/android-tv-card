import { version } from '../package.json';

import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import { HomeAssistant, applyThemesOnElement } from 'custom-card-helpers';

import {
	IConfig,
	IKey,
	ISource,
	IAction,
	defaultKeys,
	defaultSources,
	IData,
	IServiceCall,
} from './models';
import { renderTemplate } from './utils';

import './classes/remote-button';
import './classes/remote-keyboard';
import './classes/remote-textbox';
import './classes/remote-search';
import './classes/remote-touchpad';
import './classes/remote-slider';

console.info(
	`%c ANDROID-TV-CARD v${version}`,
	'color: white; font-weight: bold; background: green',
);

class AndroidTVCard extends LitElement {
	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) private config!: IConfig;

	customKeys: Record<string, IKey | IServiceCall> = {};
	customSources: Record<string, ISource | IServiceCall> = {};
	customIcons: Record<string, string> = {};

	static get properties() {
		return {
			hass: {},
			config: {},
		};
	}

	static getStubConfig() {
		return {
			type: 'custom:android-tv-card',
			rows: [],
		};
	}

	getCardSize() {
		let numRows = this.config.rows!.length;
		if ('title' in this.config) {
			numRows += 1;
		}
		return numRows;
	}

	async setConfig(config: IConfig) {
		if (!config) {
			throw new Error('Invalid configuration');
		}
		config = structuredClone(config);
		config = { theme: 'default', ...config };

		// Set toggles to default values if not provided
		config = this.setToggles(config);

		// Legacy config upgrades
		config = this.updateDeprecatedKeys(config);
		config = this.convertToRowsArray(config);
		config = this.combineServiceFields(config);

		this.customKeys = config.custom_keys || {};
		this.customSources = config.custom_sources || {};
		this.customIcons = config.custom_icons || {};

		await window.loadCardHelpers();

		this.config = config;
	}

	updateDeprecatedKeys(config: IConfig) {
		if ('adb_id' in config && !('keyboard_id' in config)) {
			config.keyboard_id = (config as Record<string, string>).adb_id;
		}
		if ('media_player_id' in config && !('slider_id' in config)) {
			config.slider_id = (
				config as Record<string, string>
			).media_player_id;
		}
		if ('touchpad_height' in config) {
			if (!('touchpad_style' in config)) {
				config.touchpad_style = {};
			}
			if (!('height' in config.touchpad_style!)) {
				config.touchpad_style!.height = (
					config as Record<string, string>
				).touchpad_height;
			}
		}
		return config;
	}

	convertToRowsArray(config: IConfig) {
		if (!('rows' in config) || !(config.rows || []).length) {
			const rows: string[][] = [];
			const rowNames = Object.keys(config).filter((row) =>
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
			}
			config.rows = rows;
		}
		return config;
	}

	combineServiceFields(config: IConfig) {
		const customActionKeys = [
			'custom_keys',
			'custom_sources',
		] as (keyof IConfig)[];

		for (const key of customActionKeys) {
			if (key in config) {
				const customActions = config[key as keyof IConfig] as Record<
					string,
					IAction
				>;
				for (const name in customActions) {
					const customAction = customActions[name];
					if ('service' in customAction) {
						customAction.data = {
							...customAction.data,
							...(
								customAction as unknown as Record<
									string,
									IData | undefined
								>
							).service_data,
							...customAction.target,
						};
					}
				}
			}
		}

		return config;
	}

	setToggles(config: IConfig): IConfig {
		const toggles: IConfig = {
			enable_button_feedback: true,
			enable_touchpad_feedback: true,
			enable_double_click: false,
			enable_slider_feedback: true,
		};
		let toggle: keyof IConfig;
		for (toggle in toggles) {
			if (!(toggle in config)) {
				config[toggle] = toggles[toggle] as undefined;
			}
		}
		return config;
	}

	getInfo(action: string): IAction {
		const defaultInfo = defaultKeys[action] || defaultSources[action] || {};
		const info =
			this.customKeys[action] ||
			this.customSources[action] ||
			defaultInfo;

		if (!Object.keys(info).length) {
			if (action == 'slider') {
				return {
					service: 'media_player.volume_set',
					data: {
						entity_id: this.config.slider_id!,
						volume_level: 'VALUE',
					},
				};
			} else {
				return {} as IAction;
			}
		}

		if (!(info?.icon || info.svg_path)) {
			info.icon = defaultInfo?.icon ?? undefined;
			info.svg_path = defaultInfo?.svg_path ?? undefined;
		}
		return info;
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		return html` <div class="row">${content}</div> `;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		return html` <div class="column">${content}</div> `;
	}

	buildButton(elementName: string): TemplateResult {
		const info = this.getInfo(elementName);
		const style = {
			...this.config.button_style,
			...info.style,
		};

		if (!Object.keys(info).length) {
			return html`<div
				class="empty-button"
				style=${styleMap({ '--size': style['--size'] })}
			></div>`;
		}

		return html`<remote-button
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="${elementName}"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			._style=${style}
		/>`;
	}

	buildVolumeButtons(): TemplateResult[] {
		return [
			this.buildButton('volume_down'),
			this.buildButton('volume_mute'),
			this.buildButton('volume_up'),
		];
	}

	buildSlider(): TemplateResult {
		return html`<remote-slider
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_slider_feedback}
			.sliderId=${this.config.slider_id}
			.range=${this.config.slider_range ?? [0, 1]}
			.info=${this.getInfo('slider')}
			.sliderAttribute=${this.config.slider_attribute?.toLowerCase()}
			._style=${this.config.slider_style}
		/>`;
	}

	buildDPad(): TemplateResult[] {
		return [
			this.buildRow([this.buildButton('up')]),
			this.buildRow([
				this.buildButton('left'),
				this.buildButton('center'),
				this.buildButton('right'),
			]),
			this.buildRow([this.buildButton('down')]),
		];
	}

	buildTouchpad(): TemplateResult {
		const info = {
			up: this.getInfo('up'),
			down: this.getInfo('down'),
			left: this.getInfo('left'),
			right: this.getInfo('right'),
			center: this.getInfo('center'),
			double: this.getInfo(this.config.double_click_keycode ?? 'back'),
			long: this.getInfo(this.config.long_click_keycode ?? 'center'),
		};

		return html`<remote-touchpad
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_touchpad_feedback}
			.remoteId=${this.config.remote_id}
			.enableDoubleClick=${this.config.enable_double_click}
			.info=${info}
			._style=${this.config.touchpad_style}
		/>`;
	}

	buildKeyboard(): TemplateResult {
		const info = this.getInfo('keyboard');

		const style = {
			...this.config.button_style,
			...info.style,
		};
		return html`<remote-keyboard
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="keyboard"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
			._style=${style}
		/>`;
	}

	buildTextbox(): TemplateResult {
		const info = this.getInfo('textbox');

		const style = {
			...this.config.button_style,
			...info.style,
		};
		return html`<remote-textbox
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="textbox"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
			._style=${style}
		/>`;
	}

	buildSearch(): TemplateResult {
		const info = this.getInfo('search');

		const style = {
			...this.config.button_style,
			...info.style,
		};
		return html`<remote-search
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="search"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
			._style=${style}
		/>`;
	}

	buildElements(row: (string | string[])[], isColumn: boolean = false) {
		if (typeof row == 'string') {
			row = [row];
		}
		const rowContent: TemplateResult[] = [];
		for (let elementName of row) {
			elementName = renderTemplate(this.hass, elementName as string);
			if (typeof elementName == 'object' && elementName != null) {
				rowContent.push(this.buildElements(elementName, !isColumn));
			} else {
				switch (elementName) {
					case 'vol_buttons':
					case 'volume_buttons': {
						const volumeButtons = this.buildVolumeButtons();
						if (isColumn) {
							volumeButtons.reverse();
						}
						rowContent.push(...volumeButtons);
						break;
					}
					case 'slider':
					case 'volume_slider': {
						rowContent.push(this.buildSlider());
						break;
					}

					case 'dpad':
					case 'd_pad':
					case 'direction_pad':
					case 'nav_buttons':
					case 'navigation_buttons': {
						rowContent.push(this.buildColumn(this.buildDPad()));
						break;
					}
					case 'touchpad':
					case 'nav_touchpad':
					case 'navigation_touchpad': {
						rowContent.push(this.buildTouchpad());
						break;
					}

					case 'keyboard': {
						rowContent.push(this.buildKeyboard());
						break;
					}

					case 'textbox': {
						rowContent.push(this.buildTextbox());
						break;
					}

					case 'search': {
						rowContent.push(this.buildSearch());
						break;
					}

					default: {
						rowContent.push(this.buildButton(elementName));
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(rowContent)
			: this.buildRow(rowContent);
	}

	render() {
		if (!this.config || !this.hass) {
			return html``;
		}

		const content: TemplateResult[] = [];

		for (const row of this.config.rows!) {
			const rowContent = this.buildElements(row as string[]);
			content.push(rowContent);
		}

		return html`<ha-card
			.header="${renderTemplate(this.hass, this.config.title as string)}"
			>${content}</ha-card
		>`;
	}

	static get styles() {
		return css`
			ha-card {
				padding: 12px;
			}
			.row {
				display: flex;
				flex-wrap: nowrap;
				flex-direction: row;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				flex: 1;
				padding: 4px;
				gap: 8px;
				justify-content: space-evenly;
				align-items: center;
			}
			.column {
				display: flex;
				flex-wrap: nowrap;
				flex-direction: column;
				width: -moz-available;
				width: -webkit-fill-available;
				width: fill-available;
				flex: 1;
				padding: 4px;
				justify-content: space-evenly;
				align-items: center;
			}
			.empty-button {
				width: var(--size);
				height: var(--size);
				position: relative;
				--size: 48px;
			}
		`;
	}

	applyThemesOnElement(element: Element, themes: Themes, localTheme: string) {
		applyThemesOnElement(element, themes, localTheme);
	}
}

customElements.define('android-tv-card', AndroidTVCard);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'android-tv-card',
	name: 'Android TV Card',
	description: 'Remote for Android TV',
});
