<script setup lang="ts">
import type { HTMLAttributes, Ref } from 'vue'
import { computed, h } from 'vue'
import type {
  ColumnDef,
  ColumnFiltersState,
  ColumnPinningState,
  GroupColumnDef,
  Header,
  PaginationState,
  SortingState,
  VisibilityState,
} from '@tanstack/vue-table'

import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

import { cn, valueUpdater } from '../../../utils'

import Checkbox from '../../forms/Checkbox.vue'
import Button from '../../elements/Button.vue'
import Input from '../../forms/Input.vue'
import { TableBody, TableCell, TableEmpty, TableFooter, TableHead, TableHeader, TableRoot, TableRow } from '.'

const props = defineProps<{
  class?: HTMLAttributes['class']
  rows: any[] | null
  columns: ColumnDef<any, unknown>[] | GroupColumnDef<any, unknown>[]
  autoResetAll?: boolean
  enableRowSelection?: boolean
  enableColumnFilters?: boolean
  enableSorting?: boolean
  columnPinning?: ColumnPinningState
  manualPagination?: boolean
  manualSorting?: boolean
  pageCount?: number
  rowCount?: number
  una?: {
    tableRoot?: string
    tableRootWrapper?: string
  }
}>()

const emit = defineEmits(['select', 'selectAll'])

const rowSelection = defineModel<Record<string, boolean>>('modelValue')
const sorting = defineModel<SortingState>('sorting')
const columnVisibility = defineModel<VisibilityState>('columnVisibility')
const columnFilters = defineModel<ColumnFiltersState>('columnFilters')
const globalFilter = defineModel<string>('globalFilter')
const pagination = defineModel<PaginationState>('pagination', {
  default: () => ({
    pageIndex: 0,
    pageSize: 10,
  }),
})

const columns = computed(() => {
  return props.enableRowSelection
    ? [
        {
          accessorKey: 'selection',
          header: ({ table }: any) => h(Checkbox, {
            'modelValue': table.getIsAllPageRowsSelected() ?? false,
            'onUpdate:modelValue': (value: boolean) => {
              table.toggleAllPageRowsSelected(!!value)
              emit('selectAll', table.getRowModel().rows)
            },
            'areaLabel': 'Select all rows',
            'id': 'selection',
          }),
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
})

const table = computed(() => {
  return useVueTable({
    get data() {
      return props.rows ?? []
    },

    columns: columns.value,
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

    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
    onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
    onGlobalFilterChange: updaterOrValue => valueUpdater(updaterOrValue, globalFilter),
    onPaginationChange: updaterOrValue => valueUpdater(updaterOrValue, pagination),

    state: {
      get sorting() { return sorting.value },
      get columnFilters() { return columnFilters.value },
      get globalFilter() { return globalFilter.value },
      get rowSelection() { return rowSelection.value },
      get columnVisibility() { return columnVisibility.value },
      get pagination() { return pagination.value },
      columnPinning: props.columnPinning,
    },
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
            class="font-normal -ml-0.7em"
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
          v-if="getHeaderColumnFiltersCount(headerGroup.headers) > 0"
          class="hover:bg-base"
        >
          <template
            v-for="header in headerGroup.headers"
            :key="header.id"
          >
            <TableHead
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
          </template>
        </TableRow>
      </template>
    </TableHeader>

    <!-- body -->
    <TableBody>
      <template v-if="table.getRowModel().rows?.length">
        <TableRow
          v-for="row in table.getRowModel().rows" :key="row.id"
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
</template>
