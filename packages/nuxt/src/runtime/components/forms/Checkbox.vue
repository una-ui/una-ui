<script setup lang="ts">
import { computed, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import NIcon from '../elements/Icon.vue'
import { randomId } from '../../utils'
import type { NCheckboxProps } from '../../types/checkbox'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<NCheckboxProps>(),
  {
    modelValue: false,
    disabled: false,
  },
)

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  default?: void
  icon?: any
}>()

const id = computed(() => props.id ?? randomId('checkbox'))
const checked = useVModel(props, 'modelValue', emit, { passive: true })

watch(checked, (value) => {
  emit('onUpdate', value)
})
</script>

<template>
  <label
    checkbox="wrapper"
    role="checkbox"
    :for="props.for ?? id"
    :class="[
      una?.checkboxWrapper,
      {
        'checkbox-reverse': reverse,
        'checkbox-disabled': disabled,
      },
    ]"
    :checked="checked || null"
    :disabled="disabled || null"
  >
    <input
      :id="id"
      :value="checked"
      :checked="!!checked"
      type="checkbox"
      class="peer"
      checkbox="input"
      :disabled="disabled"
      :name="name"
      @keypress.enter="checked = !checked"
      @click="checked = !checked"
    >
    <span
      :checkbox="checkbox"
      :size="size"
      class="checkbox checkbox-peer-focus"
      v-bind="$attrs"
    >
      <slot name="icon">
        <NIcon
          checkbox="icon-base icon-checked"
          :name="una?.checkboxIcon ?? 'checkbox-icon'"
          :class="una?.checkboxIconBase"
        />
      </slot>
    </span>
    <div
      v-if="slots.default || label"
      checkbox="label"
      :class="una?.checkboxLabel"
    >
      <slot>
        {{ label }}
      </slot>
    </div>
  </label>
</template>
