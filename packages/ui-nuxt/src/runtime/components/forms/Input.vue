<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import Icon from '../elements/Icon.vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  leading?: string // icon
  trailing?: string // icon
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
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

// emits
const emits = defineEmits<{ (...args: any): void }>()

// slots
const slots = defineSlots<{
  leading?: any
  trailing?: any
}>()

const inputValue = useVModel(props, 'modelValue', emits, { passive: true })

const isLeading = computed(() => props.leading || slots.leading)
const isTrailing = computed(() => props.trailing || slots.trailing || props.status || props.loading)
</script>

<template>
  <div input="wrapper" :class="nv?.inputWrapper">
    <input
      v-model="inputValue"
      :type="type"
      :class="[
        status ? `input-solid-${status} input-status-${status} ring-opacity-50 dark:ring-opacity-40` : 'input-outline',
        isLeading && !reverse ? 'ps-10' : '',
        isTrailing && !reverse ? 'pe-10' : '',
        isLeading && reverse ? 'pe-10' : '',
        isTrailing && reverse ? 'ps-10' : '',
        nv?.inputBase,
      ]"
      v-bind="$attrs"
    >

    <div
      v-if="isLeading"
      :class="[
        nv?.inputLeadingWrapper,
        status ? `text-${status}` : '',
        reverse ? 'input-trailing-wrapper' : 'input-leading-wrapper',
      ]"
    >
      <slot name="leading">
        <Icon
          v-if="leading"
          :name="leading"
        />
      </slot>
    </div>

    <div
      v-if="isTrailing"
      :class="[
        nv?.inputTrailingWrapper,
        status ? `text-${status}` : '',
        !reverse ? 'input-trailing-wrapper' : 'input-leading-wrapper',
      ]"
    >
      <Icon
        v-if="loading"
        :name="nv?.inputLoadingIcon ?? 'input-loading-icon'"
        class="input-loading-base"
      />
      <slot v-else name="trailing">
        <Icon v-if="status" :name="status ? `input-${status}-icon` : ''" />

        <Icon v-else-if="trailing" :name="trailing" />
      </slot>
    </div>
  </div>
</template>
