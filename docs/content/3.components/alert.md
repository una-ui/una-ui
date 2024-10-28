---
description: 'NAlert component - display a short, important message in a way that attracts the user''s attention without interrupting the user''s task.'
---

# Alert

---

## Basic

`NAlert` - display a short, important message in a way that attracts the user's attention without interrupting the user's task.

| Prop          | Description              |
| ------------- | ------------------------ |
| `title`       | Title of the alert       |
| `description` | Description of the alert |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertBasic.vue
::
:::

## Variants

`alert="{variant}"` - change the alert variant.

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `soft`    | The soft variant.           |
| `~`       | The unstyle or base variant |

::alert{type="info"}
  If you want to change the default variant or add new variant, you can do so through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertVariant.vue
::
:::

## Color

`alert="{variant}-{color}"` - change the color of the alert.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertColor.vue
::
:::

## Icon

`icon` - Automatically add icon to the alert based on the color.

> Supported colors are `success`, `error`, `warning`, `info` eg. `icon="outline-success"`.

`icon="{icon}"` - Customize the icon of the alert.

::alert{type="info"}
  You can customize the default icon status through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertIcon
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertIcon.vue
::
:::

## Size

`size="{size}"` - change the size of the alert.

> 🚀 You can freely adjust the size of the alert using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding`, `icons`, and `text-size` of the alert scale depends on the `size`. If you want to change the `text-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSize
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSize.vue
::
:::

## Closable

`closable` - add a close button to the alert.

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

| Slot          | Description                                |
| ------------- | ------------------------------------------ |
| `default`     | Cover the `title` and `description` slots. |
| `title`       | The title of the alert.                    |
| `description` | The description of the alert.              |
| `icon`        | The icon of the alert.                     |
| `closeIcon`  | The close icon of the alert.               |

> Example 1

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot1
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot1.vue
::
:::

> Example 2

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot2
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot2.vue
::
:::

> Example 3

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueAlertSlot3
::
::div{label="Code"}
@@@ ./components/content/examples/vue/alert/ExampleVueAlertSlot3.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/alert.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/alert.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Alert.vue
