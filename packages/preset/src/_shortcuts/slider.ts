import type { RuleContext } from '@unocss/core'
import type { Theme } from '@unocss/preset-uno'
import { parseColor } from '@unocss/preset-mini/utils'

type SliderPrefix = 'slider'

export const staticSlider: Record<`${SliderPrefix}-${string}`, string> = {
  // components
  'slider-root': 'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
  'slider-track': 'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
  'slider-range': 'bg-brand absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
  'slider-thumb': 'square-1em border-brand bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-none disabled:n-disabled',

  'slider-primary': 'n-primary',
  'slider-secondary': 'n-secondary',
  'slider-accent': 'n-accent',
  'slider-muted': 'n-muted',
}

export const dynamicSlider = [
  [/^slider-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.color)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const slider = [
  ...dynamicSlider,
  staticSlider,
]
