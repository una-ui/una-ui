---
description: 'A modal dialog that interrupts the user with important content and expects a response.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/alert-dialog/AlertDialog.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/alert-dialog
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                     |
| ------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| `title`       | -       | `string`  | The title of the dialog.                                                                                        |
| `description` | -       | `string`  | The description of the dialog.                                                                                  |
| `defaultOpen` | `false` | `boolean` | The open state of the dialog when it is initially rendered. Use when you do not need to control its open state. |
| `open`        | -       | `boolean` | The controlled open state of the dialog. Can be bind as `v-model:open`.                                         |
| `overlay`     | `true`  | `boolean` | Show the overlay.                                                                                               |
| `@action`     | `-`     | `event`   | Event emitted when the action button is clicked, typically used for confirming destructive actions.             |
| `@cancel`     | `-`     | `event`   | Event emitted when the cancel button is clicked or dialog is dismissed, used for aborting the proposed action.  |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/alert-dialog#root" title="Reka Alert Dialog Root API" target="_blank"}

### Prevent Closing

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

| Name          | Props  | Description                                                                          |
| ------------- | ------ | ------------------------------------------------------------------------------------ |
| `default`     | -      | Allows advanced customization using sub-components, replacing the default structure. |
| `content`     | -      | Replaces the entire default content container within the dialog popup.               |
| `trigger`     | `open` | The trigger button used to open the dialog.                                          |
| `header`      | -      | Contains the title and description slots.                                            |
| `footer`      | -      | The footer.                                                                          |
| `title`       | -      | The title displayed in the dialog.                                                   |
| `description` | -      | The description displayed below the title.                                           |

### Custom Rendering

Use the `default` slot for full control over the alert dialog's structure. This allows you to compose the alert dialog using its individual sub-components (like `AlertDialogAction`, `AlertDialogCancel`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomRendering.vue
::
:::

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

## Presets

@@@ ../packages/preset/src/_shortcuts/alert-dialog.ts [shortcuts/alert-dialog.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/alert-dialog.ts [types/alert-dialog.ts]

## Components

:::CodeGroup
::div{label="AlertDialog.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialog.vue

::
::div{label="AlertDialogAction.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogAction.vue

::
::div{label="AlertDialogCancel.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogCancel.vue

::
::div{label="AlertDialogContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogContent.vue

::
::div{label="AlertDialogDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogDescription.vue

::
::div{label="AlertDialogFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogFooter.vue

::
::div{label="AlertDialogHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogHeader.vue

::
::div{label="AlertDialogOverlay.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogOverlay.vue

::
::div{label="AlertDialogTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogTitle.vue

::
::div{label="AlertDialogTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/alert-dialog/AlertDialogTrigger.vue

::
:::
