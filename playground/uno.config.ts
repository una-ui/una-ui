import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  presets: [
    presetNexvelt(),
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  configDeps: [
    // '../src/index.ts',
    '@nexvelt/ui-preset/dist/style.css',
    '@nexvelt/ui-preset/dist/index.ts',
  ],
})
