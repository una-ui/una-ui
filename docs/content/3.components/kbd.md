---
description: 'NKbd component - a component for indicating input that is typically entered via keyboard.'
---

::alert{type="warning"}
Work in progress - this component is not yet ready for use.
::

## Basic

`NKbd` is a component for indicating input that is typically entered via keyboard.

>You can use `label prop` or `default slot` to set the value kbd.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdBasic.vue
::
:::

## Variants

`kbd="{variant}"` - change the variant of the kbd.

| Variant   | Description                 |
| --------- | --------------------------- |
| `solid`   | The default variant.        |
| `outline` | The outline variant.        |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdVariant.vue
::
:::

## Color

`kbd="{variant}-{color}"` - change the color of the kbd.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdColor.vue
::
:::

## Sizes

`NKbd` can be sized using the `size` prop.

> 🚀 You can freely adjust the size of the kbd using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding` and `font-size` of the kbd scale depends on the `size`. If you want to change the `font-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdSize.vue
::
:::

## Usage with Other Components

`NKbd` can be used with other components to create more complex elements e.g:

- can be used with `NButton` to create a button that is triggered by a keyboard shortcut.
- can be used with `NInput` to create an input that is triggered by a keyboard shortcut.

::alert{type="info"}
`size` prop is automatically inherited from the parent component when used with other components.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueKbdWithOtherComponent
::
::div{label="Code"}
@@@ ./components/content/examples/vue/kbd/ExampleVueKbdWithOtherComponent.vue
::
:::

## Slots

### Default

`#default` - set the kbd value.

## Props
@@@ ../packages/nuxt/src/runtime/types/kbd.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/kbd.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Kbd.vue
