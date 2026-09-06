<script setup lang="ts">
import type { ColumnDef, RowSelectionState, Table } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(10))

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

const select = ref<RowSelectionState>()
const table = useTemplateRef<Table<Person>>('table')
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NTable
      ref="table"
      v-model:row-selection="select"
      :columns
      :data
      enable-row-selection
    />

    <div
      class="flex items-center justify-between px-2"
    >
      <div
        class="flex-1 text-sm text-muted-foreground"
      >
        {{ table?.getFilteredSelectedRowModel().rows.length }} of
        {{ table?.getFilteredRowModel().rows.length }} row(s) selected.
      </div>
    </div>
  </div>
</template>
