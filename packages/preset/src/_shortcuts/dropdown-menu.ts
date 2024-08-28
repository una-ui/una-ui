type DropdownMenuPrefix = 'dropdown-menu'

export const staticDropdownMenu: Record<`${DropdownMenuPrefix}-${string}` | DropdownMenuPrefix, string> = {
  // configurations
  'dropdown-menu': '',
  'dropdown-menu-default-variant': 'btn-solid-white',
  'dropdown-menu-item-default-variant': 'dropdown-menu-item-gray',

}

export const dynamicDropdownMenu = [
  [/^dropdown-menu-(\S+)-(\S+)$/, ([, v = 'solid', c = 'white']) => `btn-${v}-${c}`],

  [/^dropdown-menu-item-(\S+)$/, ([, c = 'gray']) => `focus:bg-${c}-100 focus:text-${c}-800 dark:focus:bg-${c}-800 dark:focus:text-${c}-100 data-[state=open]:bg-${c}-100 dark:data-[state=open]:bg-${c}-800`],

]

export const dropdowMenu = [
  ...dynamicDropdownMenu,
  staticDropdownMenu,
]
