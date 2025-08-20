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

| Prop                 | Default | Type             | Description                                                                              |
| -------------------- | ------- | ---------------- | ---------------------------------------------------------------------------------------- |
| `disabled`           | -       | `boolean`        | When true, prevents the user from interacting with the Number Field.                     |
| `disableWheelChange` | -       | `boolean`        | When true, prevents the value from changing on wheel scroll.                             |
| `invertWheelChange`  | -       | `boolean`        | When true, inverts the direction of the wheel change.                                    |
| `locale`             | -       | `string`         | The locale to use for formatting numeric values                                          |
| `max`                | -       | `number`         | The largest value allowed for the input.                                                 |
| `min`                | -       | `number`         | The smallest value allowed for the input.                                                |
| `modelValue`         | -       | `number \| null` | Value of the input. Can be binded as `v-model`.                                          |
| `step`               | `1`     | `number`         | The amount that the input value changes with each increment or decrement "tick".         |
| `stepSnapping`       | `true`  | `boolean`        | When false, prevents the value from snapping to the nearest increment of the step value. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldBasic.vue
::
:::

:read-more{to="https://reka-ui.com/docs/components/number-field#root" title="Reka Number Field API" target="_blank"}

### Variant & Color

| Prop           | Default           | Type                | Description                                    |
| -------------- | ----------------- | ------------------- | ---------------------------------------------- |
| `number-field` | `outline-primary` | `{variant}-{color}` | Controls the visual style of the number field. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `solid`   | The solid variant.          |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldVariant.vue
::
:::

### Size

| Prop   | Default | Type     | Description                                        |
| ------ | ------- | -------- | -------------------------------------------------- |
| `size` | `md`    | `string` | Allows you to change the size of the number-field. |

> 🚀 Adjust number-field size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the number-field scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldSize.vue
::
:::

### Icons

| Prop       | Default | Type     | Description                           |
| ---------- | ------- | -------- | ------------------------------------- |
| `leading`  | -       | `string` | The icon to display before the input. |
| `trailing` | -       | `string` | The icon to display after the input.  |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldLeadingAndTrailing
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldLeadingAndTrailing.vue
::
:::

### Form Field

The `NNumberField` component can be easily embedded within the `NFormField` component.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNumberFieldForm
::
::div{label="Code"}
@@@ ./components/content/examples/vue/number-field/ExampleVueNumberFieldForm.vue
::
:::

:read-more{to="/components/form" title="Form component" target="_blank"}

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
