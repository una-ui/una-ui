---
description: 'An alert dialog is a modal window that captures the user attention to communicate important information or require a decision, temporarily disabling interaction with the rest of the application.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialog.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/alert-dialog
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                           |
| ------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| `title`       | -       | `string`  | The title of the alert dialog.                                                                                        |
| `description` | -       | `string`  | The description of the alert dialog.                                                                                  |
| `defaultOpen` | `false` | `boolean` | The open state of the alert dialog when it is initially rendered. Use when you do not need to control its open state. |
| `open`        | -       | `boolean` | The controlled open state of the dialog. Can be bind as `v-model:open`.                                               |
| `overlay`     | `true`  | `boolean` | Show the overlay.                                                                                                     |
| `@action`     | `void`  | `event`   | Callback function triggered when the action button is clicked.                                                        |
| `@cancel`     | `void`  | `event`   | Callback function triggered when the cancel button is clicked.                                                        |

:read-more{to="https://www.reka-ui.com/docs/components/alert-dialog#root" title="Reka Alert Dialog Root API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogBasic.vue
::
:::

## Prevent Closing

| Prop           | Default | Type      | Description                                                                    |
| -------------- | ------- | --------- | ------------------------------------------------------------------------------ |
| `preventClose` | -       | `boolean` | If true, the alert dialog will not close on overlay click or escape key press. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogPreventClose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogPreventClose.vue
::
:::

## Slots

| Name          | Props  | Description                                       |
| ------------- | ------ | ------------------------------------------------- |
| `default`     | -      | The body slot.                                    |
| `content`     | -      | The entire content slot.                          |
| `trigger`     | `open` | The trigger button used to open the alert dialog. |
| `header`      | -      | Contains the title and description slots.         |
| `footer`      | -      | The footer.                                       |
| `title`       | -      | The title displayed in the alert dialog.          |
| `description` | -      | The description displayed below the title.        |

#### Custom Size

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomSize.vue
::
:::

#### Custom Animation

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomAnimation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomAnimation.vue
::
:::

#### Custom Rendering

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomRendering.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/alert-dialog.ts [shortcuts/alert-dialog.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/alert-dialog.ts [types/alert-dialog.ts]

## Components

:::CodeGroup
::div{label="AlertDialog.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialog.vue

::
::div{label="AlertDialogAction.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogAction.vue

::
::div{label="AlertDialogCancel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogCancel.vue

::
::div{label="AlertDialogContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogContent.vue

::
::div{label="AlertDialogDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogDescription.vue

::
::div{label="AlertDialogFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogFooter.vue

::
::div{label="AlertDialogHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogHeader.vue

::
::div{label="AlertDialogOverlay.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogOverlay.vue

::
::div{label="AlertDialogTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogTitle.vue

::
::div{label="AlertDialogTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/alert-dialog/AlertDialogTrigger.vue

::
:::
