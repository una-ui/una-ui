<script setup lang="ts">
import type { ColumnDef, Table } from '@tanstack/vue-table'
import type { Person } from './makeData'
import { faker } from '@faker-js/faker'
import makeData from './makeData'

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

const table = useTemplateRef<Table<Person>>('table')

function randomizeColumns() {
  table.value?.setColumnOrder(faker.helpers.shuffle(table.value?.getAllLeafColumns().map(d => d.id)))
}
</script>

<template>
  <div class="flex justify-end">
    <NButton
      label="Randomize columns"
      class="mb-4"
      @click="randomizeColumns"
    />
  </div>

  <!-- table -->
  <NTable
    ref="table"
    :columns
    :data
  />
</template>
