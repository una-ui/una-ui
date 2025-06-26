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
    primaryColors: una.primary ? getPrimaryColors(una.primary) : {},
    grayColors: una.gray ? getGrayColors(una.gray) : {},
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
    theme: una.theme,
    themes: una.themes,
  } as const

  const settings = useStorage<UnaSettings>('una-settings', defaultSettings, undefined, {
    mergeDefaults: defu,
  })

  watch(settings, () => {
    // console.log('settings', settings)
    console.log('settings.value.primary', settings.value.primary)
    console.log('settings.value.gray', settings.value.gray)
    if (settings.value.primary) {
      settings.value.primaryColors = getPrimaryColors(settings.value.primary)
    }
    if (settings.value.gray) {
      settings.value.grayColors = getGrayColors(settings.value.gray)
    }
  }, { immediate: true, deep: true })

  function reset(): void {
    if (una.theme) {
      settings.value.theme = una.theme
      settings.value.primary = false
      settings.value.gray = false

      return
    }

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
