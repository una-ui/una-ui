---
category: Component
---

# useVModel

Shorthand for v-model binding, props + emit -> ref

> We encourage you to use Vue's [`defineModel`](https://vuejs.org/api/sfc-script-setup.html#definemodel) over this composable, however there are some edge-cases like using `TSX` or the `deep: true` option that `defineModel` doesn't support.

## Usage

```ts
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()
const emit = defineEmits(['update:modelValue'])

const data = useVModel(props, 'modelValue', emit)
```

### Options API

```ts
import { useVModel } from '@vueuse/core'

export default {
  setup(props, { emit }) {
    const data = useVModel(props, 'data', emit)

    console.log(data.value) // props.data
    data.value = 'foo' // emit('update:data', 'foo')
  },
}
```

## Type Declarations

```ts
export interface UseVModelOptions<T, Passive extends boolean = false> {
  /**
   * When passive is set to `true`, it will use `watch` to sync with props and ref.
   * Instead of relying on the `v-model` or `.sync` to work.
   *
   * @default false
   */
  passive?: Passive
  /**
   * When eventName is set, it's value will be used to overwrite the emit event name.
   *
   * @default undefined
   */
  eventName?: string
  /**
   * Attempting to check for changes of properties in a deeply nested object or array.
   * Apply only when `passive` option is set to `true`
   *
   * @default false
   */
  deep?: boolean
  /**
   * Defining default value for return ref when no value is passed.
   *
   * @default undefined
   */
  defaultValue?: T
  /**
   * Clone the props.
   * Accepts a custom clone function.
   * When setting to `true`, it will use `JSON.parse(JSON.stringify(value))` to clone.
   *
   * @default false
   */
  clone?: boolean | CloneFn<T>
  /**
   * The hook before triggering the emit event can be used for form validation.
   * if false is returned, the emit event will not be triggered.
   *
   * @default undefined
   */
  shouldEmit?: (v: T) => boolean
}
/**
 * Shorthand for v-model binding, props + emit -> ref
 *
 * @see https://vueuse.org/useVModel
 * @param props
 * @param key (default 'modelValue')
 * @param emit
 * @param options
 *
 * @__NO_SIDE_EFFECTS__
 */
export declare function useVModel<
  P extends object,
  K extends keyof P,
  Name extends string,
>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<P[K], false>,
): WritableComputedRef<P[K]>
export declare function useVModel<
  P extends object,
  K extends keyof P,
  Name extends string,
>(
  props: P,
  key?: K,
  emit?: (name: Name, ...args: any[]) => void,
  options?: UseVModelOptions<P[K], true>,
): Ref<UnwrapRef<P[K]>>
```
