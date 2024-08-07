---
description: 'NSelect component - used to create a select input.'
---

# 🟢 Select

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

| Prop              | Description                                        |
| ----------------- | -------------------------------------------------- |
| `value-attribute` | The attribute value to be displayed in the select. |
| `item-attribute`  | The attribute value to be displayed in the item.   |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectObjects
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectObjects.vue
::
:::

## Label

> You can use the `NFormGroup` component to create a label for the select.

::alert{type="info"}
  Read more about the `NFormGroup` component [here](form-group).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectLabel
::
 ::code-block{label="Code"}
@@@ ./components/content/examples/vue/select/ExampleVueSelectLabel.vue
::
:::

## Disabled

| Prop                   | Description                |
| ---------------------- | -------------------------- |
| `disabled`             | Disable the select.        |
| `_selectItem.disabled` | Disable the specific item. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueSelectDisabled
::
::code-block{label="Code"}
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
::code-block{label="Preview" preview}
  :ExampleVueSelectSize
::
::code-block{label="Code"}
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
