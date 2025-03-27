---
description: 'Displays a list of options for the user to pick from—triggered by a button.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/select/Select.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/select
    target: _blank
---

## Examples

### Basic

| Name           | Default | Type      | Description                                                                                                     |
| -------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `items`        | -       | `array`   | Set the select items.                                                                                           |
| `dir`          | `ltr`   | `string`  | The direction of the select. Values: `ltr`, `rtl`                                                               |
| `placeholder`  | -       | `string`  | The content that will be rendered inside the `SelectValue` when no `value` or `defaultValue` is set.            |
| `label`        | -       | `string`  | Set the select items label.                                                                                     |
| `defaultOpen`  | -       | `boolean` | The open state of the select when it is initially rendered. Use when you do not need to control its open state. |
| `defaultValue` | -       | `string`  | The value of the select when initially rendered. Use when you do not need to control the state of the `Select`  |
| `open`         | -       | `boolean` | The controlled open state of the Select. Can be bind as `v-model:open`.                                         |
| `modelValue`   | -       | `string`  | The controlled value of the Select. Can be bind as `v-model`.                                                   |
| `status`       | -       | `string`  | Set the status of the select. Values: `info`, `success`, `warning`, `error`                                     |

:read-more{to="https://www.reka-ui.com/docs/components/select#root" title="Reka Select Root API" target="_blank"}

:read-more{to="https://www.reka-ui.com/docs/components/select#value" title="Reka Select Value API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectBasic.vue
::
:::

### Multiple

| Prop       | Default | Type      | Description                     |
| ---------- | ------- | --------- | ------------------------------- |
| `multiple` | `false` | `boolean` | Enable multiple selection mode. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectMultiple.vue
::
:::

### Disabled

| Prop       | Default | Type      | Description                   |
| ---------- | ------- | --------- | ----------------------------- |
| `disabled` | `false` | `boolean` | Disable the select component. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectDisabled.vue
::
:::

### Group

| Prop    | Default | Type      | Description                     |
| ------- | ------- | --------- | ------------------------------- |
| `group` | -       | `boolean` | Enable support for group items. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectGroup
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectGroup.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/select#group" title="Reka Select Group Items API" target="_blank"}

### Objects

Control the attribute value to be displayed in the select and the item.

| Prop       | Default | Type     | Description                                         |
| ---------- | ------- | -------- | --------------------------------------------------- |
| `valueKey` | -       | `string` | The key name to be displayed in the selected value. |
| `itemKey`  | -       | `string` | The key name to be displayed in the item.           |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectObjects
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectObjects.vue
::
:::

### Form Field

The `NSelect` component can be easily embedded within the `NFormField` component.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectForm
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectForm.vue
::
:::

:read-more{to="/components/form" title="Form component" target="_blank"}

### Variant and Color

| Prop          | Default      | Type                | Description                          |
| ------------- | ------------ | ------------------- | ------------------------------------ |
| `select`      | `soft-white` | `{variant}-{color}` | Change the color of the select.      |
| `select-item` | `gray`       | `{color}`           | Change the color of the select item. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectColor.vue
::
:::

:read-more{to="/components/button#color" title="Button variant and color section" target="_blank"}

### Size

Adjust the select size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                  | Default | Type     | Description                                                  |
| --------------------- | ------- | -------- | ------------------------------------------------------------ |
| `size`                | `sm`    | `string` | Adjusts the overall size of the select component.            |
| `_selectItem.size`    | `sm`    | `string` | Customizes the size of each item within the select dropdown. |
| `_selectTrigger.size` | `sm`    | `string` | Modifies the size of the select trigger element.             |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSelectSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectSize.vue
::
:::

## Slots

| Name      | Props   | Description                   |
| --------- | ------- | ----------------------------- |
| `root`    | `value` | Overrides all sub-components. |
| `trigger` | `value` | The trigger slot.             |
| `value`   | `value` | The value slot.               |
| `content` | `items` | The content slot.             |
| `label`   | `label` | The label slot.               |
| `item`    | `item`  | The item slot.                |
| `group`   | `items` | The group slot.               |

:::CodeGroup
::div{label="Preview"}
:ExampleVueSelectSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/select.ts [shortcuts/select.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/select.ts [types/select.ts]

## Components

:::CodeGroup
::div{label="Select.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/Select.vue

::
::div{label="SelectContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectContent.vue

::
::div{label="SelectGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectGroup.vue

::
::div{label="SelectItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItem.vue

::
::div{label="SelectItemText.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItemText.vue

::
::div{label="SelectLabel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectLabel.vue

::
::div{label="lectScrollDownButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollDownButton.vue

::
::div{label="SelectScrollUpButton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollUpButton.vue

::
::div{label="SelectSeperator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectSeparator.vue

::
::div{label="SelectTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectTrigger.vue

::
::div{label="SelectValue.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectValue.vue

::
:::
