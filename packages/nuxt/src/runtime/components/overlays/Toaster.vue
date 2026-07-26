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
const classes = computed(() => ({
  toast: cn('toast-root', props.una?.toast),
  title: cn('toast-title', props.una?.toastTitle),
  description: cn('toast-description', props.una?.toastDescription),
  content: props.una?.toastContent,
  icon: cn('toast-icon', props.una?.toastIcon),
  closeButton: props.una?.toastCloseButton,
}))

// The gray scale is remapped alongside --normal-*: vue-sonner declares
// --gray1..--gray12 with light values only and its dark block overrides neither,
// so the close button would render near-black on a dark card.
const tokens = {
  '--normal-bg': 'oklch(var(--una-popover))',
  '--normal-text': 'oklch(var(--una-popover-foreground))',
  '--normal-border': 'oklch(var(--una-border))',
  '--border-radius': 'var(--una-radius)',

  '--gray1': 'oklch(var(--una-background))',
  '--gray2': 'oklch(var(--una-muted))',
  '--gray3': 'oklch(var(--una-muted))',
  '--gray4': 'oklch(var(--una-border))',
  '--gray5': 'oklch(var(--una-border))',
  '--gray6': 'oklch(var(--una-border))',
  '--gray7': 'oklch(var(--una-border))',
  '--gray8': 'oklch(var(--una-muted-foreground))',
  '--gray9': 'oklch(var(--una-muted-foreground))',
  '--gray10': 'oklch(var(--una-muted-foreground))',
  '--gray11': 'oklch(var(--una-muted-foreground))',
  '--gray12': 'oklch(var(--una-foreground))',
}
</script>

<template>
  <Toaster
    v-bind="props"
    :toast-options="{ ...props.toastOptions, classes: { ...classes, ...props.toastOptions?.classes } }"
    :style="{ ...tokens, ...props.style }"
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
