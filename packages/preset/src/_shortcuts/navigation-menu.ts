type NavigationMenuPrefix = 'navigation-menu'

export const staticNavigationMenu: Record<`${NavigationMenuPrefix}-${string}` | NavigationMenuPrefix, string> = {
  // configurations
  'navigation-menu': '',
  'navigation-menu-default-variant': 'navigation-menu-ghost-white',
  'navigation-menu-link-default-variant': 'navigation-menu-link-ghost-white',
  'navigation-menu-disabled': 'n-disabled',

  // components
  'navigation-menu-root': 'relative z-10 flex max-w-max flex-1 items-center justify-center',
  'navigation-menu-indicator': 'absolute data-[state=hidden]:opacity-0 duration-200 top-full data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut w-[--reka-navigation-menu-indicator-size] translate-x-[--reka-navigation-menu-indicator-position] mt--3px z-100 flex h-10px items-end justify-center overflow-hidden transition-all',
  'navigation-menu-indicator-arrow': 'relative top-70% h-12px w-12px rotate-45deg border bg-base',
  'navigation-menu-content': 'left-0 top-0 w-full md:absolute md:w-auto',
  'navigation-menu-viewport': 'origin-top-center relative mt-1.5 h-[--reka-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow md:w-[--reka-navigation-menu-viewport-width]',

  'navigation-menu-link': '',
  'navigation-menu-trigger': '',
  'navigation-menu-trigger-trailing': 'size-5 transform shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200',
  'navigation-menu-trigger-trailing-default': 'i-lucide-chevron-down ',

  'navigation-menu-content-item': 'flex items-start select-none rounded-md p-3 h-unset leading-none no-underline outline-none transition-colors whitespace-normal justify-start',
  'navigation-menu-content-list': 'grid w-400px gap-3 p-4 md:grid-cols-2 lg:w-600px md:w-500px',
  'navigation-menu-content-item-wrapper': 'flex flex-col items-start gap-1',
  'navigation-menu-content-item-label': 'font-semibold leading-none',
  'navigation-menu-content-item-description': 'line-clamp-2 text-left text-muted leading-5',

  'navigation-menu-list-horizontal': 'flex flex-1 list-none items-center justify-center gap-x-1',
  'navigation-menu-list-vertical': 'max-w-none list-none flex-col items-start gap-1 space-x-0',

  'navigation-menu-viewport-wrapper': 'absolute left-0 top-full flex justify-center',
  'navigation-menu-viewport-vertical': 'absolute bottom-full mt--1.5 flex justify-center -right-2',
  'navigation-menu-viewport-wrapper-vertical': 'absolute -right-7 bottom-0 flex justify-center',
}

export const dynamicNavigationMenu = [
  [/^navigation-menu-([^-]+)-([^-]+)$/, ([, v = 'ghost', c = 'white']) => `btn-${v}-${c}`],
  [/^navigation-menu-link-([^-]+)-([^-]+)$/, ([, v = 'ghost', c = 'white']) => `btn-${v}-${c}`],
]

export const navigationMenu = [
  ...dynamicNavigationMenu,
  staticNavigationMenu,
]
