type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'h-1.25em w-2.25em switch-disabled inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent rounded-full shadow-sm transition-colors',
  'switch-disabled': 'data-[disabled]:n-disabled',

  // thumb
  'switch-thumb': 'square-1em flex items-center justify-center pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
  'switch-thumb-checked': 'translate-x-1.01em',
  'switch-thumb-unchecked': 'translate-x-0.03em',

  // icons
  'switch-icon': 'text-0.7em',
  'switch-icon-unchecked': 'text-muted',
  'switch-icon-checked': 'text-muted',

  // loading
  'switch-loading-icon': 'text-gray animate-spin text-0.8em',
  'switch-loading-icon-name': 'i-loading',

  'switch-focus-gray': 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base focus-visible:ring-offset-2 focus-visible:ring-offset-background',
}

export const dynamicSwitch = [
  // base
  [/^switch-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${c}-600 dark:focus-visible:ring-${c}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`],

  // variants
  [/^switch-checked(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=checked]:switch-focus-${c} data-[state=checked]:bg-${c}-600 dark:data-[state=checked]:bg-${c}-500`],
  [/^switch-unchecked(-(\S+))?$/, ([, , c = 'gray']) => `data-[state=unchecked]:switch-focus-${c} data-[state=unchecked]:bg-${c}-200 dark:data-[state=unchecked]:bg-${c}-700/58`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
