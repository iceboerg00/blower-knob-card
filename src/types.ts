export type EntityDomain = "fan" | "number" | "input_number";

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(domain: string, service: string, data: Record<string, any>): Promise<void>;
}

export interface BlowerKnobCardConfig {
  type: string;
  entity: string;
  name?: string;
  icon?: string;
  entity_type?: EntityDomain;
  min?: number;
  max?: number;
  step?: number;
  show_state?: boolean;
  show_percentage?: boolean;
  show_buttons?: boolean;
  show_secondary?: boolean;
}
