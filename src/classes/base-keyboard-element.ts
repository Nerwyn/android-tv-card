import { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { KeyboardMode } from '../models';
import { RemoteButton } from './remote-button';

@customElement('base-keyboard-element')
export class BaseKeyboardElement extends RemoteButton {
	@property({ attribute: false }) _keyboardId!: string;
	@property({ attribute: false }) _keyboardMode!: KeyboardMode;
	keyboardMode: string = '';
	keyboardId: string = '';

	onStart(_e: MouseEvent | TouchEvent) {
		this.swiping = false;
	}

	getRokuId(domain: 'remote' | 'media_player' = 'remote') {
		let keyboardId = this.keyboardId;
		if (keyboardId.split('.')[0] != domain) {
			switch (domain) {
				case 'media_player':
					keyboardId = this.renderTemplate(
						this.mediaPlayerId as string,
					) as string;
					break;
				case 'remote':
				default:
					keyboardId = this.renderTemplate(
						this.remoteId as string,
					) as string;
			}
		}
		return keyboardId;
	}

	render(inputTemplate?: TemplateResult<1>) {
		this.keyboardMode = (
			this.renderTemplate(this._keyboardMode) as string
		).toUpperCase();
		this.keyboardId = this.renderTemplate(this._keyboardId) as string;

		return super.render(inputTemplate);
	}
}
