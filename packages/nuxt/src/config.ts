import type { AppUnaConfig } from './runtime/types'

export function defaultAppConfig(): AppUnaConfig {
  return {
    primary: 'yellow',
    gray: 'stone',
    radius: 0.5,
    fontSize: 16,
    options: {
      radius: [0, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
    },
  }
}
