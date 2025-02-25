---
description: 'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.'
navBadges:
  - value: Updated
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/dialog/Dialog.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/dialog
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                                                                |
| ------------- | ------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | -       | `string`  | The title of the dialog.                                                                                                                                   |
| `description` | -       | `string`  | The description of the dialog.                                                                                                                             |
| `showClose`   | `true`  | `boolean` | Show the close button.                                                                                                                                     |
| `defaultOpen` | `false` | `boolean` | The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.                                            |
| `modal`       | `true`  | `boolean` | The modality of the dialog When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. |
| `open`        | -       | `boolean` | The controlled open state of the dialog. Can be binded as `v-model:open`.                                                                                  |
| `overlay`     | `true`  | `boolean` | Show the overlay.                                                                                                                                          |

:read-more{to="https://www.reka-ui.com/docs/components/dialog#root" title="Reka Dialog Root API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDialogBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogBasic.vue
::
:::

### Scrollable Content

| Prop         | Default | Type      | Description                                      |
| ------------ | ------- | --------- | ------------------------------------------------ |
| `scrollable` | `false` | `boolean` | If true, the dialog will have a scrollable body. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDialogScrollable
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogScrollable.vue
::
:::

### Prevent Closing

| Prop           | Default | Type      | Description                                                              |
| -------------- | ------- | --------- | ------------------------------------------------------------------------ |
| `preventClose` | -       | `boolean` | If true, the dialog will not close on overlay click or escape key press. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDialogPreventClose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogPreventClose.vue
::
:::

### Slots

| Name          | Props  | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| `default`     | -      | The body slot.                              |
| `content`     | -      | The entire content slot.                    |
| `trigger`     | `open` | The trigger button used to open the dialog. |
| `header`      | -      | Contains the title and description slots.   |
| `footer`      | -      | The footer.                                 |
| `title`       | -      | The title displayed in the dialog.          |
| `description` | -      | The description displayed below the title.  |

#### Custom Close Button

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDialogCustomClose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogCustomClose.vue
::
:::

#### Scrollable Body

:::CodeGroup
::div{label=Preview preview}
:ExampleVueDialogScrollableBody
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogScrollableBody.vue
::
:::

#### Login Prompt

A login dialog with state which closes itself after a successful login.

:::CodeGroup
::div{label=Preview preview}
:ExampleVueDialogLogin
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogLogin.vue
::
:::

#### Blurred Background

A dialog whose overlay blurs the background content.

:::CodeGroup
::div{label=Preview preview}
:ExampleVueDialogBackgroundBlur
::
::div{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogBackgroundBlur.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/dialog.ts [shortcuts/dialog.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/dialog.ts [types/dialog.ts]

## Components

:::CodeGroup
::div{label="Dialog.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/Dialog.vue

::
::div{label="DialogTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogTitle.vue

::
::div{label="DialogDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogDescription.vue

::
::div{label="DialogHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogHeader.vue

::
::div{label="DialogFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogFooter.vue

::
::div{label="DialogClose.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogClose.vue

::
::div{label="DialogOverlay.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogOverlay.vue

::
::div{label="DialogContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogContent.vue

::
::div{label="DialogScrollContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogScrollContent.vue

::
:::
