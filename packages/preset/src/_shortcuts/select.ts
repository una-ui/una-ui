import type { Theme } from '@unocss/preset-mini'
import type { RuleContext } from 'unocss'
import { parseColor } from '@unocss/preset-mini'

type SelectPrefix = 'select'

export const staticSelect: Record<`${SelectPrefix}-${string}` | SelectPrefix, string> = {
  // configurations
  'select': '',
  'select-default-variant': 'btn-solid-white',
  'select-disabled': 'n-disabled',
  'select-scroll': 'flex cursor-default items-center justify-center py-1',
  'select-trigger-info-icon': 'i-info',
  'select-trigger-error-icon': 'i-error',
  'select-trigger-success-icon': 'i-success',
  'select-trigger-warning-icon': 'i-warning',

  // components
  'select-root': '',
  'select-trigger': 'px-0.8571428571428571em w-full [&>span]:truncate',
  'select-trigger-trailing-icon': 'i-lucide-chevron-down',
  'select-trigger-trailing': 'ml-auto size-1.4285714285714286em data-[status=error]:text-error data-[status=success]:text-success data-[status=warning]:text-warning data-[status=info]:text-info data-[status=default]:(n-disabled size-1.1428571428571428em)',
  'select-trigger-leading': 'size-1.4285714285714286em',

  'select-value': 'text-1em data-[status=error]:text-error-active data-[status=success]:text-success-active data-[status=warning]:text-warning-active data-[status=info]:text-info-active data-[placeholder]:n-disabled',

  'select-content': 'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-base bg-popover text-popover shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'select-content-popper': 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',

  'select-group': 'p-1 w-full',

  'select-separator': '-mx-1 my-1 h-px bg-muted',

  'select-item': 'select-item-gray relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-1em outline-none data-[disabled]:pointer-events-none data-[disabled]:n-disabled',

  'select-item-indicator': 'absolute left-2 size-1.1428571428571428em flex items-center justify-center',
  'select-item-indicator-icon': 'i-check',

  'select-viewport': 'p-1',
  'select-viewport-popper': 'h-[--reka-select-trigger-height] w-full min-w-[--reka-select-trigger-width]',

  'select-scroll-up-button': 'select-scroll',
  'select-scroll-down-button': 'select-scroll',
  'select-scroll-up-button-icon': 'i-lucide-chevron-up',
  'select-scroll-down-button-icon': 'i-lucide-chevron-down',

  'select-label': 'py-1.5 pl-8 pr-2 text-1em font-semibold',

  // ⚠️ for overriding purposes only
  'select-item-selectItem': '',
}

export const dynamicSelect = [
  [/^select-([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'gray'], { theme }: RuleContext<Theme>) => {
    const parsedColor = parseColor(c, theme)
    if ((parsedColor?.cssColor?.type === 'rgb' || parsedColor?.cssColor?.type === 'rgba') && parsedColor.cssColor.components)
      return `btn-${v}-${c}`
    return undefined
  }],

  [/^select-item(-(\S+))?$/, ([, , c = 'gray'], { theme }: RuleContext<Theme>) => {
    const parsedColor = parseColor(c || 'gray', theme)
    if ((parsedColor?.cssColor?.type === 'rgb' || parsedColor?.cssColor?.type === 'rgba') && parsedColor.cssColor.components)
      return `focus:bg-${c || 'gray'}-100 focus:text-${c || 'gray'}-800 dark:focus:bg-${c || 'gray'}-800 dark:focus:text-${c || 'gray'}-100`
    return undefined
  }],
]

export const select = [
  ...dynamicSelect,
  staticSelect,
]
