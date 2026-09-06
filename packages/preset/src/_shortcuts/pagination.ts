type PaginationPrefix = 'pagination'

export const staticPagination: Record<`${PaginationPrefix}-${string}` | PaginationPrefix, string> = {
  // configurations
  'pagination': 'overflow-hidden',
  // `shrink-0` because the list already clips: squeezing it between a start
  // region and the edge would silently hide page buttons
  'pagination-list': 'flex shrink-0 items-center gap-1 overflow-hidden',

  // components
  'pagination-root': '',
  // applied only when a start/end region actually renders — `w-full` would
  // otherwise change every existing pagination from shrink-to-fit to full
  // width and re-flow it wherever it sits as a flex item
  'pagination-root-regions': 'flex w-full flex-wrap items-center justify-between gap-4',
  'pagination-start': 'flex min-w-0 items-center gap-2',
  'pagination-end': 'flex items-center gap-2',
  'pagination-info': 'text-sm text-muted-foreground',
  'pagination-rows-per-page': 'flex items-center gap-2',
  'pagination-rows-per-page-label': 'text-sm font-medium whitespace-nowrap',
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
