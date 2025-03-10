---
description: 'Displays a card with header, content, and footer.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/card/Card.vue
    target: _blank
---

## Examples

### Basic

| Prop          | Default | Type     | Description                                             |
| ------------- | ------- | -------- | ------------------------------------------------------- |
| `title`       | -       | `string` | Sets the main heading text displayed in the card header |
| `description` | -       | `string` | Provides secondary text shown below the title           |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueCardBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardBasic.vue
::
:::

### Variant

| Prop   | Default   | Type        | Description                            |
| ------ | --------- | ----------- | -------------------------------------- |
| `card` | `outline` | `{variant}` | Controls the visual style of the card. |

| Variant   | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `outline` | Adds a subtle border while maintaining a clean background.     |
| `soft`    | Applies a light background color with matching border.         |
| `~`       | Removes all variant styling, keeping only core card structure. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueCardVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardVariant.vue
::
:::

### Color

| Prop   | Default             | Type                | Description                                                                 |
| ------ | ------------------- | ------------------- | --------------------------------------------------------------------------- |
| `card` | `{variant}-primary` | `{variant}-{color}` | Combines variant and color to define the card's appearance (e.g. soft-blue) |

::alert{type="info"}
The color variant only affects the card's background and border colors. Other elements like text and icons maintain their default styling.
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

| Name          | Props | Description                                                                      |
| ------------- | ----- | -------------------------------------------------------------------------------- |
| `header`      | -     | The header section of the card, typically containing the title and description.  |
| `default`     | -     | The main content area of the card.                                               |
| `title`       | -     | Custom title content that overrides the title prop.                              |
| `description` | -     | Custom description content that overrides the description prop.                  |
| `footer`      | -     | The footer section of the card, typically for actions or additional information. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueCardSlots
::
::div{label="Code"}
@@@ ./components/content/examples/vue/card/ExampleVueCardSlots.vue
::
:::

## Presets

@@@ ../packages/preset/src/_shortcuts/card.ts [shortcuts/card.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/card.ts [types/card.ts]

## Components

:::CodeGroup
::div{label="Card.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/Card.vue

::
::div{label="CardContent.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardContent.vue

::
::div{label="CardTitle.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardTitle.vue

::
::div{label="CardDescription.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardDescription.vue

::
::div{label="CardHeader.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardHeader.vue

::
::div{label="CardFooter.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/card/CardFooter.vue

::
:::
