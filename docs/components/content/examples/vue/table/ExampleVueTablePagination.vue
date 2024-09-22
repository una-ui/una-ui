<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(100))

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

const table = ref<Table<Person>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <!-- table -->
    <NTable
      ref="table"
      v-model:pagination="pagination"
      :columns
      :data
    />

    <!-- pagination -->
    <div
      class="flex items-center justify-between px-2"
    >
      <div
        class="flex items-center justify-center text-sm font-medium"
      >
        Page {{ (table?.getState().pagination.pageIndex ?? 0) + 1 }} of
        {{ table?.getPageCount().toLocaleString() }}
      </div>
      <div class="flex items-center space-x-2">
        <NButton
          btn="solid-white"
          square
          icon
          label="i-radix-icons-double-arrow-left"
          :disabled="!table?.getCanPreviousPage()"
          @click="table?.setPageIndex(0)"
        />
        <NButton
          btn="solid-white"
          square
          icon
          label="i-radix-icons-chevron-left"
          :disabled="!table?.getCanPreviousPage()"
          @click="table?.previousPage()"
        />
        <NButton
          btn="solid-white"
          square
          icon
          label="i-radix-icons-chevron-right"
          :disabled="!table?.getCanNextPage()"
          @click="table?.nextPage()"
        />
        <NButton
          btn="solid-white"
          square
          icon
          label="i-radix-icons-double-arrow-right"
          :disabled="!table?.getCanNextPage()"
          @click="table?.setPageIndex(table.getPageCount() - 1)"
        />
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
