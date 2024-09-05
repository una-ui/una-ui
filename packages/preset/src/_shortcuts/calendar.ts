type CalendarPrefix = 'calendar'

export const staticCalendar: Record<`${CalendarPrefix}-${string}` | CalendarPrefix, string> = {
  // base
  calendar: '',

}

export const dynamicCalendar: [RegExp, (params: RegExpExecArray) => string][] = [
  [/^calendar-today(-([a-z]+))?$/, ([, , modifier = 'soft-accent']) => `[&[data-today]:not([data-selected])]:btn-${modifier}`],

  [/^calendar-selected(-([a-z]+))?$/, ([, , modifier = 'solid-primary']) => `data-[selected]:btn-${modifier}`],
  [/^calendar-unavailable(-([a-z]+))?$/, ([, , modifier = 'text-error']) => `data-[unavailable]:btn-${modifier} data-[unavailable]:line-through`],
  [/^calendar-outside(-([a-z]+))?$/, ([, , modifier = 'ghost-accent']) => `data-[outside-view]:btn-${modifier} data-[outside-view]:opacity-50`],
]

export const calendar = [
  ...dynamicCalendar,
  staticCalendar,
]
