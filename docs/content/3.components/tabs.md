---
description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/tabs.vue
    target: _blank
  - value: API reference
    icon: icons/radix-vue.svg
    to: https://www.radix-vue.com/components/tabs
    target: _blank
---
## Examples

### Basic

| Prop       | Default | Type      | Description                 |
| ---------- | ------- | --------- | --------------------------- |
| `content`  | -       | `string`  | Set the tooltip content.    |
| `disabled` | -       | `boolean` | Set to disable the tooltip. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTabsBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/tabs#root" title="Radix Tabs Root API." target="_blank"}

### Variant and Color

| Prop                | Default      | Type     | Description                                        |
| ------------------- | ------------ | -------- | -------------------------------------------------- |
| `tabs`              | `soft-black` | `string` | Set the tabs variant and color.                    |
| `_tabsTrigger.tabs` | -            | `string` | Set the tabs variant and color via `_tabsTrigger`. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsColor.vue
::
:::

:read-more{to="/components/button#color" title="Button Colors" target="_blank"}

### Disabled

| Prop                    | Default | Type      | Description                               |
| ----------------------- | ------- | --------- | ----------------------------------------- |
| `disabled`              | `false` | `boolean` | Set the tabs disabled.                    |
| `_tabsTrigger.disabled` | -       | `boolean` | Set the tabs disabled via `_tabsTrigger`. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsDisabled.vue
::
:::

### Size

| Prop                | Default | Type     | Description           |
| ------------------- | ------- | -------- | --------------------- |
| `size`              | -       | `string` | Set the tabs size.    |
| `_tabsTrigger.size` | -       | `string` | Set the trigger size. |
| `_tabsContent.size` | -       | `string` | Set the content size. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsSize.vue
::
:::

:read-more{to="/components/button#size" title="Button Size" target="_blank"}

### Slots

| Name      | Props   | Description       |
| --------- | ------- | ----------------- |
| `list`    | `items` | The list slot.    |
| `trigger` | -       | The trigger slot. |
| `content` | `item`  | The content slot. |

## Presets
@@@ ../packages/preset/src/_shortcuts/tabs.ts [shortcuts/tabs.ts]

## Props
@@@ ../packages/nuxt/src/runtime/types/tabs.ts [types/tabs.ts]

## Components

:::CodeGroup
::div{label="Tabs.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue

::
::div{label="TabsRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsRoot.vue

::
::div{label="TabsList.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsList.vue

::
::div{label="TabsTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsTrigger.vue

::
::div{label="TabsContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/TabsContent.vue

::
:::
