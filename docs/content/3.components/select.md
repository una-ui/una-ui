---
description: 'NSelect component - used to create a select input.'
---

# 🌑 Select

::list{type="primary"}
- Can be controlled or uncontrolled.
- Offers 2 positioning modes.
- Supports items, labels, groups of items.
- Focus is fully managed.
- Full keyboard navigation.
- Supports custom placeholder.
- Typeahead support.
- Supports Right to Left direction.
::

---

## Basic

use `NSelect` to create a range input.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectBasic.vue
::
:::

## Multiple Group

`multiple-group="{value}"` - enable multiple group items.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectMultipleGroup
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectMultipleGroup.vue
::
:::

## Objects

| Prop              | Description                 |
| ----------------- | --------------------------- |
| `value-attribute` | The attribute of the value. |
| `item-attribute`  | The attribute of the item.  |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectObjects
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectObjects.vue
::
:::
## Label

> You can use the `NFormGroup` component to create a label for the slider.

::alert{type="info"}
  Read more about the `NFormGroup` component [here](form-group).
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
@@@ ../packages/nuxt/src/runtime/types/select.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/select.ts

## Component

### 

:::CodeGroup
::code-block{label="Select" preview}
@@@ ../packages/nuxt/src/runtime/components/forms/select/Select.vue

::
::code-block{label="SelectContent"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectContent.vue

::
::code-block{label="SelectGroup"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectGroup.vue

::
::code-block{label="SelectItem"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItem.vue

::
::code-block{label="SelectItemText"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItemText.vue

::
::code-block{label="SelectLabel"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectLabel.vue

::
::code-block{label="SelectRoot"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectRoot.vue

::
::code-block{label="SelectScrollDownButton"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollDownButton.vue

::
::code-block{label="SelectScrollUpButton"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollUpButton.vue

::
::code-block{label="SelectSeperator"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectSeparator.vue

::
::code-block{label="SelectTrigger"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectTrigger.vue

::
::code-block{label="SelectValue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectValue.vue

::
:::
