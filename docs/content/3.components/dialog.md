---
description: NDialog component - Used for making dialog boxes and popup screens
---

# 🟢 Dialog

::list{type="primary"}
- Supports modal and non-modal modes.
- Focus is automatically trapped when modal.
- Can be controlled or uncontrolled.
- Manages screen reader announcements with Title andDescription components.
- Esc closes the component automatically.
::

---

## Basic

`NDialog` is used to create dialog windows inside the web browser. It can be used for messages, prompts, logins, and much more.

| Prop          | Type    | Default | Description                    |
| ------------- | ------- | ------- | ------------------------------ |
| `title`       | String  | `null`  | The title of the dialog.       |
| `description` | String  | `null`  | The description of the dialog. |
| `showClose`   | Boolean | `true`  | Show the close button.         |

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

## Custom Close Button

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogCustomClose
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogCustomClose.vue
::
:::

## Recipes

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

### Scrollable Body

:::CodeGroup
::code-block{label=Preview preview}
  :ExampleVueDialogScrollableBody
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogScrollableBody.vue
::
:::

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

## Slots

| Slot          | Properties | Description                                                                            |
| ------------- | ---------- | -------------------------------------------------------------------------------------- |
| `trigger`     | `open`     | The trigger button used to open the dialog                                             |
| `default`     | -          | The body of the dialog                                                                 |
| `content`     | -          | The full content of the dialog. It covers the header, body, footer, and default slots. |
| `header`      | -          | Contains the title and description slots                                               |
| `footer`      | -          | The footer.                                                                            |
| `title`       | -          | The title displayed in the dialog.                                                     |
| `description` | -          | The description displayed below the title.                                             |

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
