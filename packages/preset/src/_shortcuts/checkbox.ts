import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'checkbox-primary transition-base w-1.1em h-1.1em border border-$c-ring rounded n-checked:border-brand n-checked:bg-brand',
  'checkbox-disabled': 'n-disabed',
  'checkbox-label': 'block text-sm font-medium leading-6',
  'checkbox-input': 'absolute w-full opacity-0',
  'checkbox-reverse': 'flex-row-reverse',
  'checkbox-peer-focus': 'peer-focus-(ring-2 ring-brand ring-offset-2 ring-offset-base)',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',
  'checkbox-icon-wrapper': 'grid place-items-center w-1em h-1em',

  // icon
  'checkbox-icon-base': 'opacity-0 w-full h-full transition-base',
  'checkbox-icon': 'i-check', // refer to general.ts
  'checkbox-icon-checked': 'n-checked:opacity-100 text-inverted n-checked:w-full n-checked:h-full',
}

export const dynamicCheckbox = [
  [/^checkbox-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const checkbox = [
  ...dynamicCheckbox,
  staticCheckbox,
]
