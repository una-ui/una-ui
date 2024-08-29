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


## Props
@@@ ../packages/nuxt/src/runtime/types/dropdown-menu.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/dropdown-menu.ts

## Component

### 
