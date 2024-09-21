---
description: 'NButton component - use to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.'
---

# 🟢 Button

---

## Basic

`NButton` - use to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

>You can use `label prop` or `default slot` to set the button text.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonUsage
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonUsage.vue
::
:::

## Variants

`btn="{variant}"` - change the variant of the button.

| Variant   | Description                 |
| --------- | --------------------------- |
| `solid`   | The default variant.        |
| `outline` | The outline variant.        |
| `ghost`   | The ghost variant.          |
| `link`    | The link variant.           |
| `soft`    | The soft variant.           |
| `text`    | The text variant.           |
| `~`       | The unstyle or base variant |

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonVariant
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonVariant.vue
::
:::

## Color

`btn="{variant}-{color}"` - change the color of the button.

::alert{type="info"}
You can use any color provided by the [Tailwind CSS](https://tailwindcss.com/docs/customizing-colors){target="_blank"} color palette, the default is `primary`. You can also add your own colors to the palette through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonColor
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonColor.vue
::
:::

## Size

`size="{size}"` - change the size of the button.

> 🚀 You can freely adjust the size of the button using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
The `padding` and `font-size` of the button scale depends on the `size`. If you want to change the `font-size` and `padding` simultaneously, you can always customize it using utility classes.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonSize
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonSize.vue
::
:::

## Rounded

`rounded="{size}"` - change the border-radius of the button.

> 🚀 You can freely adjust the size of the rounded using any size imaginable. No limits exist, and you can use `breakpoints` such as `sm:sm, xs:lg` to change size based on screen size or `states` such as `hover:lg, focus:3xl` to change size based on input state and more.

::alert{type="info"}
You can use any size provided by the [Tailwind CSS](https://tailwindcss.com/docs/border-radius){target="_blank"} border-radius scale, the default is `md`. You can also add your own sizes to the scale through the [Configuration section](/getting-started/configuration).
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonRounded
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonRounded.vue
::
:::

## Shape

`btn="square"` - to force the padding and width to have the same size, usefull for icon buttons.

::alert{type="info"}
By default, the padding is `rectangle`, you can change it to `square`. 
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonShape
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonShape.vue
::
:::

## Icon

`icon` - change label text to icon.

`leading="{icon}"` - add a leading icon to the button.

`trailing="{icon}"` - add a trailing icon to the button.


::alert{type="info"}
By default we use `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/), refer to [configuration](/getting-started/configuration) for more information.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonIcon
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonIcon.vue
::
:::

## Link

`to` - add a link to the button. 

::alert{type="info"}
Since we use `NuxtLink` for the link, you can use any `NuxtLink` props such as `prefetch`, `target`, `activeClass`, etc. Refer to [NuxtLink](https://nuxt.com/docs/api/components/nuxt-link#props){target="_blank"} for more information.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonLink
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLink.vue
::
:::


## Block

<!-- @unocss-skip-start -->
`btn="block"` - add block style to the button.
<!-- @unocss-skip-end -->

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonBlock
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonBlock.vue
::
:::

## Disabled

`disabled` - add a disabled state to the button.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonDisabled
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonDisabled.vue
::
:::

## Loading

By default we trigger the disabled state when the button is loading.

`loading` - add a loading state to the button.

`loading-placement` - change the loading icon placement, default is `leading`. options are `leading`, `trailing` and `label`.


::alert{type="info"}
You can use `loading` with `icon` and `label` at the same time.
::

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonLoading
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLoading.vue
::
:::

## Slots

### Default
`#default` - set the button label, refer to [label](#usage) for the example.

### Leading

`#leading` - add a leading icon to the button.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonLeadingSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLeadingSlot.vue
::
:::

### Trailing

`#tailing` - add a trailing icon to the button.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonTrailingSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonTrailingSlot.vue
::
:::

### Loading

`#loading` - add a loading icon to the button.

:::CodeGroup
::code-block{label="Preview" preview}
  :ExampleVueButtonLoadingSlot
::
::code-block{label="Code"}
@@@ ./components/content/examples/vue/button/ExampleVueButtonLoadingSlot.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/button.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/btn.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Button.vue
