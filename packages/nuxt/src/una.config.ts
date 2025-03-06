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

export const defaultConfig = { preflight: true, presets: [
  presetWind3(),
  presetAttributify(),
  presetIcons({
    extraProperties: {
      'display': 'inline-block',
      'height': '1em',
      'width': '1em',
      'vertical-align': 'middle',
    },
  }),
  presetUna(),
  presetAnimations(),
], extractors: [
  extratorUna({
    prefixes,
  }),
], transformers: [
  transformerDirectives(),
  transformerVariantGroup(),
] }

function extendUnocssOptions(options: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return {
    ...options,
    ...defaultConfig,
  }
}

export default extendUnocssOptions
