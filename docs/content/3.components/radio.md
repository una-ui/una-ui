---
description: 'NRadio component - use to create a radio input.'
---

## Basic

use `NRadio` to create a radio input.

| Attribute | Description                                  |
| --------- | -------------------------------------------- |
| `v-model` | Reactive value of radio if `checked` or not. |
| `value`   | The value of the radio.                      |
| `label`   | The label of the radio.                      |

> To view the full list of attributes, see the [Props](#props) section.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioBasic.vue
::
:::

## Color

`radio="{color}"` - change the color of the radio.

> You can use `breakpoints` such as `sm:red, xs:green` to change color based on screen size.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioColor.vue
::
:::

## Disabled

`disabled` - disable the radio.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioDisabled.vue
::
:::

## Form Group

You can use the `NFormGroup` component to create a radio group for the radio,

> Read more about the `NFormGroup` component [here](form-group).

::alert{type="warning"}
  Remember to set `for` to false to disable `for` behavior on the label since we have a custom implementation for the radio input.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioFormGroup
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioFormGroup.vue
::
:::

## Reverse

`reverse` - Switch the position of the radio and the label.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioReverse
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioReverse.vue
::
:::

## Size

`size="{size}"` - change the size of the radio.

> 🚀 You can freely adjust the size of the radio using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioSize.vue
::
:::

## Rules

You can use the following rules to customize the radio if it is checked.

::alert{type="info"}
  You can also globally customize the radio preset if you want to have a different default style. See [Configuration](/#getting-started/configuration) section for more details.
::

| Rule Name   | Description                                   | Example            |
| ----------- | --------------------------------------------- | ------------------ |
| `n-checked` | Only apply the class if the radio is checked. | `n-checked:bg-red` |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioRules
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioRules.vue
::
:::

## Customization

> You can customize the radio using the `una` prop and utility classes.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioCustom.vue
::
:::

## Slots

| Name    | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `label` | Use this slot to customize the label of the radio.                    |
| `icon`  | Use this slot to customize the icon of the radio when it is `checked` |

## Props
@@@ ../packages/nuxt/src/runtime/types/radio.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/radio.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/forms/Radio.vue
