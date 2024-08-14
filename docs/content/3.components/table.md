---
description: 'NTable component - used to create a data table.'
---

# 🟢 Table

---

## Basic

use `NTable` component to create a powerful table and datagrids built using [Tanstack](https://tanstack.com/table/latest/docs/framework/vue/guide/table-state).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableBasic.vue
::
:::

## Row Selection

Row selection allows you to select rows in the table. This is useful when you want to select rows in the table. Read more about row selection in the [Tanstack Row Selection documentation](https://tanstack.com/table/latest/docs/guide/row-selection).

| Prop                      | Type      | Default | Description                           |
| ------------------------- | --------- | ------- | ------------------------------------- |
| `modelValue`              | `Array`   | `[]`    | Selected rows.                        |
| `enableRowSelection`      | `Boolean` | `false` | Enable row selection.                 |
| `enableMultiRowSelection` | `Boolean` | `false` | Enable multiple row selection.        |
| `rowId`                   | `String`  | `id`    | Row id to uniquely identify each row. |
| `enableSubRowSelection`   | `Boolean` | `false` | Enable sub row selection.             |
| `@select`                 | `Event`   |         | Emitted when a row is selected.       |
| `@select-all`             | `Event`   |         | Emitted when all rows are selected.   |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableRowSelection
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableRowSelection.vue
::
:::

## Pagination

Pagination allows you to paginate rows in the table. This is useful when you want to paginate rows in the table. Read more about pagination in the [Tanstack Pagination documentation](https://tanstack.com/table/latest/docs/guide/pagination).

| Prop                 | Type      | Default                        | Description                       |
| -------------------- | --------- | ------------------------------ | --------------------------------- |
| `v-model:pagination` | `Object`  | `{pageIndex: 0 ,pageSize: 10}` | Pagination default configuration. |
| `manualPagination`   | `Boolean` | `false`                        | Enable manual pagination.         |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTablePagination
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTablePagination.vue
::
:::

## Sorting

Sorting allows you to sort columns in ascending or descending order. This is useful when you want to sort columns in the table. Read more about sorting in the [Tanstack Sorting documentation](https://tanstack.com/table/latest/docs/guide/sorting).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableSorting
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableSorting.vue
::
:::

## Visibility

Visibility allows you to show or hide columns in the table. This is useful when you want to show or hide columns in the table. Read more about visibility in the [Tanstack Visibility documentation](https://tanstack.com/table/latest/docs/guide/visibility).

## Global Filtering

Global filtering allows you to filter rows based on the value entered in the filter input. This is useful when you want to filter rows in the table. Read more about global filtering in the [Tanstack Global Filtering documentation](https://tanstack.com/table/latest/docs/guide/global-filtering).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableGlobalFiltering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGlobalFiltering.vue
::
:::

## Column Filtering

Filtering allows you to filter columns based on the value entered in the filter input. This is useful when you want to filter columns in the table. Read more about filtering in the [Tanstack Column Filtering documentation](https://tanstack.com/table/latest/docs/guide/column-filtering).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnFiltering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnFiltering.vue
::
:::

## Column Ordering

Column ordering allows you to reorder columns by dragging and dropping them. This is useful when you want to change the order of columns in the table. Read more about column ordering in the [Tanstack Column Ordering documentation](https://tanstack.com/table/latest/docs/guide/column-ordering).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnOrdering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnOrdering.vue
::
:::

## Column Pinning

Column pinning allows you to pin columns to the `left` or `right` of the table. This is useful when you have a large number of columns and you want to keep some columns in view while scrolling. Read more about column pinning in the [Tanstack Column Pinning documentation](https://tanstack.com/table/latest/docs/guide/column-pinning).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnPinning
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnPinning.vue
::
:::

## Expandanding

Expanding allows you to expand rows to show additional information. This is useful when you want to show additional information about a row. Read more about expanding in the [Tanstack Expanding documentation](https://tanstack.com/table/latest/docs/guide/expanding).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableExpanding
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableExpanding.vue
::
:::

## Grouping

Grouping allows you to group rows based on a column value. This is useful when you want to group rows in the table. Read more about grouping in the [Tanstack Grouping documentation](https://tanstack.com/table/latest/docs/guide/grouping).

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableGrouping
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGrouping.vue
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
@@@ ../packages/nuxt/src/runtime/components/data/table/table.vue
