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

`Ntoggle`  is a user interface element that allows users to switch between two states, typically representing opposite conditions such as `on | off`. For more details on the API, please visit the [Radix-ui toggle](https://www.radix-vue.com/components/toggle.html#api-reference) documentation.

| Prop           | Type      | Default | Description                                                                           |
| -------------- | --------- | ------- | ------------------------------------------------------------------------------------- |
| `defaultValue` | `boolean` | `-`     | The initial pressed state of the toggle when it is first rendered. Use this when you don't need to manage its open state manually. |
| `disabled`     | `boolean` | `false` | When set to `true`, disables user interaction with the toggle.                        |
| `pressed`      | `boolean` | `-`     | The controlled pressed state of the toggle, which can be bound using `v-model`.       |
| `label`        | `string`  | `-`     | Insert text inside the toggle                                                         |
| `size`         | `{size}`  | `-`     | Adjust toggle size                                                               |
| `rounded`      | `{radius}`| `md`    | Change corner radius                                                                  |


:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToggleBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleBasic.vue
::
:::

## Icon

| Prop           | Type      | Default | Description                |
| -------------- | --------- | ------- | -------------------------- |
| `icon`         | `string`  | `-`     | Change label text to icon. |


:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToggleIcon
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toggle/ExampleVueToggleIcon.vue
::
:::

## Color

| Prop           | Type      | Default | Description                                    |
| -------------- | --------- | ------- | ---------------------------------------------- |
| `toggle`       | `{color}` | `-`     | Change toggle color while `data-state` is `on` |


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