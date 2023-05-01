# Nexvelt UI Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@nexvelt/ui-nuxt?file=playground%2Fapp.vue) -->
## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Powered by Nuxt
- 🚠 &nbsp;Powered by Vue
- 🌲 &nbsp;Powered by Uno CSS

## Quick Setup

1. Add `@nexvelt/ui-nuxt` dependency to your project

```bash
# Using pnpm
pnpm add -D @nexvelt/ui-nuxt

# Using yarn
yarn add --dev @nexvelt/ui-nuxt

# Using npm
npm install --save-dev @nexvelt/ui-nuxt
```

2. Add `@nexvelt/ui-nuxt` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@nexvelt/ui-nuxt'
  ]
})
```

That's it! You can now use Nexvelt UI Nuxt in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nexvelt/ui-nuxt/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@nexvelt/ui-nuxt

[npm-downloads-src]: https://img.shields.io/npm/dm/@nexvelt/ui-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@nexvelt/ui-nuxt

[license-src]: https://img.shields.io/npm/l/@nexvelt/ui-nuxt.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@nexvelt/ui-nuxt

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
