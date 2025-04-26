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

A simple combobox for selecting an item from a predefined list.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxBasic.vue
::
:::

### Custom Rendering

Customize the trigger and item display using slots. This example shows selecting a user with an avatar.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxCustomRender
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxCustomRender.vue
::
:::

### Grouped Items

Organize combobox items into labeled groups. This example demonstrates selecting a timezone.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxGrouped
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxGrouped.vue
::
:::

### Multiple Selection

Allow users to select multiple items from the list.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueComboboxMultiple
::
::div{label="Code"}
@@@ ./components/content/examples/vue/combobox/ExampleVueComboboxMultiple.vue
::
:::

## Slots

| Name          | Props                          | Description                                         |
| ------------- | ------------------------------ | --------------------------------------------------- |
| `default`     | -                              | Content of the combobox root                        |
| `trigger`     | `selected`, `open`             | Custom trigger content                              |
| `item`        | `item`, `selected`, `disabled` | Custom item content (when using `items` prop)       |
| `item-label`  | `item`, `selected`, `disabled` | Custom item label content (when using `items` prop) |
| `list-header` | -                              | Content before the item list                        |
| `list-footer` | -                              | Content after the item list                         |

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
