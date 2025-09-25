type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // config
  'accordion-trailing-icon': 'i-lucide-chevron-up',
  'accordion-button-padding': 'p-(x-3 y-4)',
  'accordion-divider': 'divide-(y base)',
  'accordion-border': 'border-(~ base) rounded-md',

  // base
  'accordion': 'flex-(~ col) relative w-full',
  'accordion-content': 'flex overflow-hidden',
  'accordion-item': 'w-full overflow-hidden focus-within:(relative z-10 shadow)',
  'accordion-header': 'flex',
  'accordion-trigger': 'w-full',
  'accordion-button': 'flex justify-between items-center',
  'accordion-button-label': 'flex-1 text-left',
  'accordion-panel': 'text-(muted 0.875em) border-(t $c-divider) accordion-button-padding',
  'accordion-leading': 'text-1.2em',
  'accordion-trailing': 'flex transition items-center text-1em duration-300',
  'accordion-label': 'flex w-full text-1em',

  // trailing transition
  'accordion-trailing-open': '-rotate-180',
  'accordion-trailing-close': 'rotate-0',
}

export const dynamicAccordion = [
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
