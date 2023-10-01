export interface NLinkProps {
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
  exactQuery?: boolean
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
}
