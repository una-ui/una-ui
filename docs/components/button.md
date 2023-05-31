---
title: Button
description: Buttons are used to communicate a state that affects a system, feature or page.
---

# Button

Button are used to communicate a state that affects a system, feature or page.

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
