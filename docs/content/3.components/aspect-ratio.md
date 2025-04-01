---
description: A composable, themeable and customizable sidebar component.
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/AspectRatio.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/aspect-ratio
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description                 |
| ------- | ------- | -------- | --------------------------- |
| `ratio` | `1`     | `number` | The desired ratio. Eg: 16/9 |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAspectRatioBasic
::

::div{label="Code"}
@@@ ./components/content/examples/vue/aspect-ratio/ExampleVueAspectRatioBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/aspect-ratio#root" title="Reka Aspect Ratio Root API." target="_blank"}

### Variant and Color

| Prop           | Default | Type                | Description                                       |
| -------------- | ------- | ------------------- | ------------------------------------------------- |
| `aspect-ratio` | `soft`  | `{variant}-{color}` | Change the variant and color of the aspect-ratio. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAspectRatioVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/aspect-ratio/ExampleVueAspectRatioVariant.vue
::
:::

## Slots

| Name      | Props    | Description       |
| --------- | -------- | ----------------- |
| `default` | `aspect` | The default slot. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueAspectRatioSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/aspect-ratio/ExampleVueAspectRatioSlots.vue
::
:::
