type ToastPrefix = 'toast'

/**
 * `<NToaster />` runs vue-sonner unstyled, so every visible style comes from
 * here. vue-sonner still supplies positioning, stacking, swipe and animation —
 * none of which are gated on its skin.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // chrome; --width comes from the toaster, the radius from una's own token
  'toast': 'w-[var(--width)] overflow-hidden p-4 text-13px bg-popover text-popover-foreground border border-border rounded-[var(--una-radius)] shadow-lg',
  // standard toasts lay out as a row, rich ones stack the row above the progress bar
  'toast-row': 'flex items-start gap-3',
  'toast-stack': 'flex flex-col gap-1.5',
  'toast-content': 'flex flex-col gap-1 min-w-0 flex-1',
  'toast-actions': 'flex flex-wrap justify-end gap-1.5',
  'toast-progress': 'h-1 -mx-4 -mb-4 mt-1 w-auto rounded-none',

  'toast-title': 'text-sm font-medium',
  'toast-description': 'text-sm text-muted-foreground',
  // mt nudges the 16px icon onto the title's line box
  'toast-icon': 'mt-0.5 shrink-0 [&>span[icon-base]]:square-4',
  'toast-close-button': 'absolute right-2 top-2 flex items-center justify-center square-5 rounded-full border border-border bg-popover text-muted-foreground hover:text-foreground',

  // the card stays neutral, so unlike `alert` the icon carries the type colour
  // itself — same -600/-500 pairing the btn and alert variants use
  'toast-success-icon': 'i-lucide-circle-check text-success-600 dark:text-success-500',
  'toast-error-icon': 'i-lucide-circle-alert text-error-600 dark:text-error-500',
  'toast-warning-icon': 'i-lucide-triangle-alert text-warning-600 dark:text-warning-500',
  'toast-info-icon': 'i-lucide-info text-info-600 dark:text-info-500',
  'toast-loading-icon': 'i-loading text-muted-foreground',
  'toast-loading': 'animate-spin',
  'toast-close-icon': 'i-close',
}

export const toast = [
  staticToast,
]
