<script setup lang="ts">
import type { AlertDialogContentEmits } from 'reka-ui'
import type { NAlertDialogContentProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  AlertDialogContent,
  AlertDialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import AlertDialogOverlay from './AlertDialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertDialogContentProps>(), {
  overlay: true,
})
const emits = defineEmits<AlertDialogContentEmits>()
const delegatedProps = reactiveOmit(props, ['class', 'una', '_alertDialogOverlay'])
const forwarded = useForwardPropsEmits(delegatedProps, emits)
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
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay
      v-if="overlay"
      v-bind="_alertDialogOverlay"
      :una
    />

    <AlertDialogContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'alert-dialog-content',
        'data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[100] max-h-[85vh] max-w-[500px] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] text-sm shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
        props.una?.alertDialogContent,
        props.class,
      )"
      v-on="contentEvents"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
