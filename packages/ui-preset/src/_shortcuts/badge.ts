type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge-default-variant': 'badge-soft',
  'badge-close-icon': 'i-close',

  // base
  'badge': 'badge-rectangle py-1 px-2 gap-x-1.5 inline-flex items-center rounded-md text-xs font-medium text-brand',
  'badge-close': 'relative rounded-sm flex -mr-.5 hover:bg-brand/20',
  'badge-close-icon-base': 'text-brand/50 group-hover:text-brand/75',

  // variants
  // 'badge-solid-gray': 'badge bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-100 dark:bg-${c}-800  n-${c}-700 dark:n-${c}-200`],
  [/^badge-soft(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-50 text-${c}-700 ring-1 ring-${c}-700/10 ring-inset dark:bg-${c}-400/10 dark:text-${c}-400 dark:ring-${c}-400/30`],
  [/^badge-outline(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-transparent text-${c}-700 dark:text-${c}-400 ring-1 ring-${c}-700/10 dark:ring-${c}-400/30`],
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]
