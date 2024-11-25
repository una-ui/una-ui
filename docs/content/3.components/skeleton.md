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

| Prop      | Default | Type     | Description                     |
| --------- | ------- | -------- | ------------------------------- |
| `rounded` | `none`  | `string` | Change the shape of the skeleton.|

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSkeletonShape
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonShape.vue
::
:::

### Color

| Prop      | Default | Type     | Description                     |
| --------- | ------- | -------- | ------------------------------- |
| `skeleton`   | `gray`  | `string` | Change the color of the skeleton.|

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueSkeletonColor
::
::div{label="Code"}
@@@ ./components/content/examples/vue/skeleton/ExampleVueSkeletonColor.vue
::
:::

### Slots

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
