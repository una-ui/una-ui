import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  shortcuts: [
    {
      // alert
      'alert-base': 'text-sm rounded-md p-4',
      'alert-info': 'alert-base bg-blue-50 text-blue-700',
      'alert-success': 'alert-base bg-green-50 text-green-700',
      'alert-warning': 'alert-base bg-yellow-50 text-yellow-700',
      'alert-error': 'alert-base bg-red-50 text-red-700',
      'alert-icon': 'inline-flex mr-2 -ml-1.5 h-5 w-5 text-blue-400',
      'alert-close': 'inline-flex ml-auto -mr-1.5 h-5 w-5 text-blue-400',
      'alert-close-hover': 'hover:bg-blue-200',
      'alert-close-focus': 'focus:bg-blue-200',
      'alert-close-active': 'active:bg-blue-300',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    // presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
