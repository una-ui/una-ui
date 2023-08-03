import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'bg-transparent relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-full',
  'switch-disabled': 'opacity-75 cursor-not-allowed',
  'switch-focus': 'focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-brand',

  // base size variants
  'switch-normal': 'h-1.5em w-2.75em',
  'switch-short': 'h-1.25em w-2.50em',

  // slider (circle)
  'switch-slider': 'switch-slider-size absolute border-base bg-base border pointer-events-none inline-block transform rounded-full shadow transition duration-200 ease-in-out',
  'switch-slider-checked': 'translate-x-1.25em',

  'switch-slider-unchecked': 'translate-x-0',
  'switch-slider-size': 'h-1.25em w-1.25em',

  // slider bg
  'switch-slider-bg': 'pointer-events-none absolute mx-auto rounded-full transition-colors duration-200 ease-in-out',
  'switch-slider-bg-checked': 'bg-brand',
  'switch-slider-bg-unchecked': 'bg-$c-gray-200',

  // slider bg size variants
  'switch-slider-bg-normal': 'h-1.5em w-2.75em',
  'switch-slider-bg-short': 'h-1em w-2.25em',
}

// : [RegExp, (params: RegExpExecArray) => string][]
export const dynamicSwitch = [
  // [/^switch-n(-(\S+))?$/, ([, , c = 'primary']) => `n-${c}-600 dark:n-${c}-500`],

  [/^switch-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
