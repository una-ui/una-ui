export interface NBadgeProps {
  badge?: string
  label?: string
  /**
   * Display an icon on the left side of the badge,
   * this also allows you to add utility classes to customize icon.
   *
   * @example
   * icon="i-heroicons-information-circle text-green-500 dark:text-green-400 text-2xl"
   */
  icon?: string

  closable?: boolean

  nv?: {
    baseIconBase?: string
  }
}
