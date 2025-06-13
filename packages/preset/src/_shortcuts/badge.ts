type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge-default-variant': 'badge-soft',
  'badge-close-icon': 'i-close',

  // base
  'badge': 'text-xs leading-tight py-0.3333333333333333em px-0.6666666666666666em gap-x-0.25em inline-flex items-center rounded-md font-medium text-brand',
  'badge-icon-base': 'text-1em',
  'badge-close': 'relative rounded-sm h-1.16em w-1.16em grid place-items-center -mr-0.375em hover:bg-brand/20 bg-transparent',
  'badge-close-icon-base': 'text-brand/75 group-hover:text-brand/90',

  // variants
  'badge-soft-gray': 'bg-muted text-muted n-gray-900 dark:n-gray-50 ring-1 ring-gray-700/10 dark:ring-gray-400/30',
  'badge-solid-black': 'bg-inverted text-inverted n-gray-300 dark:n-gray-600',
  'badge-outline-white': 'bg-background text-foreground ring-1 ring-base n-gray-600 dark:n-gray-300',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
  [/^badge-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-100 dark:bg-${c}-800 n-${c}-700 dark:n-${c}-200`],
  [/^badge-soft(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-50 n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 dark:bg-${c}-400/10 dark:ring-${c}-400/30`],
  [/^badge-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-transparent n-${c}-700 dark:n-${c}-400 ring-1 ring-${c}-700/10 dark:ring-${c}-400/30`],
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]
