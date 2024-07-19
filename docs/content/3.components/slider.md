---
description: 'NSlider component - used to create a range input.'
---

# 🌑 Slider 

## Features

::list{type="primary"}
- **Can be controlled or uncontrolled.**
- **Supports multiple thumbs.**
- **Supports a minimum value between thumbs.**
- **Supports touch or click on track to update value.**
- **Supports Right to Left direction.**
- **Full keyboard navigation.**
- **Customizable.**
::

---

## Basic

use `NSlider` to create a range input.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderBasic.vue
::
:::

## Color

`slider="{color}"` - change the color of the slider.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderColor.vue
::
:::

## Steps

`step="{number}"` - define the step value of the slider.

`min-steps-between-thumbs="{number}"` - define the minimum steps between thumbs.

::alert{type="info"}
To avoid the thumb from overlapping, you can set the `min-steps-between-thumbs` prop.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderSteps
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderSteps.vue
::
:::

## Label

> You can use the `NFormGroup` component to create a label for the slider.

::alert{type="info"}
  Read more about the `NFormGroup` component [here](/form-group).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderLabel
::
 ::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderLabel.vue
::
:::

## Orientation

`orientation={value}` - change the orientation of the slider.

| Value        | Description               |
| ------------ | ------------------------- |
| `horizontal` | The default orientation.  |
| `vertical`   | The vertical orientation. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderOrientation
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderOrientation.vue
::
:::

## Disabled

`disabled` - disable the slider.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderDisabled
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderDisabled.vue
::
:::

## Size

`size="{size}"` - change the size of the slider.

> 🚀 You can freely adjust the size of the slider using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the slider scale depends on the `slider-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSliderSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderSize.vue
::
:::

## Customization

> You can customize the slider using the `una` prop and utility classes.

::alert{type="info"}
  You can also globally customize the slider preset if you want to have a different default style. See [Configuration](/getting-started/configuration) section for more details.
::

:::CodeGroup
  ::code-block{label="Preview" preview}
    :ExampleVueSliderCustom
  ::
  ::code-block{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderCustom.vue
  ::
:::

## Slots

> You can use the following slots to customize the slider.

| Name           | Description                  | Props |
| -------------- | ---------------------------- | ----- |
| `slider-track` | The track of the slider.     | -     |
| `slider-thumb` | The the thumb of the slider. | -     |
| `slider-range` | The the range of the slider. | -     |

## Props
@@@ ../packages/nuxt/src/runtime/types/slider.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/slider.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/forms/Slider.vue
