<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'
import type { NInputProps } from '../../types'
import NInput from './Input.vue'

const props = withDefaults(defineProps<NInputProps>(), {
  type: 'textarea',
  resize: 'none',
  rows: 3,
})

const emit = defineEmits<{ (...args: any): void }>()
const slots = defineSlots<{ (...args: any): void }>()
const value = useVModel(props, 'modelValue', emit)

const textarea = ref<HTMLTextAreaElement | null>(null)
</script>

<template>
  <NInput
    v-bind="props"
    ref="textarea"
    v-model="value"
  >
    <template v-for="(slot, key) in slots" #[key]="slotData">
      <slot :name="key" v-bind="slotData" />
    </template>
  </NInput>
</template>
