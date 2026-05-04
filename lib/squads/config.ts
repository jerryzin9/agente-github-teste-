import { SquadStyle, SquadConfig, SquadFeature } from './types';
import { alphaConfig } from './alpha';
import { betaConfig } from './beta';
import { gammaConfig } from './gamma';

export const SQUAD_CONFIGS: Record<SquadStyle, SquadConfig> = {
  alpha: alphaConfig,
  beta: betaConfig,
  gamma: gammaConfig,
};

// Current squad style - can be changed via SquadSelector
// Default is 'alpha' (current state of the e-commerce store)
export const CURRENT_SQUAD: SquadStyle = 'alpha';

/**
 * Get the current squad configuration
 */
export function getCurrentSquad(): SquadConfig {
  return SQUAD_CONFIGS[CURRENT_SQUAD];
}

/**
 * Check if a specific feature is enabled in the current squad
 */
export function isFeatureEnabled(featureId: string): boolean {
  const config = getCurrentSquad();
  const feature = config.features.find((f) => f.id === featureId);
  return feature?.enabled ?? false;
}

/**
 * Get all features for a specific squad style
 */
export function getSquadFeatures(style: SquadStyle): SquadFeature[] {
  return SQUAD_CONFIGS[style]?.features ?? [];
}

/**
 * Get the color for a squad style
 */
export function getSquadColor(style: SquadStyle): string {
  return SQUAD_CONFIGS[style]?.color ?? '#6b7280';
}

/**
 * Get squad style display name
 */
export function getSquadName(style: SquadStyle): string {
  return SQUAD_CONFIGS[style]?.name ?? 'Unknown';
}

/**
 * Get all available squad styles
 */
export function getAllSquadStyles(): SquadStyle[] {
  return ['alpha', 'beta', 'gamma'];
}

/**
 * Get all squad configurations
 */
export function getAllSquadConfigs(): SquadConfig[] {
  return [alphaConfig, betaConfig, gammaConfig];
}