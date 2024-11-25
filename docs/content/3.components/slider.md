---
description: 'An input where the user selects a value from within a given range.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/Slider.vue
    target: _blank
  - value: API reference
    icon: /icons/radix-vue.svg
    to: https://www.radix-vue.com/components/slider
    target: _blank
---

## Examples

### Basic

| Prop                    | Default | Type       | Description                                                                                                   |
| ----------------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| `modelValue`            | -       | `number`   | The controlled value of the slider. Can be bind as `v-model`.                                                 |
| `defaultValue`          | `[0]`   | `number[]` | The value of the slider when initially rendered. Use when you do not need to control the state of the slider. |
| `dir`                   | `ltr`   | `string`   | The direction of the slider.                                                                                  |
| `disabled`              | `false` | `boolean`  | When `true`, prevents the user from interacting with the slider.                                              |
| `inverted`              | `false` | `boolean`  | When `true`, the slider will be inverted.                                                                     |
| `max`                   | `100`   | `number`   | The maximum value of the slider.                                                                              |
| `min`                   | `0`     | `number`   | The minimum value of the slider.                                                                              |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/slider#root" title="Radix Slider Root API." target="_blank"}

### Color

| Prop     | Default   | Type     | Description                     |
| -------- | --------- | -------- | ------------------------------- |
| `slider` | `primary` | `string` | Change the color of the slider. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderColor.vue
::
:::

### Steps

| Prop                    | Default | Type     | Description                                          |
| ----------------------- | ------- | -------- | ---------------------------------------------------- |
| `minStepsBetweenThumbs` | `0`     | `number` | The minimum permitted steps between multiple thumbs. |
| `step`                  | `1`     | `number` | The step value of the slider.                        |

::alert{type="info"}
To avoid the thumbs from overlapping, you can set the `minStepsBetweenThumbs` prop.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderSteps
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderSteps.vue
::
:::

### Form Group

You can use the `slider` component inside the `form-group` component, or you can use it with the `label` component.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderLabel
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderLabel.vue
::
:::

:read-more{to="/components/form-group" title="Form-group component" target="_blank"}

:read-more{to="/components/label" title="Label component" target="_blank"}

### Orientation

Configure the slider orientation by using the `orientation` prop.

| Prop          | Default      | Type                    | Description                    |
| ------------- | ------------ | ----------------------- | ------------------------------ |
| `orientation` | `horizontal` | `vertical`, `horizontal` | The orientation of the slider. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderOrientation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderOrientation.vue
::
:::

### Size

Adjust the slider size without limits. Use `breakpoints` (e.g., `sm:sm`, `xs:lg`) for responsive sizes or `states` (e.g., `hover:lg`, `focus:3xl`) for state-based sizes.

| Prop   | Default | Type     | Description                  |
| ------ | ------- | -------- | ---------------------------- |
| `size` | `md`    | `string` | Set the slider general size. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSliderSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderSize.vue
::
:::

### Customization

Configure the progress using the `una` prop and utility classes.

:::CodeGroup
  ::div{label="Preview" preview}
    :ExampleVueSliderCustom
  ::
  ::div{label="Code"}
@@@ ./components/content/examples/vue/slider/ExampleVueSliderCustom.vue
  ::
:::

### Slots

| Name           | Props | Description              |
| -------------- | ----- | ------------------------ |
| `slider-track` | -     | The track of the slider. |
| `slider-thumb` | -     | The thumb of the slider. |
| `slider-range` | -     | The range of the slider. |

## Presets

@@@ ../packages/preset/src/_shortcuts/slider.ts [shortcuts/slider.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/slider.ts [types/slider.ts]

## Components

:::CodeGroup
::div{label="Slider.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/Slider.vue
::
:::
