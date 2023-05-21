import type { Preset } from 'unocss'
import type { presetNexveltOptions } from './types'

export default function presetNexvelt(options: presetNexveltOptions = {}): Preset {
  return {
    name: '@nexvelt/ui-preset',
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
    theme: {
      colors: {
        primary: {
        // TODO convert to regex
          // DEFAULT: 'rgba(var(--c-primary-9) / <alpha-value>)',
          DEFAULT: 'var(--c-primary)',
          active: 'rgba(var(--c-primary-10) / <alpha-value>)',
          1: 'rgba(var(--c-primary-1) / <alpha-value>)',
          2: 'rgba(var(--c-primary-2) / <alpha-value>)',
          3: 'rgba(var(--c-primary-3) / <alpha-value>)',
          4: 'rgba(var(--c-primary-4) / <alpha-value>)',
          5: 'rgba(var(--c-primary-5) / <alpha-value>)',
          6: 'rgba(var(--c-primary-6) / <alpha-value>)',
          7: 'rgba(var(--c-primary-7) / <alpha-value>)',
          8: 'rgba(var(--c-primary-8) / <alpha-value>)',
          9: 'rgba(var(--c-primary-9) / <alpha-value>)',
          10: 'rgba(var(--c-primary-10) / <alpha-value>)',
          11: 'rgba(var(--c-primary-11) / <alpha-value>)',
          12: 'rgba(var(--c-primary-12) / <alpha-value>)',
        },
        gray: {
          DEFAULT: 'var(--c-gray)',
          active: 'var(--c-gray-active)',
          1: 'var(--c-gray-1)',
          2: 'var(--c-gray-2)',
          3: 'var(--c-gray-3)',
          4: 'var(--c-gray-4)',
          5: 'var(--c-gray-5)',
          6: 'var(--c-gray-6)',
          7: 'var(--c-gray-7)',
          8: 'var(--c-gray-8)',
          9: 'var(--c-gray-9)',
          10: 'var(--c-gray-10)',
          11: 'var(--c-gray-11)',
          12: 'var(--c-gray-12)',
        },
      },
    },
  }
}
