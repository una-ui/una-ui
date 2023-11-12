<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import NIcon from '../elements/Icon.vue'
import type { NInputProps } from '../../types'
import { randomId } from '../../utils'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NInputProps>(), {
  type: 'text',
  resize: 'none',
  rows: 3,
})

const emit = defineEmits<{ (...args: any): void }>()

const slots = defineSlots<{
  leading?: any
  trailing?: any
}>()

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
    info: props.una?.inputWarningIcon ?? 'input-info-icon',
    success: props.una?.inputSuccessIcon ?? 'input-success-icon',
    warning: props.una?.inputWarningIcon ?? 'input-warning-icon',
    error: props.una?.inputErrorIcon ?? 'input-error-icon',
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
    false: [{ 'input-leading-padding': isLeading.value }, { 'input-trailing-padding': isTrailing.value }],
    true: [{ 'input-trailing-padding': isLeading.value }, { 'input-leading-padding': isTrailing.value }],
  }

  return {
    input: input[props.reverse ? 'true' : 'false'],
    leadingWrapper: props.reverse ? 'input-trailing-wrapper' : 'input-leading-wrapper',
    trailingWrapper: props.reverse ? 'input-leading-wrapper' : 'input-trailing-wrapper',
  }
})

// html refs
const textarea = ref<HTMLTextAreaElement | null>(null)

function resizeTextarea() {
  if (!(props.type === 'textarea' && props.autoresize) || !textarea.value)
    return

  textarea.value.rows = props.rows

  const styles = window.getComputedStyle(textarea.value)
  const paddingTop = Number.parseInt(styles.paddingTop)
  const paddingBottom = Number.parseInt(styles.paddingBottom)
  const padding = paddingTop + paddingBottom
  const lineHeight = Number.parseInt(styles.lineHeight)
  const { scrollHeight } = textarea.value
  const newRows = (scrollHeight - padding) / lineHeight

  if (newRows > props.rows)
    textarea.value.rows = newRows

  const maxAutoresizeRows = typeof props.autoresize === 'number' ? props.autoresize : Number.POSITIVE_INFINITY
  if (textarea.value.rows > maxAutoresizeRows)
    textarea.value.rows = maxAutoresizeRows
}

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)

  resizeTextarea()
}

onMounted(() => {
  resizeTextarea()
})
</script>

<template>
  <div
    input="wrapper"
    :size="size"
    :class="una?.inputWrapper"
  >
    <div
      v-if="isLeading"
      :class="[
        una?.inputLeadingWrapper,
        reverseClassVariants.leadingWrapper,
        statusClassVariants.text,
      ]"
    >
      <slot name="leading">
        <NIcon
          v-if="leading"
          :name="leading"
          input="leading"
          :class="una?.inputLeading"
          @click="emit('leading')"
        />
      </slot>
    </div>

    <Component
      :is="type !== 'textarea' ? 'input' : 'textarea'"
      :id="id"
      :ref="type === 'textarea' ? 'textarea' : undefined"
      :value="modelValue"
      :type="type !== 'textarea' ? type : undefined"
      class="input"
      :class="[
        statusClassVariants.input,
        reverseClassVariants.input,
        una?.input,
      ]"
      :input="input"
      :resize="type === 'textarea' ? resize : undefined"
      :rows="type === 'textarea' ? rows : undefined"
      :cols="type === 'textarea' ? cols : undefined"
      v-bind="$attrs"
      @input="onInput"
    />

    <div
      v-if="isTrailing"
      :class="[
        una?.inputTrailingWrapper,
        reverseClassVariants.trailingWrapper,
        statusClassVariants.text,
      ]"
    >
      <NIcon
        v-if="loading"
        input="loading"
        :name="una?.inputLoadingIcon ?? 'input-loading-icon'"
        :class="una?.inputLoading"
      />

      <NIcon
        v-if="status"
        input="status-icon-base"
        :name="statusClassVariants.icon"
      />

      <slot v-else name="trailing">
        <NIcon
          v-if="trailing"
          input="trailing"
          :class="una?.inputTrailing"
          :name="trailing"
          @click="emit('trailing')"
        />
      </slot>
    </div>
  </div>
</template>
