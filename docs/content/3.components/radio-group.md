---
description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/radio-group/RadioGroup.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/radio-group
    target: _blank
---

## Examples

### Basic

| Prop           | Default | Type                     | Description                                                                  |
| -------------- | ------- | ------------------------ | ---------------------------------------------------------------------------- |
| `defaultValue` | -       | `string`                 | The value of the radio item that should be checked when initially rendered.  |
| `disabled`     | `false` | `boolean`                | When true, prevents the user from interacting with radio items.              |
| `modelValue`   | -       | `string`                 | The controlled value of the radio item to check. Can be binded as `v-model`. |
| `orientation`  | -       | `vertical`, `horizontal` | The orientation of the component.                                            |
| `items`        | -       | `RadioGroupItem[]`       | The radio items to render.                                                   |

| RadioGroupItem Prop | Default | Type      | Description                                                        |
| ------------------- | ------- | --------- | ------------------------------------------------------------------ |
| `value`             | -       | `string`  | The value of the radio item.                                       |
| `disabled`          | `false` | `boolean` | When true, prevents the user from interacting with the radio item. |
| `label`             | -       | `string`  | The label of the radio item.                                       |
| `icon`              | -       | `string`  | The icon of the radio item.                                        |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/radio-group#root" title="Radix Radio Group Root API." target="_blank"}

### Color

| Prop              | Default   | Type      | Description                               |
| ----------------- | --------- | --------- | ----------------------------------------- |
| `radio-group`     | `primary` | `{color}` | Set the color of the radio-group.         |
| `item.radioGroup` | -         | `{color}` | Set the color of the specific radio item. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupColor.vue
::
:::

### Size and Square

| Prop          | Default  | Type     | Description                                                                                                                    |
| ------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `size`        | `md`     | `string` | Sets the size of the radio-group.                                                                                              |
| `square`      | `2.5rem` | `string` | Sets the radio-group to a square shape with specified dimensions. This does not affect the size of the fallback value.         |
| `item.size`   | `md`     | `string` | Sets the size of the specific radio item.                                                                                      |
| `item.square` | `2.5rem` | `string` | Sets the specific radio item to a square shape with specified dimensions. This does not affect the size of the fallback value. |

> 🚀 Adjust radio-group size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupSize.vue
::
:::

### Icon

| Prop        | Default | Type     | Description                               |
| ----------- | ------- | -------- | ----------------------------------------- |
| `icon`      | -       | `string` | The icon to render.                       |
| `item.icon` | -       | `string` | The icon to render for the specific item. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupIcon.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Rounded

| Prop           | Default | Type     | Description                                |
| -------------- | ------- | -------- | ------------------------------------------ |
| `rounded`      | `md`    | `string` | Set the radio-group to be rounded.         |
| `item.rounded` | `md`    | `string` | Set the specific radio item to be rounded. |

> 🚀 Adjust radio-group rounded freely using any value, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:full`).

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupRounded.vue
::
:::

### Slots

| Name      | Props   | Description     |
| --------- | ------- | --------------- |
| `default` | `items` | The item slot.  |
| `label`   | -       | The label slot. |
| `icon`    | -       | The icon slot.  |

::alert{type="info"}
  You can use the `RadioGroupItem` component to render the radio items.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupSlot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio-group/ExampleVueRadioGroupSlot.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/radio-group.ts [shortcuts/radio-group.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/radio-group.ts [types/radio-group.ts]

## Components

:::CodeGroup
::div{label="RadioGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/radio-group/RadioGroup.vue

::
::div{label="RadioGroupItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/radio-group/RadioGroupItem.vue

:::
