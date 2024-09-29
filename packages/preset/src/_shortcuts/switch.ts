type SwitchPrefix = 'switch'

export const staticSwitch: Record<`${SwitchPrefix}-${string}` | SwitchPrefix, string> = {
  // base
  'switch': 'bg-brand switch-focus h-1.25em w-2.25em switch-disabled inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent rounded-full shadow-sm',
  'switch-disabled': 'data-[disabled]:n-disabled',
  'switch-focus': 'focus-visible:ring-brand focus-visible:ring-offset-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

  // thumb
  'switch-thumb': 'h-1em w-1em flex items-center justify-center absolute pointer-events-none block border border-base rounded-full bg-base shadow-lg ring-0 transition-transform',
  'switch-thumb-checked': 'translate-x-1.01em',
  'switch-thumb-unchecked': 'translate-x-0.03em',

  // icon
  'switch-icon': 'text-0.7em',
  'switch-icon-unchecked': 'text-muted',
  'switch-icon-checked': 'text-muted',

  // loading
  'switch-loading-icon': 'text-gray animate-spin text-0.8em',
  'switch-loading-icon-name': 'i-loading',
}

export const dynamicSwitch = [
  [
    /^switch-checked(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, color = 'primary']) =>
      `data-[state=checked]:n-${color}-600 dark:data-[state=checked]:n-${color}-500`,
  ],
  [
    /^switch-unchecked(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, color = 'gray']) =>
      `data-[state=unchecked]:n-${color}-200 dark:data-[state=unchecked]:n-${color}-700/58`,
  ],
]

export const _switch = [
  ...dynamicSwitch,
  staticSwitch,
]
