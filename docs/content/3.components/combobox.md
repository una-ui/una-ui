---
description: Autocomplete input and command palette with a list of suggestions.
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/combobox/Combobox.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/combobox
    target: _blank
---

## Examples

### Basic

| Prop          | Default           | Type                                                             | Description                                                                                                                                 |
| ------------- | ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen` | `false`           | `boolean`                                                        | The open state of the combobox when it is initially rendered. Use when you do not need to control its open state.                           |
| `disabled`    | -                 | `boolean`                                                        | When true, prevents the user from interacting with the combobox.                                                                            |
| `open`        | -                 | `boolean`                                                        | The controlled open state of the combobox. Can be binded with `v-model`.                                                                    |
| `label`       | -                 | `string`                                                         | The heading to display for the grouped item.                                                                                                |
| `items`       | -                 | `array`                                                          | The items to display in the combobox.                                                                                                       |
| `labelKey`    | `label`           | `string`                                                         | The key name to use to display in the select items.                                                                                         |
| `valueKey`    | `value`           | `string`                                                         | The key name to use to display in the selected value.                                                                                       |
| `textEmpty`   | `No items found.` | `string`                                                         | The text to display when the combobox is empty.                                                                                             |
| `by`          | -                 | `string` `((a: AcceptableValue, b: AcceptableValue) => boolean)` | Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared. |

:read-more{to="https://www.reka-ui.com/docs/components/combobox#root" title="Reka Combobox Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxBasic.vue
::
:::

### Multiple Selection

Allow users to select multiple items from the list.

| Prop       | Default | Type      | Description                                          |
| ---------- | ------- | --------- | ---------------------------------------------------- |
| `multiple` | `false` | `boolean` | When true, allows the user to select multiple items. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxMultiple.vue
::
:::

### With Trigger

Add a custom trigger content.

| Prop               | Default                                                         | Type     | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `_comboboxTrigger` | `{ btn: 'solid-white', trailing: 'i-lucide-chevrons-up-down' }` | `object` | The button props for the trigger, you can refer to the [Button component](/components/button) for more details. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxTrigger
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxTrigger.vue
::
:::

:read-more{to="/components/button" title="Button component" target="_blank"}

:read-more{to="https://reka-ui.com/docs/components/combobox#trigger" title="Reka Combobox Trigger API" target="_blank"}

### Group

| Props            | Default | Type      | Description                                 |
| ---------------- | ------- | --------- | ------------------------------------------- |
| `groupSeparator` | `false` | `boolean` | Whether to show a separator between groups. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxGroup
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxGroup.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/combobox#group" title="Reka Combobox Group Items API" target="_blank"}

### Form Field

Use the `NFormField` component to create a form field.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxFormField
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxFormField.vue
::
:::

### Variant and Color

### Size

## Slots

| Name          | Props                          | Description                                         |
| ------------- | ------------------------------ | --------------------------------------------------- |
| `default`     | -                              | Content of the combobox root                        |
| `trigger`     | `selected`, `open`             | Custom trigger content                              |
| `item`        | `item`, `selected`, `disabled` | Custom item content (when using `items` prop)       |
| `item-label`  | `item`, `selected`, `disabled` | Custom item label content (when using `items` prop) |
| `list-header` | -                              | Content before the item list                        |
| `list-footer` | -                              | Content after the item list                         |

### Custom Rendering

If you need to replace everything, you can use the `default` slot and use sub-components available in the [Combobox Components](#components) section. Think of it like a `shadcn/ui` structure.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxSlotDefault
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxSlotDefault.vue
::
:::

### Custom Multiple Selection

Customize the multiple selection content.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxSlotMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxMultiple.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/combobox.ts [shortcuts/combobox.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/combobox.ts [types/combobox.ts]

## Components

:::CodeGroup
::div{label="Combobox.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/Combobox.vue

::
::div{label="ComboboxAnchor.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxAnchor.vue

::
::div{label="ComboboxTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxTrigger.vue

::
::div{label="ComboboxInput.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxInput.vue

::
::div{label="ComboboxList.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxList.vue

::
::div{label="ComboboxViewport.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxViewport.vue

::
::div{label="ComboboxEmpty.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxEmpty.vue

::
::div{label="ComboboxGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxGroup.vue

::
::div{label="ComboboxLabel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxLabel.vue

::
::div{label="ComboboxItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxItem.vue

::
::div{label="ComboboxItemIndicator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxItemIndicator.vue

::
::div{label="ComboboxSeparator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/combobox/ComboboxSeparator.vue
::
:::
