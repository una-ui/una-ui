<script setup lang="ts">
import type { NToasterProps } from '../../types'
import { useColorMode } from '#imports'
import { reactiveOmit } from '@vueuse/core'
import { computed, provide } from 'vue'
import { Toaster } from 'vue-sonner'
import { cn } from '../../utils'
import { TOASTER_CLOSE_INJECTION_KEY } from '../../utils/injectionKeys'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NToasterProps>(), {
  position: 'bottom-right',
  duration: 4000,
  visibleToasts: 3,
  expand: false,
  closeButton: true,
  closeButtonPosition: 'top-right',
})

// rich toasts render through our own component, which vue-sonner skips when it
// draws the close button — they read these instead. The label lives on
// `toastOptions`, which is where vue-sonner takes it from for standard toasts.
provide(TOASTER_CLOSE_INJECTION_KEY, computed(() => ({
  closeButton: props.closeButton ?? true,
  closeButtonAriaLabel: props.toastOptions?.closeButtonAriaLabel ?? 'Close toast',
})))

const toasterProps = reactiveOmit(props, ['una', 'theme', 'toastOptions', 'style'])

// The gray scale has to be remapped alongside --normal-*: sonner declares
// --gray1..--gray12 with light values and its dark block overrides neither, so
// the close button would render near-black on a dark card.
const tokens = {
  // sonner adds these on top of the row gap, which would make standard toasts
  // sit 3px wider from their text than the rich ones
  '--toast-icon-margin-start': '0',
  '--toast-icon-margin-end': '0',

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

// sonner's own dark rules key off this, not off a class
const colorMode = useColorMode()
const theme = computed(() => (colorMode.value === 'dark' ? 'dark' : 'light'))

// inline so it outranks sonner's `align-items: center` without !important
const layout = { alignItems: 'flex-start', gap: '12px' }

// Keep these class strings in this .vue file — UnoCSS does not scan plain .ts,
// so moving them would silently generate no CSS.
const classes = computed(() => ({
  toast: props.una?.toast,
  title: props.una?.toastTitle,
  // `toast-description` carries a `!`: sonner hardcodes this colour per theme
  // behind three selectors, which no class can outrank.
  description: cn('toast-description', props.una?.toastDescription),
  content: props.una?.toastContent,
  icon: cn('toast-icon', props.una?.toastIcon),
  closeButton: cn('toast-close', props.una?.toastClose),
}))
</script>

<template>
  <Toaster
    v-bind="toasterProps"
    :theme="props.theme ?? theme"
    :toast-options="{
      ...props.toastOptions,
      style: { ...layout, ...props.toastOptions?.style },
      classes: { ...classes, ...props.toastOptions?.classes },
    }"
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
