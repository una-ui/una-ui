---
description: 'Displays a card with header, content, and footer.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/card/Card.vue
    target: _blank
---


## Examples

### Basic

| Prop          | Default | Type     | Description           |
| ------------- | ------- | -------- | --------------------- |
| `title`       | -       | `string` | The card title.       |
| `description` | -       | `string` | The card description. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardBasic.vue
::
:::

### Variant

| Prop   | Default   | Type        | Description              |
| ------ | --------- | ----------- | ------------------------ |
| `card` | `outline` | `{variant}` | The variant of the card. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `soft`    | The soft variant.           |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardVariant.vue
::
:::

### Color

| Prop   | Default             | Type                | Description            |
| ------ | ------------------- | ------------------- | ---------------------- |
| `card` | `{variant}-primary` | `{variant}-{color}` | The color of the card. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardColor.vue
::
:::

### Slots

| Name          | Props | Description           |
| ------------- | ----- | --------------------- |
| `header`      | -     | The header slot.      |
| `default`     | -     | The default slot.     |
| `title`       | -     | The title slot.       |
| `description` | -     | The description slot. |
| `footer`      | -     | The footer slot.      |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/tooltip.ts [shortcuts/tooltip.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/tooltip.ts [types/tooltip.ts]

## Components

:::CodeGroup
::div{label="Tooltip.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/Tooltip.vue

::
::div{label="TooltipProvider.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipProvider.vue

::
::div{label="TooltipRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipRoot.vue

::
::div{label="TooltipContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipContent.vue

::
::div{label="TooltipTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipTrigger.vue

::
:::
