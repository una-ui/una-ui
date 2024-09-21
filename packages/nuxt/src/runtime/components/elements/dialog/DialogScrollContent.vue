<script setup lang="ts">
import type { NDialogContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import DialogOverlay from './DialogOverlay.vue'

const props = defineProps<NDialogContentProps>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, ['class'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay />

    <DialogContent
      :class="cn('dialog-scroll-content', props.class) "
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
