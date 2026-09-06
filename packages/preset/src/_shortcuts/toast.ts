type ToastPrefix = 'toast'

/**
 * vue-sonner keeps its own skin for standard toasts, so most of these exist for
 * the rich ones: `toast.custom` sets data-styled="false", which drops the card,
 * the content layout and the button styling.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // mirrors sonner's card so rich toasts sit flush with the standard ones.
  // Below sonner's own 600px breakpoint it stretches the `li` instead: sonner
  // sizes that to the viewport there, and `--width` would overflow it.
  'toast': 'w-[var(--width)] [@media(max-width:600px)]:w-full overflow-hidden p-4 text-13px bg-popover text-popover-foreground border border-border rounded-[var(--border-radius)] shadow-lg',
  'toast-stack': 'flex flex-col gap-1.5',
  'toast-row': 'flex items-start gap-3',
  'toast-content': 'flex flex-col gap-1 min-w-0 flex-1',
  'toast-actions': 'flex flex-wrap shrink-0 justify-end gap-1.5',
  // una's smallest rectangle button is ~31px, which would drive the card height;
  // these are sonner's 24px/8px metrics
  'toast-action': 'h-6 px-2',
  'toast-progress': 'h-1 -mx-4 -mb-4 mt-1 w-auto rounded-none',
  // no font size: both paths inherit 13px, sonner's own and the card's above
  'toast-title': 'font-medium',
  'toast-description': '!text-muted-foreground',

  // sized both ways — sonner puts this class on a wrapper around the icon span,
  // the rich toast puts it on the span itself
  'toast-icon': 'mt-0.5 shrink-0 square-4 [&>span[icon-base]]:square-4',

  // the card stays neutral, so unlike `alert` the icon carries the type colour
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
