---
description: 'NDropdownMenu component - used to display a list of actions or options.'
---

# 🟢 Dropdown Menu

---

::list{type="primary"}
- Can be controlled or uncontrolled.
- Supports submenus with configurable reading direction.
- Supports items, labels, groups of items.
- Supports checkable items (single or multiple) with optional indeterminate state.
- Supports modal and non-modal modes.
- Customize side, alignment, offsets, collision handling.
- Optionally render a pointing arrow.
- Focus is fully managed.
- Full keyboard navigation.
- Typeahead support.
- Dismissing and layering behavior is highly customizable.
::

---

## Basic

`NDropdownMenu` is a component that can be used to display a list of actions or options.

| Prop    | Type                      | Default     | Description                                |
| ------- | ------------------------- | ----------- | ------------------------------------------ |
| `items` | `DropdownMenuItemProps[]` | `[]`        | The items to display in the dropdown-menu. |
| `label` | `string`                  | `undefined` | The label to display in the dropdown-menu. |

::alert{type="info"}
All the props available in the [Radix Vue Dropdown Menu](https://www.radix-vue.com/components/dropdown-menu) are also
available via its subcomponents' prop names, e.g., `_dropdown-menu-item`, `_dropdown-menu-trigger`, etc. refer to
[DropdownMenu Props](#props) for more details.

::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueDropdownMenuBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuBasic.vue
::
:::

## Inset

`inset` prop is used to set the dropdown-menu to be inset.

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueDropdownMenuInset
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuInset.vue
::
:::

## Variant and Color

`dropdown-menu="{variant}-{color}"` is used to set the variant of the dropdown-menu. The default variant is `soft-black`.

`dropdown-menu-item="{color}"` is used to set the variant of the dropdown-menu item. The default variant is `soft-black`.

| Prop                                     | Description                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| `dropdown-menu`                          | Set the dropdown-menu variant and color.                                |
| `_dropdown-menu-trigger.dropdown-menu`   | Set the dropdown-menu variant and color via `_dropdown-menu-trigger`.   |
| `dropdown-menu-item`                     | Set the dropdown-menu item variant and color.                           |
| `_dropdown-menu-item.dropdown-menu-item` | Set the dropdown-menu item variant and color via `_dropdown-menu-item`. |

::alert{type="info"}
`NDropdownMenuTrigger` is wrapped around the [NButton](button) component. This means that all the props and slots of
`NButton` are available to use or through `_dropdown-menu-trigger` prop.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueDropdownMenuVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuVariant.vue
::
:::

## **Size**

| Prop                        | Description                         |
| --------------------------- | ----------------------------------- |
| `size`                      | Set the dropdown-menu general size. |
| `_dropdownMenuTrigger.size` | Set the trigger size only.          |
| `_dropdownMenuItem.size`    | Set the item size only.             |
| `_dropdownMenuLabel.size`   | Set the menu label size only.       |

> 🚀 You can freely adjust the size of the dropdown-menu using any size imaginable. No limits exist, and you can use
`breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to
change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the dropdown-menu scale depends on the `dropdown-menu-size`. If you want to change the `height` and
`width` simultaneously, you can always customize it using utility classes.
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

> You can use the following slots to customize the dropdown-menu.

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

:::CodeGroup
::code-block{label="DropdownMenu" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenu.vue

::
::code-block{label="DropdownMenuTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuTrigger.vue

::
::code-block{label="DropdownMenuItem"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuItem.vue

::
::code-block{label="DropdownMenuGroup"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuGroup.vue

::
::code-block{label="DropdownMenuLabel"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuLabel.vue

::
::code-block{label="DropdownMenuSeparator"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSeparator.vue

::
::code-block{label="DropdownMenuContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuContent.vue

::
::code-block{label="DropdownMenuSub"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSub.vue

::
::code-block{label="DropdownMenuSubTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubTrigger.vue

::
::code-block{label="DropdownMenuSubContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubContent.vue

::
:::
