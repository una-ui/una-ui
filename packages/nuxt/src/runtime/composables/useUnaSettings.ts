import type { Ref } from 'vue'
import type { Colors, UnaSettings } from '../types'
import { computed, useAppConfig } from '#imports'
import { useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { struct } from '../utils'
import { useUnaThemes } from './useUnaThemes'

export interface UseUnaSettingsReturn {
  settings: Ref<UnaSettings>
  primaryColors: Ref<Colors>
  grayColors: Ref<Colors>
  reset: () => void
}

export function useUnaSettings(): UseUnaSettingsReturn {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings: UnaSettings = {
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
  } as const

  const settings = useStorage<UnaSettings>('una-settings', defaultSettings, undefined, {
    serializer: {
      read: v => struct<UnaSettings>(JSON.parse(v), ['primary', 'gray', 'radius', 'fontSize']),
      write: v => JSON.stringify(v),
    },
    mergeDefaults: defu,
  })

  const primaryColors = computed(() => settings.value.primary ? getPrimaryColors(settings.value.primary) : {})
  const grayColors = computed(() => settings.value.gray ? getGrayColors(settings.value.gray) : {})

  function reset(): void {
    settings.value.primary = defaultSettings.primary
    settings.value.gray = defaultSettings.gray
    settings.value.fontSize = defaultSettings.fontSize
    settings.value.radius = defaultSettings.radius
  }

  return {
    settings,
    primaryColors,
    grayColors,
    reset,
  }
}
