<script setup lang="ts">
import type { NToasterProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { useToast } from '../../composables/useToast'
import Toast from './toast/Toast.vue'
import ToastProvider from './toast/ToastProvider.vue'
import ToastViewport from './toast/ToastViewport.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NToasterProps>()

const rootProps = reactivePick(props, ['duration', 'label', 'swipeDirection', 'swipeThreshold'])

const { toasts } = useToast()
</script>

<template>
  <ToastProvider
    v-bind="rootProps"
  >
    <Toast
      v-for="t in toasts"
      :key="t.id"
      v-bind="{ ..._toast, ...$attrs, ...t }"
    >
      <slot v-for="(slotContent, slotName) in $slots" :name="slotName" v-bind="slotContent" />
    </Toast>

    <ToastViewport v-bind="_toastViewport" />
  </ToastProvider>
</template>
