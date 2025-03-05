import type { UnocssNuxtOptions } from '@unocss/nuxt'
import extratorUna from '@una-ui/extractor-vue-script'
import presetUna from '@una-ui/preset'
import prefixes from '@una-ui/preset/prefixes'
import {
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

function extendUnocssOptions(user: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...user,
    nuxtLayers: true,
    preflight: false,
    presets: [
      presetWind3(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'middle',
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
