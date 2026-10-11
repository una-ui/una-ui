import type { UnaSettings } from '#una/types'
import type { Ref } from 'vue'
import { useUnaAppConfig } from '#una/composables/useUnaAppConfig'
import { useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { watch } from 'vue'
import { useUnaThemes } from '../composables/useUnaThemes'

export interface UseUnaSettingsReturn {
  defaultSettings: Omit<UnaSettings, 'themes' | 'components'>
  settings: Ref<Omit<UnaSettings, 'themes' | 'components'>>
  reset: () => void
}

export function useUnaSettings(): UseUnaSettingsReturn {
  const una = useUnaAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings: Omit<UnaSettings, 'themes' | 'components'> = {
    primaryColors: una.primary ? getPrimaryColors(una.primary) : {},
    grayColors: una.gray ? getGrayColors(una.gray) : {},
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
    theme: una.theme,
    sidebar: { ...una.sidebar },
  } as const

  const settings = useStorage<Omit<UnaSettings, 'themes' | 'components'>>('una-settings', defaultSettings, undefined, {
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
    settings.value.sidebar = { ...defaultSettings.sidebar }
  }

  return {
    defaultSettings,
    settings,
    reset,
  }
}
