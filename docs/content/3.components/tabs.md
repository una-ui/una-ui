---
description: 'NTabs are used to navigate between different content and also they have robust focus management and keyboard navigation support.'
---

# 🟢 Tabs

---

## Basic

`NTabs` are used to navigate between different content and also they have robust focus management and keyboard navigation support.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTabsBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsBasic.vue
::
:::

## Variant and Color

`tabs="{variant}-{color}"` is used to set the variant of the tabs. The default variant is `soft-black`.

| Prop                | Description                                        |
| ------------------- | -------------------------------------------------- |
| `tabs`              | Set the tabs variant and color.                    |
| `_tabsTrigger.tabs` | Set the tabs variant and color via `_tabsTrigger`. |

::alert{type="info"}
`NTabs` is wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available through the `_tabsTrigger` prop.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTabsColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsColor.vue
::
:::

## Disabled

`disabled="{boolean}"` is used to disable the tabs. The default value is `false`.

| Prop                    | Description                               |
| ----------------------- | ----------------------------------------- |
| `disabled`              | Set the tabs disabled.                    |
| `_tabsTrigger.disabled` | Set the tabs disabled via `_tabsTrigger`. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTabsDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsDisabled.vue
::
:::

## Size

| Prop                | Description           |
| ------------------- | --------------------- |
| `size`              | Set the tabs size.    |
| `_tabsTrigger.size` | Set the trigger size. |
| `_tabsContent.size` | Set the content size. |

> 🚀 You can freely adjust the size of the tabs using any size imaginable. No limits exist, and you aan use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the tabs scale depends on the `tabs-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTabsSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsSize.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/tabs.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/tabs.ts

## Component

:::CodeGroup
::div{label="Tabs" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue

::
::div{label="TabsRoot"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsRoot.vue

::
::div{label="TabsList"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsList.vue

::
::div{label="TabsTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsTrigger.vue

::
::div{label="TabsContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsContent.vue

::
:::
