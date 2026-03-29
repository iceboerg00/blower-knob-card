import { LitElement, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles } from "./styles";
import { BlowerKnobCardConfig, EntityDomain, HassEntity, HomeAssistant } from "./types";
import { assertEntity, clamp, computeRange, formatState, getDomain, getNumeric } from "./helpers";

@customElement("blower-knob-card")
export class BlowerKnobCard extends LitElement {
  static styles = cardStyles;

  @state() private _config!: BlowerKnobCardConfig;
  @state() private _entity?: HassEntity;
  @state() private _domain: EntityDomain = "fan";
  @state() private _value = 0;
  @state() private _progressDeg = 0;

  public get hass(): HomeAssistant | undefined {
    return (this as any)._hass;
  }

  public setConfig(config: Partial<BlowerKnobCardConfig>): void {
    assertEntity(config);
    this._config = {
      show_state: true,
      show_percentage: true,
      show_buttons: true,
      show_secondary: true,
      ...config,
    };
  }

  getCardSize(): number {
    return 3;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return changedProps.has("hass") || changedProps.has("_config") || changedProps.has("_value");
  }

  set hassObj(hass: HomeAssistant) {
    this.hass = hass;
  }

  public set hass(hass: HomeAssistant | undefined) {
    const oldHass = this.hass;
    (this as any)._hass = hass;
    if (!hass || !this._config) return;
    const entity = hass.states[this._config.entity];
    this._entity = entity;
    this._domain = getDomain(this._config, entity);
    const { min, max } = computeRange(entity, this._domain, this._config);
    let raw: number | undefined;
    if (this._domain === "fan") {
      raw = getNumeric(entity?.attributes?.percentage);
      if (raw === undefined) raw = entity?.state === "on" ? max : min;
    } else {
      raw = getNumeric(entity?.state);
    }
    this._value = clamp(raw ?? min, min, max);
    this._progressDeg = this.valueToDeg(this._value, min, max);
    this.requestUpdate("hass", oldHass);
  }

  private valueToDeg(value: number, min: number, max: number): number {
    const percent = (value - min) / (max - min || 1);
    return percent * 360;
  }

  private onDialPointer(ev: PointerEvent) {
    ev.preventDefault();
    const dial = this.shadowRoot?.querySelector(".dial") as HTMLElement | null;
    if (!dial || !this._entity) return;
    dial.setPointerCapture?.(ev.pointerId);
    const rect = dial.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const handleMove = (e: PointerEvent) => {
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // 0 at top
      if (angle < 0) angle += 360;
      const { min, max, step } = computeRange(this._entity, this._domain, this._config);
      const raw = min + (angle / 360) * (max - min);
      const stepped = Math.round(raw / step) * step;
      const next = clamp(stepped, min, max);
      this.updateValue(next);
    };

    const handleUp = () => {
      dial.releasePointerCapture?.(ev.pointerId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  }

  private async updateValue(next: number) {
    if (!this.hass || !this._entity) return;
    const { min, max } = computeRange(this._entity, this._domain, this._config);
    const value = clamp(next, min, max);
    this._value = value;
    this._progressDeg = this.valueToDeg(value, min, max);

    try {
      if (this._domain === "fan") {
        await this.hass.callService("fan", "set_percentage", {
          entity_id: this._entity.entity_id,
          percentage: value,
        });
      } else if (this._domain === "number") {
        await this.hass.callService("number", "set_value", {
          entity_id: this._entity.entity_id,
          value,
        });
      } else {
        await this.hass.callService("input_number", "set_value", {
          entity_id: this._entity.entity_id,
          value,
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("blower-knob-card: failed to set value", err);
    }
  }

  private async toggleFan(power: "on" | "off") {
    if (!this.hass || !this._entity) return;
    const service = power === "on" ? "turn_on" : "turn_off";
    await this.hass.callService("fan", service, { entity_id: this._entity.entity_id });
  }

  private adjust(delta: number) {
    const { min, max, step } = computeRange(this._entity, this._domain, this._config);
    const next = clamp(this._value + delta * step, min, max);
    this.updateValue(next);
  }

  private renderUnavailable() {
    return html`<div class="unavailable">Entity unavailable</div>`;
  }

  private renderButtons() {
    if (!this._config.show_buttons) return null;
    return html`
      <div class="row">
        <button class="secondary" @click=${() => this.adjust(-1)} aria-label="decrease">
          -
        </button>
        <button @click=${() => this.adjust(1)} aria-label="increase">
          +
        </button>
      </div>
    `;
  }

  private renderSecondary() {
    if (!this._config.show_secondary || this._domain !== "fan" || !this._entity) return null;
    const isOn = this._entity.state === "on";
    return html`
      <div class="controls">
        <div class="pill" @click=${() => this.toggleFan(isOn ? "off" : "on")}>
          <ha-icon icon=${isOn ? "mdi:power" : "mdi:power-off"}></ha-icon>
          <span>${isOn ? "Turn off" : "Turn on"}</span>
        </div>
      </div>
    `;
  }

  protected render() {
    if (!this._config) return null;
    const entity = this._entity;
    if (!entity) return this.renderUnavailable();

    const { min, max } = computeRange(entity, this._domain, this._config);
    const valueText = formatState(entity, this._domain, this._value);

    return html`
      <ha-card>
        <div class="header">
          ${this._config.icon
            ? html`<ha-icon .icon=${this._config.icon}></ha-icon>`
            : html`<ha-icon icon="mdi:fan"></ha-icon>`}
          <div class="title">
            <div class="name">${this._config.name ?? entity.attributes.friendly_name ?? entity.entity_id}</div>
            ${this._config.show_state ? html`<div class="state">${valueText}</div>` : null}
          </div>
        </div>

        <div class="knob">
          <div
            class="dial"
            style=${`--progress:${this._progressDeg}deg`}
            @pointerdown=${this.onDialPointer}
            role="slider"
            aria-valuemin=${min}
            aria-valuemax=${max}
            aria-valuenow=${this._value}
          >
            <div class="value">
              <div class="current">${this._value}</div>
              ${this._domain === "fan" && this._config.show_percentage
                ? html`<div class="unit">%</div>`
                : html`<div class="unit">${entity.attributes.unit_of_measurement ?? ""}</div>`}
            </div>
          </div>
        </div>

        ${this.renderButtons()} ${this.renderSecondary()}
      </ha-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "blower-knob-card": BlowerKnobCard;
  }
}

// Register with Home Assistant's custom card registry
if ((window as any).customCards) {
  (window as any).customCards.push({
    type: "blower-knob-card",
    name: "Blower Knob Card",
    description: "Circular blower control for fan/number/input_number with native-like knob UI.",
  });
} else {
  (window as any).customCards = [
    {
      type: "blower-knob-card",
      name: "Blower Knob Card",
      description: "Circular blower control for fan/number/input_number with native-like knob UI.",
    },
  ];
}
