type TogglePrefix = 'toggle'

export const staticToggle: Record<`${TogglePrefix}-${string}` | TogglePrefix, string> = {
  // configurations
  'toggle': 'inline-flex items-center justify-center border border-base bg-transparent data-[state=on]:bg-accent shadow-sm data-[state=on]:text-accent hover:bg-muted hover:text-muted text-sm font-medium focus-visible:ring-base ring-offset-base transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  'toggle-size': 'h-10 px-3',
  'toggle-corner': 'rounded-xl',
}

export const dynamicToggle = [
  [/^toggle(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=on]:bg-${c} data-[state=on]:hover:bg-${c}-400 data-[state=on]:hover:text-base`],
]

export const toggle = [
  ...dynamicToggle,
  staticToggle,
]
