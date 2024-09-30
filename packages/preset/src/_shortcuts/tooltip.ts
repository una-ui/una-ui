import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type TooltipPrefix = 'tooltip'

export const staticTooltip: Record<`${TooltipPrefix}-${string}`, string> = {
  'tooltip-content': 'z-50 overflow-hidden rounded-md px-0.75em py-0.375em text-xs shadow-md animate-default',

  'tooltip-white': 'border border-base bg-popover text-popover',
  'tooltip-black': 'border border-foreground bg-popover-foreground text-popover-foreground',
}

export const dynamicTooltip = [
  [/^tooltip-(.*)$/, ([, c]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(c, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `bg-${c}-100 border-${c}-50 text-${c}-800 dark:bg-${c}-800 dark:border-${c}-800 dark:text-${c}-100`
  }],
]

export const tooltip = [
  ...dynamicTooltip,
  staticTooltip,
]
