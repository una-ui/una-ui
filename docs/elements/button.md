---
title: Button
description: Buttons are used to initiate an action within an experience.
---

<script setup>
import Button from '../components/Button.vue'
</script>

# Button

Buttons are used to initiate an action within an experience.

:::warning
Work in progress - this component is not yet ready for use.
:::

## Usage

In its simplest form, the only thing required of the developer is to add the `btn` attribute to a `<button>` element which is the prefix value for the `<button>` component. This will apply the default button styles, but will not provide any color or hover state.

```vue
<template>
  <NVButton btn="solid">
    solid-primary
  </NVButton>
</template>
```

If you want to change the color, you can use the `btn` attribute with one of the color presets eg. `btn="solid-indigo"`. The color presets are based on the color system. The default color is `primary`.

```vue
<template>
  <NVButton btn="solid-indigo lg">
    solid-indigo
  </NVButton>
</template>
```

If you want to change the size of the button, you can use the `btn` attribute with one of the size presets eg. `btn="solid-indigo lg"`. The size presets are based on the spacing system. The default size is `md`.

```vue
<template>
  <NVButton btn="outline lg">
    solid-indigo
  </NVButton>
</template>
```

If you want to change the variant of the button, you can use the `btn` attribute with one of the variant presets eg. `btn="outline lg"`. The default variant is `solid`.


## Example

<Button/>

::: code-group

```vue [Component]
<template>
  <NVButton btn="solid">
    solid-primary
  </NVButton>
</template>
```

```html [HTML]
<div class="flex gap-1">
  <button btn="solid">
    solid-primary
  <button>

  <button btn="outline">
    outline-primary
  <button>
</div>
```

:::

## Preset Reference

| shortcut name | classes                                                                |
| ------------- | ---------------------------------------------------------------------- |

## Props
