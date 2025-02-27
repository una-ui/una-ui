---
description: 'Augments native scroll functionality for custom, cross-browser styling.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/scroll-area/ScrollArea.vue
    target: _blank
  - value: API reference
    to: https://reka-ui.com/docs/components/scroll-area
    target: _blank
---

## Examples

### Basic

| Prop              | Default    | Type                                | Description                                                                                                                                             |
| ----------------- | ---------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dir`             | `ltr`      | `ltr`, `rtl`                        | The reading direction of the combobox when applicable. If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode. |
| `scrollHideDelay` | `600`      | `number`                            | Determines the length of time, in milliseconds, before the scrollbars are hidden                                                                        |
| `type`            | `hover`    | `scroll`, `always`, `auto`, `hover` | Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.                |
| `orientation`     | `vertical` | `vertical`, `horizontal`            | The orientation of the scrollbar                                                                                                                        |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/scroll-area#root" title="Reka Scroll Area Root API." target="_blank"}

### Orientation

You can configure the orientation of the scroll area (scroll-area) using the `orientation` prop, which can be passed either directly to the `ScrollArea` component or through the `_scrollAreaScrollbar`.

| Prop          | Default    | Type                     | Description                      |
| ------------- | ---------- | ------------------------ | -------------------------------- |
| `orientation` | `vertical` | `vertical`, `horizontal` | The orientation of the scrollbar |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaOrientation.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/scroll-area#scrollbar" title="Reka Scroll Area Scrollbar API." target="_blank"}

### Customization

You can also use the `una` prop to add utility classes, refer to the [Props](#props) and [Presets](#presets) sections for more information.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaCustomization
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaCustomization.vue
::
:::

## Slots

| Name      | Props | Description                                      |
| --------- | ----- | ------------------------------------------------ |
| `default` | -     | The default slot for the `ScrollArea` component. |

## Presets

@@@ ../packages/preset/src/_shortcuts/scroll-area.ts [shortcuts/scroll-area.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/scroll-area.ts [types/scroll-area.ts]

## Components

:::CodeGroup
::div{label="ScrollArea.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/scroll-area/ScrollArea.vue

::
::div{label="ScrollBar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/scroll-area/ScrollBar.vue
::
:::
