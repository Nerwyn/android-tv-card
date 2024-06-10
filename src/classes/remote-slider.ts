import { CSSResult, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { StyleInfo, styleMap } from 'lit/directives/style-map.js';

import { BaseRemoteElement } from './base-remote-element';

@customElement('remote-slider')
export class RemoteSlider extends BaseRemoteElement {
	@state() showTooltip: boolean = false;
	@state() thumbOffset: number = 0;
	@state() sliderOn: boolean = true;
	@state() currentValue = this.value;

	oldValue?: number;
	newValue?: number;
	speed: number = 0.02;
	range: [number, number] = [0, 1];
	step: number = 0.01;
	intervalId?: ReturnType<typeof setTimeout>;

	vertical: boolean = false;
	thumbWidth: number = 50;

	onInput(e: InputEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.swiping) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.value = slider.value;

			this.fireHapticEvent('selection');

			const start = parseFloat(
				(this.oldValue as unknown as string) ?? this.value ?? '0',
			);
			const end = parseFloat(slider.value ?? start);
			this.newValue = end;

			this.currentValue = start;
			this.setThumbOffset();
			this.showTooltip = true;

			if (end > this.range[0]) {
				this.sliderOn = true;
			}

			clearInterval(this.intervalId);
			this.intervalId = undefined;
			let i = start;
			if (start > end) {
				this.intervalId = setInterval(() => {
					i -= this.speed;
					this.currentValue = i;
					this.setThumbOffset();

					if (end >= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setThumbOffset();
					}
				}, 1);
			} else if (start < end) {
				this.sliderOn = true;
				this.intervalId = setInterval(() => {
					i += this.speed;
					this.currentValue = i;
					this.setThumbOffset();

					if (end <= i) {
						clearInterval(this.intervalId);
						this.intervalId = undefined;
						this.currentValue = end;
						this.setThumbOffset();
					}
				}, 1);
			} else {
				this.currentValue = end;
			}

			this.oldValue = end;
		} else {
			if (this.value == undefined) {
				this.getValueFromHass = true;
			}
			this.setValue();
			this.currentValue = this.value ?? 0;
			this.setThumbOffset();
			this.showTooltip = false;
		}
	}

	onStart(e: MouseEvent | TouchEvent) {
		const slider = e.currentTarget as HTMLInputElement;

		if (!this.swiping) {
			this.getValueFromHass = false;
			clearTimeout(this.getValueFromHassTimer);
			this.currentValue = slider.value;
			this.value = slider.value;
			this.setThumbOffset();
			this.showTooltip = true;
			this.sliderOn = true;
		}
	}

	onEnd(_e: MouseEvent | TouchEvent) {
		this.setThumbOffset();
		this.showTooltip = false;
		this.setValue();

		if (!this.swiping) {
			if (!this.newValue && this.newValue != 0) {
				this.newValue = Number(this.value);
			}
			if (!this.precision) {
				this.newValue = Math.trunc(this.newValue);
			}
			this.value = this.newValue;

			this.fireHapticEvent('light');
			this.sendAction('tap_action');
		} else {
			this.getValueFromHass = true;
			this.setValue();
			this.currentValue = this.value ?? 0;
			this.setThumbOffset();
			this.setSliderState(this.currentValue as number);
		}

		this.endAction();
		this.resetGetValueFromHass();
	}

	onMove(e: MouseEvent | TouchEvent) {
		if (!this.vertical) {
			let currentX: number;
			if ('clientX' in e) {
				currentX = e.clientX;
			} else {
				currentX = e.touches[0].clientX;
			}
			let currentY: number;
			if ('clientY' in e) {
				currentY = e.clientY;
			} else {
				currentY = e.touches[0].clientY;
			}

			if (this.initialY == undefined) {
				this.initialY = currentY;
			}
			if (this.initialX == undefined) {
				this.initialX = currentX;
			} else if (
				Math.abs(currentX - this.initialX) <
				Math.abs(currentY - this.initialY) - 50
			) {
				this.swiping = true;
				this.getValueFromHass = true;
				this.setValue();
				this.currentValue = this.value ?? 0;
				this.setThumbOffset();
				this.showTooltip = false;
				this.setSliderState(this.value as number);
			}
		}
	}

	setValue() {
		super.setValue();
		if (this.getValueFromHass) {
			this.oldValue = Number(this.value);
			if (this.newValue == undefined) {
				this.newValue = Number(this.value);
			}
		}
	}

	setThumbOffset() {
		const width = this.vertical ? this.offsetHeight : this.offsetWidth;
		const maxOffset = (width - this.thumbWidth) / 2;
		const value = Number(
			this.getValueFromHass ? this.value : this.currentValue,
		);
		this.thumbOffset = Math.min(
			Math.max(
				Math.round(
					((width - this.thumbWidth) /
						(this.range[1] - this.range[0])) *
						(value - (this.range[0] + this.range[1]) / 2),
				),
				-1 * maxOffset,
			),
			maxOffset,
		);
	}

	setSliderState(value: number) {
		this.sliderOn =
			!(
				value == undefined ||
				this.hass.states[this.entityId as string].state == 'off' ||
				(this.entityId?.startsWith('timer.') &&
					this.hass.states[this.entityId as string].state == 'idle')
			) || (Number(value) as number) > this.range[0];
	}

	resetGetValueFromHass() {
		const valueFromHassDelay = this.renderTemplate(
			this.actions.value_from_hass_delay ?? 1000,
		) as number;
		this.getValueFromHassTimer = setTimeout(
			() => (this.getValueFromHass = true),
			valueFromHassDelay,
		);
	}

	endAction() {
		clearInterval(this.valueUpdateInterval);
		this.valueUpdateInterval = undefined;

		super.endAction();
	}

	buildBackground(context: object) {
		const style: StyleInfo = {};
		if (this.vertical) {
			style['transform'] = 'rotateZ(270deg)';
			style['width'] = this.actions.style?.height ?? '50px';
		}
		return html`<div
			class="background"
			style=${styleMap(this.buildStyle(style, context))}
		></div>`;
	}

	buildTooltip(context: object) {
		const style: StyleInfo = this.buildStyle(
			{
				'--tooltip-label': `"${
					this.actions?.style?.['--tooltip-label'] ?? '{{ value }}'
				}"`,
				'--tooltip-transform':
					this.actions?.style?.['--tooltip-transform'] ??
					(this.vertical
						? 'translate(-50px, calc(-1 * var(--thumb-offset)))'
						: 'translate(var(--thumb-offset), -40px)'),
				'--tooltip-display':
					this.actions?.style?.['--tooltip-display'] ?? 'initial',
			},
			context,
		);

		// Deprecated tooltip hide/show field
		if ('tooltip' in this.actions) {
			style['--tooltip-display'] = this.renderTemplate(
				this.actions.tooltip as unknown as string,
				context,
			)
				? 'initial'
				: 'none';
		}

		// prettier-ignore
		return html`
			<div
				class="tooltip ${this.showTooltip ? 'faded-in' : 'faded-out'}"
				style=${styleMap(style)}
			></div>
		`;
	}

	buildSlider(context: object) {
		const value = context['value' as keyof typeof context] as number;
		this.setSliderState(value);

		const style: StyleInfo = {};
		if (
			this.renderTemplate(
				this.actions.tap_action?.action as string,
				context,
			) == 'none'
		) {
			style['pointer-events'] = 'none';
		}
		if (this.vertical) {
			style['transform'] = 'rotateZ(270deg)';
			style['width'] = this.actions.style?.height ?? '50px';
		}

		return html`
			<input
				type="range"
				class="${this.sliderOn ? 'slider' : 'slider off'}"
				style=${styleMap(this.buildStyle(style, context))}
				min="${this.range[0]}"
				max="${this.range[1]}"
				step=${this.step}
				value="${value}"
				.value="${value}"
				@input=${this.onInput}
				@mousedown=${this.onMouseDown}
				@mouseup=${this.onMouseUp}
				@mousemove=${this.onMouseMove}
				@touchstart=${this.onTouchStart}
				@touchend=${this.onTouchEnd}
				@touchmove=${this.onTouchMove}
				@contextmenu=${this.onContextMenu}
			/>
		`;
	}

	render() {
		this.setValue();
		if (this.getValueFromHass) {
			this.currentValue = this.value;
		}

		if (this.actions.range) {
			this.range[0] = parseFloat(
				this.renderTemplate(
					this.actions.range[0] as unknown as string,
				) as string,
			);
			this.range[1] = parseFloat(
				this.renderTemplate(
					this.actions.range[1] as unknown as string,
				) as string,
			);
		}

		this.speed = (this.range[1] - this.range[0]) / 50;

		if (this.actions.step) {
			this.step = Number(this.renderTemplate(this.actions.step));
		} else {
			this.step = (this.range[1] - this.range[0]) / 100;
		}
		const splitStep = this.step.toString().split('.');
		if (splitStep.length > 1) {
			this.precision = splitStep[1].length;
		} else {
			this.precision = 0;
		}

		const context = {
			VALUE: this.getValueFromHass ? this.value : this.currentValue,
			value: this.getValueFromHass ? this.value : this.currentValue,
		};

		const style = this.buildStyle(this.actions.style ?? {}, context);
		this.vertical =
			this.renderTemplate(this.actions.vertical ?? false, context) ==
			true;
		if (this.vertical) {
			if (style.width) {
				this.style.setProperty('width', style.width as string);
			} else {
				this.style.width = '50px';
			}
			if (style.height) {
				this.style.setProperty('height', style.height as string);
			}
		}
		this.style.setProperty('--thumb-offset', `${this.thumbOffset}px`);
		this.thumbWidth = parseInt(
			((style['--thumb-width'] as string) ?? '50').replace('px', ''),
		);

		if (!style['--icon-transform']) {
			if (this.vertical) {
				style['--icon-transform'] =
					'translateY(calc(-1 * var(--thumb-offset)))';
			} else {
				style['--icon-transform'] = 'translateX(var(--thumb-offset))';
			}
		}

		if (
			(this.vertical && this.offsetHeight) ||
			(!this.vertical && this.offsetWidth)
		) {
			this.setThumbOffset();
		}

		const ro = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const cr = entry.contentRect;
				console.log('Element:', entry.target);
				console.log(`Element size: ${cr.width}px x ${cr.height}px`);
				console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
			}
		});
		ro.observe(this);

		return html`
			${this.buildTooltip(context)}
			<div class="container" style=${styleMap(style)}>
				${this.buildBackground(context)}${this.buildSlider(context)}
				${this.buildIcon(this.actions.icon ?? '', context)}
			</div>
		`;
	}

	updated() {
		const interval = setInterval(() => this.setThumbOffset(), 100);
		setTimeout(() => clearInterval(interval), 2000);
	}

	static get styles(): CSSResult | CSSResult[] {
		return [
			super.styles as CSSResult,
			css`
				:host {
					display: flex;
					flex-flow: column;
					flex-grow: 0;
					place-content: center space-evenly;
					align-items: center;
					position: relative;
					height: fit-content;
					width: 100%;
					border: none;
					border-radius: 25px;
					padding: 0px;
					box-sizing: border-box;
					line-height: 0;
					outline: 0px;
					overflow: visible;
					font-size: inherit;
					color: inherit;
					pointer-events: none;
				}

				.container {
					all: inherit;
					overflow: hidden;
					height: 50px;
					color: var(--background, var(--primary-background-color));
					--color: var(--primary-text-color);
					--mdc-icon-size: var(--size, 32px);
				}

				.background {
					position: absolute;
					width: inherit;
					height: var(--background-height, 100%);
					background: var(
						--background,
						var(--primary-background-color)
					);
				}

				.slider,
				.off {
					position: absolute;
					appearance: none;
					-webkit-appearance: none;
					-moz-appearance: none;
					pointer-events: all;
					height: 100%;
					width: inherit;
					background: none;
					overflow: hidden;
				}

				.slider::-webkit-slider-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: 50px;
					width: var(--thumb-width, 50px);
					cursor: pointer;
					background: var(--color);
					border-color: rgb(0, 0, 0, 0);
					z-index: 1;
					box-shadow: var(
						--thumb-box-shadow,
						calc(-100vw - (var(--thumb-width, 50px) / 2)) 0 0 100vw
							var(--color)
					);
					border-radius: var(--thumb-border-radius, 50px);
				}
				.slider::-moz-range-thumb {
					appearance: none;
					-webkit-appearance: none;
					height: 50px;
					width: var(--thumb-width, 50px);
					cursor: pointer;
					background: var(--color);
					border-color: rgb(0, 0, 0, 0);
					z-index: 1;
					box-shadow: var(
						--thumb-box-shadow,
						calc(-100vw - (var(--thumb-width, 50px) / 2)) 0 0 100vw
							var(--color)
					);
					border-radius: var(--thumb-border-radius, 50px);
				}

				.off::-webkit-slider-thumb {
					visibility: hidden;
				}
				.off::-moz-range-thumb {
					visibility: hidden;
				}

				.tooltip {
					z-index: 3;
					background: var(--clear-background-color);
					color: var(--primary-text-color);
					position: absolute;
					border-radius: 0.8em;
					padding: 0.2em 0.4em;
					height: 20px;
					width: fit-content;
					line-height: 20px;
					transform: var(--tooltip-transform);
					display: var(--tooltip-display);
				}

				.faded-out {
					opacity: 0;
					transition:
						opacity 180ms ease-in-out 0s,
						left 180ms ease-in-out 0s,
						bottom 180ms ease-in-out 0s;
				}
				.faded-in {
					opacity: 1;
					transition: opacity 540ms ease-in-out 0s;
				}
				.tooltip::after {
					content: var(--tooltip-label);
				}
			`,
		];
	}
}
