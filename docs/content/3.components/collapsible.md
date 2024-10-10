---
description: 'NCollapsible - An interactive component which expands/collapses a panel'
---

# 🟢 Collapsible

::list{type="primary"}
- Full keyboard navigation.
- Can be controlled or uncontrolled.
::

---

## Basic

An interactive component which expands/collapses a panel.

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

| Name      | Description             | Props  |
| --------- | ----------------------- | ------ |
| `default` | The collapsible root    | `open` |
| `content` | The collapsible content | -      |
| `trigger` | The button trigger.     | `open` |

## Props
@@@ ../packages/nuxt/src/runtime/types/collapsible.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/collapsible.ts

## Component

:::CodeGroup
::code-block{label="Collapsible" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/Collapsible.vue

::
::code-block{label="CollapsibleTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/CollapsibleTrigger.vue

::
::code-block{label="CollapsibleContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/CollapsibleContent.vue

::
:::
