---
category: Sensors
---

# onStartTyping

Fires when users start typing on non-editable elements.

## Usage

```vue
<script setup lang="ts">
import { onStartTyping } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const input = useTemplateRef('input')

onStartTyping(() => {
  if (!input.value.active)
    input.value.focus()
})
</script>

<template>
  <input ref="input" type="text" placeholder="Start typing to focus">
</template>
```

## Type Declarations

```ts
/**
 * Fires when users start typing on non-editable elements.
 *
 * @see https://vueuse.org/onStartTyping
 * @param callback
 * @param options
 */
export declare function onStartTyping(
  callback: (event: KeyboardEvent) => void,
  options?: ConfigurableDocument,
): void
```
