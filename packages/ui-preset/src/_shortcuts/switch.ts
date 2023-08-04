import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'switch-sm bg-transparent relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-full',
  'switch-disabled': 'opacity-75 cursor-not-allowed',
  'switch-focus': 'focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-base focus:ring-brand',

  // mode
  'switch-inset': 'h-1.5em w-2.75em',
  'switch-outset': 'h-1.25em w-2.50em',
  'switch-track-inset': 'h-1.5em w-2.75em',
  'switch-track-outset': 'h-1em w-2.25em',

  // thumb
  'switch-thumb': 'flex items-center justify-center h-1.25em w-1.25em absolute border-base bg-base border pointer-events-none inline-block transform rounded-full shadow transition duration-200 ease-in-out',
  'switch-thumb-on': 'translate-x-1.25em',
  'switch-thumb-off': 'translate-x-0',

  // track
  'switch-track': 'pointer-events-none absolute mx-auto rounded-full transition-colors duration-200 ease-in-out',
  'switch-track-on': 'bg-brand',
  'switch-track-off': 'bg-$c-gray-200',
  // icons
  'switch-icon': 'text-.8em',
  'switch-icon-off': 'text-muted',
  'switch-icon-on': 'text-brand',
}

export const dynamicSwitch = [
  [/^switch-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
