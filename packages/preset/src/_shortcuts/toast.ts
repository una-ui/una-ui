type ToastPrefix = 'toast'

export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // config
  'toast-default-variant': 'toast-outline-gray',
  'toast-close-icon': 'i-close',

  // base

  // TODO: #199 (add for toast too)
  'toast': 'pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-md transition-all mt-3',

  'toast-viewport': 'relative w-full flex max-h-screen sm:flex-col md:max-w-[420px]',
  'toast-title': 'text-sm font-semibold [&+div]:text-xs',
  'toast-description': 'text-sm opacity-90',
  'toast-close': 'absolute right-1 top-1 h-1em w-1em flex items-center rounded-md bg-transparent transition-colors duration-200 text-muted hover:text-base',
  'toast-close-icon-base': 'h-1em w-1em',
  'toast-info': 'flex flex-col pr-1',
  'toast-actions': 'flex flex-shrink-0 items-center gap-2',
  'toast-toaster': 'fixed bottom-0 right-0 z-[999] md:max-w-[420px] w-full',
  'toast-toaster-list': 'overflow-y-auto flex flex-col justify-end px-4 py-6 sm:px-6',

  // static
  'toast-soft-gray': 'bg-muted border border-base',
  'toast-outline-gray': 'bg-base border border-base text-base',
}

export const dynamicToast = [
  [/^toast-soft(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-700/58`],
  [/^toast-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-base border border-${c}-200 dark:border-${c}-700/58 text-${c}-200 text-${c}-600 dark:text-${c}-400`],

  [/^toast-action-([^-]+)-([^-]+)$/, ([, v = 'solid', c = 'primary']) => `btn-${v}-${c}`],
]

export const toast = [
  ...dynamicToast,
  staticToast,
]
