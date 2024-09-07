---
description: 'NTooltip component - used to provide information for a component.'
---

# 🌑 Tooltip

---

## Basic

use `NTooltip` to provide information for a component.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTooltipBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipBasic.vue
::
:::

## Variant and Color

`tooltip="{variant}-{color}"` is used to set the variant of the tooltip. The default variant is `solid-white`.

`tooltip-content="{color}"` is used to set the variant of the tooltip content. The default variant is `inverted`.

| Prop                                     | Description                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `tooltip`                                | Set the tooltip variant and color.                               |
| `_tooltip-trigger.tooltip`               | Set the tooltip variant and color via `_tooltip-trigger`.        |
| `tooltip-content`                        | Set the tooltip content color.                                   |
| `_tooltip-content.tooltip-content`       | Set the tooltip content color via `_tooltip-content`.            |

::alert{type="info"}
`NTooltipTrigger` is wrapped around the [NButton](button) component. This means that all the props and slots of
`NButton` are available to use or through `_tooltip-trigger` prop.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipVariant.vue
::
:::

## Side

`side="{value}"` - change the side of the tooltip content.

| Value    | Description           |
| -------- | --------------------- |
| `top`    | The default side.     |
| `right`  | The right position.   |
| `bottom` | The bottom position.  |
| `left`   | The left position.    |


:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipSide
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSide.vue
::
:::

## **Size**

| Prop                        | Description                         |
| --------------------------- | ----------------------------------- |
| `size`                      | Set the tooltip general size.       |
| `_tooltipTrigger.size`      | Set the trigger size only.          |
| `_tooltipContent.size`      | Set the content size only.          |

> 🚀 You can freely adjust the size of the tooltip using any size imaginable. No limits exist, and you aan use
`breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to
change size based on input state and more.

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipSize

::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSize.vue
::
:::

## Slots

> You can use the following slots to customize the tooltip.

| Name          | Description           |
| ------------- | --------------------- |
| `trigger`     | The trigger slot.     | 
| `content`     | The content slot.     |

:::CodeGroup
::code-block{label="Preview"}
:ExampleVueTooltipSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSlots.vue

::
:::