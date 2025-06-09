type HoverCardPrefix = 'hovercard'

export const staticHoverCard: Record<`${HoverCardPrefix}-${string}` | HoverCardPrefix, string> = {
  // configurations
  'hovercard': '',
  'hovercard-default-variant': 'outline-gray',

  // components
  'hovercard-trigger': '',
  'hovercard-content': 'bg-base text-popover animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden',
  'hovercard-arrow': '!bg-transparent !border-none mt--1px fill-base stroke-base',

  // static variants
  'hovercard-soft-gray': 'bg-muted border border-base',
  'hovercard-outline-gray': 'bg-base border border-base',
}

export const dynamicHoverCard = [
  [/^hovercard-soft(-(\S+))?$/, ([, , c = 'gray']) => `bg-${c}-50 fill-${c}-50 stroke-${c}-200 border-${c}-200 dark:(bg-${c}-900 border-${c}-700/58 fill-${c}-900 stroke-${c}-700/58)`],
  [/^hovercard-outline(-(\S+))?$/, ([, , c = 'gray']) => `border stroke-${c}-200 border-${c}-200 dark:(border-${c}-700/58 stroke-${c}-700/58)`],
]

export const hoverCard = [
  ...dynamicHoverCard,
  staticHoverCard,
]
