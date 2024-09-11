---
description: 'NPagination - use to divide content into pages by displaying a subset of data at a time.'
---

# 🟢 Pagination

---

## Basic

`NPagination` - use to divide content into pages by displaying a subset of data at a time.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationBasic.vue
::
:::

|  Prop   |   Type   | Default |                                Description                               | 
| ------- | -------- | ------- | ------------------------------------------------------------------------ |
| `total` | `number` |   `0`   | Number of items in your list.                                            |
| `page`  | `number` |   `-`   | The value that controls the current page and can be bound with `v-model` |

## Default Page

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationDefault
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationDefault.vue
::
:::

|      Prop     |   Type   | Default |                             Description                           | 
| ------------- | -------- | ------- | ----------------------------------------------------------------- |
| `defaultPage` | `number` |   `1`   | The initial active value for the page when it is first displayed. |

## Disabled

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationDisable
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationDisable.vue
::
:::

|    Prop    |   Type    | Default |                            Description                              | 
| ---------- | --------- | ------- | ------------------------------------------------------------------- |
| `disabled` | `boolean` |   `-`   | When set to `true`, blocks the user from interacting with the item. |

## Items Per Page

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationItemsPerPage
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationItemsPerPage.vue
::
:::

|      Prop      |   Type   | Default  |     Description      | 
| -------------- | -------- | -------- | -------------------- |
| `itemsPerPage` | `number` |   `10`   | Items shown per page |

## Show Edges

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationShowEdges
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationShowEdges.vue
::
:::

|      Prop      |    Type   |  Default  |                                  Description                                      | 
| -------------- | --------- | --------- | --------------------------------------------------------------------------------- |
|   `showEdges`  | `boolean` |  `false`  | When set to `true`, the first page, last page, and ellipsis will always be shown. |

## Sibling Count

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePaginationSiblingCount
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSiblingCount.vue
::
:::

|        Prop       |   Type   | Default |                        Description                           | 
| ----------------- | -------- | ------- | ------------------------------------------------------------ |
|   `siblingCount`  | `number` |   `2`   | Number of surrounding pages to show around the current page. |

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