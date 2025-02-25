---
description: 'Extends the Dialog component to display content that complements the main content of the screen.'
navBadges:
  - value: New
    type: lime
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/sheet/Sheet.vue
    target: _blank
  - value: API reference
    to: https://www.reka-ui.com/docs/components/dialog
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type      | Description                                                                                                                                               |
| ------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | -       | `string`  | The title of the sheet.                                                                                                                                   |
| `description` | -       | `string`  | The description of the sheet.                                                                                                                             |
| `showClose`   | `true`  | `boolean` | Show the close button.                                                                                                                                    |
| `defaultOpen` | `false` | `boolean` | The open state of the sheet when it is initially rendered. Use when you do not need to control its open state.                                            |
| `modal`       | `true`  | `boolean` | The modality of the sheet. When set to true, interaction with outside elements will be disabled and only sheet content will be visible to screen readers. |
| `open`        | -       | `boolean` | The controlled open state of the sheet. Can be binded as `v-model:open`.                                                                                  |
| `overlay`     | `true`  | `boolean` | Show the overlay.                                                                                                                                         |

:read-more{to="https://www.reka-ui.com/docs/components/dialog#root" title="Reka Sheet Root API" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSheetBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/sheet/ExampleVueSheetBasic.vue
::
:::

### Variants

| Prop    | Default | Type     | Description                                                                                                                                                       |
| ------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sheet` | `right` | `string` | The side from which the sheet will appear, the predefined presets are `top`, `right`, `bottom`, `left`, You can also pass a custom value to use a custom variant. |

:read-more{to="https://github.com/una-ui/una-ui/blob/main/packages/preset/src/_shortcuts/sheet.ts" title="Sheet Variants presets" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSheetVariants
::
::div{label="Code"}
@@@ ./components/content/examples/vue/sheet/ExampleVueSheetVariants.vue
::
:::

### Prevent Closing

| Prop           | Default | Type      | Description                                                             |
| -------------- | ------- | --------- | ----------------------------------------------------------------------- |
| `preventClose` | -       | `boolean` | If true, the sheet will not close on overlay click or escape key press. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSheetPreventClose
::
::div{label="Code"}
@@@ ./components/content/examples/vue/sheet/ExampleVueSheetPreventClose.vue
::
:::

### Customization

You can customize the sheet using the following sub components props and `una` prop.

| Name                | Props | Type     | Description               |
| ------------------- | ----- | -------- | ------------------------- |
| `_sheetTrigger`     | -     | `object` | The trigger button props. |
| `_sheetContent`     | -     | `object` | The content props.        |
| `_sheetHeader`      | -     | `object` | The header props.         |
| `_sheetFooter`      | -     | `object` | The footer props.         |
| `_sheetTitle`       | -     | `object` | The title props.          |
| `_sheetDescription` | -     | `object` | The description props.    |
| `_sheetClose`       | -     | `object` | The close button props.   |
| `_sheetOverlay`     | -     | `object` | The overlay props.        |
| `_sheetPortal`      | -     | `object` | The portal props.         |
| `una`               | -     | `object` | The una preset props.     |

:read-more{to="#props" title="Sheet props" }

#### Size Customization

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSheetCustomSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/sheet/ExampleVueSheetCustomIcon.vue
::
:::

#### Overlay Customization

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSheetCustomOverlay
::
::div{label="Code"}
@@@ ./components/content/examples/vue/sheet/ExampleVueSheetCustomOverlay.vue
::
:::

### Slots

| Name          | Props  | Description                                                                        |
| ------------- | ------ | ---------------------------------------------------------------------------------- |
| `default`     | -      | The body slot.                                                                     |
| `content`     | -      | The entire content slot, includes the header, title, description, footer and body. |
| `trigger`     | `open` | The trigger button used to open the sheet.                                         |
| `header`      | -      | Contains the title and description slots.                                          |
| `title`       | -      | The title displayed in the sheet.                                                  |
| `description` | -      | The description displayed below the title.                                         |
| `footer`      | -      | The footer.                                                                        |

## Presets

@@@ ../packages/preset/src/_shortcuts/sheet.ts [shortcuts/sheet.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/sheet.ts [types/sheet.ts]

## Components

:::CodeGroup
::div{label="Sheet.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/Sheet.vue

::
::div{label="SheetContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetContent.vue

::
::div{label="SheetTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetTitle.vue

::
::div{label="SheetDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetDescription.vue

::
::div{label="SheetHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetHeader.vue

::
::div{label="SheetFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetFooter.vue

::
::div{label="SheetClose.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/sheet/SheetClose.vue

::
:::
