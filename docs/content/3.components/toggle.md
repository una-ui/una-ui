---
description: 'A two-state button that can be either on or off.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Toggle.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/toggle
    target: _blank
---

## Examples

### Basic

| Prop           | Default | Type      | Description                                                                                                                        |
| -------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue` | -       | `boolean` | The initial pressed state of the toggle when it is first rendered. Use this when you don't need to manage its open state manually. |
| `disabled`     | `false` | `boolean` | When set to `true`, disables user interaction with the toggle.                                                                     |
| `pressed`      | -       | `boolean` | The controlled pressed state of the toggle, which can be bound using `v-model`.                                                    |

:read-more{to="/components/button" title="Button component" target="_blank"}

:read-more{to="https://www.reka-ui.com/docs/components/toggle#root" title="Radix Toggle Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleBasic.vue
::
:::

### Variant and Color

| Prop         | Default       | Type                | Description                                    |
| ------------ | ------------- | ------------------- | ---------------------------------------------- |
| `toggle-on`  | `soft-accent` | `{variant}-{color}` | Change the color of the toggle when it is on.  |
| `toggle-off` | `ghost-gray`  | `{variant}-{color}` | Change the color of the toggle when it is off. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleColor.vue
::
:::

:read-more{to="/components/button#color" title="Button variant and color section" target="_blank"}

### Slots

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToggleSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleSlot.vue
::
:::

:read-more{to="/components/button#slots" title="Button component slots" target="_blank"}

## Presets

@@@ ../packages/preset/src/_shortcuts/toggle.ts [shortcuts/toggle.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/toggle.ts [types/toggle.ts]

## Components

:::CodeGroup
::div{label="Toggle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Toggle.vue

::
:::
