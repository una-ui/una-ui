type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // base
  'accordion': 'flex-(~ col) text-sm relative w-full',
  'accordion-border': 'border-(~ base) rounded-md',
  'accordion-divider': 'divide-(y base)',
  'accordion-item': 'w-full',
  'accordion-button': 'p-(x-3 y-4) justify-start text-primary',
  'accordion-panel': 'text-(muted 1em $c-gray-600) border-(t $c-divider) p-4',
  'accordion-leading-base': 'text-1.2em',
  'accordion-trailing-base': 'flex transition items-center text-1em duration-300',
  'accordion-label-base': 'flex w-full text-1em',

  // trailing transition
  'accordion-trailing-open': '-rotate-180',
  'accordion-trailing-close': 'rotate-0',

  // icons
  'accordion-trailing-icon': 'i-heroicons-chevron-up',

  // transition
  'accordion-enter-active': 'overflow-hidden transition-height duration-300',
  'accordion-leave-active': 'overflow-hidden transition-height duration-300',
}

export const dynamicAccordion: [RegExp, (params: RegExpExecArray) => string][] = [
  // size here
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
