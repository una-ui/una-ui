type KbdPrefix = 'drawer'

export const staticDrawer: Record<`${KbdPrefix}-${string}` | KbdPrefix, string> = {
  // base
  'drawer': '',

  // sub-components
  'drawer-overlay': 'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',

  'drawer-content': 'bg-background fixed z-50 flex h-auto flex-col',
  'drawer-content-top': 'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg',
  'drawer-content-bottom': 'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg',
  'drawer-content-right': 'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:sm:max-w-sm',
  'drawer-content-left': 'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:sm:max-w-sm',
  'drawer-content-handle': 'mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]:block',

  'drawer-header': 'flex flex-col gap-1.5 p-4',
  'drawer-title': 'text-foreground font-semibold',
  'drawer-description': 'text-muted text-sm',
  'drawer-footer': 'mt-auto flex flex-col gap-2 p-4',

}

export const dynamicDrawer: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const drawer = [
  ...dynamicDrawer,
  staticDrawer,
]
