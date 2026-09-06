type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'h-1.25em w-2.25em switch-disabled inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent rounded-full shadow-xs transition-colors',
  'switch-disabled': 'data-[disabled]:n-disabled',

  // thumb
  'switch-thumb': 'square-1em flex items-center justify-center pointer-events-none block rounded-full bg-background ring-0 transition-transform',
  'switch-thumb-checked': 'translate-x-1.01em',
  'switch-thumb-unchecked': 'translate-x-0.03em',

  // icons
  'switch-icon': 'text-0.7em',
  'switch-icon-unchecked': 'text-muted-foreground',
  'switch-icon-checked': 'text-muted-foreground',

  // loading
  'switch-loading-icon': 'text-muted-foreground animate-spin text-0.8em',
  'switch-loading-icon-name': 'i-loading',

  'switch-checked-primary': 'data-[state=checked]:bg-primary',
  'switch-checked': 'switch-checked-primary',
  'switch-unchecked-gray': 'data-[state=unchecked]:bg-input dark:data-[state=unchecked]:bg-input/80',
  'switch-unchecked': 'switch-unchecked-gray',
}

export const dynamicSwitch = [
  // base
  [/^switch-focus(-(\S+))?$/, ([, , c = 'primary']) => `focus-visible:ring-3px focus-visible:outline-none focus-visible:border focus-visible:border-${c}-200 dark:focus-visible:border-${c}-800 focus-visible:ring-${c}-200/50 dark:focus-visible:ring-${c}-800/50`],

  // variants
  [/^switch-checked(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=checked]:switch-focus-${c} data-[state=checked]:bg-${c}-600 dark:data-[state=checked]:bg-${c}-500`],
  [/^switch-unchecked(-(\S+))?$/, ([, , c = 'gray']) => `data-[state=unchecked]:switch-focus-${c} data-[state=unchecked]:bg-${c}-200 dark:data-[state=unchecked]:bg-${c}-800/80`],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
