type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  // configurations
  'pagination': '',
  'pagination-button': 'w-10 h-10 p-0',

  // components
  'pagination-ellipsis': 'w-9 h-9 flex items-center justify-center',
  'pagination-ellipsis-icon': 'i-lucide-ellipsis',

  'pagination-first-button': 'pagination-button',
  'pagination-first-button-icon': 'i-lucide-chevrons-left',

  'pagination-prev-button': 'pagination-button',
  'pagination-prev-button-icon': 'i-lucide-chevron-left',

  'pagination-next-button': 'pagination-button',
  'pagination-next-button-icon': 'i-lucide-chevron-right',

  'pagination-last-button': 'pagination-button',
  'pagination-last-button-icon': 'i-lucide-chevrons-right',
}

export const dynamicPagination: [RegExp, (params: RegExpExecArray) => string][] = [

]

export const select = [
  ...dynamicPagination,
  staticPagination,
]
