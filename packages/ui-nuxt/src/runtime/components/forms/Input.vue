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

const isLeading = props.leading || slots.leading
const isTrailing = props.trailing || props.status || props.loading || slots.trailing
</script>

<template>
  <div input="wrapper" :class="nv?.inputWrapper">
    <input
      v-model="inputValue"
      :type="type"
      :class="[
        status ? `input-solid-${status} input-status-${status}` : 'input-outline',
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
        <Icon :name="leading" />
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
        :name="nv?.inputLoadingIcon ? nv?.inputLoadingIcon : 'input-loading-icon'"
        class="animate-spin"
      />
      <slot v-else name="trailing">
        <Icon v-if="status" :name="status ? `input-${status}-icon` : ''" />

        <Icon v-else :name="trailing" />
      </slot>
    </div>
  </div>
</template>
