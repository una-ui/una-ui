<script setup lang="ts">
import type { NToasterProps } from '../../../types'
import { useToast } from '../../../composables/useToast'
import Toast from './Toast.vue'
import ToastProvider from './ToastProvider.vue'
import ToastViewport from './ToastViewport.vue'

defineOptions({
  inheritAttrs: false,
})

defineProps<NToasterProps>()

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
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

    <ToastViewport />
  </ToastProvider>
</template>
