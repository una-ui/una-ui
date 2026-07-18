---
category: '@Math'
---

# useClamp

Reactively clamp a value between two other values.

## Usage

```ts
import { useClamp } from '@vueuse/math'

const min = shallowRef(0)
const max = shallowRef(10)
const value = useClamp(0, min, max)
```

You can also pass a `ref` and the returned `computed` will be updated when the source ref changes:

```ts
import { useClamp } from '@vueuse/math'

const number = shallowRef(0)
const clamped = useClamp(number, 0, 10)
```

## Type Declarations

```ts
/**
 * Reactively clamp a value between two other values.
 *
 * @see https://vueuse.org/useClamp
 * @param value number
 * @param min
 * @param max
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useClamp(
  value: ReadonlyRefOrGetter<number>,
  min: MaybeRefOrGetter<number>,
  max: MaybeRefOrGetter<number>,
): ComputedRef<number>
export declare function useClamp(
  value: MaybeRefOrGetter<number>,
  min: MaybeRefOrGetter<number>,
  max: MaybeRefOrGetter<number>,
): Ref<number>
```
