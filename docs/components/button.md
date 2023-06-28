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

<Button/>

::: code-group

```vue [Component]
<template>
  <NVButton variant="solid" color="primary">
    solid-primary
  </NVButton>
</template>
```

```html [Presets]
<template>
  <div class="flex gap-2">
    <button btn="solid-primary">
      solid-primary
    </button>

    <button btn="solid-blue">
      solid-indigo
    </button>

    <button btn="solid-green">
      solid-success
    </button>

    <button btn="solid-yellow">
      solid-success
    </button>

    <button btn="solid-gray">
      solid-gray
    </button>
  </div>
</template>

```

:::

## Preset Reference

| shortcut name | classes                                                                |
| ------------- | ---------------------------------------------------------------------- |

## Props
