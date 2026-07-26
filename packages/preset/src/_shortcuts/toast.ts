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
  // una's smallest rectangle button is h-2.571em (~31px at 12px), too heavy for a
  // toast and it drives the card height — this matches sonner's 24px/8px metrics
  'toast-action': 'h-6 px-2',
  'toast-progress': 'h-1 -mx-4 -mb-4 mt-1 w-auto rounded-none',
  'toast-title': 'text-sm font-medium',
  'toast-description': 'text-sm !text-muted-foreground',

  // shared: nudges the 16px icon onto the title's line box. Sized both ways —
  // sonner puts this class on a wrapper around the icon span, the rich toast
  // puts it on the span itself.
  'toast-icon': 'mt-0.5 shrink-0 square-4 [&>span[icon-base]]:square-4',

  // the card stays neutral, so unlike `alert` the icon carries the type colour
  // itself — via the semantic shortcuts in general.ts
  'toast-success-icon': 'i-lucide-circle-check text-success',
  'toast-error-icon': 'i-lucide-circle-alert text-error',
  'toast-warning-icon': 'i-lucide-triangle-alert text-warning',
  'toast-info-icon': 'i-lucide-info text-info',
  'toast-loading-icon': 'i-loading text-muted-foreground',
  'toast-loading': 'animate-spin',
  'toast-close-icon': 'i-close',
}

export const toast = [
  staticToast,
]
