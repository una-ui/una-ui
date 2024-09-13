<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
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

const loading = ref(true)
</script>

<template>
  <div class="flex flex-col space-y-2">
    <NCheckbox
      v-model:checked="loading"
      label="Loading"
    />

    <NTable
      :loading
      :columns
      :data
    />
  </div>
</template>
