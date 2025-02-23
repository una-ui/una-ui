---
description: 'Displays a group of Avatar components.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/slots/AvatarGroupDefault.ts
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/avatar
    target: _blank
---

## Examples

### Basic

| Prop | Default | Description                                                          |
| ---- | ------- | -------------------------------------------------------------------- |
| max  | `3`     | The maximum number of avatars to display before the rest are hidden. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAvatarGroupBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar-group/ExampleVueAvatarGroupBasic.vue
::
:::

:read-more{to="/components/avatar" title="Avatar component" target="_blank"}

### Size and Square

| Prop     | Default  | Type     | Description                                                                                                       |
| -------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `size`   | `md`     | `string` | Sets the size of the avatar.                                                                                      |
| `square` | `2.5rem` | `string` | Sets the avatar to a square shape with specified dimensions. This does not affect the size of the fallback value. |

> 🚀 Adjust input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the input scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAvatarGroupSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar-group/ExampleVueAvatarGroupSize.vue
::
:::

### Customization

Similar to the `size` prop, any available props of the [Avatar](avatar) component can be directly passed to the `AvatarGroup` component. These props will then be automatically forwarded to the individual `Avatar` components within the group.

You can also use the `una` prop to add utility classes, refer to the [Props](#props) and [Presets](#presets) sections for more information.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAvatarGroupCustomization
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar-group/ExampleVueAvatarGroupCustomization.vue
::
:::

## Slots

| Name      | Props | Description                                     |
| --------- | ----- | ----------------------------------------------- |
| `default` | -     | The default slot for the AvatarGroup component. |

## Presets

@@@ ../packages/preset/src/_shortcuts/avatar-group.ts [shortcuts/avatar-group.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/avatar-group.ts [types/avatar-group.ts]

## Components

:::CodeGroup
::div{label="AvatarGroup.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/AvatarGroup.vue

::
::div{label="AvatarGroupDefault.vue" icon="i-vscode-icons-file-type-typescript"}
@@@ ../packages/nuxt/src/runtime/components/slots/AvatarGroupDefault.ts
::
:::
