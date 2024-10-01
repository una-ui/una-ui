<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(5))

const columns: ColumnDef<Person>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
    meta: {
      una: {
        tableHead: 'text-left bg-primary-700 text-white',
        tableCell: 'text-left bg-primary-700 text-white',
      },
    },
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    meta: {
      una: {
        tableHead: 'text-left bg-primary-700 text-white',
        tableCell: 'text-left bg-primary-700 text-white',
      },
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
    meta: {
      una: {
        tableHead: 'text-center',
        tableCell: 'text-center',
      },
    },
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
</script>

<template>
  <NTable
    :columns
    :data
    :column-pinning="{
      left: ['firstName', 'lastName'],
    }"
    :una="{
      tableHead: 'text-right',
      tableCell: 'text-right',
    }"
  />
</template>
