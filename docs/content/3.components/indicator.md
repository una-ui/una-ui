---
description: 'Displays an indicator that can be used to show the status of a task or a component.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Indicator.vue
    target: _blank
---

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorBasic.vue
::
:::

### Label

| Prop    | Default | Type     | Description                 |
| ------- | ------- | -------- | --------------------------- |
| `label` | -       | `string` | The label of the indicator. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorLabel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorLabel.vue
::
:::

### Variant

| Prop        | Default | Type        | Description                   |
| ----------- | ------- | ----------- | ----------------------------- |
| `indicator` | `solid` | `{variant}` | The variant of the indicator. |

| Variant | Description                 |
| ------- | --------------------------- |
| `solid` | The default variant.        |
| `~`     | The unstyle or base variant |

### Color

| Prop        | Default             | Type                | Description                 |
| ----------- | ------------------- | ------------------- | --------------------------- |
| `indicator` | `{variant}-primary` | `{variant}-{color}` | The color of the indicator. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorColor.vue
::
:::

### Ping

| Prop   | Default | Type      | Description                |
| ------ | ------- | --------- | -------------------------- |
| `ping` | `false` | `boolean` | Enable the ping animation. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorPing
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorPing.vue
::
:::

### Size

| Prop   | Default | Type     | Description                |
| ------ | ------- | -------- | -------------------------- |
| `size` | `md`    | `string` | The size of the indicator. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorSize.vue
::
:::

### Visibility

| Prop      | Default | Type      | Description                 |
| --------- | ------- | --------- | --------------------------- |
| `visible` | `true`  | `boolean` | Show or hide the indicator. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorVisibility
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorVisibility.vue
::
:::

### Placement

| Prop        | Default     | Type          | Description                    |
| ----------- | ----------- | ------------- | ------------------------------ |
| `indicator` | `top-right` | `{placement}` | The position of the indicator. |

| Placement      | Description                      |
| -------------- | -------------------------------- |
| `top-right`    | Position indicator top right.    |
| `top-left`     | Position indicator top left.     |
| `bottom-right` | Position indicator bottom right. |
| `bottom-left`  | Position indicator bottom left.  |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIndicatorPlacement
::
::div{label="Code"}
@@@ ./components/content/examples/vue/indicator/ExampleVueIndicatorPlacement.vue
::
:::

## Slots

| Name        | Props | Description                                                   |
| ----------- | ----- | ------------------------------------------------------------- |
| `default`   | -     | The content of the indicator.                                 |
| `indicator` | -     | The entire indicator, this will reset including the position. |
| `label`     | -     | The label of the indicator.                                   |

## Presets
@@@ ../packages/preset/src/_shortcuts/indicator.ts [shortcuts/indicator.ts]

## Props
@@@ ../packages/nuxt/src/runtime/types/indicator.ts [types/indicator.ts]

## Components

:::CodeGroup
::div{label="Indicator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Indicator.vue
::
:::

