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
The Resizable follows a strict pattern using reusable components (`NResizable`, `NResizablePanel`, `NResizableHandle`) rather than offering multiple usage patterns like other components. This atomic way is necessary due to complex nesting requirements of resizable layers.

Despite this constrained pattern, each individual component maintains complete customization support.
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

:read-more{to="https://www.reka-ui.com/docs/components/splitter#root" title="Reka Splitter Root API." target="_blank"}
