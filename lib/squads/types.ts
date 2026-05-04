/**
 * Squad System Types
 * Defines the structure for squad style configurations in the e-commerce platform.
 */

export type SquadStyle = 'alpha' | 'beta' | 'gamma';

export interface SquadFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface SquadConfig {
  style: SquadStyle;
  name: string;
  description: string;
  stack: string[];
  features: SquadFeature[];
  roles: string[];
  color: string;
}

export interface SquadTransition {
  from: SquadStyle;
  to: SquadStyle;
  steps: string[];
}