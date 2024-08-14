<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import { faker } from '@faker-js/faker'
import makeData from './makeData'
import type { Person } from './makeData'

const rows = ref(makeData(5))

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

const table = ref<Table<Person>>()

function randomizeColumns() {
  table.value?.setColumnOrder(faker.helpers.shuffle(table.value?.getAllLeafColumns().map(d => d.id)))
}
</script>

<template>
  <NButton
    label="Randomize columns"
    leading="i-radix-icons-shuffle"
    @click="randomizeColumns"
  />

  <!-- table -->
  <div class="mt-4 border border-base rounded-md">
    <NTable
      ref="table"
      :columns
      :rows
    />
  </div>
</template>
