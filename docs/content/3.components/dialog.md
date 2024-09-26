---
description: NDialog component - Used for making dialog boxes and popup screens
---

# 🟢 Dialog
<<<<<<< HEAD
=======

::list{type="primary"}
- Supports modal and non-modal modes.
- Focus is automatically trapped when modal.
- Can be controlled or uncontrolled.
- Manages screen reader announcements with Title andDescription components.
- Esc closes the component automatically.
::
>>>>>>> d4509ffbfa8725b0401afed5112c77094f681745

---

## Basic

`NDialog` is used to create dialog windows inside the web browser. It can be used for messages, prompts, logins, and much more.

| Prop          | Type    | Default | Description                    |
| ------------- | ------- | ------- | ------------------------------ |
| `title`       | String  | `null`  | The title of the dialog.       |
| `description` | String  | `null`  | The description of the dialog. |
| `showClose`   | Boolean | `true`  | Show the close button.         |

::alert{type="info"}
All the props available in the [Radix Vue Dialog](https://www.radix-vue.com/components/dialog) are also
available via its subcomponents' prop names, e.g., `_dialog-content`, `_dialog-title`, etc. refer to
[Dialog Props](#props) for more details.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogBasic.vue
::
:::

## Scrollable Content

| Prop         | Type    | Description                                      |
| ------------ | ------- | ------------------------------------------------ |
| `scrollable` | Boolean | If true, the dialog will have a scrollable body. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogScrollable
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogScrollable.vue
::
:::

## Prevent Closing

| Prop           | Type    | Description                                                              |
| -------------- | ------- | ------------------------------------------------------------------------ |
| `preventClose` | Boolean | If true, the dialog will not close on overlay click or escape key press. |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogPreventClose
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogPreventClose.vue
::
:::

## Slots

<<<<<<< HEAD
| Slot          | Properties | Description
| ------------- | ---------- | ---------------------------------------------
| `trigger`     | `open`     | The trigger button used to open the dialog.
| `default`     | -          | The main content of the dialog.
| `content`     | -          | The full content of the dialog. It covers the header, title, description, footer, and default slots.
| `header`      | -          | Contains the title and description slots.
| `footer`      | -          | The footer.
| `title`       | -          | The title displayed in the dialog.
| `description` | -          | The description displayed below the title.

## Examples
=======
| Slot          | Properties | Description                                                                            |
| ------------- | ---------- | -------------------------------------------------------------------------------------- |
| `trigger`     | `open`     | The trigger button used to open the dialog                                             |
| `default`     | -          | The body of the dialog                                                                 |
| `content`     | -          | The full content of the dialog. It covers the header, body, footer, and default slots. |
| `header`      | -          | Contains the title and description slots                                               |
| `footer`      | -          | The footer.                                                                            |
| `title`       | -          | The title displayed in the dialog.                                                     |
| `description` | -          | The description displayed below the title.                                             |


### Custom Close Button

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogCustomClose
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogCustomClose.vue
::
:::

### Scrollable Body

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogScrollableBody
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogScrollableBody.vue
::
:::
>>>>>>> d4509ffbfa8725b0401afed5112c77094f681745

### Login Prompt

A login dialog with state which closes itself after a successful login.

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogLogin
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogLogin.vue
::
:::

<<<<<<< HEAD
### Confirmation Prompt

A confirmation dialog confirming an action

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogConfirmation
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogConfirmation.vue
::
:::

### Uncloseable Dialog

A dialog which controls its own open state, and prevents closing normally.

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogUncloseable
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogUncloseable.vue
::
:::

### Loading Dialog

A dialog that stays open while in a loading state. Like the uncloseable dialog, it cannot be closed by the user.

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogLoading
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogLoading.vue
::
:::

=======
>>>>>>> d4509ffbfa8725b0401afed5112c77094f681745
### Blurred Background

A dialog whose overlay blurs the background content.

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogBackgroundBlur
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogBackgroundBlur.vue
::
:::
<<<<<<< HEAD
=======

## Props

@@@ ../packages/nuxt/src/runtime/types/dialog.ts

## Component

:::CodeGroup
::code-block{label="Dialog" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/Dialog.vue

::
::code-block{label="DialogTitle"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogTitle.vue

::
::code-block{label="DialogDescription"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogDescription.vue

::
::code-block{label="DialogHeader"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogHeader.vue

::
::code-block{label="DialogFooter"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogFooter.vue

::
::code-block{label="DialogClose"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogClose.vue

::
::code-block{label="DialogOverlay"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogOverlay.vue

::
::code-block{label="DialogContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogContent.vue

::
::code-block{label="DialogScrollContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/dialog/DialogScrollContent.vue

::
:::
>>>>>>> d4509ffbfa8725b0401afed5112c77094f681745
