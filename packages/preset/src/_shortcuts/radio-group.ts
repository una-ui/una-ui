import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type RadioGroupPrefix = 'radio-group'

export const staticRadioGroup: Record<`${RadioGroupPrefix}-${string}` | RadioGroupPrefix, string> = {
  // configurations
  'radio-group': 'grid gap-3',
  'radio-group-orientation-vertical': 'grid-flow-row',
  'radio-group-orientation-horizontal': 'grid-flow-col',

  // components
  'radio-group-item': 'flex items-start gap-3',
  'radio-group-item-content': 'grid gap-2',
  // TODO: V4, add missing configurations when presetwind4 is released
  'radio-group-item-button': 'aspect-square rounded-full border border-brand text-brand shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-base disabled:n-disabled',
  'radio-group-item-label': '',
  'radio-group-item-description': 'text-0.875em leading-1.4285714285714286em text-muted',

  'radio-group-indicator': 'relative flex items-center justify-center',
  'radio-group-indicator-icon-base': 'fill-brand absolute top-1/2 left-1/2 square-0.625em -translate-x-1/2 -translate-y-1/2',
  'radio-group-indicator-icon': 'i-dot',
}

export const dynamicRadioGroup = [
  [/^radio-group-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const radioGroup = [
  ...dynamicRadioGroup,
  staticRadioGroup,
]
