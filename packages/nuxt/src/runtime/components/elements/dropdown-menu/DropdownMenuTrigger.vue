<script setup lang="ts">
import type { NDropdownMenuTriggerProps } from '../../../types'
import { DropdownMenuTrigger, useForwardProps } from 'radix-vue'
import { cn, randomId } from '../../../utils'
import Button from '../Button.vue'

const props = defineProps<NDropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    as-child
  >
    <Button
      v-bind="forwardedProps"
      :id="randomId('dropdown-menu-trigger')"
      :class="cn(
        'dropdown-menu-trigger justify-start font-normal',
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
