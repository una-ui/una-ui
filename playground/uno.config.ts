import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  configDeps: [
    '@nexvelt/ui-preset',
  ],
})
