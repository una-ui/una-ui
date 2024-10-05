---
description: 'NToggle component - used to create a toggle button.'
---

# 🟢 Toggle

::list{type="primary"}
- On/Off States.
- Accessible Labeling.
- Iconography.
- Customization.
- Disabled State.
- Keyboard Accessibility.
::

---

## Basic

`NToggle`  is a user interface element that allows users to switch between two states, typically representing opposite conditions such as `on | off`. For more details on the API, please visit the [Radix-ui toggle](https://www.radix-vue.com/components/toggle.html#api-reference) documentation.

| Prop           | Type      | Default | Description                                                                                                                        |
| -------------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `defaultValue` | `boolean` | `-`     | The initial pressed state of the toggle when it is first rendered. Use this when you don't need to manage its open state manually. |
| `disabled`     | `boolean` | `false` | When set to `true`, disables user interaction with the toggle.                                                                     |
| `pressed`      | `boolean` | `-`     | The controlled pressed state of the toggle, which can be bound using `v-model`.                                                    |

::alert{type="info"}
`NToggle` is wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available to use directly.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToggleBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleBasic.vue
::
:::

## Variant and Color

| Prop         | Type     | Default       | Description                                    |
| ------------ | -------- | ------------- | ---------------------------------------------- |
| `toggle-on`  | `string` | `soft-accent` | Change the color of the toggle when it is on.  |
| `toggle-off` | `string` | `ghost-gray`  | Change the color of the toggle when it is off. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToggleColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleColor.vue
::
:::

## Slot

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToggleSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleSlot.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/toggle.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/toggle.ts

## Component

### 

:::CodeGroup
::code-block{label="Pagination" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/Toggle.vue
