---
description: 'NIcon component - used to display icons.'
---

# 🟢 Icon

---

## Basic

::alert{type="info"}
By default, we use the `radix-icons` `lucide` `heroicons` and `tabler` for the icons, you can use any icon provided by `Iconify` through [icones](https://icones.js.org/){target="_blank"}, refer to [configuration](/#getting-started/configuration) for more information.
::

use the `NIcon` tag to create a basic icon.

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIconUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/icon/ExampleVueIconUsage.vue
::
:::

## Default Icons

> These icons are configured by default. They are used globally in the components such as `NInput` and `NAlert`.

::alert{type="info"}
If you want to update or add default icons, you can do so through the [Configuration section](/#getting-started/configuration).
::

| Icon Name   | Icon                                        |
| ----------- | ------------------------------------------- |
| `i-loading` | `i-tabler-loader-2`           |
| `i-warning` | `i-heroicons-exclamation-triangle-20-solid` |
| `i-error`   | `i-heroicons-exclamation-circle-20-solid`   |
| `i-success` | `i-heroicons-check-circle-20-solid`         |
| `i-info`    | `i-heroicons-information-circle-20-solid`   |
| `i-close`   | `i-heroicons-x-20-solid`                    |

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIconDefault
::
::div{label="Code"}
@@@ ./components/content/examples/vue/icon/ExampleVueIconDefault.vue
::
:::

## Props
@@@ ../packages/nuxt/src/runtime/types/icon.ts

## Presets
@@@ ../packages/preset/src/_shortcuts/icon.ts

## Component
@@@ ../packages/nuxt/src/runtime/components/elements/Icon.vue

