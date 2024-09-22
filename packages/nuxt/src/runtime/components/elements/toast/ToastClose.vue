<script setup lang="ts">
import type { NToastCloseProps } from '../../../types'
import { ToastClose } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<NToastCloseProps>()

const delegatedProps = computed(() => {
  const { ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastClose v-bind="delegatedProps">
    <slot />
  </ToastClose>
</template>
