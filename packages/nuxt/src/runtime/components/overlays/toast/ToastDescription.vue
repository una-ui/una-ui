<script setup lang="ts">
import type { NToastDescriptionProps } from '../../../types'
import { ToastDescription } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NToastDescriptionProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastDescription
    v-bind="delegatedProps"
    :class="cn(
      'toast-description',
      props.class,
      props.una?.toastDescription,
    )"
  >
    <slot />
  </ToastDescription>
</template>
