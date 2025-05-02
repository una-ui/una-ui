---
description: 'Accessible resizable panel groups and layouts with keyboard support.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/resizable/Resizable.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/resizable
    target: _blank
---

::alert
The Resizable follows a strict pattern using reusable components (`NResizable`, `NResizablePanel`, `NResizableHandle`) listed in the [Components](#components) section, similar to libraries like `shadcn/ui`. This atomic way is necessary due to complex nesting requirements of resizable layers.
::

## Examples

### Basic

| Prop               | Default          | Type                     | Description                                                       |
| ------------------ | ---------------- | ------------------------ | ----------------------------------------------------------------- |
| `autoSaveId`       | `null`           | `string`, `null`         | Unique id used to auto-save group arrangement via `localStorage`. |
| `direction*`       |                  | `vertical`, `horizontal` | The group orientation of resizable; required prop                 |
| `id`               | -                | `string`, `null`         | Group id; falls back to `useId` when not provided.                |
| `keyboardResizeBy` | `10`             | `number`, `null`         | Step size when arrow key was pressed.                             |
| `storage`          | `defaultStorage` | `PanelGroupStorage`      | Custom storage API; defaults to localStorage                      |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueResizableBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/resizable/ExampleVueResizableBasic.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/splitter#group" title="Reka Splitter Root API." target="_blank"}

::alert
We can use the `autoSaveId` prop to persist the layout data into the `localStorage`. Try changing the layout and then refresh the page to see the layout persist.
::

### Handle

| Prop               | Default                  | Type                | Description                                                                      |
| ------------------ | ------------------------ | ------------------- | -------------------------------------------------------------------------------- |
| `icon`             | `i-lucide-grip-vertical` | `string`            | Custom handle icon of resizable handle                                           |
| `resizable-handle` | `outline-white`          | `{variant}-{color}` | The color of the handle.                                                         |
| `disabled`         | -                        | `boolean`           | Disable drag handle                                                              |
| `id`               | -                        | `string`            | Resize handle id (unique within group); falls back to `useId` when not provided. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueResizableHandle
::
::div{label="Code"}
@@@ ./components/content/examples/vue/resizable/ExampleVueResizableHandle.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/splitter#resize-handle" title="Reka Splitter Handle API." target="_blank"}

### Panel

| Prop            | Default | Type             | Description                                                                                                    |
| --------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `collapsedSize` | -       | `number`         | The size of panel when it is collapsed.                                                                        |
| `collapsible`   | -       | `boolean`        | Should panel collapse when resized beyond its `minSize`. When `true`, it will be collapsed to `collapsedSize`. |
| `id`            | -       | `string`, `null` | Panel id (unique within group); falls back to `useId` when not provided.                                       |
| `defaultSize`   | -       | `number`         | Initial size of panel (numeric value between 1-100)                                                            |
| `maxSize`       | -       | `number`         | The maximum allowable size of panel (numeric value between 1-100); defaults to 100                             |
| `minSize`       | -       | `number`         | The minimum allowable size of panel (numeric value between 1-100); defaults to 10                              |
| `order`         | -       | `number`         | The order of panel within group; required for groups with conditionally rendered panels                        |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueResizablePanel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/resizable/ExampleVueResizablePanel.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/splitter#panel" title="Reka Splitter Panel API." target="_blank"}

## Presets

@@@ ../packages/preset/src/_shortcuts/resizable.ts [shortcuts/resizable.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/resizable.ts [types/resizable.ts]

## Components

:::CodeGroup
::div{label="Resizable.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/resizable/Resizable.vue

::
::div{label="ResizableHandle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/resizable/ResizableHandle.vue

::
::div{label="ResizablePanel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/resizable/ResizablePanel.vue

::
:::
