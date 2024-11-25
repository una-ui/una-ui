---
description: 'A control that allows the user to toggle between checked and not checked.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/Checkbox.vue
    target: _blank
  - value: API reference
    icon: /icons/radix-vue.svg
    to: https://www.radix-vue.com/components/checkbox
    target: _blank
---

## Examples

### Basic

| Prop             | Default      | Type                       | Description                                                                                                             |
| ---------------- | ------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `checked`        | -            | `boolean`, `indeterminate` | The controlled checked state of the checkbox. Can be binded with `v-model`.                                             |
| `defaultChecked` | -            | `boolean`                  | The checked state of the checkbox when it is initially rendered. Use when you do not need to control its checked state. |
| `disabled`       | -            | `boolean`                  | When true, prevents the user from interacting with the checkbox.                                                        |
| `id`             | `randomId()` | `string`                   | Id of the element.                                                                                                      |
| `name`           | -            | `string`                   | The name of the checkbox. Submitted with its owning form as part of a name/value pair.                                  |
| `required`       | -            | `boolean`                  | When true, indicates that the user must check the checkbox before the owning form can be submitted.                     |
| `value`          | `on`         | `string`                   | The value given as data when submitted with a name.                                                                     |
| `label`          | -            | `string`                   | Set the label of the checkbox.                                                                                          |

:read-more{to="https://www.radix-vue.com/components/checkbox#root" title="Radix Checkbox Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxBasic.vue
::
:::

### Color

| Prop    | Default   | Type     | Description                       |
| ------- | --------- | -------- | --------------------------------- |
| `color` | `primary` | `string` | Change the color of the checkbox. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxColor.vue
::
:::

### Form Group

You can use the `checkbox` component inside the `form-group` component, or you can use it with the `label` component.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxFormGroup
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxFormGroup.vue
::
:::

:read-more{to="/components/form-group" title="Form-group component" target="_blank"}

:read-more{to="/components/label" title="Label component" target="_blank"}

### Size

Adjust the select size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop   | Default | Type     | Description                      |
| ------ | ------- | -------- | -------------------------------- |
| `size` | `md`    | `string` | Adjust the size of the checkbox. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueCheckboxSize.vue
::
:::

You can also utilize `data-[state]` to dynamically modify the size of the checkbox based on its state.

| Data state                   | Description                                            |
| ---------------------------- | ------------------------------------------------------ |
| `data-[state=checked]`       | Only apply the class if the checkbox is checked.       |
| `data-[state=unchecked]`     | Only apply the class if the checkbox is unchecked.     |
| `data-[state=indeterminate]` | Only apply the class if the checkbox is indeterminate. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxSize.vue
::
:::

### Reverse

| Prop      | Default | Type      | Description                                     |
| --------- | ------- | --------- | ----------------------------------------------- |
| `reverse` | -       | `boolean` | Reverse the position of the checkbox and label. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxReverse
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxReverse.vue
::
:::

### Customization

> You can customize the checkbox using the `una` prop and utility classes.

| Prop                            | Default          | Type     | Description                                             |
| ------------------------------- | ---------------- | -------- | ------------------------------------------------------- |
| `una.checkboxCheckedIcon`       | `i-check`        | `string` | Custom icon of the checkbox when it is `checked`.       |
| `una.checkboxUncheckedIcon`     | `null`           | `string` | Custom icon of the checkbox when it is `unchecked`.     |
| `una.checkboxIndeterminateIcon` | `i-lucide-minus` | `string` | Custom icon of the checkbox when it is `indeterminate`. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxCustomIcon1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustomIcon1.vue
::
:::

---

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxCustomIcon2
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustomIcon2.vue
::
:::

---

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCheckboxCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/checkbox/ExampleVueCheckboxCustom.vue
::
:::

### Slots

| Name      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `default` | Use this slot to customize the label of the checkbox.                    |
| `icon`    | Use this slot to customize the icon of the checkbox when it is `checked` |

## Presets

@@@ ../packages/preset/src/_shortcuts/checkbox.ts [shortcuts/checkbox.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/checkbox.ts [types/checkbox.ts]

## Components

:::CodeGroup
::div{label="Checkbox.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/Checkbox.vue
::
