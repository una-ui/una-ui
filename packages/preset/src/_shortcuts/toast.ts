type ToastPrefix = 'toast'

export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // config
  'toast-default-variant': 'toast-outline-gray',
  'toast-close-icon': 'i-close',

  // base

  // TODO: #199 (add for toast too)
  'toast': 'pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',

  'toast-viewport': 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
  'toast-title': 'text-sm font-semibold [&+div]:text-xs',
  'toast-description': 'text-sm opacity-90',
  'toast-close': 'absolute right-1 top-1 h-1em w-1em flex items-center rounded-md bg-transparent transition-colors duration-200 text-muted hover:text-base',
  'toast-close-icon-base': 'h-1em w-1em',
  'toast-info': 'flex flex-col',
  'toast-actions': 'flex flex-shrink-0 items-center gap-2',

  // static
  'toast-soft-gray': 'bg-muted border border-base',
  'toast-outline-gray': 'bg-base border border-base',
}

export const dynamicToast = [
  [/^toast-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-700/58`],
  [/^toast-outline(-(\S+))?$/, ([, , c = 'gray']) => `border border-${c}-200 dark:border-${c}-700/58`],
]

export const toast = [
  ...dynamicToast,
  staticToast,
]
