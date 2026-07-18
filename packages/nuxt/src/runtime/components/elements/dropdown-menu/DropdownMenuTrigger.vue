<script setup lang="ts">
import type { NDropdownMenuTriggerProps } from '../../../types'
import { DropdownMenuTrigger, useForwardProps } from 'reka-ui'
import { cn, randomId } from '../../../utils'
import Button from '../Button.vue'

const props = withDefaults(defineProps<NDropdownMenuTriggerProps>(), {
  // Preserve unset so Button `square ?? !!icon` can auto-enable.
  square: undefined,
})

const forwardedProps = useForwardProps(props)
</script>

<template>
  <DropdownMenuTrigger
    as-child
  >
    <slot>
      <Button
        v-bind="forwardedProps"
        :id="randomId('dropdown-menu-trigger')"
        :class="cn(
          'dropdown-menu-trigger',
          props.class,
        )"
        :una="{
          btnDefaultVariant: 'dropdown-menu-default-variant',
          btnLeading: cn('dropdown-menu-trigger-leading', forwardedProps.una?.btnLeading),
          btnTrailing: cn('dropdown-menu-trigger-trailing', forwardedProps.una?.btnTrailing),
          ...props.una,
        }"
      />
    </slot>
  </DropdownMenuTrigger>
</template>
