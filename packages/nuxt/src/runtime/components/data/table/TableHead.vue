<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableHeadProps } from '../../../types'

const props = defineProps<NTableHeadProps>()
</script>

<template>
  <th
    :class="cn(
      'h-12 px-4 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0',
      props.class,
      { 'sticky bg-base': props.dataPinned },
      props.dataPinned === 'left' ? 'left-0' : 'right-0',
    )"
    v-bind="$attrs"
  >
    <slot />
  </th>
</template>
