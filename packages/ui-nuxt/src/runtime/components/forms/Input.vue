<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import Icon from '../elements/Icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
})

// emits
const emit = defineEmits<{ (...args: any): void }>()

interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  leading?: string
  trailing?: string
  status?: 'info' | 'success' | 'warning' | 'error'

  nv?: {
    wrapper?: string
    leadingWrapper?: string
    trailingWrapper?: string

    inputBase?: string
  }
}

const inputValue = useVModel(props, 'modelValue', emit, { passive: true })
</script>

<template>
  <div
    input="wrapper"
    :class="[
      nv?.wrapper ?? undefined,
    ]"
  >
    <slot name="leading">
      <div
        input="leading-wrapper"
        :class="[
          nv?.leadingWrapper ?? undefined,
          status ? `text-${status}` : '',
        ]"
      >
        <Icon :name="leading" />
      </div>
    </slot>

    <input
      v-model="inputValue"
      :type="type"
      :class="[
        status ? `input-solid-${status} input-status-${status}` : 'input-outline',
        trailing ? 'pr-10' : '',
        leading ? 'pl-10' : '',
        nv?.inputBase ?? undefined,
      ]"
      v-bind="$attrs"
    >

    <div
      input="trailing-wrapper"
      :class="[
        nv?.trailingWrapper ?? undefined,
        status ? `text-${status}` : '',
      ]"
    >
      <slot name="trailing">
        <Icon
          v-if="status"
          :name="status ? `input-${props.status}-icon` : ''"
        />

        <Icon v-else :name="trailing" />
      </slot>
    </div>
  </div>
</template>
