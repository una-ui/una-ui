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
    <slot>
      <Toast
        v-for="t in toasts"
        :key="t.id"
        v-bind="{ ..._toast, ...$attrs, ...t }"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Toast>
    </slot>

    <ToastViewport v-bind="_toastViewport" />
  </ToastProvider>
</template>
