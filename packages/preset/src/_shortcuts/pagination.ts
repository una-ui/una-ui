type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  // configurations
  'pagination': 'overflow-hidden',
  'pagination-list': 'flex items-center gap-1 overflow-hidden',

  // components
  'pagination-root': '',
  'pagination-list-item': 'pagination',

  'pagination-ellipsis-base': 'btn-(~ square) flex items-center justify-center',
  'pagination-ellipsis-icon-base': 'square-1.25em',
  'pagination-ellipsis-icon': 'i-lucide-ellipsis',

  'pagination-first': 'pagination',
  'pagination-first-icon': 'i-lucide-chevrons-left',

  'pagination-prev': 'pagination',
  'pagination-prev-icon': 'i-lucide-chevron-left',

  'pagination-next': 'pagination',
  'pagination-next-icon': 'i-lucide-chevron-right',

  'pagination-last': 'pagination',
  'pagination-last-icon': 'i-lucide-chevrons-right',
}

export const dynamicPagination = [
  [
    /^pagination-ellipsis(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, variant = 'text', color = 'black']) =>
      `btn-${variant}-${color}`,
  ],

  [
    /^pagination-selected(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, variant = 'solid', color = 'primary']) =>
      `data-[selected=true]:btn-${variant}-${color}`,
  ],
  [
    /^pagination-unselected(?:-([^-]+))?(?:-([^-]+))?$/,
    ([, variant = 'outline', color = 'gray']) =>
      `data-[selected=false]:btn-${variant}-${color}`,
  ],

]

export const pagination = [
  ...dynamicPagination,
  staticPagination,
]
