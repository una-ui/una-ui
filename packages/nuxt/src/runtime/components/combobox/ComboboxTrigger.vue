<script setup lang="ts">
import type { NComboboxTriggerProps } from '../../types'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxTrigger, useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn, randomId } from '../../utils'
import Button from '../elements/Button.vue'
import Icon from '../elements/Icon.vue'

const props = withDefaults(defineProps<NComboboxTriggerProps>(), {
  btn: 'solid-white',
})

const forwardedProps = useForwardProps(reactiveOmit(props, 'class', 'status', 'una', 'btn'))

const statusClassVariants = computed(() => {
  const btn = {
    info: 'btn-outline-info',
    success: 'btn-outline-success',
    warning: 'btn-outline-warning',
    error: 'btn-outline-error',
    default: undefined,
  }

  const icon = {
    info: props.una?.comboboxTriggerInfoIcon ?? 'combobox-trigger-info-icon',
    success: props.una?.comboboxTriggerSuccessIcon ?? 'combobox-trigger-success-icon',
    warning: props.una?.comboboxTriggerWarningIcon ?? 'combobox-trigger-warning-icon',
    error: props.una?.comboboxTriggerErrorIcon ?? 'combobox-trigger-error-icon',
    default: props?.trailing ?? 'combobox-trigger-trailing-icon',
  }

  return {
    btn: btn[props.status ?? 'default'],
    icon: icon[props.status ?? 'default'],
  }
})

const id = computed(() => props.id ?? randomId('combobox-trigger'))
const status = computed(() => props.status ?? 'default')
</script>

<template>
  <ComboboxTrigger
    v-bind="forwardedProps"
    as-child
  >
    <slot name="wrapper">
      <Button
        :id
        :btn="statusClassVariants.btn ? undefined : props.btn"
        :data-status="status"
        data-slot="combobox-trigger"
        :class="cn(
          'combobox-trigger',
          props.class,
        )"
        tabindex="0"
        :una="{
          ...props.una,
          btn: props.una?.comboboxTrigger,
          btnLeading: cn(
            'combobox-trigger-leading',
            props.una?.btnLeading,
            props.una?.comboboxTriggerLeading,
          ),
          btnDefaultVariant: statusClassVariants.btn,
        }"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>

        <template #trailing>
          <Icon
            :data-status="status"
            :name="statusClassVariants.icon"
            :class="cn(
              'combobox-trigger-trailing',
              props.una?.btnTrailing,
            )"
          />
        </template>
      </Button>
    </slot>
  </ComboboxTrigger>
</template>
