import { version } from '../package.json';

import { LitElement, TemplateResult, html, css } from 'lit';
import { property } from 'lit/decorators.js';

import { HomeAssistant, applyThemesOnElement } from 'custom-card-helpers';

import {
	IConfig,
	IKey,
	ISource,
	ICustomAction,
	IAction,
	defaultKeys,
	defaultSources,
	IData,
} from './models';

import './classes/remote-button';
import './classes/remote-keyboard';
import './classes/remote-textbox';
import './classes/remote-search';
import './classes/remote-touchpad';
import './classes/remote-slider';
import './classes/remote-slider-old';

console.info(
	`%c ANDROID-TV-CARD v${version}`,
	'color: white; font-weight: bold; background: green',
);

class AndroidTVCard extends LitElement {
	customKeys: Record<string, IKey | ICustomAction>;
	customSources: Record<string, ISource | ICustomAction>;
	customIcons: Record<string, string>;

	@property({ attribute: false }) hass!: HomeAssistant;
	@property({ attribute: false }) private config!: IConfig;

	constructor() {
		super();
		this.customKeys = {};
		this.customSources = {};
		this.customIcons = {};
	}

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
		config = JSON.parse(JSON.stringify(config));
		config = { theme: 'default', ...config };

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
		if ('touchpad_height' in config && !('touchpad_style' in config)) {
			config.touchpad_style = {
				height: (config as Record<string, string>).touchpad_height,
			};
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
					ICustomAction
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

	getInfo(action: string): IAction {
		return (
			this.customKeys[action] ||
			this.customSources[action] ||
			defaultKeys[action] ||
			defaultSources[action] ||
			{}
		);
	}

	buildRow(content: TemplateResult[]): TemplateResult {
		return html` <div class="row">${content}</div> `;
	}

	buildColumn(content: TemplateResult[]): TemplateResult {
		return html` <div class="column">${content}</div> `;
	}

	buildVolumeButtons(): TemplateResult[] {
		const volumeUpInfo = this.getInfo('volume_up');
		const volumeDownInfo = this.getInfo('volume_down');
		const volumeMuteInfo = this.getInfo('volume_mute');

		return [
			html`<remote-button
				.hass=${this.hass}
				.hapticEnabled=${this.config.enable_button_feedback || true}
				.remoteId=${this.config.remote_id}
				.info=${volumeUpInfo}
				.actionKey="volume_up"
				.customIcon=${this.customIcons[volumeUpInfo.icon ?? ''] ?? ''}
			/>`,
			html`<remote-button
				.hass=${this.hass}
				.hapticEnabled=${this.config.enable_button_feedback || true}
				.remoteId=${this.config.remote_id}
				.info=${volumeDownInfo}
				.actionKey="volume_down"
				.customIcon=${this.customIcons[volumeDownInfo.icon ?? ''] ?? ''}
			/>`,
			html`<remote-button
				.hass=${this.hass}
				.hapticEnabled=${this.config.enable_button_feedback || true}
				.remoteId=${this.config.remote_id}
				.info=${volumeMuteInfo}
				.actionKey="volume_mute"
				.customIcon=${this.customIcons[volumeMuteInfo.icon ?? ''] ?? ''}
			/>`,
		];
	}

	buildVolumeSliderOld(): TemplateResult {
		const sliderConfig = (this.config as Record<string, string>)
			.slider_config;

		return html`<remote-slider-old
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_slider_feedback}
			.mediaPlayerId=${this.config.media_player_id}
			.sliderConfig=${sliderConfig}
		/>`;
	}

	buildVolumeSlider(): TemplateResult {
		const value = this.hass.states[this.config.media_player_id!].state;
		const range = this.config.slider_range ?? [0, 1];

		return html`<remote-slider
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_slider_feedback}
			.mediaPlayerId=${this.config.media_player_id}
			.value=${value}
			.range=${range}
			.elementStyle=${this.config.slider_style}
		/>`;
	}

	buildNavigationButtons(): TemplateResult[] {
		const upInfo = this.getInfo('up');
		const leftInfo = this.getInfo('left');
		const centerInfo = this.getInfo('center');
		const rightInfo = this.getInfo('right');
		const downInfo = this.getInfo('down');
		return [
			this.buildRow([
				html`<remote-button
					.hass=${this.hass}
					.hapticEnabled=${this.config.enable_button_feedback || true}
					.remoteId=${this.config.remote_id}
					.info=${upInfo}
					.actionKey="up"
					.customIcon=${this.customIcons[upInfo.icon ?? ''] ?? ''}
				/>`,
			]),
			this.buildRow([
				html`<remote-button
					.hass=${this.hass}
					.hapticEnabled=${this.config.enable_button_feedback || true}
					.remoteId=${this.config.remote_id}
					.info=${leftInfo}
					.actionKey="left"
					.customIcon=${this.customIcons[leftInfo.icon ?? ''] ?? ''}
				/>`,
				html`<remote-button
					.hass=${this.hass}
					.hapticEnabled=${this.config.enable_button_feedback || true}
					.remoteId=${this.config.remote_id}
					.info=${centerInfo}
					.actionKey="center"
					.customIcon=${this.customIcons[centerInfo.icon ?? ''] ?? ''}
				/>`,
				html`<remote-button
					.hass=${this.hass}
					.hapticEnabled=${this.config.enable_button_feedback || true}
					.remoteId=${this.config.remote_id}
					.info=${rightInfo}
					.actionKey="right"
					.customIcon=${this.customIcons[rightInfo.icon ?? ''] ?? ''}
				/>`,
			]),
			this.buildRow([
				html`<remote-button
					.hass=${this.hass}
					.hapticEnabled=${this.config.enable_button_feedback || true}
					.remoteId=${this.config.remote_id}
					.info=${downInfo}
					.actionKey="down"
					.customIcon=${this.customIcons[downInfo.icon ?? ''] ?? ''}
				/>`,
			]),
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
			.elementStyle=${this.config.touchpad_style}
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_touchpad_feedback || true}
			.remoteId=${this.config.remote_id}
			.enableDoubleClick=${this.config.enable_double_click || false}
			.info=${info}
		/>`;
	}

	buildKeyboard(): TemplateResult {
		const info = this.getInfo('keyboard');

		return html`<remote-keyboard
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback || true}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="keyboard"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
		/>`;
	}

	buildTextbox(): TemplateResult {
		const info = this.getInfo('textbox');

		return html`<remote-textbox
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback || true}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="textbox"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
		/>`;
	}

	buildSearch(): TemplateResult {
		const info = this.getInfo('search');

		return html`<remote-search
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback || true}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="search"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
			.keyboardId=${this.config.keyboard_id}
			.keyboardMode=${this.config.keyboard_mode}
		/>`;
	}

	buildButton(element_name: string): TemplateResult {
		const info = this.getInfo(element_name);

		return html`<remote-button
			.hass=${this.hass}
			.hapticEnabled=${this.config.enable_button_feedback || true}
			.remoteId=${this.config.remote_id}
			.info=${info}
			.actionKey="${element_name}"
			.customIcon=${this.customIcons[info.icon ?? ''] ?? ''}
		/>`;
	}

	buildElements(row: (string | string[])[], isColumn: boolean = false) {
		if (typeof row == 'string') {
			row = [row];
		}
		const row_content: TemplateResult[] = [];
		for (const element_name of row) {
			if (typeof element_name == 'object' && element_name != null) {
				row_content.push(this.buildElements(element_name, !isColumn));
			} else {
				switch (element_name) {
					case 'volume_buttons': {
						row_content.push(...this.buildVolumeButtons());
						break;
					}
					case 'volume_slider': {
						row_content.push(this.buildVolumeSlider());
						break;
					}
					case 'volume_slider_old': {
						row_content.push(this.buildVolumeSliderOld());
						break;
					}

					case 'navigation_buttons': {
						row_content.push(
							this.buildColumn(this.buildNavigationButtons()),
						);
						break;
					}
					case 'navigation_touchpad': {
						row_content.push(this.buildTouchpad());
						break;
					}

					case 'keyboard': {
						row_content.push(this.buildKeyboard());
						break;
					}

					case 'textbox': {
						row_content.push(this.buildTextbox());
						break;
					}

					case 'search': {
						row_content.push(this.buildSearch());
						break;
					}

					default: {
						row_content.push(this.buildButton(element_name));
						break;
					}
				}
			}
		}
		return isColumn
			? this.buildColumn(row_content)
			: this.buildRow(row_content);
	}

	render() {
		if (!this.config || !this.hass) {
			return html``;
		}

		const content: TemplateResult[] = [];

		for (const row of this.config.rows!) {
			const row_content = this.buildElements(row as string[]);
			content.push(row_content);
		}

		return html`<ha-card .header="${this.config.title}"
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
				width: 48px;
				height: 48px;
				position: relative;
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
