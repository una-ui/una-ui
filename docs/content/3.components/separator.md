---
description: 'The Separator component that separates the content.'
---

# 🟢 Separator

---

## Basic

`NSeparator` - used to separate the content.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorBasic.vue
::
:::

## Variant

`separator="{variant}"` - change the variant of the separator.

| Type     | Description       |
| -------- | ----------------- |
| `solid`  | The default type. |
| `dashed` | The dashed type.  |
| `dotted` | The dotted type.  |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorVariant.vue
::
:::

## Color

`separator="{type}-{color}"` - change the color of the separator.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `gray`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::    

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorColor.vue
::
:::

## Orientation

`orientation="{value}"` - change the orientation of the separator's direction.

| Value      | Description             |
| ------------ | ----------------------- |
| `horizontal` | The default direction.  |
| `vertical`   | The vertical direction. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorOrientation
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorOrientation.vue
::
:::

## Position

`separator-position="{value}"` - change the position of the label content.

| Position | Orientation             | Description           |
| -------- | ----------------------- | --------------------- |
| `center` | `horizontal` `vertical` | The default position. |
| `left`   | `horizontal`            | The left position.    |
| `right`  | `vertical`              | The right position.   |
| `top`    | `horizontal`            | The top position.  |
| `bottom` | `vertical`              | The bottom position.  |


:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorPosition
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorPosition.vue
::
:::

## Size

`size="{size}"` - change the size of the separator.

> 🚀 You can freely adjust the size of the separator using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding` and `font-size` of the separator scale depends on the `size`. If you want to change the `font-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSeparatorSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/separator/ExampleVueSeparatorSize.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/separator.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/separator.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Separator.vue





