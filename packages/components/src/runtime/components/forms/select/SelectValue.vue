<script setup lang="ts">
import type { NSelectValueProps } from '../../../types'
import { SelectValue } from 'reka-ui'
import { cn } from '../../../utils'

const props = defineProps<NSelectValueProps>()
</script>

<template>
  <SelectValue
    :class="cn(
      'select-value',
      props.una?.selectValue,
      props.class,
    )"
    v-bind="props"
  >
    <slot />
  </SelectValue>
</template>
