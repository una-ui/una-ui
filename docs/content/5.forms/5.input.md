---
description: 'NInput component - used to collect data from the user.'
---

# 🟢 Input

---

## Basic

use the `NInput` tag to create a basic input.

::alert{type="info"}
By default we automatically generate an `id` for the input for accessibility purposes. If you want to override this behavior, you can define the `id` attribute manually.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputUsage
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputUsage.vue
::
:::

## Variants

`input="{variant}"` - change the variant of the input outline.

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `solid`   | The solid variant.          |
| `~`       | The unstyle or base variant |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputVariant.vue
::
:::

## Color

`input="{variant}-{color}"` - change the color of the input outline.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputColor.vue
::
:::

## Size

`size="{size}"` - change the size of the input.

> 🚀 You can freely adjust the size of the input using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding`, `icons`, and `text-size` of the input scale depends on the `size`. If you want to change the `text-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputSize.vue
::
:::

## Icon

`trailing="{icon}"` - add a trailing icon to the input outline.

`leading="{icon}"` - add a leading icon to the input outline.

::alert{type="info"}
By default we use `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/), refer to [configuration](/getting-started/configuration) for more information.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputIcon
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputIcon.vue
::
:::

## Loading

`loading` - add a loading icon to the input outline.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputLoading
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputLoading.vue
::
:::

## Status

`status="{status}"` - change the status of the input outline.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputStatus
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputStatus.vue
::
:::

`disabled` - disable the input.

`readonly` - make the input readonly.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputDisabledReadonly
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputDisabledReadonly.vue
::
:::

## Events

`@leading` - emit an event when the leading icon is clicked.

`@trailing` - emit an event when the trailing icon is clicked.

::alert{type="warning"}
By default, the `leading` and `trailing` are wrapped around `pointer-events-none` class, if you want to remove this behavior, you can use `pointer-events-auto` class.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputEvents
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputEvents.vue
::
:::

## Slots

### Leading

`#leading` - add a leading slot to the input.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputLeadingSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputLeadingSlot.vue
::
:::

### Trailing

`#trailing` - add a trailing slot to the input.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueInputTrailingSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/input/ExampleVueInputTrailingSlot.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/input.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/input.ts

## Component

@@@ ../packages/nuxt/src/runtime/components/forms/Input.vue
