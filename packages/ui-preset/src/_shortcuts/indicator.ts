type IndicatorPrefix = 'indicator'

export const staticIndicator: Record<`${IndicatorPrefix}-${string}` | IndicatorPrefix, string> = {
  // config
  'indicator-default-variant': 'indicator-solid',
  'indicator-default-placement': 'indicator-top-right',

  // base
  'indicator': 'z-100 absolute min-h-1.55em min-w-1.55em inline-flex items-center justify-center rounded-full py-none px-0.2em ring-2 ring-$c-background',
  'indicator-label': '',

  // options
  'indicator-dot': 'min-w-0.5em min-h-0.5em',

  // wrapper
  'indicator-wrapper': 'relative inline-flex',

  // placements
  'indicator-top-right': 'top-0 -ml-1.3em',
  'indicator-bottom-right': 'bottom-0 -ml-1.3em',
  // 'indicator-top-left': 'top-0 left-0 -mt-1 -ml-1',
  // 'indicator-bottom-left': 'bottom-0 left-0 -mb-1 -ml-1',
}

export const dynamicIndicator = [
  [/^indicator-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 dark:bg-${c}-500 text-inverted`],
]

export const indicator = [
  ...dynamicIndicator,
  staticIndicator,
]
