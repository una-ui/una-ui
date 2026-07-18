---
category: '@Integrations'
---

# useSortable

Wrapper for [`sortable`](https://github.com/SortableJS/Sortable).

For more information on what options can be passed, see [`Sortable.options`](https://github.com/SortableJS/Sortable#options) in the `Sortable` documentation.

::: warning
Currently, `useSortable` only implements drag-and-drop sorting for a single list.
:::

## Install

```bash
npm i sortablejs@^1
```

## Usage

### Use template ref

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

useSortable(el, list)
</script>

<template>
  <div ref="el">
    <div v-for="item in list" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>
```

### Use specifies the selector to operate on

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef, useTemplateRef } from 'vue'

const el = useTemplateRef('el')
const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

const animation = 200

const { option } = useSortable(el, list, {
  handle: '.handle',
  // or option set
  // animation
})

// You can use the option method to set and get the option of Sortable
option('animation', animation)
// option('animation') // 200
</script>

<template>
  <div ref="el">
    <div v-for="item in list" :key="item.id">
      <span>{{ item.name }}</span>
      <span class="handle">*</span>
    </div>
  </div>
</template>
```

### Use a selector to get the root element

```vue
<script setup lang="ts">
import { useSortable } from '@vueuse/integrations/useSortable'
import { shallowRef } from 'vue'

const list = shallowRef([{ id: 1, name: 'a' }, { id: 2, name: 'b' }, { id: 3, name: 'c' }])

useSortable('#dv', list)
</script>

<template>
  <div id="dv">
    <div v-for="item in list" :key="item.id">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
```

### Tips

If you want to handle the `onUpdate` yourself, you can pass in `onUpdate` parameters, and we also exposed a function to move the item position.

```ts
import { moveArrayElement, useSortable } from '@vueuse/integrations/useSortable'

useSortable(el, list, {
  onUpdate: (e) => {
    // do something
    moveArrayElement(list, e.oldIndex, e.newIndex, e)
    // nextTick required here as moveArrayElement is executed in a microtask
    // so we need to wait until the next tick until that is finished.
    nextTick(() => {
      /* do something */
    })
  }
})
```

## Type Declarations

```ts
export interface UseSortableReturn {
  /**
   * start sortable instance
   */
  start: () => void
  /**
   * destroy sortable instance
   */
  stop: () => void
  /**
   * Options getter/setter
   * @param name a Sortable.Options property.
   * @param value a value.
   */
  option: (<K extends keyof Sortable.Options>(
    name: K,
    value: Sortable.Options[K],
  ) => void) &
    (<K extends keyof Sortable.Options>(name: K) => Sortable.Options[K])
}
export type UseSortableOptions = Options & ConfigurableDocument
export declare function useSortable<T>(
  selector: string,
  list: MaybeRef<T[]>,
  options?: UseSortableOptions,
): UseSortableReturn
export declare function useSortable<T>(
  el: MaybeRefOrGetter<MaybeElement>,
  list: MaybeRef<T[]>,
  options?: UseSortableOptions,
): UseSortableReturn
/**
 * Inserts a element into the DOM at a given index.
 * @param parentElement
 * @param element
 * @param {number} index
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L81C1-L94C2
 */
export declare function insertNodeAt(
  parentElement: Element,
  element: Element,
  index: number,
): void
/**
 * Removes a node from the DOM.
 * @param {Node} node
 * @see https://github.com/Alfred-Skyblue/vue-draggable-plus/blob/a3829222095e1949bf2c9a20979d7b5930e66f14/src/utils/index.ts#L96C1-L102C2
 */
export declare function removeNode(node: Node): void
export declare function moveArrayElement<T>(
  list: MaybeRef<T[]>,
  from: number,
  to: number,
  e?: Sortable.SortableEvent | null,
): void
```
