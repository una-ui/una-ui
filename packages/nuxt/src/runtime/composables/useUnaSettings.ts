import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import type { UnaSettings } from '../types'
import { useUnaThemes } from './useUnaThemes'

// @ts-expect-error tsconfig
import { useAppConfig } from '#imports'

export function useUnaSettings() {
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
    if (!settings.value.radius)
      settings.value.radius = defaultSettings.radius

    if (!settings.value.fontSize)
      settings.value.fontSize = defaultSettings.fontSize
  })

  watchEffect(() => {
    settings.value.primaryColors = getPrimaryColors(settings.value.primary)
    settings.value.grayColors = getGrayColors(settings.value.gray)
  })

  function reset() {
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
