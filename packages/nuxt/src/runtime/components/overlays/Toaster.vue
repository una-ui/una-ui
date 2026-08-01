<script setup lang="ts">
import type { NToasterProps } from '../../types'
import { useColorMode } from '#imports'
import { reactiveOmit } from '@vueuse/core'
import { computed, provide } from 'vue'
import { Toaster } from 'vue-sonner'
import { cn } from '../../utils'
import { TOASTER_CLOSE_DEFAULTS, TOASTER_CLOSE_INJECTION_KEY } from '../../utils/injectionKeys'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NToasterProps>(), {
  position: 'bottom-right',
  duration: 4000,
  visibleToasts: 3,
  expand: false,
  closeButton: true,
})

// vue-sonner draws no close button on a custom component, so rich toasts read
// these instead — resolved in its own order: `toastOptions`, then the prop.
provide(TOASTER_CLOSE_INJECTION_KEY, computed(() => ({
  closeButton: props.toastOptions?.closeButton ?? props.closeButton,
  closeButtonAriaLabel: props.toastOptions?.closeButtonAriaLabel ?? TOASTER_CLOSE_DEFAULTS.closeButtonAriaLabel,
  class: props.una?.toastClose,
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

  // shadcn's `max-w-sm`; sonner's own 356px leaves too little for the text
  // column once the buttons are 32px
  '--width': '384px',

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

// inline so it outranks sonner's own card rules without !important. 14px is
// shadcn's `text-sm`; sonner's card is 13px and the text inherits from it.
const layout = { gap: '12px', fontSize: '14px' }

// Keep these class strings in this .vue file — UnoCSS does not scan plain .ts,
// so moving them would silently generate no CSS.
const classes = computed(() => ({
  toast: props.una?.toast,
  title: props.una?.toastTitle,
  // `toast-description` carries a `!`: sonner hardcodes this colour per theme
  // behind three selectors, which no class can outrank.
  description: cn('toast-description', props.una?.toastDescription),
  content: props.una?.toastContent,
  icon: cn('toast-icon', 'toast-icon-standard', props.una?.toastIcon),
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
