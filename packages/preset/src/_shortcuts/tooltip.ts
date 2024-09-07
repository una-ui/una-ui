type TooltipPrefix = 'tooltip'

// TODO: add styles
export const staticTooltip: Record<`${TooltipPrefix}-${string}` | TooltipPrefix, string> = {
  // configurations
  'tooltip': '',
  'tooltip-default-variant': 'btn-solid-white',

  // tooltip-trigger
  'tooltip-trigger': '',
  'tooltip-trigger-leading': '',
  'tooltip-trigger-trailing': 'ml-auto',

  // tooltip-provider
  'tooltip-provider': '',

  // tooltip-content
  'tooltip-content-base': 'z-50 overflow-hidden rounded-md border border-base bg-popover text-popover px-3 py-1 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',

}

export const dynamicTooltip = [
  [/^tooltip-(\S+)-(\S+)$/, ([, v = 'solid', c = 'white']) => `btn-${v}-${c}`],
  [/^tooltip-content(?:-(\S+))?$/, ([, c = 'gray']) => `bg-${c}-100 border-${c}-100 text-${c}-800 dark:bg-${c}-800 dark:border-${c}-800 dark:text-${c}-100`],
]

export const tooltip = [
  ...dynamicTooltip,
  staticTooltip,
]
