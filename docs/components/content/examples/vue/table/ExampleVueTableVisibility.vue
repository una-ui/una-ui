<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import makeData from './makeData'
import type { Person } from './makeData'

const data = ref(makeData(5))

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

const table = ref<Table<Person>>()

const columnVisibility = ref({})
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-4">
      <NCheckbox
        v-for="tableColumn in table?.getAllLeafColumns()"
        :key="tableColumn.id"
        :model-value="tableColumn.getIsVisible()"
        :label="tableColumn.id"
        @update:model-value="tableColumn.toggleVisibility()"
      />
    </div>

    <NSeparator />

    <NTable
      ref="table"
      v-model:columnVisibility="columnVisibility"
      :columns
      :data
    />
  </div>
</template>
