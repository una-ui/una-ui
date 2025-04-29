---
description: Displays content within a desired ratio.
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/aspect-ratio/AspectRatio.vue
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

### Variants and Colors

| Prop           | Default     | Type                | Description                                       |
| -------------- | ----------- | ------------------- | ------------------------------------------------- |
| `aspect-ratio` | `soft-gray` | `{variant}-{color}` | Change the styling of the aspect-ratio component. |

| Variant   | Description                                   |
| --------- | --------------------------------------------- |
| `soft`    | Adds a light background color                 |
| `outline` | Adds a border with the specified color        |
| `~`       | Unstyled variant (no default styling applied) |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAspectRatioVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/aspect-ratio/ExampleVueAspectRatioVariant.vue
::
:::

### Rounded

| Prop      | Default | Type     | Description                                   |
| --------- | ------- | -------- | --------------------------------------------- |
| `rounded` | `md`    | `string` | Set the aspect-ratio to have rounded corners. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAspectRatioRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/aspect-ratio/ExampleVueAspectRatioRounded.vue
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

## Presets

@@@ ../packages/preset/src/_shortcuts/aspect-ratio.ts [shortcuts/aspect-ratio.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/aspect-ratio.ts [types/aspect-ratio.ts]

## Components

:::CodeGroup
::div{label="AspectRatio.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/aspect-ratio/AspectRatio.vue
::
:::
