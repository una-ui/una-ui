---
category: Animation
---

# useInterval

Reactive counter increases on every interval

## Usage

```ts
import { useInterval } from '@vueuse/core'

// count will increase every 200ms
const counter = useInterval(200)
```

```ts
import { useInterval } from '@vueuse/core'
// ---cut---
const { counter, reset, pause, resume } = useInterval(200, {
  controls: true
})
```

## Type Declarations

```ts
export interface UseIntervalOptions<Controls extends boolean> {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls
  /**
   * Execute the update immediately on calling
   *
   * @default true
   */
  immediate?: boolean
  /**
   * Callback on every interval
   */
  callback?: (count: number) => void
}
export interface UseIntervalControls {
  counter: ShallowRef<number>
  reset: () => void
}
export type UseIntervalReturn =
  | Readonly<ShallowRef<number>>
  | Readonly<UseIntervalControls & Pausable>
/**
 * Reactive counter increases on every interval
 *
 * @see https://vueuse.org/useInterval
 * @param interval
 * @param options
 */
export declare function useInterval(
  interval?: MaybeRefOrGetter<number>,
  options?: UseIntervalOptions<false>,
): Readonly<ShallowRef<number>>
export declare function useInterval(
  interval: MaybeRefOrGetter<number>,
  options: UseIntervalOptions<true>,
): Readonly<UseIntervalControls & Pausable>
```
