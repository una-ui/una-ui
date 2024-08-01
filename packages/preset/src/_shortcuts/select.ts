import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type SelectPrefix = 'select'

export const staticSelect: Record<`${SelectPrefix}-${string}` | SelectPrefix, string> = {
  // configurations
  'select': 'select-primary',
  'select-disabled': 'n-disabled',
  'select-scroll': 'flex cursor-default items-center justify-center py-1',

  // components
  'select-root': '',
  'select-trigger': 'px-3 flex h-2.6em w-full font-normal [&>span]:line-clamp-1',

  'select-content': 'relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border border-base bg-popover text-popover shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  'select-content-popper': 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',

  'select-group': 'p-1 w-full',

  'select-separator': '-mx-1 my-1 h-px bg-muted',

  'select-item': 'select-item-gray relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:n-disabled',
  'select-item-indicator-icon': 'i-check',

  'select-viewport': 'p-1',
  'select-viewport-popper': 'h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]',

  'select-portal': '',

  'select-scroll-up-button': 'select-scroll',
  'select-scroll-down-button': 'select-scroll',
  'select-scroll-up-button-icon': 'i-lucide-chevron-up',
  'select-scroll-down-button-icon': 'i-lucide-chevron-down',

  'select-label': 'py-1.5 pl-8 pr-2 text-sm font-semibold',

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
