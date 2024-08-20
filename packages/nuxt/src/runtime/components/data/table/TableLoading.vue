<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../../utils'
import type { NTableLoadingProps } from '../../../types'
import Progress from '../../elements/Progress.vue'
import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<NTableLoadingProps>(), {
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
    )"
    v-bind="delegatedProps._tableRow"
  >
    <td
      :class="
        cn(
          'table-loading-cell',
        )
      "
      :colspan="0"
      v-bind="delegatedProps._tableCell"
    >
      <div class="table-loading">
        <slot>
          <Progress
            class="rounded-none"
            size="3px"
          />
        </slot>
      </div>
    </td>
  </TableRow>
</template>
