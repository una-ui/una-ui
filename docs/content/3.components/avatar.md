---
description: 'An image element with a fallback for representing the user.'
navBadges:
  - value: Updated
    type: lime
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/avatar/Avatar.vue
    target: _blank
  - value: API reference
    to: https://www.radix-vue.com/components/avatar
    target: _blank
---

## Examples

### Basic

| Prop    | Default | Type     | Description                                                                                                             |
| ------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `src`   | -       | `string` | The image source.                                                                                                       |
| `alt`   | -       | `string` | The alternative text.                                                                                                   |
| `label` | -       | `string` | The placeholder of the avatar when it is loading. By default, it uses the first letters of each word in the `alt` prop. |

:read-more{to="https://www.radix-vue.com/components/avatar#root" title="Radix Avatar Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarBasic.vue
::
:::

### Variant

| Prop     | Default | Type        | Description                |
| -------- | ------- | ----------- | -------------------------- |
| `avatar` | `soft`  | `{variant}` | The variant of the avatar. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `soft`    | The default variant.        |
| `solid`   | The solid variant.          |
| `outline` | The outline variant.        |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarVariant.vue
::
:::

### Color

| Prop     | Default          | Type                | Description              |
| -------- | ---------------- | ------------------- | ------------------------ |
| `avatar` | `{variant}-gray` | `{variant}-{color}` | The color of the avatar. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarColor.vue
::
:::

### Icon

| Prop   | Default | Type    | Description                                                                                                                     |
| ------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `icon` | `false` | boolean | If true, the label will be wrapped as an [Icon component](/components/icon). The label can be passed as the `name` of the icon. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarIcon.vue
::
:::

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
  :ExampleVueAvatarSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarSize.vue
::
:::

### Rounded

| Prop      | Default | Type     | Description                             |
| --------- | ------- | -------- | --------------------------------------- |
| `rounded` | `full`  | `string` | Set the avatar to have rounded corners. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarRounded
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarRounded.vue
::
:::

### With Indicator

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarIndicator
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarIndicator.vue
::
:::

:read-more{to="/components/indicator" title="Indicator component" target="_blank"}

### Customization

> You can customize the avatar using the `una` prop and utility classes.

:::CodeGroup
::div{label="Preview" preview}
 :ExampleVueAvatarCustom
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarCustom.vue
::
:::

### Slots

| Slot       | Props | Description                         |
| ---------- | ----- | ----------------------------------- |
| `default`  | -     | The image element of the avatar.    |
| `fallback` | -     | The fallback element of the avatar. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAvatarSlot1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/avatar/ExampleVueAvatarSlot1.vue
::
:::

:read-more{to="/components/button#slots" title="Button component slots" target="_blank"}

## Presets

@@@ ../packages/preset/src/_shortcuts/avatar.ts [shortcuts/avatar.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/avatar.ts [types/avatar.ts]

## Components

:::CodeGroup
::div{label="Avatar.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/avatar/Avatar.vue

::
::div{label="AvatarFallback.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/avatar/AvatarFallback.vue

::
::div{label="AvatarImage.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/avatar/AvatarImage.vue

::
:::

