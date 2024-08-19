<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../../utils'
import type { NTableEmptyProps } from '../../../types'
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

const props = withDefaults(defineProps<NTableEmptyProps>(), {
  colspan: 1,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TableRow
    v-bind="delegatedProps._tableRow"
  >
    <TableCell
      :class="
        cn(
          'p-4 whitespace-nowrap align-middle text-sm text-muted hover:bg-base',
          props.class,
        )
      "
      v-bind="delegatedProps"
    >
      <div class="flex items-center justify-center py-10">
        <slot />
      </div>
    </TableCell>
  </TableRow>
</template>
