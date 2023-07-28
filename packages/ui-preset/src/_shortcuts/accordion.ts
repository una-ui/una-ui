type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // base
  'accordion': 'flex flex-col text-sm relative border border-base rounded-md divide-y divide-base',
  'accordion-item': 'w-full',
  'accordion-button': 'text-primary w-full p-4 flex text-1em font-semibold justify-between items-center',
  'accordion-panel': 'border-t border-$c-divider shadow-inner px-4 py-6 text-1em pr-12 text-$c-gray-600',
}

export const dynamicAccordion: [RegExp, (params: RegExpExecArray) => string][] = []

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
