import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from '@nexvelt/ui-preset'

export default {
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
      // ...(user?.icons || {})
    }),
    presetNexvelt(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
}
