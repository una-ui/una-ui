---
description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/tooltip/Tooltip.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/tooltip
    target: _blank
---

## Examples

### Basic

| Prop                      | Default | Type      | Description                                                                                                                                                                                                                   |
| ------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`                 | -       | `string`  | Set the tooltip content.                                                                                                                                                                                                      |
| `defaultOpen`             | `false` | `boolean` | The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.                                                                                                              |
| `delayDuration`           | -       | `number`  | Override the duration given to the Provider to customize the open delay for a specific tooltip.                                                                                                                               |
| `disableClosingTrigger`   | -       | `boolean` | When true, clicking on trigger will not close the content.                                                                                                                                                                    |
| `disabled`                | -       | `boolean` | When true, disable tooltip                                                                   a                                                                                                                                |
| `disableHoverableContent` | -       | `boolean` | Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences. Inherits from Tooltip.Provider.                                                                                    |
| `ignoreNonKeyboardFocus`  | -       | `boolean` | Prevent the tooltip from opening if the focus did not come from the keyboard by matching against the :focus-visible selector. This is useful if you want to avoid opening it when switching browser tabs or closing a dialog. |
| `open`                    | `false` | `boolean` | The controlled open state of the tooltip.                                                                                                                                                                                     |

:read-more{to="https://www.radix-vue.com/components/tooltip#root" title="Radix Tooltip Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueTooltipBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipBasic.vue
::
:::

### Color

| Prop      | Default | Type     | Description            |
| --------- | ------- | -------- | ---------------------- |
| `tooltip` | `black` | `string` | Set the tooltip color. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTooltipColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipColor.vue
::
:::

### Size

| Prop   | Default | Type     | Description                   |
| ------ | ------- | -------- | ----------------------------- |
| `size` | `xs`    | `string` | Set the tooltip general size. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTooltipSize

::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSize.vue
::
:::

### Provider

Configure the tooltip provider by using the `_tooltipProvider` prop.

| Prop                      | Default | Type      | Description                                                                                                                                                                                                                   |
| ------------------------- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delayDuration`           | `700`   | `number`  | The duration from when the pointer enters the trigger until the tooltip gets opened.                                                                                                                                          |
| `disableClosingTrigger`   | -       | `boolean` | When `true`, clicking on trigger will not close the content.                                                                                                                                                                  |
| `disabled`                | -       | `boolean` | When `true`, disable tooltip.                                                                                                                                                                                                 |
| `disableHoverableContent` | `false` | `boolean` | When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.                                                                                                                |
| `ignoreNonKeyboardFocus`  | `false` | `boolean` | Prevent the tooltip from opening if the focus did not come from the keyboard by matching against the :focus-visible selector. This is useful if you want to avoid opening it when switching browser tabs or closing a dialog. |
| `skipDelayDuration`       | `300`   | `number`  | How much time a user has to enter another trigger without incurring a delay again.                                                                                                                                            |

:read-more{to="https://www.radix-vue.com/components/tooltip#provider" title="Radix Tooltip Provider API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTooltipProvider
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipProvider.vue
::
:::

### Content

Configure the tooltip content using the `_tooltipContent` prop. 

| Prop          | Default  | Type                          | Description                                                                                                                           |
| ------------- | -------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `align`       | `center` | `start` `end` `center`        | The preferred alignment against the trigger. May change when collisions occur.                                                        |
| `alignOffset` | -        | `number`                      | An offset in pixels from the start or end alignment options.                                                                          |
| `side`        | `top`    | `top` `right` `bottom` `left` | The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. |
| `sideOffset`  | -        | `number`                      | The distance in pixels from the trigger.                                                                                              |

:read-more{to="https://www.radix-vue.com/components/tooltip#content" title="Radix Tooltip Content API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTooltipContent
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipContent.vue
::
::
:::

### Slots

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `default` | -     | The trigger slot. |
| `content` | -     | The content slot. |

:::CodeGroup
::div{label="Preview"}
:ExampleVueTooltipSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/tooltip/ExampleVueTooltipSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/tooltip.ts [shortcuts/tooltip.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/tooltip.ts [types/tooltip.ts]

## Components

:::CodeGroup
::div{label="Tooltip.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/Tooltip.vue

::
::div{label="TooltipProvider.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipProvider.vue

::
::div{label="TooltipRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipRoot.vue

::
::div{label="TooltipContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipContent.vue

::
::div{label="TooltipTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/tooltip/TooltipTrigger.vue

::
:::
