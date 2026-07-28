type ToastPrefix = 'toast'

/**
 * vue-sonner keeps its own skin for standard toasts, so most of these exist for
 * the rich ones: `toast.custom` sets data-styled="false", which drops the card,
 * the content layout and the button styling.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // mirrors sonner's card so rich toasts sit flush with the standard ones
  'toast': 'w-[var(--width)] overflow-hidden p-4 text-13px bg-popover text-popover-foreground border border-border rounded-[var(--border-radius)] shadow-lg',
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

  // shadcn keeps the close in the row; sonner floats a bordered circle outside
  // the card corner. Every declaration it sets needs `!` to be undone — they
  // come from `[data-sonner-toast][data-styled='true'] [data-close-button]`,
  // which outranks any single class. `ml-auto` is what right-aligns it on the
  // standard path, where sonner's content div has no flex-grow.
  //
  // This carries the whole skin rather than leaning on `btn-ghost-muted`: only
  // the rich toast's close is an `NButton`: standard toasts get sonner's own
  // bare button, and this class is all it has. Rich toasts take these over
  // their variant, which is what keeps the two looking identical.
  //
  // `square-6` is `toast-action`'s `h-6` — the two sit side by side on a toast
  // that has both, so they have to line up
  'toast-close': '!static !order-last !ml-auto !shrink-0 !square-6 !inline-flex !items-center !justify-center !p-0 !rounded-md !border-none !bg-transparent !transform-none !text-muted-foreground !transition-colors hover:!bg-muted hover:!text-foreground focus-visible:!outline-none focus-visible:!ring-3px focus-visible:!ring-ring/50',
  'toast-close-icon': 'i-close square-4',

  // the card stays neutral, so unlike `alert` the icon carries the type colour
  'toast-success-icon': 'i-lucide-circle-check text-success',
  'toast-error-icon': 'i-lucide-circle-alert text-error',
  'toast-warning-icon': 'i-lucide-triangle-alert text-warning',
  'toast-info-icon': 'i-lucide-info text-info',
  'toast-loading-icon': 'i-loading text-muted-foreground',
  'toast-loading': 'animate-spin',
}

export const toast = [
  staticToast,
]
