---
title: Guide
description: Installation
---

# Installation 

You can install `Nexvelt UI` in your project using one of the following methods:

## NexveltUI Components and Presets

### Nuxt.js

1. Install `@nexvelt/ui-nuxt` module:

::: code-group

```bash [npm]
npm install @nexvelt/ui-nuxt 
```

```bash [yarn]
yarn add @nexvelt/ui-nuxt 
```
  
```bash [pnpm]
pnpm install @nexvelt/ui-nuxt 
```

:::

1. Add `@nexvelt/ui-nuxt` to the `modules` section of `nuxt.config.js`:

```js
export default {
  modules: [
    '@nexvelt/ui-nuxt',
  ],
}
```

2. That's it! You're ready to go! 🚀

:::warning
Customizing the module is not yet supported until the first release. 
:::

### Vue.js (coming soon)

---

## NexveltUI Presets Only

::: danger
  Documentation for `NexveltUI Presets` is not yet available.
::: 

You can install `NexveltUI Presets` in your project using one of the following methods:

::: tip
This is applicable to all UI frameworks that are supported by `Unocss`.
:::

1. Install `@nexvelt/ui-preset` preset:

::: code-group

```bash [npm]
npm install unocss @nexvelt/ui-preset  
```

```bash [yarn]
yarn add unocss @nexvelt/ui-preset 
```
  
```bash [pnpm]
pnpm install unocss @nexvelt/ui-preset 
```

:::

2.  Add `@nexvelt/ui-preset` to the `presets` section of `unocss.config.ts`:

::: tip
If you don't have `unocss.config.ts` file, you can create it in the root directory of your project. Below is the recommended configuration for NexveltUI Presets.
:::

```ts
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import presetNexvelt from '@nexvelt/ui-preset'

export default {
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetNexvelt(), // Add this line
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
}
```

3. Import styles in your `main.ts` or any other entry point of your application:

```ts
import 'unocss'
import '@nexvelt/ui-preset/style.css'
import '@unocss/reset/tailwind-compat.css'
```

4. That's it! You're ready to go! 🚀
