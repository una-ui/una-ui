type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  // config
  'table-default-variant': 'table-solid-gray',
  'table': '',

  // table-root
  'table-root-wrapper': 'relative w-full overflow-x-auto overflow-y-hidden border border-border rounded-md',
  'table-root': 'w-full caption-bottom text-sm',
  'table-body': '[&_tr:last-child]:border-0',
  'table-caption': 'mt-4 text-sm text-muted',

  // table-head
  'table-head': 'h-12 px-4 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
  'table-head-pinned': 'sticky bg-background',
  'table-head-pinned-left': 'left-0',
  'table-head-pinned-right': 'right-0',

  // table-header
  'table-header': '[&_tr]:border-b [&_tr]:border-border',

  // table-row
  'table-row': 'border-b border-border transition-colors hover:bg-muted-foreground data-[filter=true]:hover:bg-background data-[state=selected]:bg-muted-foreground',

  // table-cell
  'table-cell': 'p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
  'table-cell-pinned': 'sticky bg-background',
  'table-cell-pinned-left': 'left-0',
  'table-cell-pinned-right': 'right-0',

  // table-empty
  'table-empty-row': '',
  'table-empty-cell': 'p-4 whitespace-nowrap align-middle text-sm text-muted bg-background',
  'table-empty': 'flex items-center justify-center py-10',

  // table-loading
  'table-loading-icon': 'animate-spin text-lg', // TODO: to add
  'table-loading-icon-name': 'i-lucide-refresh-ccw', // TODO: to add
  'table-loading-row': 'data-[loading=true]:border-0 absolute inset-x-0 -mt-1.5px',
  'table-loading-cell': '',
  'table-loading': 'absolute inset-x-0 overflow-hidden p-0',

  // table-footer
  'table-footer': 'border-t border-border bg-muted-foreground font-medium [&>tr]:last:border-b-0',
}

export const dynamicTable: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const table = [
  ...dynamicTable,
  staticTable,
]
