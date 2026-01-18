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

| Name           | Default | Type                        | Description                                                                                                     |
| -------------- | ------- | --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `items`        | -       | `T[]` \| `SelectGroup<T>[]` | Set the select items.                                                                                           |
| `dir`          | `ltr`   | `string`                    | The direction of the select. Values: `ltr`, `rtl`                                                               |
| `placeholder`  | -       | `string`                    | The content that will be rendered inside the `SelectValue` when no `value` or `defaultValue` is set.            |
| `label`        | -       | `string`                    | Set the select items label.                                                                                     |
| `defaultOpen`  | -       | `boolean`                   | The open state of the select when it is initially rendered. Use when you do not need to control its open state. |
| `defaultValue` | -       | `string`                    | The value of the select when initially rendered. Use when you do not need to control the state of the `Select`  |
| `open`         | -       | `boolean`                   | The controlled open state of the Select. Can be bind as `v-model:open`.                                         |
| `modelValue`   | -       | `string`                    | The controlled value of the Select. Can be bind as `v-model`.                                                   |
| `status`       | -       | `string`                    | Set the status of the select. Values: `info`, `success`, `warning`, `error`                                     |

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

When using multiple selection with objects, the `v-model` will contain an array of extracted values. For example, with `valueKey="value"`, selecting multiple items will result in `v-model` being `['value1', 'value2']` instead of the full objects.

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

It will automatically group the items if the `items` prop is an array of objects with an `items` property.

| Props            | Default | Type      | Description                                 |
| ---------------- | ------- | --------- | ------------------------------------------- |
| `groupSeparator` | `false` | `boolean` | Whether to show a separator between groups. |

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

Control the attribute value to be displayed in the select and the item. When using objects with `labelKey` and `valueKey`, the `v-model` will contain the extracted value (not the full object).

| Prop       | Default   | Type     | Description                                    |
| ---------- | --------- | -------- | ---------------------------------------------- |
| `labelKey` | `'label'` | `string` | The key name to be displayed in the item.      |
| `valueKey` | `'value'` | `string` | The key name to extract for the v-model value. |

::callout{icon="i-lucide-info" color="blue"}
**Important Behavior:** The `v-model` stores the extracted value based on `valueKey`, not the full object.

**Example:**

- Items: `[{ label: 'Ford', code: '81253' }]`
- Props: `labelKey="label"` and `valueKey="code"`
- Result: `v-model` = `'81253'` (the code), Display = `'Ford'` (the label)

If you need access to the full object in custom slots, create a computed property that finds the item by matching the v-model value.
::

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

| Name              | Props                | Description                                         |
| ----------------- | -------------------- | --------------------------------------------------- |
| `default`         | `modelValue`, `open` | Full access to root element and state.              |
| `trigger-wrapper` | `modelValue`, `open` | Override trigger button.                            |
| `trigger`         | `modelValue`, `open` | Customize trigger content (replaces `SelectValue`). |
| `indicator`       | `item`               | Customize selected item indicator icon.             |
| `value`           | `modelValue`, `open` | Customize selected value display in trigger.        |
| `content`         | `items`              | Customize dropdown content area.                    |
| `label`           | `label`              | Customize group or main select label.               |
| `item`            | `item`               | Customize individual dropdown item.                 |
| `group`           | `group`              | Customize group rendering when using groups.        |

::callout{icon="i-lucide-lightbulb" color="amber"}
**Note on `modelValue` in slots:** When using objects with `valueKey`, the `modelValue` contains the extracted value (e.g., a string or number), not the full object. If you need the full object in the `value` slot, create a computed property to find the item by matching the `modelValue` against your items array.
::

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
