type ToastPrefix = 'toast'

export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // config
  'toast': 'pointer-events-auto relative flex w-full space-x-2 justify-end overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all ',

  'toast-viewport': 'fixed top-0 z-100 flex max-h-screen gap-y-4 w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-420px',
  'toast-wrapper': 'w-0 flex flex-1 flex-col gap-2',
  'toast-title': 'text-sm font-semibold [&+div]:text-xs',
  'toast-description': 'text-sm opacity-90',
  'toast-leading': 'square-5',

  'toast-close': 'bg-transparent flex items-center justify-center absolute right-1 top-1 rounded-md p-1 text-brand/80 opacity-0 transition-opacity hover:text-brand focus:opacity-100 focus:ring-1 focus:ring-brand/80 focus:outline-none group-hover:opacity-100',
  'toast-close-icon': 'i-close',
  'toast-close-icon-base': 'h-1em w-1em',

  'toast-info': 'grid gap-1',
  'toast-actions': 'flex shrink-0 gap-1.5',
  'toast-progress': 'h-1 rounded-none',
}

export const dynamicToast = [
  // dynamic variants
  [/^toast-solid(-(\S+))?$/, ([, , c = 'primary']) => `alert-solid-${c}`],
  [/^toast-soft(-(\S+))?$/, ([, , c = 'primary']) => `alert-soft-${c}`],
  [/^toast-outline(-(\S+))?$/, ([, , c = 'primary']) => `alert-outline-${c}`],
  [/^toast-border(-(\S+))?$/, ([, , c = 'primary']) => `alert-border-${c}`],

]

export const toast = [
  ...dynamicToast,
  staticToast,
]
