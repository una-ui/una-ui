<script setup lang="ts" generic="TData, TValue">
import type { HTMLAttributes, Ref } from 'vue'
import { computed, h } from 'vue'
import type {
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  GroupColumnDef,
  Header,
  PaginationState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'

import {
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,

  useVueTable,
} from '@tanstack/vue-table'

import { cn, valueUpdater } from '../../../utils'

import Checkbox from '../../forms/Checkbox.vue'
import Button from '../../elements/Button.vue'
import Input from '../../forms/Input.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableEmpty from './TableEmpty.vue'
import TableFooter from './TableFooter.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableRoot from './TableRoot.vue'
import TableRow from './TableRow.vue'

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  rows: TData[]
  rowId?: string
  columns: ColumnDef<TData, TValue>[] | GroupColumnDef<TData, TValue>[]
  autoResetAll?: boolean
  enableRowSelection?: boolean
  enableMultiRowSelection?: boolean
  enableSubRowSelection?: boolean
  enableColumnFilters?: boolean
  enableSorting?: boolean
  manualPagination?: boolean
  manualSorting?: boolean
  pageCount?: number
  rowCount?: number
  una?: {
    tableRoot?: string
    tableRootWrapper?: string
  }
}>(), {
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
                'modelValue': table.getIsAllPageRowsSelected() ?? false,
                'onUpdate:modelValue': (value: boolean) => {
                  table.toggleAllPageRowsSelected(!!value)
                  emit('selectAll', table.getRowModel().rows)
                },
                'areaLabel': 'Select all rows',
                'id': 'selection',
              })
            : '',
          cell: ({ row }: any) => h(Checkbox, {
            'modelValue': row.getIsSelected() ?? false,
            'onUpdate:modelValue': (value: boolean) => {
              row.toggleSelected(!!value)
              emit('select', row)
            },
            'areaLabel': 'Select row',
            'id': row.id,
          }),
          enableSorting: false,
        },
        ...props.columns,
      ]
    : props.columns

  // add expanded column
  data = slots.expanded
    ? [
        ...data,
        {
          accessorKey: 'expanded',
          header: '',
          cell: ({ row }: any) => h(Button, {
            size: 'xs',
            icon: true,
            label: 'i-radix-icons-chevron-down',
            onClick: () => {
              row.toggleExpanded()
              emit('expand', row)
            },
            una: {
              btnDefaultVariant: 'btn-ghost-gray btn-square',
              btnIconLabel: cn(
                'transform transition-transform duration-200',
                row.getIsExpanded() ? 'rotate-180' : 'rotate-0',
              ),
            },
          }),
          enableSorting: false,
        },
      ]
    : data

  return data
})

const table = computed(() => {
  return useVueTable({
    get data() {
      return props.rows ?? []
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
    enableSorting: props.enableSorting,

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
  })
}) as Ref<ReturnType<typeof useVueTable>>

function getHeaderColumnFiltersCount(headers: Header<unknown, unknown>[]) {
  let count = 0
  headers.forEach((header) => {
    if (header.column.columnDef.enableColumnFilter)
      count++
  })

  return count
}

defineExpose({
  ...table.value,
})
</script>

<template>
  <TableRoot
    :una
  >
    <!-- header -->
    <TableHeader>
      <TableRow
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <!-- headers -->
        <TableHead
          v-for="header in headerGroup.headers"
          :key="header.id"
          :colspan="header.colSpan"
          :data-pinned="header.column.getIsPinned()"
          :class="cn(
            { 'sticky bg-base': header.column.getIsPinned() },
            header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
          )"
        >
          <Button
            v-if="header.column.columnDef.enableSorting !== false && enableSorting"
            btn="ghost-gray"
            size="sm"
            class="font-normal -ml-0.85em"
            :una="{
              btnTrailing: 'text-sm',
            }"
            :trailing="header.column.getIsSorted() === 'asc'
              ? 'i-lucide-arrow-up-wide-narrow' : header.column.getIsSorted() === 'desc'
                ? 'i-lucide-arrow-down-narrow-wide' : 'i-lucide-arrow-up-down'"
            @click="header.column.toggleSorting(header.column.getIsSorted() === 'asc')"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </Button>
          <component
            :is="header.id === 'selection' ? 'div' : 'span'"
            v-else
            class="text-sm text-muted"
          >
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </component>
        </TableHead>
      </TableRow>
      <template
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <TableRow
          v-if="getHeaderColumnFiltersCount(headerGroup.headers) > 0 || enableColumnFilters"
          class="hover:bg-base"
        >
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
            :data-pinned="header.column.getIsPinned()"
            :class="cn(
              { 'sticky bg-base': header.column.getIsPinned() },
              header.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
            )"
          >
            <Input
              v-if="header.id !== 'selection' && ((header.column.columnDef.enableColumnFilter !== false && enableColumnFilters) || header.column.columnDef.enableColumnFilter)"
              class="w-auto"
              :model-value="table.getColumn(header.id)?.getFilterValue() as string"
              :placeholder="header.column.columnDef.header as string"
              @update:model-value="table.getColumn(header.id)?.setFilterValue($event)"
            />
          </TableHead>
        </TableRow>
      </template>
    </TableHeader>

    <!-- body -->
    <TableBody>
      <template v-if="table.getRowModel().rows?.length">
        <template
          v-for="row in table.getRowModel().rows" :key="row[props.rowId]"
        >
          <TableRow
            :data-state="row.getIsSelected() && 'selected'"
          >
            <!-- rows -->
            <TableCell
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              :data-pinned="cell.column.getIsPinned()"
              :class="cn(
                { 'sticky bg-base': cell.column.getIsPinned() },
                cell.column.getIsPinned() === 'left' ? 'left-0' : 'right-0',
              )"
            >
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>

          <!-- expanded -->
          <TableRow
            v-if="row.getIsExpanded() && $slots.expanded"
          >
            <TableCell :colspan="row.getAllCells().length">
              <slot name="expanded" :row="row" />
            </TableCell>
          </TableRow>
        </template>
      </template>

      <TableEmpty
        v-else
        :colspan="table?.getAllLeafColumns()?.length"
      >
        No results.
      </TableEmpty>
    </TableBody>

    <!-- footer -->
    <TableFooter>
      <template
        v-for="footerGroup in table.getFooterGroups()"
        :key="footerGroup.id"
      >
        <TableRow
          v-if="footerGroup.headers.length"
        >
          <template
            v-for="header in footerGroup.headers"
            :key="header.id"
          >
            <TableHead
              v-if="header.column.columnDef.footer"
              :colspan="header.colSpan"
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.footer"
                :props="header.getContext()"
              />
            </TableHead>
          </template>
        </TableRow>
      </template>
    </TableFooter>
  </TableRoot>
</template>.
