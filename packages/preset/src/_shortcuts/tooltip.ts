type TooltipPrefix = 'tooltip'

export const staticTooltip: Record<`${TooltipPrefix}-${string}`, string> = {
  'tooltip-content': 'z-50 overflow-hidden rounded-md px-0.75em py-0.375em text-xs shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

  'tooltip-white': 'border border-base bg-popover text-popover',
  'tooltip-black': 'border border-foreground bg-popover-foreground text-popover-foreground',
}

export const dynamicTooltip = [
  [/^tooltip(?:-(\S+))?$/, ([, c = 'gray']) => `bg-${c}-100 border-${c}-50 text-${c}-800 dark:bg-${c}-800 dark:border-${c}-800 dark:text-${c}-100`],
]

export const tooltip = [
  ...dynamicTooltip,
  staticTooltip,
]
