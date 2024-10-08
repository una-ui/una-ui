<script setup lang="ts">
import { useToast } from '../../composables/useToast'
import Toast from '../overlays/toast/Toast.vue'

defineOptions({
  inheritAttrs: false,
})

const { toasts, remove } = useToast()
</script>

<template>
  <div class="toast-toaster">
    <div v-if="toasts.length" class="toast-toaster-list">
      <Toast
        v-for="t in toasts"
        :key="t.id"
        v-bind="{ ...$attrs, ...t }"
        :toasts
        @close="remove(t.id)"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Toast>
    </div>
  </div>
</template>
