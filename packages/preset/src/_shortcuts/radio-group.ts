import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type RadioGroupPrefix = 'radio-group'

export const staticRadioGroup: Record<`${RadioGroupPrefix}-${string}` | RadioGroupPrefix, string> = {
  // configurations
  'radio-group': 'gap-2 flex flex-wrap',
  'radio-group-orientation-vertical': 'flex-col',
  'radio-group-orientation-horizontal': 'flex-row',

  // components
  'radio-group-item-root': 'flex flex-col',
  'radio-group-item-wrapper': 'flex items-center gap-2',
  'radio-group-item': 'aspect-square rounded-full border border-brand text-brand shadow-xs focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:n-disabled',
  'radio-group-item-label': 'text-0.875em font-medium',
  'radio-group-item-description': 'text-0.875em text-muted-foreground ml-[calc(1.1em+0.5rem)]',

  'radio-group-indicator': 'flex items-center justify-center',
  'radio-group-indicator-icon-base': 'h-0.875em w-0.875em fill-brand',
  'radio-group-indicator-icon': 'i-dot',
}

export const dynamicRadioGroup = [
  [/^radio-group-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.color)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const radioGroup = [
  ...dynamicRadioGroup,
  staticRadioGroup,
]
