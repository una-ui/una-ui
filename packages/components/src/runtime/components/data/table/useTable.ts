import type { PaginationState, Table } from '@tanstack/vue-table'
import type { ComputedRef } from 'vue'
import { createContext } from 'reka-ui'

/**
 * `NTable`'s own context — the seam its built-in pagination bar reads through,
 * so the bar and anything composed into `#pagination` reach the table instance
 * without a template ref. `defineExpose({ ...table })` stays for consumers.
 *
 * Parts inject with a `null` fallback so they still work on their own, taking
 * the table as a prop instead — the same nested-vs-standalone pattern as
 * `NPaginationInfo`.
 */
export const [useTable, provideTableContext] = createContext<{
  table: Table<any>
  pagination: ComputedRef<PaginationState>
  setPageIndex: (index: number) => void
  setPageSize: (size: number) => void
}>('Table')
