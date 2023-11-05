import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import type { UnaSettings } from '../types'
import { useUnaThemes } from './useUnaThemes'

// @ts-expect-error tsconfig
import { useAppConfig } from '#imports'

export function useUnaSettings(): any {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings: UnaSettings = {
    primaryColors: getPrimaryColors(una.primary),
    grayColors: getGrayColors(una.gray),
    primary: una.primary,
    gray: una.gray,
    fontSize: 16,
  } as const

  const settings = useStorage('una-settings', defaultSettings)

  watchEffect(() => {
    settings.value.primaryColors = getPrimaryColors(settings.value.primary)
    settings.value.grayColors = getGrayColors(settings.value.gray)
  })

  function reset() {
    settings.value.primary = defaultSettings.primary
    settings.value.gray = defaultSettings.gray
    settings.value.fontSize = defaultSettings.fontSize
  }

  return {
    defaultSettings,
    settings,
    reset,
  }
}
