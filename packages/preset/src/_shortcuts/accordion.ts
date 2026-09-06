type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // config
  'accordion-trailing-icon': 'i-lucide-chevron-up group-data-[state=open]/accordion-trigger:-rotate-180 group-data-[state=closed]/accordion-trigger:rotate-0 transition-transform duration-300',
  'accordion-divider': 'divide-y',
  'accordion-border': 'border rounded-md',

  // base
  'accordion': 'flex flex-col relative w-full',
  'accordion-content': 'flex overflow-hidden',
  'accordion-item': 'w-full overflow-hidden focus-within:(relative z-10 shadow)',
  'accordion-header': 'flex',
  'accordion-trigger': 'w-full flex justify-between items-center accordion-trigger-padding',
  'accordion-trigger-padding': 'px-4 py-4 is-[.btn]:h-auto',
  'accordion-trigger-label': 'flex-1 text-left',
  'accordion-panel': 'w-full text-muted-foreground text-0.875em border-t accordion-trigger-padding',
  'accordion-leading': 'text-1.2em',
  'accordion-trailing': 'flex transition items-center text-1em duration-300',
}

export const dynamicAccordion = [
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
