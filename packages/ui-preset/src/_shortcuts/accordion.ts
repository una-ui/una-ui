import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type AccordionPrefix = 'accordion'

export const staticAccordion: Record<`${AccordionPrefix}-${string}` | AccordionPrefix, string> = {
  // config
  'accordion-trailing-icon': 'i-heroicons-chevron-up',

  // base
  'accordion': 'flex-(~ col) text-sm relative w-full',
  'accordion-border': 'border-(~ base) rounded-md',
  'accordion-divider': 'divide-(y base)',
  'accordion-item': 'w-full',
  'accordion-button': 'p-(x-3 y-4) justify-start text-brand',
  'accordion-panel': 'text-(muted 1em $c-gray-600) border-(t $c-divider) p-4',
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
  [/^accordion-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const accordion = [
  ...dynamicAccordion,
  staticAccordion,
]
