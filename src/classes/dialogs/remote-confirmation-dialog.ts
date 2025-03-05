import { css, CSSResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IDialog } from '../../models/interfaces';
import { BaseDialog } from './base-dialog';

@customElement('remote-confirmation-dialog')
export class ConfirmationDialog extends BaseDialog {
	@property() config!: IDialog;

	closeDialog() {
		this.dispatchEvent(
			new Event('dialog-close', {
				composed: true,
				bubbles: true,
			}),
		);
	}

	onCancel() {
		this.fireConfirmationEvent(false);
	}

	onOk() {
		this.fireConfirmationEvent(true);
	}

	fireConfirmationEvent(result: boolean) {
		const event = new Event('confirmation-result', {
			bubbles: true,
			composed: true,
		});
		event.detail = result;

		this.dispatchEvent(event);
		this.closeDialog();
	}

	render() {
		return html`
			<div class="title">
				${this.hass.localize(
					'ui.dialogs.generic.default_confirmation_title',
				)}
			</div>
			<div class="message">${this.config.text}</div>
			<div class="buttons">
				${this.buildDialogButton(
					this.hass.localize('ui.common.cancel'),
					this.onCancel,
				)}
				${this.buildDialogButton(
					this.hass.localize('ui.common.ok'),
					this.onOk,
				)}
			</div>
		`;
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				.title {
					font-size: 1.5em;
					font-weight: 400;
				}

				.message {
					font-size: 1rem;
					font-weight: var(
						--md-dialog-supporting-text-weight,
						var(
							--md-sys-typescale-body-medium-weight,
							var(--md-ref-typeface-weight-regular, 400)
						)
					);
					line-height: 1.5rem;
					padding: var(--dialog-content-padding, 24px) 0;
					padding-bottom: 8px;
					box-sizing: border-box;
				}

				.buttons {
					justify-content: flex-end;
					padding-top: 16px;
				}
			`,
		];
	}
}
