import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type SelectPrefix = 'select'

export const staticSelect: Record<`${SelectPrefix}-${string}` | SelectPrefix, string> = {
  // configurations
  'select': '',
  'select-disabled': 'n-disabled',
  'select-scroll': 'flex cursor-default items-center justify-center py-1',
  'select-trigger-info-icon': 'i-info',
  'select-trigger-error-icon': 'i-error',
  'select-trigger-success-icon': 'i-success',
  'select-trigger-warning-icon': 'i-warning',

  // components
  'select-root': '',
  'select-trigger': 'min-h-2.5em w-full', // [&>span]:line-clamp-1
  'select-trigger-trailing-icon': 'i-lucide-chevrons-up-down !text-1.042em',
  'select-trigger-trailing': 'ml-auto',
  'select-trigger-leading': '',

  'select-value': 'h-1.5em',

  'select-content': 'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-base bg-popover text-popover shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'select-content-popper': 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',

  'select-group': 'p-1 w-full',

  'select-separator': '-mx-1 my-1 h-px bg-muted',

  'select-item': 'select-item-gray relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-1em outline-none data-[disabled]:pointer-events-none data-[disabled]:n-disabled',

  'select-item-indicator': 'absolute left-2 h-0.75em w-0.75em flex items-center justify-center',
  'select-item-indicator-icon': 'i-check',

  'select-viewport': 'p-1',
  'select-viewport-popper': 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]',

  'select-scroll-up-button': 'select-scroll',
  'select-scroll-down-button': 'select-scroll',
  'select-scroll-up-button-icon': 'i-lucide-chevron-up',
  'select-scroll-down-button-icon': 'i-lucide-chevron-down',

  'select-label': 'py-1.5 pl-8 pr-2 text-1em font-semibold',

  // ⚠️ for overriding purposes only
  'select-item-selectItem': '',
}

export const dynamicSelect = [
  [/^select-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],

  [/^select-item(-(\S+))?$/, ([, , c = 'gray']) => `focus:bg-${c}-100 focus:text-${c}-800 dark:focus:bg-${c}-800 dark:focus:text-${c}-100`],
]

export const select = [
  ...dynamicSelect,
  staticSelect,
]
