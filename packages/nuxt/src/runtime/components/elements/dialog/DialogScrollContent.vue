<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '../../../utils'
import DialogOverlay from './DialogOverlay.vue'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />

    <DialogContent
      :class="
        cn(
          'relative z-50 grid w-full max-w-lg my-8 gap-4 border border-base bg-base p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
          props.class,
        )
      "
      v-bind="forwarded"
      @pointer-down-outside="(event) => {
        const originalEvent = event.detail.originalEvent;
        const target = originalEvent.target as HTMLElement;
        if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
          event.preventDefault();
        }
      }"
    >
      <slot />

      <DialogClose />
    </DialogContent>
  </DialogPortal>
</template>
