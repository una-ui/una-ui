import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

import presetNexvelt from '@nexvelt/ui-preset'

export function extendUnocssOptions(user: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...user,
    preflight: false,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetNexvelt(),
      ...(user.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
}
