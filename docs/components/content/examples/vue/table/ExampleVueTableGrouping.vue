<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
import { makeData } from './makeData'

const data = ref(makeData(5))

const columns: ColumnDef<Person>[] = [
  {
    header: 'Name',
    enableSorting: false,
    columns: [
      {
        header: 'First Name',
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
      },
    ],
  },
  {
    header: 'Info',
    columns: [
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
    ],
  },
]

const sorting = ref()
</script>

<template>
  <NTable
    v-model:sorting="sorting"
    :columns
    :data
  />
</template>
