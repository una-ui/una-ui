<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableCellProps } from '../../../types'

const props = defineProps<NTableCellProps>()
</script>

<template>
  <td
    :class="
      cn(
        'p-4 align-middle [&:has([role=checkbox])]:pr-0',
        { 'sticky bg-base': dataPinned },
        dataPinned === 'left' ? 'left-0' : 'right-0',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
