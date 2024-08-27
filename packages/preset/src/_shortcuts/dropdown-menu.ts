type DropdownMenuPrefix = 'dropdown-menu'

export const staticDropdownMenu: Record<`${DropdownMenuPrefix}-${string}` | DropdownMenuPrefix, string> = {
  // configurations
  'dropdown-menu': '',
}

export const dynamicDropdownMenu = [
  [/^dropdown-menu-(\S+)-(\S+)$/, ([, v = 'solid', c = 'gray']) => `btn-${v}-${c}`],

  // [/^dropdown-menu-item(-(\S+))?$/, ([, , c = 'gray']) => `focus:bg-${c}-100 focus:text-${c}-800 dark:focus:bg-${c}-800 dark:focus:text-${c}-100`],
]

export const dropdowMenu = [
  ...dynamicDropdownMenu,
  staticDropdownMenu,
]
