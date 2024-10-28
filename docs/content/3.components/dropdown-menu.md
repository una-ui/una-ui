---
description: 'NDropdownMenu component - used to display a list of actions or options.'
---

# Dropdown Menu

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
::div{label="Preview" preview}
:ExampleVueDropdownMenuBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuBasic.vue
::
:::

## Inset

`inset` prop is used to set the dropdown-menu to be inset.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDropdownMenuInset
::
::div{label="Code"}
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
::div{label="Preview" preview}
:ExampleVueDropdownMenuVariant
::
::div{label="Code"}
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
::div{label="Preview" preview}
:ExampleVueDropdownMenuSize
::
::div{label="Code"}
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
::div{label="Preview"}
:ExampleVueDropdownMenuSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dropdown-menu/ExampleVueDropdownMenuSlots.vue

::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/dropdown-menu.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/dropdown-menu.ts

## Component

:::CodeGroup
::div{label="DropdownMenu" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenu.vue

::
::div{label="DropdownMenuTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuTrigger.vue

::
::div{label="DropdownMenuItem"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuItem.vue

::
::div{label="DropdownMenuGroup"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuGroup.vue

::
::div{label="DropdownMenuLabel"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuLabel.vue

::
::div{label="DropdownMenuSeparator"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSeparator.vue

::
::div{label="DropdownMenuContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuContent.vue

::
::div{label="DropdownMenuSub"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSub.vue

::
::div{label="DropdownMenuSubTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubTrigger.vue

::
::div{label="DropdownMenuSubContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dropdown-menu/DropdownMenuSubContent.vue

::
:::
