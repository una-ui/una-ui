<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVModel } from '@vueuse/core'

import Icon from '../elements/Icon.vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  placeholder?: string
  id?: string
  name?: string
  leading?: string
  trailing?: string
  input?: string
  status?: 'none' | 'info' | 'success' | 'warning' | 'error'
  autofocus?: boolean
  disabled?: boolean

  nv?: {
    wrapper?: string
    leadingWrapper?: string
    trailingWrapper?: string

    inputBase?: string
  }
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  status: 'none',
})

// emits
const emit = defineEmits<{ (...args: any): void }>()

const inputValue = useVModel(props, 'modelValue', emit, { passive: true })

// refs
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // auto focus
  if (props.autofocus && inputRef.value)
    inputRef.value.focus()
})
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
          `text-${props.status}`,
        ]"
      >
        <Icon :name="leading" />
      </div>
    </slot>

    <input
      :id="id ?? name"
      ref="inputRef"
      v-model="inputValue"
      :disabled="disabled"
      :value="modelValue"
      :type="type"
      :class="[
        status ? `input-solid-${status} input-status-${status}` : 'input-outline',
        trailing ? 'pr-10' : '',
        leading ? 'pl-10' : '',
        nv?.inputBase ?? undefined,
      ]"
      :input="input"
      :placeholder="placeholder"
      :name="name ?? id"
    >

    <div
      input="trailing-wrapper"
      :class="[
        nv?.trailingWrapper ?? undefined,
        `text-${props.status}`,
      ]"
    >
      <slot name="trailing">
        <Icon
          v-if="props.status !== 'none'"
          :name="`input-${props.status}-icon`"
        />

        <Icon v-else :name="trailing" />
      </slot>
    </div>
  </div>
</template>
