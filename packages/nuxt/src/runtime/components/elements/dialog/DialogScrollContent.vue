<script setup lang="ts">
import type { NDialogContentProps, NDialogProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,
  type DialogContentEmits,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import DialogClose from './DialogClose.vue'
import DialogOverlay from './DialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NDialogContentProps & Pick<NDialogProps, '_dialogOverlay' | '_dialogClose' | 'una'>>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, ['class', '_dialogOverlay', '_dialogClose', 'una'])

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      v-bind="_dialogOverlay"
      :una
      scrollable
    >
      <DialogContent
        v-bind="{ ...forwarded, ...$attrs }"
        :class="cn(
          'dialog-scroll-content',
          props.una?.dialogContent,
          props.class,
        )"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          v-bind="_dialogClose"
        />
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
