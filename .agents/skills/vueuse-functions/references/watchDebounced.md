---
category: Watch
alias: debouncedWatch
---

# watchDebounced

Debounced watch

## Usage

Similar to `watch`, but offering extra options `debounce` and `maxWait` which will be applied to the callback function.

```ts
import { watchDebounced } from '@vueuse/core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

It's essentially a shorthand for the following code:

```ts
import { debounceFilter, watchWithFilter } from '@vueuse/core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```

## Type Declarations

```ts
export interface WatchDebouncedOptions<Immediate>
  extends WatchOptions<Immediate>,
    DebounceFilterOptions {
  debounce?: MaybeRefOrGetter<number>
}
export declare function watchDebounced<
  T extends Readonly<MultiWatchSources>,
  Immediate extends Readonly<boolean> = false,
>(
  sources: [...T],
  cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>,
  options?: WatchDebouncedOptions<Immediate>,
): WatchHandle
export declare function watchDebounced<
  T,
  Immediate extends Readonly<boolean> = false,
>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchDebouncedOptions<Immediate>,
): WatchHandle
export declare function watchDebounced<
  T extends object,
  Immediate extends Readonly<boolean> = false,
>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchDebouncedOptions<Immediate>,
): WatchHandle
/** @deprecated use `watchDebounced` instead */
export declare const debouncedWatch: typeof watchDebounced
```
