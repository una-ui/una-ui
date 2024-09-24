type BreadcrumbPrefix = 'breadcrumb'

export const staticBreadcrumb: Record<`${BreadcrumbPrefix}-${string}` | BreadcrumbPrefix, string> = {
  // config
  'breadcrumb': '',
  'breadcrumb-active': 'breadcrumb-active-text-primary',
  'breadcrumb-inactive': 'breadcrumb-inactive-text-muted',
  'breadcrumb-separator-icon': 'i-radix-icons-chevron-right',
  'breadcrumb-elipsis-icon': 'i-radix-icons-dots-horizontal',

  // components
  'breadcrumb-root': '',
  'breadcrumb-list': 'flex flex-wrap items-center break-words text-muted',
  'breadcrumb-link': 'transition-colors font-normal',
  'breadcrumb-item': 'inline-flex items-center gap-1.5',

  // TODO
  'breadcrumb-ellipsis': 'flex items-center justify-center',
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
