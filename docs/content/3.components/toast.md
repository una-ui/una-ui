---
description: 'NToast component - used to display messages in an overlay.'
---

# 🌑 Toast

::list{type="primary"}
- Automatically closes.
- Pauses closing on hover, focus and window blur.
- Supports hotkey to jump to toast viewport.
- Supports closing via swipe gesture.
- Exposes CSS variables for swipe gesture animations.
- Can be controlled or uncontrolled.
::

---

## Add the Toaster component

For the beginning, add the `Toaster` component to your `app.vue`.

```vue
<template>
  <div>
    <NuxtPage />

    <NToaster />
  </div>
</template>
```

## Usage

Then, you can use the `useToast` composable to add toasts to your app:

```vue
<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <NButton
    label="Show toast" 
    @click="toast.add(
      {
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      },
    )"
  />
</template>
```

## Basic

`NToast` - use to display messages in an overlay. Please refer to the [Radix-ui toast](https://www.radix-vue.com/components/toast.html#api-reference) for more API information.

<!-- > Use [useToast](/packages/nuxt/src/runtime/composables/useToast.ts) composable to add toasts to your application with the help of a special design. -->

| Prop            | Default | Type       | Description                                          |
| --------------- | ------- | ---------- | ---------------------------------------------------  |
| `title`         | -       | `string`   | Title of the toast                                   |
| `description`   | -       | `string`   | Description of the toast                             |
| `actions`       | `[]`    | `Action[]` | The array of actions.                                |
| `closable`      | `false` | `boolean`  | Display `close` icon on the right side of the toast. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToastBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastBasic.vue
::
:::

## With actions

`actions` - you can also add the array of actions

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToastActions
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastActions.vue
::
:::

## Closable

`closable` - add a close button to the toast.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueToastClosable
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastClosable.vue
::
:::

## Variant and Color

`toast="{variant}-{color}"` is used to set the variant of the toast. The default variant is `outline-gray`.

| Prop                  | Description                             |
| ----------------------| --------------------------------------- |
| `toast`               | Set the toast variant and color.        |
| `toast-action`   | Set the toast action variant and color. |

::alert{type="info"}
`NToastAction` is wrapped around the [NButton](button) component. This means that all the props and slots of
`NButton` are available to use or through `toast-action` prop.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueToastVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastVariant.vue
::
:::


## Provider

Configure the toast provider using the `_toastProvider` prop.

| Prop                      | Default        | Type                               | Description                                                              |
| ------------------------- | -------------- | ---------------------------------- | -----------------------------------------------------------------------  |
| `duration`                | `4000`         | `number`                           | Set the duration in milliseconds of the toast.                           |
| `label`                   | `Notification` | `string`                           | An author-localized label for each toast.                                |
| `swipeDirection`          | `right`        | `right` `left` `up` `down`         | Direction of pointer swipe that should close the toast.                  |
| `swipeThreshold`          | `50`           | `number`                           | Distance in pixels that the swipe pass before a close is triggered.      |

::alert{type="info"}
For more props and information, please refer to the [Radix Toast Provider documentation](https://www.radix-vue.com/components/toast#provider){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueToastProvider
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastProvider.vue
::
:::

## Root

Configure the toast root using the `_toastRoot` prop.

| Prop            | Default | Type      | Description                                                      |
| --------------- | ------- | --------- | ---------------------------------------------------------------- |
| defaultOpen     | `false` | `boolean` | Set the default open state of the toast.                         |
| open            | `false` | `boolean` | Set the open state of the toast.                                 |
| onUpdate:open   | -       | `void`    | Event handler called when the open state of the toast changes.   |

::alert{type="info"}
For more props and information, please refer to the [Radix Toast Root documentation](https://www.radix-vue.com/components/toast#root){target="_blank"}.
::

:::CodeGroup
::code-block{label="Preview" preview}
:ExampleVueToastRoot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastRoot.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/toast.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/toast.ts

## Composable

@@@ ../packages/nuxt/src/runtime/composables/useToast.ts

## Components

You can use any sub-components of `NToast`, such as `NToastTitle`, `NToastRoot`, which are defined in the Radix Toast documentation. For more information, please refer to the [Radix Toast documentation](https://www.radix-vue.com/components/toast){target="_blank"}.

### 

:::CodeGroup

::code-block{label="Toast" preview}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/Toast.vue

::
::code-block{label="Toaster" preview}
@@@ ../packages/nuxt/src/runtime/components/overlays/Toaster.vue

::
::code-block{label="ToastRoot"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastRoot.vue

::
::code-block{label="ToastProvider"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastProvider.vue

::
::code-block{label="ToastViewport"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastViewport.vue

::
::code-block{label="ToastInfo"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastInfo.vue

::
::code-block{label="ToastTitle"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastTitle.vue

::
::code-block{label="ToastDescription"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastDescription.vue

::
::code-block{label="ToastAction"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastAction.vue

::
::code-block{label="ToastClose"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastClose.vue

::
:::
