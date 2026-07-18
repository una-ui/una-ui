---
category: Elements
---

# useDraggable

Make elements draggable.

## Usage

```vue
<script setup lang="ts">
import { useDraggable } from '@vueuse/core'
import { useTemplateRef } from 'vue'

const el = useTemplateRef('el')

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
})
</script>

<template>
  <div ref="el" :style="style" style="position: fixed">
    Drag me! I am at {{ x }}, {{ y }}
  </div>
</template>
```

Set `preventDefault: true` to override the default drag-and-drop behavior of certain elements in the browser.

```ts
import { useDraggable } from '@vueuse/core'
// ---cut---
const { x, y, style } = useDraggable(el, {
  preventDefault: true,
  // with `preventDefault: true`
  // you can disable the native behavior (e.g., for img)
  // and control the drag-and-drop, preventing the browser interference.
})
```

## Component Usage

```vue
<template>
  <UseDraggable v-slot="{ x, y }" :initial-value="{ x: 10, y: 10 }">
    Drag me! I am at {{ x }}, {{ y }}
  </UseDraggable>
</template>
```

For component usage, additional props `storageKey` and `storageType` can be passed to the component and enable the persistence of the element position.

```vue
<template>
  <UseDraggable storage-key="vueuse-draggable" storage-type="session">
    Refresh the page and I am still in the same position!
  </UseDraggable>
</template>
```

## Type Declarations

```ts
export interface UseDraggableOptions {
  /**
   * Only start the dragging when click on the element directly
   *
   * @default false
   */
  exact?: MaybeRefOrGetter<boolean>
  /**
   * Prevent events defaults
   *
   * @default false
   */
  preventDefault?: MaybeRefOrGetter<boolean>
  /**
   * Prevent events propagation
   *
   * @default false
   */
  stopPropagation?: MaybeRefOrGetter<boolean>
  /**
   * Whether dispatch events in capturing phase
   *
   * @default true
   */
  capture?: boolean
  /**
   * Element to attach `pointermove` and `pointerup` events to.
   *
   * @default window
   */
  draggingElement?: MaybeRefOrGetter<
    HTMLElement | SVGElement | Window | Document | null | undefined
  >
  /**
   * Element for calculating bounds (If not set, it will use the event's target).
   *
   * @default undefined
   */
  containerElement?: MaybeRefOrGetter<
    HTMLElement | SVGElement | null | undefined
  >
  /**
   * Handle that triggers the drag event
   *
   * @default target
   */
  handle?: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>
  /**
   * Pointer types that listen to.
   *
   * @default ['mouse', 'touch', 'pen']
   */
  pointerTypes?: PointerType[]
  /**
   * Initial position of the element.
   *
   * @default { x: 0, y: 0 }
   */
  initialValue?: MaybeRefOrGetter<Position>
  /**
   * Callback when the dragging starts. Return `false` to prevent dragging.
   */
  onStart?: (position: Position, event: PointerEvent) => void | false
  /**
   * Callback during dragging.
   */
  onMove?: (position: Position, event: PointerEvent) => void
  /**
   * Callback when dragging end.
   */
  onEnd?: (position: Position, event: PointerEvent) => void
  /**
   * Axis to drag on.
   *
   * @default 'both'
   */
  axis?: "x" | "y" | "both"
  /**
   * Disabled drag and drop.
   *
   * @default false
   */
  disabled?: MaybeRefOrGetter<boolean>
  /**
   * Mouse buttons that are allowed to trigger drag events.
   *
   * - `0`: Main button, usually the left button or the un-initialized state
   * - `1`: Auxiliary button, usually the wheel button or the middle button (if present)
   * - `2`: Secondary button, usually the right button
   * - `3`: Fourth button, typically the Browser Back button
   * - `4`: Fifth button, typically the Browser Forward button
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
   * @default [0]
   */
  buttons?: MaybeRefOrGetter<number[]>
}
/**
 * Make elements draggable.
 *
 * @see https://vueuse.org/useDraggable
 * @param target
 * @param options
 */
export declare function useDraggable(
  target: MaybeRefOrGetter<HTMLElement | SVGElement | null | undefined>,
  options?: UseDraggableOptions,
):
  | {
      position: Ref<
        {
          x: number
          y: number
        },
        | Position
        | {
            x: number
            y: number
          }
      >
      isDragging: ComputedRef<boolean>
      style: ComputedRef<string>
      x: Ref<number, number>
      y: Ref<number, number>
    }
  | {
      position: Ref<
        {
          x: number
          y: number
        },
        | Position
        | {
            x: number
            y: number
          }
      >
      isDragging: ComputedRef<boolean>
      style: ComputedRef<string>
      x: Ref<number, number>
      y: Ref<number, number>
    }
export type UseDraggableReturn = ReturnType<typeof useDraggable>
```
