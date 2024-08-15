<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
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
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Visits',
    accessorKey: 'visits',
    enableColumnFilter: false,
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
      enable-column-filters
      :rows
    >
      <template #status-filter="{ column }">
        <NSelect
          :items="['Relationship', 'Complicated', 'Single']"
          placeholder="All"
          :model-value="column.getFilterValue()"
          @update:model-value="column?.setFilterValue($event)"
        />
      </template>
    </NTable>
  </div>
</template>
