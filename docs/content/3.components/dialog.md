---
title: 🔴 Dialog
description: NDialog component - Used for making dialog boxes and popup screens
---

## Basic

`NDialog` is used to create dialog windows inside the web browser. It can be used for messages, prompts, logins, and much more.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueDialogBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/dialog/ExampleVueDialogBasic.vue
::
:::

## Props

| Prop          | Type   | Description
| ----          | ----   | ----
| `title`       | String | The title of the dialog. Required for accessibility purposes (`aria-labelledby`). May optionally be provided via `title` slot.
| `description` | String | The description of the dialog. Optionally required for accessibiilty purposes (`aria-describedby`). May optionally be provided via `description` slot.
| `una`         | Object | Classes for child components.

## Slots

| Slot          | Properties | Description
| ------------- | ---------- | ---------------------------------------------
| `trigger`     | `open`     | The trigger button used to open the dialog
| `default`     | -          | The main content of the dialog
| `content`     | -          | The full content of the dialog. It covers the header, title, description, footer, and default slots.
| `header`      | -          | Contains the title and description slots
| `footer`      | -          | The footer.
| `title`       | -          | The title displayed in the dialog.
| `description` | -          | The description displayed below the title.

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
