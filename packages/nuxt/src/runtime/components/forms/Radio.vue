<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    disabled?: boolean
    name?: string
    value?: string
    radio?: string
    size?: string
    una?: {
      radioDefaultColor?: string
      radioLabel?: string
      radioPeerFocus?: string
      radioInner?: string
    }
  }>(),
  {
    modelValue: '',
    disabled: false,
    una: () => ({
      radioDefaultColor: 'radio-default-color',
    }),
  },
)
const emit = defineEmits<{ (...args: any): void }>()
const model = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    radio="wrapper"
    :checked="model === value || null"
    :disabled="disabled || null"
  >
    <input
      v-model="model"
      type="radio"
      class="peer absolute w-full opacity-0"
      :disabled="disabled"
      :name="name"
      :value="value"
      @keypress.enter="model = value!"
    >
    <div
      :radio="radio"
      :class="una?.radioDefaultColor"
      class="radio radio-(peer-focus)"
    >
      <div
        radio="inner"
        :size="size"
      />
    </div>
    <label radio="label">
      <slot>
        Label
      </slot>
    </label>
  </div>
</template>
