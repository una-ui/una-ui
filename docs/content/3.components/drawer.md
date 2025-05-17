---
description: 'A drawer component for Vue.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/drawer/Drawer.vue
    target: _blank
  - value: API reference
    to: https://github.com/unovue/vaul-vue
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

## Slots

| Name          | Props  | Description                                                                                       |
| ------------- | ------ | ------------------------------------------------------------------------------------------------- |
| `default`     | -      | Allows advanced customization using sub-components, replacing the default drawer structure.       |
| `trigger`     | `open` | The trigger button used to open the drawer. Receives the current open state.                      |
| `content`     | -      | Replaces the entire content container, including header, body, and footer.                        |
| `header`      | -      | Custom content for the header section, replacing both title and description.                      |
| `title`       | -      | Custom content for the drawer title, replacing the default title prop.                            |
| `description` | -      | Custom content for the drawer description, replacing the default description prop.                |
| `body`        | -      | Content to display in the main section of the drawer, between header and footer.                  |
| `footer`      | -      | Custom content for the drawer footer. By default contains a close button.                         |
| `close`       | -      | Custom content for the close button that dismisses the drawer. Used within DrawerClose component. |

### Custom Rendering

Use the `default` slot for full control over the drawer's structure. This allows you to compose the drawer using its individual sub-components (like `DrawerContent`, `DrawerClose`, etc., listed in the [Components](#components) section), similar to libraries like `shadcn/ui`.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueDrawerCustomRendering
::
::div{label="Code"}
@@@ ./components/content/examples/vue/drawer/ExampleVueDrawerCustomRendering.vue
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
