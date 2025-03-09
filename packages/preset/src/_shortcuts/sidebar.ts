type SidebarPrefix = 'sidebar'

export const staticSidebar: Record<`${SidebarPrefix}-${string}` | SidebarPrefix, string> = {
  // base
  'sidebar': '',
  // mobile (sheet)
  'sidebar-mobile': 'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden',
  'sidebar-mobile-inner': 'h-full w-full flex flex-col',
  // collapsible variants
  'sidebar-collapsible-none': 'flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
  // desktop container
  'sidebar-desktop': 'hidden md:block',
  'sidebar-desktop-inner': 'h-full w-full flex flex-col bg-sidebar text-sidebar-foreground group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow',
  // gap handling
  'sidebar-desktop-gap': 'duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180',
  'sidebar-desktop-gap-floating': 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem)]',
  'sidebar-desktop-gap-default': 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
  // positioning
  'sidebar-desktop-position': 'duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex',
  'sidebar-desktop-position-left': 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]',
  'sidebar-desktop-position-right': 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
  // padding variations
  'sidebar-desktop-padding-floating': 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_1rem_+_2px)]',
  'sidebar-desktop-padding-default': 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',

  // subcomponents
  'sidebar-provider': 'flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar',
  'sidebar-content': 'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
  'sidebar-header': 'flex flex-col gap-2 p-2',
  'sidebar-group': 'relative flex w-full min-w-0 flex-col p-2',
  'sidebar-group-action': 'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 after:absolute after:-inset-2 after:md:hidden group-data-[collapsible=icon]:hidden',
  'sidebar-group-content': 'w-full text-sm',
  'sidebar-group-label': 'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] ease-linear focus-visible:ring-2 [&>span[icon-base]]:square-4 [&>svg]:shrink-0',
  'sidebar-input': 'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
  'sidebar-inset': 'relative flex min-h-svh flex-1 flex-col bg-background data-[variant=inset]:min-h-[calc(100svh-1rem)] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:data-[state=collapsed]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow',
  'sidebar-menu': 'flex w-full min-w-0 flex-col gap-1',
  'sidebar-menu-action': 'absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu_button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0 after:absolute after:-inset-2 after:md:hidden peer-data-[size=sm]/menu_button:top-1 peer-data-[size=default]/menu_button:top-1.5 peer-data-[size=lg]/menu_button:top-2.5 group-data-[collapsible=icon]:hidden',
  'sidebar-menu-action-show-on-hover': 'group-focus-within/menu_item:opacity-100 group-hover/menu_item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu_button:text-sidebar-accent-foreground md:opacity-0',
  'sidebar-menu-skeleton': 'rounded-md h-8 flex gap-2 px-2 items-center',
  'sidebar-separator': 'mx-2 w-auto bg-sidebar-border',
  'sidebar-menu-item': 'relative',
  'sidebar-menu-sub': 'mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5 group-data-[collapsible=icon]:hidden',
  'sidebar-menu-sub-item': '',
  'sidebar-rail': 'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex [[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize [[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar [[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
  'sidebar-menu-badge': 'absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none peer-hover/menu_button:text-sidebar-accent-foreground peer-data-[active=true]/menu_button:text-sidebar-accent-foreground peer-data-[size=sm]/menu_button:top-1 peer-data-[size=default]/menu_button:top-1.5 peer-data-[size=lg]/menu_button:top-2.5 group-data-[collapsible=icon]:hidden',
  'sidebar-footer': 'flex flex-col gap-2 p-2',
}

export const dynamicSidebar: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const sidebar = [
  ...dynamicSidebar,
  staticSidebar,
]
