type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // base
  'accordion': 'flex flex-col text-sm relative border border-base rounded-md divide-y divide-base',
  'accordion-item': 'w-full',
  'accordion-button': 'p-4 text-primary text-1em justify-between items-center',
  'accordion-panel': 'border-t border-$c-divider shadow-inner p-4 text-1em pr-12 text-$c-gray-600',

  'accordion-button-leading': 'mr-2',
  'accordion-button-trailing': 'flex transform items-center text-.9em duration-400',

  // transition
  'accordion-enter-active': 'overflow-hidden transition-height duration-300',
  'accordion-leave-active': 'overflow-hidden transition-height duration-300',
}

export const dynamicAccordion: [RegExp, (params: RegExpExecArray) => string][] = []

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
