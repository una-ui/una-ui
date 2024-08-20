<script setup lang="ts">
import { computed } from 'vue'
import { cn, omitProps } from '../../../utils'
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
    :class="cn(
      'table-empty-row',
    )"
    v-bind="delegatedProps._tableRow"
  >
    <TableCell
      :class="
        cn(
          'table-empty-cell',
        )
      "
      :colspan="props.colspan"
      v-bind="delegatedProps._tableCell"
    >
      <div
        :class="cn(
          'table-empty',
          props.class,
        )"
        v-bind="omitProps(delegatedProps, ['_tableRow', '_tableCell', 'colspan'])"
      >
        <slot>
          <span>
            No data available
          </span>
        </slot>
      </div>
    </TableCell>
  </TableRow>
</template>
