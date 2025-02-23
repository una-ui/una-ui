import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type CheckboxPrefix = 'checkbox'

export const staticCheckbox: Record<`${CheckboxPrefix}-${string}` | CheckboxPrefix, string> = {
  // base
  'checkbox': 'checkbox-primary text-md w-1em h-1em shrink-0 rounded-sm ring-offset-base focus-visible:outline-none hover:cursor-pointer disabled:(cursor-not-allowed opacity-50) border border-brand bg-brand text-inverted focus-visible:(ring-2 ring-brand ring-offset-2) data-[state=unchecked]:(bg-base text-base)',
  'checkbox-label': 'block',
  'checkbox-reverse': 'flex-row-reverse',

  // wrappers
  'checkbox-wrapper': 'gap-x-3 relative inline-flex items-center',

  // icon
  'checkbox-indicator': 'flex items-center justify-center h-full w-full data-[state=unchecked]:opacity-0 transition-base opacity-100 text-inverted',
  'checkbox-icon-base': 'w-1em h-1em',
  'checkbox-checked-icon': 'i-check',
  'checkbox-unchecked-icon': '',
  'checkbox-indeterminate-icon': 'i-lucide-minus',
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
