<script setup lang="ts">
import { cn } from '../../../utils'
import type { NTableCellProps } from '../../../types'

const props = defineProps<NTableCellProps>()
</script>

<template>
  <td
    :class="
      cn(
        'table-cell',
        { 'table-cell-pinned': dataPinned },
        dataPinned === 'left' ? 'table-cell-pinned-left' : 'table-cell-pinned-right',
        props.class,
        props?.una?.tableCell,
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
