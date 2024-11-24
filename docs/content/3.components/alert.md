---
description: 'Displays a callout for user attention.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Alert.vue
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type     | Description              |
| ------------- | ------- | -------- | ------------------------ |
| `title`       | -       | `string` | Title of the alert       |
| `description` | -       | `string` | Description of the alert |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertBasic.vue
::
:::

### Variant

| Prop    | Default   | Type        | Description               |
| ------- | --------- | ----------- | ------------------------- |
| `alert` | `outline` | `{variant}` | The variant of the alert. |

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `soft`    | The soft variant.           |
| `~`       | The unstyle or base variant |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertVariant.vue
::
:::

### Color

| Prop    | Default             | Type                | Description             |
| ------- | ------------------- | ------------------- | ----------------------- |
| `alert` | `{variant}-primary` | `{variant}-{color}` | The color of the alert. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertColor.vue
::
:::

### Icon

| Prop   | Default | Type     | Description                      |
| ------ | ------- | -------- | -------------------------------- |
| `icon` | -       | `string` | Customize the icon of the alert. |

::alert{type="info"}
  If you provide an icon type such as `success`, `error`, `warning`, or `info`, the alert will automatically use the corresponding color. 
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertIcon.vue
::
:::

:read-more{to="/components/icon" title="Icon component" target="_blank"}

### Size

| Prop   | Default | Type     | Description                                 |
| ------ | ------- | -------- | ------------------------------------------- |
| `size` | `sm`    | `string` | Allows you to change the size of the input. |

> 🚀 Adjust input size freely using any size, breakpoints (e.g., `sm:sm, xs:lg`), or states (e.g., `hover:lg, focus:3xl`).

::alert{type="warning"}
The **padding**, **icons**, and **text-size** of the input scale are dynamically adjusted based on the **size** property. To customize the **text-size** and **padding** simultaneously, you can use utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSize.vue
::
:::

### Closable

| Prop       | Default | Type      | Description                      |
| ---------- | ------- | --------- | -------------------------------- |
| `closable` | -       | `boolean` | Add a close button to the alert. |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertClosable
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertClosable.vue
::
:::

## Events

| Event Name | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| `@close`   | emit an event when the close icon is clicked. Use in conjunction with `closable`. |

## Slots

| Name          | Props | Description                                |
| ------------- | ----- | ------------------------------------------ |
| `default`     | -     | Cover the `title` and `description` slots. |
| `title`       | -     | The title of the alert.                    |
| `description` | -     | The description of the alert.              |
| `icon`        | -     | The icon of the alert.                     |
| `closeIcon`   | -     | The close icon of the alert.               |

### Example 1

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot1.vue
::
:::

### Example 2

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot2
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot2.vue
::
:::

### Example 3

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot3
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot3.vue
::
:::

### Presets

@@@ ../packages/preset/src/_shortcuts/alert.ts [shortcuts/alert.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/alert.ts [types/alert.ts]

## Components

:::CodeGroup
::div{label="Alert.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Alert.vue
::
:::
