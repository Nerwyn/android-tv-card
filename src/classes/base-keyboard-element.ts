import { TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Platform } from '../models';
import { RemoteButton } from './remote-button';

@customElement('base-keyboard-element')
export class BaseKeyboardElement extends RemoteButton {
	@property({ attribute: false }) keyboardId!: string;
	@property({ attribute: false }) keyboardMode!: Platform;
	_keyboardMode: string = '';
	_keyboardId: string = '';

	onStart(_e: MouseEvent | TouchEvent) {
		this.swiping = false;
	}

	getRokuId(
		entityId: string = this._keyboardId,
		domain: 'remote' | 'media_player' = 'remote',
	) {
		if (entityId.split('.')[0] != domain) {
			switch (domain) {
				case 'media_player':
					return this.renderTemplate(
						this.mediaPlayerId as string,
					) as string;
					break;
				case 'remote':
				default:
					return this.renderTemplate(
						this.remoteId as string,
					) as string;
			}
		}
	}

	render(inputTemplate?: TemplateResult<1>) {
		this._keyboardMode = (
			this.renderTemplate(this.keyboardMode) as string
		).toUpperCase();
		this._keyboardId = this.renderTemplate(this.keyboardId) as string;

		return super.render(inputTemplate);
	}
}
