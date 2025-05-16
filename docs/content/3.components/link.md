---
description: 'Provides a custom <NuxtLink> component to handle any kind of links within your application.'
badges:
  - value: Source
    icon: radix-icons:github-logo
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Link.vue
    target: _blank
  - value: API reference
    to: https://nuxt.com/docs/api/components/nuxt-link
    target: _blank
---

## Examples

### Basic

| Prop            | Default | Type      | Description                                                         |
| --------------- | ------- | --------- | ------------------------------------------------------------------- |
| `label`         | -       | `string`  | The label of the link.                                              |
| `inactiveClass` | -       | `string`  | The class to apply when the link is inactive.                       |
| `exact`         | `false` | `boolean` | Trigger the link active class only on exact matches of the `path`.  |
| `exactQuery`    | `false` | `boolean` | Trigger the link active class only on exact matches of the `query`. |
| `exactHash`     | `false` | `boolean` | Trigger the link active class only on exact matches of the `hash`.  |

:read-more{to="https://nuxt.com/docs/api/components/nuxt-link#props" title="Nuxt Link Props" target="_blank"}

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueLinkBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/link/ExampleVueLinkBasic.vue
::
:::

### Disabled

| Prop       | Default | Type      | Description                   |
| ---------- | ------- | --------- | ----------------------------- |
| `disabled` | `false` | `boolean` | Whether the link is disabled. |

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueLinkDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/link/ExampleVueLinkDisabled.vue
::
:::

## Slots

| Name      | Props | Description              |
| --------- | ----- | ------------------------ |
| `default` | -     | The content of the link. |

## Props

@@@ ../packages/nuxt/src/runtime/types/link.ts [types/link.ts]

## Presets

@@@ ../packages/preset/src/_shortcuts/link.ts [shortcuts/link.ts]

## Components

:::CodeGroup
::div{label="Link.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Link.vue

::
