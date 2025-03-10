---
description: 'A succinct message that is displayed temporarily.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/overlays/Toast.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/toast
    target: _blank
---

## Setup

For the beginning, add the `Toaster` component to your `app.vue`.

```vue [app.vue]
<template>
  <div>
    <NuxtPage />

    <NToaster />
  </div>
</template>
```

## Examples

### Basic

Then, you can use the `useToast` composable to add toasts to your app:

| Prop           | Default | Type      | Description              |
| -------------- | ------- | --------- | ------------------------ |
| `title`        | -       | `string`  | Title of the toast       |
| `description`  | -       | `string`  | Description of the toast |
| `showProgress` | `false` | `boolean` | Show the progress bar.   |
| `closable`     | `true`  | `boolean` | Display close button.    |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastBasic.vue
::
:::

### With actions

| Prop      | Default | Type       | Description          |
| --------- | ------- | ---------- | -------------------- |
| `actions` | `[]`    | `Action[]` | The array of action. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastActions
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastActions.vue
::
:::

### Leading Icon

| Prop      | Default | Type     | Description                   |
| --------- | ------- | -------- | ----------------------------- |
| `leading` | -       | `string` | The leading icon of the toast |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastLeading
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastLeading.vue
::
:::

:read-more{to="/components/icon" title="Icon Component" target="_blank"}

### Variant and Color

| Prop       | Default        | Type                | Description                      |
| ---------- | -------------- | ------------------- | -------------------------------- |
| `toast`    | `outline-gray` | `{variant}-{color}` | Set the toast variant and color. |
| `progress` | `primary`      | `{color}`           | Set the progress color.          |

::alert{type="info"}
`NToastAction` is wrapped around the [NButton](button) component. This means that all the props and slots of
`NButton` are available to use or through `toast-action` prop.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastVariant.vue
::
:::

### Provider

Configure the toast provider using the `_toastProvider` prop.

| Prop             | Default        | Type                       | Description                                                         |
| ---------------- | -------------- | -------------------------- | ------------------------------------------------------------------- |
| `duration`       | `4000`         | `number`                   | Set the duration in milliseconds of the toast.                      |
| `label`          | `Notification` | `string`                   | An author-localized label for each toast.                           |
| `swipeDirection` | `right`        | `right` `left` `up` `down` | Direction of pointer swipe that should close the toast.             |
| `swipeThreshold` | `50`           | `number`                   | Distance in pixels that the swipe pass before a close is triggered. |

:read-more{to="https://www.reka-ui.com/docs/components/toast#root" title="Reka Toast Root API." target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastProvider
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastProvider.vue
::
:::

## Slots

| Name          | Props | Description           |
| ------------- | ----- | --------------------- |
| `default`     | -     | The trigger slot.     |
| `actions`     | -     | The actions slot.     |
| `info`        | -     | The info slot.        |
| `title`       | -     | The title slot.       |
| `description` | -     | The description slot. |
| `closeIcon`   | -     | The close icon slot.  |

## Presets

@@@ ../packages/preset/src/_shortcuts/toast.ts [shortcuts/toast.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/toast.ts [types/toast.ts]

## Composables

@@@ ../packages/nuxt/src/runtime/composables/useToast.ts [useToast.ts]

## Components

:::CodeGroup
::div{label="Toast.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/Toast.vue

::
::div{label="Toaster.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/Toaster.vue

::
::div{label="ToastRoot.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastRoot.vue

::
::div{label="ToastProvider.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastProvider.vue

::
::div{label="ToastViewport.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastViewport.vue

::
::div{label="ToastInfo.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastInfo.vue

::
::div{label="ToastTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastTitle.vue

::
::div{label="ToastDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastDescription.vue

::
::div{label="ToastAction.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastAction.vue

::
::div{label="ToastClose.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/ToastClose.vue

::
:::
