<script setup lang="ts">
import type { NSelectLabelProps } from '../../../types'
import { SelectLabel } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NSelectLabelProps>()
</script>

<template>
  <SelectLabel
    :class="cn(
      'select-label',
      props.una?.selectLabel,
      props.class,
    )"
  >
    <slot />
  </SelectLabel>
</template>
