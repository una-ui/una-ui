import { useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'
import { useUnaThemes } from './useUnaThemes'

// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
// @ts-ignore tsconfig
import { useAppConfig } from '#imports'

export function useUnaSettings() {
  const { una } = useAppConfig()
  const { getPrimaryColors, getGrayColors } = useUnaThemes()

  const defaultSettings = {
    primaryColors: getPrimaryColors(una.primary),
    grayColors: getGrayColors(una.gray),
    primary: una.primary,
    gray: una.gray,
    fontSize: 16,
  }

  const settings = useStorage('una-settings', defaultSettings)

  watchEffect(() => {
    settings.value.primaryColors = getPrimaryColors(settings.value.primary)
    settings.value.grayColors = getGrayColors(settings.value.gray)
  })

  return {
    defaultSettings,
    settings,
  }
}
