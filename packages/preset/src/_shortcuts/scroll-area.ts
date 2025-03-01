import type { Theme } from '@unocss/preset-mini'
import type { RuleContext } from 'unocss'
import { parseColor } from '@unocss/preset-mini'

type ScrollAreaPrefix = 'scroll-area'

export const staticScrollArea: Record<`${ScrollAreaPrefix}-${string}` | ScrollAreaPrefix, string> = {
  // configurations
  'scroll-area': '',
  'scroll-area-scrollbar-vertical': 'h-full w-0.625em border-l border-l-transparent p-0.0625em',
  'scroll-area-scrollbar-horizontal': 'h-0.625em flex-col border-t border-t-transparent p-0.0625em',

  // components
  'scroll-area-root': 'relative overflow-hidden',
  'scroll-area-scrollbar': 'flex touch-none select-none transition-colors',
  'scroll-area-viewport': 'h-full w-full rounded-inherit',
  'scroll-area-scrollbar-thumb': 'relative flex-1',

  'scroll-area-gray': 'bg-border',
}

export const dynamicScrollArea = [
  // dynamic preset
  [/^scroll-area(-(\S+))?$/, ([, , c]: [string, string, string], { theme }: RuleContext<Theme>) => {
    const parsedColor = parseColor(c, theme)
    if ((parsedColor?.cssColor?.type === 'rgb' || parsedColor?.cssColor?.type === 'rgba') && parsedColor.cssColor.components)
      return `bg-${c}-200 dark:bg-${c}-700/58`
    return undefined
  }],
]

export const scrollArea = [
  ...dynamicScrollArea,
  staticScrollArea,
]
