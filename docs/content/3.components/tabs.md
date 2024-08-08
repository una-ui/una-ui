---
description: 'NTabs are used to navigate between different content and also they have robust focus management and keyboard navigation support.'
---

# 🟢 Tabs

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

## Size

| Prop                  | Description           |
| --------------------- | --------------------- |
| `size`                | Set the tabs size. |
| `_tabsTrigger.size`      | Set the trigger size. |
| `_tabsContent.size` | Set the content size. |

> 🚀 You can freely adjust the size of the tabs using any size imaginable. No limits exist, and you aan use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the tabs scale depends on the `tabs-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTabsSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsSize.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/tabs.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/tabs.ts

## Component

:::CodeGroup
::code-block{label="Tabs" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue

::
::code-block{label="TabsRoot"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsRoot.vue

::
::code-block{label="TabsList"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsList.vue

::
::code-block{label="TabsTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsTrigger.vue

::
::code-block{label="TabsContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsContent.vue

::
:::
