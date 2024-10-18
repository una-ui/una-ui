---
description: 'NPinInput is used to input a sequence of one-character alphanumeric inputs.'
---

# 🟢 PinInput

---

## Basic

`NPinInput` is used to input a sequence of one-character alphanumeric inputs.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePinInputBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputBasic.vue
::
:::

## Variant

`pin-input="{variant}"` is used to set the variant of the pin-input. The default variant is `outline`.

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `solid`   | The solid variant.          |
| `~`       | The unstyle or base variant |

::alert{type="info"}
  If you want to change the default variant or add new variant, you can do so through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePinInputVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputVariant.vue
::
:::

## Color

`pin-input="{variant}-{color}"` - change the color of the pin-input.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVuePinInputColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputColor.vue
::
:::