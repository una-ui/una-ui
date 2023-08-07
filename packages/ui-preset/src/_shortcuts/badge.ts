type BadgePrefix = 'badge'

export const staticBadge: Record<`${BadgePrefix}-${string}` | BadgePrefix, string> = {
  // config
  'badge': 'flex',
  'badge-test': 'flex',
}

export const dynamicBadge: [RegExp, (params: RegExpExecArray) => string][] = [
  // variants
]

export const badge = [
  ...dynamicBadge,
  staticBadge,
]
