---
description: 'Displays rich content in a portal, triggered by a button.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/popover/Popover.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/popover
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                                                                   |
| ------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen` | `false` | `boolean` | The open state of the popover when it is initially rendered. Use when you do not need to control its open state.                                              |
| `modal`       | `false` | `boolean` | The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers. |
| `open`        | `false` | `boolean` | The controlled open state of the popover.                                                                                                                     |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVuePopoverBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/popover/ExampleVuePopoverBasic.vue
::
:::

:read-more{to="https://www.radix-vue.com/components/popover#root" title="Radix Popover Root API." target="_blank"}

### Content

| Prop              | Default | Type     | Description                                           |
| ----------------- | ------- | -------- | ----------------------------------------------------- |
| `_popoverContent` | -       | `object` | The component that pops out when the popover is open. |

| Options                       | Default   | Type                             | Description                                                                                                                                                                                                                                          |
| ----------------------------- | --------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `align`                       | `start`   | `start`, `center`, `end`         | The preferred alignment against the trigger. May change when collisions occur.                                                                                                                                                                       |
| `alignOffset`                 | -         | `number`                         | An offset in pixels from the start or end alignment options.                                                                                                                                                                                         |
| `avoidCollisions`             | `false`   | `boolean`                        | When true, overrides the side and align preferences to prevent collisions with boundary edges.                                                                                                                                                       |
| `disableOutsidePointerEvents` | `false`   | `boolean`                        | When true, hover/focus/click interactions will be disabled on elements outside the DismissableLayer. Users will need to click twice on outside elements to interact with them: once to close the DismissableLayer, and again to trigger the element. |
| `forceMount`                  | `false`   | `boolean`                        | Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.                                                                                                                                  |
| `hideWhenDetached`            | `false`   | `boolean`                        | Whether to hide the content when the trigger becomes fully occluded.                                                                                                                                                                                 |
| `prioritizePosition`          | `false`   | `boolean`                        | Force content to be position within the viewport. Might overlap the reference element, which may not be desired.                                                                                                                                     |
| `side`                        | `top`     | `top`, `right`, `bottom`, `left` | The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.                                                                                                                |
| `sideOffset`                  | -         | `number`                         | The distance in pixels from the trigger.                                                                                                                                                                                                             |
| `sticky`                      | `partial` | `partial`, `always`              | The sticky behavior on the align axis. partial will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.                                  |
| `trapFocus`                   | `false`   | `boolean`                        | Whether focus should be trapped within the MenuContent                                                                                                                                                                                               |
| `updatePositionStrategy`      | -         | `always`, `optimized`            | Strategy to update the position of the floating element on every animation frame.                                                                                                                                                                    |

:read-more{to="https://www.radix-vue.com/components/popover#content" title="Radix Popover Content API." target="_blank"}

:::CodeGroup
  ::div{label="Preview"}
  :ExampleVuePopoverContent
  ::
  ::div{label="Code"}
  @@@ ./components/content/examples/vue/popover/ExampleVuePopoverContent.vue
  ::
:::

### Slots

| Name      | Props  | Description          |
| --------- | ------ | -------------------- |
| `trigger` | `open` | The button trigger.  |
| `default` | -      | The popover content. |

## Presets

@@@ ../packages/preset/src/_shortcuts/popover.ts [shortcuts/popover.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/popover.ts [types/popover.ts]

## Components

:::CodeGroup
::div{label="Popover.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/Popover.vue

::
::div{label="PopoverContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/popover/PopoverContent.vue

::
:::
