---
category: Animation
---

# useTimeout

Update value after a given time with controls.

## Usage

```ts
import { useTimeout } from '@vueuse/core'

const ready = useTimeout(1000)
```

```ts
import { useTimeout } from '@vueuse/core'
// ---cut---
const { ready, start, stop } = useTimeout(1000, { controls: true })
```

```ts
import { promiseTimeout } from '@vueuse/core'

console.log(ready.value) // false

await promiseTimeout(1200)

console.log(ready.value) // true
```

## Type Declarations

```ts
export interface UseTimeoutOptions<Controls extends boolean>
  extends UseTimeoutFnOptions {
  /**
   * Expose more controls
   *
   * @default false
   */
  controls?: Controls
  /**
   * Callback on timeout
   */
  callback?: Fn
}
export type UseTimeoutReturn =
  | ComputedRef<boolean>
  | ({
      readonly ready: ComputedRef<boolean>
    } & Stoppable)
/**
 * @deprecated use UseTimeoutReturn instead
 */
export type UseTimoutReturn = UseTimeoutReturn
/**
 * Update value after a given time with controls.
 *
 * @see   {@link https://vueuse.org/useTimeout}
 * @param interval
 * @param options
 */
export declare function useTimeout(
  interval?: MaybeRefOrGetter<number>,
  options?: UseTimeoutOptions<false>,
): ComputedRef<boolean>
export declare function useTimeout(
  interval: MaybeRefOrGetter<number>,
  options: UseTimeoutOptions<true>,
): {
  ready: ComputedRef<boolean>
} & Stoppable
```
