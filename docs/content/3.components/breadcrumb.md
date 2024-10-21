---
description: 'NBreadcrumb - use to display the path of the current page and the hierarchy of previous routes/links.'
---

# 🟢 Breadcrumb

---

## Basic

`NBreadcrumb` - use to display the path of the current page and the hierarchy of previous routes/links.

| Prop    | Type    | Default | Description                                                                                                                                     |
| ------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `items` | `Array` | `[]`    | The array of `Links` that wrapped around [NButton](button) component, which means that all the props and slots of NButton are available to use. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBreadcrumbBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbBasic.vue
::
:::

## Variant & Color

| Prop                  | Type                | Default        | Description                                |
| --------------------- | ------------------- | -------------- | ------------------------------------------ |
| `breadcrumb-active`   | `{variant}-{color}` | `text-primary` | The active breadcrumb variant and color.   |
| `breadcrumb-inactive` | `{variant}-{color}` | `text-muted`   | The inactive breadcrumb variant and color. |

::alert{type="info"}
You can use any variant and colors provided by the [NButton](button#variants) component, just make sure to use `breadcrumb-active` and `breadcrumb-inactive` as a prefix instead of `btn`.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBreadcrumbVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbVariant.vue
::
:::

## Separator

| Prop        | Type     | Default                       | Description         |
| ----------- | -------- | ----------------------------- | ------------------- |
| `separator` | `String` | `i-radix-icons-chevron-right` | The separator icon. |

::alert{type="info"}
  You can use any icon provided by the [NIcon](icon) component, the default is `i-radix-icons-chevron-right`.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBreadcrumbSeparator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSeparator.vue
::
:::

## Size

| Prop                        | Type     | Default | Description                                                                        |
| --------------------------- | -------- | ------- | ---------------------------------------------------------------------------------- |
| `size`                      | `String` | `sm`    | The size of the breadcrumb. This will be applied to all the breadcrumb components. |
| `_breadcrumbLink.size`      | `String` | `sm`    | The size of the breadcrumb link.                                                   |
| `_breadcrumbSeparator.size` | `String` | `sm`    | The size of the breadcrumb separator.                                              |

> 🚀 You can freely adjust the size of the breadcrumb using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBreadcrumbSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSize.vue
::
:::

## Slots

> You can use the following slots to customize the breadcrumb.

| Name        | Description         | Props   |
| ----------- | ------------------- | ------- |
| `default`   | The breadcrumb item | `item`  |
| `separator` | The separator       | `item`  |
| `root`      | The root breadcrumb | `items` |
| `list`      | The list of items   | `item`  |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueBreadcrumbSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSlots.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/breadcrumb.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/breadcrumb.ts

## Component

### 

:::CodeGroup
::div{label="Breadcrumb" preview}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/Breadcrumb.vue

::
::div{label="BreadcrumbRoot"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbRoot.vue

::
::div{label="BreadcrumbList"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbList.vue

::
::div{label="BreadcrumbLink"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbLink.vue

::
::div{label="BreadcrumbItem"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbItem.vue

::
::div{label="BreadcrumbSeparator"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbSeparator.vue

::
::div{label="BreadcrumbEllipsis"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbEllipsis.vue

::
:::
