type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // config
  'nav-link-default-variant': 'nav-link-text-primary',

  // base
  'nav-link': 'transition-base leading-6 justify-start gap-x-3 rounded-md',

  // badge
  'nav-link-badge': 'min-w-max whitespace-nowrap rounded-full px-2.5 py-.5 leading-5',

  // text-variant
  'nav-link-text-gray': 'hover:bg-$c-gray-100 hover:text-base',
  'nav-link-active-text-gray': 'bg-$c-gray-100 text-base',
  'nav-link-inactive-text-gray': 'bg-base text-base',

  'nav-link-active-text': 'bg-$c-gray-100 text-brand',
  'nav-link-inactive-text': 'text-brand/70',

  'nav-link-active-solid': 'bg-brand text-base',
  'nav-link-inactive-solid': 'text-brand/90',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // text-variant
  // [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => 'bg-$c-gray-100 text-brand'],
  // [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'gray']) => `n-${c}-800 dark:text-${c}-100`],
  [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `n-${c}-600 dark:n-${c}-500 btn-focus-${c} hover:bg-$c-gray-100 hover:text-${c}-600 dark:hover:text-${c}-500`],

  // unknown-variant
  [/^nav-link-solid(-(\S+))?$/, ([, , c = 'primary']) => `n-${c}-100 dark:n-${c}-900 btn-focus-${c} hover:nav-link-active-solid`],
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
