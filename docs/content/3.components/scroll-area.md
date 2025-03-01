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

| Prop              | Default | Type                                | Description                                                                                                                                             |
| ----------------- | ------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dir`             | `ltr`   | `ltr`, `rtl`                        | The reading direction of the combobox when applicable. If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode. |
| `scrollHideDelay` | `600`   | `number`                            | Determines the length of time, in milliseconds, before the scrollbars are hidden                                                                        |
| `type`            | `hover` | `scroll`, `always`, `auto`, `hover` | Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.                |

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

The `orientation` prop controls the scroll direction and can be set on either the `ScrollArea` component or via `_scrollAreaScrollbar`.

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

### Color

| Prop         | Default | Type     | Description                   |
| ------------ | ------- | -------- | ----------------------------- |
| `scrollArea` | `gray`  | `string` | The color of the scroll area. |

::alert
You can use any color palette you want. Una UI uses [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors) under the hood, But you can also define your own custom theme colors, see [Extending Section](#overriding-and-extending).
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                  |
| ------ | ------- | -------- | ---------------------------- |
| `size` | `md`    | `string` | The size of the scroll area. |

::alert
You can you use any number size that you can imagine, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaSize.vue
::
:::

### Rounded

| Prop      | Default | Type     | Description                         |
| --------- | ------- | -------- | ----------------------------------- |
| `rounded` | `full`  | `string` | The roundedness of the scroll area. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueScrollAreaRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/scroll-area/ExampleVueScrollAreaRounded.vue
::
:::

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
