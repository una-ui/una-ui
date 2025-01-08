---
description: 'Displays a form textarea or a component that looks like a textarea.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/forms/Input.vue
    target: _blank
---

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTextareaBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaBasic.vue
::
:::

### Rows and Cols

| Prop   | Default | Type     | Description                                 |
| ------ | ------- | -------- | ------------------------------------------- |
| `rows` | -       | `number` | Set the number of rows for the textarea.    |
| `cols` | -       | `number` | Set the number of columns for the textarea. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTextareaRowsCols
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaRowsCols.vue
::
:::

### Autosizing

| Prop         | Default | Type               | Description                                                                                                                                                               |
| ------------ | ------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoresize` | `false` | `boolean` `number` | Enables textarea autosizing. When `true`, it adjusts height to fit content. When a `number`, it sets the maximum height to fit content, not exceeding the specified rows. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTextareaAutoresize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaAutoresize.vue
::
:::

### Resizing

| Prop     | Default | Type                  | Description                                 |
| -------- | ------- | --------------------- | ------------------------------------------- |
| `resize` | `none`  | `none` `null` `y` `x` | Change the resize behavior of the textarea. |

| Option | Description                                           |
| ------ | ----------------------------------------------------- |
| `none` | Prevents the textarea from being resizable. (Default) |
| `null` | Enables both vertical and horizontal resizing.        |
| `y`    | Allows vertical resizing.                             |
| `x`    | Allows horizontal resizing.                           |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueTextareaResize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/textarea/ExampleVueTextareaResize.vue
::
:::

:read-more{to="/components/form-group" title="form-group component" target="_blank"}

## Slots

:read-more{to="/components/input#slots" title="Input component slots" target="_blank"}

## Presets

:read-more{to="/components/input#slots" title="Input component slots" target="_blank"}

## Props

@@@ ../packages/nuxt/src/runtime/types/input.ts [types/input.ts]

## Components

:::CodeGroup
::div{label="Input.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/forms/Input.vue
::
:::
