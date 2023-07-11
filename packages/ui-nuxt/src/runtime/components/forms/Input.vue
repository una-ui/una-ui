<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { cva } from 'class-variance-authority'
import Icon from '../elements/Icon.vue'

interface Props {
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
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
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

const inputBaseClass = computed(() => {
  return cva(props.nv?.inputBase, {
    variants: {
      status: {
        info: 'input-status-info input-solid-info input-status-ring',
        success: 'input-status-success input-solid-success input-status-ring',
        warning: 'input-status-warning input-solid-warning input-status-ring',
        error: 'input-status-error input-solid-error input-status-ring',
        none: 'input-outline',
      },
      reverse: {
        false: [isLeading.value ? 'ps-10' : '', isTrailing.value ? 'pe-10' : ''],
        true: [isLeading.value ? 'pe-10' : '', isTrailing.value ? 'ps-10' : ''],
      },
    },
    defaultVariants: {
      status: 'none',
      reverse: false,
    },
  })
})

const inputStatusText = {
  status: {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
  },
}

const inputLeadingWrapper = computed(() => {
  return cva(props.nv?.inputLeadingWrapper, {
    variants: {
      reverse: {
        false: 'input-leading-wrapper',
        true: 'input-trailing-wrapper',
      },
      ...inputStatusText,
    },
  })
})

const inputTrailingWrapper = computed(() => {
  return cva(props.nv?.inputTrailingWrapper, {
    variants: {
      reverse: {
        false: 'input-trailing-wrapper',
        true: 'input-leading-wrapper',
      },
      ...inputStatusText,
    },
  })
})

const inputIcon = computed(() => {
  return cva('', {
    variants: {
      status: {
        info: [props.nv?.inputInfoIcon ?? 'input-info-icon'],
        success: [props.nv?.inputSuccessIcon ?? 'input-success-icon'],
        warning: [props.nv?.inputWarningIcon ?? 'input-warning-icon'],
        error: [props.nv?.inputErrorIcon ?? 'input-error-icon'],
      },
      loading: {
        true: [props.nv?.inputLoadingIcon ?? 'input-loading-icon'],
      },
    },
  })
})
</script>

<template>
  <div input="wrapper" :class="nv?.inputWrapper">
    <input
      v-model="inputValue"
      :type="type"
      :class="[inputBaseClass({ status, reverse })]"
      v-bind="$attrs"
    >

    <div
      v-if="isLeading"
      :class="[inputLeadingWrapper({ reverse, status })]"
    >
      <slot name="leading">
        <Icon v-if="leading" :name="leading" @click="emit('leading')" />
      </slot>
    </div>

    <div
      v-if="isTrailing"
      :class="[inputTrailingWrapper({ reverse, status })]"
    >
      <Icon
        v-if="loading"
        :name="inputIcon({ loading })"
        class="input-loading-base"
        :class="nv?.inputLoadingBase"
      />

      <slot v-else name="trailing">
        <Icon v-if="status" :name="inputIcon({ status })" />
        <Icon v-else-if="trailing" :name="trailing" @click="emit('trailing')" />
      </slot>
    </div>
  </div>
</template>
