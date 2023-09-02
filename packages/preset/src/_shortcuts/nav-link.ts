type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // base
  'nav-link': 'hover:bg-muted',

  // wrappers
  'nav-link-wrapper': '',

  // badge
  'nav-link-badge': 'rounded-full px-2.5 py-.5 leading-5 min-w-max whitespace-nowrap',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // text-variant
  [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-muted text-${c}-600 dark:text-${c}-500`],
  [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'primary']) => 'text-$c-gray-800'],
  [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `hover:text-${c}-600 dark:hover:text-${c}-500`],
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
