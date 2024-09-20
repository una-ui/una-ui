<script setup lang="ts">
import type { NToastCloseProps } from '../../../types'
import { ToastClose } from 'radix-vue'
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NToastCloseProps>()

const delegatedProps = computed(() => {
  const { ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps">
    <NIcon
      :name="una?.toastCloseIcon ?? 'toast-close-icon'"
      :class="una?.toastCloseIconBase"
      aria-hidden="true"
    />
  </ToastClose>
</template>
