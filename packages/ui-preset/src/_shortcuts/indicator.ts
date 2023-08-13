type IndicatorPrefix = 'indicator'

export const staticIndicator: Record<`${IndicatorPrefix}-${string}` | IndicatorPrefix, string> = {
  // config
  'indicator-default-variant': 'indicator-solid',
  'indicator-default-placement': 'indicator-top-right',

  // base
  'indicator': 'absolute min-h-1.35em min-w-1.35em inline-flex items-center justify-center rounded-full py-none px-0.2em ring-2 ring-$c-background',
  'indicator-label': '',

  // wrapper
  'indicator-wrapper': 'relative inline-flex',

  // placements
  'indicator-top-right': 'top-0 -ml-1.3em -mt-0.1em',
  'indicator-bottom-right': 'bottom-0 -ml-1.3em -mb-0.1em',
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
