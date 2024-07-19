---
description: 'NProgress component - used to display a progress bar.'
---

# 🌑 Progress

## Features

::list{type="primary"}
- Provides context for assistive technology to read the progress of a task.
- Adheres to the [`progressbar` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/meter){target="_blank"}.
::

---

## Basic

use `NProgress` to display a progress bar.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueProgressBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressBasic.vue
::
:::

## Color

`progress="{color}"` - change the color of the progress.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueProgressColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressColor.vue
::
:::

## Size

`size="{size}"` - change the size of the progress.

> 🚀 You can freely adjust the size of the progress using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the progress scale depends on the `progress-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueProgressSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/progress/ExampleVueProgressSize.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/progress.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/progress.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Progress.vue
