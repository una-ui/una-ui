---
description: 'NSkeleton component - use to create a placeholder while the content is being loaded.'
---

# Skeleton

---

## Basic

`NSkeleton` is a placeholder while the content is being loaded.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSkeletonBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonBasic.vue
::
:::

## Shape

`rounded="{value}"` - change the shape of the skeleton.

> 🚀 You can freely adjust the size of the rounded using any value imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `value` determines the overall form of the skeleton. You can always add and customize it using utility classes in the `class` attribute.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSkeletonShape
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonShape.vue
::
:::

## Color

`skeleton="{color}"` - change the color of the skeleton.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `gray`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSkeletonColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonColor.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/skeleton.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/skeleton.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Skeleton.vue
