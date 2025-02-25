import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type SliderPrefix = 'slider'

export const staticSlider: Record<`${SliderPrefix}-${string}`, string> = {
  // configurations
  'slider-disabled': 'n-disabled',
  'slider-root-vertical': 'flex-col w-1em h-full',
  'slider-track-vertical': 'w-0.5em h-full',
  'slider-range-vertical': 'w-full',
  'slider-thumb-vertical': 'w-1.25em h-1.25em',

  // components
  'slider-root': 'relative flex w-full touch-none select-none items-center',
  'slider-track': 'h-0.5em relative w-full grow overflow-hidden rounded-full bg-muted',
  'slider-range': 'absolute h-full bg-brand',
  'slider-thumb': 'w-1.25em h-1.25em block border-2 border-brand rounded-full bg-base focus-visible:ring-base ring-offset-base transition-colors disabled:slider-disabled focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

  'slider-accent': 'n-gray-300 dark:n-gray-800',
}

export const dynamicSlider = [
  [/^slider-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const slider = [
  ...dynamicSlider,
  staticSlider,
]
