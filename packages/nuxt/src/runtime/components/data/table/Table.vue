<script setup lang="ts" generic="TData, TValue">
import type {
  Column,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  GroupingState,
  Header,
  PaginationState,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'
import type { NTableProps } from '../../../types'

import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

import { computed } from 'vue'

import { cn, valueUpdater } from '../../../utils'
import ScrollArea from '../../scroll-area/ScrollArea.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableColumnFilter from './TableColumnFilter.vue'
import TableEmpty from './TableEmpty.vue'
import TableExpandButton from './TableExpandButton.vue'
import TableFooter from './TableFooter.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableLoading from './TableLoading.vue'
import TablePagination from './TablePagination.vue'
import TableRow from './TableRow.vue'
import TableSelectionCell from './TableSelectionCell.vue'
import TableSelectionHeader from './TableSelectionHeader.vue'
import TableSortButton from './TableSortButton.vue'
import { provideTableContext } from './useTable'

// the root is a fragment once the pagination bar renders beside `table-root`,
// so attrs cannot be inherited — they keep going to `<table>` through the
// explicit `v-bind="$attrs"` there, as they always have
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps <NTableProps<TData, TValue>>(), {
  enableMultiRowSelection: true,
  enableSortingRemoval: true,
  showPagination: false,
})
const emit = defineEmits<{
  select: [row: TData]
  selectAll: [rows: TData[]]
  expand: [row: TData]
  row: [event: Event, row: TData]
}>()
const slots = defineSlots()
/**
 * Column ids `NTable` injects for its own widgets. A user column resolving to
 * either would be silently dropped — TanStack keys columns by id in a plain
 * map, so the later definition wins without warning.
 */
const SELECT_COLUMN_ID = 'select'
const EXPAND_COLUMN_ID = 'expand'

const rowSelection = defineModel<RowSelectionState>('rowSelection')
const sorting = defineModel<SortingState>('sorting')
const columnVisibility = defineModel<VisibilityState>('columnVisibility')
const columnFilters = defineModel<ColumnFiltersState>('columnFilters')
const globalFilter = defineModel<string>('globalFilter')
const columnOrder = defineModel<ColumnOrderState>('columnOrder')
const columnPinning = defineModel<ColumnPinningState>('columnPinning')
const expanded = defineModel<ExpandedState>('expanded')
const grouping = defineModel<GroupingState>('grouping')
const pagination = defineModel<PaginationState>('pagination', {
  default: () => ({
    pageIndex: 0,
    pageSize: 10,
  }),
})

const columnsWithMisc = computed(() => {
  if (import.meta.dev) {
    const reservedIds = [SELECT_COLUMN_ID, EXPAND_COLUMN_ID]
    for (const column of props.columns ?? []) {
      const id = (column as any).id ?? (column as any).accessorKey
      if (reservedIds.includes(id)) {
        console.warn(`[NTable]: The column id '${id}' is reserved for the built-in ${id === SELECT_COLUMN_ID ? 'row selection' : 'row expansion'} column. TanStack keys columns by id, so one of the two will be silently dropped. Please choose a different id.`)
      }
    }
  }

  let data = props.columns as ColumnDef<TData, TValue>[]

  // add selection column
  data = props.enableRowSelection
    ? [
        {
          id: SELECT_COLUMN_ID,
          enableSorting: false,
          enableHiding: false,
          enableColumnFilter: false,
        },
        ...data,
      ]
    : data

  // add expanded column
  data = slots.expanded
    ? [
        {
          id: EXPAND_COLUMN_ID,
          enableSorting: false,
          enableHiding: false,
          enableColumnFilter: false,
        },
        ...data,
      ]
    : data

  return data
})

const table = useVueTable({
  get data() {
    return props.data ?? []
  },
  get columns() {
    return columnsWithMisc.value ?? []
  },
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get globalFilter() { return globalFilter.value },
    get rowSelection() { return rowSelection.value },
    get columnVisibility() { return columnVisibility.value },
    get pagination() { return pagination.value },
    get columnOrder() { return columnOrder.value },
    get columnPinning() { return columnPinning.value },
    get expanded() { return expanded.value },
    get grouping() { return grouping.value },
  },

  // getters, like `data` and `columns` above: the Vue adapter reads options
  // through a lazy proxy, so a plain `x: props.x` is captured once at setup
  // and never sees the prop change — a `rowCount` arriving after a fetch, or
  // a `pageCount` recomputed for a new page size, left the table on a stale
  // count
  get enableMultiRowSelection() {
    return props.enableMultiRowSelection
  },
  get enableSubRowSelection() {
    return props.enableSubRowSelection
  },
  get autoResetAll() {
    return props.autoResetAll
  },
  get enableRowSelection() {
    return props.enableRowSelection
  },
  get enableColumnFilters() {
    return props.enableColumnFilters
  },
  get manualPagination() {
    return props.manualPagination
  },
  get manualSorting() {
    return props.manualSorting
  },
  get manualFiltering() {
    return props.manualFiltering
  },
  get globalFilterFn() {
    return props.globalFilterFn
  },
  get filterFns() {
    return props.filterFns
  },
  get pageCount() {
    return props.pageCount
  },
  get rowCount() {
    return props.rowCount
  },
  get autoResetPageIndex() {
    return props.autoResetPageIndex
  },
  get enableSorting() {
    return props.enableSorting
  },
  get enableSortingRemoval() {
    return props.enableSortingRemoval
  },
  get enableMultiSort() {
    return props.enableMultiSort
  },
  get enableMultiRemove() {
    return props.enableMultiRemove
  },
  get maxMultiSortColCount() {
    return props.maxMultiSortColCount
  },
  get sortingFns() {
    return props.sortingFns
  },
  get isMultiSortEvent() {
    return props.isMultiSortEvent
  },

  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getRowId: (row: any) => props.rowId ? row[props.rowId] : row.id,
  getSubRows: (row: any) => row.subRows,
  getExpandedRowModel: getExpandedRowModel(),

  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onGlobalFilterChange: updaterOrValue => valueUpdater(updaterOrValue, globalFilter),
  onPaginationChange: updaterOrValue => valueUpdater(updaterOrValue, pagination),
  onColumnOrderChange: updaterOrValue => valueUpdater(updaterOrValue, columnOrder),
  onColumnPinningChange: updaterOrValue => valueUpdater(updaterOrValue, columnPinning),
  onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
  onGroupingChange: updaterOrValue => valueUpdater(updaterOrValue, grouping),
})

// the seam the built-in pagination bar — and anything composed into
// `#pagination` — reads the instance through, without a template ref
provideTableContext({
  table,
  pagination: computed(() => pagination.value),
  setPageIndex: index => table.setPageIndex(index),
  setPageSize: size => table.setPageSize(size),
})

function getHeaderColumnFiltersCount(headers: Header<unknown, unknown>[]): number {
  let count = 0
  headers.forEach((header) => {
    if (header.column.columnDef.enableColumnFilter)
      count++
  })

  return count
}

function getRowAttrs(data?: TData) {
  if (typeof props._tableRow === 'function') {
    return props._tableRow(data)
  }
  return props._tableRow
}

function isReserved(column: Column<TData, any>) {
  return column.id === SELECT_COLUMN_ID || column.id === EXPAND_COLUMN_ID
}

function isSortable(column: Column<TData, any>) {
  return Boolean(
    column.columnDef.enableSorting
    || (column.columnDef.enableSorting !== false && props.enableSorting),
  )
}

function getAriaSort(column: Column<TData, any>) {
  if (!isSortable(column))
    return undefined

  const sorted = column.getIsSorted()
  return sorted === 'asc' ? 'ascending' : sorted === 'desc' ? 'descending' : 'none'
}

/**
 * `columnDef.meta` is an arbitrary user bag, so only the keys `NTable`
 * understands are read from it — the rest never reaches the DOM.
 */
function columnUna(column: Column<TData, any>) {
  return { ...props.una, ...column.columnDef.meta?.una }
}

defineExpose({
  ...table,
})
</script>

<template>
  <div
    :class="cn('table-root', props.una?.tableRoot)"
  >
    <ScrollArea
      orientation="horizontal"
      v-bind="props._scrollArea"
      :una
    >
      <table
        v-bind="$attrs"
        :class="cn(
          'table',
          props.una?.table,
          props.class,
        )"
      >
        <!-- header -->
        <TableHeader
          :una
          v-bind="props._tableHeader"
        >
          <slot name="header" :table="table">
            <TableRow
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
              :una
              v-bind="getRowAttrs()"
            >
              <!-- headers -->
              <TableHead
                v-for="header in headerGroup.headers"
                :key="header.id"
                :colspan="header.colSpan"
                :data-pinned="header.column.getIsPinned()"
                :aria-sort="getAriaSort(header.column)"
                :una="columnUna(header.column)"
                v-bind="{ ...props._tableHead, ...header.column.columnDef.meta?._tableHead }"
              >
                <TableSortButton
                  v-if="isSortable(header.column)"
                  :column="header.column"
                  :una="columnUna(header.column)"
                  v-bind="{ ...props._tableSortButton, ...header.column.columnDef.meta?._tableSortButton }"
                >
                  <slot
                    :name="`${header.id}-header`"
                    :column="header.column"
                  >
                    <FlexRender
                      v-if="!header.isPlaceholder"
                      :render="header.column.columnDef.header"
                      :props="header.getContext()"
                    />
                  </slot>
                </TableSortButton>

                <slot
                  v-else
                  :name="`${header.id}-header`"
                  :column="header.column"
                >
                  <TableSelectionHeader
                    v-if="!header.isPlaceholder && header.column.id === SELECT_COLUMN_ID && enableMultiRowSelection"
                    :table
                    :una="columnUna(header.column)"
                    v-bind="{ ...props._tableSelectionHeader, ...header.column.columnDef.meta?._tableSelectionHeader }"
                    @change="emit('selectAll', $event)"
                  />

                  <FlexRender
                    v-else-if="!header.isPlaceholder"
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </slot>
              </TableHead>
            </TableRow>

            <!-- column filters -->
            <template
              v-for="headerGroup in table.getHeaderGroups()"
              :key="headerGroup.id"
            >
              <TableRow
                v-if="getHeaderColumnFiltersCount(headerGroup.headers) > 0 || enableColumnFilters"
                data-filter="true"
                :una
                v-bind="getRowAttrs()"
              >
                <TableHead
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :colspan="header.colSpan"
                  class="font-normal"
                  :data-pinned="header.column.getIsPinned()"
                  :una="columnUna(header.column)"
                  v-bind="{ ...props._tableHead, ...header.column.columnDef.meta?._tableHead }"
                >
                  <slot
                    v-if="!isReserved(header.column) && ((header.column.columnDef.enableColumnFilter !== false && enableColumnFilters) || header.column.columnDef.enableColumnFilter)"
                    :name="`${header.id}-filter`"
                    :column="header.column"
                  >
                    <TableColumnFilter
                      :column="header.column"
                      :una="columnUna(header.column)"
                      v-bind="{ ...props._tableColumnFilter, ...header.column.columnDef.meta?._tableColumnFilter }"
                    />
                  </slot>
                </TableHead>
              </TableRow>
            </template>
          </slot>

          <TableLoading
            :enabled="props.loading"
            :colspan="table.getAllLeafColumns().length"
            :una
            v-bind="props._tableLoading"
          >
            <slot name="loading" />
          </TableLoading>
        </TableHeader>

        <!-- body -->
        <TableBody
          :una
          v-bind="props._tableBody"
        >
          <slot name="body" :table="table">
            <template v-if="table.getRowModel().rows?.length">
              <template
                v-for="row in table.getRowModel().rows"
                :key="row.id"
              >
                <TableRow
                  :data-state="row.getIsSelected() && 'selected'"
                  :una
                  v-bind="getRowAttrs(row.original)"
                  @click="emit('row', $event, row.original)"
                >
                  <slot
                    name="row"
                    :row="row"
                  >
                    <!-- rows -->
                    <TableCell
                      v-for="cell in row.getVisibleCells()"
                      :key="cell.id"
                      :data-pinned="cell.column.getIsPinned()"
                      :una="columnUna(cell.column)"
                      v-bind="{ ...props._tableCell, ...cell.column.columnDef.meta?._tableCell }"
                    >
                      <slot
                        :name="`${cell.column.id}-cell`"
                        :cell="cell"
                      >
                        <TableSelectionCell
                          v-if="cell.column.id === SELECT_COLUMN_ID"
                          :row
                          :una="columnUna(cell.column)"
                          v-bind="{ ...props._tableSelectionCell, ...cell.column.columnDef.meta?._tableSelectionCell }"
                          @change="emit('select', $event)"
                        />

                        <TableExpandButton
                          v-else-if="cell.column.id === EXPAND_COLUMN_ID"
                          :row
                          :una="columnUna(cell.column)"
                          v-bind="{ ...props._tableExpandButton, ...cell.column.columnDef.meta?._tableExpandButton }"
                          @change="emit('expand', $event)"
                        />

                        <FlexRender
                          v-else
                          :render="cell.column.columnDef.cell"
                          :props="cell.getContext()"
                        />
                      </slot>
                    </TableCell>
                  </slot>
                </TableRow>

                <!-- expanded -->
                <TableRow
                  v-if="row.getIsExpanded() && $slots.expanded"
                  :una
                  v-bind="getRowAttrs(row.original)"
                >
                  <TableCell
                    :colspan="row.getAllCells().length"
                    :una
                    v-bind="props._tableCell"
                  >
                    <slot name="expanded" :row="row" />
                  </TableCell>
                </TableRow>
              </template>
            </template>

            <TableEmpty
              v-else
              :colspan="table.getAllLeafColumns().length"
              :una
              :empty-text="props.emptyText"
              :empty-icon="props.emptyIcon"
              v-bind="props._tableEmpty"
            >
              <slot name="empty" />
            </TableEmpty>
          </slot>
        </TableBody>

        <!-- footer -->
        <TableFooter
          v-if="table.getFooterGroups().length > 0"
          :una
          v-bind="props._tableFooter"
        >
          <slot name="footer" :table="table">
            <template
              v-for="footerGroup in table.getFooterGroups()"
              :key="footerGroup.id"
            >
              <TableRow
                v-if="footerGroup.headers.length > 0"
                :una
                v-bind="getRowAttrs()"
              >
                <template
                  v-for="header in footerGroup.headers"
                  :key="header.id"
                >
                  <TableHead
                    v-if="header.column.columnDef.footer"
                    :colspan="header.colSpan"
                    :una="columnUna(header.column)"
                    v-bind="{ ...props._tableHead, ...header.column.columnDef.meta?._tableHead }"
                  >
                    <slot :name="`${header.id}-footer`" :column="header.column">
                      <FlexRender
                        v-if="!header.isPlaceholder"
                        :render="header.column.columnDef.footer"
                        :props="header.getContext()"
                      />
                    </slot>
                  </TableHead>
                </template>
              </TableRow>
            </template>
          </slot>
        </TableFooter>
      </table>
    </ScrollArea>
  </div>

  <!-- pagination bar: a sibling below the root, where shadcn's
       DataTablePagination sits relative to the bordered table -->
  <slot
    v-if="showPagination || $slots.pagination"
    name="pagination"
    :table="table"
    :pagination="pagination"
  >
    <TablePagination
      :una
      v-bind="props._tablePagination"
    />
  </slot>
</template>
