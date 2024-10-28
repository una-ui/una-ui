---
description: 'NTextarea component - used to collect data from the user.'
---

## Basic

You can use [NInput](input) with the `textarea"` type to create a basic textarea.

::alert{type=info}
This component shares the same API as the [NInput](input) component. So you can use all the same props, variants, slots, events, etc. as the input component.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTextareaBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaBasic.vue
::
:::

## Rows and Cols

`rows={value}` - Set the number of rows for the textarea.

`cols={value}` - Set the number of columns for the textarea.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTextareaRowsCols
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaRowsCols.vue
::
:::

## Autosizing

`autoresize={value}` - Enable autosizing of the textarea, you can also pass a number to set the maximum number of rows.

| Value    | Description                                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `true`   | The textarea will automatically adjust its height to fit the content.                                                   |
| `false`  | The textarea will not automatically adjust its height to fit the content.                                               |
| `number` | The textarea will automatically adjust its height to fit the content, but will not exceed the specified number of rows. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTextareaAutoresize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaAutoresize.vue
::
:::

## Resizing

`resize="{value}"` - change the resize behavior of the textarea.

| Value  | Description                                                 |
| ------ | ----------------------------------------------------------- |
| `none` | The textarea will not be resizable. (Default)               |
| `null` | The textarea will be resizable vertically and horizontally. |
| `y`    | The textarea will be resizable vertically.                  |
| `x`    | The textarea will be resizable horizontally.                |

::alert{type=info}
The examples below utilize `NFormGroup`. Refer to the [FormGroup](form-group) section for more details.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTextareaResize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaResize.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/input.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/input.ts

## Component

@@@ ../packages/nuxt/src/runtime/components/forms/Input.vue
