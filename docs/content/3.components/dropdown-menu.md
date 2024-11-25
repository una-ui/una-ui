---
description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenu.vue
    target: _blank
  - value: API reference
    icon: /icons/radix-vue.svg
    to: https://www.radix-vue.com/components/dropdown-menu
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type                      | Description                                                                                                                                                      |
| ------------- | ------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`       | `[]`    | `DropdownMenuItemProps[]` | The items to display in the dropdown-menu.                                                                                                                       |
| `label`       | -       | `string`                  | The label to display in the dropdown-menu.                                                                                                                       |
| `defaultOpen` | `false` | `boolean`                 | The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.                                           |
| `dir`         | `ltr`   | `ltr`, `rtl`              | The reading direction of the combobox when applicable. If omitted, inherits globally from ConfigProvider or assumes LTR (left-to-right) reading mode.            |
| `modal`       | `true`  | `boolean`                 | The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers. |
| `open`        | `false` | `boolean`                 | The controlled open state of the menu. Can be used as `v-model:open`.                                                                                            |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDropdownMenuBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/dropdown-menu#root" title="Radix Dropdown Menu Root API." target="_blank"}

### Inset

| Prop    | Default | Type      | Description                        |
| ------- | ------- | --------- | ---------------------------------- |
| `inset` | `false` | `boolean` | Set the dropdown-menu to be inset. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDropdownMenuInset
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuInset.vue
::
:::

### Variant and Color

| Prop                                     | Default       | Type                | Description                                    |
| ---------------------------------------- | ------------- | ------------------- | ---------------------------------------------- |
| `dropdown-menu`                          | `solid-white` | `{variant}-{color}` | Change the color of the dropdown-menu.         |
| `dropdown-menu-item`                     | `gray`        | `{color}`           | Change the color of the dropdown-menu item.    |
| `_dropdown-menu-trigger.dropdown-menu`   | `solid-white` | `{variant}-{color}` | Change the color of the dropdown-menu trigger. |
| `_dropdown-menu-item.dropdown-menu-item` | `gray`        | `{color}`           | Change the color of the dropdown-menu item.    |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDropdownMenuVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuVariant.vue
::
:::

:read-more{to="/components/button#color" title="Button variant and color section" target="_blank"}

### Size

Adjust the dropdown-menu size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop                        | Default | Type     | Description                                                         |
| --------------------------- | ------- | -------- | ------------------------------------------------------------------- |
| `size`                      | `sm`    | `string` | Adjusts the overall size of the dropdown-menu component.            |
| `_dropdownMenuItem.size`    | `sm`    | `string` | Customizes the size of each item within the dropdown-menu dropdown. |
| `_dropdownMenuTrigger.size` | `sm`    | `string` | Modifies the size of the dropdown-menu trigger element.             |
| `_dropdownMenuLabel.size`   | `sm`    | `string` | Adjusts the size of the dropdown-menu label.                        |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDropdownMenuSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuSize.vue
::
:::

### Slots

| Name          | Props   | Description           |
| ------------- | ------- | --------------------- |
| `trigger`     | -       | The trigger slot.     |
| `item`        | `item`  | The item slot.        |
| `sub-trigger` | -       | The sub-trigger slot. |
| `content`     | `items` | The content slot.     |
| `label`       | `label` | The label slot.       |
| `group`       | `items` | The group slot.       |

:::CodeGroup
::div{label="Preview"}
:ExampleVueDropdownMenuSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/dropdown-menu.ts [shortcuts/dropdown-menu.ts]


## Props

@@@ ../packages/nuxt/src/runtime/types/dropdown-menu.ts [types/dropdown-menu.ts]


## Components

:::CodeGroup
::div{label="DropdownMenu.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenu.vue

::
::div{label="DropdownMenuTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuTrigger.vue

::
::div{label="DropdownMenuItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuItem.vue

::
::div{label="DropdownMenuGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuGroup.vue

::
::div{label="DropdownMenuLabel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuLabel.vue

::
::div{label="DropdownMenuSeparator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSeparator.vue

::
::div{label="DropdownMenuContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuContent.vue

::
::div{label="DropdownMenuSub.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSub.vue

::
::div{label="DropdownMenuSubTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubTrigger.vue

::
::div{label="DropdownMenuSubContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubContent.vue

::
:::
