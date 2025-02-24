<script setup lang="ts">
import type { DialogContentEmits } from 'reka-ui'
import type { NDialogContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  DialogContent,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import DialogClose from './DialogClose.vue'
import DialogOverlay from './DialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NDialogContentProps>(), {
  showClose: true,
  overlay: true,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, ['class', '_dialogOverlay', '_dialogClose'])

const contentEvents = computed(() => {
  if (props.preventClose) {
    return {
      pointerDownOutside: (e: Event) => e.preventDefault(),
      interactOutside: (e: Event) => e.preventDefault(),
      escapeKeyDown: (e: Event) => e.preventDefault(),
      closeAutoFocus: (e: Event) => e.preventDefault(),
    }
  }

  return {
    closeAutoFocus: (e: Event) => e.preventDefault(),
  }
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      v-if="overlay"
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
        v-on="contentEvents"
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
