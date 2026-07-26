type ToastPrefix = 'toast'

/**
 * vue-sonner keeps its own skin for standard toasts, so most of these exist for
 * the rich ones: `toast.custom` sets data-styled="false", which drops the card,
 * the content layout and the button styling.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // rich toasts only — mirrors sonner's card so they sit flush with the standard ones
  'toast': 'w-[var(--width)] overflow-hidden p-4 text-13px bg-popover text-popover-foreground border border-border rounded-[var(--border-radius)] shadow-lg',
  'toast-stack': 'flex flex-col gap-1.5',
  'toast-row': 'flex items-start gap-3',
  'toast-content': 'flex flex-col gap-1 min-w-0 flex-1',
  // shrink-0 keeps a lone inline button off the text; justify-end handles the stacked row
  'toast-actions': 'flex flex-wrap shrink-0 justify-end gap-1.5',
  'toast-progress': 'h-1 -mx-4 -mb-4 mt-1 w-auto rounded-none',
  'toast-title': 'text-sm font-medium',
  'toast-description': 'text-sm text-muted-foreground',

  // shared: nudges the 16px icon onto the title's line box
  'toast-icon': 'mt-0.5 shrink-0 [&>span[icon-base]]:square-4',

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
