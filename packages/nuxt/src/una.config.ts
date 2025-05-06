import type { UnocssNuxtOptions } from '@unocss/nuxt'
import type { UserConfig } from 'unocss'
import { createExternalPackageIconLoader } from '@iconify/utils/lib/loader/external-pkg'
import extratorUna from '@una-ui/extractor-vue-script'
import presetUna from '@una-ui/preset'
import prefixes from '@una-ui/preset/prefixes'
import {
  mergeConfigs as mergeUnoConfigs,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimations } from 'unocss-preset-animations'

export const unaConfig: UserConfig<object> = {
  presets: [
    presetWind4({
      preflights: {
        theme: {
          mode: true, // Default by 'on-demand'
        },
      },
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1em',
        'width': '1em',
        'vertical-align': 'middle',
      },
      collections: {
        ...createExternalPackageIconLoader('@iconify-json/lucide', true),
        ...createExternalPackageIconLoader('@iconify-json/radix-icons', true),
        ...createExternalPackageIconLoader('@iconify-json/tabler', true),
      },
    }),
    presetUna(),
    presetAnimations(),
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

export function defaultConfig(...configs: UserConfig<object>[]) {
  return mergeUnoConfigs([
    unaConfig,
    ...configs,
  ])
}

function extendUnocssOptions(options: UnocssNuxtOptions = {}): UnocssNuxtOptions {
  return mergeUnoConfigs([
    unaConfig,
    options,
  ])
}

export default extendUnocssOptions
