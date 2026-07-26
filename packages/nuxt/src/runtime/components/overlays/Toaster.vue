<script setup lang="ts">
import type { NToasterProps } from '../../types'
import { computed } from 'vue'
import { Toaster } from 'vue-sonner'
import { cn } from '../../utils'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NToasterProps>(), {
  position: 'bottom-right',
  duration: 4000,
  visibleToasts: 3,
  expand: false,
  closeButtonPosition: 'top-right',
})

// Keep these class strings in this .vue file — UnoCSS does not scan plain .ts,
// so moving them would silently generate no CSS.
//
// `theme` is deliberately not forwarded: vue-sonner's theme rules are not all
// gated on its skin, and una already themes through the `.dark` class.
const classes = computed(() => ({
  toast: cn('toast toast-row', props.una?.toast),
  title: cn('toast-title', props.una?.toastTitle),
  description: cn('toast-description', props.una?.toastDescription),
  content: cn('toast-content', props.una?.toastContent),
  icon: cn('toast-icon', props.una?.toastIcon),
  closeButton: cn('toast-close-button', props.una?.toastCloseButton),
}))
</script>

<template>
  <Toaster
    v-bind="props"
    :toast-options="{
      unstyled: true,
      ...props.toastOptions,
      classes: { ...classes, ...props.toastOptions?.classes },
    }"
  >
    <template #success-icon>
      <Icon name="toast-success-icon" />
    </template>
    <template #error-icon>
      <Icon name="toast-error-icon" />
    </template>
    <template #warning-icon>
      <Icon name="toast-warning-icon" />
    </template>
    <template #info-icon>
      <Icon name="toast-info-icon" />
    </template>
    <template #loading-icon>
      <Icon name="toast-loading-icon" class="toast-loading" />
    </template>
    <template #close-icon>
      <Icon name="toast-close-icon" />
    </template>
  </Toaster>
</template>
