import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type RadioPrefix = 'radio'

export const staticRadio: Record<`${RadioPrefix}-${string}` | RadioPrefix, string> = {
  // base
  'radio': 'radio-primary transition-base border border-$c-ring rounded-full p-0.25em n-checked:border-brand n-checked:bg-brand',
  'radio-label': 'block text-sm font-medium leading-6',
  'radio-input': 'absolute w-full opacity-0',
  'radio-reverse': 'flex-row-reverse',
  'radio-peer-focus': 'peer-focus-(ring-2 ring-brand ring-offset-2 ring-offset-base)',

  // wrappers
  'radio-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',
  'radio-icon-wrapper': 'grid place-items-center w-0.5em h-0.5em',

  // icon
  'radio-icon-base': 'text-transparent w-full h-full transition-base',
  'radio-icon': 'i-dot', // refer to general.ts
  'radio-icon-checked': 'n-checked:text-inverted n-checked:w-full n-checked:h-full',
}

export const dynamicRadio = [
  [/^radio-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const radio = [
  ...dynamicRadio,
  staticRadio,
]
