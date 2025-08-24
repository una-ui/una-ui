<script setup lang="ts">
import type { NToasterProps } from '../../types'
import { reactivePick } from '@vueuse/core'
import { useSlots } from 'vue'
import { useToast } from '../../composables/useToast'
import Toast from './toast/Toast.vue'
import ToastProvider from './toast/ToastProvider.vue'
import ToastViewport from './toast/ToastViewport.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<NToasterProps>()

const rootProps = reactivePick(props, ['duration', 'label', 'swipeDirection', 'swipeThreshold'])

const slots = useSlots()
const scopedSlots = Object.keys(slots).filter(n => n !== 'default')

const { toasts } = useToast()
</script>

<template>
  <ToastProvider
    v-bind="rootProps"
  >
    <slot />

    <Toast
      v-for="t in toasts"
      :key="t.id"
      v-bind="{ ..._toast, ...$attrs, ...t }"
    >
      <template v-for="(_, name) in scopedSlots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Toast>

    <ToastViewport v-bind="_toastViewport" />
  </ToastProvider>
</template>
