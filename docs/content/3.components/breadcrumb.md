---
description: 'NBreadcrumb - use to display the path of the current page and the hierarchy of previous routes/links.'
---

# 🌑 Breadcrumb

---

## Basic

`NBreadcrumb` - use to display the path of the current page and the hierarchy of previous routes/links.

| Prop          | Type      | Default  | Description                    |
| ------------- | --------- | -------- | ------------------------------ |
| `home`        | `Object`  | `{}`     | The root item of breadcrumb    |
| `items`       | `Array`   | `[]`     | The list of menuitems          |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbBasic.vue
::
:::

## With routing

`withRouting` gives the opportunity to use Nuxt routing with `NuxtLink` under the hood.

| Prop          | Type      | Default  | Description                              |
| ------------- | --------- | -------- | ---------------------------------------- |
| `withRouting` | `Boolean` | `false`  | Allows to use Nuxt routing               |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbRouting
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbRouting.vue
::
:::

## Separator

> You can use the `NIcon` component with `<template #separator></template>` to change default separator for the breadcrumb.

::alert{type="info"}
  Read more about the `NIcon` component [here](icon).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbSeparator
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSeparator.vue
::
:::

## Variant

`breadcrumb="{variant}"` - change the breadcrumb variant

| Variant   | Description                 |
| --------- | --------------------------- |
| `text`    | The default variant.        |
| `link`    | The link variant.           |
| `~`       | The unstyle or base variant |

::alert{type="info"}
  If you want to change the default variant or add new variant, you can do so through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbVariant.vue
::
:::

## Color

`breadcrumb="{variant}-{color}"` - change the color of the breadcrumb.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbColor.vue
::
:::

## Icon

> Add the item field to your objects

::alert{type="info"}
  You can use both the icon and the icon together with the label
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbIcon
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbIcon.vue
::
:::

## Size

`size="{size}"` - change the size of the breadcrumb.

> 🚀 You can freely adjust the size of the breadcrumb using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the breadcrumb scale depends on the `breadcrumb-size`. 
If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/breadcrumb/ExampleVueBreadcrumbSize.vue
::
:::

## Slots

> You can use the following slots to customize the breadcrumb.

| Name          | Description           |
| ------------- | --------------------- | 
| `home`        | The home slot.        |
| `separator`   | The separator slot.   |
| `items`       | The items slot.       |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBreadcrumbSlots
::
::code-block{label="Code"}
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
::code-block{label="Breadcrumb" preview}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/Breadcrumb.vue

::
::code-block{label="BreadcrumbItem"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbItem.vue

::
::code-block{label="BreadcrumbSeparator"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbSeparator.vue

::
::code-block{label="BreadcrumbLabel"}
@@@ ../packages/nuxt/src/runtime/components/navigation/breadcrumb/BreadcrumbLabel.vue

::
:::
