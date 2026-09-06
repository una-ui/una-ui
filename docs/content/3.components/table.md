---
description: 'A powerful, responsive table and datagrids built using Tanstack'
navBadges:
  - value: Breaking
    type: warning
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/data/table/Table.vue
    target: _blank
  - value: API reference
    to: https://tanstack.com/table/latest/docs/introduction
    target: _blank
---

::alert{type="warning"}
**Breaking change.** The widgets `NTable` renders for you — the sort button, the
column filter, the selection checkbox and the expand toggle — are now
sub-components of their own, and the two columns it injects are named `select`
and `expand` rather than `selection` and `expanded`. Slot names and column ids
change with them, and `columns.meta` no longer reaches the DOM. See
[Migrating](#migrating) below.
::

## Examples

### Basic

| Prop      | Default | Type    | Description    |
| --------- | ------- | ------- | -------------- |
| `columns` | `[]`    | `array` | Table columns. |
| `data`    | `[]`    | `array` | Table data.    |

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

| Prop                      | Default | Type            | Description                                       |
| ------------------------- | ------- | --------------- | ------------------------------------------------- |
| `rowSelection`            | -       | `object`        | Selected row state, can be binded with `v-model`. |
| `enableRowSelection`      | `false` | `boolean`       | Enable row selection.                             |
| `enableMultiRowSelection` | `true`  | `boolean`       | Enable multiple row selection.                    |
| `rowId`                   | `id`    | `string`        | Row id to uniquely identify each row.             |
| `enableSubRowSelection`   | `false` | `boolean`       | Enable sub row selection.                         |
| `@select`                 | -       | `event`, `row`  | Emitted when a row is selected.                   |
| `@select-all`             | -       | `event`, `rows` | Emitted when all rows are selected.               |
| `@row`                    | -       | `event`, `row`  | Emitted when a row is clicked.                    |

::alert{type="warning"}
When using the `@row` event, you should stop propagation if you have interactive elements like buttons or links inside the row to prevent triggering the row click event.
::

The checkboxes are `NTableSelectionHeader` and `NTableSelectionCell`, both
`NCheckbox` underneath. Configure them through `_tableSelectionHeader` and
`_tableSelectionCell`, or replace them with the `select-header` and
`select-cell` slots — see [Widgets](#widgets).

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

### Empty

Empty allows you to show a message when the table is empty. This is useful when you want to show a message when the table is empty.

| Prop         | Default               | Type     | Description |
| ------------ | --------------------- | -------- | ----------- |
| `empty-text` | `No results.`         | `string` | Empty text. |
| `empty-icon` | `i-tabler-database-x` | `string` | Empty icon. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableEmpty
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableEmpty.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

### Loading

Loading allows you to show a loading progress indicator in the table. This is useful when you want to show a loading progress indicator in the table.

| Prop      | Default | Type      | Description    |
| --------- | ------- | --------- | -------------- |
| `loading` | `false` | `boolean` | Loading state. |

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

`NTable` owns the pagination state and, with `show-pagination`, renders
shadcn's pagination bar below the table: the selection count (or row range) on
the left, then rows per page, `Page X of Y` and the navigation on the right.
Page numbers are off by default, as in shadcn; turn them on with
`_tablePagination: { showListItem: true }`. Below the `lg` breakpoint the bar
keeps only `Page X of Y` and the previous/next buttons.

| Prop               | Default                        | Type                                    | Description                                                 |
| ------------------ | ------------------------------ | --------------------------------------- | ----------------------------------------------------------- |
| `pagination`       | `{pageIndex: 0, pageSize: 10}` | `{pageIndex: Number, pageSize: Number}` | Pagination state, can be binded with `v-model`.             |
| `manualPagination` | `false`                        | `boolean`                               | Enable manual pagination, ideal for server-side pagination. |
| `rowCount`         | -                              | `number`                                | The full row count, for manual pagination.                  |
| `showPagination`   | `false`                        | `boolean`                               | Render the built-in pagination bar.                         |
| `_tablePagination` | `{}`                           | `object`                                | Props for the bar, `NTablePagination`.                      |

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

The bar is `NTablePagination`. It takes every `NPagination` prop except the
state ones — `page`, `itemsPerPage` and `total` come from the table — plus:

| Prop              | Default | Type      | Description                                                                  |
| ----------------- | ------- | --------- | ---------------------------------------------------------------------------- |
| `showInfo`        | `true`  | `boolean` | Render the status text on the left.                                          |
| `showRowsPerPage` | `true`  | `boolean` | Render the rows-per-page select.                                             |
| `table`           | -       | `Table`   | The table instance, when used outside `NTable`; read from context otherwise. |

Pass them through `_tablePagination` for prop-only changes. For anything more —
the status text, say, whose default is English — take over the `pagination`
slot and render `NTablePagination` yourself. It reads the table from context, so
it needs no props, and its `status` slot exposes `selected`, `filtered`,
`total`, `first` and `last`. Providing the slot renders the bar on its own;
`show-pagination` is only needed for the default one.

:::CodeGroup
::div{label="Preview"}
:ExampleVueTablePaginationCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTablePaginationCustom.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

With `manualPagination`, pass `rowCount` so the bar knows the full size — the
table only ever holds the current page; see [Server-side](#server-side). When
row selection is on, the status shows the selection count instead of the row
range. To compose the bar outside the root, `NTablePagination` also takes the
table instance directly:

```vue
<NTable ref="table" :columns :data />

<NTablePagination v-if="table" :table />
```

:read-more{to="pagination" title="Pagination Component"}

:read-more{to="https://tanstack.com/table/latest/docs/guide/pagination" title="Tanstack Pagination Documentation" target="_blank"}

### Sorting

Sorting allows you to sort columns in ascending or descending order. This is useful when you want to sort columns in the table.

| Prop                   | Default | Type      | Description                                          |
| ---------------------- | ------- | --------- | ---------------------------------------------------- |
| `sorting`              | -       | `array`   | Sorting state, can be binded with `v-model`.         |
| `enableMultiSort`      | -       | `boolean` | Enable multi-column sorting                          |
| `enableSorting`        | -       | `boolean` | Enable all column sorting                            |
| `column.enableSorting` | -       | `boolean` | Enable specific column sorting                       |
| `enableSortingRemoval` | `true`  | `boolean` | Enables the ability to remove sorting for the table. |

Sortable headers render `NTableSortButton`, a `NButton` whose trailing icon
follows the column's sort state. Configure it through `_tableSortButton` (any
`NButton` prop), re-point the icons with the `table-sort-asc-icon`,
`table-sort-desc-icon` and `table-sort-none-icon` preset aliases or the matching
`una` keys, and replace its content with the `{column}-header` slot. Sortable
headers also carry `aria-sort`.

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

| Prop               | Default | Type     | Description                                            |
| ------------------ | ------- | -------- | ------------------------------------------------------ |
| `columnVisibility` | -       | `object` | Column visibility state, can be binded with `v-model`. |

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
| `globalFilter`    | -       | `string`  | Global filter state, can be binded with `v-model`.        |
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

| Prop                        | Default | Type      | Description                                        |
| --------------------------- | ------- | --------- | -------------------------------------------------- |
| `columnFilters`             | -       | `array`   | Column filter state, can be binded with `v-model`. |
| `enableColumnFilters`       | -       | `boolean` | Enable all column filtering                        |
| `column.enableColumnFilter` | -       | `boolean` | Enable specific column filtering                   |

Each filter is `NTableColumnFilter`, a `NInput` bound to the column's filter
value with the header text as its placeholder. Configure it through
`_tableColumnFilter` (any `NInput` prop), or replace it per column with the
`{column}-filter` slot.

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
| `columnOrder` | -       | `array` | Column order state, can be binded with `v-model`. |

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

| Prop            | Default | Type                            | Description                                         |
| --------------- | ------- | ------------------------------- | --------------------------------------------------- |
| `columnPinning` | -       | `{ left: array, right: array }` | Column pinning state, can be binded with `v-model`. |

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

| Prop       | Default | Type           | Description                                    |
| ---------- | ------- | -------------- | ---------------------------------------------- |
| `expanded` | -       | `object`       | Expanded state, can be binded with `v-model`.  |
| `@expand`  | -       | `event`, `row` | Emitted when a row's expand toggle is clicked. |

The toggle is `NTableExpandButton`, an icon-only `NButton` that turns its
chevron while the row is open. Configure it through `_tableExpandButton`,
re-point the icon with the `table-expand-icon` alias, or replace it with the
`expand-cell` slot. `expanded` renders the row's content; `expand-cell` renders
the toggle.

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

| Prop             | Default | Type      | Description                                   |
| ---------------- | ------- | --------- | --------------------------------------------- |
| `grouping`       | -       | `array`   | Grouping state, can be binded with `v-model`. |
| `manualGrouping` | -       | `boolean` | Enable manual grouping.                       |

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

Allows you to fetch data from the server. Set `manualPagination` so the table
stops slicing the rows itself, and pass `rowCount` from the response so the
pagination bar knows the full size — the table only ever holds the current
page.

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

Configure the table using the `una` prop and utility classes.

| Prop                    | Default | Type     | Description                                    |
| ----------------------- | ------- | -------- | ---------------------------------------------- |
| `columns.meta.una`      | `{}`    | `object` | Column Una meta data.                          |
| `una`                   | `{}`    | `object` | Global Una attribute.                          |
| `_tableSortButton`      | `{}`    | `object` | Props for the sort button in sortable headers. |
| `_tableColumnFilter`    | `{}`    | `object` | Props for the per-column filter input.         |
| `_tableSelectionHeader` | `{}`    | `object` | Props for the select-all checkbox.             |
| `_tableSelectionCell`   | `{}`    | `object` | Props for the per-row selection checkbox.      |
| `_tableExpandButton`    | `{}`    | `object` | Props for the row expand toggle.               |
| `_tablePagination`      | `{}`    | `object` | Props for the built-in pagination bar.         |

Set them for the whole table with the `_table*` props, or per column through
`columns.meta`, which accepts the same keys:

```ts
const columns = [
  {
    header: 'Age',
    accessorKey: 'age',
    meta: {
      una: { tableHead: 'text-center' },
      _tableColumnFilter: { placeholder: 'Filter age…' },
    },
  },
]
```

Only `una` and the `_table*` keys are read from `columns.meta`; anything else
you store there stays out of the DOM.

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

### Widgets

Every widget `NTable` renders on your behalf is a component in its own right,
so it takes the full prop surface of what it wraps, has `una` keys of its own,
and can be swapped out through a slot:

| Component               | Wraps         | Props                   | Slot              | Icon aliases                                                          |
| ----------------------- | ------------- | ----------------------- | ----------------- | --------------------------------------------------------------------- |
| `NTableSortButton`      | `NButton`     | `_tableSortButton`      | `{column}-header` | `table-sort-asc-icon`, `table-sort-desc-icon`, `table-sort-none-icon` |
| `NTableColumnFilter`    | `NInput`      | `_tableColumnFilter`    | `{column}-filter` | -                                                                     |
| `NTableSelectionHeader` | `NCheckbox`   | `_tableSelectionHeader` | `select-header`   | -                                                                     |
| `NTableSelectionCell`   | `NCheckbox`   | `_tableSelectionCell`   | `select-cell`     | -                                                                     |
| `NTableExpandButton`    | `NButton`     | `_tableExpandButton`    | `expand-cell`     | `table-expand-icon`                                                   |
| `NTablePagination`      | `NPagination` | `_tablePagination`      | `pagination`      | -                                                                     |

Their `una` keys — `tableSortButton`, `tableSortIconBase`, `tableSortAscIcon`,
`tableSelection`, `tableExpandButton`, `tablePagination` and the rest — are
listed under [Props](#props); the `*Icon` keys take an icon name, the others
take classes. The icon aliases are preset shortcuts, so they can also be
re-pointed for the whole app from your UnoCSS config. One thing to know: the
sort button's `font-normal` is marked important in the `table-sort-button`
shortcut, so override its weight with `font-medium!`.

:::CodeGroup
::div{label="Preview"}
:ExampleVueTableWidgets

::
::div{label="Code"}
@@@ ./components/content/examples/vue/table/ExampleVueTableWidgets.vue

::
::div{label="Data"}
@@@ ./components/content/examples/vue/table/makeData.ts [makeData.ts]

::
:::

## Slots

| Name              | Props                 | Description                                                  |
| ----------------- | --------------------- | ------------------------------------------------------------ |
| `{column}-filter` | `column`              | Column filter slot.                                          |
| `{column}-header` | `column`              | Column header slot.                                          |
| `{column}-cell`   | `cell`                | Column cell slot.                                            |
| `{column}-footer` | `column`              | Column footer slot.                                          |
| `header`          | `table`               | Header slot.                                                 |
| `body`            | `table`               | Body slot.                                                   |
| `row`             | `row`                 | Row slot.                                                    |
| `footer`          | `table`               | Footer slot.                                                 |
| `select-header`   | `column`              | Select-all checkbox slot, when `enableRowSelection` is set.  |
| `select-cell`     | `cell`                | Per-row selection checkbox slot.                             |
| `expand-cell`     | `cell`                | Row expand toggle slot, when an `expanded` slot is provided. |
| `expanded`        | `row`                 | Expanded row content slot.                                   |
| `empty`           | -                     | Empty slot.                                                  |
| `loading`         | -                     | Loading slot.                                                |
| `pagination`      | `table`, `pagination` | Replaces the built-in pagination bar.                        |

::alert{type="warning"}
`select-header`, `select-cell` and `expand-cell` are keyed off the reserved
column ids `select` and `expand`. Do not give one of your own columns either
id — `NTable` warns in dev if you do, because TanStack keys columns by id and
would silently drop one of the two.

Note that `expand-cell` (the toggle button) and `expanded` (the expanded row's
content) are different slots.
::

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

## Migrating

The widgets `NTable` injected into its columns were built inline, with literal
props and no way to adjust them. They are now sub-components, which moved a
handful of names and defaults:

```diff
- <template #selection-header>…</template>
- <template #selection-cell>…</template>
- <template #expanded-cell>…</template>
+ <template #select-header>…</template>
+ <template #select-cell>…</template>
+ <template #expand-cell>…</template>

- :column-pinning="{ left: ['selection', 'firstName'] }"
+ :column-pinning="{ left: ['select', 'firstName'] }"
```

| Before                                                                   | After                                                                                                                                                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Injected columns with the ids `selection` and `expanded`                 | `select` and `expand`, as in shadcn. Rename them wherever a column id appears — `columnOrder`, `columnPinning`, `columnVisibility`.                                     |
| `#selection-header`, `#selection-cell`, `#expanded-cell`                 | `#select-header`, `#select-cell`, `#expand-cell`. `#expanded`, the row content, is unchanged.                                                                           |
| A column of your own with the id `select` or `expand`                    | Rename it. TanStack keys columns by id and silently drops one of the two; `NTable` now warns in dev.                                                                    |
| Any key on `columns.meta` landed on `<th>` and `<td>` as an attribute    | Only `una` and the `_table*` keys are read. Set attributes through `meta._tableHead` and `meta._tableCell`.                                                             |
| Sort button, filter input, checkboxes and expand toggle hardcoded        | `NTableSortButton`, `NTableColumnFilter`, `NTableSelectionHeader`, `NTableSelectionCell`, `NTableExpandButton` — configured through the `_table*` props and `una` keys. |
| Sort and expand icons hardcoded                                          | The `table-sort-asc-icon`, `table-sort-desc-icon`, `table-sort-none-icon` and `table-expand-icon` preset aliases, or the matching `una` keys.                           |
| The selection checkboxes and the expand toggle had no accessible name    | `aria-label` on all three, `aria-sort` on sortable headers, `data-expanded` on the toggle.                                                                              |
| `table-default-variant`, `table-loading-icon`, `table-loading-icon-name` | Removed — none of them rendered anything.                                                                                                                               |
| `NTableLoading` ignored its `colspan`                                    | Honoured; `NTable` passes its leaf-column count.                                                                                                                        |
| `NTable` rendered a single root element                                  | It renders a fragment — the root plus, with `show-pagination`, the bar. Attributes still land on `<table>`; if you relied on `$el`, wrap it yourself.                   |

The pagination bar — `showPagination`, `_tablePagination`, the `pagination`
slot — is additive; a table without them renders as before.

## Presets

@@@ ../packages/preset/src/_shortcuts/table.ts [shortcuts/table.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/table.ts [types/table.ts]

## Components

:::CodeGroup
::div{label="Table.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/Table.vue

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
::div{label="TableSortButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableSortButton.vue

::
::div{label="TableColumnFilter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableColumnFilter.vue

::
::div{label="TableSelectionHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableSelectionHeader.vue

::
::div{label="TableSelectionCell.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableSelectionCell.vue

::
::div{label="TableExpandButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TableExpandButton.vue

::
::div{label="TablePagination.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/data/table/TablePagination.vue

::
:::
