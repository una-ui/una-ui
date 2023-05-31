---
title: Alert
description: Alerts are used to communicate a state that affects a system, feature or page.
---

# Alert

Alerts are used to communicate a state that affects a system, feature or page.

## Usage

<script setup>
import Alert from '../.vitepress/theme/components/Alert.vue'
</script>

<div class="vp-raw">
  <Alert>
    A new software update is available. See what’s new in version 2.0.4.
  </Alert>
</div>

::: code-group

```vue [Component]
<template>
  <NVAlert type="info">
    This is an info alert
  </NVAlert>
</template>
```

```html [HTML]
<div class="alert-wrapper">
  <div class="flex">
    <div class="flex-shrink-0">
      <div class="alert-icon i-carbon-information-filled" aria-hidden="true" />
    </div>
    <div class="flex-1 md:flex md:justify-between">
      <p class="alert-info">
        <slot />
      </p>
    </div>
  </div>
</div>
```

:::

## Preset Reference

| shortcut name   |                classes                |
| --------------- | :-----------------------------------: |
| alert-base   |       `text-sm rounded-md p-4`        |
| alert-info | `alert-base bg-blue-50 text-blue-700 dark:(text-blue-300 bg-blue-950)` |
| alert-success    |                                       |
| alert-warning |                                       |
| alert-danger  |                                       |

## Props
