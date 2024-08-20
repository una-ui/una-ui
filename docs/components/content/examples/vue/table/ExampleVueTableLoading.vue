<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
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

const loading = ref(true)
</script>

<template>
  <div class="flex flex-col space-y-2">
    <NCheckbox
      v-model="loading"
      label="Loading"
    />

    <div class="border border-base rounded-md">
      <NTable
        :loading
        :columns
        :data
      />
    </div>
  </div>
</template>
