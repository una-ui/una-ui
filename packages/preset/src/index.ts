import type { Preset } from 'unocss'

export interface nexveltPresetOptions {
  // TODO
}

export default function preset(options?: nexveltPresetOptions): Preset {
  return {
    name: '@nexvelt/ui-preset',
    shortcuts: [
      {
        'bg-inverted': 'bg-$c-base-12',
        'text-inverted': 'text-$c-base-1',

        // input-base
        'input-base-focus': 'focus:(ring-2 ring-inset ring-primary-10)',
        'input-base-disabled': 'disabled:pointer-events-none disabled:bg-base-9/5 disabled:text-base-9/50',
        'input-base': 'input-base-focus input-base-disabled sm:(text-sm leading-6) placeholder:(font-light text-base-10) block outline-none ring-base-7 ring-1 ring-inset px-3 py-1.5 rounded-md w-full shadow-sm bg-transparent',
        // 'input-error': 'border-$c-error focus:(outline-offset-0 outline-$c-error outline-1px)',

        // btn-default
        'btn-disabled': 'disabled:pointer-events-none disabled:bg-base-4 disabled:text-base-9',
        'btn-base': 'btn-disabled cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-active',

        // btn-size
        'btn-sm': 'px-2 py-1 text-xs',
        'btn-md': 'px-4 py-2 text-sm',
        'btn-lg': 'px-6 py-3 text-base',

        // btn-type
        'btn-solid': 'rounded-md btn-md btn-base bg-primary font-semibold text-white shadow-sm hover:bg-primary-active focus-visible:outline',
        'btn-outline': 'rounded-md btn-md btn-base text-primary border border-primary hover:bg-primary hover:text-white',
      },
    ],
    // theme: {
    //   colors: {
    //     tester: 'rgba(var(--color-tester) / <alpha-value>)',
    //     primary: {
    //     // TODO convert to regex
    //       DEFAULT: 'rgba(var(--c-primary-9) / <alpha-value>)',
    //       active: 'rgba(var(--c-primary-10) / <alpha-value>)',
    //       1: 'rgba(var(--c-primary-1) / <alpha-value>)',
    //       2: 'rgba(var(--c-primary-2) / <alpha-value>)',
    //       3: 'rgba(var(--c-primary-3) / <alpha-value>)',
    //       4: 'rgba(var(--c-primary-4) / <alpha-value>)',
    //       5: 'rgba(var(--c-primary-5) / <alpha-value>)',
    //       6: 'rgba(var(--c-primary-6) / <alpha-value>)',
    //       7: 'rgba(var(--c-primary-7) / <alpha-value>)',
    //       8: 'rgba(var(--c-primary-8) / <alpha-value>)',
    //       9: 'rgba(var(--c-primary-9) / <alpha-value>)',
    //       10: 'rgba(var(--c-primary-10) / <alpha-value>)',
    //       11: 'rgba(var(--c-primary-11) / <alpha-value>)',
    //       12: 'rgba(var(--c-primary-12) / <alpha-value>)',
    //     },
    //     base: {
    //       DEFAULT: 'var(--c-base)',
    //       active: 'var(--c-base-active)',
    //       1: 'var(--c-base-1)',
    //       2: 'var(--c-base-2)',
    //       3: 'var(--c-base-3)',
    //       4: 'var(--c-base-4)',
    //       5: 'var(--c-base-5)',
    //       6: 'var(--c-base-6)',
    //       7: 'var(--c-base-7)',
    //       8: 'var(--c-base-8)',
    //       9: 'var(--c-base-9)',
    //       10: 'var(--c-base-10)',
    //       11: 'var(--c-base-11)',
    //       12: 'var(--c-base-12)',
    //     },
    //   },
    //   container: {
    //     center: true,
    //     padding: {
    //       'DEFAULT': '1rem',
    //       'sm': '2rem',
    //       'lg': '4rem',
    //       'xl': '5rem',
    //       '2xl': '6rem',
    //     },
    //   },
    // },
  }
}
