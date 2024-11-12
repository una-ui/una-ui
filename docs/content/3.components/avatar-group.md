---
description: 'NAvatarGroup component - used to display a group of NAvatar components.'
---

## Basic

`NAvatarGroup` - used to display a group of `NAvatar` components.

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

## Size

| Prop | Default | Description                           |
| ---- | ------- | ------------------------------------- |
| size | `md`    | The size of the avatars in the group. |

> 🚀 You can freely adjust the size of the avatars in the group using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
You can use `size` prop to set the size of the entire `NAvatar` or you can set the size of individual avatars using the `size` prop on the `NAvatar` component.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarGroupSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar-group/ExampleVueAvatarGroupSize.vue
::
:::

## Customization

Similar to the `size` prop, any available props of the `NAvatar` component can be directly passed to the `NAvatarGroup` component. These props will then be automatically forwarded to the individual `NAvatar` components within the group.

You can also individually customize each `NAvatar`, refer to the [NAvatar](avatar) component for more information.

You can also use the `una` prop to add utility classes, refer to the [Props](#props) and [Presets](#presets) sections for more information.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarGroupCustomization
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar-group/ExampleVueAvatarGroupCustomization.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/avatar-group.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/avatar-group.ts

## Components
@@@ ../packages/nuxt/src/runtime/components/elements/AvatarGroup.vue
