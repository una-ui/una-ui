import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type RadioPrefix = 'radio'

export const staticRadio: Record<`${RadioPrefix}-${string}` | RadioPrefix, string> = {
  // base
  'radio': 'radio-primary flex items-center transition-base border border-$c-ring rounded-full p-0.12em h-1em w-1em n-checked:border-brand n-checked:bg-brand',
  'radio-disabled': 'n-disabled',
  'radio-label': 'block',
  'radio-input': 'absolute w-full opacity-0',
  'radio-reverse': 'flex-row-reverse',
  'radio-peer-focus': 'peer-focus-(ring-2 ring-brand ring-offset-2 ring-offset-base)',

  // wrappers
  'radio-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',

  // icon
  'radio-icon-base': 'm-auto opacity-0 text-inverted w-full h-full transition-base n-checked:opacity-100',
  'radio-icon': 'i-dot', // refer to general.ts
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
