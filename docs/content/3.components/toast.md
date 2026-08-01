---
description: 'A succinct message that is displayed temporarily.'
navBadges:
  - value: Breaking
    type: warning
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/overlays/Toaster.vue
    target: _blank
  - value: API reference
    to: https://github.com/xiaoluoboding/vue-sonner
    target: _blank
---

::alert{type="warning"}
**Breaking change.** `NToast` previously wrapped Reka UI and took a single options object —
`toast({ title, description, actions })`. It now exposes vue-sonner's API, where the message is the
first argument. See [Migrating](#migrating) below.
::

## Setup

Add `NToaster` once, in your `app.vue`:

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

`useToast()` returns vue-sonner's `toast`. The message is the first argument; everything else is options.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastBasic.vue
::
:::

### Types

Each type renders its own coloured icon on a neutral card.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastTypes
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastTypes.vue
::
:::

::alert{type="info"}
`toast.loading()` never dismisses on its own — resolve it by passing its id to a later call, or call
`toast.dismiss(id)`.
::

### Actions

| Option    | Type             | Description                                                         |
| --------- | ---------------- | ------------------------------------------------------------------- |
| `action`  | `NToastAction`   | A single button.                                                    |
| `cancel`  | `NToastAction`   | A single dismissing button.                                         |
| `actions` | `NToastAction[]` | Two or more buttons. una's own option — vue-sonner allows only one. |

Buttons are [NButton](button) components, so any `NButton` prop works — `btn`, `size`, `leading`.
They default to `outline-gray`, and `cancel` to `ghost-gray`. A single button sits inline with the
text; two or more move to their own row underneath.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastActions
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastActions.vue
::
:::

::alert{type="info"}
`onClick` dismisses the toast afterwards. Pass `dismissOnClick: false` to keep it open.
::

### Promise and updating

`toast.promise()` follows a promise through its states. Any toast can also be updated in place by
passing its id to a later call — the usual way to resolve a loading toast.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastPromise
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastPromise.vue
::
:::

### Progress

| Option         | Default | Type      | Description                          |
| -------------- | ------- | --------- | ------------------------------------ |
| `showProgress` | `false` | `boolean` | Show a bar counting down `duration`. |
| `progress`     | -       | `{color}` | Colour of the bar.                   |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueToastProgress
::
::div{label="Code"}
@@@ ./components/content/examples/vue/toast/ExampleVueToastProgress.vue
::
:::

::alert{type="info"}
vue-sonner exposes no remaining-time hook, so the bar runs its own timer. It pauses whenever
vue-sonner pauses dismissal — hovering the stack or hiding the window — so the two stay in step.
::

## Toaster

`NToaster` accepts every vue-sonner `Toaster` prop.

| Prop            | Default        | Type       | Description                                                                  |
| --------------- | -------------- | ---------- | ---------------------------------------------------------------------------- |
| `position`      | `bottom-right` | `Position` | Corner the stack sits in.                                                    |
| `duration`      | `4000`         | `number`   | How long a toast stays, in milliseconds.                                     |
| `visibleToasts` | `3`            | `number`   | How many are shown before the rest are stacked.                              |
| `expand`        | `false`        | `boolean`  | Show the stack expanded instead of collapsed.                                |
| `closeButton`   | `true`         | `boolean`  | Show a close button on every toast.                                          |
| `richColors`    | `false`        | `boolean`  | Tint the card per type, using vue-sonner's palette rather than una's tokens. |

`duration`, `closeButton` and `richColors` can also be set per toast.

The close button sits at the end of the row rather than floating outside the card, and reads the
same on standard and rich toasts. `loading` toasts never get one — dismiss them by id. Because the
button is part of the row, vue-sonner's `closeButtonPosition` has nothing to place and is not
accepted.

```vue
<!-- off everywhere -->
<NToaster :close-button="false" />
```

```ts
// off for one toast
toast('Saving…', { closeButton: false })
```

::alert{type="info"}
Toasts using una-specific options — `actions`, `showProgress`, `leading` or `una` — render through
una's own component, which vue-sonner treats as fully custom: `richColors` doesn't apply to them.
::

## Theming

Colours come from una's theme tokens — the card follows `popover`, `popover-foreground` and
`border`, and type icons follow `success`, `error`, `warning` and `info`. Dark mode is handled by
una's colour mode; nothing extra is needed.

Individual parts can be restyled through the `una` prop:

```vue
<NToaster
  :una="{
    toastTitle: 'font-semibold',
    toastDescription: 'text-xs',
  }"
/>
```

## Migrating

```diff
- toast({ title: 'Saved', description: 'All good', closable: true })
+ toast('Saved', { description: 'All good' })

- toast({ toast: 'soft-error', title: 'Failed' })
+ toast.error('Failed')

- toast({ title: 'Uploading…', _toastProvider: { duration: 8000 } })
+ toast('Uploading…', { duration: 8000 })
```

| Before                                          | After                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| `title: 'Saved'`                                | The message is the first argument — `toast('Saved')`.                     |
| `toast: 'soft-error'` and other variants        | A type call — `toast.error()`, `toast.success()`, …                       |
| `closable: true`                                | `closeButton` — on by default; pass `false` to drop it.                   |
| `una: { toastCloseButton }`                     | `una: { toastClose }` — same key on `NToaster` and on a single toast.     |
| `_toastProvider.duration`                       | `duration` — per toast, or on `NToaster` for all of them.                 |
| `_toastProvider.swipeDirection`                 | `swipeDirections` on `NToaster`.                                          |
| `const { dismiss, update } = toast({ … })`      | Keep the returned id — `toast.dismiss(id)`, `toast('New title', { id })`. |
| `useToast().toasts`                             | Gone — `NToaster` renders the stack itself.                               |
| Slots — `#title`, `#description`, `#actions`, … | `toast.custom(markRaw(MyToast))` renders a component of your own.         |
| `NToastProvider` / `Viewport` / `Title` / `…`   | Removed — `NToaster` is the only component left.                          |

`actions[]`, `showProgress` and `leading` carry over unchanged.

## Presets

@@@ ../packages/preset/src/_shortcuts/toast.ts [shortcuts/toast.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/toast.ts [types/toast.ts]

## Composables

@@@ ../packages/nuxt/src/runtime/composables/useToast.ts [useToast.ts]

## Components

:::CodeGroup
::div{label="Toaster.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/Toaster.vue

::
::div{label="Toast.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/overlays/toast/Toast.vue

::
:::
