---
description: 'NCheckbox component - use to create a checkbox input.'
---

# 🟢 Checkbox

---

## Basic

use `NCheckbox` component to create a checkbox.

| Attribute | Description                                  |
| --------- | -------------------------------------------- |
| `v-model` | Reactive value of checkbox if `checked` or not. |
| `label`   | The label of the checkbox.                      |

> To view the full list of attributes, see the [Props](#props) section.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxBasic.vue
::
:::

## Color

`checkbox="{color}"` - change the color of the checkbox.

> You can use `breakpoints` such as `sm:red, xs:green` to change color based on screen size.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxColor.vue
::
:::

## Form Group

You can use the `NFormGroup` component to create a checkbox group for the checkbox,

> Read more about the `NFormGroup` component [here](form-group).

::alert{type="warning"}
  Remember to set `for` to false to disable `for` behavior on the label since we have a custom implementation for the checkbox input.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxFormGroup
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxFormGroup.vue
::
:::

## Size

`size="{size}"` - change the size of the checkbox.

> 🚀 You can freely adjust the size of the checkbox using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxSize.vue
::
:::

## Disabled

`disabled` - disable the checkbox.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxDisabled
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxDisabled.vue
::
:::

## Reverse

`reverse` - Switch the position of the checkbox and the label.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxReverse
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxReverse.vue
::
:::

## Rules

You can use the following rules to customize the checkbox if it is checked.

::alert{type="info"}
  You can also globally customize the checkbox preset if you want to have a different default style. See [Configuration](/getting-started/configuration) section for more details.
::

| Rule Name   | Description                                   | Example            |
| ----------- | --------------------------------------------- | ------------------ |
| `n-checked` | Only apply the class if the checkbox is checked. | `n-checked:3xl` |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxRules
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxRules.vue
::
:::

## Customization

You can customize the checkbox using the `una` prop and utility classes.

::alert{type="info"}
  You can also globally customize the checkbox preset if you want to have a different default style. See [Configuration](/getting-started/configuration) section for more details.
::

`una.checkboxIcon` - Custom icon of the checkbox when it is `checked`.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxCustomIcon1
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustomIcon1.vue
::
:::

---

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxCustomIcon2
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustomIcon2.vue
::
:::

---

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxCustom
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustom.vue
::
:::

## Slots

| Name    | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `label` | Use this slot to customize the label of the checkbox.                    |
| `icon`  | Use this slot to customize the icon of the checkbox when it is `checked` |

## Props
@@@ ../packages/nuxt/src/runtime/types/checkbox.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/checkbox.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/forms/Checkbox.vue
