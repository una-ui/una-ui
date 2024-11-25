---
description: 'Pagination with page navigation, next and previous links.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/pagination/Pagination.vue
    target: _blank
  - value: API reference
    icon: /icons/radix-vue.svg
    to: https://www.radix-vue.com/components/pagination
    target: _blank
---

## Examples

### Basic

| Prop           | Default | Type      | Description                                                                                                               |
| -------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------- |
| `total`        | `0`     | `number`  | The total number of items in your list.                                                                                   |
| `defaultPage`  | `1`     | `number`  | The value of the page that should be active when initially rendered. Use when you do not need to control the value state. |
| `disabled`     | `false` | `boolean` | When true, prevents the user from interacting with item.                                                                  |
| `itemsPerPage` | `10`    | `number`  | Number of items per page.                                                                                                 |
| `page`         | -     | `number`  | The controlled value of the current page. Can be binded as `v-model:page`.                                                |
| `showEdges`    | `false` | `boolean` | When true, always show first page, last page, and ellipsis.                                                               |

:read-more{to="https://www.radix-vue.com/components/pagination#root" title="Radix Pagination Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationBasic.vue
::
:::

### Sibling Count

| Prop           | Default | Type     | Description                                                        |
| -------------- | ------- | -------- | ------------------------------------------------------------------ |
| `siblingCount` | `2`     | `number` | The number of surrounding pages displayed around the current page. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationSiblingCount
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSiblingCount.vue
::
:::

### Visibility

| Prop           | Default | Type      | Description                        |
| -------------- | ------- | --------- | ---------------------------------- |
| `showFirst`    | `true`  | `boolean` | Displays the first page button.    |
| `showLast`     | `true`  | `boolean` | Displays the last page button.     |
| `showPrev`     | `true`  | `boolean` | Displays the previous page button. |
| `showNext`     | `true`  | `boolean` | Displays the next page button.     |
| `showListItem` | `true`  | `boolean` | Displays the list items.           |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationComponentsVisibility
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationComponentsVisibility.vue
::
:::

### Size

| Prop            | Default | Type     | Description                                      |
| --------------- | ------- | -------- | ------------------------------------------------ |
| `size`          | `sm`    | `string` | Adjusts the size of the entire pagination.       |
| `firstPageSize` | `sm`    | `string` | Customizes the size of the first page button.    |
| `lastPageSize`  | `sm`    | `string` | Customizes the size of the last page button.     |
| `prevPageSize`  | `sm`    | `string` | Customizes the size of the previous page button. |
| `nextPageSize`  | `sm`    | `string` | Customizes the size of the next page button.     |
| `listItemSize`  | `sm`    | `string` | Customizes the size of the page list items.      |
| `ellipsisSize`  | `sm`    | `string` | Customizes the size of the ellipsis indicator.   |

:read-more{to="/components/button#size" title="Button size section" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSize.vue
::
:::

### Variant and Color

| Prop                    | Default         | Type                | Description                       |
| ----------------------- | --------------- | ------------------- | --------------------------------- |
| `pagination-selected`   | `solid-primary` | `{variant}-{color}` | The color of the selected page.   |
| `pagination-unselected` | `solid-white`   | `{variant}-{color}` | The color of the unselected page. |
| `pagination-ellipsis`   | `text-black`    | `{variant}-{color}` | The color of the ellipsis.        |

:read-more{to="/components/button#color" title="Button variant and color section" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationVariant.vue
::
:::

### Rounded

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationRounded.vue
::
:::

:read-more{to="/components/button#rounded" title="Button rounded section" target="_blank"}

### Sub Components

| Prop                    | API reference                                                                             | Description                                          |
| ----------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `_pagination-list-item` | [Radix Pagination ListItem API](https://www.radix-vue.com/components/pagination#list)     | Customizes the pagination list item component.       |
| `_pagination-prev`      | [Radix Pagination Prev API](https://www.radix-vue.com/components/pagination#prev)         | Customizes the previous page navigation button.      |
| `_pagination-next`      | [Radix Pagination Next API](https://www.radix-vue.com/components/pagination#next)         | Customizes the next page navigation button.          |
| `_pagination-first`     | [Radix Pagination First API](https://www.radix-vue.com/components/pagination#first)       | Customizes the first page navigation button.         |
| `_pagination-last`      | [Radix Pagination Last API](https://www.radix-vue.com/components/pagination#last)         | Customizes the last page navigation button.          |
| `_pagination-ellipsis`  | [Radix Pagination Ellipsis API](https://www.radix-vue.com/components/pagination#ellipsis) | Customizes the ellipsis indicator in the pagination. |
| `_pagination-list`      | [Radix Pagination List API](https://www.radix-vue.com/components/pagination#list)         | Customizes the pagination list component.            |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationSubComponents
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSubComponents.vue
::
:::

### Slots

| Name        | Props          | Description                                          |
| ----------- | -------------- | ---------------------------------------------------- |
| `first`     | -              | Customizes the first page navigation button.         |
| `last`      | -              | Customizes the last page navigation button.          |
| `prev`      | -              | Customizes the previous page navigation button.      |
| `next`      | -              | Customizes the next page navigation button.          |
| `list-item` | `item`, `page` | Customizes the pagination list item component.       |
| `ellipsis`  | -              | Customizes the ellipsis indicator in the pagination. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePaginationSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pagination/ExampleVuePaginationSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/pagination.ts [shortcuts/pagination.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/pagination.ts [types/pagination.ts]

## Components

:::CodeGroup
::div{label="Pagination.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/Pagination.vue

::
::div{label="PaginationEllipsis.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationEllipsis.vue

::
::div{label="PaginationListItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationListItem.vue

::
::div{label="PaginationFirst.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationFirst.vue

::
::div{label="PaginationLast.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationLast.vue

::
::div{label="PaginationNext.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationNext.vue

::
::div{label="PaginationPrev.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/pagination/PaginationPrev.vue

::
:::
