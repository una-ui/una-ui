export interface NBadgeProps {
  /**
   * Allows you to add `UnaUI` badge preset properties,
   * Think of it as a shortcut for adding options or variants to the preset if available.
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/badge.ts
   * @example
   * badge="solid-yellow"
  */
  badge?: string
  /**
   * Add a label to the badge.
  */
  label?: string
  /**
   * Display an icon on the left side of the badge,
   * this also allows you to add utility classes to customize icon.
   *
   * @example
   * icon="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  icon?: string

  /**
   * Display `close` icon on the right side of the badge,
   *
   * @default false
  */
  closable?: boolean

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/badge.ts
  */
  una?: {
    // base
    badgeDefaultVariant?: string
    badge?: string
    badgeIconBase?: string
    badgeClose?: string
    badgeCloseIconBase?: string

    // icons
    badgeCloseIcon?: string
  }
}
