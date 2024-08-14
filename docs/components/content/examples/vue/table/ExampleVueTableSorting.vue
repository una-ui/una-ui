<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
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
    enableSorting: false,
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
  <div class="border border-base rounded-md">
    <NTable
      :columns
      :rows
      enable-sorting
    />
  </div>
</template>
