---
description: 'NPagination - use to divide content into pages by displaying a subset of data at a time.'
---

# 🟢 Pagination

::list{type="primary"}
- Enable quick access to first, or last page
- Enable to show edges constantly, or not
::

---

## Basic

`NPagination` - use to divide content into pages by displaying a subset of data at a time, please refer to the [radix-ui pagination](https://www.radix-vue.com/components/pagination.html#api-reference) for more api information.

| Prop           | Type      | Default | Description                                                                       |
| -------------- | --------- | ------- | --------------------------------------------------------------------------------- |
| `total`        | `number`  | `0`     | Number of items in your list.                                                     |
| `page`         | `number`  | `-`     | The value that controls the current page and can be bound with `v-model`          |
| `itemsPerPage` | `number`  | `10`    | Number of items per page.                                                         |
| `disabled`     | `boolean` | `false` | Disables the pagination.                                                          |


:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationBasic.vue
::
:::

## Show Edges

| Prop        | Type      | Default | Description                                                                       |
| ----------- | --------- | ------- | --------------------------------------------------------------------------------- |
| `showEdges` | `boolean` | `false` | When set to `true`, the first page, last page, and ellipsis will always be shown. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationShowEdges
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationShowEdges.vue
::
:::

## Sibling Count

| Prop           | Type     | Default | Description                                                  |
| -------------- | -------- | ------- | ------------------------------------------------------------ |
| `siblingCount` | `number` | `2`     | Number of surrounding pages to show around the current page. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSiblingCount
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSiblingCount.vue
::
:::

## Slots

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSlots.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/pagination.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/pagination.ts

## Component

### 

:::CodeGroup
::code-block{label="Pagination" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/Pagination.vue

::
::code-block{label="PaginationEllipsis"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationEllipsis.vue

::
::code-block{label="PaginationListItem"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationListItem.vue

::
::code-block{label="PaginationFirst"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationFirst.vue

::
::code-block{label="PaginationLast"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationLast.vue

::
::code-block{label="PaginationNext"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationNext.vue

::
::code-block{label="PaginationPrev"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationPrev.vue

::
:::
