<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import Icon from '../elements/Icon.vue'

export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  leading?: string
  trailing?: string
  status?: 'info' | 'success' | 'warning' | 'error'
  loading?: boolean
  reverse?: boolean

  nv?: {
    inputWrapper?: string
    inputLeadingWrapper?: string
    inputTrailingWrapper?: string

    inputWarningIcon?: string
    inputErrorIcon?: string
    inputSuccessIcon?: string
    inputInfoIcon?: string
    inputLoadingIcon?: string

    inputBase?: string
    inputLoadingBase?: string
  }
}

defineOptions({
  inheritAttrs: false,
})

// props
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  reverse: false,
})

// emits
const emit = defineEmits<{ (...args: any): void }>()

// slots
const slots = defineSlots<{
  leading?: any
  trailing?: any
}>()

const inputValue = useVModel(props, 'modelValue', emit, { passive: true })

const isLeading = computed(() => props.leading || slots.leading)
const isTrailing = computed(
  () => props.trailing || slots.trailing || props.status || props.loading,
)

const statusVariants = computed(() => {
  const inputClass = {
    info: 'input-status-info input-solid-info input-status-ring',
    success: 'input-status-success input-solid-success input-status-ring',
    warning: 'input-status-warning input-solid-warning input-status-ring',
    error: 'input-status-error input-solid-error input-status-ring',
    default: 'input-outline',
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
        props.nv?.inputBase,
        statusVariants.input,
        reverseVariants.input,
      ]"
      v-bind="$attrs"
    >

    <div
      v-if="isLeading"
      :class="[
        props.nv?.inputLeadingWrapper,
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
        props.nv?.inputTrailingWrapper,
        reverseVariants.trailingWrapper, statusVariants.text,
      ]"
    >
      <Icon
        v-if="loading"
        :name="props.nv?.inputLoadingIcon ?? 'input-loading-icon'"
        class="input-loading-base"
        :class="nv?.inputLoadingBase"
      />

      <slot v-else name="trailing">
        <Icon v-if="status" :name="statusVariants.icon" />
        <Icon v-else-if="trailing" :name="trailing" @click="emit('trailing')" />
      </slot>
    </div>
  </div>
</template>
