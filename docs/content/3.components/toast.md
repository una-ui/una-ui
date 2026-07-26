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

::alert{type="warning"}
The bar runs its own timer. vue-sonner exposes no remaining-time hook, so the bar keeps counting
while the toast itself is paused — hovering the stack or blurring the window pauses dismissal but
not the bar.
::

## Toaster

`NToaster` accepts every vue-sonner `Toaster` prop.

| Prop            | Default        | Type       | Description                                                                  |
| --------------- | -------------- | ---------- | ---------------------------------------------------------------------------- |
| `position`      | `bottom-right` | `Position` | Corner the stack sits in.                                                    |
| `duration`      | `4000`         | `number`   | How long a toast stays, in milliseconds.                                     |
| `visibleToasts` | `3`            | `number`   | How many are shown before the rest are stacked.                              |
| `expand`        | `false`        | `boolean`  | Show the stack expanded instead of collapsed.                                |
| `closeButton`   | `false`        | `boolean`  | Show a close button on every toast.                                          |
| `richColors`    | `false`        | `boolean`  | Tint the card per type, using vue-sonner's palette rather than una's tokens. |

`duration`, `closeButton` and `richColors` can also be set per toast.

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

```ts
// before
toast({ title: 'Saved', description: 'All good', closable: true })
toast({ toast: 'soft-error', title: 'Failed' })

// after
toast('Saved', { description: 'All good' })
toast.error('Failed')
```

- The message is now the first argument; `title` is gone.
- Variant props (`toast="soft-error"`) are replaced by types — `toast.error()`, `toast.success()`.
- `closable` becomes `closeButton`, and now defaults to `false`.
- `NToastProvider`, `NToastViewport`, `NToastTitle`, `NToastDescription`, `NToastAction`,
  `NToastClose` and `NToastInfo` are removed. `NToaster` renders the whole stack.
- `actions` and `showProgress` are unchanged.

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
