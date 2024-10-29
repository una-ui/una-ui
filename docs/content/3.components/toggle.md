---
description: 'A two-state button that can be either on or off.'
navBadges:
  - value: New
    type: lime
badges:
  - value: API reference
    to: https://www.radix-vue.com/components/toggle
    target: _blank
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Toggle.vue
    target: _blank
---

## Examples

### Basic

| Prop           | Type      | Default | Description                                                                                                                        |
| -------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue` | `boolean` | `-`     | The initial pressed state of the toggle when it is first rendered. Use this when you don't need to manage its open state manually. |
| `disabled`     | `boolean` | `false` | When set to `true`, disables user interaction with the toggle.                                                                     |
| `pressed`      | `boolean` | `-`     | The controlled pressed state of the toggle, which can be bound using `v-model`.                                                    |

:read-more{to="/components/button" title="Button component" target="_blank"}

:read-more{to="https://www.radix-vue.com/components/toggle#root" title="Radix Toggle Root API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueToggleBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleBasic.vue
::
:::

### Variant and Color

| Prop         | Type     | Default       | Description                                    |
| ------------ | -------- | ------------- | ---------------------------------------------- |
| `toggle-on`  | `string` | `soft-accent` | Change the color of the toggle when it is on.  |
| `toggle-off` | `string` | `ghost-gray`  | Change the color of the toggle when it is off. |


:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueToggleColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleColor.vue
::
:::

### Slots

:read-more{to="/components/button#slots" title="Button component slots" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueToggleSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleSlot.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/toggle.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/toggle.ts

## Component

:::CodeGroup
::div{label="Toggle" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/Toggle.vue
::
:::
