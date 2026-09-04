import type {
  Column,
  ColumnDef,
  CoreOptions,
  FilterFn,
  FilterFnOption,
  GroupColumnDef,
  Row,
  RowData,
  Table,
} from '@tanstack/vue-table'
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import type { NButtonProps } from './button'
import type { NCheckboxProps } from './checkbox'
import type { NInputProps } from './input'
import type { NPaginationProps } from './pagination'
import type { NProgressProps } from './progress'
import type { NScrollAreaProps, NScrollAreaUnaProps } from './scroll-area'

export interface NTableProps<TData, TValue> extends Omit<CoreOptions<TData>, 'data' | 'columns' | 'getCoreRowModel' | 'state' | 'onStateChange' | 'renderFallbackValue'>, Pick<NTableEmptyProps, 'emptyText' | 'emptyIcon'> {
  class?: HTMLAttributes['class']
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/table#state
   */
  state?: CoreOptions<TData>['state']
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/table#onstatechange
   */
  onStateChange?: CoreOptions<TData>['onStateChange']
  /**
   * @see https://tanstack.com/table/latest/docs/api/core/table#renderfallbackvalue
   */
  renderFallbackValue?: CoreOptions<TData>['renderFallbackValue']
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
   * @see https://tanstack.com/table/latest/docs/api/features/column-filtering#manualfiltering
   */
  manualFiltering?: boolean
  /**
   * The filter function to use for global filtering.
   * Can be a built-in filter function name or a custom filter function.
   *
   * @see https://tanstack.com/table/latest/docs/api/features/global-filtering#globalfilterfn
   */
  globalFilterFn?: FilterFnOption<TData>
  /**
   * Custom filter functions that can be referenced by columns or globalFilterFn by string key.
   *
   * @see https://tanstack.com/table/latest/docs/api/features/column-filtering#filterfns
   */
  filterFns?: Record<string, FilterFn<TData>>
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
  _tableRow?: NTableRowProps | ((row?: TData) => NTableRowProps)
  _tableCell?: NTableCellProps
  _tableEmpty?: NTableEmptyProps
  _tableLoading?: NTableLoadingProps
  _tableSortButton?: Omit<NTableSortButtonProps<TData, TValue>, 'column'>
  _tableColumnFilter?: Omit<NTableColumnFilterProps<TData, TValue>, 'column'>
  _tableSelectionHeader?: Omit<NTableSelectionHeaderProps<TData>, 'table'>
  _tableSelectionCell?: Omit<NTableSelectionCellProps<TData>, 'row'>
  _tableExpandButton?: Omit<NTableExpandButtonProps<TData>, 'row'>
  _tablePagination?: Omit<NTablePaginationProps, 'table'>
  _scrollArea?: NScrollAreaProps

  /**
   * Whether the table is loading.
   */
  loading?: boolean
  /**
   * Render the built-in pagination bar inside the root, below the table.
   * Configure it through `_tablePagination`, or replace it with the
   * `pagination` slot.
   *
   * @default false
   */
  showPagination?: boolean
  /**
   * `UnaUI` preset configuration
   *
   * @see https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/table.ts
   */
  una?: NTableUnaProps & NScrollAreaUnaProps
}

export interface NTableBodyProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  una?: Pick<NTableUnaProps, 'tableBody'>
}

export interface NTableHeadProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  dataPinned?: 'left' | 'right' | false
  una?: Pick<NTableUnaProps, 'tableHead'>
}

export interface NTableHeaderProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  una?: Pick<NTableUnaProps, 'tableHeader'>
}

export interface NTableFooterProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  una?: Pick<NTableUnaProps, 'tableFooter'>
}

export interface NTableRowProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  una?: Pick<NTableUnaProps, 'tableRow'>
}

export interface NTableCellProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  dataPinned?: 'left' | 'right' | false
  una?: Pick<NTableUnaProps, 'tableCell'>
}

export interface NTableEmptyProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  colspan?: number
  /**
   * The text to display when the table is empty.
   */
  emptyText?: string
  /**
   * The icon to display when the table is empty.
   */
  emptyIcon?: string
  _tableCell?: NTableCellProps
  _tableRow?: NTableRowProps

  una?: Pick<NTableUnaProps, 'tableEmpty' | 'tableRow' | 'tableCell' | 'tableEmptyText' | 'tableEmptyIcon'>
}

export interface NTableLoadingProps {
  [key: string]: any
  size?: HTMLAttributes['class']
  enabled?: boolean
  class?: HTMLAttributes['class']
  colspan?: number
  _tableCell?: NTableCellProps
  _tableRow?: NTableRowProps
  _tableProgress?: NProgressProps
  una?: Pick<NTableUnaProps, 'tableLoading' | 'tableLoadingCell' | 'tableLoadingRow'>
}

export interface NTableCaptionProps extends PrimitiveProps {
  [key: string]: any
  class?: HTMLAttributes['class']
  una?: Pick<NTableUnaProps, 'tableCaption'>
}

export interface NTableSortButtonProps<TData = any, TValue = any> extends Omit<NButtonProps, 'una'> {
  /** The TanStack column this button sorts. Supplied by `NTable`. */
  column: Column<TData, TValue>
  una?: Pick<NTableUnaProps, 'tableSortButton' | 'tableSortIconBase' | 'tableSortAscIcon' | 'tableSortDescIcon' | 'tableSortNoneIcon'> & NButtonProps['una']
}

export interface NTableColumnFilterProps<TData = any, TValue = any> extends Omit<NInputProps, 'una'> {
  class?: HTMLAttributes['class']
  /** The TanStack column this input filters. Supplied by `NTable`. */
  column: Column<TData, TValue>
  una?: Pick<NTableUnaProps, 'tableColumnFilter'> & NInputProps['una']
}

export interface NTableSelectionHeaderProps<TData = any> extends Omit<NCheckboxProps, 'una'> {
  /** The TanStack table instance. Supplied by `NTable`. */
  table: Table<TData>
  una?: Pick<NTableUnaProps, 'tableSelection' | 'tableSelectionHeader'> & NCheckboxProps['una']
}

export interface NTableSelectionCellProps<TData = any> extends Omit<NCheckboxProps, 'una'> {
  /** The TanStack row this checkbox selects. Supplied by `NTable`. */
  row: Row<TData>
  una?: Pick<NTableUnaProps, 'tableSelection' | 'tableSelectionCell'> & NCheckboxProps['una']
}

export interface NTableExpandButtonProps<TData = any> extends Omit<NButtonProps, 'una'> {
  /** The TanStack row this button expands. Supplied by `NTable`. */
  row: Row<TData>
  una?: Pick<NTableUnaProps, 'tableExpandButton' | 'tableExpandIconBase' | 'tableExpandIcon'> & NButtonProps['una']
}

export interface NTablePaginationProps extends Omit<NPaginationProps, 'page' | 'defaultPage' | 'itemsPerPage' | 'total' | 'una'> {
  /**
   * The TanStack table instance. Supplied through context when rendered by
   * `NTable`; pass it directly to use the bar on its own, outside the root.
   */
  table?: Table<any>
  una?: Pick<NTableUnaProps, 'tablePagination' | 'tablePaginationStatus' | 'tablePaginationControls' | 'tablePaginationPageSize' | 'tablePaginationPage' | 'tablePaginationNav'> & NPaginationProps['una']
}

export interface NTableUnaProps {
  table?: HTMLAttributes['class']
  tableRoot?: HTMLAttributes['class']
  tableBody?: HTMLAttributes['class']
  tableHead?: HTMLAttributes['class']
  tableHeader?: HTMLAttributes['class']
  tableFooter?: HTMLAttributes['class']
  tableRow?: HTMLAttributes['class']
  tableCell?: HTMLAttributes['class']
  tableCaption?: HTMLAttributes['class']
  tableLoading?: HTMLAttributes['class']
  tableLoadingRow?: HTMLAttributes['class']
  tableLoadingCell?: HTMLAttributes['class']
  tableEmpty?: HTMLAttributes['class']
  tableEmptyText?: HTMLAttributes['class']
  tableEmptyIcon?: HTMLAttributes['class']

  // injected widgets
  tableSortButton?: HTMLAttributes['class']
  tableSortIconBase?: HTMLAttributes['class']
  tableSortAscIcon?: HTMLAttributes['class']
  tableSortDescIcon?: HTMLAttributes['class']
  tableSortNoneIcon?: HTMLAttributes['class']
  tableColumnFilter?: HTMLAttributes['class']
  tableSelection?: HTMLAttributes['class']
  tableSelectionHeader?: HTMLAttributes['class']
  tableSelectionCell?: HTMLAttributes['class']
  tableExpandButton?: HTMLAttributes['class']
  tableExpandIconBase?: HTMLAttributes['class']
  tableExpandIcon?: HTMLAttributes['class']
  tablePagination?: HTMLAttributes['class']
  tablePaginationStatus?: HTMLAttributes['class']
  tablePaginationControls?: HTMLAttributes['class']
  tablePaginationPageSize?: HTMLAttributes['class']
  tablePaginationPage?: HTMLAttributes['class']
  tablePaginationNav?: HTMLAttributes['class']
}

/**
 * Per-column configuration, read from `columnDef.meta`.
 *
 * `NTable` passes only these keys through to its parts — anything else on
 * `meta` stays out of the DOM.
 */
declare module '@tanstack/vue-table' {

  interface ColumnMeta<TData extends RowData, TValue> {
    una?: NTableUnaProps
    _tableHead?: NTableHeadProps
    _tableCell?: NTableCellProps
    _tableSortButton?: Omit<NTableSortButtonProps<TData, TValue>, 'column'>
    _tableColumnFilter?: Omit<NTableColumnFilterProps<TData, TValue>, 'column'>
    _tableSelectionHeader?: Omit<NTableSelectionHeaderProps<TData>, 'table'>
    _tableSelectionCell?: Omit<NTableSelectionCellProps<TData>, 'row'>
    _tableExpandButton?: Omit<NTableExpandButtonProps<TData>, 'row'>
  }
}
