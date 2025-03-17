---
description: 'A powerful, responsive table and datagrids built using Tanstack'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/data/table/Table.vue
    target: _blank
  - value: API reference
    to: https://tanstack.com/table/latest/docs/introduction
    target: _blank
---

## Examples

### Basic

| Prop      | Default | Type    | Description    |
| --------- | ------- | ------- | -------------- |
| `columns` | `[]`    | `Array` | Table columns. |
| `data`    | `[]`    | `Array` | Table data.    |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTableBasic

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableBasic.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

### Row Selection

Row selection allows you to select rows in the table. This is useful when you want to select rows in the table.

| Prop                      | Default | Type      | Description                           |
| ------------------------- | ------- | --------- | ------------------------------------- |
| `modelValue`              | `[]`    | `Array`   | Selected rows.                        |
| `enableRowSelection`      | `false` | `Boolean` | Enable row selection.                 |
| `enableMultiRowSelection` | `false` | `Boolean` | Enable multiple row selection.        |
| `rowId`                   | `id`    | `String`  | Row id to uniquely identify each row. |
| `enableSubRowSelection`   | `false` | `Boolean` | Enable sub row selection.             |
| `@select`                 | -       | `Event`   | Emitted when a row is selected.       |
| `@select-all`             | -       | `Event`   | Emitted when all rows are selected.   |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableRowSelection
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableRowSelection.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/row-selection" title="Tanstack Row Selection Documentation" target="_blank"}

### Loading

Loading allows you to show a loading progress indicator in the table. This is useful when you want to show a loading progress indicator in the table.

| Prop      | Default | Type      | Description    |
| --------- | ------- | --------- | -------------- |
| `loading` | `false` | `Boolean` | Loading state. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableLoading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableLoading.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/loading" title="Tanstack Loading Documentation" target="_blank"}

### Pagination

Pagination allows you to paginate rows in the table. This is useful when you want to paginate rows in the table.

| Prop               | Default                        | Type                                    | Description                       |
| ------------------ | ------------------------------ | --------------------------------------- | --------------------------------- |
| `pagination`       | `{pageIndex: 0, pageSize: 10}` | `{pageIndex: Number, pageSize: Number}` | Pagination default configuration. |
| `manualPagination` | `false`                        | `Boolean`                               | Enable manual pagination.         |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTablePagination
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTablePagination.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="pagination" title="Pagination Component"}

:read-more{to="https://tanstack.com/table/latest/docs/guide/pagination" title="Tanstack Pagination Documentation" target="_blank"}

### Sorting

Sorting allows you to sort columns in ascending or descending order. This is useful when you want to sort columns in the table.

| Prop                    | Default | Type      | Description                    |
| ----------------------- | ------- | --------- | ------------------------------ |
| `enableSorting`         | -       | `boolean` | Enable all column sorting      |
| `column.enableSorting`  | -       | `boolean` | Enable specific column sorting |
| `enableMultiColumnSort` | -       | `boolean` | Enable multi-column sorting    |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableSorting
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableSorting.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/sorting" title="Tanstack Sorting Documentation" target="_blank"}

### Visibility

Visibility allows you to show or hide columns in the table. This is useful when you want to show or hide columns in the table.

| Prop               | Default | Type     | Description                 |
| ------------------ | ------- | -------- | --------------------------- |
| `columnVisibility` | -       | `object` | The column visibility state |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableVisibility
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableVisibility.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/column-visibility" title="Tanstack Visibility Documentation" target="_blank"}

### Global Filtering

Global filtering allows you to filter rows based on the value entered in the filter input. This is useful when you want to filter rows in the table.

| Prop              | Default | Type      | Description                                               |
| ----------------- | ------- | --------- | --------------------------------------------------------- |
| `globalFilter`    | -       | `string`  | The global filter value                                   |
| `manualFiltering` | -       | `boolean` | Enable manual filtering. Ideal for server-side filtering. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableGlobalFiltering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGlobalFiltering.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/global-filtering" title="Tanstack Global Filtering Documentation" target="_blank"}

### Column Filtering

Column filtering allows you to filter columns based on the value entered in the filter input. This is useful when you want to filter columns in the table.

| Prop                        | Default | Type      | Description                      |
| --------------------------- | ------- | --------- | -------------------------------- |
| `enableColumnFilter`        | -       | `boolean` | Enable all column filtering      |
| `column.enableColumnFilter` | -       | `boolean` | Enable specific column filtering |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableColumnFiltering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnFiltering.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/column-filtering" title="Tanstack Column Filtering Documentation" target="_blank"}

### Column Ordering

Column ordering allows you to reorder columns by dragging and dropping them. This is useful when you want to change the order of columns in the table.

| Prop          | Default | Type    | Description                                       |
| ------------- | ------- | ------- | ------------------------------------------------- |
| `columnOrder` | -       | `Array` | Array of column IDs defining column display order |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableColumnOrdering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnOrdering.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/column-ordering" title="Tanstack Column Ordering Documentation" target="_blank"}

### Column Pinning

Column pinning allows you to pin columns to the `left` or `right` of the table. This is useful when you have a large number of columns and you want to keep some columns in view while scrolling.

| Prop         | Default | Type                            | Description                                            |
| ------------ | ------- | ------------------------------- | ------------------------------------------------------ |
| `columnPins` | -       | `{ left: Array, right: Array }` | Defines which columns are pinned to the left or right. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableColumnPinning
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableColumnPinning.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/column-pinning" title="Tanstack Column Pinning Documentation" target="_blank"}

### Expanding

Expanding allows you to expand rows to show additional information. This is useful when you want to show additional information about a row.

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableExpanding

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableExpanding.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/expanding" title="Tanstack Expanding Documentation" target="_blank"}

### Grouping

Grouping allows you to group rows based on a column value. This is useful when you want to group rows in the table.

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableGrouping

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableGrouping.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/grouping" title="Tanstack Grouping Documentation" target="_blank"}

### Server-side

Allows you to fetch data from the server. This is useful when you want to fetch data from the server.

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableServerSide

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableServerSide.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

:read-more{to="https://tanstack.com/table/latest/docs/guide/pagination#manual-server-side-pagination" title="Tanstack Table Serve-Side Documentation" target="_blank"}

## Customization

Configure the progress using the `una` prop and utility classes.

| Prop               | Default | Type     | Description           |
| ------------------ | ------- | -------- | --------------------- |
| `columns.meta.una` | `{}`    | `Object` | Column Una meta data. |
| `una`              | `{}`    | `Object` | Global Una attribute. |

:read-more{to="#props" title="Component Props API"}

:read-more{to="#presets" title="Component Presets"}

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableCustomization

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableCustomization.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

## Slots

| Name              | Props    | Description         |
| ----------------- | -------- | ------------------- |
| `{column}-filter` | `column` | Column filter slot. |
| `{column}-header` | `column` | Column header slot. |
| `{column}-cell`   | `cell`   | Column cell slot.   |
| `{column}-footer` | `column` | Column footer slot. |
| `header`          | `table`  | Header slot.        |
| `body`            | `table`  | Body slot.          |
| `raw`             | `row`    | Row slot.           |
| `footer`          | `table`  | Footer slot.        |
| `expanded`        | `row`    | Expanded slot.      |
| `empty`           | -        | Empty slot.         |
| `loading`         | -        | Loading slot.       |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableSlots

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableSlots.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/table.ts [shortcuts/table.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/table.ts [types/table.ts]

## Components

:::CodeGroup
::div{label="Table.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/Table.vue

::
::div{label="TableRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableRoot.vue

::
::div{label="TableHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableHeader.vue

::
::div{label="TableHead.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableHead.vue

::
::div{label="TableBody.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableBody.vue

::
::div{label="TableFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableFooter.vue

::
::div{label="TableCell.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableCell.vue

::
::div{label="TableRow.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableRow.vue

::
::div{label="TableEmpty.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableEmpty.vue

::
::div{label="TableLoading.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableLoading.vue

::
::div{label="TableCaption.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableCaption.vue

::
:::
