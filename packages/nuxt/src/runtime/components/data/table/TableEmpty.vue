<script setup lang="ts">
import type { NTableEmptyProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { cn, omitProps } from '../../../utils'
import TableCell from './TableCell.vue'

import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<NTableEmptyProps>(), {
  colspan: 1,
  emptyText: 'No results.',
  emptyIcon: 'table-empty-icon-name',
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
          <NIcon
            :name="props.emptyIcon"
            :class="cn(
              'table-empty-icon',
              props.una?.tableEmptyIcon,
            )"
            size="2xl"
          />

          <span
            :class="cn(
              'table-empty-text',
              props.una?.tableEmptyText,
            )"
          >
            {{ props.emptyText }}
          </span>
        </slot>
      </div>
    </TableCell>
  </TableRow>
</template>
