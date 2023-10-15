<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import type { NRadioProps } from '../../types'
import { randomId } from '../../utils'

const props = withDefaults(
  defineProps<NRadioProps>(),
  {
    modelValue: '',
    disabled: false,
  },
)

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  default?: void
}>()

const id = computed(() => props.id ?? randomId('radio'))

const model = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    radio="wrapper"
    :class="[
      una?.radioWrapper,
      {
        'radio-reverse': reverse,
      },
    ]"
    :checked="model === value || null"
    :disabled="disabled || null"
  >
    <input
      :id="id"
      v-model="model"
      type="radio"
      class="peer"
      radio="input"
      :disabled="disabled"
      :name="name"
      :value="value"
      @keypress.enter="model = value!"
    >
    <div
      :radio="radio"
      :size="size"
      class="radio radio-(peer-focus)"
    >
      <div
        radio="inner"
      />
    </div>
    <div v-if="slots.default || label" radio="label">
      <slot>
        {{ label }}
      </slot>
    </div>
  </div>
</template>
