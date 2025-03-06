type SidebarPrefix = 'sidebar'

export const staticSidebar: Record<`${SidebarPrefix}-${string}` | SidebarPrefix, string> = {
// base
  'sidebar': '',
  'sidebar-provider': 'flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
}

export const dynamicSidebar: [RegExp, (params: RegExpExecArray) => string][] = [
// dynamic preset
]

export const sidebar = [
  ...dynamicSidebar,
  staticSidebar,
]
