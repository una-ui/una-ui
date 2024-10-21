---
description: 'NCheckbox component - use to create a checkbox input.'
---

# 🟢 Checkbox

---

## Basic

use `NCheckbox` component to create a checkbox.

| Attribute         | Type                      | Default | Description                           |
| ----------------- | ------------------------- | ------- | ------------------------------------- |
| `v-model:checked` | `boolean` `indeterminate` | `false` | Bind the checkbox to a boolean value. |
| `label`           | `string`                  | `''`    | Set the label of the checkbox.        |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxBasic.vue
::
:::

## Indeterminate

`checked="indeterminate"` - set the checkbox to indeterminate state.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCheckboxIndeterminate
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxIndeterminate.vue
::
:::

## Color

`checkbox="{color}"` - change the color of the checkbox.

> You can use `breakpoints` such as `sm:red, xs:green` to change color based on screen size.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
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

::alert{type="info"}
  You can freely adjust the size of the checkbox using any size imaginable. No limits exist, and you can use `data-[state]` to adjust the size based on the state of the checkbox.
::

| Data state                   | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| `data-[state=checked]`       | Only apply the class if the checkbox is checked.       |
| `data-[state=unchecked]`     | Only apply the class if the checkbox is unchecked.     |
| `data-[state=indeterminate]` | Only apply the class if the checkbox is indeterminate. |

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

## Customization

You can customize the checkbox using the `una` prop and utility classes.

::alert{type="info"}
  You can also globally customize the checkbox preset if you want to have a different default style. See [Configuration](/#getting-started/configuration) section for more details.
::

| Property                        | Type     | Default          | Description                                             |
| ------------------------------- | -------- | ---------------- | ------------------------------------------------------- |
| `una.checkboxCheckedIcon`       | `string` | `i-check`        | Custom icon of the checkbox when it is `checked`.       |
| `una.checkboxUncheckedIcon`     | `string` | `null`           | Custom icon of the checkbox when it is `unchecked`.     |
| `una.checkboxIndeterminateIcon` | `string` | `i-lucide-minus` | Custom icon of the checkbox when it is `indeterminate`. |




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

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Use this slot to customize the label of the checkbox.                    |
| `icon`    | Use this slot to customize the icon of the checkbox when it is `checked` |

## Props
@@@ ../packages/nuxt/src/runtime/types/checkbox.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/checkbox.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/forms/Checkbox.vue
