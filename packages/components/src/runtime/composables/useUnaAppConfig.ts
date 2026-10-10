import type { UnaConfig } from '../types'
import { inject } from 'vue'
import { UNA_SETTINGS_KEY } from '../utils/injectionKeys'

export function useUnaAppConfig(): UnaConfig {
  const una = inject(UNA_SETTINGS_KEY)
  if (!una) {
    throw new Error('[Una UI] The una injection key is missing. Did you forget to add the Una plugin to vue?')
  }
  return una
}
