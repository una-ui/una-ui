import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

import presetUna from '@una-ui/preset'

export function extendUnocssOptions(user: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...user,
    preflight: false,
    presets: [
      presetUno({
        // attributifyPseudo: true,
      }),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        },
      }),
      presetUna(),
      ...(user.presets || []),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
}
