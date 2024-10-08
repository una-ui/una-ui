<script setup lang="ts">
import type { NRadioProps } from '../../types'
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import { randomId } from '../../utils'
import NIcon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<NRadioProps>(),
  {
    modelValue: '',
    disabled: false,
    una: () => ({
      radioIcon: 'radio-icon',
    }),
  },
)

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  default?: void
  icon?: any
}>()

const id = computed(() => props.id ?? randomId('radio'))

const model = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <label
    radio="wrapper"
    :for="props.for ?? id"
    :class="[
      una?.radioWrapper,
      {
        'radio-reverse': reverse,
        'radio-disabled': disabled,
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
    <span
      :radio="radio"
      :size="size"
      class="radio radio-peer-focus"
      v-bind="$attrs"
    >
      <slot name="icon">
        <NIcon
          :class="[
            una.radioIconBase,
          ]"
          radio="icon-base icon-checked"
          :name="una.radioIcon!"
        />
      </slot>
    </span>
    <div
      v-if="slots.default || label"
      radio="label"
      :class="una?.radioLabel"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>
