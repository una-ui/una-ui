<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import type { NRadioProps } from '../../types'
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
      :name="name ?? id"
      :value="value"
      @keypress.enter="model = value!"
    >
    <div
      :radio="radio"
      :size="size"
      class="radio radio-(peer-focus)"
      v-bind="$attrs"
      @click="model = value!"
    >
      <div radio="icon-wrapper">
        <NIcon
          radio="icon-base"
          class="n-checked:radio-icon-checked"
          :name="una.radioIcon!"
        />
      </div>
    </div>
    <label
      v-if="slots.default || label"
      radio="label"
      :class="una?.radioLabel"
    >
      <slot>
        {{ label }}
      </slot>
    </label>
  </div>
</template>
