<script setup lang="ts">
import { useToast } from '../../composables/useToast'
import Toast from './toast/Toast.vue'
import ToastProvider from './toast/ToastProvider.vue'
import ToastViewport from './toast/ToastViewport.vue'

defineOptions({
  inheritAttrs: false,
})

const { toasts } = useToast()
</script>

<template>
  <ToastProvider>
    <slot>
      <Toast
        v-for="t in toasts"
        :key="t.id"
        v-bind="{ ...$attrs, ...t }"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Toast>
    </slot>

    <ToastViewport />
  </ToastProvider>
</template>
