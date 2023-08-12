import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type IndicatorPrefix = 'indicator'

export const staticIndicator: Record<`${IndicatorPrefix}-${string}` | IndicatorPrefix, string> = {
  // config
  'indicator-default-placement': 'indicator-top-right',

  // base
  'indicator': 'bg-red-600 text-white z-100 absolute min-h-1.15em min-w-1.15em inline-flex items-center justify-center rounded-full p-0.2em leading-none ring-2 ring-$c-background',
  'indicator-label': 'text-0.75em leading-none',

  // wrapper
  'indicator-wrapper': 'relative inline-block',

  // placements
  'indicator-top-left': 'top-0 left-0 -mt-1 -ml-1',
  'indicator-top-right': 'top-0 -ml-0.8125em -mt-0.25em',
  'indicator-bottom-left': 'bottom-0 left-0 -mb-1 -ml-1',
  'indicator-bottom-right': 'bottom-0 -ml-0.8125em -mb-0.25em',
}

export const dynamicIndicator = [
  [/^indicator-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `bg-${body}-600`
  }],
]

export const indicator = [
  ...dynamicIndicator,
  staticIndicator,
]
