---
description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Progress.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/progress
    target: _blank
---

## Examples

### Basic

| Prop            | Default                                       | Type                                       | Description                                                                                                                                                                                                 |
| --------------- | --------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`    | -                                             | `number`                                   | The progress value. Can be bind as `v-model`.                                                                                                                                                               |
| `max`           | `100`                                         | `number`                                   | The maximum progress value.                                                                                                                                                                                 |
| `indeterminate` | `false`                                       | `boolean`                                  | Makes the progress bar indeterminate. When true, the progress bar will animate without a specific value.                                                                                                    |
| `getValueLabel` | `${Math.round((value / max) * DEFAULT_MAX)}%` | `((value: number, max: number) => string)` | A function to get the accessible label text representing the current value in a human-readable format. If not provided, the value label will be read as the numeric value as a percentage of the max value. |
| `rounded`       | `full`                                        | `string`                                   | Sets the border-radius of the progress bar.                                                                                                                                                                 |

:read-more{to="https://www.reka-ui.com/docs/components/progress#root" title="Reka Progress Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueProgressBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressBasic.vue
::
:::

### Color

| Prop       | Default   | Type     | Description                         |
| ---------- | --------- | -------- | ----------------------------------- |
| `progress` | `primary` | `string` | Sets the color of the progress bar. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueProgressColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                        |
| ------ | ------- | -------- | ---------------------------------- |
| `size` | `md`    | `string` | Sets the size of the progress bar. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueProgressSize

::
::div{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressSize.vue
::
:::

## Customization

Configure the progress using the `una` prop and utility classes.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueProgressCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressCustom.vue
::
:::

## Slots

| Name      | Props | Description             |
| --------- | ----- | ----------------------- |
| `default` | -     | The progress indicator. |

## Presets

@@@ ../packages/preset/src/_shortcuts/progress.ts [shortcuts/progress.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/progress.ts [types/progress.ts]

## Components

:::CodeGroup
::div{label="Progress.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Progress.vue
::
:::
