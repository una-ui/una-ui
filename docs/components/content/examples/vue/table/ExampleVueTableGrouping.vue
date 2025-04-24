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
        header: 'Progress',
        accessorKey: 'progress',
      },
    ],
  },
]

const grouping = ref([
  'status',
  'progress',
  'firstName',
  'lastName',
  'age',
  'visits',
])
</script>

<template>
  <NTable
    v-model:grouping="grouping"
    manual-grouping
    :columns
    :data
  />
</template>
