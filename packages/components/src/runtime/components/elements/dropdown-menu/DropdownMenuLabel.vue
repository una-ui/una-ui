<script setup lang="ts">
import type { NDropdownMenuLabelProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { DropdownMenuLabel, useForwardProps } from 'reka-ui'

import { cn } from '../../../utils'

const props = defineProps<NDropdownMenuLabelProps>()
const delegatedProps = reactiveOmit(props, ['class'])

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="cn(
      'dropdown-menu-label',
      forwardedProps.inset && 'pl-8',
      props.una?.dropdownMenuLabel,
      props.class,
    )"
  >
    <slot />
  </DropdownMenuLabel>
</template>
