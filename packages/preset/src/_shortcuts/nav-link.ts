type NavLinkPrefix = 'nav-link'

export const staticNavLink: Record<`${NavLinkPrefix}-${string}` | NavLinkPrefix, string> = {
  // config
  'nav-link-default-variant': 'nav-link-text-primary',

  // base
  'nav-link': 'transition-base leading-6 justify-start gap-x-3 rounded-md',

  // badge
  'nav-link-badge': 'min-w-max whitespace-nowrap rounded-full px-2.5 py-.5 leading-5',

  // text-variant
  'nav-link-text-gray': 'hover:bg-$c-gray-100 hover:text-$c-gray-950',
  'nav-link-active-text-gray': 'bg-$c-gray-100 text-$c-gray-950',
  'nav-link-inactive-text-gray': 'text-$c-gray-950',
}

export const dynamicNavLink: [RegExp, (params: RegExpExecArray) => string][] = [
  // text-variant
  [/^nav-link-active-text(-(\S+))?$/, ([, , c = 'primary']) => `bg-$c-gray-100 text-${c}-600 dark:text-${c}-500`],
  [/^nav-link-inactive-text(-(\S+))?$/, ([, , c = 'gray']) => `text-${c}-800 dark:text-${c}-100`],
  [/^nav-link-text(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} hover:nav-link-active-text-${c}`],

  // solid-variant
  [/^nav-link-active-solid(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-700 dark:bg-${c}-400 text-white dark:text-${c}-950`],
  [/^nav-link-inactive-solid(-(\S+))?$/, ([, , c = 'primary']) => `text-white dark:text-${c}-950`],
  [/^nav-link-solid(-(\S+))?$/, ([, , c = 'primary']) => `btn-focus-${c} hover:nav-link-active-solid-${c}`],
]

export const navLink = [
  ...dynamicNavLink,
  staticNavLink,
]
