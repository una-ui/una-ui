type CalendarPrefix = 'calendar'

export const staticCalendar: Record<`${CalendarPrefix}-${string}` | CalendarPrefix, string> = {
  // base
  'calendar': '',

  'calendar-root': 'p-3 border border-base rounded-md',
  'calendar-head-cell': 'min-w-8 rounded-md text-[0.8rem] font-normal text-muted',
  'calendar-header': 'relative flex w-full items-center justify-between pt-1',
  'calendar-heading': 'text-sm font-medium',
  'calendar-grid-row': 'flex',
  'calendar-grid-head': '',
  'calendar-grid-body': '',
  'calendar-grid': 'w-full border-collapse space-y-1',
  'calendar-cell': 'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:(bg-accent opacity-50)',
  'calendar-grid-wrapper': 'mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0',
  'calendar-button': 'h-7 w-7 p-0 opacity-50 hover:opacity-100',

  'calendar-btn-icon-label': 'text-1em',
  'calendar-next-button': 'calendar-button',
  'calendar-prev-button': 'calendar-button',
  'calendar-next-button-icon': 'i-heroicons-chevron-right',
  'calendar-prev-button-icon': 'i-heroicons-chevron-left',
}

export const dynamicCalendar: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^calendar-today(-([a-z]+))?$/, ([, , modifier = 'soft-accent']) => `[&[data-today]:not([data-selected])]:btn-${modifier}`],
  [/^calendar-unselected(-([a-z]+))?$/, ([, , modifier = 'ghost-accent']) => `[&:not([data-selected]):not([data-outside-view]):not([data-unavailable]):not([data-today])]:btn-${modifier}`],
  [/^calendar-selected(-([a-z]+))?$/, ([, , modifier = 'solid-primary']) => `data-[selected]:btn-${modifier} data-[selected]:btn-${modifier}`],
  [/^calendar-unavailable(-([a-z]+))?$/, ([, , modifier = 'text-error']) => `data-[unavailable]:btn-${modifier} data-[unavailable]:line-through`],
  [/^calendar-outside(-([a-z]+))?$/, ([, , modifier = 'ghost-accent']) => `data-[outside-view]:btn-${modifier} data-[outside-view]:opacity-50`],
]

export const calendar = [
  ...dynamicCalendar,
  staticCalendar,
]
