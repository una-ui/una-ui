<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import NIcon from '../elements/Icon.vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean | null
    disabled?: boolean
    label?: string
    checkbox?: string
    size?: string
    una?: {
      checkboxIcon?: string
    }
  }>(),
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

const checked = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <!-- class="n-checkbox hover:n-checkbox-hover select-none items-center n-disabled:n-disabled" -->
  <label
    checkbox="wrapper"
    :checked="checked || null"
    :disabled="disabled || null"
  >
    <input
      v-model="checked"
      type="checkbox"
      checkbox="input"
      class="peer"
      :disabled="disabled"
      @keypress.enter="checked = !checked"
    >
    <!-- class="n-checkbox-box n-checked:n-checkbox-box-checked peer-active:n-active-base peer-focus-visible:n-focus-base n-transition" -->
    <div
      :checkbox="checkbox"
      :size="size"
      class="checkbox checkbox-peer-focus"
    >
      <div checkbox="icon-wrapper">
        <!-- class="n-transition scale-0 transform op0 n-checked:scale-100 n-checked:op100" -->
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
