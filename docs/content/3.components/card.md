---
description: 'NCard - use to display content in a flexible container component.'
---

# 🟢 Card

---

## Basic

`NCard` - use to display content in a flexible container component.

| Prop          | Description              |
| ------------- | ------------------------ |
| `title`       | Title of the card       |
| `description` | Description of the card |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardBasic
::
::div{label="Code"}
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
  If you want to change the default variant or add new variant, you can do so through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardVariant.vue
::
:::

## Color

`card="{variant}-{color}"` - change the color of the card.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/#getting-started/configuration).
::

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardColor.vue
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

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueCardSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardSlots.vue
::
:::


## Props
@@@ ../packages/nuxt/src/runtime/types/card.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/card.ts

## Component

### 

:::CodeGroup
::div{label="Card" preview}
@@@ ../packages/nuxt/src/runtime/components/elements/card/Card.vue

::
::div{label="CardContent"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardContent.vue

::
::div{label="CardTitle"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardTitle.vue

::
::div{label="CardDescription"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardDescription.vue

::
::div{label="CardHeader"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardHeader.vue

::
::div{label="CardAbout"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardAbout.vue

::
::div{label="CardFooter"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardFooter.vue

::
:::
