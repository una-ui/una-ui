<script setup lang="ts">
import type { NTableLoadingProps } from '../../../types'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Progress from '../../elements/Progress.vue'
import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<NTableLoadingProps>(), {
  size: '2.5px',
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TableRow
    :class="cn(
      'table-loading-row',
      props.una?.tableLoadingRow,
    )"
    data-loading="true"
    v-bind="delegatedProps._tableRow"
  >
    <td
      :class="
        cn(
          'table-loading-cell',
          props.una?.tableLoadingCell,
        )
      "
      :colspan="0"
      v-bind="delegatedProps._tableCell"
    >
      <div
        v-if="enabled"
        :class="cn(
          'table-loading',
          props.una?.tableLoading,
        )"
      >
        <slot>
          <Progress
            :size
            v-bind="props._tableProgress"
            :class="cn(
              props._tableProgress?.class,
            )"
          />
        </slot>
      </div>
    </td>
  </TableRow>
</template>
