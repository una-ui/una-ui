<script setup lang="ts">
import { TooltipTrigger, useForwardProps } from 'radix-vue'
import Button from '../Button.vue'
import { cn } from '../../../utils'
import type { NTooltipTriggerProps } from '../../../types'

const props = defineProps<NTooltipTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <TooltipTrigger
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :class="cn(
        'tooltip-trigger justify-start font-normal',
        props.class,
      )"
      :una="{
        btnDefaultVariant: 'tooltip-default-variant',
        btnLeading: cn('tooltip-trigger-leading', forwardedProps.una?.btnLeading),
        btnTrailing: cn('tooltip-trigger-trailing', forwardedProps.una?.btnTrailing),
        ...forwardedProps.una,
      }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </TooltipTrigger>
</template>
