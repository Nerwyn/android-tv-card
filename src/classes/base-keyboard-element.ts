import { customElement, property } from 'lit/decorators.js';

import { KeyboardMode } from '../models';
import { RemoteButton } from './remote-button';

@customElement('base-keyboard-element')
export class BaseKeyboardElement extends RemoteButton {
	@property({ attribute: false }) keyboardId!: string;
	@property({ attribute: false }) keyboardMode!: KeyboardMode;

	onStart(_e: MouseEvent | TouchEvent) {
		this.swiping = false;
	}

	getRokuId(domain: 'remote' | 'media_player' = 'remote') {
		let keyboardId = this.renderTemplate(this.keyboardId) as string;
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
}
