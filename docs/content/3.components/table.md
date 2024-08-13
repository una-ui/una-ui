---
description: 'NTable component - used to create a data table.'
---

# 🟢 Table

---

## Basic

use `NTable` component to create a powerful table and datagrids built using [Tanstack]([https://tanstack.com/table/latest/docs/framework/vue/guide/table-state]).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableBasic.vue
    
::
::code-block{label="Rows"}
@@@ ./components/content/examples/vue/table/rows.ts

::
::code-block{label="Columns"}
@@@ ./components/content/examples/vue/table/columns.ts

::
:::

## Column Ordering

Column ordering allows you to reorder columns by dragging and dropping them. This is useful when you want to change the order of columns in the table. Read more about column ordering in the [Tanstack documentation](https://tanstack.com/table/latest/docs/guide/column-ordering).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnOrdering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnOrdering.vue
    
::
::code-block{label="Rows"}
@@@ ./components/content/examples/vue/table/columns.ts

::
::code-block{label="Columns"}
@@@ ./components/content/examples/vue/table/columns.ts

::
:::

## Column Pinning

Column pinning allows you to pin columns to the `left` or `right` of the table. This is useful when you have a large number of columns and you want to keep some columns in view while scrolling. Read more about column pinning in the [Tanstack documentation](https://tanstack.com/table/latest/docs/guide/column-pinning).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnPinning
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnPinning.vue
    
::
::code-block{label="Rows"}
@@@ ./components/content/examples/vue/table/rows.ts

::
::code-block{label="Columns"}
@@@ ./components/content/examples/vue/table/columns.ts

::
:::

## Advanced

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableAdvanced
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableAdvanced.vue

::
::code-block{label="Rows"}
@@@ ./components/content/examples/vue/table/rows.ts

::
:::

## Slots

> You can use the following slots to customize the switch.

| Name | Description | Props |
| ---- | ----------- | ----- |

## Props
@@@ ../packages/nuxt/src/runtime/types/table.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/table.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/data/table/index.vue
