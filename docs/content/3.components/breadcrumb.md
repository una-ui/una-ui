---
description: 'Displays the path to the current resource using a hierarchy of links.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/navigation/breadcrumb/Breadcrumb.vue
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type    | Description                                                                                                                            |
| ------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `items` | `[]`    | `array` | An array of `Links` wrapped around the [Button](button) component, inheriting all its props and slots with additional `children` prop. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbBasic.vue
::
:::

:read-more{to="/components/button" title="Button component" target="_blank"}

### Variant & Color

| Prop                  | Default        | Type                | Description                                |
| --------------------- | -------------- | ------------------- | ------------------------------------------ |
| `breadcrumb-active`   | `text-primary` | `{variant}-{color}` | The active breadcrumb variant and color.   |
| `breadcrumb-inactive` | `text-muted`   | `{variant}-{color}` | The inactive breadcrumb variant and color. |

::alert{type="info"}
You can use any variant and color provided by the [Button](button#variants) component. Just use `breadcrumb-active` and `breadcrumb-inactive` as prefixes instead of `btn`.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbVariant.vue
::
:::

### Separator

| Prop        | Default                       | Type     | Description         |
| ----------- | ----------------------------- | -------- | ------------------- |
| `separator` | `i-radix-icons-chevron-right` | `string` | The separator icon. |

:read-more{to="/components/icon" title="Icon component" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbSeparator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSeparator.vue
::
:::

### Ellipsis

You can adjust the breadcrumb behavior dynamically with the `BreadcrumbEllipsis`. When there are children in the breadcrumb, the `BreadcrumbEllipsis` will appear as an icon, and upon clicking it, a `DropdownMenu` will open, allowing you to navigate to the child elements.

| Prop       | Default                         | Type     | Description        |
| ---------- | ------------------------------- | -------- | ------------------ |
| `ellipsis` | `i-radix-icons-dots-horizontal` | `string` | The ellipsis icon. |

| Condition  | Default | Type   | Description                                                                |
| ---------- | ------- | ------ | -------------------------------------------------------------------------- |
| `children` | -       | `aray` | An array of children `Links` wrapped around the [Button](button) component |

::alert{type="info"}
For more details, please refer to the [Components](#components) and [Slots](#slots) sections.
::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

:read-more{to="/components/dropdown-menu" title="Dropdown menu component" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbEllipsis
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbEllipsis.vue
::
:::

### Size

Adjust the breadcrumb size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                        | Default | Type     | Description                                           |
| --------------------------- | ------- | -------- | ----------------------------------------------------- |
| `size`                      | `sm`    | `string` | Adjusts the overall size of the breadcrumb component. |
| `_breadcrumbLink.size`      | `sm`    | `string` | Customizes the size of each breadcrumb link.          |
| `_breadcrumbSeparator.size` | `sm`    | `string` | Modifies the size of the breadcrumb separator.        |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSize.vue
::
:::

### Slots

| Name        | Props                     | Description                        |
| ----------- | ------------------------- | ---------------------------------- |
| `default`   | `item` `index` `isActive` | The breadcrumb item                |
| `separator` | `item`                    | The separator                      |
| `root`      | `items`                   | The root breadcrumb                |
| `list`      | `item`                    | The list of items                  |
| `dropdown`  | `item`                    | The dropdown if available ellipsis |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueBreadcrumbSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/breadcrumb.ts [shortcuts/breadcrumb.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/breadcrumb.ts [types/breadcrumb.ts]

## Components

:::CodeGroup
::div{label="Breadcrumb.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/Breadcrumb.vue

::
::div{label="BreadcrumbRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbRoot.vue

::
::div{label="BreadcrumbList.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbList.vue

::
::div{label="BreadcrumbLink.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbLink.vue

::
::div{label="BreadcrumbItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbItem.vue

::
::div{label="BreadcrumbSeparator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbSeparator.vue

::
::div{label="BreadcrumbEllipsis.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbEllipsis.vue

::
:::
