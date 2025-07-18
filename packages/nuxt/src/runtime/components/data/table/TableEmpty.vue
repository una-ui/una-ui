<script setup lang="ts">
import type { NTableEmptyProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { cn, omitProps } from '../../../utils'
import TableCell from './TableCell.vue'

import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<NTableEmptyProps>(), {
  colspan: 1,
  emptyText: 'No results.',
})
const delegatedProps = reactiveOmit(props, ['class'])
</script>

<template>
  <TableRow
    :class="cn(
      'table-empty-row',
      props.una?.tableRow,
    )"
    v-bind="delegatedProps._tableRow"
  >
    <TableCell
      :class="
        cn(
          'table-empty-cell',
          props.una?.tableCell,
        )
      "
      :colspan="props.colspan"
      v-bind="delegatedProps._tableCell"
    >
      <div
        :class="cn(
          'table-empty',
          props.una?.tableEmpty,
          props.class,
        )"
        v-bind="omitProps(delegatedProps, ['_tableRow', '_tableCell', 'colspan'])"
      >
        <slot>
          <div class="grid place-items-center gap-4">
            <NIcon
              name="i-tabler-database-x"
              size="2xl"
            />

            <span class="text-center text-wrap">
              {{ props.emptyText }}
            </span>
          </div>
        </slot>
      </div>
    </TableCell>
  </TableRow>
</template>
