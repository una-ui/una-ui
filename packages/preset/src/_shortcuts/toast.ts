type ToastPrefix = 'toast'

export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // config
  'toast-default-variant': 'toast-outline-gray',
  'toast-close-icon': 'i-close',

  // base

  // TODO: #199 (add for toast too)
  'toast': 'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',

  'toast-viewport': 'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
  'toast-title': 'text-sm font-semibold [&+div]:text-xs',
  'toast-description': 'text-sm opacity-90',
  'toast-close': 'absolute right-1 top-1 rounded-md p-1 hover:bg-brand/10 active:bg-brand/20 transition-colors duration-200',
  'toast-close-icon-base': 'h-4 w-4',
}

export const dynamicToast = [
  // TODO
]

export const toast = [
  ...dynamicToast,
  staticToast,
]
