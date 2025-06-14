import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type ProgressPrefix = 'progress'

export const staticProgress: Record<`${ProgressPrefix}-${string}`, string> = {
  // base
  'progress-indeterminate': 'absolute bg-brand h-full',

  // components
  'progress-root': 'relative h-0.5em w-full overflow-hidden bg-brand/20',
  'progress-indicator': 'h-full w-full flex-1 bg-brand transition-all',

  // static
  'progress-white': 'bg-foreground',
  'progress-black': 'bg-background',
}

export const dynamicProgress = [
  [/^progress-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.color)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]
export const progress = [
  ...dynamicProgress,
  staticProgress,
]
