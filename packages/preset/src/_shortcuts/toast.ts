type ToastPrefix = 'toast'

/**
 * vue-sonner's skin already covers the toast box, stacking, content layout and
 * button sizing, so these only add what una owns on top.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  'toast-title': 'text-sm font-semibold',
  // `!` throughout: sonner's `[data-styled='true'] [data-*]` outranks a utility class
  'toast-description': 'text-sm !text-muted-foreground',
  'toast-icon': '[&>span[icon-base]]:square-4',
  'toast-action-button': '!bg-primary !text-primary-foreground hover:!bg-primary/90',
  'toast-cancel-button': '!bg-muted !text-muted-foreground hover:!bg-muted/80',

  'toast-success-icon': 'i-lucide-circle-check',
  'toast-error-icon': 'i-lucide-circle-alert',
  'toast-warning-icon': 'i-lucide-triangle-alert',
  'toast-info-icon': 'i-lucide-info',
  'toast-loading-icon': 'i-loading',
  'toast-loading': 'animate-spin',
  'toast-close-icon': 'i-close',
}

export const toast = [
  staticToast,
]
