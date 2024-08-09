---
title: 🌑 Divider
description: 'The Divider component that separates the content.'
---

# 🌑 Divider

---

## Basic

`NDivider` - used to separate the content.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDividerBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/divider/ExampleVueDividerBasic.vue
::
:::

## Variants

`direction="{variant}"` - change the variant of the divider's direction.

| Variant   | Description                 |
| --------- | --------------------------- |
| `horizontal`   | The default direction. |
| `vertical`     | The vertical direction.|

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDividerVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/divider/ExampleVueDividerVariant.vue
::
:::

## Alignments

`align="{value}"` - change the alignment of the divider.

| Align      | Description                 |
| ---------- | --------------------------- |
| `left`     | Aligns the divider's content to the left.   |
| `right`    | Aligns the divider's content to the right.  |
| `center`   | Aligns the divider's content to the center. |
| `top`      | Aligns the divider's content to the top.    |
| `bottom`   | Aligns the divider's content to the bottom. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDividerAlignments
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/divider/ExampleVueDividerAlignments.vue
::
:::

## Type

`type="{value}"` - change the type of the divider.

| Type      | Description                 |
| --------- | --------------------------- |
| `solid`   | The default type.           |
| `dashed`  | The dashed type.            |
| `dotted`  | The dotted type.            |        

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDividerType
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/divider/ExampleVueDividerType.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/divider.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/divider.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Divider.vue





