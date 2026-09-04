<script setup lang="ts">
import type { NTablePaginationProps } from '../../../types'
import { reactiveOmit } from '@vueuse/core'
import { useForwardProps } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../../utils'
import Pagination from '../../elements/pagination/Pagination.vue'
import PaginationInfo from '../../elements/pagination/PaginationInfo.vue'
import PaginationRowsPerPage from '../../elements/pagination/PaginationRowsPerPage.vue'
import { useTable } from './useTable'

const props = withDefaults(defineProps<NTablePaginationProps>(), {
  showInfo: true,
  showRowsPerPage: true,
  showEdges: true,
})

const context = useTable(null)

// context when nested in `NTable`, the `table` prop when composed on its own —
// the same pattern as `NPaginationInfo`, and shadcn's `<DataTablePagination :table />`
const table = computed(() => props.table ?? context?.table)

const delegatedProps = reactiveOmit(props, ['class', 'una', 'table'])

// forward only what was actually passed: props typed as booleans are cast to
// `false` when absent, and spreading those would override the wrapped
// component's own defaults
const forwardedProps = useForwardProps(delegatedProps)

const pagination = computed(() => context?.pagination.value ?? table.value?.getState().pagination)
const page = computed(() => (pagination.value?.pageIndex ?? 0) + 1)
const itemsPerPage = computed(() => pagination.value?.pageSize ?? 10)

// a server-side table reports its size through `rowCount`; one that only gives
// `pageCount` can still get the page count right, at the cost of "of N"
// rounding up to a multiple of the page size
const total = computed(() => {
  const t = table.value
  if (!t)
    return 0
  if (t.options.rowCount != null)
    return t.options.rowCount
  if (t.options.pageCount != null && t.options.pageCount >= 0)
    return t.options.pageCount * itemsPerPage.value
  return t.getFilteredRowModel().rows.length
})

const selectable = computed(() => Boolean(table.value?.options.enableRowSelection))
const selectedCount = computed(() => table.value?.getFilteredSelectedRowModel().rows.length ?? 0)
const rowCount = computed(() => table.value?.getFilteredRowModel().rows.length ?? 0)

function onPage(value: number) {
  if (context)
    context.setPageIndex(value - 1)
  else
    table.value?.setPageIndex(value - 1)
}

function onItemsPerPage(value: number) {
  if (context)
    context.setPageSize(value)
  else
    table.value?.setPageSize(value)
}
</script>

<template>
  <div
    :class="cn(
      'table-pagination',
      props.una?.tablePagination,
      props.class,
    )"
  >
    <Pagination
      v-bind="forwardedProps"
      :page
      :items-per-page="itemsPerPage"
      :total
      :una="props.una"
      :_pagination-info="{ format: 'range', ...props._paginationInfo }"
      @update:page="onPage"
      @update:items-per-page="onItemsPerPage"
    >
      <!-- with row selection on, the start region shows the selection count,
           as shadcn's bar does; a consumer-provided #start still wins -->
      <template v-if="selectable && !$slots.start" #start>
        <PaginationInfo
          v-if="showInfo"
          :una
          v-bind="props._paginationInfo"
        >
          {{ selectedCount }} of {{ rowCount }} row(s) selected
        </PaginationInfo>

        <PaginationRowsPerPage
          v-if="showRowsPerPage"
          :disabled="props.disabled"
          :una
          v-bind="props._paginationRowsPerPage"
        />
      </template>

      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </Pagination>
  </div>
</template>
