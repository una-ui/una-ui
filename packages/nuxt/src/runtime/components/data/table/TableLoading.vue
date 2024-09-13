<script setup lang="ts">
import type { NTableLoadingProps } from '../../../types'
import { computed } from 'vue'
import { cn } from '../../../utils'
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
    data-loading="true"
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
      <div
        v-if="enabled"
        class="table-loading"
      >
        <slot>
          <Progress
            size="3px"
          />
        </slot>
      </div>
    </td>
  </TableRow>
</template>
