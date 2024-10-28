---
description: 'NIndicator component - used to display a basic indicator with or without a label.'
---

## Basic

`NIndicator` is a component that can be used to display a basic indicator with or without a label.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorBasic.vue
::
:::

## Variant

`indicator="{variant}"` - change the variant of the indicator.

::alert{type="info"}
For the moment, only the `solid` variant is available. You can add your own variant through configuration.
::

| Variant | Description                 |
| ------- | --------------------------- |
| `solid` | The default variant.        |
| `~`     | The unstyle or base variant |

## Color

`indicator="{variant}-{color}"` - change the color of the indicator.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorColor.vue
::
:::

## Label

`label="{label}"` - add label to the indicator.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorLabel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorLabel.vue
::
:::

## Ping

`ping` - add a ping animation to the indicator.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorPing
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorPing.vue
::
:::

## Size

`indicator="{size}"` - change the size of the indicator.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorSize.vue
::
:::

## Visibility

`visible` - change the visibility of the indicator.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorVisibility
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorVisibility.vue
::
:::

## Placement

`indicator="{placement}"` - change the placement of the indicator.

| Placement      | Description                      |
| -------------- | -------------------------------- |
| `top-right`    | The default placement.           |
| `top-left`     | Position indicator top left.     |
| `bottom-right` | Position indicator bottom right. |
| `bottom-left`  | Position indicator bottom left.  |

::alert{type="info"}
You can add your own placement through configuration. see [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorPlacement
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorPlacement.vue
::
:::

## Slots

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| `default`   | The content of the indicator.                                 |
| `indicator` | The entire indicator, this will reset including the position. |
| `label`     | The label of the indicator.                                   |

## Props
@@@ ../packages/nuxt/src/runtime/types/indicator.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/indicator.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Indicator.vue
