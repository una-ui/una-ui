---
description: 'NCollapsible - Displays content in a portal, triggered by a button.'
---

# 🟢 Collapsible

::list{type="primary"}
- Full keyboard navigation.
- Can be controlled or uncontrolled.
::

---

## Basic

Displays rich content in a portal, triggered by a button.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCollapsibleBasic
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/collapsible/ExampleVueCollapsibleBasic.vue
::
:::

## Slots

> You can use the following slots to customize the collapsible.

| Name           | Description                  | Props  |
| -------------- | ---------------------------- | ------ |
| `trigger`      | The button trigger.          | `open` |
| `default`      | The collapsible content.         | -      |

## Props
@@@ ../packages/nuxt/src/runtime/types/collapsible.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/collapsible.ts

## Component

:::CodeGroup
::code-block{label="Collapsible" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/Collapsible.vue

::
::code-block{label="CollapsibleContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/CollapsibleContent.vue

::
:::
