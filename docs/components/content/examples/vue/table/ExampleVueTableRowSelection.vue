<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import makeData from './makeData'
import type { Person } from './makeData'

const rows = ref(makeData(10))

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
    header: () => 'Age',
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

const select = ref()
const table = ref<Table<Person>>()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="border border-base rounded-md">
      <NTable
        ref="table"
        v-model="select"
        :columns
        :rows
        enable-row-selection
      />
    </div>

    <div
      class="flex items-center justify-between px-2"
    >
      <div
        class="flex-1 text-sm text-muted"
      >
        {{ table?.getFilteredSelectedRowModel().rows.length }} of
        {{ table?.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
    </div>
  </div>
</template>
