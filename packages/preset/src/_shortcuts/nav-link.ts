type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // base
  'nav-link': '',

  // wrappers
  'nav-link-wrapper': '',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
