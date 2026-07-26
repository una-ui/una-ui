type ToastPrefix = 'toast'

/**
 * vue-sonner's skin already covers the toast box, stacking, content layout and
 * button sizing, so these only add what una owns on top.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // `toast.custom` sets data-styled="false", so rich toasts get no sonner skin.
  // This mirrors sonner's card so they sit flush with the standard ones.
  'toast': 'w-[var(--width)] flex flex-col gap-1.5 p-4 text-13px border border-[var(--normal-border)] rounded-[var(--border-radius)] bg-[var(--normal-bg)] text-[var(--normal-text)] shadow-[0px_4px_12px_rgba(0,0,0,0.1)]',
  'toast-row': 'flex items-start gap-1.5',
  // sonner centres the card's flex items, which floats the icon between title
  // and description instead of sitting it on the title line
  'toast-root': '!items-start',
  'toast-actions': 'flex flex-wrap justify-end gap-1.5',
  'toast-progress': 'h-1 rounded-none',

  'toast-title': 'text-sm font-semibold',
  // `!` throughout: sonner's `[data-styled='true'] [data-*]` outranks a utility class
  'toast-description': 'text-sm !text-muted-foreground',
  // mt nudges the 16px icon onto the title's line box
  'toast-icon': 'mt-0.5 [&>span[icon-base]]:square-4',
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
