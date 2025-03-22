import type { NuxtLinkProps } from 'nuxt/app'

export interface NLinkProps extends NuxtLinkProps {
  /**
   * The label of the link
   */
  label?: string
  /**
   * Manually enable/disable the exact match
   *
   * @default false
   */
  exact?: boolean
  /**
   * Manually enable/disable the exact match for the query string
   *
   * @default false
   */
  exactQuery?: boolean | 'partial'
  /**
   * Manually enable/disable the exact match for the hash
   *
   * @default false
   */
  exactHash?: boolean

  /**
   * Active classes to apply when the link is inactive
   *
   * @example 'text-primary'
   */
  inactiveClass?: string

  /**
   * Useful in combination with `NavLink` to apply the active class to the parent element
   *
   */
  navLinkActive?: string

  /**
   * Useful in combination with `NavLink` to apply the inactive class to the parent element
   */
  navLinkInactive?: string
}
