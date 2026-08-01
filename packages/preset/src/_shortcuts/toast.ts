type ToastPrefix = 'toast'

/**
 * vue-sonner keeps its own skin for standard toasts, so most of these exist for
 * the rich ones: `toast.custom` sets data-styled="false", which drops the card,
 * the content layout and the button styling.
 */
export const staticToast: Record<`${ToastPrefix}-${string}` | ToastPrefix, string> = {
  // mirrors sonner's card so rich toasts sit flush with the standard ones
  'toast': 'w-[var(--width)] overflow-hidden p-4 text-sm bg-popover text-popover-foreground border border-border rounded-[var(--border-radius)] shadow-lg',
  'toast-stack': 'flex flex-col gap-1.5',
  // centred, so the icon and the buttons share a midline with the text column
  'toast-row': 'flex items-center gap-3',
  'toast-content': 'flex flex-col gap-1 min-w-0 flex-1',
  'toast-actions': 'flex flex-wrap shrink-0 justify-end gap-1.5',
  // sonner's 24px/8px metrics — una's own `xs` is 31px, which would drive the
  // card height
  'toast-action': 'h-6 px-2',
  'toast-progress': 'h-1 -mx-4 -mb-4 mt-1 w-auto rounded-none',
  // no font size: both paths inherit 14px, the Toaster's inline style and the
  // card's above
  'toast-title': 'font-medium',
  'toast-description': '!text-muted-foreground',

  // sized both ways — sonner puts this class on a wrapper around the icon span,
  // the rich toast puts it on the span itself. `top-px` is an optical nudge and
  // applies however the icon is aligned: the glyph is a full-height circle
  // where the text is mostly cap-height, so dead-centre reads high. Offset, not
  // margin — margin would only shift it half as far once the row centres it,
  // and a transform would collide with `toast-loading`'s spin.
  'toast-icon': 'shrink-0 square-4 relative top-px [&>span[icon-base]]:square-4',
  // the row centres everything, which is right for the buttons but drops the
  // icon to the middle of a two-line block. This lifts it onto the title's
  // line — 2px being half the difference between the 20px line and the 16px
  // glyph. Only needed when there is a description: with one line, centred
  // already is the title's line. The rich toast sets it in the template;
  // sonner's own markup can only be reached through `:has`.
  'toast-icon-leading': 'self-start mt-0.5',
  'toast-icon-standard': '[[data-sonner-toast]:has([data-description])_&]:toast-icon-leading',

  // shadcn keeps the close in the row; sonner floats a bordered circle outside
  // the card corner. Undoing that needs `!` throughout — the box, the dark
  // theme and `data-rich-colors` each set it from a selector no class outranks.
  // Standard toasts get sonner's bare button, so this carries the whole skin
  // rather than leaning on `btn-ghost-muted`; the rich toast's `NButton` takes
  // it over its variant, which is what keeps the two identical. `square-6`
  // matches `toast-action`'s `h-6`; the `::after` then grows the hit area to
  // 40px, since the box alone would sit on the WCAG 2.2 minimum. `relative`
  // both anchors that and undoes sonner's `absolute` — `inset-auto` neutralises
  // the offsets it pairs with them.
  'toast-close': '!relative !inset-auto !order-last !ml-auto !shrink-0 !square-6 !inline-flex !items-center !justify-center !p-0 !rounded-md !border-none !bg-transparent !transform-none !text-muted-foreground !transition-colors after:absolute after:-inset-2 after:content-[\'\'] hover:!bg-muted hover:!text-foreground focus-visible:!outline-none focus-visible:!ring-3px focus-visible:!ring-ring/50',
  // 16px, as in shadcn — the box is transparent at rest, so the glyph is the
  // only thing that reads and it has to hold its own against 14px text
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
