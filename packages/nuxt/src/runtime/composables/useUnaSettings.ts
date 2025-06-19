import type { Ref } from 'vue'
import type { UnaSettings } from '../types'
import { useAppConfig, watch } from '#imports'
import { useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { useUnaThemes } from './useUnaThemes'

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
    theme: null,
  } as const

  const settings = useStorage<UnaSettings>('una-settings', defaultSettings, undefined, {
    mergeDefaults: defu,
  })

  watch(
    () => [settings.value.primary, settings.value.gray],
    ([primary, gray]) => {
      settings.value.primaryColors = getPrimaryColors(primary, una.primary)
      settings.value.grayColors = getGrayColors(gray, una.gray)
    },
    { immediate: true },
  )

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
