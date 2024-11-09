import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type RadioGroupPrefix = 'radio-group'

export const staticRadioGroup: Record<`${RadioGroupPrefix}-${string}` | RadioGroupPrefix, string> = {
  // configurations
  'radio-group': 'gap-2',
  'radio-group-orientation-vertical': 'grid',
  'radio-group-orientation-horizontal': 'grid auto-cols-max grid-flow-col',
  'radio-group-icon-base': 'h-0.875em w-0.875em fill-brand',
  'radio-group-icon': 'i-dot',

  // components
  'radio-group-item': 'aspect-square h-1em w-1em rounded-full border border-brand text-brand shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-base disabled:n-disabled',
  'radio-group-indicator': 'flex items-center justify-center',
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
