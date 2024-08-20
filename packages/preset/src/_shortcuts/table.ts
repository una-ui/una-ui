type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  // config
  'table-default-variant': 'table-solid-gray',
  'table': '',

  // table-root
  'table-root': 'w-full caption-bottom text-sm',
  'table-root-wrapper': 'relative w-full overflow-x-auto overflow-y-hidden border border-base rounded-md',
  'table-body': '[&_tr:last-child]:border-0 border-base',
  'table-caption': 'mt-4 text-sm text-muted',

  // table-head
  'table-head': 'h-12 px-4 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0',
  'table-head-pinned': 'sticky bg-base',
  'table-head-pinned-left': 'left-0',
  'table-head-pinned-right': 'right-0',

  // table-header
  'table-header': '[&_tr]:border-b border-base',

  // table-row
  'table-row': 'border-b border-base hover:bg-muted data-[filter=true]:hover:bg-base data-[state=selected]:bg-muted',

  // table-cell
  'table-cell': 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  'table-cell-pinned': 'sticky bg-base',
  'table-cell-pinned-left': 'left-0',
  'table-cell-pinned-right': 'right-0',

  // table-empty
  'table-empty-row': '',
  'table-empty-cell': 'p-4 whitespace-nowrap align-middle text-sm text-muted hover:bg-base',
  'table-empty': 'flex items-center justify-center py-10',

  // table-loading
  'table-loading-icon': 'i-lucide-refresh-ccw animate-spin text-lg',
  'table-loading-row': 'data-[loading=true]:border-0',
  'table-loading-cell': '',
  'table-loading': 'absolute inset-x-0 overflow-hidden p-0',

  // table-footer
  'table-footer': 'border-t border-base bg-muted font-medium [&>tr]:last:border-b-0',
}

export const dynamicTable: [RegExp, (params: RegExpExecArray) => string][] = [
]

export const table = [
  ...dynamicTable,
  staticTable,
]
