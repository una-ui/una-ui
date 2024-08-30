<script setup lang="ts">
import { DropdownMenuTrigger, useForwardProps } from 'radix-vue'
import Button from '../Button.vue'
import { cn } from '../../../utils'
import type { NDropdownMenuTriggerProps } from '../../../types'

const props = withDefaults(defineProps<NDropdownMenuTriggerProps>(), {
})

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :class="cn(
        '',
        props.class,
      )"
      :una="{
        btnDefaultVariant: 'dropdown-menu-default-variant',
        btnLeading: cn('dropdown-menu-trigger-leading', forwardedProps.una?.btnLeading),
        btnTrailing: cn('dropdown-menu-trigger-trailing', forwardedProps.una?.btnTrailing),
        ...forwardedProps.una,
      }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Button>
  </DropdownMenuTrigger>
</template>
