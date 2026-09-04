import type { ComputedRef } from 'vue'
import { createContext } from 'reka-ui'

/**
 * `NPagination`'s own context, complementing reka's `PaginationRootContext`.
 *
 * reka provides `page` and `pageCount` already, but carries neither `total`
 * nor `itemsPerPage`, and its only emit is `update:page` — so a part that
 * renders "Showing 1–10 of 50" or changes the page size has nothing to read
 * or write through. This supplies exactly that gap; parts read `page` and
 * `pageCount` from reka directly.
 *
 * Parts inject with a `null` fallback so they still work standalone, falling
 * back to their own props.
 */
export const [usePagination, providePaginationContext] = createContext<{
  total: ComputedRef<number | undefined>
  itemsPerPage: ComputedRef<number>
  onItemsPerPageChange: (value: number) => void
}>('Pagination')
