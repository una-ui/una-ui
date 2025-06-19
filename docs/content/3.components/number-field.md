---
description: 'A number field lets users enter and adjust numeric values with optional increment and decrement controls.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/number-field/NumberField.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/number-field
    target: _blank
---

## Examples

### Basic

| Prop                 | Default | Type                  | Description                                                                                                                                                                                                                       |
| -------------------- | ------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`                 | `'div'` | `AsTag \| Component`  | The element or component this component should render as. Can be overwritten by `asChild`.                                                                                                                                        |
| `asChild`            | —       | `boolean`             | Change the default rendered element for the one passed as a child, merging their props and behavior.                                                                                                                              |
| `defaultValue`       | —       | `number`              | —                                                                                                                                                                                                                                 |
| `disabled`           | —       | `boolean`             | When true, prevents the user from interacting with the Number Field.                                                                                                                                                              |
| `disableWheelChange` | —       | `boolean`             | When true, prevents the value from changing on wheel scroll.                                                                                                                                                                      |
| `formatOptions`      | —       | `NumberFormatOptions` | Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user. Read more about [formatOptions](https://reka-ui.com/docs/components/number-field#example). |
| `id`                 | —       | `string`              | Id of the element                                                                                                                                                                                                                 |
| `invertWheelChange`  | —       | `boolean`             | When true, inverts the direction of the wheel change.                                                                                                                                                                             |
| `locale`             | —       | `string`              | The locale to use for formatting numeric values                                                                                                                                                                                   |
| `leading`            | —       | `string`              | Change decrement icon                                                                                                                                                                                                             |
| `trailing`           | —       | `string`              | Change increment icon                                                                                                                                                                                                             |
| `size`               | —       | `string`              | Change number field size                                                                                                                                                                                                          |
| `max`                | —       | `number`              | The largest value allowed for the input.                                                                                                                                                                                          |
| `min`                | —       | `number`              | The smallest value allowed for the input.                                                                                                                                                                                         |
| `modelValue`         | —       | `number \| null`      | —                                                                                                                                                                                                                                 |
| `name`               | —       | `string`              | The name of the field. Submitted with its owning form as part of a name/value pair.                                                                                                                                               |
| `required`           | —       | `boolean`             | When true, indicates that the user must set the value before the owning form can be submitted.                                                                                                                                    |
| `step`               | `1`     | `number`              | The amount that the input value changes with each increment or decrement "tick".                                                                                                                                                  |
| `stepSnapping`       | `true`  | `boolean`             | When false, prevents the value from snapping to the nearest increment of the step value.                                                                                                                                          |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldBasic.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/number-field#root" title="Reka Number Field API" target="_blank"}

## Slots

| Name        | Props | Description                                                                                       |
| ----------- | ----- | ------------------------------------------------------------------------------------------------- |
| `default`   | -     | Allows advanced customization using sub-components, replacing the default number field structure. |
| `content`   | -     | Replaces the entire content container, including increment, decrement and input.                  |
| `increment` | -     | Custom content for the number field increment.                                                    |
| `decrement` | -     | Custom content for the number field decrement.                                                    |

### Custom Rendering

Use the `default` slot for complete control over the number field's structure. This lets you compose the number field using its individual sub-components (such as increment, decrement, and input elements, as listed in the [Slots](#slots) section), similar to approaches used in libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldCustomRendering.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/number-field.ts [shortcuts/number-field.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/number-field.ts [types/number-field.ts]

## Components

:::CodeGroup
::div{label="NumberField.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/number-field/NumberField.vue

::
::div{label="NumberFieldContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/number-field/NumberFieldContent.vue

::
::div{label="NumberFieldInput.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/number-field/NumberFieldInput.vue

::
::div{label="NumberFieldIncrement.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/number-field/NumberFieldIncrement.vue

::
::div{label="NumberFieldDecrement.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/number-field/NumberFieldDecrement.vue

::
:::
