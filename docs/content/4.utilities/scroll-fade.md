---
navBadges:
  - value: New
    type: lime
description: 'Fades the edges of a scroll container, and only while there is content to reveal in that direction.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_rules/scroll-fade.ts
    target: _blank
---

`scroll-fade` masks the edges of any scroll container so content dissolves instead of being cut off. Where the browser supports [scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline), each edge only fades while there is something to reveal in that direction: the top edge is sharp when you are at the top, and fades in as you scroll away from it. No JavaScript is involved.

It is a plain utility — it needs no component, and works on anything that scrolls.

```vue
<div class="h-56 overflow-y-auto scroll-fade">
  <!-- both edges fade as you scroll -->
</div>
```

## Examples

### Edges

`scroll-fade` fades both block edges. Narrow it to one edge when only one of them ever needs it — a chat transcript typically fades the bottom only.

| Class              | Fades                                       |
| ------------------ | ------------------------------------------- |
| `scroll-fade`      | both block edges (alias of `scroll-fade-y`) |
| `scroll-fade-y`    | top and bottom                              |
| `scroll-fade-x`    | both inline edges                           |
| `scroll-fade-t`    | top                                         |
| `scroll-fade-b`    | bottom                                      |
| `scroll-fade-s`    | inline start (flips under `dir="rtl"`)      |
| `scroll-fade-e`    | inline end (flips under `dir="rtl"`)        |
| `scroll-fade-l`    | left, physical                              |
| `scroll-fade-r`    | right, physical                             |
| `scroll-fade-none` | removes the mask                            |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollFadeBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-fade/ExampleVueScrollFadeBasic.vue
::
:::

### Size

The fade defaults to `min(12%, 2.5rem)`. Set it globally with `scroll-fade-<n>` or per edge with `scroll-fade-<edge>-<n>`, where `n` is a spacing step; arbitrary values work too.

| Class                  | Size                         |
| ---------------------- | ---------------------------- |
| `scroll-fade-16`       | every edge, `4rem`           |
| `scroll-fade-b-16`     | bottom edge, `4rem`          |
| `scroll-fade-b-[4rem]` | bottom edge, arbitrary value |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollFadeSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-fade/ExampleVueScrollFadeSize.vue
::
:::

### Horizontal

`scroll-fade-x` fades both inline edges of a horizontal scroller — a filter row, a tag strip, a carousel. The logical variants (`-s`, `-e`) follow the writing direction, so they swap sides under `dir="rtl"`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollFadeHorizontal
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-fade/ExampleVueScrollFadeHorizontal.vue
::
:::

## How it works

The utility sets a CSS mask built from custom properties, and drives those properties with a scroll-linked animation:

```css
animation-timeline: scroll(self y);
animation-range: calc(100% - var(--scroll-fade-reveal)) 100%;
```

Two things follow from that.

::alert
**Browsers without scroll-driven animations** (Firefox before 144, Safari before 26) take an `@supports not` fallback: the declared edges fade at a constant size instead of reacting to scroll position. The content still reads correctly — the fade simply does not come and go.
::

The reveal distance — how much scrolling it takes for an edge to reach full fade — is `--scroll-fade-reveal`, `6rem` by default. Override it, or the fade size, per element:

```vue
<div class="overflow-y-auto scroll-fade" style="--scroll-fade-reveal: 2rem">
```

## Scrollbars

The scrollbar utilities pair with `scroll-fade` and are documented on their own page: [scrollbar](/utilities/scrollbar).
