import type { NLinkProps } from '../types'
import { reactivePick } from '@vueuse/core'
import { diff, isEqual } from 'ohash/utils'

export const linkKeys = [
  'active',
  'activeClass',
  'ariaCurrentValue',
  'disabled',
  'exact',
  'exactActiveClass',
  'exactHash',
  'exactQuery',
  'external',
  'href',
  'inactiveClass',
  'label',
  'navLinkActive',
  'navLinkInactive',
  'noPrefetch',
  'noRel',
  'prefetch',
  'prefetchOn',
  'prefetchedClass',
  'rel',
  'replace',
  'target',
  'to',
  'trailingSlash',
] as const

export function pickLinkProps(link: NLinkProps & { [key: string]: any }) {
  const keys = Object.keys(link)

  const ariaKeys = keys.filter(key => key.startsWith('aria-'))
  const dataKeys = keys.filter(key => key.startsWith('data-'))

  const propsToInclude = [
    ...linkKeys,
    ...ariaKeys,
    ...dataKeys,
  ]

  return reactivePick(link, ...propsToInclude)
}

/**
 * Checks if two objects are partially equal by comparing only the keys that exist in both objects
 * @param item1 - First object to compare
 * @param item2 - Second object to compare
 * @returns true if the objects are partially equal
 * @example
 * ```ts
 * const equal = isPartiallyEqual({ a: 1, b: 2 }, { a: 1 })
 * // returns true because 'a' matches, 'b' is ignored as it only exists in item1
 * ```
 */
export function isPartiallyEqual(item1: any, item2: any): boolean {
  const diffedKeys = diff(item1, item2).reduce((filtered: Set<string>, q: any) => {
    if (q.type === 'added') {
      filtered.add(q.key)
    }
    return filtered
  }, new Set<string>())

  const item1Filtered = Object.fromEntries(Object.entries(item1).filter(([key]) => !diffedKeys.has(key)))
  const item2Filtered = Object.fromEntries(Object.entries(item2).filter(([key]) => !diffedKeys.has(key)))

  return isEqual(item1Filtered, item2Filtered)
}
