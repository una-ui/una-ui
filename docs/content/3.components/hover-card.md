---
description: 'For sighted users to preview content available behind a link.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/hover-card/HoverCard.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/hover-card
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                         |
| ------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------- |
| `closeDelay`  | `300`   | `number`  | The duration from when the mouse leaves the trigger or content until the hover card closes.                         |
| `defaultOpen` | `false` | `boolean` | The open state of the hover card when it is initially rendered. Use when you do not need to control its open state. |
| `open`        | -       | `boolean` | The controlled open state of the hover card. Can be binded as `v-model:open`.                                       |
| `openDelay`   | `700`   | `number`  | The duration from when the mouse enters the trigger until the hover card opens.                                     |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueHoverCardBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/hover-card/ExampleVueHoverCardBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/hover-card#root" title="Reka Hover Card Root API." target="_blank"}

### Variant and Color

| Prop        | Default        | Type                | Description                           |
| ----------- | -------------- | ------------------- | ------------------------------------- |
| `hovercard` | `outline-gray` | `{variant}-{color}` | Set the hover-card variant and color. |

::alert{type="info"}
The color variant only affects the hover-card's background and border colors. Other elements like text or icons maintain their default styling.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueHoverCardVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/hover-card/ExampleVueHoverCardVariant.vue
::
:::

### Arrow

| Prop    | Default | Type      | Description                                         |
| ------- | ------- | --------- | --------------------------------------------------- |
| `arrow` | `false` | `boolean` | Set the arrow that render alongside the hover card. |

| Arrow Prop | Default | Type      | Description                                                                          |
| ---------- | ------- | --------- | ------------------------------------------------------------------------------------ |
| `height`   | `6`     | `number`  | The height of the arrow in pixels.                                                   |
| `width`    | `12`    | `number`  | The width of the arrow in pixels.                                                    |
| `rounded`  | -       | `boolean` | When `true`, render the rounded version of arrow. Do not work with `as` or `asChild` |

::alert
The `NHoverCardArrow` is fully compatible with the variant and color of `NHoverCard`, while allowing for full customization. Use the `una.hoverCardArrow` prop to customize it.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueHoverCardIndicator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/hover-card/ExampleVueHoverCardIndicator.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/hover-card#arrow" title="Reka Hover Card Arrow API." target="_blank"}

## Slots

| Name      | Props  | Description                                                                                     |
| --------- | ------ | ----------------------------------------------------------------------------------------------- |
| `default` | -      | Allows advanced customization using sub-components, replacing the default hover-card structure. |
| `trigger` | `open` | The trigger slot. Receives the current open state                                               |
| `content` | -      | The content slot to display the entire content of the card.                                     |

### Custom Rendering

Use the `default` slot for full control over the hover-card's structure. This allows you to compose the hover-card using its individual sub-components (like `NHoverCardContent`, `NHoverCardTrigger`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueHoverCardCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/hover-card/ExampleVueHoverCardCustomRendering.vue
::
:::
