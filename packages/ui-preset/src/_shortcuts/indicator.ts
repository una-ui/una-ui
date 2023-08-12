type IndicatorPrefix = 'indicator'

export const staticIndicator: Record<`${IndicatorPrefix}-${string}` | IndicatorPrefix, string> = {
  // config
  'indicator-default-variant': 'indicator-solid-error',
  'indicator-default-placement': 'indicator-top-right',

  // base
  'indicator': 'z-100 absolute min-h-1.15em min-w-1.15em inline-flex items-center justify-center rounded-full p-0.2em leading-none ring-2 ring-$c-background',
  'indicator-label': 'text-0.7em leading-none font-semibold',

  // wrapper
  'indicator-wrapper': 'relative inline-block',

  // placements
  'indicator-top-left': 'top-0 left-0 -mt-1 -ml-1',
  'indicator-top-right': 'top-0 -ml-0.8125em -mt-0.25em',
  'indicator-bottom-left': 'bottom-0 left-0 -mb-1 -ml-1',
  'indicator-bottom-right': 'bottom-0 -ml-0.8125em -mb-0.25em',
}

export const dynamicIndicator: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^indicator-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-600 text-white`],
  [/^indicator-soft(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-100 text-${c}-800 dark:bg-${c}-800 dark:text-${c}-100`],
]

export const indicator = [
  ...dynamicIndicator,
  staticIndicator,
]
