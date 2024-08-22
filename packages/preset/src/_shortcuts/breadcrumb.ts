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
  'breadcrumb-list': 'flex flex-wrap items-center break-words text-muted gap-0.5',
  'breadcrumb-link': 'transition-colors font-normal btn-square',
  'breadcrumb-item': 'inline-flex items-center',

  // TODO
  'breadcrumb-ellipsis': 'flex h-9 w-9 items-center justify-center',
}

export const dynamicBreadcrumb = [
  // states
  [
    /^breadcrumb-active-(\S+)-(\S+)$/,
    ([, variant = 'text', color = 'primary']) =>
      `data-[state=active]:btn-${variant}-${color}`,
  ],
  [
    /^breadcrumb-inactive-(\S+)-(\S+)$/,
    ([, variant = 'text', color = 'muted']) =>
      `data-[state=inactive]:btn-${variant}-${color}`,
  ],
]

export const breadcrumb = [
  ...dynamicBreadcrumb,
  staticBreadcrumb,
]
