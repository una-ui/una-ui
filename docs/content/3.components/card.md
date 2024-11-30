---
description: 'Displays a card with header, content, and footer.'
badges:
  - value: Source
    icon: radix-icons:github-logo
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

@@@ ../packages/preset/src/_shortcuts/card.ts [shortcuts/card.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/card.ts [types/card.ts]

## Components

:::CodeGroup
::div{label="Card.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/Card.vue

::
::div{label="CardContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardContent.vue

::
::div{label="CardAbout.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardAbout.vue

::
::div{label="CardTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardTitle.vue

::
::div{label="CardDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardDescription.vue

::
::div{label="CardHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardHeader.vue

::
::div{label="CardFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardFooter.vue

::
:::
