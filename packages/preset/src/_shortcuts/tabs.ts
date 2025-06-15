type TabsPrefix = 'tabs'

export const staticTabs: Record<`${TabsPrefix}-${string}` | TabsPrefix, string> = {
  // configurations
  'tabs': 'flex flex-col gap-2',
  'tabs-disabled': 'n-disabled',

  // components
  'tabs-trigger': 'py-0.25em h-[calc(100%-1px)]',
  'tabs-list': 'bg-muted text-muted-foreground inline-flex h-2.5714285714285716em w-fit items-center justify-center rounded-lg p-[3px]',
  'tabs-content': 'flex-1 outline-none',
}

export const dynamicTabs = [
  [/^tabs-active-([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'primary']) => `data-[state=active]:btn-${v}-${c}`],
  [/^tabs-inactive-([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'primary']) => `data-[state=inactive]:btn-${v}-${c}`],
]

export const tabs = [
  ...dynamicTabs,
  staticTabs,
]
