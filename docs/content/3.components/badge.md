---
description: 'NBadge component - used to display a small badge with a number or text.'
---

# 🟢 Badge

---

## Basic

`NBadge` is a component that can be used to display a small badge with a number or text.

>You can use `label prop` or `default slot` to set the label text.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeBasic
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeBasic.vue
::
:::

## Variants

`badge="{variant}"` - change the variant of the badge.

| Variant   | Description                 |
| --------- | --------------------------- |
| `soft`    | The default variant.        |
| `solid`   | The solid variant.          |
| `outline` | The outline variant.        |
| `~`       | The unstyle or base variant |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeVariant.vue
::
:::

## Colors

`badge="{variant}-{color}"` - change the color of the badge.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeColor.vue
::
:::

## Sizes

`size="{size}"` - change the size of the button.

> 🚀 You can freely adjust the size of the badge using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding` and `font-size` of the badge scale depends on the `size`. If you want to change the `font-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeSize.vue
::
:::

## Icon

`icon={icon}` - add an icon to the badge.

::alert{type="info"}
By default we use `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/), refer to [configuration](/getting-started/configuration) for more information.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeIcon
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeIcon.vue
::
:::

## Closable

`closable` - add a close button to the badge.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeClosable
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeClosable.vue
::
:::

## Events

| Event Name | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| `@close`   | emit an event when the close icon is clicked. Use in conjunction with `closable`. |

## Slots

### Default

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueBadgeDefaultSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/badge/ExampleVueBadgeDefaultSlot.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/badge.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/badge.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Badge.vue
