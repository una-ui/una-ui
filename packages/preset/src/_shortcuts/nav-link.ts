type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // config
  'nav-link-variant': 'nav-link-text-primary',
  'nav-link-active': 'nav-link-active-text-primary',
  'nav-link-inactive': 'nav-link-inactive-text-gray',

  // base
  'nav-link': 'leading-6 justify-start gap-x-3 rounded-md',

  // badge
  'nav-link-badge': 'min-w-max whitespace-nowrap rounded-full px-2.5 py-.5 leading-5',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // text-variant
  [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-muted text-${c}-600 dark:text-${c}-500`],
  [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-800 dark:text-${c}-100`],
  [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `hover:bg-muted hover:text-${c}-600 dark:hover:text-${c}-500`],
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
