---
description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.'
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

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueRadioGroupBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/radio/ExampleVueRadioGroupBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/radio-group#root" title="Radix Radio Group Root API." target="_blank"}

### Slots

| Name      | Props   | Description     |
| --------- | ------- | --------------- |
| `default` | `items` | The item slot.  |
| `label`   | -       | The label slot. |
| `icon`    | -       | The icon slot.  |

### Presets

@@@ ../packages/preset/src/_shortcuts/radio-group.ts [shortcuts/radio-group.ts]

### Props

@@@ ../packages/nuxt/src/runtime/types/radio-group.ts [types/radio-group.ts]

### Components

:::CodeGroup
::div{label="RadioGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/radio-group/RadioGroup.vue

::
::div{label="RadioGroupItem.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/radio-group/RadioGroupItem.vue

:::
