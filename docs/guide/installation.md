---
title: Guide
description: Installation
---

# Installation

You can install `Nexvelt UI` in your project using one of the following methods:

::: warning
`Nexvelt UI` requires `Unocss` to work. Please make sure you have installed `Unocss` before installing `Nexvelt UI`.
:::

## Vue 3

1. Install `@unocss` and `@nexvelt/ui`:
::: code-group

```bash [npm]
npm install @unocss @nexvelt/ui -D
```

```bash [yarn]
yarn add @unocss @nexvelt/ui -D
```
  
```bash [pnpm]
pnpm install @unocss @nexvelt/ui -D
```
  
:::

2. Create a `unocss.config.ts` file in your project root:

```ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from '@nexvelt/ui-preset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetNexvelt(),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
```

3. Create a `main.ts` file in your project root:

```ts
import { createApp } from 'vue'
import App from './App.vue'

import '@nexvelt/ui-preset/style.css' // Import Nexvelt UI styles

createApp(App).mount('#app')
```

That's it! You're ready to go! 🚀

## Nuxt.js

1. Install `@nexvelt/ui-nuxt` module:

::: code-group

```bash [npm]
npm install @nexvelt/ui-nuxt -D
```

```bash [yarn]
yarn add @nexvelt/ui-nuxt -D
```
  
```bash [pnpm]
pnpm install @nexvelt/ui-nuxt -D
```

:::

2. Add `@nexvelt/ui-nuxt` to the `buildModules` section of `nuxt.config.js`:

```js
export default {
  buildModules: [
    '@nexvelt/ui-nuxt',
  ],
}
```

3. That's it! You're ready to go! 🚀

4. If you want to customize the theme, you can create a `unocss.config.ts` file in your project root:

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: {
          // 50-950
        }
      },
    },
  },
})
```


