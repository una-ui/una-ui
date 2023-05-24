---
layout: home
title: "NexveltUI: A Vue 3 UI Library"

hero:
  image:
    src: /logo.svg
    alt: NexveltUI
  name: "NexveltUI"
  text: "A Vue 3 UI Library"
  tagline: Built-in Preset · Radix-ui colors · Rich Integrations
  actions:
    - theme: brand
      text: Getting Started
      link: /guide/
    - theme: alt
      text: Interactive Docs
      link: https://NexveltUI.dev/interactive/
      target: _blank
    - theme: alt
      text: Playground
      link: https://NexveltUI.dev/play/
      target: _blank

features:
  - icon: <span class="i-carbon:ibm-toolchain"></span>
    title: Fully Customizable
    details: No core utilities, all functionalities are provided via presets.
    link: /guide/
    linkText: Getting Started
  - icon: <span class="i-carbon-meter-alt"></span>
    title: Instant
    details: No parsing, no AST, no scanning. It’s 5x faster than Windi CSS or Tailwind JIT.
  - icon: <span class="i-carbon-wind-gusts"></span>
    title: Lightweight
    details: "Zero deps and browser friendly: ~6kb min+brotli"
  - icon: <span class="i-carbon-ibm-cloud-transit-gateway"></span>
    title: Rich Integrations
    details: "First class support of Vite, Webpack, PostCSS, CLI, VS Code, ESLint, etc."
    link: /integrations/vite
    linkText: "Learn more"
  - icon: <span class="i-carbon-asset"></span>
    title: Shortcuts
    details: "Aliasing or grouping utilities, dynamically"
    link: /config/shortcuts
    linkText: "Configuration and usage"
  - icon: <span class="i-carbon:code"></span>
    title: Attributify Mode
    details: "Group utilities in attributes"
    link: /presets/attributify
    linkText: "@NexveltUI/preset-attributify"
  - icon: <span class="i-carbon-face-wink hover:i-carbon-face-satisfied"></span>
    title: Pure CSS Icons
    details: "Use any icon as a single class"
    link: /presets/icons 
    linkText: "@NexveltUI/preset-icons"
  - icon: <span class="i-carbon:group-objects"></span>
    title: Variant Groups
    details: "Shorthand for group utils with common prefixes"
    link: /transformers/variant-group
    linkText: "@NexveltUI/transformer-variant-group"
  - icon: <span class="i-carbon:at"></span>
    title: CSS Directives
    details: "Reuse utils in CSS with @apply directive"
    link: /transformers/directives
    linkText: "@NexveltUI/transformer-directives"
  - icon: <span class="i-carbon-tree-view-alt scale-x--100"></span>
    title: Compilation Mode
    details: "Synthesizes multiple classes into one at build time"
    link: /transformers/compile-class
    linkText: "@NexveltUI/transformer-compile-class"
  - icon: <span class="i-carbon:inspection"></span>
    title: Inspector
    details: "Inspect and debug interactively"
    link: /tools/inspector
    linkText: "@NexveltUI/inspector"
  - icon: <span class="i-carbon:executable-program"></span>
    title: CDN Runtime Build
    details: "Use NexveltUI with one line of CDN import"
    link: /integrations/runtime
    linkText: "@NexveltUI/runtime"
---
