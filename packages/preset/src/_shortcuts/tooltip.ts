type TooltipPrefix = 'tooltip'

// TODO: add styles
export const staticTooltip: Record<`${TooltipPrefix}-${string}` | TooltipPrefix, string> = {
  // configurations
  tooltip: '',
}

export const dynamicTooltip = []

export const tooltip = [
  ...dynamicTooltip,
  staticTooltip,
]
