import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from './packages/ui-preset/src/index'

export default {
  preflight: false,
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetNexvelt(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  configDeps: [
    '../packages/ui-preset/src/_shortcuts/indicator.ts',
    '../packages/ui-preset/src/_shortcuts/avatar-group.ts',
    '../packages/ui-preset/src/_shortcuts/avatar.ts',
    '../packages/ui-preset/src/_shortcuts/badge.ts',
    '../packages/ui-preset/src/_shortcuts/alert.ts',
    '../packages/ui-preset/src/_shortcuts/input.ts',
    '../packages/ui-preset/src/_shortcuts/button.ts',
    '../packages/ui-preset/src/_shortcuts/form-group.ts',
    '../packages/ui-preset/src/_shortcuts/accordion.ts',
    '../packages/ui-preset/src/_shortcuts/switch.ts',
    '../packages/ui-preset/src/_shortcuts/general.ts',
    '../packages/ui-preset/src/_shortcuts/index.ts',
    '../packages/ui-nuxt/src/unocss.ts',
  ],
}
