---
description: 'An interactive component which expands/collapses a panel.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/collapsible/Collapsible.vue
    target: _blank
  - value: API reference
    icon: icons/radix-vue.svg
    to: https://www.radix-vue.com/components/collapsible
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                          |
| ------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen` | `false` | `boolean` | The open state of the collapsible when it is initially rendered. Use when you do not need to control its open state. |
| `disabled`    | -       | `boolean` | When true, prevents the user from interacting with the collapsible.                                                  |
| `open`        | -       | `boolean` | The controlled open state of the collapsible. Can be binded with `v-model`.                                          |

:read-more{to="https://www.radix-vue.com/components/collapsible#root" title="Radix Collapsible Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCollapsibleBasic
::

::div{label="Code"}
@@@ ./components/content/examples/vue/collapsible/ExampleVueCollapsibleBasic.vue
::
:::

### Slots

| Name      | Props  | Description                   |
| --------- | ------ | ----------------------------- |
| `default` | `open` | The collapsible root slot.    |
| `content` | -      | The collapsible content slot. |
| `trigger` | `open` | The button trigger slot.      |

:::CodeGroup
::div{label="Preview"}
:ExampleVueCollapsibleSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/collapsible/ExampleVueCollapsibleSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/collapsible.ts [shortcuts/collapsible.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/collapsible.ts [types/collapsible.ts]

## Components

:::CodeGroup
::div{label="Collapsible.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/Collapsible.vue

::
::div{label="CollapsibleTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/CollapsibleTrigger.vue

::
::div{label="CollapsibleContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/collapsible/CollapsibleContent.vue

::
:::
