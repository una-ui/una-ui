---
description: 'A two-state button that can be either on or off.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Toggle.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/toggle
    target: _blank
---

## Examples

# Basic

`NPinInput` is used to input a sequence of one-character alphanumeric inputs.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputBasic
::
::div{label="Code"}
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
::div{label="Preview" preview}
:ExampleVuePinInputVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputVariant.vue
::
:::

## Color

`pin-input="{variant}-{color}"` - change the color of the pin-input.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputColor.vue
::
:::

## Separator

| Prop        | Type     | Default | Description         |
| ----------- | -------- | ------- | ------------------- |
| `separator` | `string` | -       | The separator icon. |

::alert{type="info"}
You can use any icon provided by the [NIcon](icon) component.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputSeparator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputSeparator.vue
::
:::

## Disabled

`disabled` - add a disabled state to the pin-input.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputDisabled.vue
::
:::

## Size

`size="{size}"` - change the size of the pin-input.

> 🚀 You can freely adjust the size of the pin-input using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding`, `icons`, and `text-size` of the pin-input scale depends on the `size`. If you want to change the `text-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputSize.vue
::
:::

## Count

`count` - set the prop count to the quantity you need to the pin-input.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputCount
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputCount.vue
::
:::

## Root

Configure the pin-input root using the `_pinInputRoot` prop.

| Prop         | Default | Type        | Description                                                         |
| ------------ | ------- | ----------- | ------------------------------------------------------------------- |
| defaultValue | -       | `string[]`  | Set the default value state of the of the pin input.                |
| dir          | -       | `ltr` `rtl` | Set the direction of the pin input.                                 |
| disabled     | -       | `boolean`   | When `true`, prevents the user from interacting with the pin input. |
| mask         | -       | `boolean`   | When `true`, pin inputs will be treated as password.                |
| otp          | -       | `boolean`   | When `true`, mobile devices will automatically detect the OTP.      |
| placeholder  | `○`     | `string`    | The placeholder of the pin-input                                    |

::alert{type="info"}
For more props and information, please refer to the [Radix PIN Input Root documentation](https://www.radix-vue.com/components/pin-input.html#root){target="_blank"}.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePinInputRoot
::
::div{label="Code"}
@@@ ./components/content/examples/vue/pin-input/ExampleVuePinInputRoot.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/pin-input.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/pin-input.ts

## Components

You can use any sub-components of `NPinInput`, such as `NPinInputSeparator`, `NTooltipInput`, which are defined in the Radix Tooltip documentation. For more information, please refer to the [Radix PIN Input documentation](https://www.radix-vue.com/components/pin-input.html){target="_blank"}.

:::CodeGroup
::div{label="PinInput"}
@@@ ../packages/nuxt/src/runtime/components/forms/pin-input/PinInput.vue

::
::div{label="PinInputRoot"}
@@@ ../packages/nuxt/src/runtime/components/forms/pin-input/PinInputRoot.vue

::
::div{label="PinInputInput"}
@@@ ../packages/nuxt/src/runtime/components/forms/pin-input/PinInputInput.vue

::
::div{label="PinInputSeparator"}
@@@ ../packages/nuxt/src/runtime/components/forms/pin-input/PinInputSeparator.vue

::
::div{label="PinInputGroup"}
@@@ ../packages/nuxt/src/runtime/components/forms/pin-input/PinInputGroup.vue

::
:::
