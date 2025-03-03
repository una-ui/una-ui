<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  GroupingState,
  Header,
  PaginationState,
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

import { computed, h } from 'vue'

import { cn, valueUpdater } from '../../../utils'
import Button from '../../elements/Button.vue'
import Checkbox from '../../forms/Checkbox.vue'
import Input from '../../forms/Input.vue'
import ScrollArea from '../../scroll-area/ScrollArea.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableEmpty from './TableEmpty.vue'
import TableFooter from './TableFooter.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableLoading from './TableLoading.vue'
import TableRow from './TableRow.vue'

const props = withDefaults(defineProps <NTableProps<TData, TValue>>(), {
  enableMultiRowSelection: true,
})

const emit = defineEmits(['select', 'selectAll', 'expand'])

const slots = defineSlots()

const rowSelection = defineModel<Record<string, boolean>>('modelValue')
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
  let data = []

  // add selection column
  data = props.enableRowSelection
    ? [
        {
          accessorKey: 'selection',
          header: props.enableMultiRowSelection
            ? ({ table }: any) => h(Checkbox, {
                'modelValue': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
                'onUpdate:modelValue': (value: boolean | 'indeterminate' | null) => {
                  table.toggleAllPageRowsSelected(!!value)
                  emit('selectAll', table.getRowModel().rows)
                },
                'areaLabel': 'Select all rows',
              })
            : '',
          cell: ({ row }: any) => h(Checkbox, {
            'modelValue': row.getIsSelected() ?? false,
            'onUpdate:modelValue': (value: boolean | 'indeterminate' | null) => {
              row.toggleSelected(!!value)
              emit('select', row)
            },
            'areaLabel': 'Select row',
          }),
          enableSorting: false,
          enableHiding: false,
        },
        ...props.columns,
      ]
    : props.columns

  // add expanded column
  data = slots.expanded
    ? [
        {
          accessorKey: 'expanded',
          header: '',
          cell: ({ row }: any) => h(Button, {
            size: 'xs',
            icon: true,
            square: true,
            btn: 'ghost-gray',
            label: 'i-radix-icons-chevron-down',
            onClick: () => {
              row.toggleExpanded()
              emit('expand', row)
            },
            una: {
              btnIconLabel: cn(
                'transform transition-transform duration-200',
                row.getIsExpanded() ? '-rotate-180' : 'rotate-0',
              ),
            },
          }),
          enableSorting: false,
          enableHiding: false,
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

  enableMultiRowSelection: props.enableMultiRowSelection,
  enableSubRowSelection: props.enableSubRowSelection,
  autoResetAll: props.autoResetAll,
  enableRowSelection: props.enableRowSelection,
  enableColumnFilters: props.enableColumnFilters,
  manualPagination: props.manualPagination,
  manualSorting: props.manualSorting,
  pageCount: props.pageCount,
  rowCount: props.rowCount,
  autoResetPageIndex: props.autoResetPageIndex,
  enableSorting: props.enableSorting,
  enableSortingRemoval: props.enableSortingRemoval,
  enableMultiSort: props.enableMultiSort,
  enableMultiRemove: props.enableMultiRemove,
  maxMultiSortColCount: props.maxMultiSortColCount,
  sortingFns: props.sortingFns,
  isMultiSortEvent: props.isMultiSortEvent,

  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getRowId: (row: any) => props.rowId ? row[props.rowId] : row.id,
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

function getHeaderColumnFiltersCount(headers: Header<unknown, unknown>[]): number {
  let count = 0
  headers.forEach((header) => {
    if (header.column.columnDef.enableColumnFilter)
      count++
  })

  return count
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
              v-bind="props._tableRow"
            >
              <!-- headers -->
              <TableHead
                v-for="header in headerGroup.headers"
                :key="header.id"
                :colspan="header.colSpan"
                :data-pinned="header.column.getIsPinned()"
                :una
                v-bind="{ ...props._tableHead, ...header.column.columnDef.meta }"
              >
                <Button
                  v-if="header.column.columnDef.enableSorting || (header.column.columnDef.enableSorting !== false && enableSorting)"
                  btn="ghost-gray"
                  size="sm"
                  class="font-normal -ml-1em"
                  :una="{
                    btnTrailing: 'text-sm',
                  }"
                  :trailing="header.column.getIsSorted() === 'asc'
                    ? 'i-lucide-arrow-up-wide-narrow' : header.column.getIsSorted() === 'desc'
                      ? 'i-lucide-arrow-down-narrow-wide' : 'i-lucide-arrow-up-down'"
                  @click="header.column.toggleSorting(
                    header.column.getIsSorted() === 'asc' ? undefined : header.column.getIsSorted() !== 'desc',
                    enableMultiSort,
                  )"
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
                </Button>

                <slot
                  v-else
                  :name="`${header.id}-header`"
                  :column="header.column"
                >
                  <FlexRender
                    v-if="!header.isPlaceholder"
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
                v-bind="props._tableRow"
              >
                <TableHead
                  v-for="header in headerGroup.headers"
                  :key="header.id"
                  :una
                  :colspan="header.colSpan"
                  :data-pinned="header.column.getIsPinned()"
                  v-bind="{ ...props._tableHead, ...header.column.columnDef.meta }"
                >
                  <slot
                    v-if="header.id !== 'selection' && ((header.column.columnDef.enableColumnFilter !== false && enableColumnFilters) || header.column.columnDef.enableColumnFilter)"
                    :name="`${header.id}-filter`"
                    :column="header.column"
                  >
                    <Input
                      class="w-auto"
                      :model-value="header.column.getFilterValue() as string"
                      :placeholder="header.column.columnDef.header"
                      @update:model-value="header.column.setFilterValue($event)"
                    />
                  </slot>
                </TableHead>
              </TableRow>
            </template>
          </slot>

          <TableLoading
            :enabled="props.loading"
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
                  v-bind="props._tableRow"
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
                      :una
                      v-bind="{ ...props._tableCell, ...cell.column.columnDef.meta }"
                    >
                      <slot
                        :name="`${cell.column.id}-cell`"
                        :cell="cell"
                      >
                        <FlexRender
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
                  v-bind="props._tableRow"
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
                v-bind="props._tableRow"
              >
                <template
                  v-for="header in footerGroup.headers"
                  :key="header.id"
                >
                  <TableHead
                    v-if="header.column.columnDef.footer"
                    :colspan="header.colSpan"
                    :una
                    v-bind="{ ...props._tableHead, ...header.column.columnDef.meta }"
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
</template>
