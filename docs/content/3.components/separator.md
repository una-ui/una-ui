---
description: 'Visually or semantically separates content.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Separator.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/separator
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description        |
| ------- | ------- | -------- | ------------------ |
| `label` | -       | `string` | The label content. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSeparatorBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorBasic.vue
::
:::

### Variant & Color

| Prop        | Default      | Type                | Description                          |
| ----------- | ------------ | ------------------- | ------------------------------------ |
| `separator` | `solid-gray` | `{variant}-{color}` | Set the separator variant and color. |

| Variant  | Description    |
| -------- | -------------- |
| `solid`  | A solid line.  |
| `dashed` | A dashed line. |
| `dotted` | A dotted line. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSeparatorVariantColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorVariantColor.vue
::
:::

### Orientation

| Prop          | Default      | Type                     | Description                    |
| ------------- | ------------ | ------------------------ | ------------------------------ |
| `orientation` | `horizontal` | `horizontal`, `vertical` | Set the separator orientation. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSeparatorOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorOrientation.vue
::
:::

### Position

Allows you to adjust the position of the label content. Here are the available positions and their corresponding orientations:

| Prop                 | Default  | Type                                       | Description                 |
| -------------------- | -------- | ------------------------------------------ | --------------------------- |
| `separator-position` | `center` | `center`, `left`, `right`, `top`, `bottom` | Set the separator position. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSeparatorPosition
::
::div{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorPosition.vue
::
:::

### Size

| Prop   | Default | Type     | Description             |
| ------ | ------- | -------- | ----------------------- |
| `size` | -       | `string` | Set the separator size. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSeparatorSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorSize.vue
::
:::

### Slots

| Name      | Props | Description        |
| --------- | ----- | ------------------ |
| `default` | -     | The label content. |

## Presets

@@@ ../packages/preset/src/_shortcuts/separator.ts [shortcuts/separator.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/separator.ts [types/separator.ts]

## Components

:::CodeGroup
::div{label="Separator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Separator.vue
::
:::
