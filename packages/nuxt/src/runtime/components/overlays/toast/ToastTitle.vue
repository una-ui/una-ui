<script setup lang="ts">
import type { NToastTitleProps } from '../../../types'
import { ToastTitle } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'

const props = defineProps<NToastTitleProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastTitle
    v-bind="delegatedProps"
    :class="cn(
      'toast-title',
      props.class,
      props.una?.toastTitle,
    )"
  >
    <slot />
  </ToastTitle>
</template>
