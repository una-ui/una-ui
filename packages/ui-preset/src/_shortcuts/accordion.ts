type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // base
  'accordion': 'flex flex-col space-y-6 relative',
  'accordion-item': 'w-full',
  'accordion-button': 'w-full flex justify-between items-center',
  'accordion-panel': 'pt-4 pb-2 pr-12 text-$c-gray-600',
}

export const dynamicAccordion: [RegExp, (params: RegExpExecArray) => string][] = []

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
