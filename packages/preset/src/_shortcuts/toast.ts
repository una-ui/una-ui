type ToastPrefix = 'toast'

export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // config
  'toast': 'pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',

  'toast-viewport': 'fixed top-0 z-100 flex max-h-screen gap-y-4 w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-420px',
  'toast-title': 'text-sm font-semibold [&+div]:text-xs',
  'toast-description': 'text-sm opacity-90',

  'toast-close': 'bg-transparent flex items-center justify-center absolute right-1 top-1 rounded-md p-1 text-muted opacity-0 transition-opacity hover:text-base focus:opacity-100 focus:outline-none group-hover:opacity-100',
  'toast-close-icon': 'i-close',
  'toast-close-icon-base': 'h-1em w-1em',

  'toast-info': 'flex flex-col pr-1',
  'toast-actions': 'flex flex-shrink-0 items-center gap-2',

  // static variants
  'toast-soft-gray': 'bg-muted border border-base',
  'toast-outline-gray': 'bg-base border border-base text-base',
}

export const dynamicToast = [
  // dynamic variants
  [/^toast-soft(-(\S+))?$/, ([, , c = 'primary']) => `bg-${c}-50 dark:bg-${c}-900 border-${c}-200 dark:border-${c}-700/58`],
  [/^toast-outline(-(\S+))?$/, ([, , c = 'primary']) => `bg-base border border-${c}-200 dark:border-${c}-700/58 text-${c}-200 text-${c}-600 dark:text-${c}-400`],
]

export const toast = [
  ...dynamicToast,
  staticToast,
]
