import { customElement, property } from 'lit/decorators.js';

import { KeyboardMode } from '../models';
import { RemoteButton } from './remote-button';

@customElement('base-keyboard-element')
export class BaseKeyboardElement extends RemoteButton {
	@property({ attribute: false }) keyboardId!: string;
	@property({ attribute: false }) keyboardMode: KeyboardMode = 'ANDROID TV';
}
