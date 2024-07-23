import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'text-md checkbox-primary flex items-center transition-base w-1em h-1em border border-$c-ring rounded n-checked:border-brand n-checked:bg-brand',
  'checkbox-disabled': 'n-disabled',
  'checkbox-label': 'block text-sm font-medium leading-6',
  'checkbox-input': 'absolute w-full opacity-0',
  'checkbox-reverse': 'flex-row-reverse',
  'checkbox-peer-focus': 'peer-focus-(ring-2 ring-brand ring-offset-2 ring-offset-base)',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center hover:cursor-pointer',

  // icon
  'checkbox-icon-base': 'm-auto h-full w-full opacity-0 transition-base n-checked:opacity-100 text-inverted',
  'checkbox-icon': 'i-check', // refer to general.ts
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
