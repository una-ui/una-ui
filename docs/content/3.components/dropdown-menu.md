---
description: 'NDropdownMenu component - used to display a list of actions or options.'
---

# 🟢 Dropdown Menu

---

`NDropdownMenu` is a component that can be used to display a list of actions or options.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDropdownMenuBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuBasic.vue
::
:::

## Variant and Color

`dropdown-menu="{variant}-{color}"` is used to set the variant of the select. The default variant is `soft-black`.

`dropdown-menu-item="{color}"` is used to set the variant of the select item. The default variant is `soft-black`.

| Prop                                     | Description                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `dropdown-menu`                          | Set the select variant and color.                                |
| `_dropdown-menu-trigger.dropdown-menu`   | Set the select variant and color via `_dropdown-menu-trigger`.   |
| `dropdown-menu-item`                     | Set the select item variant and color.                           |
| `_dropdown-menu-item.dropdown-menu-item` | Set the select item variant and color via `_dropdown-menu-item`. |

::alert{type="info"}
`NDropdownMenuTrigger` is wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available to use or through `_dropdown-menu-trigger` prop.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDropdownMenuVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/drowndown-menu/ExampleVueDropdownMenuVariant.vue
::
:::

## **Size**

| Prop                        | Description                         |
| --------------------------- | ----------------------------------- |
| `size`                      | Set the dropdown-menu general size. |
| `_dropdownMenuTrigger.size` | Set the trigger size only.          |
| `_dropdownMenuItem.size`    | Set the item size only.             |
| `_dropdownMenuLabel.size`   | Set the menu label size only.       |

> 🚀 You can freely adjust the size of the select using any size imaginable. No limits exist, and you aan use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the select scale depends on the `dropdown-menu-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDropdownMenuSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuSize.vue
::
:::

## Slots

> You can use the following slots to customize the select.

| Name          | Description           | Props   |
| ------------- | --------------------- | ------- |
| `trigger`     | The trigger slot.     | -       |
| `item`        | The item slot.        | `item`  |
| `sub-trigger` | The sub-trigger slot. | -       |
| `content`     | The content slot.     | `items` |
| `label`       | The label slot.       | `label` |
| `group`       | The group slot.       | `items` |

:::CodeGroup
::code-block{label="Preview"}
  :ExampleVueDropdownMenuSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuSlots.vue

::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/dropdown-menu.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/dropdown-menu.ts

## Component

### 
