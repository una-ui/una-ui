---
description: 'NLink component - a component for rendering links to pages in your application.'
---

# Link

---

## Basic

`NLink` is a custom `NuxtLink` component that provides additional functionality for rendering links to pages in your application.

| Prop            | Type      | Description                                                       |
| --------------- | --------- | ----------------------------------------------------------------- |
| `inactiveClass` | `string`  | The class to apply when the link is inactive.                     |
| `exact`         | `boolean` | Trigger the link active class only on exact matches of the `path`.  |
| `exactQuery`    | `boolean` | Trigger the link active class only on exact matches of the `query`. |
| `exactHash`     | `boolean` | Trigger the link active class only on exact matches of the `hash`.  |

> You can also use any prop provided by the [NuxtLink](https://nuxt.com/docs/api/components/nuxt-link#props){target="_blank"} component.

You can take a look and click at examples of different usage below:

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueLinkBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/link/ExampleVueLinkBasic.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/link.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/link.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Link.vue
