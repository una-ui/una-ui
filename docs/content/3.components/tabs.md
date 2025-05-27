---
description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/tabs
    target: _blank
---

## Examples

### Basic

| Prop       | Default | Type      | Description              |
| ---------- | ------- | --------- | ------------------------ |
| `content`  | -       | `string`  | Set the tabs content.    |
| `disabled` | -       | `boolean` | Set to disable the tabs. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/tabs#root" title="Reka Tabs Root API." target="_blank"}

### Variant and Color

| Prop                         | Default      | Type     | Description                                                          |
| ---------------------------- | ------------ | -------- | -------------------------------------------------------------------- |
| `tabs-active`                | `soft-black` | `string` | Controls the appearance of active tabs by setting variant and color. |
| `tabs-inactive`              | -            | `string` | Defines the variant and color styling for inactive tabs.             |
| `_tabsTrigger.tabs-active`   | `soft-black` | `string` | Overrides the active tab styling at the individual trigger level.    |
| `_tabsTrigger.tabs-inactive` | -            | `string` | Overrides the inactive tab styling at the individual trigger level.  |

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
| `size`              | `sm`    | `string` | Set the tabs size.    |
| `_tabsTrigger.size` | `sm`    | `string` | Set the trigger size. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsSize.vue
::
:::

:read-more{to="/components/button#size" title="Button Size" target="_blank"}

## Slots

| Name      | Props   | Description                                                                               |
| --------- | ------- | ----------------------------------------------------------------------------------------- |
| `default` | -       | Allows advanced customization using sub-components, replacing the default tabs structure. |
| `list`    | `items` | The container for tab triggers/buttons that users can click to switch between tabs.       |
| `trigger` | `value` | The clickable tab button that activates its corresponding content panel.                  |
| `content` | `value` | The content panel that displays when its corresponding trigger is selected.               |

### Custom Rendering

Use the `default` slot for full control over the tabs's structure. This allows you to compose the tabs using its individual sub-components (like `TabsList`, `TabsTrigger`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTabsCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tabs/ExampleVueTabsCustomRendering.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/tabs.ts [shortcuts/tabs.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/tabs.ts [types/tabs.ts]

## Components

:::CodeGroup
::div{label="Tabs.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tabs/Tabs.vue

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
