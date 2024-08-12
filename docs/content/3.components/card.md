---
description: 'The Card component is a flexible container component'
---

# 🌑 Card

---

## Basic

<!-- needs to change the description ("flexible container component.") -->
`NCard` - flexible container component. 

| Prop          | Description              |
| ------------- | ------------------------ |
| `title`       | Title of the card       |
| `description` | Description of the card |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCardBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardBasic.vue
::
:::

## Variants

`card="{variant}"` - change the card variant

| Variant   | Description                 |
| --------- | --------------------------- |
| `outline` | The default variant.        |
| `soft`    | The soft variant.           |
| `~`       | The unstyle or base variant |

::alert{type="info"}
  If you want to change the default variant or add new variant, you can do so through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCardVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardVariant.vue
::
:::

## Color

`card="{variant}-{color}"` - change the color of the card.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCardColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardColor.vue
::
:::

## Advanced

You can use the `header`, `footer`, `title`, `description` as the named templates for your content positions.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueCardAdvanced
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardAdvanced.vue
::
:::


## Slots

> You can use the following slots to customize the card.

| Name          | Description           |
| ------------- | --------------------- | 
| `header`      | The header slot.      |
| `default`     | The default slot.     |
| `title`       | The title slot.       |
| `description` | The description slot. |
| `footer`      | The footer slot.      |

## Props
@@@ ../packages/nuxt/src/runtime/types/card.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/card.ts

## Component

### 

:::CodeGroup
::code-block{label="Card" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/card/Card.vue

::
::code-block{label="CardContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardContent.vue

::
::code-block{label="CardTitle"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardTitle.vue

::
::code-block{label="CardDescription"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardDescription.vue

::
::code-block{label="CardHeader"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardHeader.vue

::
::code-block{label="CardFooter"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardFooter.vue

::
:::
