type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  // icons
  'table-sort-asc-icon': 'i-lucide-arrow-up-wide-narrow',
  'table-sort-desc-icon': 'i-lucide-arrow-down-narrow-wide',
  'table-sort-none-icon': 'i-lucide-arrow-up-down',
  'table-expand-icon': 'i-radix-icons-chevron-down',

  // table-root
  'table-root': 'relative w-full overflow-x-auto overflow-y-hidden border border-border rounded-md',
  'table': 'w-full caption-bottom text-sm',
  'table-body': '[&_tr:last-child]:border-0',
  'table-caption': 'mt-4 text-sm text-muted-foreground',

  // table-head
  'table-head': 'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
  'table-head-pinned': 'sticky bg-background',
  'table-head-pinned-left': 'left-0',
  'table-head-pinned-right': 'right-0',

  // table-header
  'table-header': '[&_tr]:border-b [&_tr]:border-border',

  // table-row
  'table-row': 'border-b border-border transition-colors hover:bg-muted/50 data-[filter=true]:hover:bg-background data-[state=selected]:bg-muted',

  // table-cell
  'table-cell': 'p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
  'table-cell-pinned': 'sticky bg-background',
  'table-cell-pinned-left': 'left-0',
  'table-cell-pinned-right': 'right-0',

  // table-empty
  'table-empty-row': '',
  'table-empty-cell': 'p-4 whitespace-nowrap align-middle text-sm text-muted-foreground bg-background',
  'table-empty': 'flex items-center flex-col justify-center py-10 gap-4',
  'table-empty-text': 'text-center text-wrap',
  'table-empty-icon-name': 'i-tabler-database-x size-2xl',

  // table-loading
  'table-loading-row': 'data-[loading=true]:border-0 absolute inset-x-0 -mt-1.5px',
  'table-loading-cell': '',
  'table-loading': 'absolute inset-x-0 overflow-hidden p-0',

  // table-sort-button
  // `-ml-1em` cancels the button's own padding so sortable headers align with
  // plain ones. `font-normal!` because `.btn`'s font-medium is emitted after
  // this shortcut in the same layer and would otherwise win.
  'table-sort-button': 'font-normal! -ml-1em',
  // sized by width/height, not font-size: `btn-trailing` sets font-size on the
  // same element and is emitted later, so `text-sm` here was inert
  'table-sort-icon-base': 'square-0.875rem',

  // table-column-filter
  'table-column-filter': 'w-auto',

  // table-selection
  'table-selection': '',
  'table-selection-header': '',
  'table-selection-cell': '',

  // table-expand-button
  'table-expand-button': '',
  'table-expand-icon-base': 'transform transition-transform duration-200',

  // table-pagination
  // the built-in bar sits inside `table-root` below the table, outside the
  // scroll area, so it never scrolls with a wide table
  // table-pagination — shadcn's DataTablePagination, part for part: status on
  // the left, then rows per page, "Page X of Y" and the navigation on the
  // right; a sibling below `table-root`, hence the `mt-4`
  'table-pagination': 'mt-4 flex items-center justify-between px-4',
  'table-pagination-status': 'hidden flex-1 text-sm text-muted-foreground lg:flex',
  'table-pagination-controls': 'flex w-full items-center gap-8 lg:w-fit',
  'table-pagination-page-size': 'hidden items-center gap-2 lg:flex',
  'table-pagination-page': 'flex w-fit items-center justify-center text-sm',
  'table-pagination-nav': 'ml-auto flex items-center lg:ml-0',

  // table-footer
  'table-footer': 'border-t border-border bg-muted font-medium [&>tr]:last:border-b-0',
}

export const dynamicTable: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const table = [
  ...dynamicTable,
  staticTable,
]
