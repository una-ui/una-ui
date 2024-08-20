import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type ProgressPrefix = 'progress'

export const staticProgress: Record<`${ProgressPrefix}-${string}` | ProgressPrefix, string> = {
  // configurations
  'progress': 'progress-primary',

  // components
  'progress-root': 'progress relative h-0.5em w-full overflow-hidden rounded-full bg-muted',
  'progress-indicator': 'h-full w-full flex-1 bg-brand transition-all',

  'progress-indeterminate': 'absolute bg-brand h-full',
}

export const dynamicProgress = [
  [/^progress-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]
export const progress = [
  ...dynamicProgress,
  staticProgress,
]
