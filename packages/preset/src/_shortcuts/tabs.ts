type TabsPrefix = 'tabs'

export const staticTabs: Record<`${TabsPrefix}-${string}` | TabsPrefix, string> = {
  // configurations
  'tabs': 'transition-colors duration-200 ease-out',
  'tabs-default-variant': 'tabs-soft-black',
  'tabs-disabled': 'n-disabled',

  // components
  'tabs-root': 'flex flex-col w-full',
  'tabs-trigger': 'w-full focus-visible:z-10',
  'tabs-list': 'flex bg-muted items-center justify-center rounded-md p-1 w-full',
  'tabs-content': 'mt-4 text-base',
}

export const dynamicTabs = [
  [/^tabs-(\S+)-(\S+)$/, ([, v = 'solid', c = 'primary']) => `data-[state=active]:btn-${v}-${c}`],
]

export const tabs = [
  ...dynamicTabs,
  staticTabs,
]
