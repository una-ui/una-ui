---
description: 'NPopover - Displays rich content in a portal, triggered by a button.'
---

# Popover

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

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVuePopoverBasic
::

::div{label="Code"}
@@@ ./components/content/examples/vue/popover/ExampleVuePopoverBasic.vue
::
:::

## Slots

> You can use the following slots to customize the popover.

| Name           | Description                  | Props  |
| -------------- | ---------------------------- | ------ |
| `trigger`      | The button trigger.          | `open` |
| `default`      | The popover content.         | -      |

## Props
@@@ ../packages/nuxt/src/runtime/types/popover.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/popover.ts

## Component

:::CodeGroup
::div{label="Popover" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/Popover.vue

::
::div{label="PopoverContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/PopoverContent.vue

::
:::
