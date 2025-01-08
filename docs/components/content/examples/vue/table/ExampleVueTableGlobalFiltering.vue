<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import type { Person } from './makeData'
import makeData from './makeData'

const data = ref(makeData(10))

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

const search = ref('')
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <NInput
        v-model="search"
        placeholder="Search"
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <NButton
        label="Add new"
        disabled
        leading="i-radix-icons-plus"
        class="w-full md:w-auto"
      />
    </div>

    <NTable
      :columns
      :global-filter="search"
      :data
    />
  </div>
</template>
