type ScrollAreaPrefix = 'scroll-area'

export const staticScrollArea: Record<`${ScrollAreaPrefix}-${string}` | ScrollAreaPrefix, string> = {
  // configurations
  'scroll-area': '',
  'scroll-area-scrollbar-vertical': 'h-full w-2.5 border-l border-l-transparent p-px',
  'scroll-area-scrollbar-horizontal': 'h-2.5 flex-col border-t border-t-transparent p-px',
  'scroll-area-scrollbar-thumb': 'relative flex-1 rounded-full bg-border',

  // components
  'scroll-area-root': 'relative overflow-hidden',
  'scroll-area-scrollbar': 'flex touch-none select-none transition-colors',
  'scroll-area-viewport': 'h-full w-full rounded-inherit',
}

export const dynamicScrollArea: [RegExp, (params: RegExpExecArray) => string][] = [
  // dynamic preset
]

export const scrollArea = [
  ...dynamicScrollArea,
  staticScrollArea,
]
