---
description: 'Use to show a placeholder while content is loading.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Skeleton.vue
    target: _blank
---

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSkeletonBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonBasic.vue
::
:::

### Shape

| Prop      | Default | Type     | Description                       |
| --------- | ------- | -------- | --------------------------------- |
| `rounded` | `none`  | `string` | Change the shape of the skeleton. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSkeletonShape
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonShape.vue
::
:::

### Color

| Prop       | Default | Type     | Description                       |
| ---------- | ------- | -------- | --------------------------------- |
| `skeleton` | `gray`  | `string` | Change the color of the skeleton. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSkeletonColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonColor.vue
::
:::

### Element

| Prop      | Default | Type                  | Description                                             |
| --------- | ------- | --------------------- | ------------------------------------------------------- |
| `as`      | `div`   | `string \| Component` | Change the element the skeleton renders as.             |
| `asChild` | `false` | `boolean`             | Render the child element directly instead of a wrapper. |

A `div` is not valid inside a `p`, and the parser closes the paragraph at its start tag — which
lifts the placeholder out as a sibling and leaves the hydrated DOM a different shape from the one
Vue rendered. Render the skeleton `as="span"` for a placeholder in flowing text. A `span` is
inline, so give it `block` (or `inline-block`) to keep its height.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueSkeletonElement
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonElement.vue
::
:::

## Slots

| Name      | Props | Description       |
| --------- | ----- | ----------------- |
| `default` | -     | The default slot. |

## Presets

@@@ ../packages/preset/src/_shortcuts/skeleton.ts [shortcuts/skeleton.ts]

## Props

@@@ ../packages/nuxt/src/runtime/types/skeleton.ts [types/skeleton.ts]

## Components

:::CodeGroup
::div{label="Skeleton.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Skeleton.vue
::
:::
