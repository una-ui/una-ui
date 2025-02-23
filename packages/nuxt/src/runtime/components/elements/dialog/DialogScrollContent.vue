<script setup lang="ts">
import type { DialogContentEmits } from 'radix-vue'
import type { NDialogContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,

  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { cn } from '../../../utils'
import DialogClose from './DialogClose.vue'
import DialogOverlay from './DialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDialogContentProps>(), {
  showClose: true,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, ['class', '_dialogOverlay', '_dialogClose'])

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
          v-if="showClose"
          v-bind="_dialogClose"
        />
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>
