import { parseColor } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-uno'
import type { RuleContext } from '@unocss/core'

type TabsPrefix = 'tabs'

export const staticTabs: Record<`${TabsPrefix}-${string}` | TabsPrefix, string> = {
  // configurations
  'tabs-default-variant': 'tabs-primary',
  'tabs-active': 'bg-brand shadow-sm text-white',
  'tabs-disabled': 'n-disabled',

  // components
  'tabs': 'tabs-primary flex flex-col w-full',
  'tabs-trigger': 'flex items-center justify-center whitespace-nowrap text-$c-gray-600 bg-muted rounded-sm px-3 py-1.5 text-sm font-medium disabled:tabs-disabled focus-visible:z-10 focus:outline-none btn-focus data-[state=active]:tabs-active',
  'tabs-list': 'flex bg-muted items-center justify-center rounded-md p-1',
  'tabs-content': 'mt-4',

  'tabs-solid-white': 'bg-base text-base shadow-sm',
  'tabs-solid-black': 'bg-inverted text-inverted shadow-sm',
}

export const dynamicTabs = [
  [/^tabs-(.*)$/, ([, body]: string[], { theme }: RuleContext<Theme>) => {
    const color = parseColor(body, theme)
    if ((color?.cssColor?.type === 'rgb' || color?.cssColor?.type === 'rgba') && color.cssColor.components)
      return `n-${body}-600 dark:n-${body}-500`
  }],
  // [/^tabs-solid(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=active]:bg-${c}-600 dark:data-[state=active]:bg-${c}-500 data-[state=active]:text-white`],
  // [/^tabs-link(-(\S+))?$/, ([, , c = 'primary']) => `data-[state=active]:text-${c}-500 dark:data-[state=active]:text-${c}-400 data-[state=active]:bg-muted dark:data-[state=active]:bg-muted`],
]

export const tabs = [
  ...dynamicTabs,
  staticTabs,
]
