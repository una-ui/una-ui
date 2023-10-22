type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // config
  'nav-link-default-variant': 'nav-link-text',
  'nav-link-active': 'nav-link-active-text',
  'nav-link-inactive': 'nav-link-inactive-text',

  // base
  'nav-link': 'leading-6 justify-start gap-x-3 rounded-md',

  // badge
  'nav-link-badge': 'min-w-max whitespace-nowrap rounded-full px-2.5 py-.5 leading-5',

  // text-variant
  'nav-link-text-gray': 'hover:bg-$c-gray-100 hover:text-base',
  'nav-link-active-text-gray': 'bg-$c-gray-100 text-base',
  'nav-link-inactive-text-gray': '!text-red',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // text-variant
  [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-$c-gray-100 text-${c}-600 dark:text-${c}-500`],
  [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'primary']) => `text-${c}-800 dark:text-${c}-100`],
  [/^nav-link-text(-(\S+))?$/, ([, , c = 'gray']) => `hover:bg-${c}-100 dark:bg-${c}-800 hover:text-${c}-600 dark:hover:text-${c}-500`],

  // unknown-variant
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
