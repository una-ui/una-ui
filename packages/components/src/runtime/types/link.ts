import type { RouteLocationRaw, RouterLinkProps } from 'vue-router'

/**
 * A copy of NuxtLinkProps from nuxt (to preserve compatibility)
 *
 * @see https://nuxt.com/docs/4.x/api/components/nuxt-link
 */
interface NuxtLinkProps extends Omit<RouterLinkProps, 'to'> {
  custom?: boolean
  to?: RouteLocationRaw
  href?: NuxtLinkProps['to']
  external?: boolean
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null
  rel?: 'noopener' | 'noreferrer' | 'nofollow' | 'sponsored' | 'ugc' | (string & {}) | null
  noRel?: boolean
  prefetchedClass?: string
  prefetch?: boolean
  prefetchOn?: 'visibility' | 'interaction' | Partial<{
    visibility: boolean
    interaction: boolean
  }>
  noPrefetch?: boolean
  trailingSlash?: 'append' | 'remove'
}

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
   * Disable the link
   *
   * @default false
   */
  disabled?: boolean
  /**
   * Force the link to be active independent of the current route.
   *
   * @default false
   */
  active?: boolean
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
