<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import Icon from '../elements/Icon.vue'
import type { NInputProps } from '../../types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NInputProps>(), {
  type: 'text',
  reverse: false,
})

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  leading?: any
  trailing?: any
}>()

const inputValue = useVModel(props, 'modelValue', emit, { passive: true })

const isLeading = computed(() => props.leading || slots.leading)
const isTrailing = computed(
  () => props.trailing || slots.trailing || props.status || props.loading,
)

const inputVariants = ['outline', 'solid'] as const
const hasVariant = computed(() => inputVariants.some(inputVariants => props.input?.includes(inputVariants)))

const statusVariants = computed(() => {
  const inputClass = {
    info: 'input-status-info input-solid-info input-status-ring',
    success: 'input-status-success input-solid-success input-status-ring',
    warning: 'input-status-warning input-solid-warning input-status-ring',
    error: 'input-status-error input-solid-error input-status-ring',
    default: !hasVariant.value ? 'input-outline' : '',
  }

  const textClass = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: '',
  }

  const iconName = {
    info: props.nv?.inputWarningIcon ?? 'input-info-icon',
    success: props.nv?.inputSuccessIcon ?? 'input-success-icon',
    warning: props.nv?.inputWarningIcon ?? 'input-warning-icon',
    error: props.nv?.inputErrorIcon ?? 'input-error-icon',
    default: '',
  }

  return {
    input: inputClass[props.status ?? 'default'],
    text: textClass[props.status ?? 'default'],
    icon: iconName[props.status ?? 'default'],
  }
})

const reverseVariants = computed(() => {
  const inputClass = {
    false: [isLeading.value ? 'ps-10' : '', isTrailing.value ? 'pe-10' : ''],
    true: [isLeading.value ? 'pe-10' : '', isTrailing.value ? 'ps-10' : ''],
  }

  return {
    input: inputClass[props.reverse ? 'true' : 'false'],
    leadingWrapper: props.reverse ? 'input-trailing-wrapper' : 'input-leading-wrapper',
    trailingWrapper: props.reverse ? 'input-leading-wrapper' : 'input-trailing-wrapper',
  }
})
</script>

<template>
  <div input="wrapper" :class="nv?.inputWrapper">
    <input
      v-model="inputValue"
      :type="type"
      :class="[
        statusVariants.input,
        reverseVariants.input,
      ]"
      :input="`~ ${input ?? ''}`"
      v-bind="$attrs"
    >

    <div
      v-if="isLeading"
      :class="[
        nv?.inputLeadingWrapper,
        reverseVariants.leadingWrapper,
        statusVariants.text,
      ]"
    >
      <slot name="leading">
        <Icon v-if="leading" :name="leading" @click="emit('leading')" />
      </slot>
    </div>

    <div
      v-if="isTrailing"
      :class="[
        nv?.inputTrailingWrapper,
        reverseVariants.trailingWrapper, statusVariants.text,
      ]"
    >
      <Icon
        v-if="loading"
        :name="nv?.inputLoadingIcon ?? 'input-loading-icon'"
        input="loading-base"
        :class="nv?.inputLoadingBase"
      />

      <slot v-else name="trailing">
        <Icon v-if="status" :name="statusVariants.icon" />
        <Icon v-else-if="trailing" :name="trailing" @click="emit('trailing')" />
      </slot>
    </div>
  </div>
</template>
