<script setup lang="ts">
import type { AlertDialogContentEmits } from 'reka-ui'
import type { NAlertDialogContentProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import {
  AlertDialogContent,
  AlertDialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils'
import AlertDialogOverlay from './AlertDialogOverlay.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NAlertDialogContentProps>(), {
  overlay: true,
  dismissible: true,
})
const emits = defineEmits<AlertDialogContentEmits>()
const delegatedProps = reactiveOmit(props, ['class', 'una', '_alertDialogOverlay'])
const forwarded = useForwardPropsEmits(delegatedProps, emits)
const contentEvents = computed(() => {
  if (!props.dismissible) {
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
      data-slot="alert-dialog-content"
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-48% data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-48%',
        'alert-dialog-content',
        props.una?.alertDialogContent,
        props.class,
      )"
      v-on="contentEvents"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
