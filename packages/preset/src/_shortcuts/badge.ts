type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge-close-icon': 'i-close',

  // base
  'badge': 'px-2 py-0.5 font-medium overflow-hidden transition-[color,box-shadow] inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-brand gap-1 w-fit shrink-0',
  'badge-label': 'text-0.75em',
  'badge-icon-base': 'square-0.75em',
  'badge-close': 'relative rounded-sm h-1.16em w-1.16em grid place-items-center -mr-0.375em hover:bg-brand/20 bg-transparent',
  'badge-close-icon-base': 'text-brand/75 group-hover:text-brand/90',

  // variants
  'badge-soft-gray': 'bg-muted text-muted-foreground n-gray-900 dark:n-gray-50 ring-1 ring-gray-700/10 dark:ring-gray-400/30',
  'badge-solid-black': 'bg-foreground text-background n-gray-300 dark:n-gray-600',
  'badge-outline-white': 'bg-background text-foreground ring-1 ring-ring n-gray-600 dark:n-gray-300',
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
