---
title: NavLink
description: 'Work in progress - this component is not yet ready for use.'
navBadges:
  - value: Deprecated
    type: warning
---

## Basic

`NNavLink` is a component that renders a link to a page in your application. It is a wrapper around the `NButton` and `NuxtLink` component that adds some additional functionality.

> refer to the [NButton](button) and [NuxtLink](link) documentation for more information on the props that can be passed to those components.

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavLinkBasic
::
::div{label="Code"}
@@@ ./components/content/examples/vue/nav-link/ExampleVueNavLinkBasic.vue
::
:::

## Variants & Colors

`nav-link-{variant}-{color}` - add a variant to the navigation. The default variant is `text-primary`.

`nav-link-active-{variant}-{color}` - add a variant to the navigation when the link is `active`. The default variant is `text-primary`.

`nav-link-inactive-{variant}-{color}` - add a variant to the navigation when the link is `inactive`. The default variant is `text-gray`.

| Variant | Description                 |
| ------- | --------------------------- |
| `text`  | The text variant (default)  |
| `solid` | The solid variant.          |
| `~`     | The unstyle or base variant |

::alert{type="info"}
You can wrap the `nav-link` component with a `dark` class to force the component to use the dark variant always.
::

:::CodeGroup
::div{label="Preview" preview}
:ExampleVueNavLinkVariant
::
::div{label="Code"}
@@@ ./components/content/examples/vue/nav-link/ExampleVueNavLinkVariant.vue
::
:::

## Props

@@@ ../packages/nuxt/src/runtime/types/nav-link.ts

## Presets

@@@ ../packages/preset/src/_shortcuts/nav-link.ts

## Components

@@@ ../packages/nuxt/src/runtime/components/navigation/NavLink.vue
