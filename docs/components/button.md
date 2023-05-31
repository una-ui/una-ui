---
title: Button
description: Button are used to initialize an action, either in the background or foreground of an experience.
---

# Button

Button are used to initialize an action, either in the background or foreground of an experience.

## Usage

<script setup>
import Button from '../.vitepress/theme/components/Button.vue'
</script>

<Button>
  A new software update is available. See what’s new in version 2.0.4.
</Button>

::: code-group

```vue [Component]
<template>
  <NVButton variant="solid" color="primary">
    solid-primary
  </NVButton>
</template>
```

```html [Presets]
<button type="button" class="btn-solid-primary">
  solid-primary
</button>
```

:::

## Preset Reference

| shortcut name | classes                                                                |
| ------------- | ---------------------------------------------------------------------- |

## Props
