type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // config
  'accordion-trailing-icon': 'i-heroicons-chevron-up',
  'accordion-button-padding': 'p-(x-3 y-4)',
  'accordion-button-default-variant': 'btn-text',
  'accordion-divider': 'divide-(y base)',
  'accordion-border': 'border-(~ base) rounded-md',

  // baseion
  'accordion': 'flex-(~ col) relative w-full',
  'accordion-item': 'w-full',
  'accordion-button': 'justify-start',
  'accordion-panel': 'text-(muted 0.875em) border-(t $c-divider) accordion-button-padding',
  'accordion-leading': 'text-1.2em',
  'accordion-trailing': 'flex transition items-center text-1em duration-300',
  'accordion-label': 'flex w-full text-1em',

  // trailing transition
  'accordion-trailing-open': '-rotate-180',
  'accordion-trailing-close': 'rotate-0',

  // panel transition
  'accordion-enter-active': 'overflow-hidden transition-height duration-300',
  'accordion-leave-active': 'overflow-hidden transition-height duration-300',
}

export const dynamicAccordion = [
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
