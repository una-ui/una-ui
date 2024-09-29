<script setup lang="ts">
import type { NToastCloseProps } from '../../../types'
import { ToastClose } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NToastCloseProps>()

const delegatedProps = computed(() => {
  const { ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose
    v-bind="delegatedProps"
    :class="cn(
      'toast-close',
      props.class,
      props.una?.toastClose,
    )"
  >
    <slot />
  </ToastClose>
</template>
