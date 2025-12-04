import type { Ref } from 'vue'
import type { Colors, UnaSettings } from '../types'
import { themeStorageName, themeStorageType } from '#build/una-theme.config'
import { useAppConfig, useCookie } from '#imports'
import { useStorage } from '@vueuse/core'
import { defu } from 'defu'
import { computed, watchEffect } from 'vue'
import { useUnaThemes } from './useUnaThemes'

export interface UnaUserSettings extends UnaSettings {
  // These are added automatically, but only when using localStorage.
  primaryColors?: Colors
  grayColors?: Colors
}

export interface UseUnaSettingsReturn {
  defaultSettings: UnaUserSettings
  settings: Ref<UnaUserSettings>
  primaryColors: Ref<Colors>
  grayColors: Ref<Colors>
  reset: () => void
}

export function useUnaSettings(): UseUnaSettingsReturn {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings = {
    ...themeStorageType === 'localStorage'
      ? {
          primaryColors: getPrimaryColors(una.primary),
          grayColors: getGrayColors(una.gray),
        }
      : {},
    primary: una.primary,
    gray: una.gray,
    radius: una.radius,
    fontSize: una.fontSize,
  } as const satisfies UnaUserSettings

  const settings = themeStorageType === 'cookie'
    ? useCookie<UnaUserSettings>(themeStorageName, {
        default: () => defaultSettings,
      })
    : useStorage<UnaUserSettings>(themeStorageName, defaultSettings, undefined, {
        mergeDefaults: defu,
      })

  const primaryColors = computed(() => getPrimaryColors(settings.value.primary || una.primary))
  const grayColors = computed(() => getGrayColors(settings.value.gray || una.gray))

  if (themeStorageType === 'localStorage') {
    watchEffect(() => {
      settings.value.primaryColors = primaryColors.value
      settings.value.grayColors = grayColors.value
    })
  }

  function reset(): void {
    settings.value.primary = defaultSettings.primary
    settings.value.gray = defaultSettings.gray
    settings.value.fontSize = defaultSettings.fontSize
    settings.value.radius = defaultSettings.radius
  }

  return {
    defaultSettings,
    settings,
    primaryColors,
    grayColors,
    reset,
  }
}
