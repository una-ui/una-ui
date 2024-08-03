---
title: 🌑 Tabs
description: 'NTabs are used to navigate between different content and also they have robust focus management and keyboard navigation support.'
---

# 🌑 Tabs

---

## Basic

`NTabs` are used to navigate between different content and also they have robust focus management and keyboard navigation support.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTabsBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsBasic.vue
::
:::

## Color

`tabs="{color}"` - change the color of the tabs.

> You use `tabs="{color}"` in `NTabsList` and the color is applied to the active trigger.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTabsColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsColor.vue
::
:::

## Disabled

Enabling `disabled` property of a `NTabTrigger` prevents user interaction.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTabsDisabled
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsDisabled.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/tabs.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/tabs.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue
