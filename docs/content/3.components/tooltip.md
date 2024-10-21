---
description: 'NTooltip component - used to provide information for a component.'
---

# 🟢 Tooltip

::list{type="primary"}
- Provider to control display delay globally.
- Opens when the trigger is focused or hovered.
- Closes when the trigger is activated or when pressing escape.
- Supports custom timings.
::

---

## Basic

use `NTooltip` to provide information for a component.

| Prop       | Default | Type      | Description                 |
| ---------- | ------- | --------- | --------------------------- |
| content    | -       | `string`  | Set the tooltip content.    |
| disabled   | -       | `boolean` | Set to disable the tooltip. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueTooltipBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipBasic.vue
::
:::

## Color

`tooltip="{color}"` is used to set the color of the tooltip.

| Prop      | Default | Type      | Description            |
| --------- | ------- | --------- | ---------------------- |
| tooltip   | black | `string`  | Set the tooltip color. |

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipColor.vue
::
:::

## Size

| Prop   | Default | Type      | Description                   |
| ------ | ------- | --------- | ----------------------------- |
| size   | xs   | `string`  | Set the tooltip general size. |

::alert{type="info"}
You can adjust the tooltip size using any value, including breakpoints (e.g., `sm:sm`, `xs:lg`) and states (e.g., `hover:lg`, `focus:3xl`).
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipSize

::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSize.vue
::
:::

## Provider

Configure the tooltip provider using the `_tooltipProvider` prop.

| Prop                      | Default | Type      | Description                                                                                                    |
| ------------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| delayDuration           | 600     | `number`  | Set the delay duration of the tooltip.                                                                         |
| disableClosingTrigger   | -       | `boolean` | When `true`, clicking on trigger will not close the content.                                                   |
| disableHoverableContent | false   | `boolean` | When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger. |
| disabled                | -       | `boolean` | Set to disable the tooltip.                                                                                    |

::alert{type="info"}
For more props and information, please refer to the [Radix Tooltip Provider documentation](https://www.radix-vue.com/components/tooltip#provider){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipProvider
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipProvider.vue
::
:::

## Root

Configure the tooltip root using the `_tooltipRoot` prop.

| Prop            | Default | Type      | Description                                                      |
| --------------- | ------- | --------- | ---------------------------------------------------------------- |
| defaultOpen   | false | `boolean` | Set the default open state of the tooltip.                       |
| open          | false | `boolean` | Set the open state of the tooltip.                               |
| onUpdate:open | -       | `void`    | Event handler called when the open state of the tooltip changes. |

::alert{type="info"}
For more props and information, please refer to the [Radix Tooltip Root documentation](https://www.radix-vue.com/components/tooltip#root){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipRoot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipRoot.vue
::
:::

## Content

Configure the tooltip content using the `_tooltipContent` prop. 

| Prop        | Default | Type                          | Description                               |
| ----------- | ------- | ----------------------------- | ----------------------------------------- |
| align       | center  | `start` `end` `center`        | Set the alignment of the tooltip content. |
| side        | top     | `top` `right` `bottom` `left` | Set the side of the tooltip content.      |
| sideOffset  | -       | `number`                      | Set the offset of the tooltip content.    |
| alignOffset | -       | `number`                      | Set the offset of the tooltip content.    |

::alert{type="info"}
For more props and information, please refer to the [Radix Tooltip Content documentation](https://www.radix-vue.com/components/tooltip#content){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueTooltipContent
::

::code-block{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipContent.vue
::
::
:::

## Slots

> You can use the following slots to customize the tooltip.

| Name      | Description       |
| --------- | ----------------- |
| `default` | The trigger slot. |
| `content` | The content slot. |

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
