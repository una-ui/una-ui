<script setup lang="ts" generic="T">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'

import type {
  ColumnDef,
  GroupColumnDef,
  SortingState,
} from '@tanstack/vue-table'

import {
  FlexRender,
  getCoreRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

import { cn, valueUpdater } from '../../utils'

import Checkbox from '../forms/Checkbox.vue'
import Button from '../elements/Button.vue'
import TableBody from './TableBody.vue'
import TableCell from './TableCell.vue'
import TableHeader from './TableHeader.vue'
import TableHead from './TableHead.vue'
import TableFooter from './TableFooter.vue'
import TableRow from './TableRow.vue'
import TableEmpty from './TableEmpty.vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  modelValue: T[]
  columns: ColumnDef<T, any>[] | GroupColumnDef<T, unknown>[]
  autoResetAll?: boolean
  enableRowSelection?: boolean
}>()

const sorting = defineModel<SortingState>('sorting')
const rowSelection = defineModel<Record<string, boolean>>('rowSelection')

const table = computed(() => {
  return useVueTable({
    get data() {
      return props.modelValue
    },
    columns: props.columns,
    autoResetAll: props.autoResetAll,
    enableRowSelection: props.enableRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
    onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
    state: {
      get sorting() { return sorting.value },
      get rowSelection() { return rowSelection.value },
    },
  })
})

/**
 * @name NTable
 *
 * @todo
 * - [x] Add basic table
 * - [ ] Add row selection
 * - [x] Add sortable
 * - [ ] Add table presets
 * - [ ] Add dynamic colors
 * - [ ] Add dynamic sizes
 * - [ ] Add table slots
 * - [ ] Add table props
 * - [ ] Add table documentation
 *     - [ ] Add table markdown
 *     - [ ] Add t  able examples
 */
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table
      :class="cn('w-full caption-bottom text-sm', props.class)"
    >
      <!-- header -->
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <!-- row-selection -->
          <TableHead
            v-if="enableRowSelection"
          >
            <Checkbox
              :model-value="table.getIsAllPageRowsSelected()"
              @change=" (value: boolean) => table.toggleAllPageRowsSelected(!!value)"
            />
          </TableHead>

          <!-- headers -->
          <TableHead
            v-for="header in headerGroup.headers"
            :key="header.id"
            :colspan="header.colSpan"
          >
            <div class="-mx-0.7142857142857143em">
              <Button
                v-if="header.column.columnDef.enableSorting"
                btn="ghost-gray"
                class="text-base"
                :trailing="header.column.getIsSorted() === 'asc'
                  ? 'i-lucide-arrow-up-wide-narrow' : header.column.getIsSorted() === 'desc'
                    ? 'i-lucide-arrow-down-narrow-wide' : 'i-lucide-arrow-up-down'"
                @click="header.column.toggleSorting()"
              >
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </Button>
              <NButton
                v-else
                btn="~"
                class="text-base"
              >
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </NButton>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>

      <!-- body -->
      <TableBody>
        <template v-if="table.getRowModel().rows?.length">
          <TableRow
            v-for="row in table.getRowModel().rows" :key="row.id"
          >
            <!-- row-selection -->
            <TableCell
              v-if="enableRowSelection"
            >
              <Checkbox
                :model-value="row.getIsSelected()"
                @change="(value: boolean) => row.toggleSelected(!!value)"
              />
            </TableCell>

            <!-- rows -->
            <TableCell
              v-for="cell in row.getVisibleCells()" :key="cell.id"
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
    </table>
  </div>
</template>
