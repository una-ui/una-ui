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
      'fixed top-0 z-[100] flex max-h-screen gap-y-4 w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      props.class,
      props.una?.toastViewport,
    )"
  />
</template>
