---
category: Animation
---

# useNow

Reactive current Date instance.

## Usage

```ts
import { useNow } from '@vueuse/core'

const now = useNow()
```

```ts
import { useNow } from '@vueuse/core'
// ---cut---
const { now, pause, resume } = useNow({ controls: true })
```

## Component Usage

```vue
<template>
  <UseNow v-slot="{ now, pause, resume }">
    Now: {{ now }}
    <button @click="pause()">
      Pause
    </button>
    <button @click="resume()">
      Resume
    </button>
  </UseNow>
</template>
```

## Type Declarations

```ts
export interface UseNowOptions<Controls extends boolean> {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls
  /**
   * Start the clock immediately
   *
   * @default true
   */
  immediate?: boolean
  /**
   * Update interval in milliseconds, or use requestAnimationFrame
   *
   * @default requestAnimationFrame
   */
  interval?: "requestAnimationFrame" | number
}
/**
 * Reactive current Date instance.
 *
 * @see https://vueuse.org/useNow
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useNow(options?: UseNowOptions<false>): Ref<Date>
export declare function useNow(options: UseNowOptions<true>): {
  now: Ref<Date>
} & Pausable
export type UseNowReturn = ReturnType<typeof useNow>
```
