type BreadcrumbPrefix = 'breadcrumb'

export const staticBreadcrumb: Record<`${BreadcrumbPrefix}-${string}` | BreadcrumbPrefix, string> = {
  // config
  'breadcrumb-default-variant': 'breadcrumb-text-gray',

  // base
  'breadcrumb': 'flex items-center list-none text-nowrap text-sm',
  'breadcrumb-separator': 'flex-shrink-0 text-$c-gray-400 dark:text-$c-gray-200 mx-1',
  'breadcrumb-disabled': 'disabled:n-disabled',
  'breadcrumb-item': 'inline-flex items-center gap-1.5',
  'breadcrumb-label': '',
  'breadcrumb-item-link': 'flex items-center gap-1',
}

export const dynamicBreadcrumb: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^breadcrumb-text(-(\S+))?$/, ([, , c = 'gray']) => `text-${c}-400 hover:text-${c}-800 dark:text-${c}-500 dark:hover:text-${c}-100 data-[state=active]:text-${c}-800 dark:data-[state=active]:text-${c}-200`],
  [/^breadcrumb-solid(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-400 hover:text-${c}-700 dark:text-${c}-200 dark:hover:text-${c}-500 data-[state=active]:text-${c}-700 dark:data-[state=active]:text-${c}-500`],
  [/^breadcrumb-link(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-400 dark:text-${c}-200 hover:underline underline-offset-4 hover:text-${c}-700 dark:hover:text-${c}-500 data-[state=active]:text-${c}-700 dark:data-[state=active]:text-${c}-500`],
]

export const breadcrumb = [
  ...dynamicBreadcrumb,
  staticBreadcrumb,
]
