import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { UnocssNuxtOptions } from '@unocss/nuxt'

import presetUna from '@una-ui/preset'
import prefixes from '@una-ui/preset/prefixes'
import extratorUna from '@una-ui/extractor-vue-script'

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
      presetUna(),
      ...(user.presets || []),
    ],
    extractors: [
      extratorUna({
        prefixes,
      }),
    ],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
    ],
  }
}
