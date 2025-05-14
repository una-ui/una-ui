---
description: 'A sliding panel that comes in from the edge of the screen to display additional content or options without navigating away from the current page.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/alert-dialog/Drawer.vue
    target: _blank
  - value: API reference
    to: https://www.shadcn-vue.com/docs/components/drawer
    target: _blank
---

## Examples

### Basic

| Prop                        | Default  | Type                                   | Description                                                                                                                                               |
| --------------------------- | -------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `activeSnapPoint`           | -        | `number` \| `string` \| `null`         | Specifies the currently active snap point for the drawer.                                                                                                 |
| `closeThreshold`            | `0.25`   | `number`                               | Number between 0 and 1 that determines when the drawer should be closed.                                                                                  |
| `shouldScaleBackground`     | -        | `boolean`                              | Determines whether the background content should scale down when the dialog is open.                                                                      |
| `setBackgroundColorOnScale` | `true`   | `boolean`                              | When `false`, the body's background color will not change when the drawer is open.                                                                        |
| `scrollLockTimeout`         | `500`    | `number`                               | Duration (in milliseconds) for which the drawer is not draggable after scrolling content inside of the drawer.                                            |
| `fixed`                     | -        | `boolean`                              | When `true`, prevents the drawer from moving upwards if there's space, instead changing its height to make it fully scrollable when the keyboard is open. |
| `dismissible`               | `true`   | `boolean`                              | When `false`, dragging, clicking outside, pressing `Esc`, etc., will not close the drawer.                                                                |
| `modal`                     | `true`   | `boolean`                              | When `true`, interaction with outside elements is disabled, and only dialog content is visible to screen readers.                                         |
| `open`                      | -        | `boolean`                              | The controlled open state of the dialog. Can be bound using `v-model:open`.                                                                               |
| `overlay`                   | `true`   | `boolean`                              | Determines whether to show the overlay.                                                                                                                   |
| `defaultOpen`               | -        | `boolean`                              | Shows the drawer immediately upon loading.                                                                                                                |
| `nested`                    | -        | `boolean`                              | Enables nested drawers.                                                                                                                                   |
| `direction`                 | `bottom` | `top` \| `bottom` \| `left` \| `right` | Specifies the direction of the drawer.                                                                                                                    |
| `noBodyStyles`              | -        | `boolean`                              | When `true`, the `body` does not get any styles assigned from Vaul.                                                                                       |
| `handleOnly`                | `false`  | `boolean`                              | When `true`, allows the drawer to be dragged only by the drawer handle.                                                                                   |
| `preventScrollRestoration`  | -        | `boolean`                              | Prevents the browser from restoring the scroll position when the drawer is closed.                                                                        |
| `snapPoints`                | -        | `number` \| `string`                   | Array of numbers (0 to 100) representing the percentage of the screen a given snap point should take up. Example: `[0.2, 0.5, 0.8]`.                      |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDrawerBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/drawer/ExampleVueDrawerBasic.vue
::
:::

:read-more{to="https://www.reka-ui.com/docs/components/alert-dialog#root" title="Reka Alert Dialog Root API" target="_blank"}

### Buttons

| Prop                 | Default                                      | Type                     | Description              |
| -------------------- | -------------------------------------------- | ------------------------ | ------------------------ |
| `_alertDialogCancel` | `{ btn: 'solid-gray', label: 'Cancel'`       | `AlertDialogCancelProps` | The cancel button props. |
| `_alertDialogAction` | `{ btn: 'soft-primary', label: 'Continue' }` | `AlertDialogActionProps` | The action button props. |

::alert{type="info"}
The `AlertDialogActionProps` and `AlertDialogCancelProps` extends the `NButton` and `NLink` components, which means that you can use all the props from the [Button](/components/button#props) and [Link](/components/link#props) components.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomButtons
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomButtons.vue
::
:::

:read-more{to="/components/button" title="Button component" target="_blank"}

### Prevent Closing

| Prop           | Default | Type      | Description                                                |
| -------------- | ------- | --------- | ---------------------------------------------------------- |
| `preventClose` | -       | `boolean` | If true, the alert dialog will not close escape key press. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogPreventClose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogPreventClose.vue
::
:::

## Slots

| Name             | Props  | Description                                                                          |
| ---------------- | ------ | ------------------------------------------------------------------------------------ |
| `default`        | -      | Allows advanced customization using sub-components, replacing the default structure. |
| `content`        | -      | Replaces the entire default content container within the dialog popup.               |
| `trigger`        | `open` | The trigger button used to open the dialog.                                          |
| `cancel`         | -      | Custom content for the cancel button that aborts the proposed action.                |
| `action`         | -      | Custom content for the action button that confirms the destructive action.           |
| `cancel-wrapper` | -      | Override the entire default cancel button.                                           |
| `action-wrapper` | -      | Override the entire default action button.                                           |
| `header`         | -      | Custom content for the header section containing title and description.              |
| `footer`         | -      | Custom content for the footer section containing action and cancel buttons.          |
| `title`          | -      | Custom content for the dialog title, replacing the default title prop.               |
| `description`    | -      | Custom content for the dialog description, replacing the default description prop.   |

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

### Custom Width

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomSize.vue
::
:::

### Custom Animation

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueAlertDialogCustomAnimation
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert-dialog/ExampleVueAlertDialogCustomAnimation.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/drawer.ts [shortcuts/drawer.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/drawer.ts [types/drawer.ts]

## Components

:::CodeGroup
::div{label="Drawer.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/Drawer.vue

::
::div{label="DrawerClose.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerClose.vue

::
::div{label="DrawerContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerContent.vue

::
::div{label="DrawerDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerDescription.vue

::
::div{label="DrawerFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerFooter.vue

::
::div{label="DrawerHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerHeader.vue

::
::div{label="DrawerOverlay.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerOverlay.vue

::
::div{label="DrawerTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerTitle.vue

::
::div{label="DrawerTrigger.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/drawer/DrawerTrigger.vue

::
:::
