type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  // configurations
  'pagination': '',
  'pagination-button': 'w-9 h-9 p-0',
  'pagination-list': 'flex items-center gap-1 text-base',

  // components
  'pagination-item': 'pagination-button',

  'pagination-ellipsis': 'w-9 h-9 flex items-center justify-center',
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

]

export const pagination = [
  ...dynamicPagination,
  staticPagination,
]
