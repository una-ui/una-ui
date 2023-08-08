type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge-default-variant': 'badge-soft',
  'badge-close-icon': 'i-close',

  // base
  'badge': 'text-xs py-0.375em px-0.625em gap-x-0.25em inline-flex items-center rounded-md font-medium text-brand',
  'badge-icon-base': 'text-1em',
  'badge-close': 'relative rounded-sm flex -mr-0.375em hover:bg-brand/20',
  'badge-close-icon-base': 'text-brand/50 group-hover:text-brand/75 text-1em',

  // variants
  'badge-soft-gray': 'badge bg-muted text-muted n-gray-900 dark:n-gray-50 ring-1 ring-gray-700/10 dark:ring-gray-400/30',
  'badge-solid-black': 'badge bg-inverted text-inverted n-gray-300 dark:n-gray-500',
  'badge-outline-white': 'badge bg-base text-base ring-1 ring-base n-gray-50 dark:n-gray-950',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-100 dark:bg-${c}-800 n-${c}-700 dark:n-${c}-200`],
  [/^badge-soft(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-${c}-50 n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 ring-inset dark:bg-${c}-400/10 dark:ring-${c}-400/30`],
  [/^badge-outline(-(\S+))?$/, ([, , c = 'primary']) => `badge bg-transparent n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 dark:ring-${c}-400/30`],
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]
