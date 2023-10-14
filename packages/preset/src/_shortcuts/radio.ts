import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type RadioPrefix = 'radio'

export const staticRadio: Record<`${RadioPrefix}-${string}` | RadioPrefix, string> = {
  // base
  'radio': 'radio-primary transition-base border border-$c-ring rounded-full p-0.25em n-checked:border-brand n-checked:bg-brand',
  'radio-inner': 'transition-base m-auto h-0.4em w-0.4em rounded-full n-checked:bg-base',
  'radio-label': 'block text-sm font-medium leading-6',
  'radio-peer-focus': 'peer-focus-(ring-2 ring-brand ring-offset-2 ring-offset-base)',
  'radio-input': 'absolute w-full opacity-0',
  'radio-reverse': 'flex-row-reverse',

  // wrappers
  'radio-wrapper': 'gap-x-3 relative rounded-full inline-flex items-center hover:cursor-pointer',
}

export const dynamicRadio = [
  [/^radio-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
]

export const radio = [
  ...dynamicRadio,
  staticRadio,
]
