import type { Rule } from '@unocss/core'
import { symbols } from '@unocss/core'
import { handler as h } from '@unocss/preset-mini/utils'

// Ported from shadcn-vue/tailwind.css (packages/cli/src/tailwind.css).
// Scroll-aware edge fades driven by CSS scroll-driven animations
// (`animation-timeline: scroll(self)`) so an edge only fades while there is
// content to reveal in that direction — no JavaScript required. Falls back to
// a static fade where scroll timelines are unsupported.
// The @property/@keyframes machinery lives in `scrollFadePreflight`.

const FADE_SIZE = 'var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))'
const REVEAL = 'var(--scroll-fade-reveal, calc(var(--spacing) * 24))'

function size(dir: 't' | 'b' | 's' | 'e') {
  return `var(--scroll-fade-${dir}-size, ${FADE_SIZE})`
}

const MASK = `
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`

function maskImage(value: string) {
  return `
  -webkit-mask-image: ${value};
  mask-image: ${value};
  ${MASK}`
}

const BLOCK_GRADIENT = `linear-gradient(
    to bottom,
    transparent 0,
    #000 var(--scroll-fade-t, 0px),
    #000 calc(100% - var(--scroll-fade-b, 0px)),
    transparent 100%
  )`

function inlineGradient(to: 'right' | 'left') {
  return `linear-gradient(
    to ${to},
    transparent 0,
    #000 var(--scroll-fade-s, 0px),
    #000 calc(100% - var(--scroll-fade-e, 0px)),
    transparent 100%
  )`
}

const fadeY = `
  --_scroll-fade-size-t: ${size('t')};
  --_scroll-fade-size-b: ${size('b')};
  --scroll-fade-block: ${BLOCK_GRADIENT};
  ${maskImage('var(--scroll-fade-mask, var(--scroll-fade-block))')}
  @supports (animation-timeline: scroll()) {
    animation:
      scroll-fade-reveal-t 1ms ease-in-out,
      scroll-fade-reveal-b 1ms ease-in-out;
    animation-timeline: scroll(self y), scroll(self y);
    animation-range:
      0 ${REVEAL},
      calc(100% - ${REVEAL}) 100%;
    animation-fill-mode: both;
  }
  @supports not (animation-timeline: scroll()) {
    --scroll-fade-t: var(--_scroll-fade-size-t);
    --scroll-fade-b: var(--_scroll-fade-size-b);
  }
`

const fadeX = `
  --_scroll-fade-size-s: ${size('s')};
  --_scroll-fade-size-e: ${size('e')};
  --scroll-fade-inline: ${inlineGradient('right')};
  &:where([dir="rtl"], [dir="rtl"] *) {
    --scroll-fade-inline: ${inlineGradient('left')};
  }
  ${maskImage('var(--scroll-fade-mask, var(--scroll-fade-inline))')}
  @supports (animation-timeline: scroll()) {
    animation:
      scroll-fade-reveal-s 1ms ease-in-out,
      scroll-fade-reveal-e 1ms ease-in-out;
    animation-timeline: scroll(self inline), scroll(self inline);
    animation-range:
      0 ${REVEAL},
      calc(100% - ${REVEAL}) 100%;
    animation-fill-mode: both;
  }
  @supports not (animation-timeline: scroll()) {
    --scroll-fade-s: var(--_scroll-fade-size-s);
    --scroll-fade-e: var(--_scroll-fade-size-e);
  }
`

interface EdgeConfig {
  dir: 't' | 'b' | 's' | 'e'
  timeline: string
  from: boolean
  gradient: string
  rtlGradient?: string
}

function edgeFade({ dir, timeline, from, gradient, rtlGradient }: EdgeConfig) {
  return `
  --_scroll-fade-size-${dir}: ${size(dir)};
  --scroll-fade-mask: ${gradient};
  ${rtlGradient
    ? `&:where([dir="rtl"], [dir="rtl"] *) {
    --scroll-fade-mask: ${rtlGradient};
  }`
    : ''}
  ${maskImage('var(--scroll-fade-mask)')}
  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-${dir} 1ms ease-in-out;
    animation-timeline: scroll(self ${timeline});
    animation-range: ${from ? `0 ${REVEAL}` : `calc(100% - ${REVEAL}) 100%`};
    animation-fill-mode: both;
  }
  @supports not (animation-timeline: scroll()) {
    --scroll-fade-${dir}: var(--_scroll-fade-size-${dir});
  }
`
}

function startGradient(to: 'right' | 'left', dir: 's' | 't') {
  return `linear-gradient(to ${to}, transparent 0, #000 var(--scroll-fade-${dir}, 0px), #000 100%)`
}

function endGradient(to: 'right' | 'left', dir: 'e' | 'b') {
  return `linear-gradient(to ${to}, #000 0, #000 calc(100% - var(--scroll-fade-${dir}, 0px)), transparent 100%)`
}

function bodyRule(name: string, body: string): Rule {
  return [name, {
    [symbols.body]: body,
    [symbols.shortcutsNoMerge]: true,
  } as any]
}

function fadeSize(value: string | undefined, edge?: 't' | 'b' | 's' | 'e') {
  if (!value)
    return undefined
  const prop = edge ? `--scroll-fade-${edge}-size` : '--scroll-fade-size'
  if (/^\d+$/.test(value))
    return { [prop]: `calc(var(--spacing) * ${value})` }
  const parsed = h.bracket(value)
  if (parsed != null)
    return { [prop]: parsed }
  return undefined
}

export const scrollFade: Rule[] = [
  bodyRule('scroll-fade', fadeY),
  bodyRule('scroll-fade-y', fadeY),
  bodyRule('scroll-fade-x', fadeX),
  bodyRule('scroll-fade-t', edgeFade({ dir: 't', timeline: 'y', from: true, gradient: 'linear-gradient(to bottom, transparent 0, #000 var(--scroll-fade-t, 0px), #000 100%)' })),
  bodyRule('scroll-fade-b', edgeFade({ dir: 'b', timeline: 'y', from: false, gradient: 'linear-gradient(to bottom, #000 0, #000 calc(100% - var(--scroll-fade-b, 0px)), transparent 100%)' })),
  bodyRule('scroll-fade-l', edgeFade({ dir: 's', timeline: 'x', from: true, gradient: startGradient('right', 's') })),
  bodyRule('scroll-fade-r', edgeFade({ dir: 'e', timeline: 'x', from: false, gradient: endGradient('right', 'e') })),
  bodyRule('scroll-fade-s', edgeFade({ dir: 's', timeline: 'inline', from: true, gradient: startGradient('right', 's'), rtlGradient: startGradient('left', 's') })),
  bodyRule('scroll-fade-e', edgeFade({ dir: 'e', timeline: 'inline', from: false, gradient: endGradient('right', 'e'), rtlGradient: endGradient('left', 'e') })),
  ['scroll-fade-none', { '--scroll-fade-mask': 'none' }],
  [/^scroll-fade-([tbse])-(.+)$/, ([, edge, value]) => fadeSize(value, edge as 't' | 'b' | 's' | 'e')],
  [/^scroll-fade-(\d+|\[.+\])$/, ([, value]) => fadeSize(value)],
]

export const scrollFadePreflight = `
@property --scroll-fade-t {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-b {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-s {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-e {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-mask {
  syntax: "*";
  inherits: false;
}
@keyframes scroll-fade-reveal-t {
  from { --scroll-fade-t: 0px; }
  to { --scroll-fade-t: var(--_scroll-fade-size-t, ${FADE_SIZE}); }
}
@keyframes scroll-fade-reveal-b {
  from { --scroll-fade-b: var(--_scroll-fade-size-b, ${FADE_SIZE}); }
  to { --scroll-fade-b: 0px; }
}
@keyframes scroll-fade-reveal-s {
  from { --scroll-fade-s: 0px; }
  to { --scroll-fade-s: var(--_scroll-fade-size-s, ${FADE_SIZE}); }
}
@keyframes scroll-fade-reveal-e {
  from { --scroll-fade-e: var(--_scroll-fade-size-e, ${FADE_SIZE}); }
  to { --scroll-fade-e: 0px; }
}
`
