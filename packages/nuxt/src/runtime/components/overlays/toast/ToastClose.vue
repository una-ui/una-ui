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
      'toast-close',
      props.class,
      props.una?.toastClose,
    )"
  >
    <Icon
      :name="una?.toastCloseIcon ?? 'toast-close-icon'"
      :class="cn(
        'toast-close-icon-base',
        una?.toastCloseIconBase,
      )"
      aria-hidden="true"
    />
  </ToastClose>
</template>
