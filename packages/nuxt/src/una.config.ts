import type { UnocssNuxtOptions } from '@unocss/nuxt'
import extratorUna from '@una-ui/extractor-vue-script'
import presetUna from '@una-ui/preset'

import prefixes from '@una-ui/preset/prefixes'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

function extendUnocssOptions(user: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...user,
    preflight: false,
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      }),
      presetUna(),
      presetAnimations(),
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

export default extendUnocssOptions
