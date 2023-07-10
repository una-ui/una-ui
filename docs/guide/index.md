---
title: Guide
description: Introduction
---

# Nexvelt UI

###### **NexveltUI** is a Vue.js UI framework inspired by [Tailwind CSS](https://tailwindcss.com/) and [UNOCSS](https://unocss.dev/). It provides a set of components and presets that can be used to build beautiful user interfaces with minimal effort.

::: warning
This documentation is still a work in progress. The package itself is not yet officially released and some sections of this documentation may be incomplete or missing entirely until the first release. We are working hard to complete the documentation as soon as possible.
:::

## Vision

NexveltUI aims to provide a complete solution for building user interfaces using Vue.js and UNOCSS. It is designed to be simple, intuitive, and easy to use, while also providing extensive customization options for developers who want to create unique and visually appealing user interfaces.

## Design Principles

NexveltUI follows UNOCSS design principles, offering a customizable and lightweight UI framework. UNOCSS, being an Atomic CSS framework, generates CSS only for the classes used in a project, making NexveltUI fast and lightweight, even for large-scale projects.

## Comparison with other UI frameworks and presets

#### ❌ Typical UI framework approach
```html
<XButton
  size="sm"
  rounded="full"
  variant="solid"
  color="info"
>
  Solid Button
</XButton>

<XButton
  variant="solid"
  color="primary"
>
  Solid primary
</XButton>

<XButton
  size="lg"
  variant="outline"
  color="secondary"
>
  Outline Button
</XButton>

<XButton
  size="lg"
  variant="soft"
  color="accent"
>
  Ghost Button
</XButton>
```

>This generates a lot of unnecessary CSS because it generates CSS for all the possible combinations of the props. Which can slow down the application and increase the bundle size. 

#### ❌ DaisyUI preset approach
```html
<button
  class="btn btn-info btn-sm rounded-full"
>
  Solid info
</button>

<button
  class="btn btn-primary"
>
  Solid primary
</button>

<button
  class="btn btn-outline btn-secondary btn-lg"
>
  Outline Button
</button>

<button
  class="btn btn-ghost btn-accent btn-lg"
>
  Ghost Button
</button>
```

>This approach is better than the previous one, but it still generates a lot of unnecessary CSS. It also doesn't provide the ability to customize the component using utility classes.

#### ✅ NexveltUI preset approach
```html
<button
  btn="solid-pink sm"
  class="rounded-full"
>
  Solid pink
</button>

<button
  btn="solid"
>
  Default
</button>

<button
  btn="outline-lime lg"
  class="rounded-none"
>
  Outline lime
</button>

<button
  btn="soft-orange xl"
>
  Soft orange
</button>
```

>This approach is the best of both worlds. It generates CSS only for the classes used in the project, and also provides the ability to customize the component using utility classes.

Heres a quick example output of the above code.

<ExampleVueIndexButton/>

::: tip
NexveltUI preset is shown as an example, components haven't been used yet but the output looks good and can be further customized with utility classes.
:::

## Key Features

- `NexveltUI Presets`: Provides UNOCSS presets for consistent design that can be integrated across React, Vue, Svelte, Angular, and more.

- `Auto Dark Mode`: Automatically switches between light and dark mode based on user preferences.

- `Vue.js Components`: Built on top of Vue.js for enhanced development experience.

- `Customizability`: Offers extensive customization options for colors, typography, and spacing.

- `Fully typed`: Components are fully typed with TypeScript for static typing and error prevention.

## Getting Started

To start using NexveltUI in your Vue.js projects, refer to the installation guide in the [Installation](./installation.md) section. It will walk you through the process of setting up NexveltUI and integrating it into your project.

## Contributions and Feedback

We appreciate your interest in NexveltUI! If you have any suggestions, bug reports, or would like to contribute to the framework, please refer to the [Contributing Guidelines](./index.md).
<!-- TODO update contributing guideliens link -->

Let's build amazing user interfaces together with NexveltUI!
