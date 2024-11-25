---
description: 'Displays an icon from a variety of icon libraries.'
badges:
  - value: Source
    icon: lucide:code
    to: https://github.com/una-ui/una-ui/blob/main/packages/nuxt/src/runtime/components/elements/Icon.vue
    target: _blank
---

UnaUI integrates [Iconify](https://icones.js.org/) to provide a wide variety of icons from multiple collections. Iconify ensures a consistent icon usage across different collections.

By default, UnaUI includes the following icon collections:

* [Lucide](https://icones.js.org/collection/lucide)
* [Radix Icons](https://icones.js.org/collection/radix-icons)
* [Tabler Icons](https://icones.js.org/collection/tabler)

To add more icon collections, follow these steps:

Install the desired icon collection using your preferred package manager:

:::CodeGroup
```bash [pnpm]
pnpm add -D @iconify-icons/[collection-name]
```

```bash [yarn]
yarn add -D @iconify-icons/[collection-name]
```

```bash [npm]
npm install -D @iconify-icons/[collection-name]
```
:::

:read-more{to="https://unocss.dev/presets/icons#install" title="Unocss Icons Preset" target="_blank"}

## Examples

### Basic

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIconUsage
::
::div{label="Code"}
@@@ ./components/content/examples/vue/icon/ExampleVueIconUsage.vue
::
:::

### Shortcuts

These icons are configured by default. They are used globally in the components such as [NInput](#ninput), [NAlert](#nalert), [NButton](#nbutton), and more.

::alert{type="info"}
If you want to update or add default icons, you can do so through the [Configuration section](/#getting-started/configuration).
::

@@@ ../packages/preset/src/_shortcuts/config/icons.ts [shortcuts/config/icons.ts]

:::CodeGroup
::div{label="Preview" preview}
  :ExampleVueIconDefault
::
::div{label="Code"}
@@@ ./components/content/examples/vue/icon/ExampleVueIconDefault.vue
::
:::

## Presets
@@@ ../packages/preset/src/_shortcuts/icon.ts [shortcuts/icon.ts]

## Props
@@@ ../packages/nuxt/src/runtime/types/icon.ts [types/icon.ts]

## Components
:::CodeGroup
::div{label="Icon.vue" icon="i-vscode-icons-file-type-vue"}
@@@ ../packages/nuxt/src/runtime/components/elements/Icon.vue
::
