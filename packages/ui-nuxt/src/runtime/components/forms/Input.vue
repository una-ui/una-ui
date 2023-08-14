<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import NIcon from '../elements/Icon.vue'
import type { NInputProps } from '../../types'
import { randomId } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NInputProps>(), {
  type: 'text',
})

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  leading?: any
  trailing?: any
}>()

const inputValue = useVModel(props, 'modelValue', emit, { passive: true })

const id = computed(() => props.id ?? randomId('input'))

const isLeading = computed(() => props.leading || slots.leading)
const isTrailing = computed(() => props.trailing || slots.trailing || props.status || props.loading)

const inputVariants = ['outline', 'solid'] as const
const hasVariant = computed(() => inputVariants.some(inputVariants => props.input?.includes(inputVariants)))
const isBaseVariant = computed(() => props.input?.includes('~'))

const statusClassVariants = computed(() => {
  const input = {
    info: 'input-status-info input-solid-info input-status-ring',
    success: 'input-status-success input-solid-success input-status-ring',
    warning: 'input-status-warning input-solid-warning input-status-ring',
    error: 'input-status-error input-solid-error input-status-ring',
    default: !hasVariant.value && !isBaseVariant.value ? 'input-default-variant' : '',
  }

  const text = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: '',
  }

  const icon = {
    info: props.nv?.inputWarningIcon ?? 'input-info-icon',
    success: props.nv?.inputSuccessIcon ?? 'input-success-icon',
    warning: props.nv?.inputWarningIcon ?? 'input-warning-icon',
    error: props.nv?.inputErrorIcon ?? 'input-error-icon',
    default: '',
  }

  return {
    input: input[props.status ?? 'default'],
    text: text[props.status ?? 'default'],
    icon: icon[props.status ?? 'default'],
  }
})

const reverseClassVariants = computed(() => {
  const input = {
    false: [{ 'ps-2.6em': isLeading.value }, { 'pe-2.6em': isTrailing.value }],
    true: [{ 'pe-2.6em': isLeading.value }, { 'ps-2.6em': isTrailing.value }],
  }

  return {
    input: input[props.reverse ? 'true' : 'false'],
    leadingWrapper: props.reverse ? 'input-trailing-wrapper' : 'input-leading-wrapper',
    trailingWrapper: props.reverse ? 'input-leading-wrapper' : 'input-trailing-wrapper',
  }
})
</script>

<template>
  <div
    input="wrapper"
    :size="size"
    :class="nv?.inputWrapper"
  >
    <input
      v-bind="$attrs"
      :id="id"
      v-model="inputValue"
      :type="type"
      class="input"
      :class="[
        statusClassVariants.input,
        reverseClassVariants.input,
        nv?.input,
      ]"
      :input="input"
    >

    <div
      v-if="isLeading"
      :class="[
        nv?.inputLeadingWrapper,
        reverseClassVariants.leadingWrapper,
        statusClassVariants.text,
      ]"
    >
      <slot name="leading">
        <NIcon
          v-if="leading"
          :name="leading"
          input="leading"
          :class="nv?.inputLeading"
          @click="emit('leading')"
        />
      </slot>
    </div>

    <div
      v-if="isTrailing"
      :class="[
        nv?.inputTrailingWrapper,
        reverseClassVariants.trailingWrapper,
        statusClassVariants.text,
      ]"
    >
      <NIcon
        v-if="loading"
        input="loading"
        :name="nv?.inputLoadingIcon ?? 'input-loading-icon'"
        :class="nv?.inputLoading"
      />

      <slot v-else name="trailing">
        <NIcon
          v-if="status"
          input="status-icon-base"
          :name="statusClassVariants.icon"
        />
        <NIcon
          v-else-if="trailing"
          input="trailing"
          :class="nv?.inputTrailing"
          :name="trailing"
          @click="emit('trailing')"
        />
      </slot>
    </div>
  </div>
</template>
