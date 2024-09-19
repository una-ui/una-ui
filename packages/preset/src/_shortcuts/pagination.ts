type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  // configurations
  'pagination': '',
  'pagination-button': 'min-w-2.5em min-h-2.5em !p-0',
  'pagination-list': 'flex items-center gap-1',

  // components
  'pagination-list-item': 'pagination-button',

  'pagination-ellipsis': 'pagination-button flex items-center justify-center',
  'pagination-ellipsis-icon': 'i-lucide-ellipsis',

  'pagination-first': 'pagination-button',
  'pagination-first-icon': 'i-lucide-chevrons-left',

  'pagination-prev': 'pagination-button',
  'pagination-prev-icon': 'i-lucide-chevron-left',

  'pagination-next': 'pagination-button',
  'pagination-next-icon': 'i-lucide-chevron-right',

  'pagination-last': 'pagination-button',
  'pagination-last-icon': 'i-lucide-chevrons-right',
}

export const dynamicPagination: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^pagination-selected([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'primary']) => `data-[selected=true]:btn-${v}-${c}`],
  [/^pagination-unselected([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'white']) => `data-[selected]:btn-${v}-${c}`],
]

export const pagination = [
  ...dynamicPagination,
  staticPagination,
]
