<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
  status?: 'success' | 'error' | 'warning' | 'none'
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
const emit = defineEmits(['update:modelValue'])
function onInput(event: InputEvent) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

// status
const isError = computed(() => props.status === 'error')
const isWarning = computed(() => props.status === 'warning')
const isSuccess = computed(() => props.status === 'success')

const input = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // auto focus
  if (props.autofocus && input.value)
    input.value.focus()
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
          isError ? 'text-error' : isSuccess ? 'text-success'
            : isWarning ? 'text-warning'
              : '',
        ]"
      >
        <Icon :name="leading" />
      </div>
    </slot>

    <input
      :id="id ?? name"
      ref="input"
      :disabled="disabled"
      :value="modelValue"
      :type="type"
      :class="[
        isError ? 'input-status-error input-solid-error'
        : isSuccess ? 'input-status-success input-solid-success'
          : isWarning ? 'input-status-warning input-solid-warning'
            : 'input-outline',
        trailing ? 'pr-10' : '',
        leading ? 'pl-10' : '',
        nv?.inputBase ?? undefined,
      ]"
      :input="input"
      :placeholder="placeholder"
      :name="name ?? id"
      @input="onInput($event as InputEvent)"
    >

    <div
      input="trailing-wrapper"
      :class="[
        nv?.trailingWrapper ?? undefined,
      ]"
    >
      <slot name="trailing">
        <!-- trailing="i-carbon-warning-filled" -->
        <Icon
          :name="
            isError ? 'input-error-icon text-error'
            : isSuccess ? 'input-success-icon text-success'
              : isWarning ? 'input-warning-icon text-warning'
                : trailing "
        />
      </slot>
    </div>
  </div>
</template>
