---
description: 'NPopover - Displays rich content in a portal, triggered by a button.'
---

# 🟢 Popover

::list{type="primary"}
- Can be controlled or uncontrolled.
- Customize side, alignment, offsets, collision handling.
- Optionally render a pointing arrow.
- Focus is fully managed and customizable.
- Supports modal and non-modal modes.
- Dismissing and layering behavior is highly customizable.
::

---

## Basic

Displays rich content in a portal, triggered by a button.

::alert{type="info"}
  You can use and pass any props to `NPopover` and its sub-components, such as `NPopoverTrigger`, `NPopoverContent`, and `NPopoverClose`. For more information, please refer to the [Radix Popover documentation](https://www.radix-vue.com/components/popover){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePopoverBasic
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/popover/ExampleVuePopoverBasic.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/popover.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/popover.ts

## Component

You can use any sub-components of `NPopover`, such as `NPopoverTrigger`, `NPopoverContent`, and `NPopoverClose`, which are defined in the Radix Popover documentation. For more information, please refer to the [Radix Popover documentation](https://www.radix-vue.com/components/popover){target="_blank"}.

:::CodeGroup
::code-block{label="Popover" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/Popover.vue

::
::code-block{label="PopoverContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/PopoverContent.vue

::
:::
