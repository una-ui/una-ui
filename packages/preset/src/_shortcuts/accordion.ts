type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // config
  'accordion-trailing-icon': 'i-lucide-chevron-up group-data-[state=open]/accordion-trigger:rotate-0 group-data-[state=closed]/accordion-trigger:-rotate-180',
  'accordion-button-padding': 'p-(x-3 y-4)',
  'accordion-button-default-variant': 'btn-text',
  'accordion-divider': 'divide-(y base)',
  'accordion-border': 'border-(~ base) rounded-md',

  // base
  'accordion': 'flex-(~ col) relative w-full',
  'accordion-content': 'flex overflow-hidden',
  'accordion-item': 'w-full overflow-hidden focus-within:(relative z-10 shadow)',
  'accordion-header': 'flex',
  'accordion-trigger': 'w-full',
  'accordion-button': 'flex justify-between items-center',
  'accordion-panel': 'text-(muted 0.875em) border-(t $c-divider) accordion-button-padding w-full',
}

export const dynamicAccordion = [
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
