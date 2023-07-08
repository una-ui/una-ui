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

  nv?: {
    wrapper?: string
    leadingWrapper?: string
    trailingWrapper?: string

    warningIcon?: string
    errorIcon?: string
    successIcon?: string
    infoIcon?: string
    loadingIcon?: string

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
const isTrailing = props.trailing || props.status || props.loading || slots.trailing || true
</script>

<template>
  <div
    input="wrapper"
    :class="[
      nv?.wrapper ?? undefined,
    ]"
  >
    <input
      v-model="inputValue"
      :type="type"
      :class="[
        status ? `input-solid-${status} input-status-${status}` : 'input-outline',
        isLeading ? 'ps-10' : '',
        isTrailing ? 'pe-10' : '',
        nv?.inputBase ?? undefined,
      ]"
      v-bind="$attrs"
    >

    <div
      v-if="isLeading"
      input="leading-wrapper"
      :class="[
        nv?.leadingWrapper ?? undefined,
        status ? `text-${status}` : '',
      ]"
    >
      <slot name="leading">
        <Icon :name="leading" />
      </slot>
    </div>

    <div
      v-if="isTrailing"
      input="trailing-wrapper"
      :class="[
        nv?.trailingWrapper ?? undefined,
        status ? `text-${status}` : '',
      ]"
    >
      <Icon
        v-if="loading"
        :name="nv?.loadingIcon ? nv?.loadingIcon : 'input-loading-icon'"
        class="animate-spin"
      />
      <slot v-else name="trailing">
        <Icon
          v-if="status"
          :name="status ? `input-${status}-icon` : ''"
        />

        <Icon v-else :name="trailing" />
      </slot>
    </div>
  </div>
</template>
