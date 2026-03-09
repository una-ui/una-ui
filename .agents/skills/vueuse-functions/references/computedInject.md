---
category: Component
---

# computedInject

Combine computed and inject

## Usage

In Provider Component

```ts twoslash include main
import type { InjectionKey, Ref } from 'vue'
import { provide } from 'vue'

interface Item {
  key: number
  value: string
}

export const ArrayKey: InjectionKey<Ref<Item[]>> = Symbol('symbol-key')

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])

provide(ArrayKey, array)
```

In Receiver Component

```ts
// @filename: provider.ts
// @include: main
// ---cut---
import { computedInject } from '@vueuse/core'

import { ArrayKey } from './provider'

const computedArray = computedInject(ArrayKey, (source) => {
  const arr = [...source.value]
  arr.unshift({ key: 0, value: 'all' })
  return arr
})
```

## Type Declarations

```ts
export type ComputedInjectGetter<T, K> = (
  source: T | undefined,
  oldValue?: K,
) => K
export type ComputedInjectGetterWithDefault<T, K> = (
  source: T,
  oldValue?: K,
) => K
export type ComputedInjectSetter<T> = (v: T) => void
export interface WritableComputedInjectOptions<T, K> {
  get: ComputedInjectGetter<T, K>
  set: ComputedInjectSetter<K>
}
export interface WritableComputedInjectOptionsWithDefault<T, K> {
  get: ComputedInjectGetterWithDefault<T, K>
  set: ComputedInjectSetter<K>
}
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  getter: ComputedInjectGetter<T, K>,
): ComputedRef<K | undefined>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  options: WritableComputedInjectOptions<T, K>,
): ComputedRef<K | undefined>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  getter: ComputedInjectGetterWithDefault<T, K>,
  defaultSource: T,
  treatDefaultAsFactory?: false,
): ComputedRef<K>
export declare function computedInject<T, K = any>(
  key: InjectionKey<T> | string,
  options: WritableComputedInjectOptionsWithDefault<T, K>,
  defaultSource: T | (() => T),
  treatDefaultAsFactory: true,
): ComputedRef<K>
```
