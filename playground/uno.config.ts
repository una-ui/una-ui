import {
  defineConfig,
  presetAttributify,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

// import presetNexvelt from '@nexvelt/ui-preset'
import presetNexvelt from '../packages/preset/src/index'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  configDeps: [
    '../packages/preset/src/index.ts',
    '../packages/preset/style.css',
  ],
})
