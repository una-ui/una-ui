---
description: 'NTable component - used to create a data table.'
---

# 🌑 Table

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

## Custom Columns

testing

## Slots

> You can use the following slots to customize the switch.

| Name           | Description                             | Props |
| -------------- | --------------------------------------- | ----- |

## Props
@@@ ../packages/nuxt/src/runtime/types/table.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/table.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/data/table/index.vue
