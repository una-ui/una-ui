---
title: Guide
description: Installation
---

# Installation f

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

You can installl `NexveltUI Presets` in your project using one of the following methods:

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
