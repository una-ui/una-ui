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

## Color

`tooltip="{color}"` is used to set the color of the tooltip. The default color is `base`.

| Prop                                     | Description                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `tooltip`                                | Set the tooltip color.                                           |


:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipColor.vue
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
| `default`     | The defualt slot.     | 
| `content`     | The content slot.     |

:::CodeGroup
::code-block{label="Preview"}
:ExampleVueTooltipSlots
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSlots.vue

::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/tooltip.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/tooltip.ts

## Components

You can use any sub-components of `NTooltip`, such as `NTooltipTrigger`, `NTooltipContent`, which are defined in the Radix Tooltip documentation. For more information, please refer to the [Radix Tooltip documentation](https://www.radix-vue.com/components/tooltip){target="_blank"}.

### 

:::CodeGroup
::code-block{label="Tooltip" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/Tooltip.vue

::
::code-block{label="TooltipRoot"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipRoot.vue

::
::code-block{label="TooltipContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipContent.vue

::
::code-block{label="TooltipProvider"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipProvider.vue

::
::code-block{label="TooltipTrigger"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipTrigger.vue

::
:::