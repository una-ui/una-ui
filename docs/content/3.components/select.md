---
description: 'Displays a list of options for the user to pick from—triggered by a button.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/select/Select.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/select
    target: _blank
---

## Examples 

### Basic

| Name           | Default | Type      | Description                                                                                                     |
| -------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `items`        | -       | `array`   | Set the select items.                                                                                           |
| `placeholder`  | -       | `string`  | The content that will be rendered inside the SelectValue when no value or defaultValue is set.                  |
| `label`        | -       | `string`  | Set the select items label.                                                                                     |
| `defaultOpen`  | -       | `boolean` | The open state of the select when it is initially rendered. Use when you do not need to control its open state. |
| `defaultValue` | -       | `string`  | The value of the select when initially rendered. Use when you do not need to control the state of the Select    |
| `open`         | -       | `boolean` | The controlled open state of the Select. Can be bind as `v-model:open`.                                         |
| `modelValue`   | -       | `string`  | The controlled value of the Select. Can be bind as `v-model`.                                                   |

:read-more{to="https://www.radix-vue.com/components/select#root" title="Radix Select Root API" target="_blank"}

:read-more{to="https://www.radix-vue.com/components/select#value" title="Radix Select Value API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectBasic.vue
::
:::

### Multiple Group

Automatically groups items by their nested structure.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectMultipleGroup
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectMultipleGroup.vue
::
:::

## Objects

| Prop              | Description                                        |
| ----------------- | -------------------------------------------------- |
| `value-attribute` | The attribute value to be displayed in the select. |
| `item-attribute`  | The attribute value to be displayed in the item.   |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectObjects
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectObjects.vue
::
:::

## Label

> You can use the `NFormGroup` component to create a label for the select.

::alert{type="info"}
  Read more about the `NFormGroup` component [here](form-group).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectLabel
::
 ::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectLabel.vue
::
:::

## Variant and Color

`select="{variant}-{color}"` is used to set the variant of the select. The default variant is `soft-black`.

`select-item="{color}"` is used to set the variant of the select item. The default variant is `soft-black`.

| Prop                    | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `select`                | Set the select variant and color.                      |
| `_selectTrigger.select` | Set the select variant and color via `_selectTrigger`. |

::alert{type="info"}
`NSelect` is wrapped around the [NButton](button) component. This means that all the props and slots of `NButton` are available through the `_selectTrigger` prop.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectColor.vue
::
:::

## Disabled

| Prop                   | Description                |
| ---------------------- | -------------------------- |
| `disabled`             | Disable the select.        |
| `_selectItem.disabled` | Disable the specific item. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectDisabled.vue
::
:::

## Size

| Prop                  | Description           |
| --------------------- | --------------------- |
| `size`                | Set the select size.  |
| `_selectItem.size`    | Set the item size.    |
| `_selectTrigger.size` | Set the trigger size. |

> 🚀 You can freely adjust the size of the select using any size imaginable. No limits exist, and you aan use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `height` and `width` of the select scale depends on the `select-size`. If you want to change the `height` and `width` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSelectSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectSize.vue
::
:::

## Slots

> You can use the following slots to customize the select.

| Name      | Description       | Props   |
| --------- | ----------------- | ------- |
| `trigger` | The trigger slot. | `value` |
| `value`   | The value slot.   | `value` |
| `content` | The content slot. | `items` |
| `label`   | The label slot.   | `label` |
| `item`    | The item slot.    | `item`  |
| `group`   | The group slot.   | `items` |

## Props
@@@ ../packages/nuxt/src/runtime/types/select.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/select.ts

## Component

### 

:::CodeGroup
::div{label="Select" preview}
@@@ ../packages/nuxt/src/runtime/components/forms/select/Select.vue

::
::div{label="SelectContent"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectContent.vue

::
::div{label="SelectGroup"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectGroup.vue

::
::div{label="SelectItem"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItem.vue

::
::div{label="SelectItemText"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectItemText.vue

::
::div{label="SelectLabel"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectLabel.vue

::
::div{label="SelectRoot"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectRoot.vue

::
::div{label="SelectScrollDownButton"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollDownButton.vue

::
::div{label="SelectScrollUpButton"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectScrollUpButton.vue

::
::div{label="SelectSeperator"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectSeparator.vue

::
::div{label="SelectTrigger"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectTrigger.vue

::
::div{label="SelectValue"}
@@@ ../packages/nuxt/src/runtime/components/forms/select/SelectValue.vue

::
:::
