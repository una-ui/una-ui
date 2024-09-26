<script setup lang="ts">
import type { Toaster } from '../../../types/toast'
import { useState } from '#app'
import { useToast } from '../../../composables/useToast'
import Toast from './Toast.vue'

defineOptions({
  inheritAttrs: false,
})

const toaster = useToast()
const toasts = useState<Toaster[]>('toasts', () => [])
</script>

<template>
  <div class="toast-toaster">
    <div v-if="toasts.length" class="toast-toaster-list">
      <Toast
        v-for="t in toasts"
        :key="t.id"
        v-bind="{ ...$attrs, ...t }"
        @close="toaster.remove(t.id)"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Toast>
    </div>
  </div>
</template>
