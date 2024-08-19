<script setup lang="ts">
import { computed } from 'vue'
import { cn, omitProps } from '../../../utils'
import type { NTableLoadingProps } from '../../../types'
import Icon from '../../elements/Icon.vue'
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

const props = withDefaults(defineProps<NTableLoadingProps>(), {
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
      'table-loading-row',
    )"
    v-bind="delegatedProps._tableRow"
  >
    <TableCell
      :class="
        cn(
          'table-loading-cell',
        )
      "
      :colspan="props.colspan"
      v-bind="delegatedProps._tableCell"
    >
      <div
        :class="cn(
          'table-loading',
          props.class,
        )"
        v-bind="omitProps(delegatedProps, ['_tableRow', '_tableCell', 'colspan'])"
      >
        <slot>
          <Icon
            name="table-loading-icon"
          />

          <span>
            Loading...
          </span>
        </slot>
      </div>
    </TableCell>
  </TableRow>
</template>
