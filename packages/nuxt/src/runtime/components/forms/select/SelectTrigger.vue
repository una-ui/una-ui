<script setup lang="ts">
import type { NSelectTriggerProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn, randomId } from '../../../utils'
import Button from '../../elements/Button.vue'
import Icon from '../../elements/Icon.vue'

const props = withDefaults(defineProps<NSelectTriggerProps>(), {
  select: 'solid-white',
})

const forwardedProps = useForwardProps(reactiveOmit(props, 'class', 'status', 'una', 'select'))

const statusClassVariants = computed(() => {
  const btn = {
    info: 'btn-outline-info',
    success: 'btn-outline-success',
    warning: 'btn-outline-warning',
    error: 'btn-outline-error',
    default: '',
  }

  const icon = {
    info: props.una?.selectTriggerInfoIcon ?? 'select-trigger-info-icon',
    success: props.una?.selectTriggerSuccessIcon ?? 'select-trigger-success-icon',
    warning: props.una?.selectTriggerWarningIcon ?? 'select-trigger-warning-icon',
    error: props.una?.selectTriggerErrorIcon ?? 'select-trigger-error-icon',
    default: props?.trailing ?? props.una?.selectTriggerTrailingIcon ?? 'select-trigger-trailing-icon',
  }

  return {
    btn: btn[props.status ?? 'default'],
    icon: icon[props.status ?? 'default'],
  }
})

const id = computed(() => props.id ?? randomId('select-trigger'))
const status = computed(() => props.status ?? 'default')
</script>

<template>
  <SelectTrigger
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :id
      :select="statusClassVariants.btn ? undefined : props.select"
      :data-status="status"
      :class="cn(
        'select-trigger justify-between font-normal',
        props.una?.selectTrigger,
        props.class,
      )"
      :una="{
        ...props.una,
        btn: props.una?.selectTrigger,
        btnLeading: cn(
          'select-trigger-leading',
          props.una?.btnLeading,
          props.una?.selectTriggerLeading,
        ),
        btnDefaultVariant: statusClassVariants.btn,
      }"
    >
      <slot />

      <template #trailing>
        <SelectIcon
          as-child
        >
          <Icon
            :data-status="status"
            :name="statusClassVariants.icon"
            :class="cn(
              'select-trigger-trailing rtl:mr-auto ltr:ml-auto',
              props.una?.btnTrailing,
              props.una?.selectTriggerTrailing,
            )"
          />
        </SelectIcon>
      </template>
    </Button>
  </SelectTrigger>
</template>
