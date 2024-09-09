type DropdownMenuPrefix = 'dropdown-menu'

export const staticDropdownMenu: Record<`${DropdownMenuPrefix}-${string}` | DropdownMenuPrefix, string> = {
  // configurations
  'dropdown-menu': '',
  'dropdown-menu-default-variant': 'btn-solid-white',

  // dropdown-menu-trigger
  'dropdown-menu-trigger': '',
  'dropdown-menu-trigger-leading': '',
  'dropdown-menu-trigger-trailing': 'ml-auto',

  // dropdown-menu-content
  'dropdown-menu-content': 'z-50 min-w-32 overflow-hidden rounded-md border border-base bg-popover p-1 text-popover shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

  // dropdown-menu-item
  'dropdown-menu-item-base': 'text-left transition-color focus-visible:outline-0',
  'dropdown-menu-item-leading': 'opacity-75 text-1.1em',
  'dropdown-menu-item-trailing': 'ml-auto opacity-75 text-1.1em',

  // dropdown-menu-label
  'dropdown-menu-label': 'px-2 py-1.5 text-1em font-semibold',

  // dropdown-menu-separator
  'dropdown-menu-separator-root': 'relative -mx-1',
  'dropdown-menu-separator': '',

  // dropdown-menu-shortcut
  'dropdown-menu-shortcut': 'pl-10 ml-auto text-0.875em tracking-widest n-disabled space-x-0.5',

  // dropdown-menu-group
  'dropdown-menu-group': '',

  // dropdown-menu-sub
  'dropdown-menu-sub-trigger': 'transition-color focus-visible:outline-0',
  'dropdown-menu-sub-trigger-leading': 'opacity-75 text-1.1em',
  'dropdown-menu-sub-trigger-trailing': 'ml-auto opacity-75 text-1.1em',
  'dropdown-menu-sub-content': 'z-50 min-w-32 overflow-hidden rounded-md border border-base bg-popover p-1 text-popover shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

}

export const dynamicDropdownMenu = [
  [/^dropdown-menu-(\S+)-(\S+)$/, ([, v = 'solid', c = 'white']) => `btn-${v}-${c}`],

  [/^dropdown-menu-item(?:-(\S+))?$/, ([, c = 'gray']) => `focus:bg-${c}-100 focus:text-${c}-800 dark:focus:bg-${c}-800 dark:focus:text-${c}-100 data-[state=open]:bg-${c}-100 dark:data-[state=open]:bg-${c}-800`],
]

export const dropdowMenu = [
  ...dynamicDropdownMenu,
  staticDropdownMenu,
]
