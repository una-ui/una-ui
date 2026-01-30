import type { Ref } from 'vue'
import type { UnaSettings } from '../types'
import { useAppConfig, watch } from '#imports'
import { useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { useUnaThemes } from './useUnaThemes'

export interface UseUnaSettingsReturn {
  defaultSettings: Omit<UnaSettings, 'themes'>
  settings: Ref<Omit<UnaSettings, 'themes'>>
  reset: () => void
}

export function useUnaSettings(): UseUnaSettingsReturn {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings: Omit<UnaSettings, 'themes'> = {
    primaryColors: una.primary ? getPrimaryColors(una.primary) : {},
    grayColors: una.gray ? getGrayColors(una.gray) : {},
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
    theme: una.theme,
  } as const

  const settings = useStorage<Omit<UnaSettings, 'themes'>>('una-settings', defaultSettings, undefined, {
    mergeDefaults: defu,
  })

  watch(
    () => [settings.value.primary, settings.value.gray],
    ([primary, gray]) => {
      settings.value.primaryColors = primary ? getPrimaryColors(primary) : {}
      settings.value.grayColors = gray ? getGrayColors(gray) : {}
    },
    { immediate: true },
  )

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
