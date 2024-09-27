<script setup lang="ts">
import type { NTableCellProps } from '../../../types'
import { cn } from '../../../utils'

const props = defineProps<NTableCellProps>()
</script>

<template>
  <td
    :class="
      cn(
        'table-cell',
        props?.una?.tableCell,
        props.class,
        { 'table-cell-pinned': dataPinned },
        dataPinned === 'left' ? 'table-cell-pinned-left' : 'table-cell-pinned-right',
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
