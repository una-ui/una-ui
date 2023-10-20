<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import NIcon from '../elements/Icon.vue'
import { randomId } from '../../utils'
import type { NCheckboxProps } from '../../types/checkbox'

const props = withDefaults(
  defineProps<NCheckboxProps>(),
  {
    modelValue: false,
    disabled: false,
    una: () => ({
      checkboxIcon: 'checkbox-icon',
    }),
  },
)
const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  default?: void
  icon?: any
}>()

const id = computed(() => props.id ?? randomId('radio'))

const checked = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <label
    checkbox="wrapper"
    :checked="checked || null"
    :disabled="disabled || null"
  >
    <input
      :id="id"
      v-model="checked"
      type="checkbox"
      class="peer"
      checkbox="input"
      :disabled="disabled"
      :name="name"
      @keypress.enter="checked = !checked"
    >
    <div
      :checkbox="checkbox"
      :size="size"
      class="checkbox checkbox-peer-focus"
    >
      <div checkbox="icon-wrapper">
        <slot name="icon">
          <NIcon
            checkbox="icon-base icon-checked"
            :name="una.checkboxIcon!"
          />
        </slot>
      </div>
    </div>
    <div
      v-if="slots.default || label"
      checkbox="label"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>
