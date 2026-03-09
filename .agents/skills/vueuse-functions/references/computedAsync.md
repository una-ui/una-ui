---
category: Reactivity
alias: asyncComputed
---

# computedAsync

Computed for async functions

## Usage

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const name = shallowRef('jack')

const userInfo = computedAsync(
  async () => {
    return await mockLookUp(name.value)
  },
  null, /* initial state */
)
```

### Evaluation State

You will need to pass a ref to track if the async function is evaluating.

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const evaluating = shallowRef(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  evaluating,
)
```

### onCancel

When the computed source changed before the previous async function gets resolved, you may want to cancel the previous one. Here is an example showing how to incorporate with the fetch API.

```ts
import { computedAsync } from '@vueuse/core'
// ---cut---
const packageName = shallowRef('@vueuse/core')

const downloads = computedAsync(async (onCancel) => {
  const abortController = new AbortController()

  onCancel(() => abortController.abort())

  return await fetch(
    `https://api.npmjs.org/downloads/point/last-week/${packageName.value}`,
    { signal: abortController.signal },
  )
    .then(response => response.ok ? response.json() : { downloads: '—' })
    .then(result => result.downloads)
}, 0)
```

### Lazy

By default, `computedAsync` will start resolving immediately on creation, specify `lazy: true` to make it start resolving on the first accessing.

```ts
import { computedAsync } from '@vueuse/core'
import { shallowRef } from 'vue'

const evaluating = shallowRef(false)

const userInfo = computedAsync(
  async () => { /* your logic */ },
  null,
  { lazy: true, evaluating },
)
```

## Caveats

- Just like Vue's built-in `computed` function, `computedAsync` does dependency tracking and is automatically re-evaluated when dependencies change. Note however that only dependency referenced in the first call stack are considered for this. In other words: **Dependencies that are accessed asynchronously will not trigger re-evaluation of the async computed value.**

- As opposed to Vue's built-in `computed` function, re-evaluation of the async computed value is triggered whenever dependencies are changing, regardless of whether its result is currently being tracked or not.

## Type Declarations

```ts
/**
 * Handle overlapping async evaluations.
 *
 * @param cancelCallback The provided callback is invoked when a re-evaluation of the computed value is triggered before the previous one finished
 */
export type AsyncComputedOnCancel = (cancelCallback: Fn) => void
export interface AsyncComputedOptions<Lazy = boolean> {
  /**
   * Should value be evaluated lazily
   *
   * @default false
   */
  lazy?: Lazy
  /**
   * Ref passed to receive the updated of async evaluation
   */
  evaluating?: Ref<boolean>
  /**
   * Use shallowRef
   *
   * @default true
   */
  shallow?: boolean
  /**
   * The flush option allows for greater control over the timing of a history point, default to `pre`
   *
   * Possible values: `pre`, `post`, `sync`
   *
   * It works in the same way as the flush option in watch and watch effect in vue reactivity
   * @default 'sync'
   */
  flush?: WatchOptionFlush
  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void
}
/**
 * Create an asynchronous computed dependency.
 *
 * @see https://vueuse.org/computedAsync
 * @param evaluationCallback     The promise-returning callback which generates the computed value
 * @param initialState           The initial state, used until the first evaluation finishes
 * @param optionsOrRef           Additional options or a ref passed to receive the updates of the async evaluation
 */
export declare function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: T,
  optionsOrRef: AsyncComputedOptions<true>,
): ComputedRef<T>
export declare function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: undefined,
  optionsOrRef: AsyncComputedOptions<true>,
): ComputedRef<T | undefined>
export declare function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState: T,
  optionsOrRef?: Ref<boolean> | AsyncComputedOptions,
): Ref<T>
export declare function computedAsync<T>(
  evaluationCallback: (onCancel: AsyncComputedOnCancel) => T | Promise<T>,
  initialState?: undefined,
  optionsOrRef?: Ref<boolean> | AsyncComputedOptions,
): Ref<T | undefined>
/** @deprecated use `computedAsync` instead */
export declare const asyncComputed: typeof computedAsync
```
