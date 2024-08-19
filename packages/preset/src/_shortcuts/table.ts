type TablePrefix = 'table'

export const staticTable: Record<`${TablePrefix}-${string}` | TablePrefix, string> = {
  // config
  'table-default-variant': 'table-solid-gray',
  'table': '',

  // table-root
  'table-root': 'w-full caption-bottom text-sm',
  'table-root-wrapper': 'relative w-full overflow-x-auto overflow-y-hidden',
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
  'table-row': 'border-b border-base hover:bg-muted data-[state=selected]:bg-muted',

  // table-cell
  'table-cell': 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
  'table-cell-pinned': 'sticky z-10 bg-base',
  'table-cell-pinned-left': 'left-0',
  'table-cell-pinned-right': 'right-0',

  // table-empty
  'table-empty-row': '',
  'table-empty-cell': 'p-4 whitespace-nowrap align-middle text-sm text-muted hover:bg-base',
  'table-empty': 'flex items-center justify-center py-10',

  // table-loading
  'table-loading-icon': 'i-lucide-refresh-ccw animate-spin text-lg',
  'table-loading-row': '',
  'table-loading-cell': 'p-4 whitespace-nowrap align-middle text-sm text-muted hover:bg-base',
  'table-loading': 'grid place-items-center gap-4 py-10',

  // table-footer
  'table-footer': 'border-t border-base bg-muted font-medium [&>tr]:last:border-b-0',
}

// { 'sticky bg-base': dataPinned },
// dataPinned === 'left' ? 'left-0' : 'right-0',

export const dynamicTable: [RegExp, (params: RegExpExecArray) => string][] = [
  // modifiers
  [/^table-ring(-(\S+))?$/, ([, , c = 'gray']) => `ring-1 ring-inset ring-${c}-200 dark:ring-${c}-700`],

  // variants
  [/^table-solid(-(\S+))?$/, ([, , c = 'gray']) => `table-ring-${c} bg-${c}-50 text-${c}-500 dark:bg-${c}-900 dark:text-${c}-400`],
  [/^table-outline(-(\S+))?$/, ([, , c = 'gray']) => `table-ring-${c} bg-transparent text-${c}-500 dark:text-${c}-400`],
]

export const table = [
  ...dynamicTable,
  staticTable,
]
