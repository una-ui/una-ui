---
title: Alert
description: Alerts are used to communicate a state that affects a system, feature or page.
---

<script setup lang="ts">
import Alert from '../src/components/alert.vue'
</script>

# Alert

Alerts are used to communicate a state that affects a system, feature or page.

## Usage

<Alert>
  A new software update is available. See what’s new in version 2.0.4.
</Alert>

:::details Preview the code

::: code-group

```vue [Component]
<template>
  <div>
    <Alert type="info">
      This is an info alert
    </Alert>
    <Alert type="success">
      This is a success alert
    </Alert>
    <Alert type="warning">
      This is a warning alert
    </Alert>
    <Alert type="danger">
      This is a danger alert
    </Alert>
  </div>
</template>
```

```html [Preset]
<div>
  <div class="alert-info">This is an info alert</div>
</div>
```

:::

## Preset Reference

| shortcut name   |                classes                |
| --------------- | :-----------------------------------: |
| `alert-base`    |       `text-sm rounded-md p-4`        |
| `alert-success` | `alert-base bg-blue-50 text-blue-700` |
| `alert-info`    |                                       |
| `alert-warning` |                                       |
| `alert-danger`  |                                       |

## Props
