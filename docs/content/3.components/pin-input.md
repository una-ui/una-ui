---
description: 'Pin Input is a component for entering short sequences of numbers or characters, commonly used for verification codes or PINs.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/pin-input/PinInput.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/pin-input
    target: _blank
---

## Examples

### Basic

| Prop           | Type                          | Default | Description                                                                                          |
| -------------- | ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `defaultValue` | `PinInputValue<Type>`         | -       | Sets the initial values of the pin inputs when rendered. Use this for uncontrolled pin input state.  |
| `disabled`     | `boolean`                     | -       | Disables the pin input, preventing user interaction when set to `true`.                              |
| `maxLength`    | `number`                      | -       | Specifies the number of input fields for the pin input, determining the required PIN or code length. |
| `mask`         | `boolean`                     | -       | Masks the pin input values as password fields when enabled.                                          |
| `modelValue`   | `PinInputValue<Type> \| null` | -       | Controls the value of the pin input. Supports two-way binding with `v-model`.                        |
| `otp`          | `boolean`                     | -       | Enables OTP auto-detection and autocomplete on supported mobile devices when set to `true`.          |
| `placeholder`  | `string`                      | -       | Specifies the placeholder character to display in empty pin input fields.                            |
| `type`         | `Type`                        | `text`  | Sets the input type for the pin input fields.                                                        |
| `groupBy`      | `number`                      | `0`     | Specifies the number of input fields to group together.                                              |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputBasic.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/pin-input#root" title="Pin Input Root API" target="_blank"}

### Variant & Color

| Prop        | Default           | Type                | Description                                 |
| ----------- | ----------------- | ------------------- | ------------------------------------------- |
| `pin-input` | `outline-primary` | `{variant}-{color}` | Controls the visual style of the pin input. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `solid`   | The solid variant.          |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputVariant.vue
::
:::

### Size

| Prop   | Default | Type     | Description                                     |
| ------ | ------- | -------- | ----------------------------------------------- |
| `size` | `md`    | `string` | Allows you to change the size of the pin-input. |

> 🚀 Adjust pin-input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the pin-input scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputSize.vue
::
:::

### Separator

| Prop        | Default | Type                | Description                                                                                                                 |
| ----------- | ------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `separator` | `false` | `boolean \| string` | Controls separators between input groups: `false` for none, `true` for default icon (minus), or provide a custom icon name. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputSeparator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputSeparator.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Form Field

The `NPinInput` component can be easily embedded within the `NFormField` component.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputForm
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputForm.vue
::
:::

:read-more{to="/components/form" title="Form component" target="_blank"}

## Slots

| Name        | Props | Description                                                                                    |
| ----------- | ----- | ---------------------------------------------------------------------------------------------- |
| `default`   | -     | Allows advanced customization using sub-components, replacing the default pin-input structure. |
| `group`     | -     | Replaces the entire group container, including input and separator.                            |
| `slot`      | -     | Custom input slot                                                                              |
| `separator` | -     | Custom separator for the pin-input.                                                            |

### Custom Rendering

Use the `default` slot for complete control over the pin input's structure. This allows you to compose the pin input using its individual sub-components (such as input and separator elements, as listed in the [Slots](#slots) section), similar to approaches used in libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputCustomRendering.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/pin-input.ts [shortcuts/pin-input.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/pin-input.ts [types/pin-input.ts]

## Components

:::CodeGroup
::div{label="PinInput.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/pin-input/PinInput.vue

::
::div{label="PinInputGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/pin-input/PinInputGroup.vue

::
::div{label="PinInputSlot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/pin-input/PinInputSlot.vue

::
::div{label="PinInputSeparator.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/pin-input/PinInputSeparator.vue

::
:::
