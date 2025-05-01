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

| Prop         | Default           | Type                                                             | Description                                                                                                                                 |
| ------------ | ----------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`      | -                 | `T[] \| NComboboxGroupProps<ExtractItemType<T>>[]`               | The items to display in the combobox.                                                                                                       |
| `modelValue` | -                 | `AcceptableValue` \| `AcceptableValue[]`                         | The controlled value of the listbox. Can be binded with with `v-model`.                                                                     |
| `disabled`   | -                 | `boolean`                                                        | When true, prevents the user from interacting with the combobox.                                                                            |
| `open`       | -                 | `boolean`                                                        | The controlled open state of the combobox. Can be binded with `v-model`.                                                                    |
| `label`      | -                 | `string`                                                         | The heading to display for the grouped item.                                                                                                |
| `labelKey`   | `label`           | `string`                                                         | The key name to use to display in the select items.                                                                                         |
| `valueKey`   | `value`           | `string`                                                         | The key name to use to display in the selected value.                                                                                       |
| `textEmpty`  | `No items found.` | `string`                                                         | The text to display when the combobox is empty.                                                                                             |
| `by`         | -                 | `string` `((a: AcceptableValue, b: AcceptableValue) => boolean)` | Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared. |

::alert{type="info"}
The `T` generic extends `AcceptableValue` from Reka UI. When using grouped items, the item type is automatically extracted.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/combobox#root" title="Reka Combobox Root API." target="_blank"}

### Multiple

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

### Trigger

Add a custom trigger content.

| Prop               | Default                                                         | Type                    | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| `_comboboxTrigger` | `{ btn: 'solid-white', trailing: 'i-lucide-chevrons-up-down' }` | `NComboboxTriggerProps` | The button props for the trigger, you can refer to the [Button component](/components/button) for more details. |

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

### List / Content

| Prop            | Default                                                  | Type                 | Description                                                                                                                               |
| --------------- | -------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `_comboboxList` | `{ align: 'center', sideOffset: 4, position: 'popper' }` | `NComboboxListProps` | Props for customizing the dropdown list of the combobox. Controls alignment, offset distance from trigger, positioning behavior and more. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxContent
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxContent.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/combobox#content" title="Reka Combobox Content API" target="_blank"}

### Group

| Props | Default | Type | Description |
| ----- | ------- | ---- | ----------- |

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

:read-more{to="/components/form" title="Form component" target="_blank"}

### Size

Adjust the combobox size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                    | Default | Type     | Description                                                    |
| ----------------------- | ------- | -------- | -------------------------------------------------------------- |
| `size`                  | `sm`    | `string` | Adjusts the overall size of the combobox component.            |
| `_comboboxInput.size`   | `sm`    | `string` | Customizes the size of the combobox input element.             |
| `_comboboxItem.size`    | `sm`    | `string` | Customizes the size of each item within the combobox dropdown. |
| `_comboboxTrigger.size` | `sm`    | `string` | Modifies the size of the combobox trigger element.             |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxSize.vue
::
:::

## Slots

| Name              | Props                | Description                                                      |
| ----------------- | -------------------- | ---------------------------------------------------------------- |
| `default`         | -                    | Slot for advanced custom rendering using sub-components.         |
| `trigger`         | `modelValue`, `open` | Custom content _inside_ the default trigger button.              |
| `trigger-wrapper` | `modelValue`, `open` | Completely replace the default trigger button/component.         |
| `input-wrapper`   | `modelValue`, `open` | Completely replace the default input component.                  |
| `item`            | `item`, `selected`   | Custom rendering for the entire content of each combobox item.   |
| `label`           | `item`               | Custom rendering for the label text within each item.            |
| `indicator`       | `item`               | Custom rendering for the selection indicator within each item.   |
| `header`          | -                    | Content rendered inside the list, before the items.              |
| `body`            | -                    | Completely replace the default item list container (`Viewport`). |
| `footer`          | -                    | Content rendered inside the list, after the items.               |

### Custom Rendering

Use the `default` slot for full control over the combobox's structure. This allows you to compose the combobox using its individual sub-components (like `ComboboxInput`, `ComboboxList`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

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
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxSlotMultiple.vue
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
