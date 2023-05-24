import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
