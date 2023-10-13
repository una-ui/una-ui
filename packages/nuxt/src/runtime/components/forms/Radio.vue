<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { randomId } from '../../utils'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    disabled?: boolean
    name?: string
    id?: string
    value?: string
    radio?: string
    label?: string
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
    }),
  },
)

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  default?: void
}>()

const id = computed(() => props.id ?? randomId('input'))

const model = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    radio="wrapper"
    :checked="model === value || null"
    :disabled="disabled || null"
  >
    <input
      :id="id"
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
    <span v-if="slots.default || label" radio="label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </div>
</template>
