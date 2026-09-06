---
navBadges:
  - value: New
    type: lime
description: 'Thin, hidden or transparent scrollbars, and a stable gutter, across Firefox and WebKit.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_rules/scrollbar.ts
    target: _blank
---

Scrollbar utilities for any scroll container. Each one sets both the standard properties (`scrollbar-width`, `scrollbar-color`) and the WebKit pseudo-elements, so Firefox and Chromium/Safari agree.

| Class                         | Effect                                                           |
| ----------------------------- | ---------------------------------------------------------------- |
| `scrollbar-thin`              | Thin scrollbar — `8px` in WebKit.                                |
| `scrollbar-none`              | Hides the scrollbar; the container still scrolls.                |
| `no-scrollbar`                | Alias of `scrollbar-none`.                                       |
| `scrollbar-gutter-stable`     | Reserves the gutter, so content does not shift when it appears.  |
| `scrollbar-thumb-transparent` | Makes the thumb transparent.                                     |
| `scrollbar-track-transparent` | Makes the track transparent.                                     |
| `contain-content`             | `contain: content` — an isolation hint for long, busy scrollers. |

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollbarBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scrollbar/ExampleVueScrollbarBasic.vue
::
:::

### Hiding the scrollbar while scrolling

The transparent utilities are variant-composable, which is how [MessageScroller](/components/message-scroller) fades its scrollbar out during an autoscroll and back in when the reader takes over:

```vue
<div
  class="overflow-y-auto scrollbar-thin data-[autoscrolling]:scrollbar-thumb-transparent"
  :data-autoscrolling="autoscrolling ? '' : undefined"
/>
```

::alert
`scrollbar-none` removes the affordance, not the scrolling. Keep a visible cue — a [`scroll-fade`](/utilities/scroll-fade) edge, or a scroll button — so it is still clear there is more to read.
::
