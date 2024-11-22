---
description: 'Displays a badge or a component that looks like a badge.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Badge.vue
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description             |
| ------- | ------- | -------- | ----------------------- |
| `label` | -       | `string` | The label of the badge. |

::alert{type="info"}
You can also use default slot to set the badge label. Refer to [slots](#slots) for more information.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeBasic.vue
::
:::

### Variant

| Prop    | Default | Type        | Description               |
| ------- | ------- | ----------- | ------------------------- |
| `badge` | `soft`  | `{variant}` | The variant of the badge. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `soft`    | The default variant.        |
| `solid`   | The solid variant.          |
| `outline` | The outline variant.        |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeVariant.vue
::
:::

### Color

| Prop    | Default             | Type                | Description             |
| ------- | ------------------- | ------------------- | ----------------------- |
| `badge` | `{variant}-primary` | `{variant}-{color}` | The color of the badge. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                                 |
| ------ | ------- | -------- | ------------------------------------------- |
| `size` | `xs`    | `string` | Allows you to change the size of the input. |

> 🚀 Adjust input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeSize.vue
::
:::

### Icon

`icon={icon}` - add an icon to the badge.

::alert{type="info"}
By default we use `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/), refer to [configuration](/#getting-started/configuration) for more information.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeIcon.vue
::
:::

### Closable

| Prop       | Default | Type      | Description                    |
| ---------- | ------- | --------- | ------------------------------ |
| `closable` | `false` | `boolean` | Add a close icon to the badge. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeClosable
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeClosable.vue
::
:::

### Slots

| Name      | Props | Description      |
| --------- | ----- | ---------------- |
| `default` | -     | The badge label. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBadgeDefaultSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeDefaultSlot.vue
::
:::

### Events

| Event Name | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| `@close`   | emit an event when the close icon is clicked. Use in conjunction with `closable`. |

## Presets

@@@ ../packages/preset/src/_shortcuts/badge.ts [shortcuts/badge.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/badge.ts [types/badge.ts]

## Components

:::CodeGroup
::div{label="Badge.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Badge.vue
::
:::

