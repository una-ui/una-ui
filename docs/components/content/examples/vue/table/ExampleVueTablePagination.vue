<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(50))

const columns: ColumnDef<Person>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
  {
    header: 'Profile Progress',
    accessorKey: 'progress',
  },
]

const pagination = ref({
  pageSize: 5,
  pageIndex: 0,
})

const table = useTemplateRef<Table<Person>>('table')
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- table -->
    <NTable
      ref="table"
      :pagination="pagination"
      :columns
      :data
    />

    <!-- pagination -->
    <div
      class="flex flex-wrap items-center justify-between gap-4 overflow-auto px-2"
    >
      <div
        class="flex items-center justify-center text-sm font-medium"
      >
        Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
        {{ table?.getPageCount().toLocaleString() }}
      </div>

      <NPagination
        :page="(table?.getState().pagination.pageIndex ?? 0) + 1"
        :total="table?.getFilteredRowModel().rows.length"
        show-edges
        :items-per-page="table?.getState().pagination.pageSize"
        @update:page="table?.setPageIndex($event - 1)"
      />
    </div>
  </div>
</template>
