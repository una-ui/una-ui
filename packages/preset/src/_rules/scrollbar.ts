import type { Rule } from '@unocss/core'
import { symbols } from '@unocss/core'

// Ported from shadcn-vue/tailwind.css + the v4 app's main.css extras.

function bodyRule(name: string, body: string): Rule {
  return [name, {
    [symbols.body]: body,
    [symbols.shortcutsNoMerge]: true,
  } as any]
}

export const scrollbar: Rule[] = [
  bodyRule('no-scrollbar', `
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`),
  bodyRule('scrollbar-none', `
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`),
  bodyRule('scrollbar-thin', `
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`),
  bodyRule('scrollbar-thumb-transparent', `
  --una-scrollbar-thumb: transparent;
  scrollbar-color: var(--una-scrollbar-thumb) var(--una-scrollbar-track, transparent);
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`),
  bodyRule('scrollbar-track-transparent', `
  --una-scrollbar-track: transparent;
  scrollbar-color: var(--una-scrollbar-thumb, transparent) var(--una-scrollbar-track);
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`),
  ['scrollbar-gutter-stable', { 'scrollbar-gutter': 'stable' }],
  ['contain-content', { contain: 'content' }],
]
