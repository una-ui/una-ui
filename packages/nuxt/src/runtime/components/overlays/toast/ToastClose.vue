<script setup lang="ts">
import type { NToastCloseProps } from '../../../types'
import { ToastClose } from 'radix-vue'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Icon from '../../elements/Icon.vue'

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
      'bg-transparent flex items-center justify-center absolute right-1 top-1 rounded-md p-1 text-muted opacity-0 transition-opacity hover:text-base focus:opacity-100 focus:outline-none group-hover:opacity-100',
      props.class,
      props.una?.toastClose,
    )"
  >
    <Icon
      :name="una?.toastCloseIcon ?? 'toast-close-icon'"
      :class="cn(
        'w-4 h-4',
        una?.toastCloseIconBase,
      )"
      aria-hidden="true"
    />
  </ToastClose>
</template>
