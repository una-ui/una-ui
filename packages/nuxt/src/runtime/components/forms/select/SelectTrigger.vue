<script setup lang="ts">
import type { NSelectTriggerProps } from '../../../types'
import { SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn, randomId } from '../../../utils'
import Button from '../../elements/Button.vue'

const props = defineProps<NSelectTriggerProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)

const statusClassVariants = computed(() => {
  const btn = {
    info: 'btn-outline-info',
    success: 'btn-outline-success',
    warning: 'btn-outline-warning',
    error: 'btn-outline-error',
    default: props.select ? `select-${props.select}` : 'select-default-variant',
  }

  const text = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    default: '',
  }

  const icon = {
    info: props.una?.selectTriggerInfoIcon ?? 'select-trigger-info-icon',
    success: props.una?.selectTriggerSuccessIcon ?? 'select-trigger-success-icon',
    warning: props.una?.selectTriggerWarningIcon ?? 'select-trigger-warning-icon',
    error: props.una?.selectTriggerErrorIcon ?? 'select-trigger-error-icon',
    default: props.una?.selectTriggerTrailingIcon ?? 'select-trigger-trailing-icon',
  }

  return {
    btn: btn[props.status ?? 'default'],
    text: text[props.status ?? 'default'],
    icon: icon[props.status ?? 'default'],
  }
})
</script>

<template>
  <SelectTrigger
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :id="randomId('select-trigger')"
      :class="cn(
        'select-trigger justify-between font-normal',
        props.class,
      )"
      :trailing="statusClassVariants.icon"
      :una="{
        ...props.una,
        ...{
          btnLeading: cn(
            'select-trigger-leading',
            props.una?.btnLeading,
          ),
          btnTrailing: cn(
            'select-trigger-trailing',
            props.una?.btnTrailing,
            statusClassVariants.text,
          ),
          btnDefaultVariant: statusClassVariants.btn,
        },
      }"
    >
      <slot />
    </Button>
  </SelectTrigger>
</template>
