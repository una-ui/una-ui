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
        tableHead: 'text-left',
        tableCell: 'text-left',
      },
    },
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    meta: {
      una: {
        tableHead: 'text-left',
        tableCell: 'text-left',
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
    :una="{
      tableHead: 'text-right',
      tableCell: 'text-right',
    }"
  />
</template>
