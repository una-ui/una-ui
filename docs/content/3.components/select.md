---
description: 'Displays a list of options for the user to pick from—triggered by a button.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/select/Select.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/select
    target: _blank
---

## Examples 

### Basic

| Name           | Default | Type      | Description                                                                                                     |
| -------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `items`        | -       | `array`   | Set the select items.                                                                                           |
| `placeholder`  | -       | `string`  | The content that will be rendered inside the SelectValue when no value or defaultValue is set.                  |
| `label`        | -       | `string`  | Set the select items label.                                                                                     |
| `defaultOpen`  | -       | `boolean` | The open state of the select when it is initially rendered. Use when you do not need to control its open state. |
| `defaultValue` | -       | `string`  | The value of the select when initially rendered. Use when you do not need to control the state of the Select    |
| `open`         | -       | `boolean` | The controlled open state of the Select. Can be bind as `v-model:open`.                                         |
| `modelValue`   | -       | `string`  | The controlled value of the Select. Can be bind as `v-model`.                                                   |

:read-more{to="https://www.radix-vue.com/components/select#root" title="Radix Select Root API" target="_blank"}

:read-more{to="https://www.radix-vue.com/components/select#value" title="Radix Select Value API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectBasic.vue
::
:::

## Nested 

Enable support for nested items.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectNested
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectNested.vue
::
:::

### Objects

Control the attribute value to be displayed in the select and the item.

| Prop             | Default | Type     | Description                                        |
| ---------------- | ------- | -------- | -------------------------------------------------- |
| `valueAttribute` | -       | `string` | The attribute value to be displayed in the select. |
| `itemAttribute`  | -       | `string` | The attribute value to be displayed in the item.   |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectObjects
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectObjects.vue
::
:::

### Label

> You can use the `NFormGroup` component to create a label for the select.

::alert{type="info"}
  Read more about the `NFormGroup` component [here](form-group).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectLabel
::
 ::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectLabel.vue
::
:::

### Variant and Color

`select="{variant}-{color}"` is used to set the variant of the select. The default variant is `soft-black`.

`select-item="{color}"` is used to set the variant of the select item. The default variant is `soft-black`.

| Prop                    | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `select`                | Set the select variant and color.                      |
| `_selectTrigger.select` | Set the select variant and color via `_selectTrigger`. |

::alert{type="info"}
`NSelect` is wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available through the `_selectTrigger` prop.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectColor.vue
::
:::

### Disabled

| Prop                   | Default | Type      | Description                |
| ---------------------- | ------- | --------- | -------------------------- |
| `disabled`             | -       | `boolean` | Disable the select.        |
| `_selectItem.disabled` | -       | `boolean` | Disable the specific item. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectDisabled.vue
::
:::

### Size

| Prop                  | Default | Type     | Description                   |
| --------------------- | ------- | -------- | ----------------------------- |
| `size`                | `sm`    | `string` | Set the select general size.  |
| `_selectItem.size`    | `sm`    | `string` | Set the item general size.    |
| `_selectTrigger.size` | `sm`    | `string` | Set the trigger general size. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectSize.vue
::
:::

### Slots

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `trigger` | -     | The trigger slot. |
| `value`   | -     | The value slot.   |
| `content` | -     | The content slot. |
| `label`   | -     | The label slot.   |
| `item`    | -     | The item slot.    |
| `group`   | -     | The group slot.   |

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
::div{label="SelectRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectRoot.vue

::
::div{label="SelectScrollDownButton.vue" icon="i-vscode-icons-file-type-vue"}
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
