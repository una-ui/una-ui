---
title: 🌑 Skeleton
description: 'Work in progress - this component is not yet ready for use.'
---

# 🌑 Skeleton

---

## Basic

`NSkeleton` is a placeholder while the content is being loaded.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSkeletonBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonBasic.vue
::
:::

## Shape

`shape="{shape}"` - change the shape of the skeleton.

> 🚀 You can freely adjust the shape of the skeleton to either `circle` or `rectangle` to match your design needs.
::alert{type="info"}
The `shape` determines the overall form of the skeleton. To customize the appearance further, you can combine it with utility classes for additional styling.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSkeletonShape
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonShape.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/skeleton.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/skeleton.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Skeleton.vue
