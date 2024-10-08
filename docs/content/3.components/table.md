---
description: 'NTable component - used to create a data table.'
---

# 🟢 Table

---

## Basic

use `NTable` component to create a powerful table and datagrids built using [Tanstack](https://tanstack.com/table/latest/docs/introduction){target="_blank"}. Read more about the [Tanstack Table documentation](https://tanstack.com/table/latest/docs/framework/vue/guide/table-state){target="_blank"}.

| Prop      | Type    | Default | Description    |
| --------- | ------- | ------- | -------------- |
| `columns` | `Array` | `[]`    | Table columns. |
| `data`    | `Array` | `[]`    | Table data.    |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableBasic.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Row Selection

Row selection allows you to select rows in the table. This is useful when you want to select rows in the table. Read more about row selection in the [Tanstack Row Selection documentation](https://tanstack.com/table/latest/docs/guide/row-selection){target="_blank"}.

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

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Loading

Loading allows you to show a loading progress indicator in the table. This is useful when you want to show a loading progress indicator in the table.

| Prop      | Type      | Default | Description    |
| --------- | --------- | ------- | -------------- |
| `loading` | `Boolean` | `false` | Loading state. |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableLoading
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableLoading.vue
::
:::

## Pagination

Pagination allows you to paginate rows in the table. This is useful when you want to paginate rows in the table. Read more about pagination in the [Tanstack Pagination documentation](https://tanstack.com/table/latest/docs/guide/pagination){target="_blank"}.

| Prop                 | Type      | Default                        | Description                       |
| -------------------- | --------- | ------------------------------ | --------------------------------- |
| `v-model:pagination` | `Object`  | `{pageIndex: 0, pageSize: 10}` | Pagination default configuration. |
| `manualPagination`   | `Boolean` | `false`                        | Enable manual pagination.         |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTablePagination
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTablePagination.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Sorting

Sorting allows you to sort columns in ascending or descending order. This is useful when you want to sort columns in the table. Read more about sorting in the [Tanstack Sorting documentation](https://tanstack.com/table/latest/docs/guide/sorting){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableSorting
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableSorting.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Visibility

Visibility allows you to show or hide columns in the table. This is useful when you want to show or hide columns in the table. Read more about visibility in the [Tanstack Visibility documentation](https://tanstack.com/table/latest/docs/guide/column-visibility){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableVisibility
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableVisibility.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Global Filtering

Global filtering allows you to filter rows based on the value entered in the filter input. This is useful when you want to filter rows in the table. Read more about global filtering in the [Tanstack Global Filtering documentation](https://tanstack.com/table/latest/docs/guide/global-filtering){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableGlobalFiltering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGlobalFiltering.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Column Filtering

Filtering allows you to filter columns based on the value entered in the filter input. This is useful when you want to filter columns in the table. Read more about filtering in the [Tanstack Column Filtering documentation](https://tanstack.com/table/latest/docs/guide/column-filtering){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnFiltering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnFiltering.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Column Ordering

Column ordering allows you to reorder columns by dragging and dropping them. This is useful when you want to change the order of columns in the table. Read more about column ordering in the [Tanstack Column Ordering documentation](https://tanstack.com/table/latest/docs/guide/column-ordering){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnOrdering
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnOrdering.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Column Pinning

Column pinning allows you to pin columns to the `left` or `right` of the table. This is useful when you have a large number of columns and you want to keep some columns in view while scrolling. Read more about column pinning in the [Tanstack Column Pinning documentation](https://tanstack.com/table/latest/docs/guide/column-pinning){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableColumnPinning
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnPinning.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Expandanding

Expanding allows you to expand rows to show additional information. This is useful when you want to show additional information about a row. Read more about expanding in the [Tanstack Expanding documentation](https://tanstack.com/table/latest/docs/guide/expanding){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableExpanding
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableExpanding.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Grouping

Grouping allows you to group rows based on a column value. This is useful when you want to group rows in the table. Read more about grouping in the [Tanstack Grouping documentation](https://tanstack.com/table/latest/docs/guide/grouping){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableGrouping
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGrouping.vue

::

::code-block{label="makeData.ts"}
@@@ ./components/content/examples/vue/table/makeData.ts

::
:::

## Server-side 

Server-side allows you to fetch data from the server. This is useful when you want to fetch data from the server. Read more about server-side in the [Tanstack Server-side documentation](https://tanstack.com/table/latest/docs/guide/pagination#manual-server-side-pagination){target="_blank"}.

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableServerSide
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableServerSide.vue
::
:::

## Customization

You can customize the table by using the following props.

| Prop           | Type     | Default | Description            |
| -------------- | -------- | ------- | ---------------------- |
| `columns.meta` | `Object` | `{}`    | Column meta data.      |
| `una`          | `Object` | `{}`    | Unique name attribute. |

::alert{type="info"}
For more information on customization, read the available [props](#props) and [presets](#presets). 
::

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableCustomization
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableCustomization.vue
::
:::

## Slots

> You can use the following slots to customize the table.

| Name              | Description         | Props    |
| ----------------- | ------------------- | -------- |
| `{column}-filter` | Column filter slot. | `column` |
| `{column}-header` | Column header slot. | `column` |
| `{column}-cell`   | Column cell slot.   | `cell`   |
| `{column}-footer` | Column footer slot. | `column` |
| `header`          | Header slot.        | `table`  |
| `body`            | Body slot.          | `table`  |
| `raw`             | Row slot.           | `row`    |
| `footer`          | Footer slot.        | `table`  |
| `expanded`        | Expanded slot.      | `row`    |
| `empty`           | Empty slot.         |          |
| `loading`         | Loading slot.       |          |


:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueTableSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableSlots.vue

::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/table.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/table.ts

## Component

:::CodeGroup
::code-block{label="Table" preview}
@@@ ../packages/nuxt/src/runtime/components/data/table/Table.vue

::
::code-block{label="TableRoot"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableRoot.vue

::
::code-block{label="TableHeader"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableHeader.vue

::
::code-block{label="TableHead"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableHead.vue

::
::code-block{label="TableBody"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableBody.vue

::
::code-block{label="TableFooter"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableFooter.vue

::
::code-block{label="TableCell"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableCell.vue

::
::code-block{label="TableRow"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableRow.vue

::
::code-block{label="TableEmpty"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableEmpty.vue

::
::code-block{label="TableLoading"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableLoading.vue

::
::code-block{label="TableCaption"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableCaption.vue

::
:::
