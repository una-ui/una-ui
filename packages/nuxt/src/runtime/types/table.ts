import type { HTMLAttributes } from 'vue'
import type {
  ColumnDef,
  GroupColumnDef,
} from '@tanstack/vue-table'

export interface NTableProps<TData, TValue> extends NTableRootProps {
  /**
   * @see https://tanstack.com/table/latest/docs/guide/data
   */
  data: TData[]
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/column
   */
  columns: ColumnDef<TData, TValue>[] | GroupColumnDef<TData, TValue>[]
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/table#getrowid
   */
  rowId?: string
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/table#autoresetall
   */
  autoResetAll?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/row-selection#enablerowselection
   */
  enableRowSelection?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/row-selection#enablemultirowselection
   */
  enableMultiRowSelection?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/row-selection#enablesubrowselection
   */
  enableSubRowSelection?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/column-filtering#enablecolumnfilters
   */
  enableColumnFilters?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#enablesorting
   */
  enableSorting?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#enablemultisort
   */
  enableMultiSort?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#enablemultiremove
   */
  enableMultiRemove?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#enablesortingremoval
   */
  enableSortingRemoval?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#manualsorting
   */
  manualSorting?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#maxmultisortcolcount
   */
  maxMultiSortColCount?: number
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/pagination#manualpagination
   */
  manualPagination?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/pagination#pagecount
   */
  pageCount?: number
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/pagination#rowcount
   */
  rowCount?: number
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/pagination#autoresetpageindex
   */
  autoResetPageIndex?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#sortingfns
   */
  sortingFns?: Record<string, (a: any, b: any) => number>
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#sortdescfirst-1
   */
  sortDescFirst?: boolean
  /**
   * @see https://tanstack.com/table/latest/docs/api/features/sorting#ismultisortevent
   */
  isMultiSortEvent?: (e: unknown) => boolean

  // sub-components props
  _tableHead?: NTableHeadProps
  _tableHeader?: NTableHeaderProps
  _tableFooter?: NTableFooterProps
  _tableBody?: NTableBodyProps
  _tableCaption?: NTableCaptionProps
  _tableRow?: NTableRowProps
  _tableCell?: NTableCellProps
  _tableEmpty?: NTableEmptyProps
  _tableLoading?: NTableLoadingProps

  loading?: boolean

  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/table.ts
   */
  una?: NTableUnaProps
}

export interface NTableRootProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableRoot' | 'tableRootWrapper'>
}

export interface NTableBodyProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableBody'>
}

export interface NTableHeadProps {
  class?: HTMLAttributes['class']

  dataPinned?: 'left' | 'right' | false

  una?: Pick<NTableUnaProps, 'tableHead'>
}

export interface NTableHeaderProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableHeader'>
}

export interface NTableFooterProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableFooter'>
}

export interface NTableRowProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableRow'>
}

export interface NTableCellProps {
  class?: HTMLAttributes['class']

  dataPinned?: 'left' | 'right' | false

  una?: Pick<NTableUnaProps, 'tableCell'>
}

export interface NTableEmptyProps {
  class?: HTMLAttributes['class']
  colspan?: number

  _tableCell?: NTableCellProps
  _tableRow?: NTableRowProps

  una?: Pick<NTableUnaProps, 'tableEmpty'>
}

export interface NTableLoadingProps {
  enabled?: boolean
  class?: HTMLAttributes['class']
  colspan?: number

  _tableCell?: NTableCellProps
  _tableRow?: NTableRowProps

  una?: Pick<NTableUnaProps, 'tableLoading'>
}

export interface NTableCaptionProps {
  class?: HTMLAttributes['class']

  una?: Pick<NTableUnaProps, 'tableCaption'>
}

interface NTableUnaProps {
  tableRoot?: HTMLAttributes['class']
  tableRootWrapper?: HTMLAttributes['class']
  tableBody?: HTMLAttributes['class']
  tableHead?: HTMLAttributes['class']
  tableHeader?: HTMLAttributes['class']
  tableFooter?: HTMLAttributes['class']
  tableRow?: HTMLAttributes['class']
  tableCell?: HTMLAttributes['class']
  tableCaption?: HTMLAttributes['class']
  tableEmpty?: HTMLAttributes['class']
  tableLoading?: HTMLAttributes['class']
}
