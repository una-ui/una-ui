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

// shadcn's DataTablePagination, part for part: the selection count on the
// left, then rows per page, "Page X of Y" and first/prev/next/last on the
// right — and no page numbers, which is what keeps it on one row
const props = withDefaults(defineProps<NTablePaginationProps>(), {
  showInfo: true,
  showRowsPerPage: true,
  showListItem: false,
  // shadcn's `size-8` navigation buttons
  square: '8',
})

const context = useTable(null)

// context when rendered by `NTable`, the `table` prop when composed on its own —
// the same pattern as `NPaginationInfo`, and shadcn's `<DataTablePagination :table />`
const table = computed(() => props.table ?? context?.table)

// `showInfo`, `showRowsPerPage` and their prop bags are consumed here: the
// inner `NPagination` renders the navigation only, never its own regions
const delegatedProps = reactiveOmit(props, ['class', 'una', 'table', 'showInfo', 'showRowsPerPage', '_paginationInfo', '_paginationRowsPerPage'])

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

  const { rowCount, pageCount: count } = t.options
  if (rowCount != null)
    return rowCount
  if (count != null && count >= 0)
    return count * itemsPerPage.value

  return t.getFilteredRowModel().rows.length
})

const pageCount = computed(() => {
  const n = table.value?.getPageCount() ?? 0
  return n > 0 ? n : Math.max(1, Math.ceil(total.value / itemsPerPage.value))
})

const selectable = computed(() => Boolean(table.value?.options.enableRowSelection))
const selectedCount = computed(() => table.value?.getFilteredSelectedRowModel().rows.length ?? 0)
const filteredCount = computed(() => table.value?.getFilteredRowModel().rows.length ?? 0)

const first = computed(() => total.value ? (page.value - 1) * itemsPerPage.value + 1 : 0)
const last = computed(() => Math.min(page.value * itemsPerPage.value, total.value))

// shadcn's left-hand text; the row range when there is nothing to select
const status = computed(() => selectable.value
  ? `${selectedCount.value} of ${filteredCount.value} row(s) selected.`
  : `Showing ${first.value}–${last.value} of ${total.value}`)

function onPage(n: number) {
  if (context)
    context.setPageIndex(n - 1)
  else
    table.value?.setPageIndex(n - 1)
}

function onItemsPerPage(n: number) {
  if (context)
    context.setPageSize(n)
  else
    table.value?.setPageSize(n)
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
    <div
      v-if="showInfo"
      :class="cn('table-pagination-status', props.una?.tablePaginationStatus)"
    >
      <slot
        name="status"
        :selected="selectedCount"
        :filtered="filteredCount"
        :total
        :first
        :last
      >
        {{ status }}
      </slot>
    </div>

    <div :class="cn('table-pagination-controls', props.una?.tablePaginationControls)">
      <div
        v-if="showRowsPerPage"
        :class="cn('table-pagination-page-size', props.una?.tablePaginationPageSize)"
      >
        <PaginationRowsPerPage
          label="Rows per page"
          :disabled="props.disabled"
          :items-per-page="itemsPerPage"
          :una
          v-bind="{ _selectTrigger: { class: 'h-8' }, ...props._paginationRowsPerPage }"
          @update:items-per-page="onItemsPerPage"
        />
      </div>

      <!-- literal weight/colour rather than in the shortcut: `pagination-info`
           sets a muted colour in the same layer, and literals win regardless -->
      <PaginationInfo
        :page
        :page-count="pageCount"
        :una
        :class="cn('table-pagination-page font-medium text-foreground', props.una?.tablePaginationPage)"
        v-bind="props._paginationInfo"
      />

      <!-- `hidden lg:inline-flex` stays literal for the same reason: it has to
           beat `.btn`'s own display, which lives in the shortcuts layer -->
      <Pagination
        v-bind="forwardedProps"
        :page
        :items-per-page="itemsPerPage"
        :total
        :una
        :class="cn('table-pagination-nav', props.una?.tablePaginationNav)"
        :_pagination-list="{ class: 'gap-2', ...props._paginationList }"
        :_pagination-first="{ class: 'hidden lg:inline-flex', ...props._paginationFirst }"
        :_pagination-last="{ class: 'hidden lg:inline-flex', ...props._paginationLast }"
        @update:page="onPage"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </Pagination>
    </div>
  </div>
</template>
