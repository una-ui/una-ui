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
        'data-[state=open]:animate-contentShow',
        props.una?.alertDialogContent,
        props.class,
      )"
      v-on="contentEvents"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
