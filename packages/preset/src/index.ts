import type { Preset } from 'unocss'
import { theme } from './theme'
import type { presetNexveltOptions } from './types'

export default function presetNexvelt(options: presetNexveltOptions = {}): Preset {
  return {
    name: '@nexvelt/ui-preset',
    theme,
    shortcuts: [
      {
        'bg-inverted': 'bg-$c-gray-12',
        'text-inverted': 'text-$c-gray-1',

        // input-$c-gray
        'input-base-focus': 'focus:(ring-2 ring-inset ring-$c-primary-10)',
        'input-base-disabled': 'disabled:pointer-events-none disabled:bg-$c-gray-9/5 disabled:text-$c-gray-9/50',
        'input-base': 'input-base-focus input-base-disabled sm:(text-sm leading-6) placeholder:(font-light text-$c-gray-10) block outline-none ring-$c-gray-7 ring-1 ring-inset px-3 py-1.5 rounded-md w-full shadow-sm bg-transparent',
        // 'input-error': 'border-$c-error focus:(outline-offset-0 outline-$c-error outline-1px)',

        // btn-default
        'btn-disabled': 'disabled:pointer-events-none disabled:bg-$c-gray-4 disabled:text-$c-gray-9',
        'btn-base': 'btn-disabled cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-$c-primary-active',

        // btn-size
        'btn-sm': 'px-2 py-1 text-xs font-semibold',
        'btn-md': 'px-4 py-2 text-sm font-semibold',
        'btn-lg': 'px-6 py-3 font-semibold',

        // btn-type
        'btn-solid': 'rounded-md btn-md btn-base bg-$c-primary text-white shadow-sm hover:bg-$c-primary-active focus-visible:outline',
        'btn-outline': 'rounded-md btn-md btn-base text-$c-primary border border-$c-primary hover:bg-$c-primary hover:text-white',
      },
    ],

  }
}
