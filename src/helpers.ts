import { BlowerKnobCardConfig, EntityDomain, HassEntity } from "./types";

export const DEFAULT_MIN = 0;
export const DEFAULT_MAX = 100;
export const DEFAULT_STEP = 1;

export function assertEntity(config: Partial<BlowerKnobCardConfig>): asserts config is BlowerKnobCardConfig {
  if (!config.entity) {
    throw new Error("You need to define an entity.");
  }
}

export function getDomain(config: BlowerKnobCardConfig, entity?: HassEntity): EntityDomain {
  if (config.entity_type) return config.entity_type;
  if (entity) {
    const [domain] = entity.entity_id.split(".");
    if (domain === "fan" || domain === "number" || domain === "input_number") {
      return domain;
    }
  }
  return "fan";
}

export function getNumeric(value: string | number | undefined): number | undefined {
  if (value === undefined) return undefined;
  const num = Number(value);
  return Number.isFinite(num) ? num : undefined;
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max);
}

export function computeRange(entity: HassEntity | undefined, domain: EntityDomain, config: BlowerKnobCardConfig) {
  const min = getNumeric(config.min) ?? getNumeric(entity?.attributes?.min) ?? DEFAULT_MIN;
  const max = getNumeric(config.max) ?? getNumeric(entity?.attributes?.max) ?? DEFAULT_MAX;
  const step = getNumeric(config.step) ?? getNumeric(entity?.attributes?.step) ?? DEFAULT_STEP;
  return { min, max, step };
}

export function formatState(entity: HassEntity | undefined, domain: EntityDomain, value: number): string {
  if (!entity) return "Unavailable";
  if (entity.state === "unavailable") return "Unavailable";
  if (domain === "fan") {
    return entity.state === "on" ? `${value}%` : "Off";
  }
  return String(value);
}
