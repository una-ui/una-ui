<script setup lang="ts">
import type { NToastProps } from '../../../types/toast'
import { useState } from '#app'
import { useToast } from '../../../composables/useToast'
import Toast from './Toast.vue'

type Toaster = NToastProps & { id: string }

defineOptions({
  inheritAttrs: false,
})

const toaster = useToast()
const toasts = useState<Toaster[]>('toasts', () => [])
</script>

<template>
  <div class="fixed bottom-0 right-0 z-[55] max-w-sm w-full flex flex-col justify-end px-4 py-6 space-y-3 sm:px-6">
    <div v-if="toasts.length" class="space-y-3">
      <div
        v-for="t in toasts"
        :key="t.id"
      >
        <Toast
          v-bind="{ ...$attrs, ...t }"
          @close="toaster.remove(t.id)"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </Toast>
      </div>
    </div>
  </div>
</template>
