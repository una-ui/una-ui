type BreadcrumbPrefix = 'breadcrumb'

export const staticBreadcrumb: Record<`${BreadcrumbPrefix}-${string}` | BreadcrumbPrefix, string> = {
  // config
  'breadcrumb': '',
  'breadcrumb-active': 'breadcrumb-active-text-primary',
  'breadcrumb-inactive': 'breadcrumb-inactive-text-muted',
  'breadcrumb-separator-icon': 'i-radix-icons-chevron-right',
  'breadcrumb-ellipsis-icon': 'i-radix-icons-dots-horizontal',

  // components
  'breadcrumb-root': '',
  'breadcrumb-list': 'flex flex-wrap items-center break-words text-muted-foreground',
  'breadcrumb-link': 'transition-colors font-normal px-1.5 sm:px-2.5',
  'breadcrumb-item': 'inline-flex items-center gap-1.5',
  'breadcrumb-separator': 'flex',

  // TODO
  'breadcrumb-ellipsis': 'flex items-center justify-center px-1.5 sm:px-2.5 cursor-pointer',
}

export const dynamicBreadcrumb = [
  // states
  [
    /^breadcrumb-active-([^-]+)-([^-]+)$/,
    ([, variant = 'text', color = 'primary']) =>
      `data-[state=active]:btn-${variant}-${color}`,
  ],
  [
    /^breadcrumb-inactive-([^-]+)-([^-]+)$/,
    ([, variant = 'text', color = 'muted']) =>
      `data-[state=inactive]:btn-${variant}-${color}`,
  ],
]

export const breadcrumb = [
  ...dynamicBreadcrumb,
  staticBreadcrumb,
]
