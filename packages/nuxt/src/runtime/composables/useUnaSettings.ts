import type { Ref } from 'vue'
import type { UnaSettings } from '../types'
import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import { useUnaThemes } from './useUnaThemes'

// @ts-expect-error tsconfig
import { useAppConfig } from '#imports'

export interface UseUnaSettingsReturn {
  defaultSettings: UnaSettings
  settings: Ref<UnaSettings>
  reset: () => void
}

export function useUnaSettings(): UseUnaSettingsReturn {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings: UnaSettings = {
    primaryColors: getPrimaryColors(una.primary),
    grayColors: getGrayColors(una.gray),
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
  } as const

  const settings = useStorage('una-settings', defaultSettings)

  watchEffect(() => {
    settings.value.primaryColors = getPrimaryColors(settings.value.primary || una.primary)
    settings.value.grayColors = getGrayColors(settings.value.gray || una.gray)
  })

  function reset(): void {
    settings.value.primary = defaultSettings.primary
    settings.value.gray = defaultSettings.gray
    settings.value.fontSize = defaultSettings.fontSize
    settings.value.radius = defaultSettings.radius
  }

  return {
    defaultSettings,
    settings,
    reset,
  }
}
