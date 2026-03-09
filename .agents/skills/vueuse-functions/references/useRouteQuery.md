---
category: '@Router'
---

# useRouteQuery

Shorthand for a reactive `route.query`.

## Usage

```ts
import { useRouteQuery } from '@vueuse/router'

const search = useRouteQuery('search')

const search = useRouteQuery('search', 'foo') // or with a default value

const page = useRouteQuery('page', '1', { transform: Number }) // or transforming value

console.log(search.value) // route.query.search
search.value = 'foobar' // router.replace({ query: { search: 'foobar' } })
```

## Type Declarations

```ts
export declare function useRouteQuery(
  name: string,
): Ref<undefined | null | string | string[]>
export declare function useRouteQuery<
  T extends RouteQueryValueRaw = RouteQueryValueRaw,
  K = T,
>(
  name: string,
  defaultValue?: MaybeRefOrGetter<T>,
  options?: ReactiveRouteOptionsWithTransform<T, K>,
): Ref<K>
```
