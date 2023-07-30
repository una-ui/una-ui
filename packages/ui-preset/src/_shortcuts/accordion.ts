type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // base
  'accordion': 'flex flex-col text-sm relative',
  'accordion-border': 'border border-base rounded-md',
  'accordion-divider': 'divide-y divide-base',
  'accordion-item': 'w-full',
  'accordion-button': 'p-4 text-primary text-1em justify-start',
  'accordion-panel': 'text-muted border-t border-$c-divider shadow-inner p-4 text-1em pr-12 text-$c-gray-600',

  // icons
  'accordion-button-leading': 'text-1.2em',
  'accordion-button-trailing': 'flex transition items-center text-1em duration-300',

  // trailing
  'accordion-trailing-open': '-rotate-180',
  'accordion-trailing-close': 'rotate-0',

  // transition
  'accordion-enter-active': 'overflow-hidden transition-height duration-300',
  'accordion-leave-active': 'overflow-hidden transition-height duration-300',
}

export const dynamicAccordion: [RegExp, (params: RegExpExecArray) => string][] = []

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
