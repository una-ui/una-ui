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

| Prop            | Default | Type                     | Description                                                                             |
| --------------- | ------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `label`         | -       | `string`                 | The label of the link                                                                   |
| `to`            | -       | `string`                 | The link destination                                                                    |
| `activeClass`   | -       | `string`                 | The class to apply when the link is active                                              |
| `inactiveClass` | -       | `string`                 | The class to apply when the link is inactive                                            |
| `active`        | -       | `boolean`                | Force the link to be active regardless of the current route, applying the `activeClass` |
| `exact`         | `false` | `boolean`                | Trigger the link active class only on exact matches of the `path`                       |
| `exactQuery`    | `false` | `boolean` \| `'partial'` | Trigger the link active class only on exact matches of the `query`                      |
| `exactHash`     | `false` | `boolean`                | Trigger the link active class only on exact matches of the `hash`                       |

The `exactQuery` prop supports three modes:

| Value       | Description                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------- |
| `false`     | Query parameters are ignored                                                                   |
| `true`      | All query parameters must match exactly                                                        |
| `'partial'` | Query parameters in the link must match, but extra parameters in the current route are allowed |

::alert{type="info"}
You can also use default slot to set the link label. Refer to [slots](#slots) for more information.
::

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

::alert{type="info"}
When disabled, the link will render without an `href` attribute and navigation will be prevented.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueLinkDisabled
::
::div{label="Code"}
@@@ ./components/content/examples/vue/link/ExampleVueLinkDisabled.vue
::
:::

### Accessibility

| Prop               | Default  | Type                                                                                  | Description                                                       |
| ------------------ | -------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `ariaCurrentValue` | `'page'` | `'page'` \| `'step'` \| `'location'` \| `'date'` \| `'time'` \| `'true'` \| `'false'` | Value of `aria-current` attribute when the link is exactly active |

::alert{type="info"}
The `aria-current` attribute is automatically added when the link is active in exact mode, improving accessibility for screen readers.
::

## Slots

| Name      | Props                 | Description              |
| --------- | --------------------- | ------------------------ |
| `default` | `{ active: boolean }` | The content of the link. |

::alert{type="info"}
The default slot receives an `active` prop that indicates whether the link is currently active, useful for conditional rendering or styling.
::

## Props

@@@ ../packages/nuxt/src/runtime/types/link.ts [types/link.ts]

## Presets

@@@ ../packages/preset/src/_shortcuts/link.ts [shortcuts/link.ts]

## Components

:::CodeGroup
::div{label="Link.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Link.vue

::
:::
