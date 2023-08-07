type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge-default-variant': 'badge-soft',

  // base
  'badge': 'badge-rectangle inline-flex items-center rounded-md text-xs font-medium',

  // options
  'badge-square': 'px-1 py-1',
  'badge-rectangle': 'py-1 px-2',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-100 text-${c}-700 dark:bg-${c}-800 dark:text-${c}-200`],
  [/^badge-soft(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-50 text-${c}-700 ring-1 ring-${c}-700/10 ring-inset dark:bg-${c}-400/10 dark:text-${c}-400 dark:ring-${c}-400/30`],
  [/^badge-outline(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-transparent text-${c}-700 dark:text-${c}-400 ring-1 ring-${c}-700/10 dark:ring-${c}-400/30`],
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]
