type IndicatorPrefix = 'indicator'

export const staticIndicator: Record<`${IndicatorPrefix}-${string}` | IndicatorPrefix, string> = {
  // config
  'indicator-default-variant': 'indicator-solid',
  'indicator-default-placement': 'indicator-top-right',

  // base
  'indicator': 'absolute min-h-1.5em min-w-1.5em flex items-center justify-center rounded-full font-medium py-none px-0.3em ring-2 ring-background',

  // indicator type sizes
  'indicator-dot': 'size-0.45em',
  'indicator-label': 'size-0.75em',

  // wrapper
  'indicator-wrapper': 'relative inline-flex',

  // placements
  'indicator-top-right': 'top-0 -ml-1.3em -mt-0.1em',
  'indicator-bottom-right': 'bottom-0 -ml-1.3em -mb-0.1em',
  'indicator-top-left': 'top-0 left-0 -mr-1.3em -mt-0.1em',
  'indicator-bottom-left': 'bottom-0 left-0 -mr-1.3em -mb-0.1em',
}

export const dynamicIndicator = [
  [/^indicator-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 dark:bg-${c}-500 text-background`],
]

export const indicator = [
  ...dynamicIndicator,
  staticIndicator,
]
