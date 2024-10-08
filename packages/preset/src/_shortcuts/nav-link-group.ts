type NavLinkGroupPrefix = 'nav-link-group'

export const staticNavLinkGroup: Record<`${NavLinkGroupPrefix}-${string}` | NavLinkGroupPrefix, string> = {
  // base
  'nav-link-group': 'w-60 flex flex-col border-2 border-border rounded-md border-dashed p-2 space-y-1',

  // panel
  'nav-link-group-panel': 'mt-1 px-2 space-y-1',
}

export const dynamicNavLinkGroup: [RegExp, (params: RegExpExecArray) => string][] = [

]

export const navLinkGroup = [
  ...dynamicNavLinkGroup,
  staticNavLinkGroup,
]
