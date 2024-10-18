<script setup lang="ts">
import type { NToastViewportProps } from '../../../types'
import { ToastViewport } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NToastViewportProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="cn(
      'toast-viewport',
      props.class,
      props.una?.toastViewport,
    )"
  />
</template>
